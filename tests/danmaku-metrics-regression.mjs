import assert from "node:assert/strict";
import { source, workerSource } from "./load.mjs";

const text = source(process.argv[2]);
const code = workerSource(text).code;
const results = [];
function test(name, run) {
  try { results.push({ name, pass: true, observed: run() }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
}

test("letter-spacing-constant-is-shared", () => {
  assert.ok(code.includes('K="0.4px"'), "缺少统一的字距常量 K");
  const literal = (code.match(/"0\.4px"/g) || []).length;
  assert.equal(literal, 1, `0.4px 字面量应只出现在常量定义处，实际 ${literal} 处`);
  return { literal };
});

test("measure-applies-letter-spacing-before-measuring", () => {
  const anchor = "measure=e=>(this.ctx.font=this.font(),";
  const start = code.indexOf(anchor);
  assert.ok(start >= 0, "measure 入口已变化");
  const body = code.slice(start, start + 220);
  const spacingAt = body.indexOf("this.ctx.letterSpacing=K");
  const measureAt = body.indexOf("measureText(");
  assert.ok(spacingAt > 0, "measure 未恢复 letterSpacing");
  assert.ok(measureAt > spacingAt, "letterSpacing 必须在 measureText 之前设置");
  return { spacingAt, measureAt };
});

test("paint-and-constructor-reuse-the-constant", () => {
  const paint = code.slice(code.indexOf("paint(e,t){"), code.indexOf("draw(e,t){"));
  assert.ok(paint.includes("e.letterSpacing=K"), "paint 未使用统一字距常量");
  const ctor = code.slice(code.indexOf("k=class{"), code.indexOf("ctx;"));
  assert.ok(ctor.includes("n.letterSpacing=K"), "构造期字距未使用统一常量");
  return { paint: paint.length, ctor: ctor.length };
});

test("clipping-model-matches-measured-regression", () => {
  // 与 browser-danmaku-tailclip 实测对齐：20px 中文字形 ~20px 进位，右侧 padding 7，阴影外扩 ~2.6
  const advance = 20, spacing = 0.4, padding = 7, shadow = 2.6;
  const before = (n) => n * advance + padding * 2;
  const after = (n) => n * advance + n * spacing + padding * 2;
  const painted = (n) => padding + n * advance + n * spacing + shadow;
  const overflow = (n, width) => Math.max(0, Number((painted(n) - width(n)).toFixed(2)));
  const rows = [3, 21, 47].map((n) => ({
    chars: n,
    before: overflow(n, before),
    after: overflow(n, after)
  }));
  assert.equal(rows[0].before, 0, "短弹幕不应裁切");
  assert.ok(rows[1].before > 0, "21 字应产生可见裁切");
  assert.ok(rows[2].before >= 10, "47 字裁切应达到半个字");
  assert.ok(rows.every((row) => row.after === 0), "修复后所有长度都不裁切");
  return rows;
});

test("sprite-width-still-follows-measured-width", () => {
  const draw = code.slice(code.indexOf("drawItem(e){"), code.indexOf("stats(){"));
  assert.ok(draw.includes("new OffscreenCanvas(Math.max(1,Math.ceil(e.width*this.dpr))"), "贴图宽度必须取测量结果");
  assert.ok(draw.includes("drawImage(a,x,c,e.width,i)"), "贴图绘制宽度必须与测量一致");
  return { draw: draw.length };
});

const passed = results.filter((r) => r.pass).length;
console.log(JSON.stringify({ passed, failed: results.length - passed, results }, null, 2));
if (passed !== results.length) process.exitCode = 1;