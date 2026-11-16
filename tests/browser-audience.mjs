import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidate = path.resolve(process.argv[2]);
const source = fs.readFileSync(candidate, 'utf8');
const out = path.join(root, '..', 'audience-stability-20261116', 'logs', 'browser');
fs.mkdirSync(out, { recursive: true });
function segment(from, to) { const a=source.indexOf(from),b=source.indexOf(to,a+from.length);return a<0||b<a?'':source.slice(a,b); }
const modules = segment('  // src/adapters/audience.ts', '  // src/adapters/live.ts');
if (!modules.includes('function watchAudienceDom')) throw Error('audience module anchors not found');
const shim = 'const record=(value)=>value&&typeof value==="object"?value:{};\n';
const tests = String.raw`
const results=[];
const assert=(condition,message='Assertion failed')=>{if(!condition)throw Error(message);};
const pause=(ms)=>{const f=()=>new Promise(r=>setTimeout(r,ms));return f();};
async function test(name,fn){try{await fn();results.push({name,pass:true});}catch(e){results.push({name,pass:false,error:e.message});}}
const holder=document.getElementById('audience-holder');
const make=(text)=>{const el=document.createElement('div');el.dataset.e2e='live-room-audience';el.textContent=text;return el;};
function harness(){const events=[];const tracker=new AudienceTracker(s=>events.push(s),{gap:0,fresh:45000});const stop=watchAudienceDom(t=>tracker.offerDom(t),{attachMs:200,debounceMs:20});return{tracker,events,stop};}
let current;
await test('official-label-drives-online-value',async()=>{
  current=make('10万+');holder.append(current);
  const {tracker,stop}=harness();await pause(150);
  assert(tracker.value===100000,'value='+tracker.value);
  assert(tracker.text==='10万+','text='+tracker.text);
  assert(tracker.source==='dom','source='+tracker.source);
  window.__h={tracker,stop};
});
await test('text-mutation-is-observed',async()=>{
  current.textContent='3.2万';await pause(150);
  assert(window.__h.tracker.value===32000,'value='+window.__h.tracker.value);
});
await test('element-replacement-recovers',async()=>{
  const next=make('4.1万');current.replaceWith(next);current=next;await pause(320);
  assert(window.__h.tracker.value===41000,'value='+window.__h.tracker.value);
});
await test('unparsable-label-keeps-last-value',async()=>{
  current.textContent='--';await pause(150);
  assert(window.__h.tracker.value===41000,'value='+window.__h.tracker.value);
});
await test('fresh-seq-value-beats-dom-label',async()=>{
  window.__h.tracker.offer({onlineUserForAnchor:'39500'});await pause(20);
  assert(window.__h.tracker.value===39500,'value='+window.__h.tracker.value);
  current.textContent='4.9万';await pause(200);
  assert(window.__h.tracker.value===39500,'dom overwrote exact value: '+window.__h.tracker.value);
});
await test('dispose-stops-observing',async()=>{
  window.__h.stop();current.textContent='5.5万';await pause(250);
  assert(window.__h.tracker.value===39500,'value='+window.__h.tracker.value);
});
await test('cumulative-total-feeds-seen-only',async()=>{
  const events=[];const tracker=new AudienceTracker(s=>events.push(s),{gap:0,fresh:45000});
  const stop=watchAudienceDom(t=>tracker.offerDom(t),{attachMs:200,debounceMs:20});
  current.textContent='6.5万';await pause(120);
  tracker.offer({total:436149,totalUser:300000});await pause(20);
  assert(tracker.value===65000,'cumulative total hijacked online: '+tracker.value);
  assert(tracker.seen===436149,'seen='+tracker.seen);
  const last=events[events.length-1]||{};
  assert(last.value===65000&&last.seen===436149,'payload='+JSON.stringify(last));
  stop();
});
const passed=results.filter(r=>r.pass).length;
document.getElementById('result').textContent=JSON.stringify({passed,failed:results.length-passed,results});
document.documentElement.dataset.completed='true';
`;
const html=`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>DouyinEx 在线人数本地验证</title><style>body{margin:24px;background:#0c1018;color:#e6eaf0;font:15px/1.6 system-ui}.row{display:flex;gap:16px;align-items:center;margin:20px 0}#result{display:none}</style><body><h1>DouyinEx · 在线人数稳定性验证</h1><p>仅使用本地 mock 的「在线观众」按钮，不访问抖音</p><div class="row"><span>在线观众</span><div id="audience-holder"></div></div><pre id="result"></pre><script type="module">${(shim+modules+'\n'+tests).replaceAll('</script','<\/script')}</script></body></html>`;
fs.writeFileSync(path.join(out,'fixture.html'),html);
const server=http.createServer((_req,res)=>{res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(html);});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const url=`http://127.0.0.1:${server.address().port}/audience`;
const args=['--headless=new','--disable-gpu','--disable-extensions','--disable-background-networking','--no-first-run','--no-default-browser-check',`--user-data-dir=${path.join(out,'profile')}`,'--window-size=900,620','--remote-debugging-port=0','--remote-debugging-address=127.0.0.1',url];
const child=spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',args,{windowsHide:true});
let stdout='',stderr='';child.stdout.on('data',d=>stdout+=d);child.stderr.on('data',d=>stderr+=d);
const watchdog=setTimeout(()=>child.kill(),45000);
let exitCode, report;
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
  await send('Browser.close');
  exitCode=await closed;
} catch(error){stderr+='\nHARNESS_ERROR: '+error.stack;child.kill();exitCode=await closed;process.exitCode=1;}
finally{socket?.close();clearTimeout(watchdog);server.close();}
fs.writeFileSync(path.join(out,'dom.html'),stdout);fs.writeFileSync(path.join(out,'stderr.txt'),stderr);
if(!report){console.error(JSON.stringify({error:'Headless browser did not produce a result',exitCode,output:out,stderr:stderr.slice(-2000)}));process.exitCode=1;}
else {
  fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(exitCode!==0||report.failed)process.exitCode=1;
}