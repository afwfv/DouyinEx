# DouyinEx

抖音网页直播间增强 Userscript：弹幕重绘、简洁模式、聊天过滤、免费福袋、画质和 PK 分数。

## 功能

- **弹幕不掉帧**：Worker + OffscreenCanvas 重绘弹幕，与主线程解耦
- **弹幕悬停**：悬停只暂停鼠标指到的那一条弹幕，同轨道其他弹幕继续滚动；可复读、+1、引用回复
- **弹幕间距**：同轨相邻弹幕的间距随机（56–206px 起步），比原生更松，且不会互相压字；贴图宽度按实际字距测量，长句的尾字不会被裁
- **自动最高画质**：进入直播间自动切到当前可用的最高档（原画 > 蓝光 > 超清 > 高清 > 标清）
- **屏蔽礼物特效**：调用官方「礼物设置 → 屏蔽礼物特效」
- **屏蔽送礼弹幕**：弹幕画布与右侧聊天列表都不再出现「送出了 ×N」
- **PK 真实分数**：把 `100万+` 之类的缩写替换成精确值，并实时跟随票数刷新
- **悬浮设置框**：停靠在「在线观众」旁，显示当前在线观众数（`onlineUserForAnchor` 精确值优先，缺失或过期时回落到页面官方「在线观众」文本），鼠标提示附带本场人看过；点击展开设置

- **自动免费福袋**：只使用官方免费参与按钮，支持官方一键评论。自动关注单独开启；中奖弹窗保留。
- **简洁模式**：隐藏推广横幅、购物车、小时榜及礼物特效层；保留播放器控件、聊天和福袋入口，关闭后恢复。
- **进场消息过滤**：区分进场消息与普通聊天，保留“春天来了”等正常正文。
- **重复弹幕过滤**：不同用户的相同正文，10 秒内保留首条，缓存上限 1000 条。
- **自定义屏蔽词**：每行一个词，正文包含即屏蔽；按统一大小写、全角字符和空白后匹配，不执行正则。

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/)
2. 打开 [DouyinEx.user.js](./DouyinEx.user.js)，点击安装
3. 进入 https://live.douyin.com/ 任意直播间

脚本自带 `@updateURL`，安装后会随仓库 `main` 分支自动更新。

## 使用

点击「弹幕增强」悬浮按钮打开“直播工具”。首页只显示五个常用开关：简洁模式、进场屏蔽、重复过滤、自定义屏蔽词、自动免费福袋。

关键词开启后展开编辑框，每行一个，点击“保存关键词”生效；最多 100 条、4000 字符。过滤同时作用于增强弹幕画布和聊天列表，已在画布上显示的旧弹幕自然滚出后消失。

“更多设置”中保留自动最高画质、礼物特效屏蔽、送礼弹幕屏蔽、PK 真实分数，以及“允许福袋自动关注”。新增开关默认关闭，原有设置继续沿用。

自动免费福袋可能触发页面上的官方一键评论。需要额外付费、加入未达成的粉丝团、分享或无法识别的条件时跳过；看播时长不足会等待复查；自动关注默认关闭。状态区区分“已点击”和“已确认参与”，中奖弹窗保留，后台隐藏页面暂停操作。

悬停任意弹幕只暂停这一条（其余弹幕照常滚动），并弹出「回复 / +1 / 复制」操作。

## 更新记录

### 2026.11.16.02

- 修复长弹幕最后一个字被裁掉半个：Worker 里 `measure()` 每次重设 `font` 后没有恢复 `letterSpacing`，测量值比实际绘制少 `0.4px × 字数`；贴图宽度按测量值建立，长句右侧溢出右侧 7px 内边距后即被贴图边缘裁切。
- 抽出统一的字距常量 `K = "0.4px"`，测量、构造期与 `paint()` 共用；`measure()` 在 `measureText` 之前恢复字距，测量宽度与实际绘制一致。
- 新增 `tests/danmaku-metrics-regression.mjs`（5 项）与 `tests/browser-danmaku-tailclip.mjs`（6 条弹幕 × 3 种 DPR，无头 Edge 实测贴图右边缘）：47 字弹幕修复前裁切 12.8px（约半个字），修复后 0px，右侧余量约 5.5px。

### 2026.11.16.01

- 悬浮按钮的在线人数拆开口径：在线只取 `onlineUserForAnchor` 精确值，缺失或超过 45 秒未刷新时回落到页面「在线观众」按钮的官方文本；`total` / `totalUser` 这类累计观看只写入提示里的「本场人看过」，不再顶替在线数字。
- 去掉原来 `total → total_user → online_user_for_anchor` 的三字段轮询取值（数值量级不同，是数字来回跳的直接原因），补上 int64 `Long` 对象与「10万+」「1.2亿」缩写的解析。
- 「在线观众」按钮改为真实 MutationObserver 监听，页面重渲染换掉节点后 4 秒内自动重挂；发布节流 1 秒，数值不变不重绘，切房或关闭时解绑并清空状态。
- 新增 11 项逻辑回归与 7 项本地 Edge DOM 检查（`tests/audience-regression.mjs`、`tests/browser-audience.mjs`），原有回归保持通过。

