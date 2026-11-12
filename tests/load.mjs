import fs from "node:fs";
import vm from "node:vm";

export function source(file) {
  return fs.readFileSync(file, "utf8");
}

export function workerSource(text) {
  const anchor = text.indexOf("new Blob([");
  if (anchor < 0) throw new Error("Embedded worker not found");
  let start = anchor + "new Blob([".length;
  while (/\s/.test(text[start])) start++;
  if (text[start] !== '"') throw new Error("Expected JSON worker literal");
  let end = start + 1;
  for (; end < text.length; end++) {
    if (text[end] === "\\") { end++; continue; }
    if (text[end] === '"') break;
  }
  return { start, end: end + 1, code: JSON.parse(text.slice(start, end + 1)) };
}

export function modelTypes(text, seed = 12345) {
  const { code } = workerSource(text);
  const start = code.indexOf("var T=");
  const end = code.indexOf(";var b=class");
  if (start < 0 || end < start) throw new Error("Model anchors not found");
  const math = Object.create(Math);
  math.random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  return vm.runInNewContext(`${code.slice(start, end)};({ T, M });`, { Math: math });
}

export function moduleType(text, startMarker, endMarker, name, globals) {
  const start = text.indexOf(startMarker);
  const end = text.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < start) throw new Error(`Module ${name} not found`);
  return vm.runInNewContext(`${text.slice(start, end)};${name};`, globals);
}
