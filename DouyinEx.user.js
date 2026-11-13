// ==UserScript==
// @name         DouyinEx - 抖音直播间增强插件
// @namespace    https://github.com/afwfv/DouyinEx
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTA4cHgiIGhlaWdodD0iMTA4cHgiIHZpZXdCb3g9IjAgMCAxMDggMTA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPueyvueBteeQgzwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnsr7ngbXnkIMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODMwNzY5LCAwLjgzMDc2OSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4xNjkyMzA3LDEwNi4zMzg0NjEgQzIzLjgyNzY5MjIsMTA2LjMzODQ2MSAwLDgyLjUxMDc2OTIgMCw1My4xNjkyMzA3IEMwLDUxLjAwMzA3NjkgMS43NzIzMDc3NSw0OS4yMzA3NjkyIDMuOTM4NDYxNSw0OS4yMzA3NjkyIEwzMy40NzY5MjMsNDkuMjMwNzY5MiBDMzUuNjQzMDc2OSw0OS4yMzA3NjkyIDM3LjQxNTM4NDUsNTEuMDAzMDc3IDM3LjQxNTM4NDYsNTMuMTY5MjMwNyBDMzcuNDE1Mzg0Niw2MS44MzM4NDYxIDQ0LjUwNDYxNTQsNjguOTIzMDc2OSA1My4xNjkyMzA3LDY4LjkyMzA3NjkgQzYxLjgzMzg0NjEsNjguOTIzMDc2OSA2OC45MjMwNzY5LDYxLjgzMzg0NjEgNjguOTIzMDc2OSw1My4xNjkyMzA3IEM2OC45MjMwNzY5LDUxLjAwMzA3NjkgNzAuNjk1Mzg0Niw0OS4yMzA3NjkyIDcyLjg2MTUzODUsNDkuMjMwNzY5MiBMMTAyLjQsNDkuMjMwNzY5MiBDMTA0LjU2NjE1NCw0OS4yMzA3NjkyIDEwNi4zMzg0NjEsNTEuMDAzMDc3IDEwNi4zMzg0NjEsNTMuMTY5MjMwNyBDMTA2LjMzODQ2MSw4Mi41MTA3NjkyIDgyLjUxMDc2OTIsMTA2LjMzODQ2MSA1My4xNjkyMzA3LDEwNi4zMzg0NjEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzMzMzYzQSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOC4wNzM4NDYxMiw1Ny4xMDc2OTIyIEMxMC4wNDMwNzY5LDgwLjI0NjE1MzcgMjkuNTM4NDYxNSw5OC40NjE1Mzg1IDUzLjE2OTIzMDcsOTguNDYxNTM4NSBDNzYuOCw5OC40NjE1Mzg1IDk2LjI5NTM4NDYsODAuMjQ2MTUzOSA5OC4yNjQ2MTU0LDU3LjEwNzY5MjIgTDc2LjUwNDYxNTQsNTcuMTA3NjkyMiBDNzQuNjMzODQ2MSw2OC4yMzM4NDYxIDY0Ljg4NjE1MzksNzYuOCA1My4xNjkyMzA3LDc2LjggQzQxLjQ1MjMwNzYsNzYuOCAzMS43MDQ2MTU0LDY4LjIzMzg0NjEgMjkuODMzODQ2MSw1Ny4xMDc2OTIyIEw4LjA3Mzg0NjEyLDU3LjEwNzY5MjIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTMuMTY5MjMwOCwzLjkzODQ2MTUgQzI1Ljk5Mzg0NjEsMy45Mzg0NjE1IDMuOTM4NDYxNSwyNS45OTM4NDYxIDMuOTM4NDYxNSw1My4xNjkyMzA3IEwzMy40NzY5MjMsNTMuMTY5MjMwNyBDMzMuNDc2OTIzLDQyLjMzODQ2MTUgNDIuMzM4NDYxNSwzMy40NzY5MjMgNTMuMTY5MjMwOCwzMy40NzY5MjMgQzY0LDMzLjQ3NjkyMyA3Mi44NjE1Mzg1LDQyLjMzODQ2MTUgNzIuODYxNTM4NSw1My4xNjkyMzA3IEwxMDIuNCw1My4xNjkyMzA3IEMxMDIuNCwyNS45OTM4NDYxIDgwLjM0NDYxNTQsMy45Mzg0NjE1IDUzLjE2OTIzMDgsMy45Mzg0NjE1IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNENjA5MDkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEwMi40LDU3LjEwNzY5MjIgTDcyLjg2MTUzODUsNTcuMTA3NjkyMiBDNzAuNjk1Mzg0Niw1Ny4xMDc2OTIyIDY4LjkyMzA3Nyw1NS4zMzUzODQ1IDY4LjkyMzA3NjksNTMuMTY5MjMwNyBDNjguOTIzMDc2OSw0NC41MDQ2MTU0IDYxLjgzMzg0NjEsMzcuNDE1Mzg0NiA1My4xNjkyMzA3LDM3LjQxNTM4NDYgQzQ0LjUwNDYxNTQsMzcuNDE1Mzg0NiAzNy40MTUzODQ2LDQ0LjUwNDYxNTQgMzcuNDE1Mzg0Niw1My4xNjkyMzA3IEMzNy40MTUzODQ2LDU1LjMzNTM4NDYgMzUuNjQzMDc2OSw1Ny4xMDc2OTIyIDMzLjQ3NjkyMyw1Ny4xMDc2OTIyIEwzLjkzODQ2MTUsNTcuMTA3NjkyMiBDMS43NzIzMDc2Miw1Ny4xMDc2OTIyIDAsNTUuMzM1Mzg0NSAwLDUzLjE2OTIzMDcgQzAsMjMuODI3NjkyMiAyMy44Mjc2OTIzLDAgNTMuMTY5MjMwNywwIEM4Mi41MTA3NjkyLDAgMTA2LjMzODQ2MSwyMy44Mjc2OTIyIDEwNi4zMzg0NjEsNTMuMTY5MjMwNyBDMTA2LjMzODQ2MSw1NS4zMzUzODQ2IDEwNC41NjYxNTQsNTcuMTA3NjkyMiAxMDIuNCw1Ny4xMDc2OTIyIFoiIGlkPSLot6/lvoQiIGZpbGw9IiMzMzM2M0EiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTc2LjUwNDYxNTQsNDkuMjMwNzY5MyBMOTguMzYzMDc2OSw0OS4yMzA3NjkzIEM5Ni4yOTUzODQ2LDI2LjA5MjMwNzYgNzYuOCw3Ljg3NjkyMyA1My4xNjkyMzA3LDcuODc2OTIzIEMyOS41Mzg0NjE1LDcuODc2OTIzIDEwLjA0MzA3NjksMjYuMDkyMzA3NiA4LjA3Mzg0NjEyLDQ5LjIzMDc2OTMgTDI5LjkzMjMwNzYsNDkuMjMwNzY5MyBDMzEuNzA0NjE1NCwzOC4xMDQ2MTU0IDQxLjQ1MjMwNzYsMjkuNTM4NDYxNSA1My4xNjkyMzA3LDI5LjUzODQ2MTUgQzY0Ljg4NjE1MzksMjkuNTM4NDYxNSA3NC42MzM4NDYxLDM4LjEwNDYxNTQgNzYuNTA0NjE1NCw0OS4yMzA3NjkzIEw3Ni41MDQ2MTU0LDQ5LjIzMDc2OTMgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0Q2MDkwOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTMuMTY5MjMwNyw3Ni44IEM0MC4xNzIzMDc2LDc2LjggMjkuNTM4NDYxNSw2Ni4xNjYxNTM5IDI5LjUzODQ2MTUsNTMuMTY5MjMwNyBDMjkuNTM4NDYxNSw0MC4xNzIzMDc2IDQwLjE3MjMwNzYsMjkuNTM4NDYxNSA1My4xNjkyMzA3LDI5LjUzODQ2MTUgQzY2LjE2NjE1MzksMjkuNTM4NDYxNSA3Ni44LDQwLjE3MjMwNzYgNzYuOCw1My4xNjkyMzA3IEM3Ni44LDY2LjE2NjE1MzkgNjYuMTY2MTUzOSw3Ni44IDUzLjE2OTIzMDcsNzYuOCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMzMzNjNBIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01My4xNjkyMzA3LDM3LjQxNTM4NDYgQzQ0LjUwNDYxNTQsMzcuNDE1Mzg0NiAzNy40MTUzODQ2LDQ0LjUwNDYxNTQgMzcuNDE1Mzg0Niw1My4xNjkyMzA3IEMzNy40MTUzODQ2LDYxLjgzMzg0NjEgNDQuNTA0NjE1NCw2OC45MjMwNzY5IDUzLjE2OTIzMDcsNjguOTIzMDc2OSBDNjEuODMzODQ2MSw2OC45MjMwNzY5IDY4LjkyMzA3NjksNjEuODMzODQ2MSA2OC45MjMwNzY5LDUzLjE2OTIzMDcgQzY4LjkyMzA3NjksNDQuNTA0NjE1NCA2MS44MzM4NDYxLDM3LjQxNTM4NDYgNTMuMTY5MjMwNywzNy40MTUzODQ2IEw1My4xNjkyMzA3LDM3LjQxNTM4NDYgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNDMuMzIzMDc2OSw1My4xNjkyMzA3IEM0My4zMjMwNzY5LDU4LjYwNzExMTQgNDcuNzMxMzUwMSw2My4wMTUzODQ2IDUzLjE2OTIzMDcsNjMuMDE1Mzg0NiBDNTguNjA3MTExNCw2My4wMTUzODQ2IDYzLjAxNTM4NDYsNTguNjA3MTExNCA2My4wMTUzODQ2LDUzLjE2OTIzMDcgQzYzLjAxNTM4NDYsNDcuNzMxMzUwMSA1OC42MDcxMTE0LDQzLjMyMzA3NjkgNTMuMTY5MjMwNyw0My4zMjMwNzY5IEM0Ny43MzEzNTAxLDQzLjMyMzA3NjkgNDMuMzIzMDc2OSw0Ny43MzEzNTAxIDQzLjMyMzA3NjksNTMuMTY5MjMwNyBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMzMzNjNBIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
// @version      2026.11.13.11
// @description  弹幕悬停、+1、回复、最高画质、礼物屏蔽、PK真实分数、自动免费福袋、简洁模式、进场/重复/关键词过滤
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
    gap: 56,
    gapRandom: 150,
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
      this.url = URL.createObjectURL(new Blob(["\"use strict\";(()=>{var T={fontSize:20,lineHeight:36,area:.6,opacity:1,gap:56,gapRandom:150,travelSeconds:12,maxActive:120,maxQueue:200,queueTtl:2e3,leaveDelay:200,cacheBytes:33554432,maxLanes:0},z=()=>({received:0,admitted:0,overflow:0,expired:0,avoidance:0,active:0,queued:0,deduplicated:0,frameP95:0,drawP95:0,fps:0,cacheBytes:0,cacheEntries:0,cacheMisses:0,frames:0});var S=class{constructor(e=2e3,t=6e4){this.max=e;this.ttl=t}ids=new Map;accept(e,t){for(let[n,a]of this.ids){if(t-a<=this.ttl)break;this.ids.delete(n)}let i=`${e.roomId}\\0${e.id}`;if(this.ids.has(i))return!1;for(this.ids.set(i,t);this.ids.size>this.max;)this.ids.delete(this.ids.keys().next().value);return!0}clear(){this.ids.clear()}get size(){return this.ids.size}};function v(s,e,t=0){return e.inside&&e.x>=s.x-t&&e.x<=s.x+s.width+t&&e.y>=s.y-t&&e.y<=s.y+s.height+t}var M=class{constructor(e,t,i,n={}){this.width=e;this.height=t;this.measure=i;this.config={...T,...n}}config;stats=z();deduper=new S;active=[];queue=[];selection=null;pointer={x:0,y:0,inside:!1};menu=null;held=!1;leaveAt=null;ignored=null;token=0;last=null;nextLane=0;get lanes(){return Math.max(1,Math.min(this.config.maxLanes||1/0,Math.floor(this.height*this.config.area/this.config.lineHeight)))}rect(e){return{x:e.x,y:e.lane*this.config.lineHeight+4,width:e.width,height:this.config.lineHeight-4}}enqueue(e,t){for(let i of e){if(this.stats.received++,!this.deduper.accept(i,t)){this.stats.deduplicated++;continue}this.queue.push(i)}this.queue.length>this.config.maxQueue&&(this.stats.overflow+=this.queue.length-this.config.maxQueue,this.queue.splice(0,this.queue.length-this.config.maxQueue))}resize(e,t){let i=e/Math.max(1,this.width),pl=this.lanes;this.width=e,this.height=t;let lanes=this.lanes;for(let n of this.active)n.x*=i;if(lanes!==pl){let order=this.active.slice().sort((a,b)=>b.x-a.x),tails=new Array(lanes).fill(Infinity),kept=[];for(let item of order){let lane=-1;for(let k=0;k<lanes;k++){let idx=(item.lane+k)%lanes;if(tails[idx]>=item.x+item.width+this.config.gap){lane=idx;break}}if(lane<0)continue;tails[lane]=item.x,item.lane=lane,kept.push(item)}this.active=kept}this.updateSelectionRect()}configure(e){let t=e.fontSize!==this.config.fontSize,i=t||e.lineHeight!==this.config.lineHeight||e.area!==this.config.area||e.maxLanes!==this.config.maxLanes;if(i&&this.release(),Object.assign(this.config,e),i)for(let n of this.active)t&&(n.width=Math.max(1,this.measure(n.message))),n.lane%=this.lanes}setMenu(e,t,i){e===this.selection?.token&&(this.menu=t,this.held=i)}release(e){e!==void 0&&e!==this.selection?.token||(this.selection&&(this.ignored=this.selection.message.id),this.selection=null,this.menu=null,this.held=!1,this.leaveAt=null)}suspend(){this.release(),this.pointer.inside=!1,this.queue=[],this.last=null}updateSelectionRect(){if(!this.selection)return;let e=this.active.find(t=>t.message.id===this.selection.message.id);if(e){let t=this.rect(e);this.selection={...this.selection,anchorX:this.selection.anchorX+t.x-this.selection.rect.x,rect:t}}else this.release()}safeHover(){if(!this.selection)return!1;if(this.held||v(this.selection.rect,this.pointer,2))return!0;if(!this.menu)return!1;let e=this.selection.rect,t=this.menu;if(v(t,this.pointer,2))return!0;let i=t.y>=e.y+e.height?e.y+e.height:t.y+t.height,n=t.y>=e.y+e.height?t.y:e.y;return n>=i&&v({x:Math.min(e.x,t.x),y:i,width:Math.max(e.x+e.width,t.x+t.width)-Math.min(e.x,t.x),height:n-i},this.pointer,2)}candidate(){if(!this.pointer.inside)return;let e=Math.floor((this.pointer.y-4)/this.config.lineHeight);for(let t=this.active.length-1;t>=0;t--){let i=this.active[t];if(i.lane===e&&i.message.id!==this.ignored&&v(this.rect(i),this.pointer,2))return i}}updatePointer(e,t){this.pointer=e,this.hitTest(t)}hitTest(e){let t=this.ignored===null?null:this.active.find(n=>n.message.id===this.ignored);if((!t||!v(this.rect(t),this.pointer,4))&&(this.ignored=null),this.selection&&this.safeHover()){this.leaveAt=null;return}let i=this.candidate();if(this.selection){if(!i&&(this.leaveAt??=e,e-this.leaveAt<this.config.leaveDelay))return;this.release()}i&&(this.selection={token:++this.token,message:i.message,rect:this.rect(i),anchorX:this.pointer.x})}tick(e){let t=this.last===null?0:Math.min(Math.max(0,e-this.last),50);this.last=e,this.hitTest(e);let sl=this.selection?this.active.find(w=>w.message.id===this.selection.message.id):null,pv=this.width/this.config.travelSeconds*t/1e3;for(let n of this.active)n!==sl&&(n.x-=pv);if(sl){let q=sl.x+sl.width+this.config.gap,qs=this.active.filter(n=>n!==sl&&n.lane===sl.lane&&n.x>=sl.x).sort((a,b)=>a.x-b.x);for(let n of qs)n.x<q&&(n.x=q),q=n.x+n.width+this.config.gap}let i=0;for(let n of this.active)n.x+n.width>=0&&(this.active[i++]=n);this.active.length=i,this.updateSelectionRect();let c=0;for(let n of this.queue)e-n.receivedAt<=this.config.queueTtl&&(this.queue[c++]=n);this.stats.expired+=this.queue.length-c,this.queue.length=c;if(this.queue.length&&this.active.length<this.config.maxActive){let lanes=this.lanes,p=new Array(lanes).fill(-1/0);for(let n of this.active)p[n.lane]=Math.max(p[n.lane],n.x+n.width);for(;this.queue.length&&this.active.length<this.config.maxActive;){let n,need=this.config.gap+Math.random()*(this.config.gapRandom||0);for(let c=0;c<lanes;c++){let i=(this.nextLane+c)%lanes;if(!(p[i]+need>this.width)){n=i;break}}if(n===void 0)break;let a=this.queue.shift(),h=Math.max(1,this.measure(a));this.active.push({message:a,x:this.width,lane:n,width:h}),p[n]=this.width+h,this.nextLane=(n+1)%lanes,this.stats.admitted++}}this.hitTest(e),this.stats.active=this.active.length,this.stats.queued=this.queue.length}clear(){this.active=[],this.queue=[],this.deduper.clear(),this.release(),this.last=null}};var b=class{constructor(e,t){this.budget=e;this.release=t}values=new Map;bytes=0;get(e){let t=this.values.get(e);if(t)return this.values.delete(e),this.values.set(e,t),t.value}set(e,t,i){if(i>this.budget)return this.release(t),!1;let n=this.values.get(e);for(n&&(this.bytes-=n.bytes,this.release(n.value),this.values.delete(e));this.bytes+i>this.budget&&this.values.size;){let a=this.values.keys().next().value,h=this.values.get(a);this.values.delete(a),this.bytes-=h.bytes,this.release(h.value)}return this.values.set(e,{value:t,bytes:i}),this.bytes+=i,!0}clear(){for(let{value:e}of this.values.values())this.release(e);this.values.clear(),this.bytes=0}get size(){return this.values.size}};var g={weight:600,family:'\"PingFang SC\", \"Microsoft YaHei\", \"Noto Sans SC\", Arial, sans-serif',color:\"#fff\",stroke:\"rgba(0,0,0,.72)\",strokeWidth:2,shadow:\"rgba(0,0,0,.55)\",shadowBlur:3,shadowOffsetY:1},P=JSON.stringify(g),C=7,k=class{constructor(e,t,i){this.canvas=e;this.config=t;this.dpr=i;let n=e.getContext(\"2d\",{alpha:!0});if(!n)throw new Error(\"\\u65E0\\u6CD5\\u521B\\u5EFA Canvas 2D \\u7ED8\\u5236\\u4E0A\\u4E0B\\u6587\");\"letterSpacing\" in n&&(n.letterSpacing=\"0.4px\"),this.ctx=n,this.sprites=new b(t.cacheBytes*.875,a=>{a.width=0,a.height=0}),this.images=new b(t.cacheBytes*.125,a=>a.close())}ctx;sprites;images;requested=new Set;pending=[];inflight=0;revision=0;abort=new AbortController;misses=0;segmentKeys=new WeakMap;resize(e,t,i){this.dpr!==i&&this.sprites.clear(),this.dpr=i,this.canvas.width=Math.max(1,Math.round(e*i)),this.canvas.height=Math.max(1,Math.round(t*i))}configure(e){(e.fontSize!==this.config.fontSize||e.lineHeight!==this.config.lineHeight)&&this.sprites.clear(),Object.assign(this.config,e)}font(){return`${g.weight} ${this.config.fontSize}px ${g.family}`}measure=e=>(this.ctx.font=this.font(),e.segments.reduce((t,i)=>t+(i.type===\"emoji\"&&i.url?this.config.fontSize:this.ctx.measureText(i.text).width),C*2));load(e){this.requested.has(e)||this.requested.size>=256||(this.requested.add(e),this.pending.push(e),this.drain())}drain(){for(;this.inflight<4&&this.pending.length&&!this.abort.signal.aborted;){let e=this.pending.shift();this.inflight++,fetch(e,{mode:\"cors\",credentials:\"omit\",signal:this.abort.signal}).then(t=>{if(!t.ok)throw new Error(\"\\u8868\\u60C5\\u8D44\\u6E90\\u4E0D\\u53EF\\u7528\");return t.blob()}).then(t=>{if(t.size>1024*1024)throw new Error(\"\\u8868\\u60C5\\u8D44\\u6E90\\u8FC7\\u5927\");return createImageBitmap(t)}).then(t=>{if(this.abort.signal.aborted){t.close();return}this.images.set(e,t,t.width*t.height*4)&&this.revision++}).catch(()=>{}).finally(()=>{this.inflight--,this.drain()})}}paint(e,t){e.font=this.font(),e.textBaseline=\"middle\",e.fillStyle=(()=>{const gr=e.createLinearGradient(0,0,0,this.config.lineHeight);return gr.addColorStop(0,\"#ffffff\"),gr.addColorStop(1,\"#d9e4ff\"),gr})(),\"letterSpacing\" in e&&(e.letterSpacing=\"0.4px\"),e.strokeStyle=g.stroke,e.lineWidth=g.strokeWidth,e.lineJoin=\"round\",e.shadowColor=g.shadow,e.shadowBlur=g.shadowBlur,e.shadowOffsetY=g.shadowOffsetY;let i=C,n=(this.config.lineHeight-4)/2;for(let a of t.segments)if(a.type===\"emoji\"&&a.url){this.load(a.url);let h=this.images.get(a.url);h?(e.shadowBlur=0,e.drawImage(h,i,n-this.config.fontSize/2,this.config.fontSize,this.config.fontSize),e.shadowBlur=g.shadowBlur):(e.strokeText(a.text,i,n,this.config.fontSize),e.fillText(a.text,i,n,this.config.fontSize)),i+=this.config.fontSize}else e.strokeText(a.text,i,n),e.fillText(a.text,i,n),i+=e.measureText(a.text).width}draw(e,t){let i=this.ctx;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.setTransform(this.dpr,0,0,this.dpr,0,0),i.globalAlpha=this.config.opacity;let n;for(let a of e)a.message.id===t?n=a:this.drawItem(a);n&&this.drawItem(n)}segmentKey(e){let t=this.segmentKeys.get(e);return t||(t=JSON.stringify(e.segments),this.segmentKeys.set(e,t)),t}drawItem(e){let t=this.ctx,i=this.config.lineHeight-4,n=`${P}|${this.config.fontSize}|${this.config.lineHeight}|${this.dpr}`;for(let r of e.message.segments)r.type===\"emoji\"&&r.url&&(n+=this.images.values.has(r.url)?\"|1\":\"|0\");e.spriteSignature!==n&&(e.spriteSignature=n,e.spriteKey=`${n}|${this.segmentKey(e.message)}`);let a=this.sprites.get(e.spriteKey),h=Math.ceil(e.width*this.dpr)*Math.ceil(i*this.dpr)*4;if(!a&&h<=this.sprites.budget&&e.width*this.dpr<16384){this.misses++,a=new OffscreenCanvas(Math.max(1,Math.ceil(e.width*this.dpr)),Math.max(1,Math.ceil(i*this.dpr)));let p=a.getContext(\"2d\");p.scale(this.dpr,this.dpr),this.paint(p,e.message),this.sprites.set(e.spriteKey,a,h)}let c=e.lane*this.config.lineHeight+4,x=Math.round(e.x*this.dpr)/this.dpr;a?t.drawImage(a,x,c,e.width,i):(t.save(),t.translate(x,c),this.paint(t,e.message),t.restore()),e.message.isOwn&&(t.save(),t.fillStyle=\"rgba(0,229,255,.16)\",t.strokeStyle=\"rgba(0,229,255,.92)\",t.lineWidth=1.5,t.shadowColor=\"rgba(0,229,255,.45)\",t.shadowBlur=6,t.beginPath(),t.roundRect?t.roundRect(x-4,c+1,e.width+8,i-2,7):t.rect(x-4,c+1,e.width+8,i-2),t.fill(),t.shadowBlur=0,t.stroke(),t.restore())}stats(){return{cacheBytes:this.sprites.bytes+this.images.bytes,cacheEntries:this.sprites.size+this.images.size,cacheMisses:this.misses}}dispose(){this.abort.abort(),this.pending=[],this.sprites.clear(),this.images.clear()}};var l=self,A=\"\",r=null,o=null,u=0,x=!0,L,q=\"\",I=0,d=0,E=[],O=[],R=(s,e)=>{s.push(e),s.length>600&&s.shift()},_=s=>{let e=[...s].sort((t,i)=>t-i);return e[Math.min(e.length-1,Math.floor(e.length*.95))]||0},m=s=>l.postMessage({session:A,...s});function f(s){let e=s?`${s.token}|${s.anchorX}|${JSON.stringify(s.rect)}`:\"\";e!==q&&(q=e,m({type:\"selection\",selection:s,pointerAt:I}))}function H(){if(!r||!o)return;let s=E.reduce((e,t)=>e+t,0)/Math.max(1,E.length);m({type:\"stats\",stats:{...r.stats,...o.stats(),frameP95:_(E),drawP95:_(O),fps:s?1e3/s:0}})}function y(){!x||u||!r||!r.active.length&&!r.queue.length||(u=l.requestAnimationFrame($))}function $(s){u=0;try{if(!r||!o||!x)return;let e=performance.now();d&&s-d<250&&R(E,s-d),d=s,r.tick(performance.timeOrigin+s),o.draw(r.active,r.selection?.message.id),r.stats.frames++,R(O,performance.now()-e),f(r.selection),y(),u||(d=0)}catch(e){m({type:\"error\",message:String(e)})}}l.onmessage=({data:s})=>{try{if(s.type===\"init\"){if(A=s.session,typeof l.requestAnimationFrame!=\"function\")throw new Error(\"\\u6D4F\\u89C8\\u5668\\u4E0D\\u652F\\u6301 Worker \\u52A8\\u753B\\u8C03\\u5EA6\");o=new k(s.canvas,s.config,s.dpr),o.resize(s.width,s.height,s.dpr),r=new M(s.width,s.height,o.measure,s.config),L=setInterval(H,1e3),m({type:\"ready\"});return}if(s.session!==A||!r||!o)return;switch(s.type){case\"enqueue\":x&&(r.enqueue(s.messages,Date.now()),r.stats.overflow+=s.overflow||0,r.stats.received+=s.overflow||0,y());break;case\"resize\":r.resize(s.width,s.height),o.resize(s.width,s.height,s.dpr),o.draw(r.active,r.selection?.message.id),f(r.selection);break;case\"configure\":o.configure(s.settings),r.configure(s.settings),o.draw(r.active,r.selection?.message.id),f(r.selection),y();break;case\"pointer\":I=s.sentAt,r.updatePointer(s.pointer,Date.now()),f(r.selection),y();break;case\"menu\":r.setMenu(s.token,s.rect,s.held);break;case\"release\":r.release(s.token),f(r.selection);break;case\"visibility\":x=s.visible,r.suspend(),f(null),x?y():(l.cancelAnimationFrame(u),u=0,d=0);break;case\"snapshot\":m({type:\"snapshot\",requestId:s.requestId,selection:r.selection,active:r.active.map(e=>({...r.rect(e),id:e.message.id,text:e.message.plainText,paused:r.selection?.message.id===e.message.id}))});break;case\"destroy\":l.cancelAnimationFrame(u),clearInterval(L),o.dispose(),r.clear(),l.close();break}}catch(e){m({type:\"error\",message:String(e)})}};})();\n"], { type: "text/javascript" }));
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
          const request = this.snapshots.get(data.requestId);
          if (request) {
            this.snapshots.delete(data.requestId);
            clearTimeout(request.timer);
            request.resolve(data);
          }
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
      if (this.dead) return Promise.reject(new Error("Worker is closed"));
      const requestId = ++this.snapshotId;
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          this.snapshots.delete(requestId);
          reject(new Error("Worker snapshot timeout"));
        }, 2e3);
        this.snapshots.set(requestId, { resolve, reject, timer });
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
      for (const request of this.snapshots.values()) {
        clearTimeout(request.timer);
        request.reject(new Error("Worker is closed"));
      }
      this.snapshots.clear();
    }
  };

