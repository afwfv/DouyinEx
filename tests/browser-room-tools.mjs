import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidate = path.resolve(process.argv[2]);
const source = fs.readFileSync(candidate, 'utf8');
const out = path.join(root, 'browser-v07', path.basename(candidate));
fs.mkdirSync(out, { recursive: true });
function segment(from, to) { const a=source.indexOf(from),b=source.indexOf(to,a+from.length);return a<0||b<a?'':source.slice(a,b); }
const modules = segment('  // src/features/lottery-rules.ts', '  // src/ui/geometry.ts') +
  segment('  // src/adapters/room-preferences.ts', '  // src/userscript.ts');
const tests = String.raw`
const results=[];
const assert=(condition,message='Assertion failed')=>{if(!condition)throw Error(message);};
const pause=()=>new Promise(resolve=>setTimeout(resolve,40));
const hidden=row=>getComputedStyle(row).display==='none';
async function test(name,fn){try{assert(typeof ChatContentFilter==='function','Five room tools absent');await fn();results.push({name,pass:true});}catch(e){results.push({name,pass:false,error:e.message});}}
const chat=document.getElementById('chatroom');
const makeRow=(body,user='小明',isEntry=false)=>{const row=document.createElement('div');row.className='webcast-chatroom___item';
  if(isEntry){row.dataset.messageType='enter';row.textContent=user+'来了';}else{row.append(document.createTextNode(user+'：'));const span=document.createElement('span');span.className='webcast-chatroom___content-with-emoji-text';span.textContent=body;row.append(span);}
  chat.append(row);return row;};
let filter,ui,preferences;
await test('sidebar-repeat-body-not-username-and-entry-context',async()=>{
  chat.replaceChildren();const first=makeRow('hello','甲'),second=makeRow('HELLO','乙'),normal=makeRow('春天来了'),entry=makeRow('','访客',true);
  filter=new ChatContentFilter();filter.configure({hideRepeat:true,hideEnter:true},'123');filter.start();await pause();
  assert(!hidden(first));assert(hidden(second));assert(!hidden(normal));assert(hidden(entry));
});
await test('observer-keeps-first-message-when-descendants-change',async()=>{
  const row=chat.firstElementChild;row.querySelector('span').append(document.createTextNode(''));await pause();assert(!hidden(row));
});
await test('keyword-settings-reprocess-existing-dom',async()=>{
  filter.configure({filterKeywords:true,blockedKeywords:'hello'},'123');await pause();
  assert(hidden(chat.children[0])&&hidden(chat.children[1]));assert(!hidden(chat.children[3]));
  filter.configure({filterKeywords:false,blockedKeywords:'hello'},'123');assert(!hidden(chat.children[0]));
});
await test('recycled-row-content-is-reclassified-and-restored',async()=>{
  filter.configure({filterKeywords:true,blockedKeywords:'广告'},'123');
  const row=chat.firstElementChild;row.querySelector('span').textContent='这是广告';await pause();assert(hidden(row));
  row.querySelector('span').textContent='正常弹幕';await pause();assert(!hidden(row));
});
await test('new-rows-are-filtered-by-real-mutation-observer',async()=>{
  const row=makeRow('ＡＤ 广告');await pause();assert(hidden(row));
  row.remove();
});
await test('unrelated-setting-does-not-reset-repeat-cache',async()=>{
  filter.configure({hideRepeat:true},'123');const first=makeRow('unique test');await pause();
  filter.configure({hideRepeat:true,simpleMode:true},'123');const second=makeRow('unique test','乙');await pause();
  assert(!hidden(first));assert(hidden(second));
});
await test('dispose-restores-inline-display-and-restarts-cleanly',async()=>{
  const row=makeRow('广告');row.style.display='inline-block';filter.configure({filterKeywords:true,blockedKeywords:'广告'},'123');assert(hidden(row));
  filter.dispose();assert(getComputedStyle(row).display==='inline-block');assert(!document.querySelector('.douyin-ex-content-hidden'));
  filter.start();await pause();assert(hidden(row));filter.dispose();
});
await test('simple-mode-reversible-dynamic-and-retains-player-controls',async()=>{
  const simple=new SimpleRoomMode(),banner=document.querySelector('[data-e2e="exhibition-banner"]');banner.style.display='flex';
  simple.configure(true);simple.configure(true);assert(hidden(banner));assert(document.querySelectorAll('#douyin-ex-simple-mode').length===1);
  const dynamic=document.createElement('div');dynamic.id='GiftEffectLayout';dynamic.textContent='动态礼物';document.body.append(dynamic);assert(hidden(dynamic));
  assert(!hidden(document.querySelector('[data-e2e="player-controls"]')));assert(!hidden(document.querySelector('[aria-label="福袋"]')));
  simple.dispose();assert(getComputedStyle(banner).display==='flex');assert(!hidden(dynamic));dynamic.remove();
});
await test('lottery-dom-free-comment-and-conditions-parsed',async()=>{
  const dialog=document.getElementById('short_touch_land_lottery_land_userMain');
  dialog.innerHTML='<div>参与条件</div><div data-lottery-condition>发表评论：“你好” <span data-condition-status>未完成</span></div><div data-lottery-countdown>01:30</div><button class="QOARtY3v">一键发表评论</button>';
  const page=new LotteryPage(),state=page.read(dialog,false);assert(state.decision.action==='join_comment');assert(state.remainingSeconds===90);
  assert(page.countdown(null)===null);
});
await test('condition-status-does-not-leak-between-rows',async()=>{
  const dialog=document.getElementById('short_touch_land_lottery_land_userMain');
  dialog.innerHTML='<div data-lottery-condition>关注主播 <span data-condition-status>已完成</span></div><div data-lottery-condition>加入粉丝团</div><button class="QOARtY3v">免费参与</button>';
  assert(new LotteryPage().read(dialog,true).decision.action==='skip');
});
await test('unknown-condition-blocks-dom-join-and-disabled-button-is-inert',async()=>{
  const dialog=document.getElementById('short_touch_land_lottery_land_userMain');
  dialog.innerHTML='<div>参与条件：等待加载</div><button class="QOARtY3v">免费参与</button>';
  assert(new LotteryPage().read(dialog,false).decision.action==='skip');
  const btn=dialog.querySelector('button');let clicks=0;btn.onclick=()=>clicks++;btn.disabled=true;assert(!lotteryClick(btn));assert(clicks===0);
});
await test('real-dom-free-lottery-click-and-confirmation',async()=>{
  const dialog=document.getElementById('short_touch_land_lottery_land_userMain');
  dialog.innerHTML='<div data-lottery-countdown>00:20</div><button class="QOARtY3v">免费参与</button>';
  let clicks=0;dialog.querySelector('button').onclick=(e)=>{clicks++;e.target.textContent='已参与';};
  const status=[],lottery=new FreeLottery(v=>status.push(v));lottery.configure({autoLottery:true},'123');
  await new Promise(r=>setTimeout(r,1100));assert(clicks===1);assert(status.some(s=>s.includes('已确认参与')));
  lottery.dispose();assert(lottery.timer===0);assert(dialog.isConnected);
});
await test('real-dom-win-dialog-is-retained',async()=>{
  const result=document.createElement('div');result.id='short_touch_land_lottery_land_result';result.innerHTML='<p>恭喜中奖！祝下次好运</p><button aria-label="关闭">关闭</button>';document.body.append(result);
  let closed=0;result.querySelector('button').onclick=()=>closed++;
  const status=[],lottery=new FreeLottery(v=>status.push(v));lottery.configure({autoLottery:true},'123');await new Promise(r=>setTimeout(r,350));
  assert(closed===0);assert(status.some(s=>s.includes('中奖')));lottery.dispose();result.remove();
});
await test('settings-ui-defaults-save-and-checkbox-wiring',async()=>{
  localStorage.clear();preferences=new RoomPreferences(values=>ui.setPreferences(values));ui=new OverlayUI(document.querySelector('.douyin-player'));
  ui.onPreferenceChange=(k,v)=>preferences.set(k,v);ui.setPreferences(preferences.read());ui.setState('native','本地界面验证');ui.openSettings();
  assert(Object.values(ui.featureInputs).every(i=>!i.checked));assert(ui.featureInputs.autoLotteryFollow.disabled);
  assert(!ui.advanced.open);assert(ui.keywordGroup.hidden);assert(ui.lotteryStatus.hidden);
  assert(ui.panel.querySelector('.primary-options').children.length===5);
  ui.featureInputs.hideRepeat.click();assert(preferences.read().hideRepeat);ui.featureInputs.autoLottery.click();assert(!ui.featureInputs.autoLotteryFollow.disabled);
  ui.featureInputs.filterKeywords.click();assert(!ui.keywordGroup.hidden);
  ui.keywordInput.value=' 广告\nABC ';ui.saveKeywords.click();assert(preferences.read().blockedKeywords==='广告\nABC');
  assert(new RoomPreferences().read().blockedKeywords==='广告\nABC');
  ui.keywordInput.value='未保存草稿';ui.featureInputs.simpleMode.click();assert(ui.keywordInput.value==='未保存草稿');ui.keywordInput.value=preferences.read().blockedKeywords;
  ui.setLotteryStatus('免费福袋：本地模拟已确认参与');
});
await test('settings-panel-stays-in-viewport-and-scrolls',async()=>{
  ui.positionFloating();const rect=ui.panel.getBoundingClientRect();
  assert(rect.left>=0&&rect.right<=innerWidth&&rect.top>=0&&rect.bottom<=innerHeight,JSON.stringify(rect));
  assert(getComputedStyle(ui.panel).overflowY==='auto');assert(ui.panel.scrollHeight>=ui.panel.clientHeight);
  assert(ui.keywordInput.getBoundingClientRect().width>220,'Keyword editor is too cramped');
});
// Leave the UI open for a reviewable screenshot. No real site or account is used.
document.getElementById('short_touch_land_lottery_land_userMain').innerHTML='<strong>福袋入口与播放器控件保留</strong>';
document.querySelector('[data-e2e="exhibition-banner"]').textContent='简洁模式关闭时保留原布局';
if(ui)ui.toast.hidden=true;
window.fixturePanel=()=>{ui.positionFloating();const r=ui.panel.getBoundingClientRect();return{left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:innerWidth,height:innerHeight};};
const passed=results.filter(r=>r.pass).length;
document.getElementById('result').textContent=JSON.stringify({passed,failed:results.length-passed,results,viewport:{width:innerWidth,height:innerHeight}});
document.documentElement.dataset.completed='true';
`;
const html=`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>DouyinEx 本地功能验证</title><style>body{margin:24px;background:#0c1018;color:#e6eaf0;font:15px/1.6 system-ui}.douyin-player{position:relative;background:#17283b;width:65vw;height:260px;margin-bottom:20px;padding:20px;box-sizing:border-box}#chatroom{width:50vw;background:#18202c;padding:15px}.webcast-chatroom___item{padding:4px}button{padding:6px}#short_touch_land_lottery_land_userMain{margin:15px;padding:12px;background:#223b37}#result{display:none}</style><body><h1>DouyinEx .07 · 本地功能验证</h1><p>虚拟聊天与福袋，仅验证插件行为</p><div class="douyin-player"><h2>播放器</h2><div data-e2e="player-controls">播放 / 音量 / 画质</div><div aria-label="福袋">福袋 00:20</div></div><div data-e2e="exhibition-banner">推广横幅</div><div id="chatroom"></div><div id="short_touch_land_lottery_land_userMain"></div><pre id="result"></pre><script type="module">${(modules+'\n'+tests).replaceAll('</script','<\/script')}</script></body></html>`;
fs.writeFileSync(path.join(out,'fixture.html'),html);
const server=http.createServer((_req,res)=>{res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(html);});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const url=`http://127.0.0.1:${server.address().port}/123`;
const args=['--headless=new','--disable-gpu','--disable-extensions','--disable-background-networking','--no-first-run','--no-default-browser-check',`--user-data-dir=${path.join(out,'profile-real-time')}`,'--window-size=1280,920','--remote-debugging-port=0','--remote-debugging-address=127.0.0.1',url];
const child=spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args,{windowsHide:true});
let stdout='',stderr='';child.stdout.on('data',d=>stdout+=d);child.stderr.on('data',d=>stderr+=d);
const watchdog=setTimeout(()=>child.kill(),45000);
let exitCode;
let report;
const closed=new Promise((resolve,reject)=>{child.on('error',reject);child.on('close',resolve);});
const delay=ms=>new Promise(r=>setTimeout(r,ms));
let socket;
try {
  for(let i=0;i<150&&!stderr.includes('DevTools listening on');i++)await delay(100);
  const endpoint=stderr.match(/DevTools listening on (ws:\/\/\S+)/)?.[1];
  if(!endpoint)throw Error('No DevTools endpoint: '+stderr.slice(-2000));
  const list=await (await fetch('http://'+new URL(endpoint).host+'/json/list')).json();
  const target=list.find(t=>t.type==='page'&&t.url===url)||list.find(t=>t.type==='page');
  if(!target)throw Error('No fixture tab');
  socket=new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject;});
  const pending=new Map();let id=0;
  socket.onmessage=event=>{const msg=JSON.parse(event.data);if(msg.id){const pair=pending.get(msg.id);pending.delete(msg.id);if(msg.error)pair?.reject(Error(JSON.stringify(msg.error)));else pair?.resolve(msg.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{pending.set(++id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});
  await send('Page.enable');
  for(let i=0;i<150;i++){
    const state=await send('Runtime.evaluate',{expression:'document.documentElement.dataset.completed',returnByValue:true});
    if(state.result.value==='true')break;
    if(i===149)throw Error('Fixture timed out before completion');
    await delay(100);
  }
  const result=await send('Runtime.evaluate',{expression:'document.getElementById("result").textContent',returnByValue:true});
  report=JSON.parse(result.result.value);
  stdout=(await send('Runtime.evaluate',{expression:'document.documentElement.outerHTML',returnByValue:true})).result.value;
  const screenshot=await send('Page.captureScreenshot',{format:'png'});
  fs.writeFileSync(path.join(out,'preview.png'),Buffer.from(screenshot.data,'base64'));
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:650,deviceScaleFactor:1,mobile:false});
  const narrow=await send('Runtime.evaluate',{expression:'JSON.stringify(window.fixturePanel())',returnByValue:true});
  const rect=JSON.parse(narrow.result.value);
  const narrowPass=rect.left>=0&&rect.right<=rect.width&&rect.top>=0&&rect.bottom<=rect.height;
  report.results.push({name:'narrow-viewport-settings-panel-bounds',pass:narrowPass,observed:rect});
  if(narrowPass)report.passed++;else report.failed++;
  const narrowShot=await send('Page.captureScreenshot',{format:'png'});
  fs.writeFileSync(path.join(out,'preview-narrow.png'),Buffer.from(narrowShot.data,'base64'));
  await send('Browser.close');
  exitCode=await closed;
} catch(error){stderr+='\nHARNESS_ERROR: '+error.stack;child.kill();exitCode=await closed;process.exitCode=1;}
finally{socket?.close();clearTimeout(watchdog);server.close();}
fs.writeFileSync(path.join(out,'dom.html'),stdout);fs.writeFileSync(path.join(out,'stderr.txt'),stderr);
fs.writeFileSync(path.join(out,'command.json'),JSON.stringify({command:[child.spawnfile,...args],exitCode,fixtureOnly:true},null,2));
if(!report){console.error(JSON.stringify({error:'Headless browser did not produce a result',exitCode,output:out,stderr:stderr.slice(-2000)}));process.exitCode=1;}
else {
  fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(exitCode!==0||report.failed)process.exitCode=1;}
