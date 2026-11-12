import assert from "node:assert/strict";
import { source, moduleType } from "./load.mjs";

// Run the shipped module against a deterministic clock and minimal page DOM.
// All asynchronous operations below are the module's real wait/click methods.
const text = source(process.argv[2]);
const results = [];

async function microtasks() {
  // VM promises and the async wait/apply chain need several promise turns.
  for (let i = 0; i < 20; i++) await Promise.resolve();
}

function fixture({ autoQuality = true, shieldGift = true } = {}) {
  let now = 0, sequence = 0;
  const tasks = new Map();
  const clicks = [], events = [], changes = [];
  const state = {
    room: "A", quality: "高清", shield: false,
    optionsAvailable: true, iconAvailable: true, switchAvailable: true,
    qualityAcknowledges: true, shieldAcknowledges: true, queries: 0
  };
  const storage = new Map([
    ["douyin-ex:v1:auto-quality", String(autoQuality)],
    ["douyin-ex:v1:shield-gift", String(shieldGift)]
  ]);
  function schedule(fn, delay = 0, kind = "timeout") {
    const id = ++sequence;
    tasks.set(id, { fn, at: now + Math.max(0, Number(delay) || 0), kind });
    return id;
  }
  function node(name, onClick) {
    return {
      isConnected: true,
      dispatchEvent(event) {
        events.push({ name, type: event.type, room: state.room, at: now });
        if (event.type === "click") {
          clicks.push({ name, room: state.room, at: now });
          onClick?.();
        }
        return true;
      }
    };
  }
  const qualityRows = ["高清", "原画"].map((label) => {
    const box = node(`quality:${label}`, () => {
      if (state.qualityAcknowledges) state.quality = label;
    });
    return {
      querySelector(selector) {
        if (selector === ".KJ5LucVT") return { textContent: label };
        if (selector === ".siW34Cq4") return box;
        return null;
      }
    };
  });
  const qualitySelector = { querySelectorAll() { return qualityRows; } };
  const qualityLabel = { get textContent() { return state.quality; } };
  const icon = node("gift-menu");
  const track = node("shield", () => {
    if (state.shieldAcknowledges) state.shield = !state.shield;
  });
  track.getBoundingClientRect = () => ({ x: 0, width: 40 });
  track.firstElementChild = {
    getBoundingClientRect: () => ({ x: state.shield ? 20 : 0, width: 20 })
  };
  const toggle = { firstElementChild: track, isConnected: true };
  const document = {
    hidden: false,
    querySelector(selector) {
      state.queries++;
      if (selector === '[data-e2e="quality-selector"]') return state.optionsAvailable ? qualitySelector : null;
      if (selector === '[data-e2e="quality"]') return qualityLabel;
      if (selector === '[data-e2e="gift-setting"]') return state.iconAvailable ? icon : null;
      if (selector === '[data-e2e="effect-switch"]') return state.switchAvailable ? toggle : null;
      throw new Error(`Unexpected selector: ${selector}`);
    }
  };
  class PointerEvent {
    constructor(type, init) { this.type = type; Object.assign(this, init); }
  }
  const globals = {
    document, AbortController, DOMException, console,
    PointerEvent, MouseEvent: PointerEvent,
    performance: { now: () => now },
    localStorage: {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, String(value))
    },
    setTimeout: (fn, delay) => schedule(fn, delay),
    clearTimeout: (id) => tasks.delete(id),
    requestAnimationFrame: (fn) => schedule(() => fn(now), 16, "raf"),
    cancelAnimationFrame: (id) => tasks.delete(id)
  };
  const Type = moduleType(text, "  // src/adapters/room-preferences.ts", "  // src/userscript.ts", "RoomPreferences", globals);
  const preferences = new Type((value) => changes.push({ ...value }));
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
  return { preferences, state, tasks, clicks, events, changes, storage, advance, document };
}

