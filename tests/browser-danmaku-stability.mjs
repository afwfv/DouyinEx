import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidate = path.resolve(process.argv[2]);
const label = process.argv[3] || path.basename(path.dirname(candidate));
const source = fs.readFileSync(candidate, 'utf8');
const out = path.join(root, 'browser-v08', label);
fs.mkdirSync(out, { recursive: true });
function segment(from, to) {
  const start = source.indexOf(from), end = source.indexOf(to, start + from.length);
  if (start < 0 || end < start) throw new Error(`Missing module: ${from}`);
  return source.slice(start, end);
}
const modules = [
  segment('  var GIFT_TEXT =', '  var QUALITY_NAMES ='),
  segment('  function normalizedChatText(', '  // Scoped CSS is reversible'),
  segment('  // src/adapters/chat-filter.ts', '  // src/adapters/pk-numbers.ts')
].join('\n');
const tests = String.raw`
const results = [];
const assert = (condition, message = 'Assertion failed') => { if (!condition) throw Error(message); };
const frame = () => new Promise(requestAnimationFrame);
const hidden = row => { const style = getComputedStyle(row); return style.display === 'none' || style.visibility === 'hidden'; };
const chat = document.getElementById('chatroom');
let sequence = 0;
function makeRow(text, user = '观众') {
  const row = document.createElement('div');
  row.className = 'webcast-chatroom___item';
  row.dataset.sequence = String(sequence++);
  row.append(document.createTextNode(user + '：'));
  const body = document.createElement('span');
  body.className = 'webcast-chatroom___content-with-emoji-text';
  body.textContent = text;
  row.append(body);
  chat.append(row);
  return row;
}
function setBody(row, text) {
  row.querySelector('span').textContent = text;
}
for (let i = 0; i < 80; i++) makeRow(i % 9 === 0 ? '送出了 小心心 × 1' : '普通弹幕 ' + i);
const duplicate = makeRow('重复内容');
makeRow('重复内容', '另一位');
chat.scrollTop = 150;
const giftFilter = new ChatGiftFilter();
const contentFilter = new ChatContentFilter();
async function test(name, fn) {
  try { await fn(); results.push({ name, pass: true }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
}
await test('gift-filter-preserves-list-geometry', async () => {
  const row = chat.children[0], anchor = chat.children[40];
  const before = { height: row.getBoundingClientRect().height, scrollHeight: chat.scrollHeight, anchorY: anchor.getBoundingClientRect().y, scrollTop: chat.scrollTop };
  giftFilter.start();
  await frame(); await frame();
  const after = { height: row.getBoundingClientRect().height, scrollHeight: chat.scrollHeight, anchorY: anchor.getBoundingClientRect().y, scrollTop: chat.scrollTop };
  assert(hidden(row), 'Gift row is still visible');
  assert(after.height === before.height, 'Gift row height changed: ' + before.height + ' -> ' + after.height);
  assert(after.scrollHeight === before.scrollHeight, 'scrollHeight changed: ' + before.scrollHeight + ' -> ' + after.scrollHeight);
  assert(Math.abs(after.anchorY - before.anchorY) < 0.01, 'Anchor moved: ' + before.anchorY + ' -> ' + after.anchorY);
  assert(after.scrollTop === before.scrollTop, 'scrollTop changed: ' + before.scrollTop + ' -> ' + after.scrollTop);
});
await test('repeat-filter-preserves-list-geometry', async () => {
  const anchor = chat.children[40];
  const before = { height: duplicate.getBoundingClientRect().height, scrollHeight: chat.scrollHeight, anchorY: anchor.getBoundingClientRect().y, scrollTop: chat.scrollTop };
  contentFilter.configure({ hideRepeat: true }, '123');
  contentFilter.start();
  await frame(); await frame();
  const copy = duplicate.nextElementSibling;
  assert(hidden(copy), 'Repeated row is still visible');
  assert(copy.getBoundingClientRect().height === before.height, 'Repeated row collapsed');
  assert(chat.scrollHeight === before.scrollHeight, 'scrollHeight changed: ' + before.scrollHeight + ' -> ' + chat.scrollHeight);
  assert(Math.abs(anchor.getBoundingClientRect().y - before.anchorY) < 0.01, 'Anchor moved after repeat filtering');
  assert(chat.scrollTop === before.scrollTop, 'scrollTop changed after repeat filtering');
});
await test('recycled-gift-row-is-restored-without-full-scan', async () => {
  const row = chat.children[0];
  assert(hidden(row), 'Fixture row is not filtered initially');
  setBody(row, '回收后的普通弹幕');
  await frame(); await frame(); await frame();
  assert(!hidden(row), 'Recycled normal row remained hidden');
  assert(!row.classList.contains('douyin-ex-gift-row'), 'Stale gift marker remained');
});
await test('streaming-mutations-do-not-change-scroll-geometry', async () => {
  chat.scrollTop = 150;
  const anchor = chat.children[45];
  const initialY = anchor.getBoundingClientRect().y;
  let previous = performance.now(), frames = 0, maxGap = 0, maxHeightDelta = 0, maxAnchorDelta = 0;
  for (let batch = 0; batch < 24; batch++) {
    for (let i = 0; i < 5; i++) makeRow(i === 0 ? '送出了 小心心 × 1' : i === 1 ? '重复内容' : '新增弹幕 ' + batch + '-' + i);
    // New rows naturally increase scrollHeight. Filtering those same rows must
    // not collapse any part of the geometry that was just laid out.
    const heightAfterAppend = chat.scrollHeight;
    await frame();
    const now = performance.now();
    if (frames) maxGap = Math.max(maxGap, now - previous);
    previous = now; frames++;
    maxHeightDelta = Math.max(maxHeightDelta, Math.abs(chat.scrollHeight - heightAfterAppend));
    maxAnchorDelta = Math.max(maxAnchorDelta, Math.abs(anchor.getBoundingClientRect().y - initialY));
  }
  assert(maxHeightDelta === 0, 'Streaming changed scrollHeight by ' + maxHeightDelta);
  assert(maxAnchorDelta < 0.01, 'Streaming moved anchor by ' + maxAnchorDelta);
  results.push({ name: 'streaming-performance-observation', pass: true, observed: { frames, maxGap: +maxGap.toFixed(2), rows: chat.children.length, maxHeightDelta, maxAnchorDelta } });
});
await test('dispose-restores-content-without-layout-shift', async () => {
  const height = chat.scrollHeight;
  giftFilter.dispose(); contentFilter.dispose();
  await frame();
  assert(chat.scrollHeight === height, 'Dispose changed scrollHeight');
  assert(![...chat.children].some(hidden), 'Filtered rows were not restored');
});
const passed = results.filter(result => result.pass).length;
document.getElementById('result').textContent = JSON.stringify({ passed, failed: results.length - passed, results });
document.documentElement.dataset.completed = 'true';
`;
const html = `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>DouyinEx 弹幕稳定性验证</title><style>body{margin:20px;background:#111;color:#eee;font:14px/1.4 system-ui}#chatroom{height:260px;overflow-y:auto;width:520px;background:#1c2532;padding:8px;box-sizing:border-box}.webcast-chatroom___item{box-sizing:border-box;min-height:32px;padding:6px 8px;border-bottom:1px solid #ffffff10}#result{display:none}</style><body><h1>弹幕布局稳定性</h1><div id="chatroom"></div><pre id="result"></pre><script type="module">${(modules + '\n' + tests).replaceAll('</script', '<\\/script')}</script></body></html>`;
fs.writeFileSync(path.join(out, 'fixture.html'), html);
const server = http.createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(html);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const url = `http://127.0.0.1:${server.address().port}/123`;
const args = ['--headless=new', '--disable-gpu', '--disable-extensions', '--disable-background-networking', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${path.join(out, 'profile')}`, '--window-size=1000,700', '--remote-debugging-port=0', '--remote-debugging-address=127.0.0.1', url];
const child = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', args, { windowsHide: true });
let stderr = '';
child.stderr.on('data', data => { stderr += data; });
const watchdog = setTimeout(() => child.kill(), 45000);
const closed = new Promise((resolve, reject) => { child.on('error', reject); child.on('close', resolve); });
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
let socket, report, exitCode;
try {
  for (let i = 0; i < 150 && !stderr.includes('DevTools listening on'); i++) await delay(100);
  const endpoint = stderr.match(/DevTools listening on (ws:\/\/\S+)/)?.[1];
  if (!endpoint) throw Error('No DevTools endpoint: ' + stderr.slice(-1500));
  const targets = await (await fetch('http://' + new URL(endpoint).host + '/json/list')).json();
  const target = targets.find(item => item.type === 'page' && item.url === url) || targets.find(item => item.type === 'page');
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  const pending = new Map(); let id = 0;
  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const request = pending.get(message.id); pending.delete(message.id);
    if (message.error) request?.reject(Error(JSON.stringify(message.error))); else request?.resolve(message.result);
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => { pending.set(++id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params })); });
  for (let i = 0; i < 150; i++) {
    const state = await send('Runtime.evaluate', { expression: 'document.documentElement.dataset.completed', returnByValue: true });
    if (state.result.value === 'true') break;
    if (i === 149) throw Error('Fixture timed out');
    await delay(100);
  }
  const result = await send('Runtime.evaluate', { expression: 'document.getElementById("result").textContent', returnByValue: true });
  report = JSON.parse(result.result.value);
  await send('Browser.close');
  exitCode = await closed;
} catch (error) {
  stderr += '\nHARNESS_ERROR: ' + error.stack;
  child.kill(); exitCode = await closed; process.exitCode = 1;
} finally {
  socket?.close(); clearTimeout(watchdog); server.close();
}
fs.writeFileSync(path.join(out, 'stderr.txt'), stderr);
fs.writeFileSync(path.join(out, 'command.json'), JSON.stringify({ command: [child.spawnfile, ...args], exitCode, fixtureOnly: true }, null, 2));
if (!report) {
  console.error(JSON.stringify({ error: 'No browser report', exitCode, output: out, stderr: stderr.slice(-1500) }));
  process.exitCode = 1;
} else {
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  if (exitCode !== 0 || report.failed) process.exitCode = 1;
}
