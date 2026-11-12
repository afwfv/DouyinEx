import assert from "node:assert/strict";
import { modelTypes, source } from "./load.mjs";

const types = process.argv.slice(2).map((file) => modelTypes(source(file), 6789));
assert.equal(types.length, 2);
const models = types.map(({ M }) => new M(1920, 1080, (m) => m.plainText.length * 10 + 12));
let seed = 54321, id = 0;
function random() { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }
function state(m) {
  return JSON.stringify({ active: m.active, queue: m.queue, selection: m.selection, stats: m.stats, ignored: m.ignored, nextLane: m.nextLane });
}
for (let step = 0; step < 6000; step++) {
  const now = 1700000000000 + step * 16;
  const messages = [];
  const count = step % 1000 < 500 ? Math.floor(random() * 4) : 0;
  for (let i = 0; i < count; i++) {
    const text = "x".repeat(2 + Math.floor(random() * 30));
    const message = { id: `message-${id++}`, roomId: "fixture", plainText: text, segments: [{ type: "text", text }], receivedAt: now };
    messages.push(message);
    if (id % 31 === 0) messages.push(message);
  }
  for (let i = 0; i < models.length; i++) {
    const m = models[i];
    if (messages.length) m.enqueue(structuredClone(messages), now);
    if (step % 137 === 50 && m.active.length) {
      const item = m.active[0];
      m.updatePointer({ x: item.x + 4, y: item.lane * m.config.lineHeight + 6, inside: true }, now);
    }
    if (step % 137 === 110) { m.release(); m.updatePointer({ x: 0, y: 0, inside: false }, now); }
    if (step && step % 499 === 0) m.resize(step % 2 ? 1280 : 1920, step % 2 ? 720 : 1080);
    if (step && step % 701 === 0) m.configure({ ...types[i].T, fontSize: step % 2 ? 24 : 20, lineHeight: step % 2 ? 44 : 36, maxLanes: step % 2 ? 7 : 0 });
    if (step && step % 853 === 0) m.suspend();
    m.tick(now);
  }
  assert.equal(state(models[0]), state(models[1]), `model state diverged at frame ${step}`);
}
console.log(JSON.stringify({ frames: 6000, simulatedSeconds: 96, identical: true, includes: ["saturation", "idle", "expiry", "deduplication", "hover", "release", "resize", "configure", "suspend"] }, null, 2));
