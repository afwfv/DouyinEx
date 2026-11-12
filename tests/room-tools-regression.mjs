import assert from 'node:assert/strict';
import vm from 'node:vm';
import { source } from './load.mjs';
const text = source(process.argv[2]);
const results = [];
const featureStart = text.indexOf('  // src/features/lottery-rules.ts');
const featureEnd = text.indexOf('  // src/ui/overlay.ts', featureStart);
const prefStart = text.indexOf('  // src/adapters/room-preferences.ts');
const prefEnd = text.indexOf('  // src/userscript.ts', prefStart);
const exported = '({MessageFilter,ChatContentFilter,SimpleRoomMode,FreeLottery,LotteryPage,RoomEnhancements,RoomPreferences,parseCountdownSeconds,parseConditionsFromText,evaluateLotteryEligibility,parseLotteryResultText})';
function types(globals = {}) {
  assert.ok(featureStart >= 0, 'Five room tools are absent in this version');
  return vm.runInNewContext(text.slice(featureStart, featureEnd) + '\n' + text.slice(prefStart, prefEnd) + '\n' + exported, { AbortController, console, ...globals });
}
async function test(name, fn) {
  try { results.push({ name, pass: true, observed: await fn() }); }
  catch (e) { results.push({ name, pass: false, error: e.message }); }
}
async function microtasks() { for (let i = 0; i < 25; i++) await Promise.resolve(); }
function fixture() {
  let now = 0, seq = 0;
  const tasks = new Map(), clicks = [], statuses = [];
  const state = { dialog: true, joined: false, countdown: 120, conditions: [], buttonText: '免费参与', acknowledge: true, result: null };
  const document = { hidden: false };
  const location = { pathname: '/123' };
  const storage = new Map();
  const schedule = (fn, delay = 0) => { tasks.set(++seq, { fn, at: now + delay }); return seq; };
  const globals = {
    document, location, window: {}, performance: { now: () => now },
    Date: class extends Date { static now() { return now; } },
    localStorage: { getItem: (k) => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, v) },
    setTimeout: schedule, clearTimeout: (id) => tasks.delete(id),
    requestAnimationFrame: (fn) => schedule(fn, 16), cancelAnimationFrame: (id) => tasks.delete(id),
    getComputedStyle: () => ({ display: 'block', visibility: 'visible', opacity: '1' }),
    MouseEvent: class { constructor(type) { this.type = type; } }
  };
  const api = types(globals);
  const node = (name, fn) => ({
    isConnected: true, disabled: false, textContent: '', getAttribute: () => null,
    getBoundingClientRect: () => ({ width: 30, height: 20 }), dispatchEvent: () => true,
    click() { clicks.push({ name, at: now, room: location.pathname }); fn?.(); }
  });
  const dialog = node('dialog');
  const join = node('join', () => { if (state.acknowledge) state.joined = true; });
  Object.defineProperty(join, 'textContent', { get: () => state.buttonText });
  const follow = node('follow', () => state.follow?.()); follow.textContent = '关注主播';
  const entry = node('entry', () => { if (state.openDelay !== undefined) schedule(() => { state.dialog = true; }, state.openDelay); });
  const page = {
    dialog: () => state.dialog ? dialog : null, entry: () => entry,
    countdown: () => state.countdown,
    read: (_d, allowFollow) => ({
      remainingSeconds: state.countdown, buttons: state.buttonText === '关注主播' ? [follow] : [join],
      decision: api.evaluateLotteryEligibility({ conditions: state.conditions, alreadyJoined: state.joined, buttonText: state.buttonText, allowFollow, remainingSeconds: state.countdown })
    }),
    close: () => { state.closed = (state.closed || 0) + 1; },
    result: () => state.result
  };
  const lottery = new api.FreeLottery((status) => statuses.push(status), page);
  async function advance(ms) {
    const end = now + ms;
    await microtasks();
    let count = 0;
    for (;;) {
      const next = [...tasks].filter(([, t]) => t.at <= end).sort((a, b) => a[1].at - b[1].at || a[0] - b[0])[0];
      if (!next) break;
      if (++count > 10000) throw Error('timer runaway');
      const [id, task] = next; tasks.delete(id); now = task.at; task.fn(); await microtasks();
    }
    now = end; await microtasks();
  }
  return { api, state, lottery, tasks, clicks, statuses, advance, document, location, storage, join, dialog, follow };
}

