// 验证「间距随机 + 更大」：同轨道相邻弹幕的间距分布、不重叠、随机生效
import fs from "node:fs";

const file = process.argv[2] ?? "F:/DYLIVE/repo/DouyinEx.user.js";
const text = fs.readFileSync(file, "utf8");

const start = text.indexOf("new Blob([");
let i = start + "new Blob([".length;
while (/\s/.test(text[i])) i++;
const quote = text[i];
let j = i + 1;
while (j < text.length) {
  const ch = text[j];
  if (ch === "\\") { j += 2; continue; }
  if (ch === quote) break;
  j++;
}
const worker = new Function("return " + text.slice(i, j + 1))();
const modelStart = worker.indexOf("var T=");
const modelEnd = worker.indexOf(";var b=class");
const { T, M } = new Function(`${worker.slice(modelStart, modelEnd)};return { T, M };`)();
console.log("worker defaults:", JSON.stringify({ gap: T.gap, gapRandom: T.gapRandom }));

const WIDTH = 2016, HEIGHT = 1134, LINE = 36;
const SPEED = WIDTH / 12;
function simulate({ rate, seconds, seed }) {
  let state = seed ?? 12345;
  const random = () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };
  const originalRandom = Math.random;
  Math.random = random;
  try {
    const model = new M(WIDTH, HEIGHT, (m) => m.plainText.length * 10 + 12, { ...T, lineHeight: LINE, travelSeconds: 12 });
    let clock = 0, id = 0;
    const gapMs = 1000 / rate;
    let nextAt = 0;
    const lengths = [2, 4, 6, 8, 10, 3, 5, 12];
    for (let t = 0; t < seconds * 1000; t += 16) {
      clock = t;
      if (t >= nextAt) {
        nextAt += gapMs;
        const len = lengths[id % lengths.length];
        model.enqueue([{ roomId: "room", id: "m" + id++, plainText: "x".repeat(len), segments: [{ type: "text", text: "x".repeat(len) }], receivedAt: performance.timeOrigin + t }], performance.timeOrigin + t);
      }
      model.tick(performance.timeOrigin + clock);
    }
    const byLane = new Map();
    for (const item of model.active) {
      if (!byLane.has(item.lane)) byLane.set(item.lane, []);
      byLane.get(item.lane).push(item);
    }
    const gaps = [];
    let overlaps = 0;
    for (const items of byLane.values()) {
      items.sort((a, b) => a.x - b.x);
      for (let k = 1; k < items.length; k++) {
        const gap = items[k].x - (items[k - 1].x + items[k - 1].width);
        gaps.push(gap);
        if (gap < -0.5) overlaps++;
      }
    }
    gaps.sort((a, b) => a - b);
    const stat = (list) => ({
      count: list.length,
      min: +list[0]?.toFixed(1),
      p25: +list[Math.floor(list.length * 0.25)]?.toFixed(1),
      median: +list[Math.floor(list.length * 0.5)]?.toFixed(1),
      p75: +list[Math.floor(list.length * 0.75)]?.toFixed(1),
      max: +list[list.length - 1]?.toFixed(1),
      mean: +(list.reduce((s, v) => s + v, 0) / Math.max(1, list.length)).toFixed(1)
    });
    return { gaps, overlaps, lanes: byLane.size, active: model.active.length, stats: model.stats, stat: stat(gaps) };
  } finally {
    Math.random = originalRandom;
  }
}

const normal = simulate({ rate: 6, seconds: 40 });
const heavy = simulate({ rate: 45, seconds: 30 });
console.log("normal(6 msg/s):", JSON.stringify(normal.stat), "active", normal.active, "overlaps", normal.overlaps);
console.log("heavy(45 msg/s):", JSON.stringify(heavy.stat), "active", heavy.active, "queued", heavy.stats.queued, "expired", heavy.stats.expired, "overlaps", heavy.overlaps);

const failures = [];
if (normal.overlaps || heavy.overlaps) failures.push("overlap detected");
if (normal.gaps.length < 10 || heavy.gaps.length < 30) failures.push("not enough same-lane pairs");
const h = heavy.stat;
if (h.min < T.gap - 3) failures.push(`heavy min gap ${h.min} < base ${T.gap}`);
if (h.p75 - h.min < 15) failures.push(`heavy gaps not random enough: p75-min ${(h.p75 - h.min).toFixed(1)}`);
if (h.mean < 70) failures.push(`heavy mean gap too small: ${h.mean}`);
if (normal.stat.min < T.gap - 3) failures.push(`normal min gap ${normal.stat.min} < base ${T.gap}`);
if (failures.length) throw new Error(failures.join(" | "));
console.log("PASS");