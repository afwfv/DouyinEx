import assert from "node:assert/strict";
import { source, moduleType } from "./load.mjs";

const text = source(process.argv[2]);
const results = [];
async function microtasks() {
  for (let i = 0; i < 30; i++) await Promise.resolve();
}
function test(name, run) {
  return Promise.resolve().then(run).then(
    (observed) => results.push({ name, pass: true, observed }),
    (error) => results.push({ name, pass: false, error: error.message })
  );
}

function harness(options = {}) {
  let now = 0, sequence = 0;
  const tasks = new Map();
  const statuses = [], tags = [], requests = [];
  const state = {
    room: "123456",
    hidden: false,
    enter: options.enter ?? [],
    click: options.click ?? (() => ({ status_code: 0, data: {} }))
  };
  function schedule(fn, delay = 0) {
    const id = ++sequence;
    tasks.set(id, { fn, at: now + Math.max(0, Number(delay) || 0) });
    return id;
  }
  function response(value) {
    return Promise.resolve({ ok: true, json: () => Promise.resolve(value) });
  }
  function fetch(url, init = {}) {
    requests.push({ url, at: now, signal: init.signal });
    if (init.signal?.aborted) return Promise.reject(new DOMException("Aborted", "AbortError"));
    const query = new URLSearchParams(url.slice(url.indexOf("?") + 1));
    if (/\/enter\?/.test(url)) {
      const next = state.enter.length > 1 ? state.enter.shift() : state.enter[0];
      return typeof next === "function" ? next(query, init) : response(next ?? null);
    }
    if (/\/click\?/.test(url)) {
      return state.click(query, init);
    }
    return Promise.reject(new Error("Unexpected endpoint: " + url));
  }
  const math = Object.create(Math);
  math.random = () => 0;
  const globals = {
    AbortController, DOMException, URLSearchParams, Promise,
    document: { get hidden() { return state.hidden; } },
    location: { get pathname() { return "/" + state.room; } },
    fetch,
    setTimeout: schedule,
    clearTimeout: (id) => tasks.delete(id),
    Math: math
  };
  const { PointClaim, pickupPoint } = moduleType(
    text,
    "  // src/enhancements/point-claim.ts",
    "  var RoomEnhancements = class {",
    "({ PointClaim, pickupPoint })",
    globals
  );
  const claim = new PointClaim((value) => statuses.push(value), (value) => tags.push(value));
  async function advance(ms) {
    const end = now + ms;
    await microtasks();
    let executions = 0;
    for (;;) {
      const next = [...tasks].filter(([, task]) => task.at <= end)
        .sort((a, b) => a[1].at - b[1].at || a[0] - b[0])[0];
      if (!next) break;
      if (++executions > 20000) throw new Error("Timer runaway");
      const [id, task] = next;
      tasks.delete(id);
      now = task.at;
      task.fn();
      await microtasks();
    }
    now = end;
    await microtasks();
  }
  return { claim, pickupPoint, state, statuses, tags, requests, tasks, advance, now: () => now };
}

await test("pickup-point-scans-nested-reward-and-ignores-box-metadata", () => {
  const h = harness();
  assert.equal(h.pickupPoint({ reward: { point: 12 }, countdown_time: 40, status: 2 }, {}), 12);
  assert.equal(h.pickupPoint({ result: { integral: 0, credit: 8 } }, {}), 8);
  assert.equal(h.pickupPoint({ box_id: 3, status: 2 }, { score: 4 }), 4);
  assert.equal(h.pickupPoint({ point: 1.5 }, {}), 0);
  return { nested: 12, fallback: 4 };
});

await test("claims-only-ready-boxes-then-schedules-countdown", async () => {
  const boxes1 = [
    { box_id: 1, status: 2 },
    { box_id: 2, status: 1, countdown_time: 5 },
    { box_id: 3, status: 3 }
  ];
  const boxes2 = [
    { box_id: 1, status: 2 },
    { box_id: 2, status: 2 },
    { box_id: 3, status: 3 }
  ];
  const h = harness({
    enter: [{ status_code: 0, data: { boxs: boxes1 } }, { status_code: 0, data: { boxs: boxes2 } }],
    click: (query) => {
      const box = query.get("box_id");
      if (box === "1") return Promise.resolve({ ok: true, json: () => Promise.resolve({ status_code: 0, data: { reward: { point: 12 }, boxs: boxes1 } }) });
      if (box === "2") return Promise.resolve({ ok: true, json: () => Promise.resolve({ status_code: 0, data: { award: 8, boxs: boxes2.map((item) => ({ ...item, status: 3 })) } }) });
      return Promise.resolve({ ok: true, json: () => Promise.resolve({ status_code: 1 }) });
    }
  });
  h.claim.configure({ pointClaim: true }, "123456");
  assert.equal(h.requests.length, 0, "requested before the one-minute warm-up");
  assert.equal(h.tags.at(-1), "积分 0");
  await h.advance(59999);
  assert.equal(h.requests.length, 0);
  await h.advance(1000);
  const clicks = h.requests.filter((entry) => /\/click\?/.test(entry.url)).map((entry) => new URLSearchParams(entry.url.slice(entry.url.indexOf("?") + 1)).get("box_id"));
  assert.deepEqual(clicks, ["1"], "claimed a box that was not ready");
  assert.equal(h.claim.points, 12);
  assert.equal(h.claim.claimed, 1);
  assert.match(h.statuses.at(-1), /继续等下一轮/);
  await h.advance(40000);
  const allClicks = h.requests.filter((entry) => /\/click\?/.test(entry.url)).map((entry) => new URLSearchParams(entry.url.slice(entry.url.indexOf("?") + 1)).get("box_id"));
  assert.deepEqual(allClicks, ["1", "2"], "stale ready state re-clicked an already claimed box");
  assert.equal(h.claim.points, 20);
  assert.equal(h.claim.claimed, 2);
  assert.match(h.statuses.at(-1), /全部领完/);
  assert.equal(h.claim.timer, 0, "completed room retained a timer");
  return { clicks: allClicks, points: h.claim.points, claimed: h.claim.claimed, timer: h.claim.timer };
});

