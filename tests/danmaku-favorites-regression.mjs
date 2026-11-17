import assert from "node:assert/strict";
import { source, moduleType } from "./load.mjs";

const text = source(process.argv[2]);
const results = [];
function test(name, run) {
  try { results.push({ name, pass: true, observed: run() }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
}
function storage(initial = null) {
  const map = new Map();
  if (initial !== null) map.set("douyin-ex:v1:danmaku-favorites", initial);
  return {
    map,
    getItem(key) { return map.get(key) ?? null; },
    setItem(key, value) { map.set(key, String(value)); },
    removeItem(key) { map.delete(key); }
  };
}
function types(area = storage()) {
  return moduleType(
    text,
    "  // src/features/danmaku-favorites.ts",
    "  // src/ui/overlay.ts",
    "({ DanmakuFavorites, FAVORITES_KEY, favoriteText })",
    { localStorage: area }
  );
}

test("empty-and-corrupt-stores-start-clean", () => {
  const empty = new (types().DanmakuFavorites)();
  assert.equal(empty.list().length, 0);
  const corrupt = new (types(storage("{broken")).DanmakuFavorites)();
  assert.equal(corrupt.list().length, 0);
  return { empty: 0, corrupt: 0 };
});

test("legacy-strings-are-migrated-deduplicated-and-trimmed", () => {
  const area = storage(JSON.stringify(["  first  ", { text: "second", authorName: " 甲 ", savedAt: 12 }, "first", { text: 42 }, null]));
  const store = new (types(area).DanmakuFavorites)();
  assert.equal(JSON.stringify(store.list().map((entry) => entry.text)), JSON.stringify(["first", "second"]));
  assert.equal(store.list()[1].authorName, "甲");
  assert.equal(store.list()[1].savedAt, 12);
  return store.list();
});

test("add-toggle-remove-and-persistence", () => {
  const area = storage();
  const api = types(area), store = new api.DanmakuFavorites(area), seen = [];
  store.subscribe((entries) => seen.push(entries.length));
  assert.equal(store.add({ text: "  你好  ", authorName: " 小明 " }), true);
  assert.equal(store.add({ text: "你好", authorName: "另一个" }), false, "whitespace duplicate was accepted");
  assert.equal(store.list()[0].text, "你好");
  assert.equal(store.list()[0].authorName, "小明");
  assert.equal(store.list().length, 1);
  const firstToggle = store.toggle({ text: "第二条", authorName: "乙" });
  assert.equal(firstToggle.favorited, true); assert.equal(firstToggle.changed, true);
  const secondToggle = store.toggle({ text: "第二条", authorName: "乙" });
  assert.equal(secondToggle.favorited, false); assert.equal(secondToggle.changed, true);
  assert.equal(store.remove("不存在"), false);
  const restored = new api.DanmakuFavorites(area);
  assert.equal(JSON.stringify(restored.list().map((entry) => entry.text)), JSON.stringify(["你好"]));
  assert.equal(JSON.stringify(seen), JSON.stringify([1, 2, 1]));
  return { persisted: restored.list(), events: seen };
});

test("favorite-text-is-bounded-and-empty-is-rejected", () => {
  const api = types(), store = new api.DanmakuFavorites();
  assert.equal(api.favoriteText("  x  "), "x");
  assert.equal(api.favoriteText("x".repeat(800)).length, 500);
  assert.equal(store.add({ text: "   " }), false);
  assert.equal(store.toggle({ text: "" }), null);
  return { maximum: 500 };
});

test("store-limit-keeps-newest-and-clear-emits-once", () => {
  const api = types(), store = new api.DanmakuFavorites(null, 3), events = [];
  store.subscribe((entries) => events.push(entries.length));
  for (const text of ["a", "b", "c", "d"]) store.add({ text });
  assert.equal(JSON.stringify(store.list().map((entry) => entry.text)), JSON.stringify(["d", "c", "b"]));
  assert.equal(store.clear(), true);
  assert.equal(store.clear(), false);
  assert.equal(JSON.stringify(events), JSON.stringify([1, 2, 3, 3, 0]));
  return { entries: store.list().length, events };
});

test("storage-write-failure-keeps-memory-session", () => {
  const area = storage();
  area.setItem = () => { throw new Error("quota"); };
  const api = types(area), store = new api.DanmakuFavorites(area);
  assert.equal(store.add({ text: "仍可用" }), true);
  assert.equal(JSON.stringify(store.list().map((entry) => entry.text)), JSON.stringify(["仍可用"]));
  assert.equal(store.remove("仍可用"), true);
  return { memoryOnly: true };
});

test("userscript-wires-menu-toggle-and-composer-cleanup", () => {
  assert.ok(text.includes('if (action === "favorite")'));
  assert.ok(text.includes("this.favorites.toggle"));
  assert.ok(text.includes("this.ui.setFavoriteActive(result.favorited)"));
  assert.ok(text.includes("this.favoriteComposer.start()"));
  assert.ok(text.includes("this.favoriteComposer?.dispose()"));
  assert.ok(text.includes("new DanmakuFavoriteComposer(chat, this.favorites"));
  assert.ok(text.includes("this.favoritesOff = this.favorites.subscribe"));
  assert.ok(text.includes("this.favoritesOff?.()"));
  return { menu: true, composer: true, cleanup: true };
});

const passed = results.filter((result) => result.pass).length;
console.log(JSON.stringify({ passed, failed: results.length - passed, results }, null, 2));
if (passed !== results.length) process.exitCode = 1;