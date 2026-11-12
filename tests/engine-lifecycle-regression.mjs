import assert from "node:assert/strict";
import { source, moduleType } from "./load.mjs";
import { patchEngineLifecycle } from "../patch-engine-lifecycle.mjs";

const input = source(process.argv[2]);
const text = process.argv.includes("--patched") ? patchEngineLifecycle(input) : input;
const results = [];

function fixture() {
  let clock = 0, nextTimer = 0;
  const timers = new Map();
  const sent = [], revoked = [];
  class Worker {
    terminated = 0;
    postMessage(message) { sent.push(message); }
    terminate() { this.terminated++; }
  }
  const globals = {
    DEFAULT_CONFIG: { maxQueue: 200 }, Worker,
    Blob: class {},
    URL: { createObjectURL() { return "blob:fixture"; }, revokeObjectURL(value) { revoked.push(value); } },
    performance: { now() { return clock; } },
    document: { hidden: false },
    setTimeout(fn, ms) { const id = ++nextTimer; timers.set(id, { fn, at: clock + ms }); return id; },
    clearTimeout(id) { timers.delete(id); },
    requestAnimationFrame() { throw new Error("Unexpected animation scheduling in snapshot test"); },
    cancelAnimationFrame() {}
  };
  const Type = moduleType(text, "  // src/engine-client.ts", "  // src/ui/overlay.ts", "EngineClient", globals);
  const client = new Type("fixture", { transferControlToOffscreen() { return {}; } }, 1280, 720, 1);
  const reply = (data) => client.worker.onmessage({ data: { session: "fixture", ...data } });
  reply({ type: "ready" });
  assert.equal(timers.size, 0, "init timeout must be cleared before each snapshot fixture");
  return {
    client, timers, sent, revoked, reply,
    advance(ms) {
      const until = clock + ms;
      for (;;) {
        const pending = [...timers].filter(([, value]) => value.at <= until).sort((a, b) => a[1].at - b[1].at || a[0] - b[0]);
        if (!pending.length) break;
        const [id, timer] = pending[0];
        timers.delete(id);
        clock = timer.at;
        timer.fn();
      }
      clock = until;
    },
    cleanup() {
      client.dispose();
      // Baseline deliberately leaves timers alive. Settle those promises so a
      // failed case cannot leak unhandled rejections into later cases.
      this.advance(10000);
    }
  };
}

function observe(promise) {
  const result = { status: "pending" };
  promise.then((value) => { result.status = "resolved"; result.value = value; }, (error) => { result.status = "rejected"; result.error = error.message; });
  return result;
}
async function flush() { await Promise.resolve(); await Promise.resolve(); }
async function test(name, run) {
  const env = fixture();
  try { results.push({ name, pass: true, observed: await run(env) }); }
  catch (error) { results.push({ name, pass: false, error: error.message }); }
  finally { env.cleanup(); await flush(); }
}

await test("snapshot-normal-response-cleans-timeout", async (env) => {
  const state = observe(env.client.snapshot());
  const request = env.sent.at(-1);
  assert.equal(request.type, "snapshot");
  env.reply({ type: "snapshot", session: "foreign", requestId: request.requestId });
  env.reply({ type: "snapshot", requestId: request.requestId + 99 });
  await flush();
  assert.equal(state.status, "pending");
  assert.equal(env.timers.size, 1);
  env.reply({ type: "snapshot", requestId: request.requestId, active: [{ id: "message" }] });
  await flush();
  assert.equal(state.status, "resolved");
  assert.equal(state.value.active[0].id, "message");
  assert.equal(env.timers.size, 0);
  assert.equal(env.client.snapshots.size, 0);
  env.reply({ type: "snapshot", requestId: request.requestId });
  env.advance(2500);
  assert.equal(state.status, "resolved");
  return { status: state.status, timers: env.timers.size, pending: env.client.snapshots.size, foreignAndDuplicateResponsesIgnored: true };
});

await test("snapshot-timeout-remains-2000ms", async (env) => {
  const state = observe(env.client.snapshot());
  const requestId = env.sent.at(-1).requestId;
  env.advance(1999);
  await flush();
  assert.equal(state.status, "pending");
  env.advance(1);
  await flush();
  assert.equal(state.status, "rejected");
  assert.equal(state.error, "Worker snapshot timeout");
  assert.equal(env.client.snapshots.size, 0);
  assert.equal(env.timers.size, 0);
  env.reply({ type: "snapshot", requestId });
  assert.equal(state.status, "rejected");
  return { status: state.status, error: state.error, timeoutMs: 2000, timers: env.timers.size };
});

await test("snapshot-dispose-rejects-immediately", async (env) => {
  const state = observe(env.client.snapshot());
  env.client.dispose();
  await flush();
  assert.equal(state.status, "rejected", "snapshot must reject when the worker is disposed, before its 2s timeout");
  assert.equal(state.error, "Worker is closed");
  assert.equal(env.timers.size, 0, "disposed snapshot timer must be cancelled");
  assert.equal(env.client.snapshots.size, 0);
  return { status: state.status, timers: env.timers.size, pending: env.client.snapshots.size };
});

await test("snapshot-after-dispose-rejects-without-scheduling", async (env) => {
  env.client.dispose();
  const sentBefore = env.sent.length;
  const idBefore = env.client.snapshotId;
  const state = observe(env.client.snapshot());
  await flush();
  assert.equal(state.status, "rejected", "a closed worker must reject snapshot immediately");
  assert.equal(state.error, "Worker is closed");
  assert.equal(env.timers.size, 0);
  assert.equal(env.client.snapshots.size, 0);
  assert.equal(env.client.snapshotId, idBefore);
  assert.equal(env.sent.length, sentBefore);
  return { status: state.status, timers: env.timers.size, extraWorkerMessages: env.sent.length - sentBefore };
});

await test("snapshot-multiple-pending-and-idempotent-dispose", async (env) => {
  const states = Array.from({ length: 4 }, () => observe(env.client.snapshot()));
  const ids = env.sent.filter((command) => command.type === "snapshot").map((command) => command.requestId);
  assert.equal(new Set(ids).size, 4);
  env.reply({ type: "snapshot", requestId: ids[1] });
  await flush();
  assert.equal(states[1].status, "resolved");
  assert.equal(env.timers.size, 3);
  env.client.dispose();
  env.client.dispose();
  await flush();
  assert.deepEqual(states.map((state) => state.status), ["rejected", "resolved", "rejected", "rejected"]);
  assert.equal(env.timers.size, 0);
  assert.equal(env.client.snapshots.size, 0);
  assert.equal(env.client.worker.terminated, 1);
  assert.equal(env.revoked.length, 1);
  assert.equal(env.sent.filter((command) => command.type === "destroy").length, 1);
  return { statuses: states.map((state) => state.status), timers: env.timers.size, terminateCalls: env.client.worker.terminated, revokeCalls: env.revoked.length };
});

await test("dispose-without-snapshots-is-idempotent", async (env) => {
  env.client.dispose();
  env.client.dispose();
  await flush();
  assert.equal(env.timers.size, 0);
  assert.equal(env.client.snapshots.size, 0);
  assert.equal(env.client.worker.terminated, 1);
  return { timers: env.timers.size, terminateCalls: env.client.worker.terminated };
});

const passed = results.filter((result) => result.pass).length;
console.log(JSON.stringify({ passed, failed: results.length - passed, results }, null, 2));
if (passed !== results.length) process.exitCode = 1;
