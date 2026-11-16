// 弹幕抽搐回归（纯 Node，无浏览器）：事件驱动的位置重写必须为 0
// 覆盖：悬停意图门、停驻上限、同轨顺延不推飞、resize 不缩放不重排、configure 不折叠轨道
import { source, modelTypes } from "./load.mjs";

const file = process.argv[2] || "DouyinEx.user.js";
const text = source(file);
const { T, M } = modelTypes(text);

const FPS = 60;
const DT = 1000 / FPS;
const BASE = 1_700_000_000_000;
const now = (frame) => BASE + frame * DT;
const LINE = T.lineHeight;
const WIDTH = 1920;
const HEIGHT = 1080;

function measure(message) {
  return 14 + [...message.plainText].length * 21;
}
function newModel(opts = {}) {
  return new M(WIDTH, HEIGHT, measure, { ...T, ...opts });
}
let seq = 0;
function feed(model, count, frame) {
  const batch = [];
  for (let i = 0; i < count; i++) {
    const id = "m" + (++seq);
    const plainText = "第" + seq + "条弹幕测试内容";
    batch.push({ id, roomId: "room", plainText, segments: [{ type: "text", text: plainText }], receivedAt: now(frame) });
  }
  model.enqueue(batch, now(frame));
}
function overlaps(model) {
  const lanes = new Map();
  for (const item of model.active) {
    if (!lanes.has(item.lane)) lanes.set(item.lane, []);
    lanes.get(item.lane).push(item);
  }
  let count = 0;
  for (const list of lanes.values()) {
    list.sort((a, b) => a.x - b.x);
    for (let i = 1; i < list.length; i++) if (list[i].x < list[i - 1].x + list[i - 1].width - 0.5) count++;
  }
  return count;
}
function step(model, frame, { pointer } = {}) {
  if (pointer) model.updatePointer(pointer, now(frame));
  model.tick(now(frame));
}

