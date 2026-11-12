// 单条弹幕暂停逻辑的确定性测试（不依赖浏览器）
import fs from "node:fs";

const file = process.argv[2] ?? "F:/DYLIVE/work/dev-copy.js";
const text = fs.readFileSync(file, "utf8");

function workerSource(source) {
  const start = source.indexOf("new Blob([");
  let i = start + "new Blob([".length;
  while (/\s/.test(source[i])) i++;
  const quote = source[i];
  let j = i + 1;
  while (j < source.length) {
    const ch = source[j];
    if (ch === "\\") { j += 2; continue; }
    if (ch === quote) break;
    j++;
  }
  return new Function("return " + source.slice(i, j + 1))();
}

const worker = workerSource(text);
const modelStart = worker.indexOf("var T=");
const modelEnd = worker.indexOf(";var b=class");
if (modelStart < 0 || modelEnd < 0) throw new Error("model classes not found");
const modelCode = worker.slice(modelStart, modelEnd);

const scope = new Function(`${modelCode};return { T, M, S, v };`)();
const { M } = scope;

const LINE = 36;
const WIDTH = 800;
const HEIGHT = 5 * LINE; // 5 lanes
const SPEED = WIDTH / 12; // px per second

const model = new M(WIDTH, HEIGHT, (message) => message.plainText.length * 10 + 12, { lineHeight: LINE, gap: 24, travelSeconds: 12 });

let clock = 0;
const step = (ms) => {
  clock += ms;
  model.tick(performance.timeOrigin + clock);
};
const now = () => performance.timeOrigin + clock;
const message = (id, plainText) => ({ roomId: "room", id, plainText, segments: [{ type: "text", text: plainText }], receivedAt: now() });
const byId = (id) => model.active.find((item) => item.message.id === id);
const laneOf = (id) => byId(id)?.lane;
const fmt = (list) => list.map((item) => `${item.message.id}@lane${item.lane}:x=${item.x.toFixed(1)},w=${item.width}`);

// 1) 每条弹幕独立成项：三条弹幕三条独立轨道
model.enqueue([message("a", "aaaa"), message("b", "bbbbbb"), message("c", "cc")], clock);
step(16);
const lanes = ["a", "b", "c"].map(laneOf);
console.log("lanes:", lanes.join(","), "active:", model.active.length);

// 2) 空转 1 秒，三条都在按同一速度左移
const xs0 = ["a", "b", "c"].map((id) => byId(id).x);
for (let i = 0; i < 60; i++) step(16);
const xs1 = ["a", "b", "c"].map((id) => byId(id).x);
const moved = xs0.map((x, i) => xs1[i] - x);
console.log("moved after ~1s:", moved.map((v) => v.toFixed(1)).join(","), "expected approx", (-SPEED * 0.96).toFixed(1));

// 3) 悬停到 a 上：只有 a 停住，其他继续
const rect = Object.fromEntries(["x", "lane", "width"].map((key) => [key, byId("a")[key]]));
model.updatePointer({ x: rect.x + 2, y: rect.lane * LINE + 6, inside: true }, clock);
step(16);
if (!model.selection || model.selection.message.id !== "a") throw new Error("hover did not select a");
const frozenX = byId("a").x;
const neighborX = byId("b").x;
for (let i = 0; i < 30; i++) step(16);
const frozenAfter = byId("a").x;
const neighborAfter = byId("b").x;
console.log("frozen:", frozenX.toFixed(1), "->", frozenAfter.toFixed(1), "| neighbor:", neighborX.toFixed(1), "->", neighborAfter.toFixed(1));
if (Math.abs(frozenAfter - frozenX) > 0.001) throw new Error("paused danmaku moved");
if (Math.abs(neighborAfter - neighborX) < 5) throw new Error("other danmaku stopped as well");

// 4) 同一轨道后到的新弹幕会排在被暂停的那条右边，不重叠
model.enqueue([message("d", "dddddddddd")], clock);
for (let i = 0; i < 80; i++) step(16);
const a = byId("a");
const d = byId("d");
console.log("a:", a ? `x=${a.x.toFixed(1)} lane=${a.lane}` : "gone", "| d:", d ? `x=${d.x.toFixed(1)} lane=${d.lane}` : "gone");
if (d && d.lane === a.lane && d.x < a.x + a.width + 24 - 0.001) throw new Error("queued danmaku overlaps the paused one");

// 4b) 专门构造同轨追尾：暂停时留下足够空间，后到的弹幕进入同一轨道并卡在后面
{
  const m2 = new M(WIDTH, HEIGHT, (m) => m.plainText.length * 10 + 12, { lineHeight: LINE, gap: 24, travelSeconds: 12, maxLanes: 1 });
  let t2 = 0;
  const stamp = () => performance.timeOrigin + t2;
  const tick2 = (ms) => { t2 += ms; m2.tick(stamp()); };
  const msg = (id) => ({ roomId: "room", id, plainText: "x".repeat(6), segments: [{ type: "text", text: "xxxxxx" }], receivedAt: stamp() });
  m2.enqueue([msg("p")], t2);
  tick2(16);
  const p = m2.active[0];
  for (let i = 0; i < 480; i++) tick2(16); // 让 p 走到画面中间附近
  m2.updatePointer({ x: p.x + 2, y: p.lane * LINE + 6, inside: true }, t2);
  tick2(16);
  if (m2.selection?.message.id !== "p") throw new Error("4b: hover did not select p");
  const frozen = p.x;
  m2.enqueue([msg("q")], t2);
  for (let i = 0; i < 600; i++) tick2(16);
  const q = m2.active.find((item) => item.message.id === "q");
  if (!q) throw new Error("4b: q never admitted");
  console.log("4b frozen p:", frozen.toFixed(1), "q:", `lane=${q.lane} x=${q.x.toFixed(1)}`, "p tail:", (p.x + p.width + 24).toFixed(1));
  if (Math.abs(p.x - frozen) > 0.001) throw new Error("4b: paused p moved");
  if (q.lane === p.lane) {
    if (q.x < p.x + p.width + 24 - 0.001) throw new Error("4b: q overlaps paused p");
    if (Math.abs(q.x - (p.x + p.width + 24)) > 0.5) throw new Error("4b: q did not settle right behind p");
  }
}

// 5) 释放后恢复整场滚动
model.release(model.selection.token);
const releaseX = byId("a").x;
for (let i = 0; i < 30; i++) step(16);
const resumedX = byId("a").x;
console.log("resume:", releaseX.toFixed(1), "->", resumedX.toFixed(1));
if (!(resumedX < releaseX - 5)) throw new Error("paused danmaku did not resume after release");

// 6) 暂停期间不会把队列塞满（同轨仍在入队）
console.log("stats:", JSON.stringify(model.stats));
console.log("PASS");