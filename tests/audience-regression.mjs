import assert from "node:assert/strict";
import { source, moduleType } from "./load.mjs";

const text = source(process.argv[2]);
const results = [];
function test(name, run) {
  try { results.push({ name, pass: true, observed: run() }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
}

const globals = { record: (value) => value && typeof value === "object" ? value : {}, Intl, Number, Math, String };
const audience = moduleType(
  text,
  "// src/adapters/audience.ts",
  "// src/adapters/live.ts",
  "({ audienceLabel, audienceCount, AudienceTracker })",
  globals
);

function harness(options = {}) {
  const events = [];
  let clock = options.clock ?? 1000;
  const tracker = new audience.AudienceTracker((state) => events.push(state), {
    now: () => clock,
    gap: options.gap ?? 1000,
    fresh: options.fresh ?? 45000
  });
  return { tracker, events, advance: (ms) => { clock += ms; }, now: () => clock };
}

test("label-parses-official-suffix", () => {
  assert.equal(
    JSON.stringify(audience.audienceLabel("10万+")),
    JSON.stringify({ value: 100000, text: "10万+", approximate: true })
  );
  assert.equal(
    JSON.stringify(audience.audienceLabel("4863")),
    JSON.stringify({ value: 4863, text: "4863", approximate: false })
  );
  assert.equal(audience.audienceLabel("1.2亿").value, 120000000);
  assert.equal(audience.audienceLabel("在线 3.4万").value, 34000);
  assert.equal(audience.audienceLabel("--").value, 0);
  return audience.audienceLabel("10万+");
});

test("count-normalizes-number-string-and-long", () => {
  assert.equal(audience.audienceCount(98432), 98432);
  assert.equal(audience.audienceCount("436,149"), 436149);
  assert.equal(audience.audienceCount("10万+"), 100000);
  assert.equal(audience.audienceCount("43.6万"), 436000);
  assert.equal(audience.audienceCount({ low: 436149, high: 0, unsigned: true }), 436149);
  assert.equal(audience.audienceCount({ low: 0, high: 1 }), 4294967296);
  assert.equal(audience.audienceCount(0), 0);
  assert.equal(audience.audienceCount(""), 0);
  return "ok";
});

test("cumulative-total-never-becomes-online", () => {
  const { tracker, events } = harness();
  tracker.offer({ total: 436149, totalUser: 300000, totalStr: "43.6万" });
  assert.equal(tracker.value, 0, "累计观看不能当作在线人数");
  assert.equal(events.length, 0);
  assert.equal(tracker.seen, 436149);
  return { value: tracker.value, seen: tracker.seen };
});

test("online-field-wins-with-exact-value", () => {
  const { tracker, events, advance } = harness();
  tracker.offer({ onlineUserForAnchor: "98432", total: 436149 });
  advance(10);
  assert.equal(tracker.value, 98432);
  assert.equal(tracker.text, "98,432");
  assert.equal(tracker.source, "seq");
  assert.equal(events.at(-1).value, 98432);
  assert.equal(events.at(-1).seen, 436149);
  return events.at(-1);
});

test("fresh-seq-blocks-dom-overwrite", () => {
  const { tracker, advance } = harness();
  tracker.offer({ onlineUserForAnchor: "98432" });
  advance(100);
  tracker.offerDom("10万+");
  assert.equal(tracker.value, 98432, "精确在线值在有效期内不被缩写覆盖");
  assert.equal(tracker.source, "seq");
  return { value: tracker.value, source: tracker.source };
});

test("stale-seq-falls-back-to-official-dom", () => {
  const { tracker, advance } = harness();
  tracker.offer({ onlineUserForAnchor: "98432" });
  advance(46000);
  tracker.offerDom("10万+");
  assert.equal(tracker.value, 100000);
  assert.equal(tracker.text, "10万+");
  assert.equal(tracker.source, "dom");
  return { value: tracker.value, text: tracker.text };
});

test("seen-counter-is-monotonic", () => {
  const { tracker, advance } = harness();
  tracker.offer({ total: 436149, onlineUserForAnchor: "98000" });
  advance(2000);
  tracker.offer({ total: 400000, onlineUserForAnchor: "97500" });
  assert.equal(tracker.seen, 436149, "累计观看不允许回退");
  assert.equal(tracker.value, 97500);
  return { seen: tracker.seen, value: tracker.value };
});

test("publish-is-throttled-then-flushed-on-tick", () => {
  const { tracker, events, advance } = harness();
  tracker.offer({ onlineUserForAnchor: "5000" });
  assert.equal(events.length, 1);
  advance(100);
  tracker.offer({ onlineUserForAnchor: "5100" });
  assert.equal(events.length, 1, "1 秒内合并刷新");
  tracker.settle(false);
  assert.equal(events.length, 1);
  advance(1000);
  tracker.settle(false);
  assert.equal(events.length, 2);
  assert.equal(events.at(-1).value, 5100);
  return { events: events.length, last: events.at(-1) };
});

test("duplicate-values-do-not-republish", () => {
  const { tracker, events, advance } = harness();
  tracker.offer({ onlineUserForAnchor: "5000" });
  advance(5000);
  tracker.offer({ onlineUserForAnchor: "5000" });
  assert.equal(events.length, 1);
  return { events: events.length };
});

test("reset-clears-room-state", () => {
  const { tracker } = harness();
  tracker.offer({ total: 2000, onlineUserForAnchor: "1500" });
  tracker.reset();
  assert.equal(tracker.value, 0);
  assert.equal(tracker.seen, 0);
  assert.equal(tracker.source, "");
  assert.equal(tracker.field, "");
  return "reset";
});

test("watch-auction-no-longer-mixes-fields", () => {
  const start = text.indexOf("watchAudience(listener)");
  const end = text.indexOf("subscribe(listener) {", start);
  assert.ok(start > 0 && end > start, "watchAudience 段落存在");
  const block = text.slice(start, end);
  assert.ok(block.includes("AudienceTracker"), "在线人数组装走稳定器");
  assert.ok(!block.includes("payload.total"), "旧的三字段混读已移除");
  const moduleText = text.slice(
    text.indexOf("// src/adapters/audience.ts"),
    text.indexOf("// src/adapters/live.ts")
  );
  assert.ok(moduleText.includes("MutationObserver"), "官方在线按钮作为权威来源");
  assert.ok(block.includes("watchAudienceDom"), "DOM 监听来自 audience 模块");
  return { block: block.length };
});

const passed = results.filter((r) => r.pass).length;
console.log(JSON.stringify({ passed, failed: results.length - passed, results }, null, 2));
if (passed !== results.length) process.exitCode = 1;