const results = [];
const test = (name, fn) => {
  try { const observed = fn(); results.push({ name, pass: true, observed }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
};
const assert = (value, message) => { if (!value) throw Error(message); };

test("steady-scroll-has-no-position-rewrites", () => {
  const model = newModel();
  let backward = 0, lanes = 0;
  const last = new Map();
  for (let frame = 0; frame < 900; frame++) {
    if (frame % 9 === 0) feed(model, 1, frame);
    step(model, frame);
    for (const item of model.active) {
      const prev = last.get(item.message.id);
      if (prev) {
        if (item.x > prev.x + 0.01) backward++;
        if (item.lane !== prev.lane) lanes++;
      }
      last.set(item.message.id, { x: item.x, lane: item.lane });
    }
  }
  assert(model.active.length > 20, "not enough active items: " + model.active.length);
  assert(backward === 0, "backward jumps: " + backward);
  assert(lanes === 0, "lane changes: " + lanes);
  assert(overlaps(model) === 0, "overlapping items");
  return { active: model.active.length, backward, lanes };
});

test("resting-pointer-does-not-freeze-a-lane", () => {
  const model = newModel();
  const lane = 5;
  const pointer = { x: WIDTH - 10, y: lane * LINE + 12, inside: true };
  step(model, 0, { pointer });
  assert(!model.selection, "empty canvas produced a selection");
  // 指针事件之后先空转 > pointerTtl，再让弹幕从右侧飘过这个静止指针
  for (let frame = 1; frame < 49; frame++) step(model, frame);
  model.nextLane = lane;
  feed(model, 1, 49);
  let selected = 0;
  for (let frame = 49; frame < 140; frame++) {
    step(model, frame);
    if (model.selection) selected++;
  }
  assert(selected === 0, "stale pointer froze " + selected + " frames of a passing danmaku");
  assert(model.active.length === 1, "fixture message was not displayed");
  return { selected, active: model.active.length, pointerAgeMs: 49 * DT };
});

test("deliberate-hover-pauses-and-releases-after-hold", () => {
  const model = newModel();
  for (let frame = 0; frame < 240; frame++) { if (frame % 9 === 0) feed(model, 1, frame); step(model, frame); }
  const target = model.active[model.active.length - 1];
  const pointer = { x: target.x + target.width / 2, y: target.lane * LINE + 12, inside: true };
  step(model, 240, { pointer });
  assert(model.selection && model.selection.message.id === target.message.id, "hover did not select the item under the pointer");
  const frozen = model.active.find((item) => item.message.id === target.message.id);
  const frozenX = frozen.x;
  let frames = 0;
  for (let frame = 241; frame < 241 + 60; frame++) { step(model, frame); frames++; }
  assert(Math.abs(frozen.x - frozenX) < 0.001, "selected item moved while paused: " + frozen.x);
  const followersMoved = [];
  for (let frame = 241; frame < 241 + 60; frame++) {
    for (const item of model.active) {
      if (item.lane === frozen.lane && item.x >= frozenX && item !== frozen) followersMoved.push(item.message.id);
    }
  }
  assert(followersMoved.length === 0, "same-lane followers were pushed right: " + followersMoved.join(","));
  const holdFrames = Math.ceil(T.holdMs / DT) + 10;
  for (let frame = 241; frame < 241 + holdFrames; frame++) step(model, frame);
  assert(!model.selection, "selection was not released after hold deadline");
  const after = model.active.find((item) => item.message.id === target.message.id);
  assert(!after || after.x < frozenX, "item did not resume after release");
  return { pausedFrames: frames, holdFrames, resumed: !!after };
});

test("resize-keeps-absolute-position-and-lane", () => {
  const model = newModel();
  for (let frame = 0; frame < 400; frame++) { if (frame % 9 === 0) feed(model, 1, frame); step(model, frame); }
  assert(model.active.length > 5, "no active items");
  const before = model.active.map((item) => ({ id: item.message.id, x: item.x, lane: item.lane }));
  model.resize(1480, 860);
  const pv = 1480 / model.config.travelSeconds * DT / 1000;
  for (const item of model.active) {
    const prev = before.find((entry) => entry.id === item.message.id);
    if (!prev) continue;
    assert(item.lane === prev.lane, "lane changed on resize: " + item.message.id);
    assert(Math.abs(item.x - prev.x) < 0.001, "position was rewritten on resize: " + item.message.id);
  }
  const track = model.active.find((item) => before.some((entry) => entry.id === item.message.id));
  const oldX = track.x;
  model.tick(now(400));
  assert(Math.abs(track.x - (oldX - pv)) < 0.05, "first frame after resize did not move normally");
  model.resize(1920, 1080);
  assert(overlaps(model) === 0, "resize created overlaps");
  return { items: before.length };
});

test("configure-keeps-lanes-and-never-overlaps", () => {
  const model = newModel();
  for (let frame = 0; frame < 400; frame++) { if (frame % 9 === 0) feed(model, 1, frame); step(model, frame); }
  const before = model.active.map((item) => ({ id: item.message.id, lane: item.lane, x: item.x }));
  model.configure({ ...model.config, area: 0.2 });
  model.tick(now(400));
  for (const item of model.active) {
    const prev = before.find((entry) => entry.id === item.message.id);
    if (!prev) continue;
    assert(item.lane === prev.lane, "configure changed lane of " + item.message.id);
  }
  assert(overlaps(model) === 0, "configure created overlaps");
  model.configure({ ...model.config, area: 0.6, fontSize: 28, lineHeight: 51 });
  assert(model.active.length > 5, "font change dropped visible items");
  assert(overlaps(model) === 0, "font change created overlaps");
  return { items: model.active.length, lanes: model.lanes };
});

test("hover-pause-preference-disables-pausing", () => {
  const model = newModel({ hoverPause: false });
  for (let frame = 0; frame < 240; frame++) { if (frame % 9 === 0) feed(model, 1, frame); step(model, frame); }
  const target = model.active[model.active.length - 1];
  step(model, 240, { pointer: { x: target.x + target.width / 2, y: target.lane * LINE + 12, inside: true } });
  assert(!model.selection, "hover pause is disabled in config but a selection was created");
  return { selected: false };
});

const passed = results.filter((entry) => entry.pass).length;
const failed = results.length - passed;
console.log(JSON.stringify({ file, passed, failed, results }, null, 2));
if (failed) process.exitCode = 1;
