// ==UserScript==
// @name         DouyinEx - 抖音直播间增强插件
// @namespace    https://github.com/afwfv/DouyinEx
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTA4cHgiIGhlaWdodD0iMTA4cHgiIHZpZXdCb3g9IjAgMCAxMDggMTA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPueyvueBteeQgzwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnsr7ngbXnkIMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODMwNzY5LCAwLjgzMDc2OSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4xNjkyMzA3LDEwNi4zMzg0NjEgQzIzLjgyNzY5MjIsMTA2LjMzODQ2MSAwLDgyLjUxMDc2OTIgMCw1My4xNjkyMzA3IEMwLDUxLjAwMzA3NjkgMS43NzIzMDc3NSw0OS4yMzA3NjkyIDMuOTM4NDYxNSw0OS4yMzA3NjkyIEwzMy40NzY5MjMsNDkuMjMwNzY5MiBDMzUuNjQzMDc2OSw0OS4yMzA3NjkyIDM3LjQxNTM4NDUsNTEuMDAzMDc3IDM3LjQxNTM4NDYsNTMuMTY5MjMwNyBDMzcuNDE1Mzg0Niw2MS44MzM4NDYxIDQ0LjUwNDYxNTQsNjguOTIzMDc2OSA1My4xNjkyMzA3LDY4LjkyMzA3NjkgQzYxLjgzMzg0NjEsNjguOTIzMDc2OSA2OC45MjMwNzY5LDYxLjgzMzg0NjEgNjguOTIzMDc2OSw1My4xNjkyMzA3IEM2OC45MjMwNzY5LDUxLjAwMzA3NjkgNzAuNjk1Mzg0Niw0OS4yMzA3NjkyIDcyLjg2MTUzODUsNDkuMjMwNzY5MiBMMTAyLjQsNDkuMjMwNzY5MiBDMTA0LjU2NjE1NCw0OS4yMzA3NjkyIDEwNi4zMzg0NjEsNTEuMDAzMDc3IDEwNi4zMzg0NjEsNTMuMTY5MjMwNyBDMTA2LjMzODQ2MSw4Mi41MTA3NjkyIDgyLjUxMDc2OTIsMTA2LjMzODQ2MSA1My4xNjkyMzA3LDEwNi4zMzg0NjEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzMzMzYzQSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOC4wNzM4NDYxMiw1Ny4xMDc2OTIyIEMxMC4wNDMwNzY5LDgwLjI0NjE1MzcgMjkuNTM4NDYxNSw5OC40NjE1Mzg1IDUzLjE2OTIzMDcsOTguNDYxNTM4NSBDNzYuOCw5OC40NjE1Mzg1IDk2LjI5NTM4NDYsODAuMjQ2MTUzOSA5OC4yNjQ2MTU0LDU3LjEwNzY5MjIgTDc2LjUwNDYxNTQsNTcuMTA3NjkyMiBDNzQuNjMzODQ2MSw2OC4yMzM4NDYxIDY0Ljg4NjE1MzksNzYuOCA1My4xNjkyMzA3LDc2LjggQzQxLjQ1MjMwNzYsNzYuOCAzMS43MDQ2MTU0LDY4LjIzMzg0NjEgMjkuODMzODQ2MSw1Ny4xMDc2OTIyIEw4LjA3Mzg0NjEyLDU3LjEwNzY5MjIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTMuMTY5MjMwOCwzLjkzODQ2MTUgQzI1Ljk5Mzg0NjEsMy45Mzg0NjE1IDMuOTM4NDYxNSwyNS45OTM4NDYxIDMuOTM4NDYxNSw1My4xNjkyMzA3IEwzMy40NzY5MjMsNTMuMTY5MjMwNyBDMzMuNDc2OTIzLDQyLjMzODQ2MTUgNDIuMzM4NDYxNSwzMy40NzY5MjMgNTMuMTY5MjMwOCwzMy40NzY5MjMgQzY0LDMzLjQ3NjkyMyA3Mi44NjE1Mzg1LDQyLjMzODQ2MTUgNzIuODYxNTM4NSw1My4xNjkyMzA3IEwxMDIuNCw1My4xNjkyMzA3IEMxMDIuNCwyNS45OTM4NDYxIDgwLjM0NDYxNTQsMy45Mzg0NjE1IDUzLjE2OTIzMDgsMy45Mzg0NjE1IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNENjA5MDkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEwMi40LDU3LjEwNzY5MjIgTDcyLjg2MTUzODUsNTcuMTA3NjkyMiBDNzAuNjk1Mzg0Niw1Ny4xMDc2OTIyIDY4LjkyMzA3Nyw1NS4zMzUzODQ1IDY4LjkyMzA3NjksNTMuMTY5MjMwNyBDNjguOTIzMDc2OSw0NC41MDQ2MTU0IDYxLjgzMzg0NjEsMzcuNDE1Mzg0NiA1My4xNjkyMzA3LDM3LjQxNTM4NDYgQzQ0LjUwNDYxNTQsMzcuNDE1Mzg0NiAzNy40MTUzODQ2LDQ0LjUwNDYxNTQgMzcuNDE1Mzg0Niw1My4xNjkyMzA3IEMzNy40MTUzODQ2LDU1LjMzNTM4NDYgMzUuNjQzMDc2OSw1Ny4xMDc2OTIyIDMzLjQ3NjkyMyw1Ny4xMDc2OTIyIEwzLjkzODQ2MTUsNTcuMTA3NjkyMiBDMS43NzIzMDc2Miw1Ny4xMDc2OTIyIDAsNTUuMzM1Mzg0NSAwLDUzLjE2OTIzMDcgQzAsMjMuODI3NjkyMiAyMy44Mjc2OTIzLDAgNTMuMTY5MjMwNywwIEM4Mi41MTA3NjkyLDAgMTA2LjMzODQ2MSwyMy44Mjc2OTIyIDEwNi4zMzg0NjEsNTMuMTY5MjMwNyBDMTA2LjMzODQ2MSw1NS4zMzUzODQ2IDEwNC41NjYxNTQsNTcuMTA3NjkyMiAxMDIuNCw1Ny4xMDc2OTIyIFoiIGlkPSLot6/lvoQiIGZpbGw9IiMzMzM2M0EiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTc2LjUwNDYxNTQsNDkuMjMwNzY5MyBMOTguMzYzMDc2OSw0OS4yMzA3NjkzIEM5Ni4yOTUzODQ2LDI2LjA5MjMwNzYgNzYuOCw3Ljg3NjkyMyA1My4xNjkyMzA3LDcuODc2OTIzIEMyOS41Mzg0NjE1LDcuODc2OTIzIDEwLjA0MzA3NjksMjYuMDkyMzA3NiA4LjA3Mzg0NjEyLDQ5LjIzMDc2OTMgTDI5LjkzMjMwNzYsNDkuMjMwNzY5MyBDMzEuNzA0NjE1NCwzOC4xMDQ2MTU0IDQxLjQ1MjMwNzYsMjkuNTM4NDYxNSA1My4xNjkyMzA3LDI5LjUzODQ2MTUgQzY0Ljg4NjE1MzksMjkuNTM4NDYxNSA3NC42MzM4NDYxLDM4LjEwNDYxNTQgNzYuNTA0NjE1NCw0OS4yMzA3NjkzIEw3Ni41MDQ2MTU0LDQ5LjIzMDc2OTMgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0Q2MDkwOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTMuMTY5MjMwNyw3Ni44IEM0MC4xNzIzMDc2LDc2LjggMjkuNTM4NDYxNSw2Ni4xNjYxNTM5IDI5LjUzODQ2MTUsNTMuMTY5MjMwNyBDMjkuNTM4NDYxNSw0MC4xNzIzMDc2IDQwLjE3MjMwNzYsMjkuNTM4NDYxNSA1My4xNjkyMzA3LDI5LjUzODQ2MTUgQzY2LjE2NjE1MzksMjkuNTM4NDYxNSA3Ni44LDQwLjE3MjMwNzYgNzYuOCw1My4xNjkyMzA3IEM3Ni44LDY2LjE2NjE1MzkgNjYuMTY2MTUzOSw3Ni44IDUzLjE2OTIzMDcsNzYuOCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMzMzNjNBIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4xNjkyMzA3LDM3LjQxNTM4NDYgQzQ0LjUwNDYxNTQsMzcuNDE1Mzg0NiAzNy40MTUzODQ2LDQ0LjUwNDYxNTQgMzcuNDE1Mzg0Niw1My4xNjkyMzA3IEMzNy40MTUzODQ2LDYxLjgzMzg0NjEgNDQuNTA0NjE1NCw2OC45MjMwNzY5IDUzLjE2OTIzMDcsNjguOTIzMDc2OSBDNjEuODMzODQ2MSw2OC45MjMwNzY5IDY4LjkyMzA3NjksNjEuODMzODQ2MSA2OC45MjMwNzY5LDUzLjE2OTIzMDcgQzY4LjkyMzA3NjksNDQuNTA0NjE1NCA2MS44MzM4NDYxLDM3LjQxNTM4NDYgNTMuMTY5MjMwNywzNy40MTUzODQ2IEw1My4xNjkyMzA3LDM3LjQxNTM4NDYgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNDMuMzIzMDc2OSw1My4xNjkyMzA3IEM0My4zMjMwNzY5LDU4LjYwNzExMTQgNDcuNzMxMzUwMSw2My4wMTUzODQ2IDUzLjE2OTIzMDcsNjMuMDE1Mzg0NiBDNTguNjA3MTExNCw2My4wMTUzODQ2IDYzLjAxNTM4NDYsNTguNjA3MTExNCA2My4wMTUzODQ2LDUzLjE2OTIzMDcgQzYzLjAxNTM4NDYsNDcuNzMxMzUwMSA1OC42MDcxMTE0LDQzLjMyMzA3NjkgNTMuMTY5MjMwNyw0My4zMjMwNzY5IEM0Ny43MzEzNTAxLDQzLjMyMzA3NjkgNDMuMzIzMDc2OSw0Ny43MzEzNTAxIDQzLjMyMzA3NjksNTMuMTY5MjMwNyBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMzMzNjNBIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
// @version      2026.11.11.29
// @description  弹幕不掉帧、弹幕悬停、+1、回复、自动最高画质、屏蔽礼物特效、屏蔽送礼弹幕、PK真实分数
// @author       DD (afwfv)
// @homepageURL  https://github.com/afwfv/DouyinEx
// @supportURL   https://github.com/afwfv/DouyinEx/issues
// @updateURL    https://raw.githubusercontent.com/afwfv/DouyinEx/main/DouyinEx.user.js
// @downloadURL  https://raw.githubusercontent.com/afwfv/DouyinEx/main/DouyinEx.user.js
// @match        https://live.douyin.com/*
// @run-at       document-start
// @noframes
// @grant        none
// @sandbox      raw
// ==/UserScript==
"use strict";
(() => {
  // src/types.ts
  var DEFAULT_CONFIG = {
    fontSize: 20,
    lineHeight: 36,
    area: 0.6,
    opacity: 1,
    gap: 24,
    travelSeconds: 12,
    maxActive: 120,
    maxQueue: 200,
    queueTtl: 2e3,
    leaveDelay: 200,
    cacheBytes: 32 * 1024 * 1024,
    maxLanes: 0
  };
  var emptyStats = () => ({
    received: 0,
    admitted: 0,
    overflow: 0,
    expired: 0,
    avoidance: 0,
    active: 0,
    queued: 0,
    deduplicated: 0,
    frameP95: 0,
    drawP95: 0,
    fps: 0,
    cacheBytes: 0,
    cacheEntries: 0,
    cacheMisses: 0,
    frames: 0
  });

  // src/engine-client.ts
  var EngineClient = class {
    constructor(session, canvas, width, height, dpr, settings = {}) {
      this.session = session;
      if (typeof Worker === "undefined" || typeof canvas.transferControlToOffscreen !== "function") throw new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Worker / OffscreenCanvas");
      this.url = URL.createObjectURL(new Blob(["\"use strict\";(()=>{var T={fontSize:20,lineHeight:36,area:.6,opacity:1,gap:24,travelSeconds:12,maxActive:120,maxQueue:200,queueTtl:2e3,leaveDelay:200,cacheBytes:33554432,maxLanes:0},z=()=>({received:0,admitted:0,overflow:0,expired:0,avoidance:0,active:0,queued:0,deduplicated:0,frameP95:0,drawP95:0,fps:0,cacheBytes:0,cacheEntries:0,cacheMisses:0,frames:0});var S=class{constructor(e=2e3,t=6e4){this.max=e;this.ttl=t}ids=new Map;accept(e,t){for(let[n,a]of this.ids){if(t-a<=this.ttl)break;this.ids.delete(n)}let i=`${e.roomId}\\0${e.id}`;if(this.ids.has(i))return!1;for(this.ids.set(i,t);this.ids.size>this.max;)this.ids.delete(this.ids.keys().next().value);return!0}clear(){this.ids.clear()}get size(){return this.ids.size}};function v(s,e,t=0){return e.inside&&e.x>=s.x-t&&e.x<=s.x+s.width+t&&e.y>=s.y-t&&e.y<=s.y+s.height+t}var M=class{constructor(e,t,i,n={}){this.width=e;this.height=t;this.measure=i;this.config={...T,...n}}config;stats=z();deduper=new S;active=[];queue=[];selection=null;pointer={x:0,y:0,inside:!1};menu=null;held=!1;leaveAt=null;ignored=null;token=0;last=null;nextLane=0;get lanes(){return Math.max(1,Math.min(this.config.maxLanes||1/0,Math.floor(this.height*this.config.area/this.config.lineHeight)))}rect(e){return{x:e.x,y:e.lane*this.config.lineHeight+4,width:e.width,height:this.config.lineHeight-4}}enqueue(e,t){for(let i of e){if(this.stats.received++,!this.deduper.accept(i,t)){this.stats.deduplicated++;continue}this.queue.push(i)}this.queue.length>this.config.maxQueue&&(this.stats.overflow+=this.queue.length-this.config.maxQueue,this.queue.splice(0,this.queue.length-this.config.maxQueue))}resize(e,t){let i=e/Math.max(1,this.width);this.width=e,this.height=t;for(let n of this.active)n.x*=i,n.lane%=this.lanes;this.updateSelectionRect()}configure(e){let t=e.fontSize!==this.config.fontSize,i=t||e.lineHeight!==this.config.lineHeight||e.area!==this.config.area||e.maxLanes!==this.config.maxLanes;if(i&&this.release(),Object.assign(this.config,e),i)for(let n of this.active)t&&(n.width=Math.max(1,this.measure(n.message))),n.lane%=this.lanes}setMenu(e,t,i){e===this.selection?.token&&(this.menu=t,this.held=i)}release(e){e!==void 0&&e!==this.selection?.token||(this.selection&&(this.ignored=this.selection.message.id),this.selection=null,this.menu=null,this.held=!1,this.leaveAt=null)}suspend(){this.release(),this.pointer.inside=!1,this.queue=[],this.last=null}updateSelectionRect(){if(!this.selection)return;let e=this.active.find(t=>t.message.id===this.selection.message.id);if(e){let t=this.rect(e);this.selection={...this.selection,anchorX:this.selection.anchorX+t.x-this.selection.rect.x,rect:t}}else this.release()}safeHover(){if(!this.selection)return!1;if(this.held||v(this.selection.rect,this.pointer,2))return!0;if(!this.menu)return!1;let e=this.selection.rect,t=this.menu;if(v(t,this.pointer,2))return!0;let i=t.y>=e.y+e.height?e.y+e.height:t.y+t.height,n=t.y>=e.y+e.height?t.y:e.y;return n>=i&&v({x:Math.min(e.x,t.x),y:i,width:Math.max(e.x+e.width,t.x+t.width)-Math.min(e.x,t.x),height:n-i},this.pointer,2)}candidate(){if(!this.pointer.inside)return;let e=Math.floor((this.pointer.y-4)/this.config.lineHeight);for(let t=this.active.length-1;t>=0;t--){let i=this.active[t];if(i.lane===e&&i.message.id!==this.ignored&&v(this.rect(i),this.pointer,2))return i}}updatePointer(e,t){this.pointer=e,this.hitTest(t)}hitTest(e){let t=this.active.find(n=>n.message.id===this.ignored);if((!t||!v(this.rect(t),this.pointer,4))&&(this.ignored=null),this.selection&&this.safeHover()){this.leaveAt=null;return}let i=this.candidate();if(this.selection){if(!i&&(this.leaveAt??=e,e-this.leaveAt<this.config.leaveDelay))return;this.release()}i&&(this.selection={token:++this.token,message:i.message,rect:this.rect(i),anchorX:this.pointer.x})}tick(e){let t=this.last===null?0:Math.min(Math.max(0,e-this.last),50);this.last=e,this.hitTest(e);let sl=this.selection?this.active.find(w=>w.message.id===this.selection.message.id):null,slane=sl?sl.lane:-1;for(let n of this.active)n.message.id!==this.selection?.message.id&&n.lane!==slane&&(n.x-=this.width/this.config.travelSeconds*t/1e3);let i=0;for(let n of this.active)n.x+n.width>=0&&(this.active[i++]=n);this.active.length=i,this.updateSelectionRect();let c=0;for(let n of this.queue)e-n.receivedAt<=this.config.queueTtl&&(this.queue[c++]=n);this.stats.expired+=this.queue.length-c,this.queue.length=c;let p=new Array(this.lanes).fill(-1/0);for(let n of this.active)n.message.id!==this.selection?.message.id&&(p[n.lane]=Math.max(p[n.lane],n.x+n.width));for(;this.queue.length&&this.active.length<this.config.maxActive;){let n;for(let c=0;c<this.lanes;c++){let i=(this.nextLane+c)%this.lanes;if(!(p[i]+this.config.gap>this.width)){n=i;break}}if(n===void 0)break;let a=this.queue.shift(),h=Math.max(1,this.measure(a));this.active.push({message:a,x:this.width,lane:n,width:h}),p[n]=this.width+h,this.nextLane=(n+1)%this.lanes,this.stats.admitted++}this.hitTest(e),this.stats.active=this.active.length,this.stats.queued=this.queue.length}clear(){this.active=[],this.queue=[],this.deduper.clear(),this.release(),this.last=null}};var b=class{constructor(e,t){this.budget=e;this.release=t}values=new Map;bytes=0;get(e){let t=this.values.get(e);if(t)return this.values.delete(e),this.values.set(e,t),t.value}set(e,t,i){if(i>this.budget)return this.release(t),!1;let n=this.values.get(e);for(n&&(this.bytes-=n.bytes,this.release(n.value),this.values.delete(e));this.bytes+i>this.budget&&this.values.size;){let a=this.values.keys().next().value,h=this.values.get(a);this.values.delete(a),this.bytes-=h.bytes,this.release(h.value)}return this.values.set(e,{value:t,bytes:i}),this.bytes+=i,!0}clear(){for(let{value:e}of this.values.values())this.release(e);this.values.clear(),this.bytes=0}get size(){return this.values.size}};var g={weight:700,family:'\"Microsoft YaHei\", \"PingFang SC\", Arial, sans-serif',color:\"#fff\",stroke:\"rgba(0,0,0,.8)\",strokeWidth:2},P=JSON.stringify(g),C=6,k=class{constructor(e,t,i){this.canvas=e;this.config=t;this.dpr=i;let n=e.getContext(\"2d\",{alpha:!0});if(!n)throw new Error(\"\\u65E0\\u6CD5\\u521B\\u5EFA Canvas 2D \\u7ED8\\u5236\\u4E0A\\u4E0B\\u6587\");this.ctx=n,this.sprites=new b(t.cacheBytes*.875,a=>{a.width=0,a.height=0}),this.images=new b(t.cacheBytes*.125,a=>a.close())}ctx;sprites;images;requested=new Set;pending=[];inflight=0;revision=0;abort=new AbortController;misses=0;segmentKeys=new WeakMap;resize(e,t,i){this.dpr!==i&&this.sprites.clear(),this.dpr=i,this.canvas.width=Math.max(1,Math.round(e*i)),this.canvas.height=Math.max(1,Math.round(t*i))}configure(e){(e.fontSize!==this.config.fontSize||e.lineHeight!==this.config.lineHeight)&&this.sprites.clear(),Object.assign(this.config,e)}font(){return`${g.weight} ${this.config.fontSize}px ${g.family}`}measure=e=>(this.ctx.font=this.font(),e.segments.reduce((t,i)=>t+(i.type===\"emoji\"&&i.url?this.config.fontSize:this.ctx.measureText(i.text).width),C*2));load(e){this.requested.has(e)||this.requested.size>=256||(this.requested.add(e),this.pending.push(e),this.drain())}drain(){for(;this.inflight<4&&this.pending.length&&!this.abort.signal.aborted;){let e=this.pending.shift();this.inflight++,fetch(e,{mode:\"cors\",credentials:\"omit\",signal:this.abort.signal}).then(t=>{if(!t.ok)throw new Error(\"\\u8868\\u60C5\\u8D44\\u6E90\\u4E0D\\u53EF\\u7528\");return t.blob()}).then(t=>{if(t.size>1024*1024)throw new Error(\"\\u8868\\u60C5\\u8D44\\u6E90\\u8FC7\\u5927\");return createImageBitmap(t)}).then(t=>{if(this.abort.signal.aborted){t.close();return}this.images.set(e,t,t.width*t.height*4)&&this.revision++}).catch(()=>{}).finally(()=>{this.inflight--,this.drain()})}}paint(e,t){e.font=this.font(),e.textBaseline=\"middle\",e.fillStyle=g.color,e.strokeStyle=g.stroke,e.lineWidth=g.strokeWidth,e.lineJoin=\"round\";let i=C,n=(this.config.lineHeight-4)/2;for(let a of t.segments)if(a.type===\"emoji\"&&a.url){this.load(a.url);let h=this.images.get(a.url);h?e.drawImage(h,i,n-this.config.fontSize/2,this.config.fontSize,this.config.fontSize):(e.strokeText(a.text,i,n,this.config.fontSize),e.fillText(a.text,i,n,this.config.fontSize)),i+=this.config.fontSize}else e.strokeText(a.text,i,n),e.fillText(a.text,i,n),i+=e.measureText(a.text).width}draw(e,t){let i=this.ctx;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.setTransform(this.dpr,0,0,this.dpr,0,0),i.globalAlpha=this.config.opacity;let n;for(let a of e)a.message.id===t?n=a:this.drawItem(a);n&&this.drawItem(n)}segmentKey(e){let t=this.segmentKeys.get(e);return t||(t=JSON.stringify(e.segments),this.segmentKeys.set(e,t)),t}drawItem(e){let t=this.ctx,i=this.config.lineHeight-4,n=`${P}|${this.config.fontSize}|${this.config.lineHeight}|${this.dpr}|${this.revision}`;e.spriteSignature!==n&&(e.spriteSignature=n,e.spriteKey=`${n}|${this.segmentKey(e.message)}`);let a=this.sprites.get(e.spriteKey),h=Math.ceil(e.width*this.dpr)*Math.ceil(i*this.dpr)*4;if(!a&&h<=this.sprites.budget&&e.width*this.dpr<16384){this.misses++,a=new OffscreenCanvas(Math.max(1,Math.ceil(e.width*this.dpr)),Math.max(1,Math.ceil(i*this.dpr)));let p=a.getContext(\"2d\");p.scale(this.dpr,this.dpr),this.paint(p,e.message),this.sprites.set(e.spriteKey,a,h)}let c=e.lane*this.config.lineHeight+4;a?t.drawImage(a,e.x,c,e.width,i):(t.save(),t.translate(e.x,c),this.paint(t,e.message),t.restore()),e.message.isOwn&&(t.strokeStyle=\"#00ffff\",t.lineWidth=2,t.lineJoin=\"miter\",t.strokeRect(e.x+1,c+1,Math.max(0,e.width-2),i-2))}stats(){return{cacheBytes:this.sprites.bytes+this.images.bytes,cacheEntries:this.sprites.size+this.images.size,cacheMisses:this.misses}}dispose(){this.abort.abort(),this.pending=[],this.sprites.clear(),this.images.clear()}};var l=self,A=\"\",r=null,o=null,u=0,x=!0,L,q=\"\",I=0,d=0,E=[],O=[],R=(s,e)=>{s.push(e),s.length>600&&s.shift()},_=s=>{let e=[...s].sort((t,i)=>t-i);return e[Math.min(e.length-1,Math.floor(e.length*.95))]||0},m=s=>l.postMessage({session:A,...s});function f(s){let e=s?`${s.token}|${s.anchorX}|${JSON.stringify(s.rect)}`:\"\";e!==q&&(q=e,m({type:\"selection\",selection:s,pointerAt:I}))}function H(){if(!r||!o)return;let s=E.reduce((e,t)=>e+t,0)/Math.max(1,E.length);m({type:\"stats\",stats:{...r.stats,...o.stats(),frameP95:_(E),drawP95:_(O),fps:s?1e3/s:0}})}function y(){!x||u||!r||!r.active.length&&!r.queue.length||(u=l.requestAnimationFrame($))}function $(s){u=0;try{if(!r||!o||!x)return;let e=performance.now();d&&s-d<250&&R(E,s-d),d=s,r.tick(performance.timeOrigin+s),o.draw(r.active,r.selection?.message.id),r.stats.frames++,R(O,performance.now()-e),f(r.selection),y(),u||(d=0)}catch(e){m({type:\"error\",message:String(e)})}}l.onmessage=({data:s})=>{try{if(s.type===\"init\"){if(A=s.session,typeof l.requestAnimationFrame!=\"function\")throw new Error(\"\\u6D4F\\u89C8\\u5668\\u4E0D\\u652F\\u6301 Worker \\u52A8\\u753B\\u8C03\\u5EA6\");o=new k(s.canvas,s.config,s.dpr),o.resize(s.width,s.height,s.dpr),r=new M(s.width,s.height,o.measure,s.config),L=setInterval(H,1e3),m({type:\"ready\"});return}if(s.session!==A||!r||!o)return;switch(s.type){case\"enqueue\":x&&(r.enqueue(s.messages,Date.now()),r.stats.overflow+=s.overflow||0,r.stats.received+=s.overflow||0,y());break;case\"resize\":r.resize(s.width,s.height),o.resize(s.width,s.height,s.dpr),o.draw(r.active,r.selection?.message.id),f(r.selection);break;case\"configure\":o.configure(s.settings),r.configure(s.settings),o.draw(r.active,r.selection?.message.id),f(r.selection),y();break;case\"pointer\":I=s.sentAt,r.updatePointer(s.pointer,Date.now()),f(r.selection),y();break;case\"menu\":r.setMenu(s.token,s.rect,s.held);break;case\"release\":r.release(s.token),f(r.selection);break;case\"visibility\":x=s.visible,r.suspend(),f(null),x?y():(l.cancelAnimationFrame(u),u=0,d=0);break;case\"snapshot\":m({type:\"snapshot\",requestId:s.requestId,selection:r.selection,active:r.active.map(e=>({...r.rect(e),id:e.message.id,text:e.message.plainText,paused:r.selection?.message.id===e.message.id}))});break;case\"destroy\":l.cancelAnimationFrame(u),clearInterval(L),o.dispose(),r.clear(),l.close();break}}catch(e){m({type:\"error\",message:String(e)})}};})();\n"], { type: "text/javascript" }));
      try {
        this.worker = new Worker(this.url, { name: "douyin-ex-renderer" });
      } catch (error) {
        URL.revokeObjectURL(this.url);
        throw error;
      }
      this.ready = new Promise((resolve, reject) => {
        this.readyResolve = resolve;
        this.readyReject = reject;
      });
      void this.ready.catch(() => {
      });
      this.readyTimer = setTimeout(() => this.fail(new Error("Worker \u521D\u59CB\u5316\u8D85\u65F6\uFF0C\u53EF\u80FD\u88AB\u9875\u9762 CSP \u9650\u5236")), 5e3);
      this.worker.onerror = (event) => this.fail(new Error(event.message || "\u5F39\u5E55 Worker \u51FA\u9519"));
      this.worker.onmessageerror = () => this.fail(new Error("\u5F39\u5E55 Worker \u901A\u4FE1\u5931\u8D25"));
      this.worker.onmessage = ({ data }) => {
        if (this.dead || data.session !== this.session) return;
        this.lastHeartbeat = performance.now();
        if (data.type === "ready") {
          clearTimeout(this.readyTimer);
          this.readyResolve();
        } else if (data.type === "selection") {
          if (data.selection && data.selection.token <= this.selectionFloor) return;
          this.selectedToken = data.selection?.token ?? this.selectedToken;
          this.onSelection(data.selection, Math.max(0, Date.now() - data.pointerAt));
        } else if (data.type === "stats") this.onStats(data.stats);
        else if (data.type === "error") this.fail(new Error(data.message));
        else if (data.type === "snapshot") {
          this.snapshots.get(data.requestId)?.(data);
          this.snapshots.delete(data.requestId);
        }
      };
      try {
        const offscreen = canvas.transferControlToOffscreen();
        this.worker.postMessage({ type: "init", session, canvas: offscreen, width, height, dpr, config: { ...DEFAULT_CONFIG, ...settings } }, [offscreen]);
      } catch (error) {
        this.dispose();
        throw error;
      }
    }
    worker;
    url;
    readyResolve;
    readyReject;
    readyTimer;
    pending = [];
    overflow = 0;
    batchRaf = 0;
    pointerRaf = 0;
    latestPointer = { x: 0, y: 0, inside: false };
    pointerAt = 0;
    pointerDirty = false;
    dead = false;
    snapshotId = 0;
    selectionFloor = 0;
    selectedToken = 0;
    snapshots = /* @__PURE__ */ new Map();
    ready;
    lastHeartbeat = performance.now();
    onSelection = () => {
    };
    onStats = () => {
    };
    onError = () => {
    };
    fail(error) {
      if (this.dead) return;
      clearTimeout(this.readyTimer);
      this.readyReject(error);
      this.onError(error);
    }
    send(command) {
      if (!this.dead) this.worker.postMessage({ session: this.session, ...command });
    }
    enqueue(messages) {
      if (this.dead || document.hidden) return;
      this.pending.push(...messages);
      if (this.pending.length > DEFAULT_CONFIG.maxQueue) {
        const excess = this.pending.length - DEFAULT_CONFIG.maxQueue;
        this.pending.splice(0, excess);
        this.overflow += excess;
      }
      if (!this.batchRaf) this.batchRaf = requestAnimationFrame(() => {
        this.batchRaf = 0;
        this.send({ type: "enqueue", messages: this.pending, overflow: this.overflow });
        this.pending = [];
        this.overflow = 0;
      });
    }
    pointer(pointer) {
      this.latestPointer = pointer;
      this.pointerAt = Date.now();
      this.pointerDirty = true;
      if (this.dead || this.pointerRaf) return;
      const flush = () => {
        this.pointerRaf = 0;
        if (this.dead || !this.pointerDirty) return;
        this.pointerDirty = false;
        this.send({ type: "pointer", pointer: this.latestPointer, sentAt: this.pointerAt });
        this.pointerRaf = requestAnimationFrame(flush);
      };
      flush();
    }
    resize(width, height, dpr) {
      this.send({ type: "resize", width, height, dpr });
    }
    configure(settings) {
      this.send({ type: "configure", settings });
    }
    menu(token, rect, held) {
      this.send({ type: "menu", token, rect, held });
    }
    release(token) {
      this.selectionFloor = Math.max(this.selectionFloor, token ?? this.selectedToken);
      this.send({ type: "release", token });
    }
    visibility(visible2) {
      this.pending = [];
      if (visible2) this.lastHeartbeat = performance.now();
      this.send({ type: "visibility", visible: visible2 });
    }
    snapshot() {
      const requestId = ++this.snapshotId;
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          this.snapshots.delete(requestId);
          reject(new Error("Worker snapshot timeout"));
        }, 2e3);
        this.snapshots.set(requestId, (value) => {
          clearTimeout(timer);
          resolve(value);
        });
        this.send({ type: "snapshot", requestId });
      });
    }
    dispose() {
      if (this.dead) return;
      this.readyReject?.(new Error("\u5F39\u5E55\u5F15\u64CE\u5DF2\u5173\u95ED"));
      clearTimeout(this.readyTimer);
      cancelAnimationFrame(this.batchRaf);
      cancelAnimationFrame(this.pointerRaf);
      this.send({ type: "destroy" });
      this.dead = true;
      this.worker.terminate();
      URL.revokeObjectURL(this.url);
      this.pending = [];
      this.snapshots.clear();
    }
  };

  // src/ui/overlay.ts
  var MENU_WIDTH = 232;
  var CSS = `
:host{position:absolute;inset:0;display:block;pointer-events:none;z-index:9;color:#fff;font:13px Arial,"Microsoft YaHei",sans-serif;line-height:1.5}
*{box-sizing:border-box}canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
[hidden]{display:none!important}button{font:inherit;cursor:pointer;border:1px solid #ffffff25;color:#fff;border-radius:6px;padding:5px 13px;background:#ffffff12}
button:hover{background:#ffffff28}button:disabled{opacity:.4;cursor:default}button:focus-visible{outline:2px solid #a7f36b;outline-offset:2px}
.menu{position:absolute;pointer-events:auto;min-width:${MENU_WIDTH}px;max-width:300px;padding:0 8px;border:0;border-radius:999px;background:rgba(0,0,0,.8)}
.menu::before{content:"";position:absolute;left:var(--arrow-x,50%);top:-6px;transform:translateX(-50%);border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid rgba(0,0,0,.8)}
.menu[data-side="above"]::before{top:auto;bottom:-6px;border-bottom:0;border-top:6px solid rgba(0,0,0,.8)}
.author{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.actions{display:flex;align-items:stretch;height:36px;gap:0}.actions button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:6px;flex:1;min-width:0;white-space:nowrap;padding:0 10px;border:0;border-radius:0;background:transparent;color:#fff;font-size:14px;font-weight:400;line-height:1}
.actions button+button::before{content:"";position:absolute;left:0;top:11px;bottom:11px;width:1px;background:#ffffff24}
.actions button:hover{color:#ff8a35;background:#ffffff12}.actions button:focus-visible{outline-color:#ff8a35;outline-offset:-3px;border-radius:4px}
.reply-icon{width:18px;height:18px;flex:none;pointer-events:none}.highlight{position:absolute;border:0;border-radius:2px;background:#00000012;pointer-events:none}
.panel{position:fixed;left:0;top:0;z-index:2147483000;width:280px;max-width:calc(100vw - 24px);pointer-events:auto;background:#171a20;border:1px solid #525a66;border-radius:10px;padding:14px;box-shadow:0 5px 20px #0005}
.panel strong{font-size:14px}.panel p{color:#c0c7d0;margin:8px 0;overflow-wrap:anywhere}.panel small{color:#9ca6b4;display:block;margin:10px 0}
.options{display:flex;flex-direction:column;gap:7px;margin:10px 0}
.options label{display:flex;align-items:center;gap:8px;color:#c0c7d0;cursor:pointer}
.options input{width:15px;height:15px;margin:0;accent-color:#ff8a35}
.fab{position:fixed;left:0;top:0;z-index:2147483000;display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 10px;border:1px solid #ffffff30;border-radius:13px;background:rgba(0,0,0,.62);color:#fff;font-size:12px;line-height:1;pointer-events:auto;white-space:nowrap;backdrop-filter:blur(4px)}
.fab:hover{background:rgba(0,0,0,.82);border-color:#ff8a35;color:#ff8a35}
.fab[aria-expanded=true]{border-color:#ff8a35;color:#ff8a35}
.fab-dot{width:6px;height:6px;flex:none;border-radius:50%;background:#9ca6b4}
.fab[data-state=running] .fab-dot{background:#a7f36b}
.fab[data-state=preparing] .fab-dot,.fab[data-state=restoring] .fab-dot{background:#ffb84d}
.fab[data-state=unavailable] .fab-dot{background:#ff5d5d}
.panel footer{display:flex;gap:8px}.toast{position:absolute;bottom:18%;left:50%;transform:translateX(-50%);max-width:90%;border:1px solid #596273;border-radius:7px;padding:8px 14px;background:#181c24;color:#fff;white-space:pre-wrap}
`;
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== void 0) node.textContent = text;
    return node;
  }
  function replyIcon() {
    const ns = "http://www.w3.org/2000/svg", icon = document.createElementNS(ns, "svg");
    icon.classList.add("reply-icon");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.8");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    const outline = document.createElementNS(ns, "path");
    outline.setAttribute("d", "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z");
    icon.append(outline);
    for (const x of [8, 12, 16]) {
      const dot = document.createElementNS(ns, "circle");
      dot.setAttribute("cx", String(x));
      dot.setAttribute("cy", "11.5");
      dot.setAttribute("r", ".8");
      dot.setAttribute("fill", "currentColor");
      dot.setAttribute("stroke", "none");
      icon.append(dot);
    }
    return icon;
  }
  var OverlayUI = class {
    constructor(player) {
      this.player = player;
      this.host.id = "douyin-ex-overlay";
      this.shadow = this.host.attachShadow({ mode: "open" });
      const style = element("style");
      style.textContent = CSS;
      this.menu.setAttribute("role", "group");
      this.menu.setAttribute("aria-label", "\u5F39\u5E55\u64CD\u4F5C");
      this.toast.setAttribute("role", "status");
      this.reply.prepend(replyIcon());
      const actions = element("div", "actions");
      actions.append(this.reply, this.plus);
      this.menu.append(this.author, actions);
      this.plus.type = this.reply.type = this.toggleAction.type = "button";
      this.plus.title = "\u8986\u76D6\u8F93\u5165\u6846\u5E76\u63D0\u4EA4\u8BE5\u6761\u539F\u6587";
      this.reply.title = "\u8986\u76D6\u8F93\u5165\u6846\u4E3A\u5F15\u7528\u6587\u672C\uFF0C\u4E0D\u81EA\u52A8\u53D1\u9001";
      this.autoQuality.type = this.shieldGift.type = this.hideGiftInput.type = this.pkInput.type = "checkbox";
      const preferences = element("div", "options");
      for (const [input, text] of [[this.autoQuality, "\u81EA\u52A8\u6700\u9AD8\u753B\u8D28"], [this.shieldGift, "\u5C4F\u853D\u793C\u7269\u7279\u6548"], [this.hideGiftInput, "\u5C4F\u853D\u9001\u793C\u5F39\u5E55"], [this.pkInput, "PK \u771F\u5B9E\u5206\u6570"]]) {
        const label = element("label");
        label.append(input, document.createTextNode(text));
        preferences.append(label);
      }
      this.panel.append(element("strong", "", "\u5F39\u5E55\u589E\u5F3A"), this.status, preferences, this.metrics, this.hint);
      const footer = element("footer"), close = element("button", "", "\u6536\u8D77");
      close.type = "button";
      footer.append(this.toggleAction, close);
      this.panel.append(footer);
      this.fab.type = "button";
      this.fab.title = "\u6253\u5F00\u5F39\u5E55\u589E\u5F3A\u8BBE\u7F6E";
      this.fab.setAttribute("aria-expanded", "false");
      this.fab.append(this.fabDot, this.fabLabel);
      this.shadow.append(style, this.canvas, this.highlight, this.menu, this.toast);
      const floatingStyle = element("style");
      floatingStyle.textContent = CSS;
      this.floatHost.id = "douyin-ex-floating";
      this.floatHost.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483000";
      this.floatShadow = this.floatHost.attachShadow({ mode: "open" });
      this.floatShadow.append(floatingStyle, this.fab, this.panel);
      (document.body ?? document.documentElement).append(this.floatHost);
      this.positionTimer = setInterval(() => this.positionFloating(), 1e3);
      this.menu.hidden = this.highlight.hidden = this.panel.hidden = this.toast.hidden = true;
      this.host.style.visibility = "hidden";
      player.append(this.host);
      const signal = this.abort.signal;
      const setPanelOpen = (open) => {
        this.panel.hidden = !open;
        this.fab.setAttribute("aria-expanded", String(open));
        if (open) this.positionFloating();
      };
      this.fab.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        setPanelOpen(this.panel.hidden);
      }, { signal });
      close.addEventListener("click", () => setPanelOpen(false), { signal });
      this.toggleAction.addEventListener("click", () => this.onToggle(), { signal });
      this.autoQuality.addEventListener("change", () => this.onPreferenceChange("autoQuality", this.autoQuality.checked), { signal });
      this.shieldGift.addEventListener("change", () => this.onPreferenceChange("shieldGift", this.shieldGift.checked), { signal });
      this.hideGiftInput.addEventListener("change", () => this.onPreferenceChange("hideGiftDanmaku", this.hideGiftInput.checked), { signal });
      this.pkInput.addEventListener("change", () => this.onPreferenceChange("pkNumbers", this.pkInput.checked), { signal });
      for (const [button, action] of [[this.plus, "plus"], [this.reply, "reply"]]) {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          if (this.selection) this.onAction(action, this.selection);
        }, { signal });
      }
      for (const node of [this.menu, this.panel, this.fab]) {
        for (const type of ["pointerdown", "mousedown", "mouseup", "click", "dblclick", "keydown", "keyup"]) {
          node.addEventListener(type, (event) => event.stopPropagation(), { signal });
        }
      }
      this.menu.addEventListener("pointerenter", () => {
        this.held = true;
        this.notifyMenu();
      }, { signal });
      this.menu.addEventListener("pointerleave", () => {
        this.held = false;
        this.notifyMenu();
      }, { signal });
    }
    host = element("div");
    shadow;
    canvas = element("canvas");
    menu = element("div", "menu");
    highlight = element("div", "highlight");
    author = element("div", "author");
    panel = element("section", "panel");
    fab = element("button", "fab");
    fabDot = element("span", "fab-dot");
    fabLabel = element("span", "fab-label", "\u5F39\u5E55\u589E\u5F3A");
    floatHost = element("div");
    floatShadow;
    positionTimer;
    anchorEl = null;
    fabTransform = "";
    panelTransform = "";
    audienceCount = 0;
    numberFormat = new Intl.NumberFormat("zh-CN");
    status = element("p");
    metrics = element("p");
    hint = element("small", "", "\u60AC\u505C\u4E00\u6761\u5F39\u5E55\u53EF\u590D\u8BFB\u6216\u5F15\u7528\u56DE\u590D\u3002");
    toggleAction = element("button", "", "\u542F\u7528");
    toast = element("div", "toast");
    autoQuality = element("input");
    shieldGift = element("input");
    hideGiftInput = element("input");
    pkInput = element("input");
    onPreferenceChange = () => {
    };
    plus = element("button", "plus", "+1");
    reply = element("button", "", "\u56DE\u590D");
    toastTimer;
    selection = null;
    menuSize = { width: MENU_WIDTH, height: 36 };
    abort = new AbortController();
    onAction = () => {
    };
    onToggle = () => {
    };
    onMenu = () => {
    };
    held = false;
    menuRect = null;
    setState(state, message) {
      this.status.textContent = message;
      this.toggleAction.textContent = state === "running" || state === "preparing" ? "\u5173\u95ED\u589E\u5F3A" : "\u542F\u7528 / \u91CD\u8BD5";
      this.toggleAction.disabled = state === "restoring";
      this.fab.dataset.state = state;
      this.host.style.visibility = "visible";
    }
    openSettings() {
      this.panel.hidden = false;
      this.fab.setAttribute("aria-expanded", "true");
      this.positionFloating();
    }
    setAudience(count) {
      this.audienceCount = Number.isFinite(count) && count > 0 ? count : 0;
      const text = this.audienceCount ? `\u5F39\u5E55\u589E\u5F3A \xB7 \u5728\u7EBF ${this.numberFormat.format(this.audienceCount)}` : "\u5F39\u5E55\u589E\u5F3A";
      if (this.fabLabel.textContent !== text) {
        this.fabLabel.textContent = text;
        this.fab.title = this.audienceCount ? `\u771F\u5B9E\u5728\u7EBF\u4EBA\u6570 ${this.numberFormat.format(this.audienceCount)}\uFF0C\u70B9\u51FB\u6253\u5F00\u8BBE\u7F6E` : "\u6253\u5F00\u5F39\u5E55\u589E\u5F3A\u8BBE\u7F6E";
      }
      this.positionFloating();
    }
    positionFloating() {
      if (!this.fab.isConnected) return;
      const width = this.fab.offsetWidth || 88, height = this.fab.offsetHeight || 26;
      if (!this.anchorEl?.isConnected) this.anchorEl = document.querySelector('[data-e2e="live-room-audience"]');
      const anchor = this.anchorEl;
      let x, y;
      if (anchor) {
        const rect = anchor.getBoundingClientRect();
        x = rect.right + 10;
        y = rect.top + (rect.height - height) / 2;
        if (x + width > innerWidth - 8) x = Math.max(8, rect.left - width - 10);
      } else {
        const player = this.player.getBoundingClientRect();
        x = Math.max(8, player.right - width - 12);
        y = player.top + 10;
      }
      x = Math.max(8, Math.min(x, innerWidth - width - 8));
      y = Math.max(8, Math.min(y, innerHeight - height - 8));
      const fabTransform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
      if (this.fabTransform !== fabTransform) {
        this.fabTransform = fabTransform;
        this.fab.style.transform = fabTransform;
      }
      if (this.panel.hidden) return;
      const panelWidth = this.panel.offsetWidth || 280, panelHeight = this.panel.offsetHeight || 240;
      let panelX = x - panelWidth - 8;
      let panelY = y;
      if (panelX < 8) {
        panelX = Math.max(8, x + width - panelWidth);
        panelY = y + height + 8;
        if (panelY + panelHeight > innerHeight - 8) panelY = Math.max(8, y - panelHeight - 8);
      }
      panelY = Math.max(8, Math.min(panelY, innerHeight - panelHeight - 8));
      panelX = Math.max(8, Math.min(panelX, innerWidth - panelWidth - 8));
      const panelTransform = `translate(${Math.round(panelX)}px, ${Math.round(panelY)}px)`;
      if (this.panelTransform !== panelTransform) {
        this.panelTransform = panelTransform;
        this.panel.style.transform = panelTransform;
      }
    }
    setMetrics(stats) {
      this.metrics.textContent = `\u63A5\u6536 ${stats.received} \xB7 \u5C55\u793A ${stats.admitted} \xB7 \u540C\u5C4F ${stats.active}
\u7B49\u5F85 ${stats.queued} \xB7 \u8DF3\u8FC7 ${stats.overflow + stats.expired + stats.avoidance}
\u5E27\u7387\u4F30\u8BA1 ${stats.fps.toFixed(0)} \xB7 \u7ED8\u5236 P95 ${stats.drawP95.toFixed(2)} ms
\u7F13\u5B58 ${(stats.cacheBytes / 1048576).toFixed(1)} MiB`;
      this.metrics.style.whiteSpace = "pre-line";
    }
    setCanvasVisible(visible2) {
      this.canvas.hidden = !visible2;
    }
    setPreferences(values) {
      this.autoQuality.checked = values?.autoQuality !== false;
      this.shieldGift.checked = values?.shieldGift !== false;
      this.hideGiftInput.checked = values?.hideGiftDanmaku !== false;
      this.pkInput.checked = values?.pkNumbers !== false;
    }
    setBounds(left, top, width, height) {
      Object.assign(this.host.style, { inset: "auto", left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px` });
    }
    resetCanvas() {
      const next = element("canvas");
      this.canvas.replaceWith(next);
      this.canvas = next;
      return next;
    }
    notifyMenu() {
      if (this.selection && this.menuRect) this.onMenu(this.selection.token, this.menuRect, this.held);
    }
    showSelection(selection, width, height) {
      const changed = selection?.token !== this.selection?.token;
      this.selection = selection;
      if (!selection) {
        this.menu.hidden = this.highlight.hidden = true;
        this.menuRect = null;
        this.held = false;
        return;
      }
      const rect = selection.rect;
      if (changed) {
        this.author.textContent = selection.message.authorName || "\u672A\u77E5\u4F5C\u8005";
        this.reply.disabled = !selection.message.authorName;
        this.reply.title = selection.message.authorName ? "\u8986\u76D6\u8F93\u5165\u6846\u4E3A\u5F15\u7528\u6587\u672C\uFF0C\u4E0D\u81EA\u52A8\u53D1\u9001" : "\u672A\u8BC6\u522B\u5230\u4F5C\u8005\uFF0C\u65E0\u6CD5\u56DE\u590D";
        this.menu.setAttribute("aria-label", `\u5F39\u5E55\u64CD\u4F5C \xB7 ${this.author.textContent}`);
      }
      const maxWidth = Math.max(0, width - 12);
      this.menu.style.maxWidth = `${maxWidth}px`;
      this.menu.style.minWidth = `${Math.min(MENU_WIDTH, maxWidth)}px`;
      if (changed) {
        this.menu.hidden = false;
        this.menuSize = { width: this.menu.offsetWidth, height: this.menu.offsetHeight };
      }
      const menuWidth = Math.min(this.menuSize.width, maxWidth), menuHeight = this.menuSize.height;
      const anchor = Math.max(0, Math.min(width, selection.anchorX));
      const x = Math.max(6, Math.min(anchor - menuWidth / 2, width - menuWidth - 6));
      let y = rect.y + rect.height + 6;
      const above = y + menuHeight > height - 6;
      if (above) y = Math.max(6, rect.y - menuHeight - 6);
      this.menu.dataset.side = above ? "above" : "below";
      this.menu.style.setProperty("--arrow-x", `${Math.max(12, Math.min(menuWidth - 12, anchor - x))}px`);
      this.menuRect = { x, y, width: menuWidth, height: menuHeight };
      Object.assign(this.menu.style, { left: `${x}px`, top: `${y}px` });
      Object.assign(this.highlight.style, { left: `${rect.x - 2}px`, top: `${rect.y - 2}px`, width: `${rect.width + 4}px`, height: `${rect.height + 4}px` });
      this.menu.hidden = this.highlight.hidden = false;
      this.notifyMenu();
    }
    isControlEvent(event) {
      return event.composedPath().some((node) => node === this.panel);
    }
    message(text) {
      clearTimeout(this.toastTimer);
      this.toast.textContent = text;
      this.toast.hidden = false;
      this.toastTimer = setTimeout(() => {
        this.toast.hidden = true;
      }, 3200);
    }
    dispose() {
      clearTimeout(this.toastTimer);
      clearInterval(this.positionTimer);
      this.abort.abort();
      this.host.remove();
      this.floatHost.remove();
    }
  };

  // src/ui/geometry.ts
  function containedVideoRect(box, videoWidth, videoHeight, fit) {
    if (fit !== "contain" || videoWidth <= 0 || videoHeight <= 0) return box;
    const scale = Math.min(box.width / videoWidth, box.height / videoHeight);
    const width = videoWidth * scale, height = videoHeight * scale;
    return { x: box.x + (box.width - width) / 2, y: box.y + (box.height - height) / 2, width, height };
  }

  // src/app.ts
  var LifecycleController = class {
    constructor(live, chat, preference = () => {
    }, roomPreferences = null) {
      this.live = live;
      this.chat = chat;
      this.preference = preference;
      this.roomPreferences = roomPreferences;
      this.ui = new OverlayUI(live.player);
      this.ui.setPreferences(roomPreferences?.read?.());
      this.ui.onPreferenceChange = (key, value) => roomPreferences?.set?.(key, value);
      try {
        this.audienceOff = live.watchAudience?.((count) => this.ui.setAudience(count)) ?? null;
      } catch {
        this.audienceOff = null;
      }
      this.ui.positionFloating();
      this.ui.setCanvasVisible(false);
      this.ui.setState("native", "\u539F\u751F\u5F39\u5E55\u8FD0\u884C\u4E2D");
      this.ui.onToggle = () => {
        if (this.state === "running" || this.state === "preparing") {
          this.preference(false);
          this.stop();
        } else {
          this.preference(true);
          void this.start(true);
        }
      };
      this.ui.onAction = (action, selection) => {
        void this.action(action, selection);
      };
      this.ui.onMenu = (token, rect, held) => this.engine?.menu(token, rect, held);
    }
    ui;
    state = "native";
    stats = emptyStats();
    selection = null;
    latencySamples = [];
    nativeMode = "";
    engine = null;
    lease = null;
    unsubscribe = null;
    unsubscribeSettings = null;
    sessionAbort = null;
    resizeObserver = null;
    healthTimer;
    generation = 0;
    dead = false;
    lastSend = -Infinity;
    actionBusy = false;
    audienceOff = null;
    roomPreferences = null;
    layout = { left: 0, top: 0, width: 1, height: 1, dpr: 1 };
    onState = () => {
    };
    onInvalid = () => {
    };
    setState(state, detail) {
      this.state = state;
      this.ui.setState(state, detail);
      this.onState(state);
    }
    measure = () => {
      const playerRect = this.live.player.getBoundingClientRect();
      let rect = { x: playerRect.left, y: playerRect.top, width: playerRect.width, height: playerRect.height };
      const video = this.live.player.querySelector("video");
      if (video?.videoWidth && video.videoHeight) {
        const box = video.getBoundingClientRect();
        if (box.width > 0 && box.height > 0) rect = containedVideoRect({ x: box.left, y: box.top, width: box.width, height: box.height }, video.videoWidth, video.videoHeight, getComputedStyle(video).objectFit);
      }
      const dpr = window.devicePixelRatio || 1;
      const changed = this.layout.width !== rect.width || this.layout.height !== rect.height || this.layout.dpr !== dpr;
      this.layout = { left: rect.x, top: rect.y, width: Math.max(1, rect.width), height: Math.max(1, rect.height), dpr };
      this.ui.setBounds(rect.x - playerRect.left, rect.y - playerRect.top, this.layout.width, this.layout.height);
      if (changed) this.engine?.resize(this.layout.width, this.layout.height, dpr);
      if (this.selection) this.ui.showSelection(this.selection, this.layout.width, this.layout.height);
    };
    async start(explicit = false) {
      if (this.dead || this.state === "running" || this.state === "preparing") return;
      if (!explicit && !this.live.native.enabled) {
        this.setState("native", "\u539F\u751F\u5F39\u5E55\u5DF2\u5173\u95ED\uFF0C\u53EF\u624B\u52A8\u542F\u7528\u589E\u5F3A");
        return;
      }
      if (!this.live.valid()) {
        this.setState("unavailable", "\u76F4\u64AD\u5B9E\u4F8B\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762");
        return;
      }
      const generation = ++this.generation;
      this.setState("preparing", "\u6B63\u5728\u51C6\u5907\u5F39\u5E55\u589E\u5F3A\u2026");
      let pendingLease = null;
      try {
        this.measure();
        const canvas = this.ui.resetCanvas();
        this.ui.setCanvasVisible(false);
        const engine = new EngineClient(`${this.live.roomId}:${generation}:${crypto.randomUUID()}`, canvas, this.layout.width, this.layout.height, this.layout.dpr, this.live.settings?.read());
        this.engine = engine;
        engine.onError = (error) => {
          if (this.engine === engine) this.fail(error);
        };
        engine.onStats = (stats) => {
          this.stats = stats;
          this.ui.setMetrics(stats);
        };
        engine.onSelection = (selection, latency) => {
          this.selection = selection;
          if (selection) {
            this.latencySamples.push(latency);
            if (this.latencySamples.length > 600) this.latencySamples.shift();
          }
          this.ui.showSelection(selection, this.layout.width, this.layout.height);
        };
        await engine.ready;
        if (generation !== this.generation) return;
        this.unsubscribeSettings = this.live.settings?.subscribe((settings) => {
          if (this.engine === engine && this.generation === generation) engine.configure(settings);
        }) ?? null;
        this.unsubscribe = this.live.subscribe((messages) => {
          try {
            const hideGift = this.roomPreferences?.read?.().hideGiftDanmaku !== false;
            engine.enqueue(hideGift ? messages.filter((message) => !message.isGift) : messages);
          } catch (error) {
            void 0 && console.warn("[douyin-ex] \u5F39\u5E55\u5165\u961F\u5931\u8D25:", error instanceof Error ? error.message : error);
          }
        });
        pendingLease = await this.live.native.suspend();
        if (generation !== this.generation) {
          pendingLease.restore();
          return;
        }
        this.lease = pendingLease;
        pendingLease = null;
        this.nativeMode = this.lease.mode;
        this.bindSession();
        engine.visibility(!document.hidden);
        this.ui.setCanvasVisible(true);
        this.setState("running", "\u589E\u5F3A\u8FD0\u884C\u4E2D \xB7 \u60AC\u505C\u5F39\u5E55\u67E5\u770B\u64CD\u4F5C");
      } catch (error) {
        pendingLease?.restore();
        if (generation === this.generation) this.fail(error instanceof Error ? error : new Error(String(error)));
      }
    }
    bindSession() {
      const abort = new AbortController();
      this.sessionAbort = abort;
      const signal = abort.signal, player = this.live.player;
      player.addEventListener("pointermove", (event) => {
        const inside = !this.ui.isControlEvent(event);
        this.engine?.pointer({ x: event.clientX - this.layout.left, y: event.clientY - this.layout.top, inside });
      }, { passive: true, signal });
      player.addEventListener("pointerleave", () => this.engine?.pointer({ x: 0, y: 0, inside: false }), { passive: true, signal });
      const release = () => {
        this.engine?.release();
        this.engine?.pointer({ x: 0, y: 0, inside: false });
        this.selection = null;
        this.ui.showSelection(null, 0, 0);
      };
      window.addEventListener("blur", release, { signal });
      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") release();
      }, { capture: true, signal });
      document.addEventListener("visibilitychange", () => {
        release();
        this.engine?.visibility(!document.hidden);
      }, { signal });
      window.addEventListener("scroll", (event) => {
        if (event.target instanceof Node && !event.target.contains(player)) return;
        this.measure();
      }, { passive: true, capture: true, signal });
      player.addEventListener("loadedmetadata", this.measure, { capture: true, signal });
      window.addEventListener("resize", this.measure, { passive: true, signal });
      window.addEventListener("resize", () => this.ui.positionFloating(), { passive: true, signal });
      document.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement instanceof HTMLVideoElement) {
          this.stop();
          this.ui.message("\u8BE5\u5168\u5C4F\u7C7B\u578B\u53EA\u652F\u6301\u539F\u751F\u5F39\u5E55");
          return;
        }
        this.measure();
      }, { signal });
      this.resizeObserver = new ResizeObserver(this.measure);
      this.resizeObserver.observe(player);
      const parent = player.parentElement;
      if (parent) {
        const observer = new MutationObserver(() => {
          if (!player.isConnected || !this.ui.host.isConnected || !this.live.controls.isConnected) {
            this.stop();
            this.onInvalid();
          }
        });
        observer.observe(parent, { childList: true });
        observer.observe(player, { childList: true, subtree: true });
        signal.addEventListener("abort", () => observer.disconnect(), { once: true });
      }
      this.healthTimer = setInterval(() => {
        if (!this.live.valid()) {
          this.stop();
          this.onInvalid();
        } else if (!this.lease?.healthy()) {
          this.stop();
          this.ui.message("\u539F\u751F\u72B6\u6001\u5DF2\u53D8\u5316\uFF0C\u5DF2\u9000\u51FA\u589E\u5F3A");
        } else if (!document.hidden && this.engine && performance.now() - this.engine.lastHeartbeat > 8e3) this.fail(new Error("Worker \u5931\u53BB\u54CD\u5E94\uFF0C\u5DF2\u6062\u590D\u539F\u751F\u5F39\u5E55"));
      }, 2e3);
    }
    async action(action, selection) {
      if (this.actionBusy || this.state !== "running" || selection.token !== this.selection?.token) return;
      if (action === "plus" && performance.now() - this.lastSend < 1500) {
        this.ui.message("\u64CD\u4F5C\u8FC7\u5FEB\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
        return;
      }
      if (action === "reply" && !selection.message.authorName) {
        this.ui.message("\u8BE5\u6761\u5F39\u5E55\u6CA1\u6709\u53EF\u8BC6\u522B\u7684\u4F5C\u8005");
        return;
      }
      this.actionBusy = true;
      const generation = this.generation;
      this.engine?.release(selection.token);
      this.selection = null;
      this.ui.showSelection(null, 0, 0);
      try {
        const text = action === "plus" ? selection.message.plainText : `@${selection.message.authorName}\uFF1A${selection.message.plainText} `;
        await this.chat.replace(text);
        if (this.generation !== generation || this.state !== "running") return;
        if (action === "plus") {
          this.lastSend = performance.now();
          await this.chat.submit(text);
          this.ui.message("\u5DF2\u63D0\u4EA4");
        } else this.ui.message("\u5F15\u7528\u5DF2\u586B\u5165\u8F93\u5165\u6846\uFF0C\u53EF\u7EE7\u7EED\u8F93\u5165");
      } catch (error) {
        this.ui.message(error instanceof Error ? error.message : String(error));
      } finally {
        this.actionBusy = false;
      }
    }
    stop(detail = "\u589E\u5F3A\u5DF2\u5173\u95ED\uFF0C\u5DF2\u6062\u590D\u539F\u751F\u5F39\u5E55") {
      ++this.generation;
      this.setState("restoring", "\u6B63\u5728\u6062\u590D\u539F\u751F\u5F39\u5E55\u2026");
      this.sessionAbort?.abort();
      this.sessionAbort = null;
      this.resizeObserver?.disconnect();
      this.resizeObserver = null;
      clearInterval(this.healthTimer);
      this.healthTimer = void 0;
      try {
        this.unsubscribe?.();
      } catch {
      }
      this.unsubscribe = null;
      try {
        this.unsubscribeSettings?.();
      } catch {
      }
      this.unsubscribeSettings = null;
      this.engine?.dispose();
      this.engine = null;
      let restoreError = "";
      try {
        this.lease?.restore();
      } catch (error) {
        restoreError = error instanceof Error ? error.message : String(error);
      } finally {
        this.lease = null;
      }
      this.selection = null;
      this.ui.showSelection(null, 0, 0);
      this.ui.setCanvasVisible(false);
      this.setState(restoreError ? "unavailable" : "native", restoreError ? `\u539F\u751F\u6062\u590D\u5931\u8D25\uFF1A${restoreError}` : detail);
    }
    fail(error) {
      this.stop();
      this.setState("unavailable", error.message);
      this.ui.message(error.message);
    }
    async snapshot() {
      return this.engine?.snapshot() ?? null;
    }
    dispose() {
      if (this.dead) return;
      this.stop();
      this.dead = true;
      try {
        this.audienceOff?.();
      } catch {
      }
      this.audienceOff = null;
      this.chat.dispose();
      this.ui.dispose();
    }
  };

  // src/core/messages.ts
  function record(value) {
    return value && typeof value === "object" ? value : {};
  }
  function identifier(value) {
    if (typeof value === "string") return value;
    if (typeof value === "bigint") return String(value);
    if (typeof value === "number" && Number.isSafeInteger(value)) return String(value);
    return "";
  }
  function isCurrentUser(author, currentUser) {
    const sender = record(author), current = record(currentUser);
    const usableId = (value) => {
      const id = identifier(value);
      return id !== "0" ? id : "";
    };
    const senderSec = usableId(sender.sec_uid), currentSec = usableId(current.sec_uid);
    if (senderSec && currentSec) return senderSec === currentSec;
    const senderId = usableId(sender.id_str ?? sender.id), currentId = usableId(current.id_str ?? current.id);
    return !!senderId && !!currentId && senderId === currentId;
  }
  function validImageUrl(value) {
    if (typeof value !== "string") return;
    try {
      const url = new URL(value);
      return ["https:", "http:"].includes(url.protocol) ? url.href : void 0;
    } catch {
      return;
    }
  }
  var emojiResolverCache = /* @__PURE__ */ new WeakMap();
  function getEmojiResolver(emoji) {
    const source = record(emoji);
    const cached = emojiResolverCache.get(source);
    if (cached) return cached;
    const byName = /* @__PURE__ */ new Map(), reverse = /* @__PURE__ */ new Map();
    for (const [name, value] of Object.entries(source)) {
      const url = validImageUrl(value);
      if (!url) continue;
      byName.set(name, url);
      reverse.set(url, name);
    }
    const resolver = { byName, reverse };
    emojiResolverCache.set(source, resolver);
    return resolver;
  }
  function normalizeMessage(raw, roomId, emoji, now, currentUser) {
    const msg = record(raw), payload = record(msg.payload), user = record(payload.user);
    const id = identifier(msg.msg_id);
    if (!id || !roomId) return null;
    const { byName, reverse } = getEmojiResolver(emoji);
    const segments = [];
    const addText = (text) => {
      for (const part of text.split(/(\[[^\[\]\r\n]+\])/u).filter(Boolean)) {
        const url = byName.get(part);
        segments.push(url ? { type: "emoji", text: part, url } : { type: "text", text: part });
      }
    };
    const pieces = record(payload.rtf_content_v2).pieces;
    if (Array.isArray(pieces)) {
      for (const rawPiece of pieces) {
        const piece = record(rawPiece);
        if (typeof piece.string_value === "string") addText(piece.string_value);
        else if (piece.image_value) {
          const image = record(piece.image_value);
          const url = validImageUrl(record(image.image).url_list?.[0]);
          const name = url && reverse.get(url) || (typeof image.alternative_text === "string" ? image.alternative_text : "");
          if (name) segments.push({ type: "emoji", text: name, url });
          else return null;
        } else if (piece.user_value) {
          const value = record(piece.user_value), mentioned = record(value.user);
          addText(`${value.left_additional_content || ""}${mentioned.nickname || ""}${value.right_additional_content || ""}`);
        }
      }
    } else if (typeof payload.content === "string") addText(payload.content);
    const plainText = segments.map((segment) => segment.text).join("");
    if (!plainText.trim()) return null;
    const structuralGift = !!(payload.gift || payload.gift_id || payload.gift_name || payload.gift_info);
    return {
      roomId,
      id,
      authorId: identifier(user.id_str ?? user.id) || void 0,
      authorName: typeof user.desensitized_nickname === "string" && user.desensitized_nickname ? user.desensitized_nickname : typeof user.nickname === "string" ? user.nickname : "",
      isOwn: isCurrentUser(user, currentUser),
      isGift: structuralGift || looksLikeGiftText(plainText),
      plainText,
      segments,
      receivedAt: now
    };
  }

  // src/adapters/fiber.ts
  function getFiber(element2) {
    const key = Object.keys(element2).find((key2) => key2.startsWith("__reactFiber") || key2.startsWith("__reactInternalInstance"));
    return key ? element2[key] : void 0;
  }
  function inspectFiber(elements, match) {
    const visited = /* @__PURE__ */ new Set();
    for (const element2 of elements) {
      let fiber = getFiber(element2);
      for (let depth = 0; fiber && depth < 20; depth++, fiber = fiber.return) {
        if (visited.has(fiber)) break;
        visited.add(fiber);
        const props = fiber.memoizedProps;
        if (props) {
          for (const candidate of [props, props.store, props.editor, props.value, props.value?.editor, props.data]) {
            const found = match(candidate);
            if (found !== void 0) return found;
          }
        }
        let hook = fiber.memoizedState;
        for (let index2 = 0; hook && index2 < 40; index2++, hook = hook.next) {
          for (const candidate of [hook.memoizedState, hook.memoizedState?.current, hook.memoizedState?.editor, hook.memoizedState?.[0]]) {
            const found = match(candidate);
            if (found !== void 0) return found;
          }
        }
        let dependency = fiber.dependencies?.firstContext;
        for (let index2 = 0; dependency && index2 < 12; index2++, dependency = dependency.next) {
          const context = dependency.memoizedValue ?? dependency.context?._currentValue;
          for (const candidate of [context, context?.editor]) {
            const found = match(candidate);
            if (found !== void 0) return found;
          }
        }
      }
    }
  }

  // src/adapters/native.ts
  var DouyinNativeController = class {
    constructor(room, manager, player, resolveManager) {
      this.room = room;
      this.manager = manager;
      this.player = player;
      this.resolveManager = resolveManager;
    }
    get enabled() {
      return this.room.danmakuSwitch !== false;
    }
    async suspend() {
      if (!this.enabled) return { mode: "native-already-off", restore() {
      }, healthy: () => this.room.danmakuSwitch === false };
      const manager = this.resolveManager ? this.resolveManager() : this.manager;
      if (!manager) {
        if (this.enabled) throw new Error("\u672A\u627E\u5230\u53EF\u9A8C\u8BC1\u7684\u539F\u751F\u5F39\u5E55\u7BA1\u7406\u5668\uFF0C\u5DF2\u4FDD\u7559\u539F\u751F\u5F39\u5E55");
        return { mode: "native-already-off", restore() {
        }, healthy: () => this.room.danmakuSwitch === false };
      }
      if (!(manager.canvasDom instanceof HTMLCanvasElement) || manager._isDestroyed || !["send", "start", "stop", "clear"].every((key) => typeof manager[key] === "function") || typeof manager.danmakuManagerInMainThread?.emit !== "function") {
        throw new Error("\u539F\u751F\u5F39\u5E55\u7BA1\u7406\u5668\u7ED3\u6784\u53D1\u751F\u53D8\u5316\uFF0C\u62D2\u7EDD\u4E0D\u5B89\u5168\u63A5\u7BA1");
      }
      const canvas = manager.canvasDom, beforeVisibility = canvas.style.visibility;
      const descriptors = /* @__PURE__ */ new Map();
      const wrappers = /* @__PURE__ */ new Map();
      let released = false;
      const restoreMethods = () => {
        for (const [key, wrapper] of wrappers) {
          if (manager[key] !== wrapper) continue;
          const descriptor = descriptors.get(key);
          if (descriptor) Object.defineProperty(manager, key, descriptor);
          else delete manager[key];
        }
      };
      try {
        for (const key of ["send", "start"]) {
          descriptors.set(key, Object.getOwnPropertyDescriptor(manager, key));
          const noop = () => void 0;
          wrappers.set(key, noop);
          Object.defineProperty(manager, key, { configurable: true, writable: true, value: noop });
        }
        manager.stop();
        manager.clear();
        await new Promise((resolve, reject) => {
          let first = 0, second = 0;
          const timeout = setTimeout(() => {
            cancelAnimationFrame(first);
            cancelAnimationFrame(second);
            reject(new Error("\u539F\u751F\u505C\u6B62\u68C0\u67E5\u8D85\u65F6\uFF0C\u5DF2\u53D6\u6D88\u63A5\u7BA1"));
          }, 1e3);
          first = requestAnimationFrame(() => {
            second = requestAnimationFrame(() => {
              clearTimeout(timeout);
              resolve();
            });
          });
        });
        if (manager._isDestroyed || !canvas.isConnected) throw new Error("\u63A5\u7BA1\u671F\u95F4\u539F\u751F\u5B9E\u4F8B\u5DF2\u66F4\u6362");
        const instance = manager.danmakuManagerInMainThread?.instance;
        if (instance && instance.isActive !== false) throw new Error("\u539F\u751F\u7ED8\u5236\u672A\u6210\u529F\u505C\u6B62");
        canvas.style.visibility = "hidden";
      } catch (error) {
        restoreMethods();
        if (!manager._isDestroyed && this.enabled && !this.player?.paused) manager.start();
        throw error;
      }
      return {
        mode: manager.danmakuManagerInMainThread?.instance ? "native-instance-stopped" : "native-worker-stop-command",
        healthy: () => !released && !manager._isDestroyed && canvas.isConnected && this.enabled && [...wrappers].every(([key, wrapper]) => manager[key] === wrapper),
        restore: () => {
          if (released) return;
          released = true;
          const ownsStart = manager.start === wrappers.get("start");
          restoreMethods();
          if (canvas.style.visibility === "hidden") canvas.style.visibility = beforeVisibility;
          if (ownsStart && !manager._isDestroyed && canvas.isConnected && this.enabled && !this.player?.paused) manager.start();
        }
      };
    }
  };

  // src/adapters/settings.ts
  var AREAS = [0.1, 0.2, 0.25, 0.5, 0.8];
  var FONTS = [16, 20, 24, 28, 32];
  var DURATIONS = [18e3, 14400, 10800];
  var DEFAULTS = { opacity: 80, area: 3, fontSize: 1, speed: 1 };
  var record2 = (value) => value && typeof value === "object" && !Array.isArray(value) ? value : {};
  var number = (value, min, max) => typeof value === "number" && Number.isFinite(value) && value >= min && value <= max;
  var index = (value, count, fallback) => number(value, 0, count - 1) && Number.isInteger(value) ? value : fallback;
  var lineHeight = (fontSize) => Math.ceil(fontSize * 1.8);
  var travelSeconds = (duration) => DEFAULT_CONFIG.travelSeconds * duration / DURATIONS[1];
  function settingsFromPreferences(value) {
    const data = record2(value);
    const areaIndex = index(data.area, AREAS.length, DEFAULTS.area);
    const fontSize = FONTS[index(data.fontSize, FONTS.length, DEFAULTS.fontSize)];
    return {
      opacity: (number(data.opacity, 20, 100) ? data.opacity : DEFAULTS.opacity) / 100,
      area: AREAS[areaIndex],
      maxLanes: areaIndex < 2 ? areaIndex + 1 : 0,
      fontSize,
      lineHeight: lineHeight(fontSize),
      travelSeconds: travelSeconds(DURATIONS[index(data.speed, DURATIONS.length, DEFAULTS.speed)])
    };
  }
  function settingsFromNativeUpdate(value, previous) {
    const data = record2(value), next = { ...previous };
    if (number(data.opacity, 0, 1)) next.opacity = data.opacity;
    if (number(data.fontSize, 12, 64)) {
      next.fontSize = data.fontSize;
      next.lineHeight = lineHeight(data.fontSize);
    }
    if (number(data.maxHeightRate, 0.01, 1)) next.area = data.maxHeightRate;
    if (data.maxChannelCount === Infinity) next.maxLanes = 0;
    else if (number(data.maxChannelCount, 1, 120) && Number.isInteger(data.maxChannelCount)) next.maxLanes = data.maxChannelCount;
    if (number(data.duration, 1e3, 6e4)) next.travelSeconds = travelSeconds(data.duration);
    return next;
  }
  function readPreferences() {
    try {
      return JSON.parse(localStorage.getItem("danmakuConfig") || "null");
    } catch {
      return null;
    }
  }
  var DouyinSettingsAdapter = class {
    constructor(resolveManager, preferences = readPreferences) {
      this.resolveManager = resolveManager;
      this.preferences = preferences;
    }
    read() {
      return settingsFromPreferences(this.preferences());
    }
    subscribe(listener) {
      const manager = this.resolveManager();
      if (!manager) return () => {
      };
      const original = manager.updateConfig;
      if (typeof original !== "function") throw new Error("\u539F\u751F\u5F39\u5E55\u6837\u5F0F\u66F4\u65B0\u5165\u53E3\u5DF2\u53D8\u5316\uFF0C\u5DF2\u53D6\u6D88\u63A5\u7BA1");
      const descriptor = Object.getOwnPropertyDescriptor(manager, "updateConfig");
      let disposed = false, current = this.read();
      const wrapper = function(config, ...rest) {
        const result = Reflect.apply(original, this, [config, ...rest]);
        if (!disposed) {
          const next = settingsFromNativeUpdate(config, current);
          if (Object.keys(next).some((key) => next[key] !== current[key])) {
            current = next;
            listener({ ...next });
          }
        }
        return result;
      };
      Object.defineProperty(manager, "updateConfig", { configurable: true, writable: true, value: wrapper });
      const dispose = () => {
        disposed = true;
        if (manager.updateConfig !== wrapper) return;
        if (descriptor) Object.defineProperty(manager, "updateConfig", descriptor);
        else delete manager.updateConfig;
      };
      try {
        listener({ ...current });
      } catch (error) {
        dispose();
        throw error;
      }
      return dispose;
    }
  };

  // src/adapters/live.ts
  var EVENTS = ["ChatMessage", "ScreenChatMessage", "PrivilegeScreenChatMessage"];
  var nonUnsubscribable = /* @__PURE__ */ new WeakSet();
  function discoverLiveSession() {
    const roots = [...document.querySelectorAll(".CanvasDanmakuPlugin")];
    const chat = document.getElementById("chatroom");
    const controls = document.querySelector(".douyin-player-controls-right");
    const player = document.querySelector(".LivePlayer_LivingPlayer, .douyin-player");
    if (chat) roots.push(chat);
    if (player) roots.push(player);
    if (!player || !controls) return;
    const store = inspectFiber(roots, (value) => value?.singletonStore?.message && value?.roomStore ? value : void 0);
    if (!store) return;
    const bus = store.singletonStore.message;
    if (typeof bus.on !== "function") return;
    const room = store.roomStore;
    const roomId = String(room.roomInfo?.roomId || room.roomId || "");
    if (!roomId) return;
    const manager = inspectFiber(roots, (value) => value?.canvasDom instanceof HTMLCanvasElement && value?.danmakuManagerInMainThread ? value : void 0);
    if (room.danmakuSwitch !== false && (!manager || !manager.canvasDom.isConnected || manager._isDestroyed)) return;
    return {
      roomId,
      player,
      controls,
      settings: new DouyinSettingsAdapter(() => manager || inspectFiber(roots, (value) => value?.canvasDom instanceof HTMLCanvasElement && value?.danmakuManagerInMainThread && !value._isDestroyed ? value : void 0)),
      native: new DouyinNativeController(room, manager, store.playerStore?.playerInstance, () => inspectFiber(roots, (value) => value?.canvasDom instanceof HTMLCanvasElement && value?.danmakuManagerInMainThread && value.canvasDom.isConnected && !value._isDestroyed ? value : void 0)),
      valid: () => player.isConnected && controls.isConnected && String(room.roomInfo?.roomId || room.roomId || "") === roomId && !manager?._isDestroyed && (!manager || manager.canvasDom.isConnected),
      watchAudience(listener) {
        const handler = (raw) => {
          const item = Array.isArray(raw) ? raw[0] : raw;
          const payload = record(item?.payload);
          for (const value of [payload.total, payload.total_user, payload.online_user_for_anchor]) {
            const count = Number(value);
            if (Number.isFinite(count) && count > 0) {
              listener(count);
              return;
            }
          }
        };
        const result = bus.on("RoomUserSeqMessage", handler);
        if (typeof result === "function") return result;
        if (typeof bus.off === "function") return () => bus.off("RoomUserSeqMessage", handler);
        return () => {
        };
      },
      subscribe(listener) {
        if (nonUnsubscribable.has(bus)) throw new Error("\u8BE5\u6D88\u606F\u603B\u7EBF\u4E0D\u652F\u6301\u53EF\u9760\u89E3\u7ED1\uFF0C\u5DF2\u7981\u6B62\u91CD\u590D\u8BA2\u9605");
        const disposers = [];
        let disposed = false;
        const cleanup = () => {
          disposed = true;
          for (const dispose of disposers.reverse()) {
            try {
              dispose();
            } catch {
            }
          }
        };
        try {
          for (const event of EVENTS) {
            const handler = (raw) => {
              if (disposed || !Array.isArray(raw)) return;
              const emoji = room.emojiReflex || {};
              const currentUser = store.userStore?.userInfo;
              const now = Date.now();
              const messages = [];
              for (const message of raw) {
                try {
                  const normalized = normalizeMessage(message, roomId, emoji, now, currentUser);
                  if (normalized) messages.push(normalized);
                } catch {
                }
              }
              if (messages.length) listener(messages);
            };
            const result = bus.on(event, handler);
            if (typeof result === "function") disposers.push(result);
            else if (typeof bus.off === "function") disposers.push(() => bus.off(event, handler));
            else if (typeof bus.removeListener === "function") disposers.push(() => bus.removeListener(event, handler));
            else {
              nonUnsubscribable.add(bus);
              throw new Error("\u6D88\u606F\u603B\u7EBF\u6CA1\u6709\u53EF\u9A8C\u8BC1\u7684\u89E3\u7ED1\u63A5\u53E3");
            }
          }
        } catch (error) {
          cleanup();
          throw error;
        }
        return () => {
          if (!disposed) cleanup();
        };
      }
    };
  }

  // src/adapters/chat.ts
  var visible = (element2) => element2.isConnected && element2.getBoundingClientRect().width > 0 && getComputedStyle(element2).visibility !== "hidden";
  var DouyinChatAdapter = class {
    composing = false;
    abort = new AbortController();
    lastInput = null;
    constructor() {
      const track = (event) => {
        if (event.target instanceof Element && event.target.closest('#chatroom,[data-e2e="live-chatting"]')) this.composing = event.type === "compositionstart";
      };
      document.addEventListener("compositionstart", track, { signal: this.abort.signal });
      document.addEventListener("compositionend", track, { signal: this.abort.signal });
    }
    input() {
      const selectors = [
        '[data-e2e="live-chatting"] [contenteditable="true"]',
        '#chatroom [contenteditable="true"]',
        "#chatroom textarea",
        '[data-e2e="live-chatting"] textarea'
      ];
      for (const selector of selectors) {
        const input = [...document.querySelectorAll(selector)].find((element2) => visible(element2) && !element2.closest('[role="dialog"],.semi-modal'));
        if (input) return input;
      }
      throw new Error("\u8BF7\u5148\u767B\u5F55\u76F4\u64AD\u95F4\uFF0C\u672A\u627E\u5230\u5F53\u524D\u804A\u5929\u8F93\u5165\u6846");
    }
    editor(input) {
      return inspectFiber([input, input.closest('#chatroom,[data-e2e="live-chatting"]')].filter(Boolean), (value) => typeof value?.setText === "function" && typeof value?.getContentState === "function" && typeof value?.isEmpty === "function" ? value : void 0);
    }
    read(input) {
      if (input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement) return input.value;
      const editor = this.editor(input);
      if (!editor) throw new Error("\u539F\u751F\u8F93\u5165\u6A21\u578B\u5DF2\u53D8\u5316\uFF0C\u53D6\u6D88\u64CD\u4F5C");
      if (typeof editor.getText === "function") return editor.getText();
      const zone = editor.getContentState()?.getZoneState?.("0");
      if (!zone || typeof zone[Symbol.iterator] !== "function") throw new Error("\u65E0\u6CD5\u6838\u9A8C\u539F\u751F\u8F93\u5165\u6A21\u578B\uFF0C\u672A\u6267\u884C\u53D1\u9001");
      let text = "";
      for (const line of zone) {
        const operations = line.hasLineMarker() ? line.getOps().slice(1) : line.getOps();
        for (const operation of operations) {
          if (typeof operation.insert !== "string") throw new Error("\u539F\u751F\u8F93\u5165\u6A21\u578B\u542B\u6709\u672A\u9002\u914D\u7684\u5185\u5BB9\uFF0C\u672A\u6267\u884C\u53D1\u9001");
          text += operation.insert;
        }
      }
      return text;
    }
    matches(input, expected) {
      const text = this.read(input);
      return text === expected || !(input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement) && text === `${expected}
`;
    }
    async replace(text) {
      if (this.composing) throw new Error("\u8BF7\u5148\u7ED3\u675F\u8F93\u5165\u6CD5\u8F93\u5165\uFF0C\u518D\u64CD\u4F5C\u5F39\u5E55");
      const input = this.input();
      this.lastInput = input;
      input.focus({ preventScroll: true });
      if (input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement) {
        if (input.disabled || input.readOnly) throw new Error("\u5F53\u524D\u8F93\u5165\u6846\u4E0D\u53EF\u7528");
        const prototype = input instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(prototype, "value").set.call(input, text);
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
        input.setSelectionRange(text.length, text.length);
      } else {
        const editor = this.editor(input);
        if (!editor) throw new Error("\u5F53\u524D\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u5C1A\u672A\u9002\u914D\uFF0C\u5DF2\u4FDD\u7559\u539F\u8F93\u5165");
        editor.reset?.();
        editor.setText(text);
        editor.focusAtEnd?.();
      }
      await new Promise((resolve) => requestAnimationFrame(() => resolve()));
      if (!input.isConnected || !this.matches(input, text)) throw new Error("\u8F93\u5165\u5185\u5BB9\u672A\u80FD\u540C\u6B65\uFF0C\u672A\u6267\u884C\u53D1\u9001");
      input.focus({ preventScroll: true });
      if (!(input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement)) {
        const range = document.createRange();
        range.selectNodeContents(input);
        range.collapse(false);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
    async submit(expected) {
      if (this.composing) throw new Error("\u8F93\u5165\u6CD5\u7EC4\u5408\u8F93\u5165\u671F\u95F4\u4E0D\u53D1\u9001");
      const input = this.input();
      if (input !== this.lastInput || !this.matches(input, expected)) throw new Error("\u8F93\u5165\u5185\u5BB9\u5DF2\u53D8\u5316\uFF0C\u53D6\u6D88\u672C\u6B21\u53D1\u9001");
      const scope = input.closest('#chatroom,[data-e2e="live-chatting"]');
      const selector = '.webcast-chatroom___send-btn,[data-e2e*="send"],[aria-label="\u53D1\u9001"],button';
      const button = [...scope.querySelectorAll(selector)].find((element2) => visible(element2) && (element2.matches('.webcast-chatroom___send-btn,[data-e2e*="send"],[aria-label="\u53D1\u9001"]') || element2.textContent?.trim() === "\u53D1\u9001"));
      if (!button) {
        if (!(input instanceof HTMLTextAreaElement) && !this.editor(input)) throw new Error("\u672A\u627E\u5230\u5DF2\u9002\u914D\u7684\u539F\u751F\u63D0\u4EA4\u5165\u53E3");
        input.focus({ preventScroll: true });
        input.dispatchEvent(new KeyboardEvent("keydown", {
          key: "Enter",
          code: "Enter",
          keyCode: 13,
          which: 13,
          bubbles: true,
          cancelable: true,
          composed: true
        }));
        return "submitted";
      }
      if (button.disabled || button.getAttribute("aria-disabled") === "true") throw new Error("\u539F\u751F\u53D1\u9001\u6682\u4E0D\u53EF\u7528\uFF0C\u8BF7\u7A0D\u540E\u64CD\u4F5C");
      button.click();
      return "submitted";
    }
    dispose() {
      this.abort.abort();
      this.lastInput = null;
    }
  };

  // src/adapters/chat-filter.ts
  var GIFT_ROW_CLASS = "douyin-ex-gift-row";
  var GIFT_ROW_CSS = `
#chatroom .webcast-chatroom___item:has(.kKlRF5rO),
#chatroom .webcast-chatroom___item:has(img.OE08lZUF){display:none!important}
#chatroom .webcast-chatroom___item.${GIFT_ROW_CLASS}{display:none!important}`;
  var ChatGiftFilter = class {
    constructor() {
      this.cssSupported = typeof window.CSS?.supports === "function" && window.CSS.supports("selector(:has(*))");
      this.style = document.createElement("style");
      this.style.textContent = GIFT_ROW_CSS;
      (document.head ?? document.documentElement).append(this.style);
      this.observer = this.cssSupported ? null : new MutationObserver((mutations) => this.onMutations(mutations));
    }
    enabled = true;
    cssSupported = false;
    observer = null;
    target = null;
    timer = 0;
    status = { hidden: 0, scanned: 0 };
    start() {
      if (this.timer) return;
      this.timer = setInterval(() => this.scan(), 1e3);
      this.scan();
    }
    setEnabled(enabled) {
      this.enabled = !!enabled;
      this.style.disabled = !this.enabled;
      if (!this.enabled) {
        for (const row of document.querySelectorAll(`.${GIFT_ROW_CLASS}`)) row.classList.remove(GIFT_ROW_CLASS);
        this.status = { hidden: 0, scanned: this.status.scanned };
        return;
      }
      this.scan();
    }
    isGiftRow(row) {
      return row.classList.contains(GIFT_ROW_CLASS) || !!row.querySelector(".kKlRF5rO, img.OE08lZUF");
    }
    apply(row) {
      if (!this.enabled) return false;
      if (this.isGiftRow(row)) return true;
      if (!looksLikeGiftText(row.textContent || "")) return false;
      row.classList.add(GIFT_ROW_CLASS);
      return true;
    }
    onMutations(mutations) {
      for (const mutation of mutations) {
        const node = mutation.target;
        const row = node.nodeType === 1 ? node.closest?.(".webcast-chatroom___item") : node.parentElement?.closest?.(".webcast-chatroom___item");
        if (row) this.apply(row);
        for (const added of mutation.addedNodes) {
          if (added.nodeType !== 1) continue;
          if (added.matches?.(".webcast-chatroom___item")) this.apply(added);
          else for (const child of added.querySelectorAll?.(".webcast-chatroom___item") ?? []) this.apply(child);
        }
      }
    }
    scan() {
      const chat = document.getElementById("chatroom");
      if (!chat) return;
      if (this.observer && this.target !== chat) {
        this.observer.disconnect();
        this.target = chat;
        this.observer.observe(chat, { childList: true, subtree: true, characterData: true });
      }
      const list = chat.querySelector(".webcast-chatroom___list") ?? chat;
      const rows = list.querySelectorAll(".webcast-chatroom___item");
      let hidden = 0;
      for (const row of rows) {
        if (this.apply(row) || (this.enabled && this.isGiftRow(row))) hidden++;
      }
      this.status = { hidden, scanned: rows.length };
    }
    dispose() {
      clearInterval(this.timer);
      this.observer?.disconnect();
      this.style.remove();
    }
  };

  // src/adapters/pk-numbers.ts
  var PK_BLUR = /^(\d+(?:\.\d+)?)([万亿])?\+?$/;
  var PK_ROW_SELECTOR = '[data-e2e="mic_seat"]';
  var PK_REAL_ATTR = "data-douyin-ex-pk";
  var PkNumbers = class {
    constructor() {
      this.formatter = new Intl.NumberFormat("zh-CN");
    }
    enabled = true;
    timer = 0;
    status = { replaced: 0, scores: 0, matched: 0 };
    start() {
      if (this.timer) return;
      this.timer = setInterval(() => this.apply(), 300);
      this.apply();
    }
    setEnabled(enabled) {
      this.enabled = !!enabled;
      if (!this.enabled) this.restore();
      this.apply();
    }
    restore() {
      for (const node of document.querySelectorAll(`[${PK_REAL_ATTR}]`)) {
        const original = node.getAttribute(PK_REAL_ATTR);
        if (original !== null && node.textContent !== original) node.textContent = original;
        node.removeAttribute(PK_REAL_ATTR);
      }
      this.status = { ...this.status, replaced: 0 };
    }
    readData(root) {
      const scores = [], users = [];
      const pushScore = (item) => {
        if (scores.length > 200) return;
        if (item && typeof item === "object" && typeof item.score === "number" && typeof item.scoreBlur === "string") {
          scores.push({ uid: item.uid, blur: item.scoreBlur, exact: item.score, teamExact: item.teamScore });
        }
      };
      const pushUser = (item) => {
        if (users.length > 200) return;
        if (item && typeof item === "object" && item.uid && typeof item.name === "string") users.push({ uid: item.uid, name: item.name });
      };
      const collect = (value, depth) => {
        if (!value || typeof value !== "object" || depth > 4 || (scores.length > 120 && users.length > 120)) return;
        if (Array.isArray(value)) {
          if (value.length <= 300) for (const item of value) {
            pushScore(item);
            pushUser(item);
          }
          return;
        }
        if (Array.isArray(value.pkScores)) value.pkScores.forEach(pushScore);
        if (Array.isArray(value.pkUsers)) value.pkUsers.forEach(pushUser);
        for (const key of Object.keys(value).slice(0, 40)) {
          if (key === "store" || key === "root" || key === "_core" || key === "reaction" || key === "current" || key === "socket") continue;
          const child = value[key];
          if (child && typeof child === "object" && !Array.isArray(child)) collect(child, depth + 1);
        }
      };
      const getFiber = (element) => {
        const key = Object.keys(element).find((name) => name.startsWith("__reactFiber") || name.startsWith("__reactInternalInstance"));
        return key ? element[key] : void 0;
      };
      let fiber = getFiber(root);
      for (let depth = 0; fiber && depth < 40; depth++, fiber = fiber.return) {
        let hook = fiber.memoizedState;
        for (let index = 0; hook && index < 60; index++, hook = hook.next) collect(hook.memoizedState, 0);
        if (scores.length && users.length) break;
      }
      return { scores, users };
    }
    normalize(value) {
      return String(value || "").replace(/[\u200b\u200c\u200d\s]/g, "");
    }
    apply() {
      if (!this.enabled) return;
      const root = document.querySelector(".PKViewPlugin");
      if (!root) {
        if (this.status.replaced) this.restore();
        return;
      }
      const { scores, users } = this.readData(root);
      const uidScore = /* @__PURE__ */ new Map(), uidName = /* @__PURE__ */ new Map();
      for (const item of scores) if (item.uid) uidScore.set(item.uid, item);
      for (const item of users) uidName.set(item.uid, item.name);
      const nameScore = /* @__PURE__ */ new Map();
      for (const [uid, item] of uidScore) {
        const name = uidName.get(uid);
        if (name) nameScore.set(this.normalize(name), item.exact);
      }
      const blurMap = /* @__PURE__ */ new Map(), ambiguous = /* @__PURE__ */ new Set();
      const teams = /* @__PURE__ */ new Set();
      for (const item of scores) {
        if (typeof item.teamExact === "number" && Number.isFinite(item.teamExact)) teams.add(item.teamExact);
        if (!PK_BLUR.test(item.blur) || !/[万亿+]/.test(item.blur)) continue;
        const current = blurMap.get(item.blur);
        if (current !== void 0 && current !== item.exact) ambiguous.add(item.blur);
        else blurMap.set(item.blur, item.exact);
      }
      for (const blur of ambiguous) blurMap.delete(blur);
      const teamList = [...teams].sort((a, b) => b - a);
      const teamDiff = teamList.length >= 2 ? teamList[0] - teamList[1] : null;
      let replaced = 0, matched = 0;
      const write = (node, original, next) => {
        if (!node.hasAttribute(PK_REAL_ATTR)) node.setAttribute(PK_REAL_ATTR, original);
        if (node.textContent !== next) node.textContent = next;
        replaced++;
      };
      const usedUids = /* @__PURE__ */ new Set();
      const unnamedSeats = [];
      for (const seat of root.querySelectorAll(PK_ROW_SELECTOR)) {
        const nameNode = seat.querySelector(".mkxwziet");
        const name = nameNode ? this.normalize(nameNode.textContent) : "";
        if (!name) {
          unnamedSeats.push(seat);
          continue;
        }
        const exact = nameScore.get(name);
        if (exact === void 0) continue;
        for (const [uid, item] of uidScore) if (this.normalize(uidName.get(uid)) === name) usedUids.add(uid);
        let node = seat.querySelector(`[${PK_REAL_ATTR}]`);
        if (!node) {
          for (const leaf of seat.querySelectorAll("div,span")) {
            if (leaf.childElementCount) continue;
            const text = (leaf.textContent || "").trim();
            if (PK_BLUR.test(text) && /[万亿+]/.test(text)) {
              node = leaf;
              break;
            }
          }
        }
        if (!node) continue;
        const original = node.getAttribute(PK_REAL_ATTR) ?? (node.textContent || "").trim();
        matched++;
        write(node, original, this.formatter.format(exact));
      }
      for (const seat of unnamedSeats) {
        let node = seat.querySelector(`[${PK_REAL_ATTR}]`);
        if (!node) {
          for (const leaf of seat.querySelectorAll("div,span")) {
            if (leaf.childElementCount) continue;
            const text = (leaf.textContent || "").trim();
            if (PK_BLUR.test(text) && /[万亿+]/.test(text)) {
              node = leaf;
              break;
            }
          }
        }
        if (!node) continue;
        const text = (node.textContent || "").trim();
        const candidates = [...uidScore].filter(([uid, item]) => !usedUids.has(uid) && item.blur === text);
        if (candidates.length !== 1) continue;
        const [uid, item] = candidates[0];
        usedUids.add(uid);
        matched++;
        write(node, text, this.formatter.format(item.exact));
      }
      for (const node of root.querySelectorAll("div,span")) {
        if (node.childElementCount || node.closest(PK_ROW_SELECTOR)) continue;
        const text = (node.textContent || "").trim();
        if (!text || text.length > 16) {
          if (node.hasAttribute(PK_REAL_ATTR)) node.removeAttribute(PK_REAL_ATTR);
          continue;
        }
        const lead = /^(领先|落后)\s*(\d+(?:\.\d+)?[万亿]\+?)$/.exec(text);
        if (lead) {
          if (teamDiff === null) continue;
          write(node, text, `${lead[1]}${this.formatter.format(teamDiff)}`);
          continue;
        }
        if (text === "领先" || text === "落后") {
          if (teamDiff !== null) write(node, text, `${text}${this.formatter.format(teamDiff)}`);
          continue;
        }
        if (!PK_BLUR.test(text) || !/[万亿+]/.test(text)) {
          if (node.hasAttribute(PK_REAL_ATTR)) node.removeAttribute(PK_REAL_ATTR);
          continue;
        }
        const fallback = blurMap.get(text);
        if (fallback === void 0) continue;
        write(node, text, this.formatter.format(fallback));
      }
      this.status = { replaced, scores: scores.length, matched };
    }
    dispose() {
      clearInterval(this.timer);
      this.restore();
    }
  };

  // src/adapters/room-preferences.ts
  var PREF_AUTO_QUALITY = "douyin-ex:v1:auto-quality";
  var PREF_SHIELD_GIFT = "douyin-ex:v1:shield-gift";
  var PREF_HIDE_GIFT_DANMAKU = "douyin-ex:v1:hide-gift-danmaku";
  var PREF_PK_NUMBERS = "douyin-ex:v1:pk-numbers";
  var GIFT_TEXT = /(送出了|送出|赠送了|赠送|投喂|刷了)/;
  var GIFT_TAIL = /(?:×|x|X)\s*\d+\s*$/;
  var GIFT_NAMES = /(闪耀|灯牌|人气票|小心心|啤酒|玫瑰|嘉年华|跑车|热气球|烟花|火箭|抖音1号|大闹天宫|飞船|皇冠|钻石|花|礼盒|盲盒|魔法|城堡|派对)/;
  function looksLikeGiftText(text) {
    if (GIFT_TEXT.test(text)) return true;
    return GIFT_TAIL.test(text) && GIFT_NAMES.test(text);
  }
  var QUALITY_NAMES = ["\u539F\u753B", "\u84DD\u5149", "\u8D85\u6E05", "\u9AD8\u6E05", "\u6807\u6E05"];
  function readFlag(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : value !== "false";
    } catch {
      return fallback;
    }
  }
  function writeFlag(key, value) {
    try {
      localStorage.setItem(key, String(value));
    } catch {
    }
  }
  function nextFrame() {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function waitFor(pick, timeout = 4e3, interval = 120) {
    const deadline = performance.now() + timeout;
    for (; ;) {
      const value = pick();
      if (value) return value;
      if (performance.now() > deadline) return void 0;
      await sleep(interval);
    }
  }
  function fireEvents(node, types) {
    for (const type of types) {
      const Ctor = type.startsWith("pointer") ? PointerEvent : MouseEvent;
      node.dispatchEvent(new Ctor(type, { bubbles: true, cancelable: true, composed: true }));
    }
  }
  function pointerClick(node) {
    fireEvents(node, ["pointerdown", "mousedown", "pointerup", "mouseup", "click"]);
  }
  function pointerHover(node, enter) {
    fireEvents(node, enter ? ["pointerover", "mouseover", "pointerenter", "mouseenter"] : ["pointerout", "mouseout", "pointerleave", "mouseleave"]);
  }
  function qualityLabel() {
    const node = document.querySelector('[data-e2e="quality"]');
    return node ? node.textContent.trim() : "";
  }
  function qualityOptions() {
    const selector = document.querySelector('[data-e2e="quality-selector"]');
    if (!selector) return [];
    return [...selector.querySelectorAll(".tmNdnn5Q")].map((row) => {
      const label = row.querySelector(".KJ5LucVT"), box = row.querySelector(".siW34Cq4");
      return label && box ? { label: label.textContent.trim(), box } : null;
    }).filter((option) => option !== null);
  }
  function highestQuality(options) {
    let best = null, bestRank = -Infinity;
    options.forEach((option, index) => {
      const rank = QUALITY_NAMES.includes(option.label) ? QUALITY_NAMES.length - QUALITY_NAMES.indexOf(option.label) : -index;
      if (rank > bestRank) {
        bestRank = rank;
        best = option;
      }
    });
    return best;
  }
  function shieldSwitch() {
    return document.querySelector('[data-e2e="effect-switch"]');
  }
  function shieldEnabled(toggle) {
    const track = toggle?.firstElementChild, knob = track?.firstElementChild;
    if (!track || !knob) return null;
    const trackRect = track.getBoundingClientRect(), knobRect = knob.getBoundingClientRect();
    if (!trackRect.width || !knobRect.width) return null;
    return knobRect.x - trackRect.x > (trackRect.width - knobRect.width) / 2;
  }
  var RoomPreferences = class {
    constructor(onChange = () => {
    }) {
      this.onChange = onChange;
      this.values = {
        autoQuality: readFlag(PREF_AUTO_QUALITY, true),
        shieldGift: readFlag(PREF_SHIELD_GIFT, true),
        hideGiftDanmaku: readFlag(PREF_HIDE_GIFT_DANMAKU, true),
        pkNumbers: readFlag(PREF_PK_NUMBERS, true)
      };
    }
    roomId = "";
    qualityDone = false;
    shieldDone = false;
    busy = false;
    attempts = 0;
    timer;
    values;
    read() {
      return { ...this.values };
    }
    set(key, value) {
      if (!(key in this.values)) return this.read();
      this.values[key] = !!value;
      const keyNames = {
        autoQuality: PREF_AUTO_QUALITY,
        shieldGift: PREF_SHIELD_GIFT,
        hideGiftDanmaku: PREF_HIDE_GIFT_DANMAKU,
        pkNumbers: PREF_PK_NUMBERS
      };
      writeFlag(keyNames[key], this.values[key]);
      const affectsRoom = key === "autoQuality" || key === "shieldGift" || key === "hideGiftDanmaku";
      if (affectsRoom) {
        this.qualityDone = this.shieldDone = false;
        this.attempts = 0;
        this.onChange(this.read());
        void this.apply();
      } else this.onChange(this.read());
      return this.read();
    }
    attach(roomId) {
      if (!roomId || this.roomId === roomId) return;
      this.roomId = roomId;
      this.qualityDone = this.shieldDone = false;
      this.attempts = 0;
      void this.apply();
      for (const delay of [3e3, 6e3, 1e4]) setTimeout(() => this.checkQuality(), delay);
    }
    checkQuality() {
      if (!this.roomId || !this.values.autoQuality || this.busy) return;
      const target = highestQuality(qualityOptions());
      if (!target || qualityLabel() === target.label) return;
      this.qualityDone = false;
      void this.apply();
    }
    detach() {
      this.roomId = "";
      clearTimeout(this.timer);
    }
    schedule(delay) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => void this.apply(), delay);
    }
    async apply() {
      if (!this.roomId || document.hidden || this.busy) return;
      if ((this.qualityDone || !this.values.autoQuality) && (this.shieldDone || !this.values.shieldGift)) return;
      this.busy = true;
      try {
        if (!this.qualityDone && this.values.autoQuality) this.qualityDone = await this.ensureQuality();
        if (!this.shieldDone && this.values.shieldGift) this.shieldDone = await this.ensureShield();
      } catch (error) {
        void 0 && console.warn("[douyin-ex] \u76F4\u64AD\u95F4\u8BBE\u7F6E\u5E94\u7528\u5931\u8D25:", error instanceof Error ? error.message : error);
      } finally {
        this.busy = false;
      }
      const qualityReady = this.qualityDone || !this.values.autoQuality;
      const shieldReady = this.shieldDone || !this.values.shieldGift;
      if (!qualityReady || !shieldReady) {
        if (++this.attempts < 20) this.schedule(500 + this.attempts * 250);
      }
    }
    async ensureQuality() {
      const options = await waitFor(() => qualityOptions().length ? qualityOptions() : void 0, 4e3);
      if (!options) return false;
      const target = highestQuality(options);
      if (!target) return false;
      const label = qualityLabel();
      if (label === target.label) return true;
      if (!label) return false;
      pointerClick(target.box);
      await nextFrame();
      const settled = await waitFor(() => qualityLabel() === target.label ? true : void 0, 2500, 150);
      return settled === true;
    }
    async ensureShield() {
      const icon = await waitFor(() => document.querySelector('[data-e2e="gift-setting"]'), 4e3);
      if (!icon) return false;
      let toggle = shieldSwitch();
      if (!toggle) {
        pointerHover(icon, true);
        toggle = await waitFor(shieldSwitch, 2500);
      }
      if (!toggle) {
        pointerHover(icon, false);
        return false;
      }
      let state = shieldEnabled(toggle);
      if (state === null) {
        pointerHover(icon, false);
        return false;
      }
      if (!state) {
        pointerClick(toggle.firstElementChild ?? toggle);
        await nextFrame();
        await waitFor(() => shieldEnabled(shieldSwitch()) === true, 1500, 120);
      }
      pointerHover(icon, false);
      return shieldEnabled(shieldSwitch()) === true;
    }
  };

  // src/userscript.ts
  var PREFERENCE = "douyin-ex:v1:enabled";
  var KEY = "__DOUYIN_EX__";
  if (window.top === window.self && location.hostname === "live.douyin.com" && !window[KEY]) {
    let app;
    let observer;
    let timer;
    let retry;
    let expired = false;
    const chatFilter = new ChatGiftFilter();
    const pkNumbers = new PkNumbers();
    const preferences = new RoomPreferences((values) => {
      chatFilter.setEnabled(values.hideGiftDanmaku !== false);
      pkNumbers.setEnabled(values.pkNumbers !== false);
    });
    let roomWatch = 0;
    const roomIdFromUrl = () => {
      const match = /^\/(\d+)/.exec(location.pathname);
      return match ? match[1] : "";
    };
    const watchRoom = () => {
      clearInterval(roomWatch);
      roomWatch = setInterval(() => {
        const roomId = roomIdFromUrl();
        if (roomId && roomId !== preferences.roomId) preferences.attach(roomId);
      }, 1e3);
    };
    const enabled = () => {
      try {
        return localStorage.getItem(PREFERENCE) !== "false";
      } catch {
        return true;
      }
    };
    const save = (value) => {
      try {
        localStorage.setItem(PREFERENCE, String(value));
      } catch {
      }
    };
    const stopProbe = () => {
      observer?.disconnect();
      observer = void 0;
      clearTimeout(timer);
      clearTimeout(retry);
    };
    const probe = () => {
      if (app) return true;
      try {
        const live = discoverLiveSession();
        if (!live) return false;
        app = new LifecycleController(live, new DouyinChatAdapter(), save, preferences);
        preferences.attach(live.roomId || roomIdFromUrl());
        app.onInvalid = () => {
          const stale = app;
          app = void 0;
          stale?.dispose();
          preferences.detach();
          stopProbe();
          begin();
        };
        stopProbe();
        if (enabled()) {
          if (!document.hidden) void app.start();
          else document.addEventListener("visibilitychange", () => {
            if (!document.hidden && app?.state === "native" && enabled()) void app.start();
          }, { once: true });
        }
        return true;
      } catch (error) {
        void 0 && console.warn("[douyin-ex] \u9002\u914D\u63A2\u6D4B\u5931\u8D25:", error instanceof Error ? error.message : error);
        return false;
      }
    };
    const begin = () => {
      expired = false;
      chatFilter.setEnabled(preferences.read().hideGiftDanmaku !== false);
      chatFilter.start();
      pkNumbers.setEnabled(preferences.read().pkNumbers !== false);
      pkNumbers.start();
      preferences.attach(roomIdFromUrl());
      watchRoom();
      if (probe()) return;
      observer = new MutationObserver(() => {
        if (!expired) probe();
      });
      observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
      const attempt = () => {
        if (!expired && !probe()) retry = setTimeout(attempt, 500);
      };
      retry = setTimeout(attempt, 500);
      timer = setTimeout(() => {
        expired = true;
        stopProbe();
        void 0 && console.warn("[douyin-ex] 20 \u79D2\u5185\u672A\u627E\u5230\u53EF\u9A8C\u8BC1\u7684\u76F4\u64AD\u9002\u914D\u5165\u53E3\uFF0C\u5DF2\u4FDD\u7559\u539F\u751F\u9875\u9762\u3002\u3002");
      }, 2e4);
    };
    Object.defineProperty(window, KEY, { configurable: true, value: "2026.11.11.29" });
    window.addEventListener("pagehide", () => {
      stopProbe();
      clearInterval(roomWatch);
      chatFilter.dispose();
      pkNumbers.dispose();
      preferences.detach();
      app?.dispose();
      app = void 0;
    });
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) begin();
    });
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", begin, { once: true });
    else begin();
  }
})();