### 2026.11.13.08

- 礼物、进场、重复及关键词过滤改为保位隐藏，不再通过 `display:none` 抽走官方列表行，避免行高、`scrollHeight` 和滚动位置突变。
- 礼物行在回收复用时立即重新分类，合并到动画帧批量处理，避免旧礼物标记误伤普通弹幕。
- 弹幕文字按物理像素对齐，降低缓存贴图在滚动中的重采样颤动；表情加载只刷新引用该表情的贴图。
- 忽略播放器亚像素尺寸变化，避免画布反复重置；保留单条悬停、随机间距和去重行为。
- 85 项逻辑与本地 Edge 检查通过，6000 帧弹幕模型对照一致；真实直播间仍需复核。

### 2026.11.12.07

- 新增自动参与免费福袋、简洁模式、进场消息过滤、重复弹幕过滤和自定义关键词屏蔽，新增开关默认关闭。
- 菜单改为紧凑深色面板：五个常用开关直接显示，关键词编辑按需展开，原有画质、礼物、PK 和自动关注选项收在“更多设置”。
- 重复弹幕按正文归一化，10 秒内保留首条，缓存限制 1000 条；关键词按每行一个词进行字面匹配，支持 100 条 / 4000 字符。
- 免费福袋使用官方免费按钮，支持官方一键评论；未满足的付费、分享及未知条件跳过。自动关注独立选择，中奖弹窗保留；切房、关闭、离开页面会取消待执行任务。
- 59 项逻辑回归 + 16 项本地 Edge 浏览器检查通过，6000 帧弹幕模型对照一致；补丁重建和回滚哈希均已验证。尚未在真实抖音直播间或账号上实测。
- 福袋条件解析参考 Almighty-ap/DouyinEX，保留 MIT 许可及固定提交来源。

### 2026.11.12.06

- 切换直播间、退出页面或关闭自动设置时，立即取消旧房间的轮询、延迟检查和动画帧，避免旧任务继续点击。
- 开关送礼弹幕过滤时不再重复扫描画质与礼物设置；保留用户自行打开的礼物菜单。
- Worker 关闭时立即结束待决快照请求并清理定时器，关闭后请求立即返回错误。
- 本地 23 项回归全部通过，6000 帧弹幕模型对照一致。模拟连续切房 40 次时，任务峰值由 121 降至 4，退出后清零；该数据不是直播间 FPS，本次未做直播页面实测。

## 兼容性

- 仅在 `https://live.douyin.com/*` 生效
- 需要浏览器支持 `Worker` + `OffscreenCanvas`（Chrome / Edge 105+）
- 抖音页面结构变化时脚本会静默回退到原生弹幕，不影响正常观看

## 截图

简洁菜单（本地测试页面，功能状态为演示）：

![直播工具菜单](docs/menu-v07.png)

![PK 真实分数](docs/preview.jpg)

## 说明

仅供个人学习与前端技术交流使用，请遵守抖音平台规则。
## 本地验证

安装 Node.js 后，在仓库根目录运行（无额外依赖）：

```sh
node tests/regression.mjs DouyinEx.user.js
node tests/preferences-regression.mjs DouyinEx.user.js
node tests/engine-lifecycle-regression.mjs DouyinEx.user.js
node tests/room-tools-regression.mjs DouyinEx.user.js
node tests/danmaku-renderer-regression.mjs DouyinEx.user.js
node tests/audience-regression.mjs DouyinEx.user.js
node tests/danmaku-metrics-regression.mjs DouyinEx.user.js
```

Windows + Microsoft Edge 可运行界面与 DOM 验证：

```sh
node tests/browser-room-tools.mjs DouyinEx.user.js
node tests/browser-danmaku-stability.mjs DouyinEx.user.js
node tests/browser-audience.mjs DouyinEx.user.js
node tests/browser-danmaku-tailclip.mjs DouyinEx.user.js
```

浏览器测试只打开本机临时测试页，输出到 `browser-v07/`、`browser-v08/`，不访问抖音账号或参与真实福袋。页面结构变化仍需真实直播间复核。

## 参考与许可

福袋条件解析与部分选择器参考 [Almighty-ap/DouyinEX](https://github.com/Almighty-ap/DouyinEX)，固定提交 `2ad3642899e439c7a24b14eb9ee0f57442de872c`。本项目增加了可取消任务、参与确认、保留中奖弹窗、可恢复布局和有界正文过滤。MIT 许可全文见 [THIRD_PARTY_NOTICES.txt](THIRD_PARTY_NOTICES.txt)，并已嵌入 Userscript。