async function test(name, run) {
  try { results.push({ name, pass: true, observed: await run() }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
}

await test("quality-and-shield-complete-without-repeat-clicks", async () => {
  const env = fixture();
  env.preferences.attach("A");
  await env.advance(11000);
  assert.equal(env.state.quality, "原画");
  assert.equal(env.state.shield, true);
  assert.deepEqual(env.clicks.map((entry) => entry.name), ["quality:原画", "shield"]);
  assert.equal(env.tasks.size, 0);
  return { clicks: env.clicks, pendingTasks: env.tasks.size };
});

await test("detach-clears-quality-watchdogs", async () => {
  const env = fixture();
  env.preferences.attach("A");
  await env.advance(100);
  env.preferences.detach();
  await microtasks();
  assert.equal(env.tasks.size, 0, `Detached room retained ${env.tasks.size} scheduled tasks`);
  return { pendingTasksAfterDetach: env.tasks.size };
});

await test("detach-cancels-poll-and-prevents-late-click", async () => {
  const env = fixture({ shieldGift: false });
  env.state.optionsAvailable = false;
  env.preferences.attach("A");
  await env.advance(200);
  env.preferences.detach();
  await microtasks();
  const pendingAfterDetach = env.tasks.size;
  env.state.optionsAvailable = true;
  await env.advance(5000);
  assert.equal(env.clicks.length, 0, `Detached room produced late clicks: ${JSON.stringify(env.clicks)}`);
  assert.equal(pendingAfterDetach, 0, `Detached room retained ${pendingAfterDetach} tasks`);
  return { pendingAfterDetach, lateClicks: env.clicks.length };
});

await test("detach-cancels-pending-animation-frame", async () => {
  const env = fixture({ shieldGift: false });
  env.preferences.attach("A");
  await microtasks();
  assert.equal(env.clicks.length, 1, "Expected quality click before waiting for its animation frame");
  assert.equal([...env.tasks.values()].filter((task) => task.kind === "raf").length, 1);
  env.preferences.detach();
  await microtasks();
  assert.equal(env.tasks.size, 0, `Detach retained ${env.tasks.size} tasks including an animation frame`);
  return { clicksBeforeDetach: env.clicks.length, pendingTasksAfterDetach: env.tasks.size };
});

await test("detach-between-resolved-query-and-continuation", async () => {
  const env = fixture({ shieldGift: false });
  env.preferences.attach("A");
  env.preferences.detach();
  await env.advance(100);
  assert.equal(env.clicks.length, 0, `Cancelled continuation clicked ${env.clicks.length} times`);
  return { lateClicks: env.clicks.length, pendingTasks: env.tasks.size };
});

await test("disable-auto-quality-cancels-inflight-query", async () => {
  const env = fixture({ shieldGift: false });
  env.state.optionsAvailable = false;
  env.preferences.attach("A");
  await env.advance(200);
  env.preferences.set("autoQuality", false);
  env.state.optionsAvailable = true;
  await env.advance(12000);
  assert.equal(env.state.quality, "高清", "Disabled auto quality still switched the page to the highest setting");
  assert.equal(env.clicks.length, 0);
  assert.equal(env.storage.get("douyin-ex:v1:auto-quality"), "false");
  return { clicksAfterDisable: env.clicks.length, finalQuality: env.state.quality };
});

await test("disable-gift-shield-cancels-open-menu-query", async () => {
  const env = fixture({ autoQuality: false });
  env.state.switchAvailable = false;
  env.preferences.attach("A");
  await env.advance(200);
  assert.ok(env.events.some((event) => event.name === "gift-menu" && event.type === "pointerenter"));
  env.preferences.set("shieldGift", false);
  env.state.switchAvailable = true;
  await env.advance(12000);
  assert.equal(env.state.shield, false, "Disabled gift shield was enabled by a stale menu lookup");
  assert.equal(env.clicks.length, 0);
  assert.ok(env.events.some((event) => event.name === "gift-menu" && event.type === "pointerleave"), "Cancelled automation left its own hover menu open");
  return { clicksAfterDisable: env.clicks.length, shieldEnabled: env.state.shield, ownMenuClosed: true };
});

await test("existing-gift-menu-is-not-closed-by-automation", async () => {
  const env = fixture({ autoQuality: false });
  env.preferences.attach("A");
  await env.advance(100);
  assert.equal(env.state.shield, true);
  const menuEvents = env.events.filter((event) => event.name === "gift-menu");
  assert.equal(menuEvents.length, 0, `Automation sent hover events to an already open menu: ${JSON.stringify(menuEvents)}`);
  return { shieldEnabled: env.state.shield, unrelatedHoverEvents: menuEvents.length };
});

await test("chat-filter-toggle-does-not-repeat-room-automation", async () => {
  const env = fixture();
  env.preferences.attach("A");
  await env.advance(100);
  const queriesBefore = env.state.queries;
  env.preferences.set("hideGiftDanmaku", false);
  await env.advance(100);
  assert.equal(env.preferences.read().hideGiftDanmaku, false);
  assert.equal(env.changes.at(-1).hideGiftDanmaku, false);
  assert.equal(env.state.queries - queriesBefore, 0, "Unrelated chat filter change restarted quality/gift DOM scans");
  return { extraRoomQueries: env.state.queries - queriesBefore, notifiedHideGiftDanmaku: env.changes.at(-1).hideGiftDanmaku };
});

await test("room-switch-starts-new-room-without-old-poll-delay", async () => {
  const env = fixture({ shieldGift: false });
  env.state.optionsAvailable = false;
  env.preferences.attach("A");
  await env.advance(10);
  env.state.room = "B";
  env.state.optionsAvailable = true;
  env.preferences.attach("B");
  await env.advance(40);
  assert.equal(env.state.quality, "原画", "New room remained blocked by the previous room's pending poll");
  assert.equal(env.clicks.length, 1);
  assert.equal(env.clicks[0].room, "B");
  await env.advance(12000);
  assert.equal(env.clicks.length, 1, "Previous room produced a duplicate click");
  return { newRoomClickAtMs: env.clicks[0].at, totalClicks: env.clicks.length };
});

await test("rapid-room-switches-keep-only-current-room-tasks", async () => {
  const env = fixture({ shieldGift: false });
  env.state.optionsAvailable = false;
  let maximumTasks = 0;
  for (let i = 0; i < 40; i++) {
    env.state.room = String(i);
    env.preferences.attach(String(i));
    await microtasks();
    maximumTasks = Math.max(maximumTasks, env.tasks.size);
  }
  env.preferences.detach();
  await microtasks();
  assert.ok(maximumTasks <= 4, `40 room switches accumulated ${maximumTasks} simultaneous tasks (expected <= 4)`);
  assert.equal(env.tasks.size, 0);
  return { roomChanges: 40, maximumTasks, pendingAfterDetach: env.tasks.size };
});

await test("failed-quality-query-retries-and-recovers", async () => {
  const env = fixture({ shieldGift: false });
  env.state.optionsAvailable = false;
  env.preferences.attach("A");
  await env.advance(4500);
  assert.equal(env.clicks.length, 0);
  env.state.optionsAvailable = true;
  await env.advance(1500);
  assert.equal(env.state.quality, "原画");
  assert.equal(env.clicks.length, 1);
  await env.advance(6000);
  assert.equal(env.clicks.length, 1);
  assert.equal(env.tasks.size, 0);
  return { recoveredClickAtMs: env.clicks[0].at, totalClicks: env.clicks.length };
});

await test("repeated-attach-to-same-room-is-idempotent", async () => {
  const env = fixture({ shieldGift: false });
  env.state.optionsAvailable = false;
  env.preferences.attach("A");
  await microtasks();
  const tasksBefore = env.tasks.size;
  for (let i = 0; i < 20; i++) env.preferences.attach("A");
  await microtasks();
  assert.equal(env.tasks.size, tasksBefore);
  env.state.optionsAvailable = true;
  await env.advance(12000);
  assert.equal(env.clicks.length, 1);
  return { repeatedAttaches: 20, tasksBefore, tasksAfterRepeatedAttach: tasksBefore, totalClicks: env.clicks.length };
});

const passed = results.filter((entry) => entry.pass).length;
console.log(JSON.stringify({ passed, failed: results.length - passed, results }, null, 2));
if (passed !== results.length) process.exitCode = 1;
