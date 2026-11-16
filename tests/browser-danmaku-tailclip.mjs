import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidate = path.resolve(process.argv[2] || 'DouyinEx.user.js');
const out = path.join(root, 'browser-v08', path.basename(candidate, '.user.js') || 'tailclip');
fs.mkdirSync(out, { recursive: true });
const source = fs.readFileSync(candidate, 'utf8');
const anchor = source.indexOf('new Blob([');
let start = anchor + 'new Blob(['.length;
while (/\s/.test(source[start])) start++;
let end = start + 1;
for (; end < source.length; end++) { if (source[end] === '\\') { end++; continue; } if (source[end] === '"') break; }
const worker = JSON.parse(source.slice(start, end + 1));
const from = worker.indexOf('var T={fontSize');
const to = worker.indexOf('var l=self');
if (from < 0 || to < from) throw Error('engine slice anchors not found');
const engine = worker.slice(from, to);
const engineLiteral = JSON.stringify(engine + ';return { T, M, k, C, g };');

const tests = String.raw`
const shots = {};
const rows = {};
const engine = new Function(window.__ENGINE_BODY)();
try {
function scene(name, dpr, cssWidth, cssHeight, texts) {
  const canvas = document.createElement('canvas');
  document.body.append(canvas);
  const config = { ...engine.T };
  const renderer = new engine.k(canvas, config, dpr);
  renderer.resize(cssWidth, cssHeight, dpr);
  const model = new engine.M(renderer.canvas.width / dpr, renderer.canvas.height / dpr, renderer.measure, config);
  const now = performance.timeOrigin + performance.now();
  const messages = texts.map((text, index) => ({ id: name + '-' + index, roomId: 'room', receivedAt: now, segments: [{ type: 'text', text }], plainText: text }));
  model.enqueue(messages, now);
  model.tick(now);
  const info = [{ debug: { active: model.active.length, queued: model.queue.length, lanes: model.lanes, canvas: [renderer.canvas.width, renderer.canvas.height], config: { fontSize: config.fontSize, lineHeight: config.lineHeight, maxActive: config.maxActive } } }];
  for (const item of model.active) {
    item.x = 40;
    item.lane = model.active.indexOf(item) % model.lanes;
    const height = Math.ceil((config.lineHeight - 4) * dpr);
    const inkRight = (canvasWidthPx) => {
      const c = document.createElement('canvas');
      c.width = canvasWidthPx;
      c.height = height;
      const p = c.getContext('2d');
      p.scale(dpr, dpr);
      renderer.paint(p, item.message);
      const data = p.getImageData(0, 0, c.width, c.height).data;
      let maxX = -1;
      for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
        if (data[(y * c.width + x) * 4 + 3] > 8 && x > maxX) maxX = x;
      }
      return { rightPx: maxX + 1, width: c.width };
    };
    const spritePx = Math.max(1, Math.ceil(item.width * dpr));
    const sprite = inkRight(spritePx);
    const wide = inkRight(Math.max(1, Math.ceil((item.width + 60) * dpr)));
    const clippedCss = Math.max(0, (wide.rightPx - spritePx) / dpr);
    info.push({
      text: item.message.plainText,
      chars: [...item.message.plainText].length,
      cssWidth: Number(item.width.toFixed(2)),
      dpr,
      spritePx,
      spriteInkRightPx: sprite.rightPx,
      trueInkRightCss: Number((wide.rightPx / dpr).toFixed(2)),
      touchesEdge: sprite.rightPx >= spritePx,
      clippedCss: Number(clippedCss.toFixed(2)),
      rightMarginCss: Number((item.width - sprite.rightPx / dpr).toFixed(2))
    });
  }
  // 每 2 个字符换一条 lane 展示，便于肉眼核对尾字
  model.active.forEach((item, index) => { item.lane = index; item.x = 24; });
  renderer.draw(model.active);
  const target = canvas.getContext('2d');
  target.save();
  target.setTransform(1, 0, 0, 1, 0, 0);
  target.globalCompositeOperation = 'destination-over';
  target.fillStyle = '#10161f';
  target.fillRect(0, 0, canvas.width, canvas.height);
  target.restore();
  shots[name] = canvas.toDataURL('image/png');
  canvas.remove();
  return info;
}
rows['dpr125-1920'] = scene('dpr125-1920', 1.25, 1920, 200, [
  '短弹幕',
  '这是一条二十个字左右的弹幕内容用来对照检查',
  '这是一条大概四十个字的弹幕内容用来验证最后一个字是否会被裁掉一半的情况在这里继续加长尾巴xyz',
  '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十'
]);
rows['dpr1-1280'] = scene('dpr1-1280', 1, 1280, 200, [
  '短弹幕对照',
  '这是一条大概四十个字的弹幕内容用来验证最后一个字是否会被裁掉一半的情况在这里继续加长尾巴xyz'
]);
rows['dpr15-2560'] = scene('dpr15-2560', 1.5, 2560, 200, [
  '这是一条大概四十个字的弹幕内容用来验证最后一个字是否会被裁掉一半的情况在这里继续加长尾巴xyz'
]);
} catch (error) { rows.fatal = String((error && error.stack) || error); }
let total = 0, clipped = 0;
for (const group of Object.values(rows)) {
  if (!Array.isArray(group)) continue;
  for (const item of group) {
    if (!item || item.debug) continue;
    total++;
    if (item.clippedCss > 0 || item.touchesEdge) clipped++;
  }
}
if (rows.fatal) clipped++;
document.getElementById('result').textContent = JSON.stringify({ passed: total - clipped, failed: clipped, rows });
document.documentElement.dataset.completed = 'true';
window.__shots = shots;
`;
const html = `<!doctype html><html><meta charset="utf-8"><title>engine tail clip</title><body style="margin:0;background:#10161f"><pre id="result" style="color:#ccc"></pre><script>window.__ENGINE_BODY=${engineLiteral};window.addEventListener('error',function(e){var r=document.getElementById('result');if(r)r.textContent=JSON.stringify({passed:0,failed:1,rows:{fatal:String(e.message),stack:String(e.error&&e.error.stack)}});document.documentElement.dataset.completed='true';});</script><script type="module">${tests}</script></body></html>`;
fs.writeFileSync(path.join(out, 'engine-tailclip.html'), html);
const server = http.createServer((_req, res) => { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(html); });
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/engine`;
const args = ['--headless=new', '--disable-gpu', '--disable-extensions', '--disable-background-networking', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${path.join(out, 'profile-engine')}`, '--window-size=1400,900', '--remote-debugging-port=0', '--remote-debugging-address=127.0.0.1', url];
const child = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', args, { windowsHide: true });
let stderr = ''; child.stderr.on('data', (d) => (stderr += d));
const watchdog = setTimeout(() => child.kill(), 45000);
const closed = new Promise((resolve, reject) => { child.on('error', reject); child.on('close', resolve); });
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
let socket, report, exitCode;
try {
  for (let i = 0; i < 150 && !stderr.includes('DevTools listening on'); i++) await delay(100);
  const endpoint = stderr.match(/DevTools listening on (ws:\/\/\S+)/)?.[1];
  if (!endpoint) throw Error('No DevTools endpoint: ' + stderr.slice(-1500));
  const list = await (await fetch('http://' + new URL(endpoint).host + '/json/list')).json();
  const target = list.find((t) => t.type === 'page') || list[0];
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  const pending = new Map(); let id = 0;
  socket.onmessage = (event) => { const msg = JSON.parse(event.data); if (msg.id) { const pair = pending.get(msg.id); pending.delete(msg.id); if (msg.error) pair?.reject(Error(JSON.stringify(msg.error))); else pair?.resolve(msg.result); } };
  const send = (method, params = {}) => new Promise((resolve, reject) => { pending.set(++id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params })); });
  await send('Page.enable');
  for (let i = 0; i < 150; i++) {
    const state = await send('Runtime.evaluate', { expression: 'document.documentElement.dataset.completed', returnByValue: true });
    if (state.result.value === 'true') break;
    if (i === 149) throw Error('Fixture timed out');
    await delay(100);
  }
  report = JSON.parse((await send('Runtime.evaluate', { expression: 'document.getElementById("result").textContent', returnByValue: true })).result.value);
  const shotKeys = Object.keys(report.rows);
  for (const key of shotKeys) {
    const data = await send('Runtime.evaluate', { expression: `window.__shots[${JSON.stringify(key)}]`, returnByValue: true });
    const base64 = String(data.result.value).split(',')[1];
    fs.writeFileSync(path.join(out, `engine-${key}.png`), Buffer.from(base64, 'base64'));
  }
  await send('Browser.close');
  exitCode = await closed;
} catch (error) { stderr += '\nHARNESS_ERROR: ' + error.stack; child.kill(); exitCode = await closed; process.exitCode = 1; }
finally { socket?.close(); clearTimeout(watchdog); server.close(); }
fs.writeFileSync(path.join(out, 'engine-tailclip.json'), JSON.stringify(report ?? { error: stderr.slice(-2000) }, null, 2));
console.log(JSON.stringify(report ?? { error: 'no report', stderr: stderr.slice(-1500) }, null, 2));
if (!report || exitCode !== 0 || report.failed) process.exitCode = 1;