/*
Adapted lottery eligibility/parser and DOM selector references from
https://github.com/Almighty-ap/DouyinEX
Pinned commit: 2ad3642899e439c7a24b14eb9ee0f57442de872c
Local changes: abortable per-room automation, confirmation checks, reversible UI,
body-based bounded duplicate filtering and literal keyword rules.

MIT License

Copyright (c) 2026 DouyinEX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
  // src/features/lottery-rules.ts
const COMMENT_BTN_RE =
  /^(?:点击|立即)?(?:发送口令|一键发送|一键评论|发表评论|发送评论|评论参与|评论并参与|一键评论参与|去发表评论|一键发评论|一键发表评论|发评论参与|发送评论参与|发评论参与福袋|一键发评论参与福袋)(?:并参与|参与福袋|参与抽奖|参与)?(?:[（(](?:自动发送|自动评论|发送口令)[）)])?[>›»]?$/;

const DIRECT_JOIN_BTN_RE =
  /^(?:手动参与|立即参与|参与福袋|参与抽奖|一键参与|立即抽奖|免费参与|抢福袋|报名)$/;

const FOLLOW_BTN_RE =
  /^(?:关注|去关注|关注主播|关注参与|关注并参与|立即关注)(?:参与福袋|参与)?$/;

const JOINED_BTN_RE = /^(?:已参与|已成功参与|等待开奖|参与成功|报名成功)$/;

const PAID_BTN_RE = /粉丝团|灯牌|钻石|钻|抖币|付费|充值|升级|亲密度/;

function compact(text) {
  return String(text || "").replace(/\s+/g, "").trim();
}

/** 解析倒计时文本（MM:SS 或 HH:MM:SS）为秒数，无效返回 null */
function parseCountdownSeconds(text) {
  if (!text) return null;
  const s = String(text).trim();
  if (!s || s.includes("--:--")) return null;
  const m = s.match(/(?:(\d{1,2}):)?(\d{1,2}):([0-5]\d)/);
  if (!m) return null;
  const hours = m[1] ? parseInt(m[1], 10) : 0;
  const mins = parseInt(m[2], 10);
  const secs = parseInt(m[3], 10);
  if ([hours, mins, secs].some(Number.isNaN) || mins > 59) return null;
  const total = hours * 3600 + mins * 60 + secs;
  return total > 0 && total <= 7200 ? total : null;
}