await test('new-settings-default-off-and-text-roundtrip', () => {
  const f = fixture(), changes = [], p = new f.api.RoomPreferences((v) => changes.push(v));
  for (const key of ['simpleMode','autoLottery','autoLotteryFollow','hideEnter','hideRepeat','filterKeywords']) assert.equal(p.read()[key], false);
  p.set('blockedKeywords', '  Foo  \n\n广告\nＡＢＣ'); p.set('hideRepeat', true);
  const restored = new f.api.RoomPreferences();
  assert.equal(restored.read().blockedKeywords, 'Foo\n广告\nＡＢＣ');
  assert.equal(restored.read().hideRepeat, true); assert.equal(f.tasks.size, 0);
  p.set('blockedKeywords', Array.from({ length: 120 }, (_, i) => 'word' + i).join('\n'));
  assert.equal(p.read().blockedKeywords.split('\n').length, 100);
  p.set('blockedKeywords', 'x'.repeat(5000)); assert.equal(p.read().blockedKeywords.length, 4000);
  assert.equal(p.set('__proto__', true).__proto__, Object.getPrototypeOf(p.read()));
  return { defaultOff: 6, persisted: true, maximumRules: 100, maximumChars: 4000, tasks: f.tasks.size };
});
await test('storage-unavailable-preserves-session-settings', () => {
  const api = types({ localStorage: { getItem() { throw Error('denied'); }, setItem() { throw Error('quota'); } } });
  const p = new api.RoomPreferences(); p.set('blockedKeywords', '广告'); p.set('hideEnter', true);
  assert.equal(p.read().blockedKeywords, '广告'); assert.equal(p.read().hideEnter, true);
});
await test('literal-keywords-nfkc-case-whitespace-and-rule-limit', () => {
  const { MessageFilter } = types(), f = new MessageFilter();
  f.configure({ filterKeywords: true, blockedKeywords: ' ＦＯＯ\n广告\n[a-z] ' });
  assert.equal(f.accept({ plainText: 'get foo now' }), false);
  assert.equal(f.accept({ plainText: '广\u200b告' }), false);
  assert.equal(f.accept({ plainText: 'a' }), true);
  assert.equal(f.accept({ plainText: 'a [a-z] b' }), false);
  f.configure({ filterKeywords: false, blockedKeywords: 'foo' });
  assert.equal(f.accept({ plainText: 'foo' }), true);
});
await test('repeat-window-expires-from-first-accepted-message', () => {
  const f = new (types().MessageFilter)(); f.configure({ hideRepeat: true });
  assert.equal(f.accept({ plainText: 'ＡＢＣ', authorId: 'a' }, 0), true);
  assert.equal(f.accept({ plainText: 'abc', authorId: 'b' }, 9999), false);
  assert.equal(f.accept({ plainText: 'abc' }, 10000), true);
  assert.equal(f.accept({ plainText: 'abc' }, 10001), false);
  f.reset(); assert.equal(f.accept({ plainText: 'abc' }, 10001), true);
});
await test('repeat-cache-bounded-and-clock-rollback-recovers', () => {
  const f = new (types().MessageFilter)(); f.configure({ hideRepeat: true });
  for (let i = 0; i < 3000; i++) f.accept({ plainText: String(i) }, 5000);
  assert.equal(f.seen.size, 1000);
  assert.equal(f.accept({ plainText: '2999' }, 0), true); assert.equal(f.seen.size, 1);
  return { peakEntries: 1000, afterClockRollback: f.seen.size };
});
await test('entry-filter-keeps-ordinary-chat-ending-in-arrived', () => {
  const f = new (types().MessageFilter)(); f.configure({ hideEnter: true });
  assert.equal(f.accept({ plainText: '春天来了', isEnter: false }), true);
  assert.equal(f.accept({ plainText: '小明来了', isEnter: true }), false);
});
await test('separate-canvas-and-sidebar-filters-have-identical-decisions', () => {
  const { MessageFilter } = types(), a = new MessageFilter(), b = new MessageFilter();
  const settings = { hideRepeat: true, hideEnter: true, filterKeywords: true, blockedKeywords: 'spam' };
  a.configure(settings); b.configure(settings);
  const messages = [{plainText:'hi'},{plainText:'hi'},{plainText:'spam'},{plainText:'x',isEnter:true},{plainText:'spring来了'}];
  const expected = [true, false, false, false, true];
  assert.deepEqual(messages.map(m => a.accept(m, 1)), expected);
  assert.deepEqual(messages.map(m => b.accept(m, 1)), expected);
  assert.equal(a.configure({...settings, simpleMode:true}), false);
  assert.equal(a.accept({ plainText: 'hi' }, 2), false);
});
await test('countdown-parser-validates-seconds-minutes-range', () => {
  const p = types().parseCountdownSeconds;
  for (const [value, expected] of [['01:30',90],['01:02:03',3723],['--:--',null],['00:00',null],['99:59',null],['01:60:00',null],['02:00:00',7200],['02:00:01',null],['00:60',null],['福袋 00:05 开奖',5]]) assert.equal(p(value), expected, value);
});
const cases = [
  ['free-direct',{},'join_direct'],
  ['official-comment',{buttonText:'一键发表评论', conditions:[{requirement:'发表评论：加入粉丝团',status:'未达成'}]},'join_comment'],
  ['unmet-paid',{conditions:[{requirement:'加入粉丝团',status:'未达成'}]},'skip'],
  ['existing-fan-allowed',{conditions:[{requirement:'加入粉丝团',status:'已达成'}]},'join_direct'],
  ['paid-button-even-with-complete-condition',{buttonText:'升级粉丝团',conditions:[{requirement:'关注主播',status:'已达成'}]},'skip'],
  ['watch-wait',{conditions:[{requirement:'观看5分钟',status:'未完成'}],remainingSeconds:50},'wait_watch'],
  ['watch-too-late',{conditions:[{requirement:'观看5分钟',status:'未完成'}],remainingSeconds:20},'skip'],
  ['follow-opt-out',{buttonText:'关注主播',conditions:[{requirement:'关注主播',status:'未达成'}]},'skip'],
  ['follow-opt-in',{buttonText:'关注主播',allowFollow:true,conditions:[{requirement:'关注主播',status:'未达成'}]},'follow_then_join'],
  ['unknown-condition',{conditions:[{requirement:'完成神秘任务',status:'未完成'}]},'skip'],
  ['share-condition',{conditions:[{requirement:'分享直播间',status:'未完成'}]},'skip'],
  ['already-joined',{alreadyJoined:true},'already_joined']
];
for (const [name, args, expected] of cases) await test('eligibility-' + name, () => {
  assert.equal(types().evaluateLotteryEligibility({ buttonText: '免费参与', ...args }).action, expected);
});
await test('result-parser-preserves-win-with-lucky-footer', () => {
  const p = types().parseLotteryResultText;
  assert.equal(p('恭喜中奖！祝下次好运').status, 'won');
  assert.equal(p('很遗憾未中奖，下次好运').status, 'lost');
  assert.equal(p('正在开奖，好运').status, 'unknown');
});
await test('lottery-default-off-and-idempotent-configure', () => {
  const f = fixture(); f.lottery.configure({}, '123'); assert.equal(f.tasks.size, 0);
  for (let i=0; i<25; i++) f.lottery.configure({autoLottery:true}, '123');
  assert.equal(f.tasks.size, 1); f.lottery.dispose(); assert.equal(f.tasks.size, 0);
});
await test('direct-click-once-confirmed-not-repeated-each-tick', async () => {
  const f = fixture(); f.lottery.configure({autoLottery:true}, '123');
  await f.advance(40000);
  assert.equal(f.clicks.length, 1); assert.match(f.statuses.at(-1), /已确认参与/);
  f.lottery.dispose(); assert.equal(f.tasks.size, 0);
  return { clicks: f.clicks, confirmed: true, timersAfterDispose: 0 };
});
await test('official-comment-click-does-not-send-extra-chat', async () => {
  const f = fixture(); f.state.buttonText='一键发表评论'; f.state.conditions=[{requirement:'发表评论：你好',status:'未完成'}];
  f.lottery.configure({autoLottery:true}, '123'); await f.advance(5000);
  assert.equal(f.clicks.length, 1); assert.match(f.statuses.at(-1), /已确认参与/); f.lottery.dispose();
});
await test('unconfirmed-click-is-not-reported-as-success', async () => {
  const f = fixture(); f.state.acknowledge=false; f.lottery.configure({autoLottery:true}, '123'); await f.advance(15000);
  assert.equal(f.clicks.length,1); assert.match(f.statuses.at(-1), /尚未确认/); f.lottery.dispose();
});
await test('disappeared-dialog-is-not-confirmation', async () => {
  const f=fixture(); f.join.click=()=>{f.clicks.push('join');f.state.dialog=false;};
  f.lottery.configure({autoLottery:true}, '123'); await f.advance(2000);
  assert.match(f.statuses.at(-1), /尚未确认/); f.lottery.dispose();
});
await test('paid-condition-never-clicked', async () => {
  const f=fixture(); f.state.conditions=[{requirement:'加入粉丝团',status:'未达成'}];
  f.lottery.configure({autoLottery:true}, '123'); await f.advance(20000);
  assert.equal(f.clicks.length,0); f.lottery.dispose();
});
await test('follow-click-at-most-once-when-status-delayed', async () => {
  const f=fixture(); f.state.buttonText='关注主播'; f.state.conditions=[{requirement:'关注主播',status:'未达成'}];
  f.lottery.configure({autoLottery:true,autoLotteryFollow:true}, '123'); await f.advance(10000);
  assert.equal(f.clicks.length,1); assert.equal(f.clicks[0].name,'follow'); f.lottery.dispose();
});
await test('conditions-rechecked-after-follow-before-join', async () => {
  const f=fixture(); f.state.buttonText='关注主播'; f.state.conditions=[{requirement:'关注主播',status:'未达成'}];
  f.state.follow=()=>{f.state.buttonText='免费参与';f.state.conditions=[{requirement:'加入粉丝团',status:'未达成'}];};
  f.lottery.configure({autoLottery:true,autoLotteryFollow:true}, '123'); await f.advance(5000);
  assert.equal(f.clicks.length,1); assert.match(f.statuses.at(-1), /付费/); f.lottery.dispose();
});
await test('opted-in-follow-then-free-join-confirms', async () => {
  const f=fixture(); f.state.buttonText='关注主播'; f.state.conditions=[{requirement:'关注主播',status:'未达成'}];
  f.state.follow=()=>{f.state.buttonText='免费参与';f.state.conditions=[{requirement:'关注主播',status:'已达成'}];};
  f.lottery.configure({autoLottery:true,autoLotteryFollow:true}, '123'); await f.advance(5000);
  assert.deepEqual(f.clicks.map(c=>c.name),['follow','join']); assert.match(f.statuses.at(-1), /已确认参与/); f.lottery.dispose();
});
await test('disabled-button-never-clicked', async () => {
  const f=fixture();f.join.disabled=true;f.lottery.configure({autoLottery:true},'123');await f.advance(5000);
  assert.equal(f.clicks.length,0); f.lottery.dispose();
});
await test('disable-aborts-dialog-wait-and-prevents-late-click', async () => {
  const f=fixture();f.state.dialog=false;f.lottery.configure({autoLottery:true},'123');await f.advance(400);
  assert.equal(f.clicks.length,1);f.lottery.configure({autoLottery:false},'123');assert.equal(f.tasks.size,0);
  f.state.dialog=true;await f.advance(5000);assert.equal(f.clicks.length,1);
});
await test('switch-room-during-follow-prevents-old-join', async () => {
  const f=fixture();f.state.buttonText='关注主播';f.state.conditions=[{requirement:'关注主播',status:'未达成'}];
  f.lottery.configure({autoLottery:true,autoLotteryFollow:true},'123');await f.advance(400);
  f.location.pathname='/456';f.state.buttonText='免费参与';f.state.conditions=[];
  await f.advance(1000);assert.equal(f.clicks.length,1);
  f.lottery.configure({autoLottery:true},'456');await f.advance(1500);
  assert.equal(f.clicks.length,2);assert.equal(f.clicks[1].room,'/456');f.lottery.dispose();assert.equal(f.tasks.size,0);
});
await test('home-navigation-and-hidden-page-never-click', async () => {
  for(const mode of ['home','hidden']){const f=fixture();f.lottery.configure({autoLottery:true},'123');
    if(mode==='home') f.location.pathname='/';else f.document.hidden=true;
    await f.advance(5000);assert.equal(f.clicks.length,0);f.lottery.dispose();}
});
await test('winning-and-unknown-result-dialogs-retained', async () => {
  for(const status of ['won','unknown','lost']){const f=fixture();f.state.result={dialog:f.dialog,parsed:{status}};
    f.lottery.configure({autoLottery:true},'123');await f.advance(500);assert.equal(f.state.closed||0,status==='lost'?1:0);
    assert.equal(f.clicks.length,0);f.lottery.dispose();}
});
await test('repeated-room-changes-leave-no-old-timers', async () => {
  const f=fixture();f.state.dialog=false;
  let peak=0;for(let i=1;i<=40;i++){f.location.pathname='/'+i;f.lottery.configure({autoLottery:true},String(i));await f.advance(400);peak=Math.max(peak,f.tasks.size);}
  assert.ok(peak<=1);f.lottery.dispose();await microtasks();assert.equal(f.tasks.size,0);
  return {roomChanges:40,peakTimers:peak,afterDispose:0};
});
const passed=results.filter(r=>r.pass).length;
console.log(JSON.stringify({passed,failed:results.length-passed,results},null,2));
if(passed!==results.length)process.exitCode=1;