await test("empty-box-list-poll-slowly-without-marking-room-done", async () => {
  const h = harness({ enter: [{ status_code: 0, data: { boxs: [] } }] });
  h.claim.configure({ pointClaim: true }, "123456");
  await h.advance(60000);
  assert.match(h.statuses.at(-1), /等待新箱子/);
  assert.notEqual(h.claim.doneRoom, "123456");
  assert.equal(h.requests.length, 1);
  assert.ok(h.claim.timer, "empty list did not schedule a slow retry");
  h.claim.dispose();
  return { doneRoom: h.claim.doneRoom, requests: h.requests.length };
});

await test("query-failure-retries-after-ninety-seconds", async () => {
  const h = harness({
    enter: [
      { status_code: 1 },
      { status_code: 0, data: { boxs: [{ box_id: 4, status: 3 }] } }
    ]
  });
  h.claim.configure({ pointClaim: true }, "123456");
  await h.advance(60000);
  assert.match(h.statuses.at(-1), /查询失败/);
  assert.equal(h.requests.length, 1);
  await h.advance(89999);
  assert.equal(h.requests.length, 1);
  await h.advance(1);
  assert.equal(h.requests.length, 2);
  assert.match(h.statuses.at(-1), /全部领完/);
  return { requests: h.requests.length, status: h.statuses.at(-1) };
});

await test("disable-clears-timer-tag-and-pending-request-window", async () => {
  const h = harness();
  h.claim.configure({ pointClaim: true }, "123456");
  await h.advance(1000);
  const before = h.requests.length;
  h.claim.configure({ pointClaim: false }, "123456");
  assert.equal(h.claim.timer, 0);
  assert.equal(h.tags.at(-1), "");
  await h.advance(61000);
  assert.equal(h.requests.length, before, "disabled claim still requested boxes");
  return { requests: h.requests.length, tag: h.tags.at(-1) };
});

await test("room-switch-aborts-inflight-click-without-late-mutation", async () => {
  let release;
  const boxes = [{ box_id: 7, status: 2 }];
  const h = harness({
    enter: [{ status_code: 0, data: { boxs: boxes } }],
    click: (_query, init) => new Promise((resolve, reject) => {
      release = () => resolve({ ok: true, json: () => Promise.resolve({ status_code: 0, data: { award: 9 } }) });
      init.signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")), { once: true });
    })
  });
  h.claim.configure({ pointClaim: true }, "123456");
  await h.advance(60000);
  const pointsBefore = h.claim.points;
  h.state.room = "456789";
  h.claim.configure({ pointClaim: true }, "456789");
  const tagsAfterSwitch = h.tags.length;
  release?.();
  await microtasks();
  assert.equal(h.claim.points, pointsBefore, "old room click mutated points after room switch");
  assert.equal(h.tags.length, tagsAfterSwitch, "old room click published a stale tag");
  assert.equal(h.claim.roomId, "456789");
  h.claim.dispose();
  return { points: h.claim.points, room: h.claim.roomId };
});

await test("dispose-cancels-timer-and-clears-room-state", async () => {
  const h = harness();
  h.claim.configure({ pointClaim: true }, "123456");
  h.claim.dispose();
  assert.equal(h.claim.timer, 0);
  assert.equal(h.tags.at(-1), "");
  await h.advance(61000);
  assert.equal(h.requests.length, 0);
  return { timer: h.claim.timer, requests: h.requests.length };
});

await test("userscript-wires-status-channels-and-point-cleanup", () => {
  const start = text.indexOf("const enhancements = new RoomEnhancements");
  const end = text.indexOf("const preferences = new RoomPreferences", start);
  const wiring = text.slice(start, end);
  assert.ok(wiring.includes('channel === "point-tag"'));
  assert.ok(wiring.includes('channel === "points"'));
  assert.ok(text.includes("app.ui.setPointStatus(pointStatus)"));
  assert.ok(text.includes("app.ui.setPointTag(pointTag)"));
  const enhancements = text.slice(text.indexOf("var RoomEnhancements = class {"), text.indexOf("// src/ui/overlay.ts"));
  assert.ok(enhancements.includes("new PointClaim"));
  assert.ok(enhancements.includes("this.points.dispose()"));
  return { channels: ["lottery", "points", "point-tag"], cleanup: true };
});

await test("hidden-document-defers-request", async () => {
  const h = harness();
  h.state.hidden = true;
  h.claim.doneRoom = "999999";
  h.claim.configure({ pointClaim: true }, "123456");
  await h.advance(60000);
  assert.equal(h.requests.length, 0, "hidden page requested boxes");
  h.state.hidden = false;
  await h.advance(30000);
  assert.equal(h.requests.length, 1, "visible page did not resume polling");
  h.claim.dispose();
  return { requests: h.requests.length };
});

const passed = results.filter((result) => result.pass).length;
console.log(JSON.stringify({ passed, failed: results.length - passed, results }, null, 2));
if (passed !== results.length) process.exitCode = 1;