/** 从评论条件描述中提取口令正文；若仅是泛指指令（如“去发表评论”）则返回空串 */
function extractCommentCommand(text) {
  if (!text) return "";
  const raw = String(text)
    .replace(/\s*(?:未达成|已达成|未完成|已完成)\s*$/, "")
    .trim();
  const quoted = raw.match(/(?:发送|发表|评论|口令)[^\n“「"']{0,8}[“「"']([^”」"'\n]{1,100})[”」"']/);
  if (quoted) return quoted[1].trim();
  const labelled = raw.match(/(?:发送评论|发表评论|发送口令|评论内容|口令|评论)\s*[：:]\s*([^\n]{1,100})/);
  if (labelled) return labelled[1].trim();
  return "";
}

/** 对单条参与条件进行分类与完成态归一 */
function classifyConditionItem(item = {}) {
  const requirement = String(item.requirement || "")
    .replace(/\s*(?:未达成|已达成|未完成|已完成)\s*$/, "")
    .trim();
  const status = String(item.status || "").trim();
  const completed = status === "已达成" || status === "已完成";
  const cleanReq = compact(requirement);

  if (!cleanReq || cleanReq === "参与条件") {
    return { type: "ignore", requirement, status, completed: true, command: "" };
  }
  if (cleanReq === "手动参与") {
    return { type: "manual", requirement, status, completed: true, command: "" };
  }
  // 评论口令本身可能包含“关注”“粉丝团”等文字，因此优先判定是否为评论类条件
  if (/^(?:发送|发表|一键|去发表)?(?:评论|口令)|^发送[“「"':：]/.test(cleanReq)) {
    return {
      type: "comment",
      requirement,
      status,
      completed,
      command: extractCommentCommand(requirement),
    };
  }
  if (/粉丝团|灯牌|钻石|钻|抖币|亲密度|会员/.test(cleanReq)) {
    return { type: "fansclub", requirement, status, completed, command: "" };
  }
  if (/分享|转发/.test(cleanReq)) {
    return { type: "share", requirement, status, completed, command: "" };
  }
  if (/关注/.test(cleanReq)) {
    return { type: "follow", requirement, status, completed, command: "" };
  }
  if (/观看|看播|停留/.test(cleanReq)) {
    return { type: "watch", requirement, status, completed, command: "" };
  }
  return { type: "unknown", requirement, status, completed, command: "" };
}

/** 从弹窗纯文本中兜底提取「条件描述 + 已达成/未达成」列表 */
function parseConditionsFromText(text) {
  if (!text) return [];
  const items = [];
  const re = /([^\n]+?)\s*(未达成|已达成|未完成|已完成)(?=\s|$)/g;
  for (const m of String(text).matchAll(re)) {
    const req = m[1].replace(/^[\s•·\-*]+/, "").trim();
    if (!req || req === "参与条件") continue;
    items.push({ requirement: req, status: m[2] });
  }
  return items;
}

function isCommentJoinButtonText(text) {
  return COMMENT_BTN_RE.test(compact(text));
}

function isDirectJoinButtonText(text) {
  return DIRECT_JOIN_BTN_RE.test(compact(text));
}

function isFollowButtonText(text) {
  return FOLLOW_BTN_RE.test(compact(text));
}

function isPaidButtonText(text) {
  return PAID_BTN_RE.test(compact(text));
}

/**
 * 评估当前福袋弹窗是否可免费代抢及下一步动作：
 * - already_joined: 本轮已参与，关闭弹窗等待开奖
 * - skip: 含未达成付费/分享/未知条件，或需关注但未开启自动关注，本轮跳过
 * - wait_watch: 含未达成看播时长且剩余时间充足，先关弹窗稍后复查
 * - follow_then_join: 需关注主播且已开启自动关注，先点关注再点参与
 * - join_comment: 触发一键发评论参与（只触发官方按钮）
 * - join_direct: 无门槛或条件已全部达成，直接点击参与
 */
function evaluateLotteryEligibility({
  conditions = [],
  alreadyJoined = false,
  buttonText = "",
  allowFollow = false,
  remainingSeconds = null,
} = {}) {
  const cleanBtn = compact(buttonText);

  if (alreadyJoined || JOINED_BTN_RE.test(cleanBtn)) {
    return { action: "already_joined", command: "", reason: "本轮已参与" };
  }

  // 安全闸门：无论条件如何解析，只要主按钮带粉丝团/钻石等付费字样一律跳过
  if (isPaidButtonText(cleanBtn)) {
    return { action: "skip", command: "", reason: "按钮含粉丝团或付费字样" };
  }

  const classified = conditions
    .map(classifyConditionItem)
    .filter((c) => c.type !== "ignore" && c.type !== "manual");

  const blocked = classified.find(
    (c) => !c.completed && (c.type === "fansclub" || c.type === "share" || c.type === "unknown"),
  );
  if (blocked) {
    const label =
      blocked.type === "fansclub"
        ? "需付费粉丝团/灯牌"
        : blocked.type === "share"
          ? "需分享直播间"
          : `含未支持条件（${blocked.requirement}）`;
    return { action: "skip", command: "", reason: label };
  }

  const needsFollow = classified.some((c) => c.type === "follow" && !c.completed);
  if (needsFollow && !allowFollow) {
    return { action: "skip", command: "", reason: "需关注主播（未开启自动关注）" };
  }

  const needsWatch = classified.some((c) => c.type === "watch" && !c.completed);
  if (needsWatch) {
    if (remainingSeconds !== null && remainingSeconds <= 25) {
      return { action: "skip", command: "", reason: "看播时长未达成且临近开奖" };
    }
    const retryDelaySec =
      remainingSeconds !== null ? Math.max(5, Math.min(60, remainingSeconds - 25)) : 30;
    return {
      action: "wait_watch",
      command: "",
      retryDelaySec,
      reason: "等待看播时长达标",
    };
  }

  const commentItem =
    classified.find((c) => c.type === "comment" && !c.completed) ||
    classified.find((c) => c.type === "comment");
  const command = commentItem ? commentItem.command : "";

  if (needsFollow || (classified.length === 0 && isFollowButtonText(cleanBtn))) {
    if (!allowFollow) {
      return { action: "skip", command: "", reason: "需关注主播（未开启自动关注）" };
    }
    return { action: "follow_then_join", command, reason: "先自动关注主播再参与" };
  }

  const needsComment = classified.some((c) => c.type === "comment" && !c.completed);
  if (needsComment || isCommentJoinButtonText(cleanBtn)) {
    return { action: "join_comment", command, reason: "满足发评论参与条件" };
  }

  if (
    (classified.length > 0 && classified.every((c) => c.completed)) ||
    isDirectJoinButtonText(cleanBtn)
  ) {
    return { action: "join_direct", command: "", reason: "无限制或条件已全部达成" };
  }

  return { action: "skip", command: "", reason: "未识别到安全的免费参与入口" };
}

/** 解析开奖结果弹窗文本 */
function parseLotteryResultText(text) {
  const s = String(text || "").trim();
  if (!s) return null;
  if (/恭喜.{0,12}(?:中奖|获得|抽中)|领取奖品|中奖名单|中奖啦/.test(s)) return { status: "won", text: s };
  if (/没抽中|未中奖|没中奖|未抽中|没中|遗憾|下次|未能|空手/.test(s)) {
    return { status: "lost", text: s };
  }
  if (/中奖|恭喜|获得|抽中|幸运|赢得了|领取/.test(s)) {
    return { status: "won", text: s };
  }
  return { status: "unknown", text: s };
}

  // src/features/room-tools.ts
  function normalizedChatText(value) {
    return String(value ?? "").normalize("NFKC").replace(/[\u200b-\u200d\ufeff]/g, "").replace(/\s+/g, " ").trim().toLocaleLowerCase();
  }
  // 去重键：忽略标点/符号/空白，并把连续重复字符压成两个，
  // 这样「666」「66666」「好」「好！」「哈哈哈」「哈哈哈哈」会被当成同一句话。
  function repeatKey(value) {
    return normalizedChatText(value).replace(/[\s\p{P}\p{S}]/gu, "").replace(/(.)\1+/gu, "$1$1");
  }
  var MessageFilter = class {
    values = {};
    signature = "";
    keywords = [];
    seen = new Map();
    configure(values = {}) {
      const signature = JSON.stringify([!!values.hideEnter, !!values.hideRepeat, !!values.filterKeywords, values.blockedKeywords || ""]);
      if (signature === this.signature) return false;
      this.signature = signature;
      this.values = { ...values };
      this.keywords = [...new Set(String(values.blockedKeywords || "").slice(0, 4000).split(/\r?\n/).map(normalizedChatText).filter(Boolean))].slice(0, 100);
      this.reset();
      return true;
    }
    reset() { this.seen.clear(); }
    accept(message, now = Date.now()) {
      if (this.values.hideEnter && message.isEnter) return false;
      const text = normalizedChatText(message.plainText);
      if (!text) return true;
      if (this.values.filterKeywords && this.keywords.some((word) => text.includes(word))) return false;
      if (!this.values.hideRepeat || message.isEnter) return true;
      for (const [key, time] of this.seen) {
        if (now - time < 10000 && now >= time) break;
        this.seen.delete(key);
      }
      const key = repeatKey(message.plainText);
      if (!key) return true;
      if (this.seen.has(key)) return false;
      if (this.seen.size >= 1000) this.seen.delete(this.seen.keys().next().value);
      this.seen.set(key, now);
      return true;
    }
  };

  var CHAT_CONTENT_ROWS = ".webcast-chatroom___item,.webcast-chatroom__room-message";
  var CONTENT_HIDDEN_CLASS = "douyin-ex-content-hidden";
  var ChatContentFilter = class {
    filter = new MessageFilter();
    handled = new WeakMap();
    target = null;
    timer = 0;
    frame = 0;
    pending = new Set();
    style = null;
    observer = null;
    roomId = "";
    configure(values, roomId = this.roomId) {
      const changed = this.filter.configure(values);
      if (changed || roomId !== this.roomId) {
        this.roomId = roomId;
        this.filter.reset();
        this.handled = new WeakMap();
        this.restore();
        if (this.timer) { this.scan(); this.rescan(); }
      }
      return changed;
    }
    enabled() { const v = this.filter.values; return v.hideEnter || v.hideRepeat || (v.filterKeywords && this.filter.keywords.length); }
    start() {
      if (this.timer) return;
      this.style = document.createElement("style");
      // 折叠被屏蔽的行，不要在聊天列表里留下整片空白（与 2026.11.12.04 及更早版本一致）。
      this.style.textContent = `#chatroom .${CONTENT_HIDDEN_CLASS}{display:none!important}`;
      (document.head ?? document.documentElement).append(this.style);
      this.observer = new MutationObserver((records) => {
        if (!this.enabled()) return;
        for (const mutation of records) {
          const parent = mutation.target.nodeType === 1 ? mutation.target : mutation.target.parentElement;
          const row = parent?.closest?.(CHAT_CONTENT_ROWS);
          if (row) this.pending.add(row);
          for (const added of mutation.addedNodes || []) {
            if (added.nodeType !== 1) continue;
            if (added.matches(CHAT_CONTENT_ROWS)) this.pending.add(added);
            for (const child of added.querySelectorAll(CHAT_CONTENT_ROWS)) this.pending.add(child);
          }
        }
        if (this.pending.size && !this.frame) this.frame = requestAnimationFrame(() => {
          this.frame = 0;
          for (const row of this.pending) if (row.isConnected) this.apply(row);
          this.pending.clear();
        });
      });
      this.timer = setInterval(() => this.scan(), 1000);
      this.scan();
    }
    read(row) {
      const body = row.querySelector(".webcast-chatroom___content-with-emoji-text,[data-e2e='chat-message-text']");
      const raw = (row.textContent || "").trim();
      const plainText = body ? body.textContent : raw.replace(/^[^：:\n]{1,60}[：:]\s*/, "");
      const hasBody = !!body || /[：:]/.test(raw);
      const isEnter = /^(?:enter|member|WebcastMemberMessage)$/i.test(row.getAttribute("data-message-type") || "") || (!hasBody && /(?:来了[!！。]?|进入(?:了)?直播间[!！。]?)$/.test(raw));
      return { plainText, isEnter, identity: `${row.getAttribute("data-message-id") || row.getAttribute("data-id") || ""}\0${raw}\0${isEnter}` };
    }
    apply(row) {
      const message = this.read(row);
      if (this.handled.get(row) === message.identity) return;
      this.handled.set(row, message.identity);
      row.classList.toggle(CONTENT_HIDDEN_CLASS, this.enabled() && !this.filter.accept(message));
    }
    scan() {
      const chat = document.getElementById("chatroom");
      if (chat === this.target) return;
      this.observer?.disconnect();
      this.target = chat;
      if (!chat) return;
      this.handled = new WeakMap();
      this.filter.reset();
      for (const row of chat.querySelectorAll(CHAT_CONTENT_ROWS)) this.apply(row);
      this.observer?.observe(chat, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["data-message-id", "data-id", "data-message-type"] });
    }
    rescan() {
      this.handled = new WeakMap();
      this.filter.reset();
      for (const row of this.target?.querySelectorAll(CHAT_CONTENT_ROWS) ?? []) this.apply(row);
    }
    restore() {
      for (const row of document.querySelectorAll(`.${CONTENT_HIDDEN_CLASS}`)) row.classList.remove(CONTENT_HIDDEN_CLASS);
    }
    dispose() {
      clearInterval(this.timer); this.timer = 0;
      cancelAnimationFrame(this.frame); this.frame = 0;
      this.observer?.disconnect(); this.observer = null;
      this.pending.clear(); this.target = null;
      this.restore(); this.style?.remove(); this.style = null;
      this.handled = new WeakMap(); this.filter.reset();
    }
  };

  // Scoped CSS is reversible and also covers nodes mounted after activation.
  var SIMPLE_ROOM_CSS = `[data-e2e="exhibition-banner"],[data-e2e="yellowCart-container"],[data-e2e="hour-rank-entrance"],.douyin-player [data-e2e*="cart" i],#GiftTrayLayout,#GiftEffectLayout,.GiftTrayPlugin,.GiftEffectPlugin{display:none!important}`;
  var SimpleRoomMode = class {
    style = null;
    configure(enabled) {
      if (!enabled) { this.style?.remove(); this.style = null; return; }
      if (this.style?.isConnected) return;
      this.style = document.createElement("style");
      this.style.id = "douyin-ex-simple-mode";
      this.style.textContent = SIMPLE_ROOM_CSS;
      (document.head ?? document.documentElement).append(this.style);
    }
    dispose() { this.configure(false); }
  };

  // DOM selectors adapted from Almighty-ap/DouyinEX (see bundled MIT notice).
  var LOTTERY_SELECTORS = {
    entry: '#ShortTouchLayout .dVxrjT_h,#ShortTouchLayout .LMUtLyr9,.ShortTouchContainer [aria-label*="福袋"],[aria-label="福袋"],img[alt="福袋"]',
    dialog: '#short_touch_land_lottery_land_userMain,[data-short-touch-landing="short_touch_land_lottery_land_userMain"],#lottery_close_cotainer',
    result: '#short_touch_land_lottery_land_result,[data-short-touch-landing="short_touch_land_lottery_land_result"],.lotteryDialog',
    condition: '.aMOCkQGL,[class*="aMOCkQGL"],.oojA302O,[data-lottery-condition]',
    status: '.q6Dj7eFU,[class*="q6Dj7eFU"],[data-condition-status]',
    button: '.QOARtY3v,[role="button"],button',
    timer: '.ycjwPFJI,.VWPnhGkt,.qR53KhLu,[data-lottery-countdown]'
  };
  function lotteryVisible(node) {
    if (!node?.isConnected) return false;
    const style = getComputedStyle(node);
    if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") return false;
    const rect = node.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }
  function lotteryQuery(selector, root = document) {
    return [...(root?.querySelectorAll(selector) || [])].find(lotteryVisible) || null;
  }
  function lotteryClick(node) {
    if (!lotteryVisible(node) || node.disabled || node.getAttribute("aria-disabled") === "true") return false;
    for (const type of ["pointerdown", "mousedown", "pointerup", "mouseup"]) {
      try { node.dispatchEvent(new (type.startsWith("pointer") ? PointerEvent : MouseEvent)(type, { bubbles: true, cancelable: true, view: window })); } catch {}
    }
    node.click();
    return true;
  }
  var LotteryPage = class {
    dialog() { return lotteryQuery(LOTTERY_SELECTORS.dialog); }
    entry() { return lotteryQuery(LOTTERY_SELECTORS.entry); }
    countdown(root) {
      const timer = lotteryQuery(LOTTERY_SELECTORS.timer, root);
      return parseCountdownSeconds(timer?.textContent || root?.textContent);
    }
    read(dialog, allowFollow) {
      const conditions = [], seen = new Set();
      for (const row of dialog.querySelectorAll(LOTTERY_SELECTORS.condition)) {
        if (!lotteryVisible(row)) continue;
        // A sibling status only belongs to this condition when its container has
        // exactly one requirement. Never borrow another condition's completed state.
        const parent = row.parentElement;
        const statusNode = row.querySelector(LOTTERY_SELECTORS.status) || (parent?.querySelectorAll(LOTTERY_SELECTORS.condition).length === 1 ? parent.querySelector(LOTTERY_SELECTORS.status) : null);
        const status = statusNode?.textContent.trim() || row.textContent.match(/未达成|已达成|未完成|已完成/)?.[0] || "";
        const requirement = row.textContent.replace(status, "").trim();
        const key = requirement + "|" + status;
        if (requirement && !seen.has(key)) { seen.add(key); conditions.push({ requirement, status }); }
      }
      if (!conditions.length) conditions.push(...parseConditionsFromText(dialog.innerText || dialog.textContent));
      const buttons = [...dialog.querySelectorAll(LOTTERY_SELECTORS.button)].filter(lotteryVisible);
      const button = buttons.find((node) => node.classList.contains("QOARtY3v")) || buttons.find((node) => /^(已参与|已成功参与|等待开奖)$/.test(node.textContent.trim()) || isCommentJoinButtonText(node.textContent) || isDirectJoinButtonText(node.textContent) || isFollowButtonText(node.textContent) || isPaidButtonText(node.textContent));
      const joined = [...dialog.querySelectorAll(".UU67CvI1,button,span,div")].some((node) => lotteryVisible(node) && /^(已参与|已成功参与|等待开奖|参与成功)$/.test(node.textContent.trim()));
      if (!conditions.length && /参与条件/.test(dialog.textContent) && !/手动参与|无门槛|无需条件/.test(dialog.textContent)) conditions.push({ requirement: "尚未识别完整参与条件", status: "未达成" });
      const remainingSeconds = this.countdown(dialog);
      return { button, buttons, remainingSeconds, decision: evaluateLotteryEligibility({ conditions, alreadyJoined: joined, buttonText: button?.textContent || "", allowFollow, remainingSeconds }) };
    }
    close(dialog) {
      const close = lotteryQuery('.hJ3SHYaQ,[aria-label="关闭"],[data-lottery-close]', dialog) || [...dialog.querySelectorAll("button,[role=button]")].find((node) => lotteryVisible(node) && /^(关闭|×|✕|知道了)$/.test(node.textContent.trim()));
      return close ? lotteryClick(close) : false;
    }
    result() {
      const dialog = lotteryQuery(LOTTERY_SELECTORS.result);
      return dialog ? { dialog, parsed: parseLotteryResultText(dialog.innerText || dialog.textContent) } : null;
    }
  };
  var FreeLottery = class {
    constructor(onStatus = () => {}, page = new LotteryPage()) { this.onStatus = onStatus; this.page = page; }
    signature = "";
    roomId = "";
    enabled = false;
    allowFollow = false;
    timer = 0;
    abort = new AbortController();
    busy = false;
    cooldownUntil = 0;
    configure(values = {}, roomId = "") {
      const signature = JSON.stringify([!!values.autoLottery, !!values.autoLotteryFollow, roomId]);
      if (this.signature === signature) return;
      this.stop(); this.signature = signature;
      this.roomId = roomId; this.enabled = !!values.autoLottery; this.allowFollow = !!values.autoLotteryFollow;
      this.onStatus(this.enabled ? "免费福袋：等待本直播间福袋" : "免费福袋：未开启");
      if (this.enabled && roomId) this.schedule(300);
    }
    valid(signal) {
      const urlRoom = /^\/(\d+)/.exec(location.pathname)?.[1];
      return !signal.aborted && this.enabled && !document.hidden && urlRoom === this.roomId;
    }
    schedule(delay = 3000) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => { this.timer = 0; void this.tick(); }, delay);
    }
    async tick() {
      const signal = this.abort.signal;
      if (this.busy || signal.aborted || !this.enabled) return;
      this.busy = true;
      let ownedDialog = null;
      try {
        if (!this.valid(signal)) return;
        const result = this.page.result();
        if (result) {
          if (result.parsed?.status === "won") this.onStatus("福袋中奖：请查看领奖弹窗");
          else if (result.parsed?.status === "lost") { this.page.close(result.dialog); this.onStatus("本轮未中奖，等待下一轮福袋"); }
          return;
        }
        if (Date.now() < this.cooldownUntil) return;
        let dialog = this.page.dialog();
        let seconds = dialog ? this.page.countdown(dialog) : null;
        if (!dialog) {
          const entry = this.page.entry();
          if (!entry) return;
          seconds = this.page.countdown(entry) ?? this.page.countdown(entry.parentElement);
          if (seconds === null || !this.valid(signal) || !lotteryClick(entry)) return;
          dialog = await waitFor(() => this.page.dialog(), 3500, 150, signal);
          if (!this.valid(signal) || !dialog) return;
          ownedDialog = dialog;
          if (!await sleep(250, signal) || !this.valid(signal)) return;
        }
        let followed = false;
        for (let step = 0; step < 2 && this.valid(signal); step++) {
          // Always re-read after an asynchronous boundary or following the host.
          dialog = this.page.dialog();
          if (!dialog) { this.onStatus("福袋弹窗已变化，等待下一轮检查"); return; }
          const state = this.page.read(dialog, this.allowFollow);
          seconds = state.remainingSeconds ?? seconds;
          const decision = state.decision;
          if (decision.action === "follow_then_join" && followed) { this.onStatus("免费福袋：已点击关注，等待状态更新"); return; }
          if (decision.action === "wait_watch") {
            this.cooldownUntil = Date.now() + decision.retryDelaySec * 1000;
            this.onStatus("免费福袋：等待看播时长达标"); return;
          }
          this.cooldownUntil = Date.now() + ((seconds ?? 60) + 2) * 1000;
          if (decision.action === "skip" || decision.action === "already_joined") { this.onStatus(`免费福袋：${decision.reason}`); return; }
          const predicate = decision.action === "follow_then_join" ? isFollowButtonText : decision.action === "join_comment" ? isCommentJoinButtonText : isDirectJoinButtonText;
          const button = state.buttons.find((node) => predicate(node.textContent));
          if (!button || isPaidButtonText(button.textContent) || !this.valid(signal) || !lotteryClick(button)) {
            this.cooldownUntil = Date.now() + 10000;
            this.onStatus("免费福袋：等待可用的免费参与按钮"); return;
          }
          if (decision.action === "follow_then_join") followed = true;
          if (!await sleep(650, signal) || !this.valid(signal)) return;
          if (decision.action === "follow_then_join") continue;
          const after = this.page.dialog();
          const confirmed = after && this.page.read(after, this.allowFollow).decision.action === "already_joined";
          this.onStatus(confirmed ? "免费福袋：已确认参与，等待开奖" : "免费福袋：已点击参与，尚未确认结果");
          return;
        }
      } catch {
        if (!signal.aborted) { this.cooldownUntil = Date.now() + 10000; this.onStatus("免费福袋：页面暂不可用，稍后重试"); }
      } finally {
        if (!signal.aborted) {
          if (ownedDialog && this.valid(signal) && ownedDialog === this.page.dialog()) this.page.close(ownedDialog);
          this.busy = false;
          if (this.enabled) this.schedule();
        }
      }
    }
    stop() {
      this.abort.abort(); this.abort = new AbortController();
      clearTimeout(this.timer); this.timer = 0; this.busy = false; this.cooldownUntil = 0;
    }
    dispose() { this.stop(); this.enabled = false; this.signature = ""; }
  };
  var RoomEnhancements = class {
    constructor(onStatus = () => {}) { this.lottery = new FreeLottery(onStatus); }
    content = new ChatContentFilter();
    simple = new SimpleRoomMode();
    roomId = "";
    values = {};
    configure(values, roomId = this.roomId) {
      this.values = values; this.roomId = roomId;
      this.content.configure(values, roomId);
      this.simple.configure(!!values.simpleMode);
      this.lottery.configure(values, roomId);
    }
    attach(roomId) { if (roomId !== this.roomId) this.configure(this.values, roomId); }
    start(values, roomId) { this.configure(values, roomId); this.content.start(); }
    dispose() { this.content.dispose(); this.simple.dispose(); this.lottery.dispose(); }
  };

  // src/ui/overlay.ts
  var MENU_WIDTH = 232;
  var CSS = `
:host{position:absolute;inset:0;display:block;pointer-events:none;z-index:9;color:#fff;font:13px Arial,"Microsoft YaHei",sans-serif;line-height:1.5}
*{box-sizing:border-box}canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
[hidden]{display:none!important}button{font:inherit;cursor:pointer;border:1px solid #ffffff25;color:#fff;border-radius:6px;padding:5px 13px;background:#ffffff12}
button:hover{background:#ffffff28}button:disabled{opacity:.4;cursor:default}button:focus-visible{outline:2px solid #a7f36b;outline-offset:2px}
.menu{position:absolute;pointer-events:auto;max-width:300px;padding:0;border:0;background:none;display:flex;align-items:center;gap:8px}
.author{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.actions{display:flex;align-items:center;gap:8px}
.actions button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;height:30px;padding:0 14px;border:1px solid #ffffff2e;border-radius:9px;background:rgba(10,11,15,.84);color:#fff;font-size:13px;font-weight:500;line-height:1;box-shadow:0 3px 12px rgba(0,0,0,.45);backdrop-filter:blur(6px)}
.actions button:hover{background:rgba(30,32,40,.94);border-color:#ff8a3570;color:#ff8a35}
.actions button:active{transform:translateY(1px)}
.actions button:disabled{opacity:.45}
.actions button:focus-visible{outline:2px solid #ff8a35;outline-offset:2px}
.reply-icon{width:18px;height:18px;flex:none;pointer-events:none}.highlight{position:absolute;border:0;border-radius:2px;background:#00000012;pointer-events:none}
.panel{position:fixed;left:0;top:0;z-index:2147483000;width:300px;max-width:calc(100vw - 24px);max-height:calc(100vh - 24px);overflow:auto;box-sizing:border-box;pointer-events:auto;background:#171a20;border:1px solid #525a66;border-radius:10px;padding:14px;box-shadow:0 5px 20px #0005}
.panel strong{font-size:14px}.panel p{color:#c0c7d0;margin:8px 0;overflow-wrap:anywhere}.panel small{color:#9ca6b4;display:block;margin:10px 0}
.options{display:flex;flex-direction:column;gap:7px;margin:10px 0}
.options .keyword-group{display:flex;flex-direction:column;align-items:stretch;gap:6px}
.keyword-rules{display:block;width:100%;box-sizing:border-box;min-height:64px;max-height:150px;resize:vertical;background:#101318;color:#eee;border:1px solid #657080;border-radius:5px;padding:7px;font:12px/1.5 sans-serif}
.lottery-status{font-size:12px;color:#b8dfce;line-height:1.5;overflow-wrap:anywhere}
.options input{accent-color:#6bcebd}
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
  var PANEL_THEME = ".panel{width:296px;padding:18px;border:1px solid #ffffff18;border-radius:16px;background:rgba(20,24,31,.97);box-shadow:0 18px 55px #0007;color:#e7ebf0;scrollbar-width:thin;scrollbar-color:#454d59 transparent;backdrop-filter:blur(16px)}\n.panel strong{display:block;font-size:16px;letter-spacing:.5px;color:#f5f7fa;font-weight:650}\n.panel>p:not(.lottery-status){font-size:11px;color:#8e99a8;margin:4px 0 13px}\n.panel .options{gap:0;margin:0}\n.panel .options label{min-height:39px;gap:10px;color:#dbe1e9;font-size:13px;transition:color .15s}\n.panel .options label:hover{color:#fff}\n.panel .options label+label{border-top:1px solid #ffffff08}\n.panel .options input[type=checkbox]{appearance:none;-webkit-appearance:none;position:relative;flex:none;width:30px;height:18px;margin:0 0 0 auto;order:2;border:1px solid #ffffff15;border-radius:20px;background:#38414e;cursor:pointer;transition:background .15s}\n.panel .options input[type=checkbox]::after{content:\"\";position:absolute;top:2px;left:2px;width:12px;height:12px;border-radius:50%;background:#bdc5ce;transition:transform .15s,background .15s}\n.panel .options input[type=checkbox]:checked{background:#69cbb4;border-color:#69cbb4}\n.panel .options input[type=checkbox]:checked::after{transform:translateX(12px);background:#102b25}\n.panel .options input:disabled{opacity:.35;cursor:default}\n.panel input:focus-visible,.panel textarea:focus-visible,.panel summary:focus-visible,.panel button:focus-visible{outline:2px solid #88dcc7;outline-offset:3px}\n.panel .keyword-group{display:flex;flex-direction:column;gap:8px;margin:9px 0 12px;padding:12px;background:#ffffff05;border:1px solid #ffffff0c;border-radius:10px}\n.panel .keyword-group label{color:#8e99a8;font-size:11px}\n.panel .keyword-rules{min-height:68px;max-height:130px;border-color:#ffffff1b;background:#0e1219;padding:8px;border-radius:7px;font-size:12px}\n.panel .keyword-group button{align-self:flex-end;padding:4px 10px;font-size:11px;background:#293f3a;color:#a9e3d4;border-color:#69cbb430}\n.panel .lottery-status{font-size:11px;color:#9ccdbf;margin:9px 0 13px;padding:8px 10px;background:#69cbb40a;border-radius:7px;line-height:1.6}\n.panel .advanced{border-top:1px solid #ffffff10;margin-top:12px;padding-top:9px}\n.panel .advanced summary{font-size:12px;color:#939fad;cursor:pointer;list-style:none;padding:5px 0;display:flex;align-items:center;justify-content:space-between}\n.panel .advanced summary::-webkit-details-marker{display:none}\n.panel .advanced summary::after{content:\"＋\";font-size:14px;color:#657181}\n.panel .advanced[open] summary::after{content:\"−\"}\n.panel .advanced .options label{font-size:12px;min-height:35px}\n.panel .advanced p,.panel .advanced small{font-size:11px;color:#7e8b9b;line-height:1.6}\n.panel footer{margin-top:12px;gap:8px}\n.panel footer button{border-radius:8px;font-size:12px;padding:7px 12px;background:#ffffff06;border-color:#ffffff12}\n.panel footer button:first-child{flex:1;background:#293d38;border-color:#69cbb426;color:#b6eadc}\n.panel footer button:hover{background:#ffffff12}\n.fab{border-color:#ffffff20;border-radius:9px;background:#151a22e8;color:#dce4ec}\n.fab:hover,.fab[aria-expanded=true]{color:#abe4d5;border-color:#69cbb45c;background:#1c2928f2}\n@media(prefers-reduced-motion:reduce){.panel .options label,.panel input,.panel input::after{transition:none!important}}\n";
  var OverlayUI = class {
    constructor(player) {
      this.player = player;
      this.host.id = "douyin-ex-overlay";
      this.shadow = this.host.attachShadow({ mode: "open" });
      const style = element("style");
      style.textContent = CSS + PANEL_THEME;
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
      this.featureInputs = {};
      const primary = element("div", "options primary-options");
      this.advanced.append(element("summary", "", "更多设置"), preferences, this.metrics, this.hint);
      for (const [key, title] of [["simpleMode", "简洁模式"], ["hideEnter", "屏蔽进场消息"], ["hideRepeat", "过滤重复弹幕"], ["filterKeywords", "自定义屏蔽词"], ["autoLottery", "自动免费福袋"], ["autoLotteryFollow", "允许福袋自动关注"]]) {
        const input = element("input"), label = element("label");
        input.type = "checkbox"; input.dataset.preference = key;
        label.append(input, document.createTextNode(title));
        (key === "autoLotteryFollow" ? preferences : primary).append(label); this.featureInputs[key] = input;
        if (key === "hideRepeat") label.title = "同一句话在 10 秒内只显示一次（666/6666、哈哈哈/哈哈 这类变体也算重复）";
        if (key === "autoLottery") label.title = "包含官方一键评论参与；跳过未满足的付费条件，中奖弹窗保留";
      }
      const keywordLabel = element("label", "", "每行一个词，包含即屏蔽");
      keywordLabel.htmlFor = "douyin-ex-keywords";
      this.keywordInput.id = "douyin-ex-keywords";
      this.keywordInput.className = "keyword-rules";
      this.keywordInput.maxLength = 4000;
      this.keywordInput.setAttribute("aria-label", "屏蔽关键词，每行一条");
      this.keywordInput.placeholder = "每行一条，最多 100 条 / 4000 字符";
      this.saveKeywords.type = "button";
      this.keywordGroup.append(keywordLabel, this.keywordInput, this.saveKeywords);
      this.panel.append(element("strong", "", "直播工具"), this.status, primary, this.keywordGroup, this.lotteryStatus, this.advanced);
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
      floatingStyle.textContent = CSS + PANEL_THEME;
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
      for (const [key, input] of Object.entries(this.featureInputs)) input.addEventListener("change", () => this.onPreferenceChange(key, input.checked), { signal });
      this.advanced.addEventListener("toggle", () => this.positionFloating(), { signal });
      this.saveKeywords.addEventListener("click", () => {
        this.onPreferenceChange("blockedKeywords", this.keywordInput.value);
        this.message("关键词已保存；开启关键词过滤后生效");
      }, { signal });
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
    hint = element("small", "", "\u60AC\u505C\u53EA\u6682\u505C\u8FD9\u4E00\u6761\u5F39\u5E55\uFF0C\u540C\u8F68\u9053\u5176\u4F59\u5F39\u5E55\u7167\u5E38\u6EDA\u52A8\uFF1B\u53EF\u590D\u8BFB\u6216\u5F15\u7528\u56DE\u590D\u3002");
    toggleAction = element("button", "", "\u542F\u7528");
    toast = element("div", "toast");
    autoQuality = element("input");
    shieldGift = element("input");
    hideGiftInput = element("input");
    pkInput = element("input");
    featureInputs = {};
    advanced = element("details", "advanced");
    keywordGroup = element("div", "keyword-group");
    keywordInput = element("textarea");
    savedKeywords;
    saveKeywords = element("button", "", "保存关键词");
    lotteryStatus = element("p", "lottery-status", "免费福袋：未开启");
    setLotteryStatus(text) { this.lotteryStatus.textContent = text; this.positionFloating(); }
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
      for (const [key, input] of Object.entries(this.featureInputs)) input.checked = !!values?.[key];
      this.featureInputs.autoLotteryFollow.disabled = !values?.autoLottery;
      this.keywordGroup.hidden = !values?.filterKeywords;
      this.lotteryStatus.hidden = !values?.autoLottery;
      const keywords = values?.blockedKeywords || "";
      if (this.savedKeywords !== keywords) { this.keywordInput.value = keywords; this.savedKeywords = keywords; }
      this.positionFloating();
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
      this.menu.style.minWidth = "0px";
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
    messageFilter = new MessageFilter();
    layout = { left: 0, top: 0, width: 1, height: 1, dpr: 1 };
    resizeTimer = 0;
    pendingResize = null;
    scheduleResize() {
      this.pendingResize = { width: this.layout.width, height: this.layout.height, dpr: this.layout.dpr };
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.resizeTimer = 0;
        const next = this.pendingResize;
        this.pendingResize = null;
        if (!next || !this.engine) return;
        this.engine.resize(next.width, next.height, next.dpr);
      }, 160);
    }
    cancelResize() {
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = 0;
      this.pendingResize = null;
    }
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
      const width = Math.max(1, Math.round(rect.width)), height = Math.max(1, Math.round(rect.height));
      const changed = this.layout.dpr !== dpr || Math.round(this.layout.width * this.layout.dpr) !== Math.round(width * dpr) || Math.round(this.layout.height * this.layout.dpr) !== Math.round(height * dpr);
      const left = Math.round((rect.x - playerRect.left) * dpr) / dpr, top = Math.round((rect.y - playerRect.top) * dpr) / dpr;
      this.layout = { left: playerRect.left + left, top: playerRect.top + top, width, height, dpr };
      this.ui.setBounds(left, top, width, height);
      if (changed) this.scheduleResize();
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
        this.messageFilter.reset();
        this.unsubscribe = this.live.subscribe((messages) => {
          try {
            if (generation !== this.generation || this.dead) return;
            const values = this.roomPreferences?.read?.() || {};
            this.messageFilter.configure(values);
            const now = Date.now();
            engine.enqueue(messages.filter((message) => (values.hideGiftDanmaku === false || !message.isGift) && this.messageFilter.accept(message, now)));
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
        this.setState("running", "\u589E\u5F3A\u8FD0\u884C\u4E2D \xB7 \u60AC\u505C\u5355\u6761\u5F39\u5E55\u67E5\u770B\u64CD\u4F5C");
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
      this.cancelResize();
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
      isEnter: /^(?:Webcast)?MemberMessage$|^enter$/i.test(String(msg.method || msg.type || msg.message_type || "")),
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
  // 被屏蔽的行直接折叠（display:none），聊天列表不再留出大片空白。
  var GIFT_ROW_CSS = `
