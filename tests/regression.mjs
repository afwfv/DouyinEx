import assert from "node:assert/strict";
import { source, modelTypes, moduleType } from "./load.mjs";

const text = source(process.argv[2]);
const results = [];
function test(name, run) {
  try { results.push({ name, pass: true, observed: run() }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
}

test("idle-frame-avoids-unneeded-scans", () => {
  const { M } = modelTypes(text);
  const model = new M(1920, 1080, () => 72);
  model.active = Array.from({ length: 120 }, (_, i) => ({
    message: { id: String(i), roomId: "room" }, x: 200 + i * 4, width: 72, lane: i % 18
  }));
  let laneReads = 0, findCalls = 0;
  const lanes = Object.getOwnPropertyDescriptor(M.prototype, "lanes").get;
  Object.defineProperty(model, "lanes", { get() { laneReads++; return lanes.call(this); } });
  model.active.find = function (...args) { findCalls++; return Array.prototype.find.apply(this, args); };
  model.tick(1000);
  assert.equal(model.stats.active, 120);
  assert.equal(laneReads + findCalls, 0, `unneeded scans: laneReads=${laneReads}, findCalls=${findCalls}`);
  return { active: model.stats.active, laneReads, findCalls };
});

function environment(cssSupported) {
  const timers = new Map();
  let nextTimer = 0;
  const mount = { append(style) { style.isConnected = true; } };
  const document = {
    head: mount, documentElement: mount,
    createElement() { return { isConnected: false, disabled: false, remove() { this.isConnected = false; } }; },
    getElementById() { return chat; },
    querySelector() { return null; }, querySelectorAll() { return []; }
  };
  const chat = { querySelector() { return null; }, querySelectorAll() { return []; } };
  class MutationObserver {
    observing = false;
    observe() { this.observing = true; }
    disconnect() { this.observing = false; }
  }
  const globals = {
    document, window: { CSS: { supports() { return cssSupported; } } }, MutationObserver,
    setInterval(fn, ms) { const id = ++nextTimer; timers.set(id, { fn, ms }); return id; },
    clearInterval(id) { timers.delete(id); }, looksLikeGiftText() { return false; }
  };
  return { timers, globals };
}

for (const supported of [true, false]) test(`gift-filter-restart-css-${supported}`, () => {
  const env = environment(supported);
  const Type = moduleType(text, "  // src/adapters/chat-filter.ts", "  // src/adapters/pk-numbers.ts", "ChatGiftFilter", env.globals);
  const filter = new Type();
  for (let i = 0; i < 3; i++) {
    filter.start(); filter.start();
    assert.equal(env.timers.size, 1, `cycle ${i}: expected one live timer after start`);
    assert.equal(filter.style.isConnected, true, `cycle ${i}: stylesheet not mounted`);
    if (!supported) assert.equal(filter.observer.observing, true, `cycle ${i}: observer not reconnected`);
    filter.dispose(); filter.dispose();
    assert.equal(env.timers.size, 0);
    assert.equal(filter.style.isConnected, false);
  }
  assert.equal(filter.timer, 0, 'disposed timer handle not cleared');
  assert.equal(filter.target, null, 'stale chat target retained');
  return { cycles: 3, timersAfterDispose: env.timers.size, stylesheetRemoved: !filter.style.isConnected };
});

test("pk-numbers-restart", () => {
  const env = environment(true);
  const Type = moduleType(text, "  // src/adapters/pk-numbers.ts", "  // src/adapters/room-preferences.ts", "PkNumbers", env.globals);
  const pk = new Type();
  let applies = 0;
  pk.apply = () => { applies++; };
  for (let i = 0; i < 3; i++) {
    pk.start(); pk.start();
    assert.equal(env.timers.size, 1, `cycle ${i}: expected one live PK timer`);
    for (const timer of env.timers.values()) timer.fn();
    pk.dispose(); pk.dispose();
    assert.equal(env.timers.size, 0);
  }
  assert.equal(pk.timer, 0, 'disposed PK timer handle not cleared');
  assert.equal(applies, 6);
  return { cycles: 3, applies, timersAfterDispose: env.timers.size };
});

const passed = results.filter((r) => r.pass).length;
console.log(JSON.stringify({ passed, failed: results.length - passed, results }, null, 2));
if (passed !== results.length) process.exitCode = 1;
