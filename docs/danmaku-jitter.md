# 开启增强弹幕后「抽搐」：根因、修复与证据（2026.11.16）

> 说明：本文命令中的 `<本地工作副本>` 指本次修复的复现工装目录（未随仓库发布）。仓库内可直接用 `node tests/danmaku-jitter-regression.mjs DouyinEx.user.js` 复跑门禁，`scenario-jitter.mjs` / `e2e-worker-jitter.mjs` 等工装可在本地按文中步骤重建。

## 1. 现象与判定

「抽搐」不是匀速运动本身抖，而是**事件驱动的位置重写**：没有鼠标、没有尺寸变化时引擎是干净的（场景矩阵 `baseline`：后退跳变 0、变轨 0、重叠 0）。一旦发生下面三类事件，旧实现会在**单帧内**把弹幕挪走几十到几百像素、换轨、或直接挪出画面。

| 现象 | 触发 | 旧实现的机制 |
| --- | --- | --- |
| 鼠标停在画面上，某条弹幕不动了，后面的弹幕整排被甩到右边/甩出画面 | 指针扫过画面后停住 | 悬停选中无超时（永久冻结）＋同轨「避让」clamp 级联把后方条目推到 `暂停条.x+宽+56` |
| 进出全屏 / 拉窗口，整屏弹幕向右回跳一下，个别直接消失 | `resize()` | `x *= 新宽/旧宽` 全场重写；轨道数变化时重排，放不下的条目 `continue` 丢弃 |
| 改抖音原生「弹幕设置」的字号/显示区域/轨道数，弹幕瞬间叠成一团 | `configure()` | `release()` + `lane %= lanes` 把条目折叠进前面的轨道，且不重测宽度、不做避让 |

## 2. 修复（2026.11.16.03）

1. **`resize()` 不再重写位置**：只更新 `width/height`，保留每条弹幕的绝对 x 与轨道。缩小画面时右边缘外的条目被裁掉、随后自然飘入；放大时不会整屏回跳。
2. **`configure()` 不再折叠轨道**：不 `release()`、不取模，只在字号/行高变化时按新字号重测宽度；轨道数变化只影响**新入场**条目。
3. **悬停避让改为整轨顺延停住**：选中条与其后（同轨、x 在其右侧）的条目一起停住，不再把后方条目单帧右推。
4. **悬停意图门**：只有指针在 420ms 内真实移动过才允许新建暂停；鼠标停在画面上不会再把整条轨道冻住。
5. **停驻上限**：未被菜单按住时，单条暂停最长 12 秒后自动放行（`release()` 后同 id 不会立刻重选）。
6. **只清用到的高水位轨道带**：`draw()` 不再每帧整屏 `clearRect`，而是清 `max(当前最大轨道+2, 上一帧高水位)` 对应的高度。

补丁脚本（可重放）：`<本地工作副本>/src/patch-jitter.mjs`、`patch-lane-hold.mjs`。

## 3. 证据：场景矩阵（60Hz 合成时钟，1800 帧/场景，1920×1080/18 轨）

命令：

```powershell
node <本地工作副本>/src/scenario-jitter.mjs DouyinEx.user.js final
node <本地工作副本>/src/summarize.mjs logs\scenario-final\report.json
```

| 场景 | 旧版（02） | 新版（04） |
| --- | --- | --- |
| `pointer-events-then-rest`（指针停住） | 选中 **1581 帧**（26s 不释放） | 0 |
| `pointer-single-poke`（点一下就不动） | 选中 1581 帧 | 0 |
| `pointer-sweep`（有意图地扫动） | 选中 1568 帧 / 3 token | 721 帧 / 3 token（12s 上限，功能正常） |
| `configure-area-half`（区域 60→30%） | **变轨 36、同轨重叠 2075 对** | 0 / 0 |
| `configure-drag-area`（模拟拖滑杆 61 次） | 变轨 37、重叠 1341 对（最深 -208px） | 0 / 0 |
| `configure-font`（字号 20→28） | 变轨 24、重叠 716 对 | 0 / 0 |
| `configure-maxlanes`（18→9 轨） | 变轨 36、重叠 2075 对 | 0 / 0 |
| `resize-shrink`（1920→1600→1920） | **后退跳变 76 次（最大 312px）、变轨 54、中途消失 6** | 0 / 0 / 0 |
| `fullscreen-enter-exit`（1920→2560→1920） | **后退跳变 83 次（最大 632px）、变轨 50** | 0 / 0 |
| `resize-subpixel`（±0.5px ×40） | 速度异常 2308 帧 | 0 |
| `baseline` / `configure-opacity-speed` | 0 | 0 |

## 4. 证据：真实 Worker 端到端（snapshot 协议抽样）

命令：`node <本地工作副本>/src/e2e-worker-jitter.mjs DouyinEx.user.js after`

真实路径（`new Worker` + `transferControlToOffscreen` + 现有消息协议，100ms 抽样 9 秒/场景）：

| 场景 | 旧版 | 新版 |
| --- | --- | --- |
| `resize-cycle`（1280→960→1280→1706→1280） | 后退 22 次、最大 **404px** | 0 |
| `pointer-rest`（指针停住） | 选中 21 个采样点 | 0 |
| `configure-area` / `configure-font` | 0（旧版在该探针里因 12s 基准看不出重叠） | 0 |

## 5. 回归门禁

新增 `tests/danmaku-jitter-regression.mjs`（纯 Node，无需浏览器，6 项）：

- 稳定滚动 900 帧无位置重写、无变轨、无重叠；
- 指针停住 816ms 后再飘过的弹幕不被冻结；
- 有意图悬停会暂停，60 帧内零位移，同轨后方**零位移**（不推飞），12s 后自动放行并恢复；
- `resize` 后位置/轨道不变，下一帧位移等于 `width/travelSeconds`；
- `configure`（区域/字号）不变轨、不重叠、不丢可见条目；
- `hoverPause:false` 时不建立暂停。

旧版 02 上同一套：1 通过 / 5 失败；新版 04：6 通过。

## 6. 残余风险

- `tick()` 的 delta 仍被截断在 50ms：一次 200ms 的掉帧会永久吃掉 150ms 位移，恢复首帧位移是正常的 3 倍。它表现为「停一下再窜一下」，不是本次的位置重写，未改。
- 物理像素量化（`Math.round(x*dpr)/dpr`）在 120Hz/非整数 DPR 下步长会在 0/1px 间跳，只影响文字边缘观感，未改。
- 聊天列表的礼物/重复过滤仍是「折叠行」（2026.11.13.09 的设计），列表会随屏蔽上移；`browser-danmaku-stability` 的 4 项失败是 13.08 保位设计的旧断言，属既有状态。
- 真机挂载：本机无头 Edge（未登录、无自动播放）在 `live.douyin.com/848378893111` 上能看到 `.CanvasDanmakuPlugin` 与聊天区，但插件未挂载（`#douyin-ex-floating` 不存在）。2026-11-13 的真机快照（`work/fullscreen-run.json`，7 条真实弹幕）证明挂载路径在真实播放状态下可用；本次改动未触碰 `discoverLiveSession`。仍需在已登录、正在播放的浏览器里复核一次。