#chatroom .webcast-chatroom___item:has(.kKlRF5rO),
#chatroom .webcast-chatroom___item:has(img.OE08lZUF),
#chatroom .webcast-chatroom___item.${GIFT_ROW_CLASS}{display:none!important}`;
  var ChatGiftFilter = class {
    constructor() {
      this.cssSupported = typeof window.CSS?.supports === "function" && window.CSS.supports("selector(:has(*))");
      this.style = document.createElement("style");
      this.style.textContent = GIFT_ROW_CSS;
      (document.head ?? document.documentElement).append(this.style);
      // Observe in every browser: text-only gifts and recycled rows are not
      // covered by :has(), and a gift marker must not leak into a normal row.
      this.observer = new MutationObserver((mutations) => this.onMutations(mutations));
    }
    enabled = true;
    cssSupported = false;
    observer = null;
    target = null;
    timer = 0;
    frame = 0;
    pending = /* @__PURE__ */ new Set();
    handled = /* @__PURE__ */ new WeakMap();
    status = { hidden: 0, scanned: 0 };
    start() {
      if (this.timer) return;
      if (!this.style.isConnected) (document.head ?? document.documentElement).append(this.style);
      this.timer = setInterval(() => this.scan(), 1e3);
      this.scan();
    }
    setEnabled(enabled) {
      this.enabled = !!enabled;
      this.style.disabled = !this.enabled;
      if (!this.enabled) {
        if (this.frame) cancelAnimationFrame(this.frame);
        this.frame = 0;
        this.pending.clear();
        this.restore();
        this.status = { hidden: 0, scanned: this.status.scanned };
        return;
      }
      this.handled = /* @__PURE__ */ new WeakMap();
      this.scan();
    }
    schedule(row) {
      if (!this.enabled) return;
      this.pending.add(row);
      if (this.frame) return;
      this.frame = requestAnimationFrame(() => {
        this.frame = 0;
        for (const pending of this.pending) if (pending.isConnected) this.apply(pending);
        this.pending.clear();
      });
    }
    apply(row) {
      if (!this.enabled) return false;
      const structural = !!row.querySelector(".kKlRF5rO, img.OE08lZUF");
      const text = row.textContent || "";
      const identity = `${structural ? "1" : "0"}\0${text}`;
      if (this.handled.get(row) === identity) return row.classList.contains(GIFT_ROW_CLASS);
      this.handled.set(row, identity);
      const gift = structural || looksLikeGiftText(text);
      row.classList.toggle(GIFT_ROW_CLASS, gift);
      return gift;
    }
    onMutations(mutations) {
      if (!this.enabled) return;
      for (const mutation of mutations) {
        const node = mutation.target;
        const row = node.nodeType === 1 ? node.closest?.(".webcast-chatroom___item") : node.parentElement?.closest?.(".webcast-chatroom___item");
        if (row) this.schedule(row);
        for (const added of mutation.addedNodes) {
          if (added.nodeType !== 1) continue;
          if (added.matches?.(".webcast-chatroom___item")) this.schedule(added);
          else for (const child of added.querySelectorAll?.(".webcast-chatroom___item") ?? []) this.schedule(child);
        }
      }
    }
    scan() {
      const chat = document.getElementById("chatroom");
      if (this.target !== chat) {
        this.observer.disconnect();
        if (this.frame) cancelAnimationFrame(this.frame);
        this.frame = 0;
        this.pending.clear();
        this.target = chat;
        this.handled = /* @__PURE__ */ new WeakMap();
        if (chat) this.observer.observe(chat, { childList: true, subtree: true, characterData: true });
      }
      if (!chat || !this.enabled) {
        this.status = { hidden: 0, scanned: 0 };
        return;
      }
      const list = chat.querySelector(".webcast-chatroom___list") ?? chat;
      const rows = list.querySelectorAll(".webcast-chatroom___item");
      let hidden = 0;
      for (const row of rows) if (this.apply(row)) hidden++;
      this.status = { hidden, scanned: rows.length };
    }
    restore() {
      for (const row of document.querySelectorAll(`.${GIFT_ROW_CLASS}`)) row.classList.remove(GIFT_ROW_CLASS);
      this.handled = /* @__PURE__ */ new WeakMap();
    }
    dispose() {
      clearInterval(this.timer);
      this.timer = 0;
      if (this.frame) cancelAnimationFrame(this.frame);
      this.frame = 0;
      this.pending.clear();
      this.observer.disconnect();
      this.target = null;
      this.restore();
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
      this.timer = 0;
      this.restore();
    }
  };

  // src/adapters/room-preferences.ts
  var PREF_AUTO_QUALITY = "douyin-ex:v1:auto-quality";
  var PREF_SHIELD_GIFT = "douyin-ex:v1:shield-gift";
  var PREF_HIDE_GIFT_DANMAKU = "douyin-ex:v1:hide-gift-danmaku";
  var PREF_PK_NUMBERS = "douyin-ex:v1:pk-numbers";
  var EXTRA_PREFS = { simpleMode: "simple-mode", autoLottery: "auto-lottery", autoLotteryFollow: "auto-lottery-follow", hideEnter: "hide-enter", hideRepeat: "hide-repeat", filterKeywords: "filter-keywords", blockedKeywords: "blocked-keywords" };
  function cleanKeywordRules(value) { return String(value ?? "").slice(0, 4000).split(/\r?\n/).map((line) => line.trim()).filter(Boolean).slice(0, 100).join("\n"); }
  function readKeywordRules() { try { return cleanKeywordRules(localStorage.getItem("douyin-ex:v1:blocked-keywords") || ""); } catch { return ""; } }
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
  function waitForTask(schedule, cancel, signal) {
    if (signal?.aborted) return Promise.resolve(false);
    return new Promise((resolve) => {
      const finish = (completed) => {
        cancel(handle);
        signal?.removeEventListener("abort", aborted);
        resolve(completed);
      };
      const aborted = () => finish(false);
      const handle = schedule(() => finish(true));
      signal?.addEventListener("abort", aborted, { once: true });
    });
  }
  function nextFrame(signal) {
    return waitForTask(requestAnimationFrame, cancelAnimationFrame, signal);
  }
  function sleep(ms, signal) {
    return waitForTask((done) => setTimeout(done, ms), clearTimeout, signal);
  }
  async function waitFor(pick, timeout = 4e3, interval = 120, signal) {
    const deadline = performance.now() + timeout;
    while (!signal?.aborted) {
      const value = pick();
      if (value) return value;
      const remaining = deadline - performance.now();
      if (remaining <= 0) return void 0;
      await sleep(Math.min(interval, remaining), signal);
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
        pkNumbers: readFlag(PREF_PK_NUMBERS, true),
        ...Object.fromEntries(Object.entries(EXTRA_PREFS).filter(([key]) => key !== "blockedKeywords").map(([key, name]) => [key, readFlag("douyin-ex:v1:" + name, false)])),
        blockedKeywords: readKeywordRules()
      };
    }
    roomId = "";
    qualityDone = false;
    shieldDone = false;
    busy = false;
    attempts = 0;
    timer = 0;
    abort = new AbortController();
    qualityTimers = new Set();
    values;
    read() {
      return { ...this.values };
    }
    set(key, value) {
      if (!Object.prototype.hasOwnProperty.call(this.values, key)) return this.read();
      this.values[key] = key === "blockedKeywords" ? cleanKeywordRules(value) : !!value;
      const keyNames = {
        autoQuality: PREF_AUTO_QUALITY,
        shieldGift: PREF_SHIELD_GIFT,
        hideGiftDanmaku: PREF_HIDE_GIFT_DANMAKU,
        pkNumbers: PREF_PK_NUMBERS
      };
      writeFlag(keyNames[key] || "douyin-ex:v1:" + EXTRA_PREFS[key], this.values[key]);
      const affectsRoom = key === "autoQuality" || key === "shieldGift";
      if (affectsRoom) {
        this.cancelPending();
        if (key === "autoQuality") this.qualityDone = false;
        else this.shieldDone = false;
        this.attempts = 0;
        this.watchQuality();
        this.onChange(this.read());
        void this.apply();
      } else this.onChange(this.read());
      return this.read();
    }
    attach(roomId) {
      if (!roomId || this.roomId === roomId) return;
      this.cancelPending();
      this.roomId = roomId;
      this.qualityDone = this.shieldDone = false;
      this.attempts = 0;
      void this.apply();
      this.watchQuality();
    }
    watchQuality() {
      if (!this.roomId || !this.values.autoQuality) return;
      const signal = this.abort.signal;
      for (const delay of [3e3, 6e3, 1e4]) {
        const timer = setTimeout(() => {
          this.qualityTimers.delete(timer);
          if (!signal.aborted) this.checkQuality();
        }, delay);
        this.qualityTimers.add(timer);
      }
    }
    checkQuality() {
      if (!this.roomId || !this.values.autoQuality || this.busy) return;
      const target = highestQuality(qualityOptions());
      if (!target || qualityLabel() === target.label) return;
      this.qualityDone = false;
      void this.apply();
    }
    cancelPending() {
      this.abort.abort();
      this.abort = new AbortController();
      this.busy = false;
      clearTimeout(this.timer);
      this.timer = 0;
      for (const timer of this.qualityTimers) clearTimeout(timer);
      this.qualityTimers.clear();
    }
    detach() {
      this.roomId = "";
      this.cancelPending();
    }
    schedule(delay) {
      clearTimeout(this.timer);
      const signal = this.abort.signal;
      this.timer = setTimeout(() => {
        this.timer = 0;
        if (!signal.aborted) void this.apply();
      }, delay);
    }
    async apply() {
      if (!this.roomId || document.hidden || this.busy) return;
      if ((this.qualityDone || !this.values.autoQuality) && (this.shieldDone || !this.values.shieldGift)) return;
      const signal = this.abort.signal;
      this.busy = true;
      try {
        if (!this.qualityDone && this.values.autoQuality) {
          const ready = await this.ensureQuality(signal);
          if (signal.aborted) return;
          this.qualityDone = ready;
        }
        if (!this.shieldDone && this.values.shieldGift) {
          const ready = await this.ensureShield(signal);
          if (signal.aborted) return;
          this.shieldDone = ready;
        }
      } catch (error) {
        void 0 && console.warn("[douyin-ex] \u76F4\u64AD\u95F4\u8BBE\u7F6E\u5E94\u7528\u5931\u8D25:", error instanceof Error ? error.message : error);
      } finally {
        if (!signal.aborted) this.busy = false;
      }
      if (signal.aborted) return;
      const qualityReady = this.qualityDone || !this.values.autoQuality;
      const shieldReady = this.shieldDone || !this.values.shieldGift;
      if (!qualityReady || !shieldReady) {
        if (++this.attempts < 20) this.schedule(500 + this.attempts * 250);
      }
    }
    async ensureQuality(signal = this.abort.signal) {
      const options = await waitFor(() => {
        const available = qualityOptions();
        return available.length ? available : void 0;
      }, 4e3, 120, signal);
      if (signal.aborted || !options) return false;
      const target = highestQuality(options);
      if (!target) return false;
      const label = qualityLabel();
      if (label === target.label) return true;
      if (!label) return false;
      pointerClick(target.box);
      if (!await nextFrame(signal)) return false;
      const settled = await waitFor(() => qualityLabel() === target.label ? true : void 0, 2500, 150, signal);
      return !signal.aborted && settled === true;
    }
    async ensureShield(signal = this.abort.signal) {
      const icon = await waitFor(() => document.querySelector('[data-e2e="gift-setting"]'), 4e3, 120, signal);
      if (signal.aborted || !icon) return false;
      let hovered = false;
      const closeMenu = () => {
        if (!hovered) return;
        hovered = false;
        if (icon.isConnected !== false) pointerHover(icon, false);
      };
      signal.addEventListener("abort", closeMenu, { once: true });
      try {
        let toggle = shieldSwitch();
        if (!toggle) {
          hovered = true;
          pointerHover(icon, true);
          toggle = await waitFor(shieldSwitch, 2500, 120, signal);
        }
        if (signal.aborted || !toggle) return false;
        const state = shieldEnabled(toggle);
        if (state === null) return false;
        if (!state) {
          pointerClick(toggle.firstElementChild ?? toggle);
          if (!await nextFrame(signal)) return false;
          await waitFor(() => shieldEnabled(shieldSwitch()) === true, 1500, 120, signal);
        }
        return !signal.aborted && shieldEnabled(shieldSwitch()) === true;
      } finally {
        signal.removeEventListener("abort", closeMenu);
        closeMenu();
      }
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
    let lotteryStatus = "免费福袋：未开启";
    const enhancements = new RoomEnhancements((text) => { lotteryStatus = text; app?.ui.setLotteryStatus(text); });
    const preferences = new RoomPreferences((values) => {
      chatFilter.setEnabled(values.hideGiftDanmaku !== false);
      pkNumbers.setEnabled(values.pkNumbers !== false);
      enhancements.configure(values, roomIdFromUrl());
      app?.ui.setPreferences(values);
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
        else if (!roomId && preferences.roomId) preferences.detach();
        enhancements.attach(roomId);
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
        enhancements.attach(roomIdFromUrl());
        app.ui.setLotteryStatus(lotteryStatus);
        app.onInvalid = () => {
          const stale = app;
          app = void 0;
          stale?.dispose();
          preferences.detach();
          enhancements.dispose();
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
      enhancements.start(preferences.read(), roomIdFromUrl());
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
    Object.defineProperty(window, KEY, { configurable: true, value: "2026.11.13.11" });
    window.addEventListener("pagehide", () => {
      stopProbe();
      clearInterval(roomWatch);
      chatFilter.dispose();
      pkNumbers.dispose();
      enhancements.dispose();
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
