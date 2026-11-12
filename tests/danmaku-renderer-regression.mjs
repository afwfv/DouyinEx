import assert from 'node:assert/strict';
import vm from 'node:vm';
import { source, workerSource } from './load.mjs';

const text = source(process.argv[2]);
const worker = workerSource(text).code;
const results = [];
function test(name, fn) {
  try { results.push({ name, pass: true, observed: fn() }); }
  catch (error) { results.push({ name, pass: false, error: error.stack }); }
}

function rendererTypes() {
  const start = worker.indexOf('var b=class'), end = worker.indexOf(';var l=self', start);
  assert.ok(start >= 0 && end > start, 'Renderer module not found');
  const calls = [];
  function context() {
    return {
      font: '', textBaseline: '', fillStyle: '', strokeStyle: '', lineWidth: 0, lineJoin: '',
      shadowColor: '', shadowBlur: 0, shadowOffsetY: 0, globalAlpha: 1, letterSpacing: '0px',
      setTransform() {}, clearRect() {}, scale() {}, save() {}, restore() {},
      createLinearGradient() { return { addColorStop() {} }; },
      strokeText() {}, fillText() {}, measureText(value) { return { width: String(value).length * 10 }; },
      drawImage(...args) { calls.push(args); },
      beginPath() {}, rect() {}, fill() {}, stroke() {}
    };
  }
  class OffscreenCanvas {
    constructor(width, height) { this.width = width; this.height = height; this.ctx = context(); }
    getContext() { return this.ctx; }
  }
  const canvas = { width: 0, height: 0, ctx: context(), getContext() { return this.ctx; } };
  const types = vm.runInNewContext(`${worker.slice(start, end)};({ k });`, {
    OffscreenCanvas,
    AbortController,
    fetch: () => new Promise(() => {}),
    console
  });
  return { Renderer: types.k, canvas, calls };
}

test('cached-text-is-snapped-to-physical-pixels', () => {
  const { Renderer, canvas, calls } = rendererTypes();
  const renderer = new Renderer(canvas, { cacheBytes: 1e6, fontSize: 20, lineHeight: 36, opacity: 1 }, 2);
  const item = { x: 10.26, lane: 1, width: 100, message: { id: 'a', segments: [{ type: 'text', text: 'hello' }] } };
  renderer.drawItem(item);
  assert.equal(calls.length, 1);
  assert.equal(calls[0][1], 10.5, `Expected physical-pixel x=10.5, got ${calls[0][1]}`);
  return { inputX: item.x, dpr: 2, renderedX: calls[0][1] };
});

test('unrelated-emoji-load-does-not-invalidate-text-sprites', () => {
  const { Renderer, canvas } = rendererTypes();
  const renderer = new Renderer(canvas, { cacheBytes: 1e6, fontSize: 20, lineHeight: 36, opacity: 1 }, 1);
  const item = { x: 20, lane: 0, width: 100, message: { id: 'text', segments: [{ type: 'text', text: 'plain' }] } };
  renderer.drawItem(item);
  const key = item.spriteKey, misses = renderer.misses;
  renderer.images.set('unrelated', { close() {} }, 4);
  renderer.revision++;
  renderer.drawItem(item);
  assert.equal(item.spriteKey, key);
  assert.equal(renderer.misses, misses, 'Text sprite was rebuilt after an unrelated emoji load');
  return { sameSprite: true, cacheMisses: renderer.misses };
});

test('emoji-sprite-changes-only-when-its-own-image-arrives', () => {
  const { Renderer, canvas } = rendererTypes();
  const renderer = new Renderer(canvas, { cacheBytes: 1e6, fontSize: 20, lineHeight: 36, opacity: 1 }, 1);
  const item = { x: 20, lane: 0, width: 100, message: { id: 'emoji', segments: [{ type: 'emoji', text: '[微笑]', url: 'needed' }] } };
  renderer.drawItem(item);
  const before = item.spriteKey;
  renderer.images.set('unrelated', { close() {} }, 4);
  renderer.drawItem(item);
  assert.equal(item.spriteKey, before, 'Unrelated image changed the emoji sprite');
  renderer.images.set('needed', { close() {} }, 4);
  renderer.revision++;
  renderer.drawItem(item);
  assert.notEqual(item.spriteKey, before, 'Own image did not invalidate the fallback sprite');
  return { unrelatedKept: true, ownImageRefreshed: true };
});

test('fractional-player-geometry-does-not-reset-canvas', () => {
  const start = text.indexOf('    measure = () => {'), end = text.indexOf('    async start(', start);
  assert.ok(start >= 0 && end > start, 'Lifecycle measure method not found');
  const method = text.slice(start, end).replace('measure = () => {', 'this.measure = () => {');
  const create = new Function('window', 'containedVideoRect', `return function(player, ui, engine) {
    this.live = { player }; this.ui = ui; this.engine = engine; this.selection = null;
    this.layout = { left: 0, top: 0, width: 1, height: 1, dpr: 1 };
    ${method}
  };`);
  const playerRect = { left: 10.2, top: 20.2, width: 800.2, height: 450.2 };
  const player = { getBoundingClientRect: () => playerRect, querySelector: () => null };
  const bounds = [], resizes = [];
  const ui = { setBounds: (...args) => bounds.push(args) };
  const engine = { resize: (...args) => resizes.push(args) };
  const window = { devicePixelRatio: 1 };
  const controller = new (create(window, box => box))(player, ui, engine);
  controller.measure();
  assert.equal(resizes.length, 1);
  playerRect.width = 800.4; playerRect.height = 450.4; playerRect.left = 10.4;
  controller.measure();
  assert.equal(resizes.length, 1, 'Subpixel geometry reset the canvas');
  playerRect.width = 802.4;
  controller.measure();
  assert.equal(resizes.length, 2, 'Real size change did not resize the canvas');
  return { resizes: resizes.length, bounds };
});

const passed = results.filter(result => result.pass).length;
console.log(JSON.stringify({ passed, failed: results.length - passed, results }, null, 2));
if (passed !== results.length) process.exitCode = 1;
