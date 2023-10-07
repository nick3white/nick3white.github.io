import{j as f,_ as re,a as ie,F as S,s as ae,c as Y,i as H,u as le,b as ce,d as v,e as g,f as de,g as k,h as me,R as fe,S as ue,Q as pe}from"./assets/@qwik-city-plan-bb5fc765.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.13
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var be=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function ge(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:o=>{var a;if(t){const i=z(o),l=t[i];if(!l){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(i))return[o,"_"];console.error("Cannot resolve symbol",o,"in",t)}return l}};return{isServer:!0,async importSymbol(o,a,i){var w;const l=z(i),c=(w=globalThis.__qwik_reg_symbols)==null?void 0:w.get(l);if(c)return c;let m=String(a);m.endsWith(".js")||(m+=".js");const q=be(m);if(!(i in q))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${m}'.`);return q[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(a=>{setTimeout(()=>{a(o())})}),chunkForSymbol(o){return s(o,t)}}}async function ye(e,n){const t=ge(e,n);ae(t)}var z=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function j(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function V(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var he=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ve=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,we=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,qe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function xe(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?qe:we).replace("window.qEvents",JSON.stringify(e.events)):e.debug?ve:he}function _e(e,n,t){if(!t)return[];const s=n.prefetchStrategy,r=V(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return ke(e,t,r);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}}return[]}function ke(e,n,t){const s=[],r=e==null?void 0:e.qrls,{mapper:o,manifest:a}=n,i=new Map;if(Array.isArray(r))for(const l of r){const c=l.getHash(),m=o[c];m&&Z(a,i,s,t,m[1])}return s}function Z(e,n,t,s,r){const o=s+r;let a=n.get(o);if(!a){a={url:o,imports:[]},n.set(o,a);const i=e.bundles[r];if(i&&Array.isArray(i.imports))for(const l of i.imports)Z(e,n,a.imports,s,l)}t.push(a)}function je(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function E(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function ze(e){const n={bundles:x(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function x(e){const n=[],t=s=>{if(Array.isArray(s))for(const r of s)n.includes(r.url)||(n.push(r.url),t(r.imports))};return t(e),n}function Ee(e){const n=new Map;let t=0;const s=(i,l)=>{if(Array.isArray(i))for(const c of i){const m=n.get(c.url)||0;n.set(c.url,m+1),t++,l.has(c.url)||(l.add(c.url),s(c.imports,l))}},r=new Set;for(const i of e)r.clear(),s(i.imports,r);const o=t/n.size*2,a=Array.from(n.entries());return a.sort((i,l)=>l[1]-i[1]),a.slice(0,5).filter(i=>i[1]>o).map(i=>i[0])}function Se(e,n,t){const s=Le(e==null?void 0:e.implementation),r=[];return s.prefetchEvent==="always"&&Ne(r,n,t),s.linkInsert==="html-append"&&Ce(r,n,s),s.linkInsert==="js-append"?Ie(r,n,s,t):s.workerFetchInsert==="always"&&Ae(r,n,t),r.length>0?f(S,{children:r}):null}function Ne(e,n,t){const s=Ee(n);for(const r of s)e.push(f("link",{rel:"modulepreload",href:r,nonce:t}));e.push(f("script",{dangerouslySetInnerHTML:ze(n),nonce:t}))}function Ce(e,n,t){const s=x(n),r=t.linkRel||"prefetch";for(const o of s){const a={};a.href=o,a.rel=r,(r==="prefetch"||r==="preload")&&o.endsWith(".js")&&(a.as="script"),e.push(f("link",a,void 0))}}function Ie(e,n,t,s){const r=t.linkRel||"prefetch";let o="";t.workerFetchInsert==="no-link-support"&&(o+="let supportsLinkRel = true;"),o+=`const u=${JSON.stringify(x(n))};`,o+="u.map((u,i)=>{",o+="const l=document.createElement('link');",o+='l.setAttribute("href",u);',o+=`l.setAttribute("rel","${r}");`,t.workerFetchInsert==="no-link-support"&&(o+="if(i===0){",o+="try{",o+=`supportsLinkRel=l.relList.supports("${r}");`,o+="}catch(e){}",o+="}"),o+="document.body.appendChild(l);",o+="});",t.workerFetchInsert==="no-link-support"&&(o+="if(!supportsLinkRel){",o+=E(),o+="}"),t.workerFetchInsert==="always"&&(o+=E()),e.push(f("script",{type:"module",dangerouslySetInnerHTML:o,nonce:s}))}function Ae(e,n,t){let s=`const u=${JSON.stringify(x(n))};`;s+=E(),e.push(f("script",{type:"module",dangerouslySetInnerHTML:s,nonce:t}))}function Le(e){return e&&typeof e=="object"?e:Re}var Re={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Te="<!DOCTYPE html>";async function Fe(e,n){var T;let t=n.stream,s=0,r=0,o=0,a=0,i="",l;const c=((T=n.streaming)==null?void 0:T.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=n.containerTagName??"html",q=n.containerAttributes??{},w=t,X=j(),G=V(n),u=Pe(n.manifest);function N(){i&&(w.write(i),i="",s=0,o++,o===1&&(a=X()))}function C(d){const p=d.length;s+=p,r+=p,i+=d}switch(c.strategy){case"disabled":t={write:C};break;case"direct":t=w;break;case"auto":let d=0,p=!1;const F=c.maximunChunk??0,_=c.maximunInitialChunk??0;t={write(h){h==="<!--qkssr-f-->"?p||(p=!0):h==="<!--qkssr-pu-->"?d++:h==="<!--qkssr-po-->"?d--:C(h),d===0&&(p||s>=(o===0?_:F))&&(p=!1,N())}};break}m==="html"?t.write(Te):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await ye(n,u);const I=u==null?void 0:u.manifest.injections,ee=I?I.map(d=>f(d.tag,d.attributes??{})):void 0,ne=j(),A=[];let L=0,R=0;await re(e,{stream:t,containerTagName:m,containerAttributes:q,serverData:n.serverData,base:G,beforeContent:ee,beforeClose:async(d,p,F,_)=>{var Q,M,$,K,U,B,J;L=ne();const h=j();l=await ie(d,p,void 0,_);const y=[];if(n.prefetchStrategy!==null){const b=_e(l,n,u);if(b.length>0){const W=Se(n.prefetchStrategy,b,(Q=n.serverData)==null?void 0:Q.nonce);W&&y.push(W)}}const se=JSON.stringify(l.state,void 0,void 0);y.push(f("script",{type:"qwik/json",dangerouslySetInnerHTML:De(se),nonce:(M=n.serverData)==null?void 0:M.nonce})),l.funcs.length>0&&y.push(f("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Qe(l.funcs),nonce:($=n.serverData)==null?void 0:$.nonce}));const oe=!l||l.mode!=="static",P=((K=n.qwikLoader)==null?void 0:K.include)??"auto",D=P==="always"||P==="auto"&&oe;if(D){const b=xe({events:(U=n.qwikLoader)==null?void 0:U.events,debug:n.debug});y.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:b,nonce:(B=n.serverData)==null?void 0:B.nonce}))}const O=Array.from(p.$events$,b=>JSON.stringify(b));if(O.length>0){let b=`window.qwikevents.push(${O.join(", ")})`;D||(b=`window.qwikevents||=[];${b}`),y.push(f("script",{dangerouslySetInnerHTML:b,nonce:(J=n.serverData)==null?void 0:J.nonce}))}return Oe(A,d),R=h(),f(S,{children:y})},manifestHash:(u==null?void 0:u.manifest.manifestHash)||"dev"}),m!=="html"&&t.write("<!--/cq-->"),N();const te=l.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:u==null?void 0:u.manifest,size:r,isStatic:!te,timing:{render:L,snapshot:R,firstFlush:a},_symbols:A}}function Pe(e){if(e){if("mapper"in e)return e;if(e=je(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[z(t)]=[t,s]}),{mapper:n,manifest:e}}}}var De=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Oe(e,n){var t;for(const s of n){const r=(t=s.$componentQrl$)==null?void 0:t.getSymbol();r&&!e.includes(r)&&e.push(r)}}function Qe(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const Me={manifestHash:"h92a0r",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_0vphqyqodzi",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37211,38862]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48816,50167]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[23025,35545]},s_VKFlAWJuVm8:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vkflawjuvm8",hash:"VKFlAWJuVm8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1719,5707]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35829,37092]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_tntnak2dhj8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44878,46702]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49123,49820]}},mapping:{s_02wMImzEAbk:"q-01ef92c8.js",s_0vphQYqOdZI:"q-c8941ceb.js",s_8gdLBszqbaM:"q-d03323f5.js",s_Nk9PlpjQm9Y:"q-19145532.js",s_TxCFOy819ag:"q-01ef92c8.js",s_VKFlAWJuVm8:"q-6c7c0d0c.js",s_WmYC5H00wtI:"q-56274102.js",s_e0ssiDXoeAM:"q-cdd4c91a.js",s_tntnak2DhJ8:"q-6d07904c.js",s_RPDJAz33WLA:"q-01ef92c8.js",s_A5bZC7WO00A:"q-deaa288f.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-0023c261.js",s_BUbtvTyvVRE:"q-56274102.js",s_eBQ0vFsFKsk:"q-8a024099.js",s_fX0bDjeJa0E:"q-01ef92c8.js",s_i1Cv0pYJNR0:"q-d03323f5.js",s_p9MSze0ojs4:"q-19145532.js"},bundles:{"q-0023c261.js":{size:889,imports:["q-3f4ebff2.js","q-508870c9.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-00e53bf0.js":{size:125,imports:["q-3f4ebff2.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-01ef92c8.js":{size:5692,imports:["q-3f4ebff2.js","q-508870c9.js"],dynamicImports:["q-00e53bf0.js","q-4293f623.js","q-432e8038.js","q-875159ba.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-19145532.js":{size:1037,imports:["q-3f4ebff2.js","q-508870c9.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-38e5c99c.js":{size:202,imports:["q-3f4ebff2.js"],dynamicImports:["q-6d07904c.js"],origins:["src/global.css","src/root.tsx"]},"q-3f4ebff2.js":{size:46940,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-4293f623.js":{size:1689,imports:["q-3f4ebff2.js"],dynamicImports:["q-6c7c0d0c.js"],origins:["src/media/halloween.png?jsx","src/media/mapping-movement.png?jsx","src/media/rb4r.png?jsx","src/routes/layout.tsx"]},"q-432e8038.js":{size:7664,imports:["q-3f4ebff2.js"],origins:["src/routes/resume/index.mdx"]},"q-508870c9.js":{size:7500,imports:["q-3f4ebff2.js"],dynamicImports:["q-01ef92c8.js","q-663033b0.js","q-cdd4c91a.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-56274102.js":{size:787,imports:["q-3f4ebff2.js","q-508870c9.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-6c7c0d0c.js":{size:10005,imports:["q-3f4ebff2.js","q-4293f623.js","q-508870c9.js"],origins:["src/entry_layout.js","src/media/me.png?jsx","src/s_vkflawjuvm8.js","src/styled-system/css/conditions.mjs","src/styled-system/css/css.mjs"],symbols:["s_VKFlAWJuVm8"]},"q-6d07904c.js":{size:543,imports:["q-3f4ebff2.js","q-508870c9.js"],dynamicImports:["q-c8941ceb.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_tntnak2dhj8.js"],symbols:["s_tntnak2DhJ8"]},"q-875159ba.js":{size:7698,imports:["q-3f4ebff2.js"],origins:["src/routes/index.mdx"]},"q-8a024099.js":{size:128,imports:["q-3f4ebff2.js","q-508870c9.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-c8941ceb.js":{size:666,imports:["q-3f4ebff2.js","q-508870c9.js"],origins:["src/entry_RouterHead.js","src/s_0vphqyqodzi.js"],symbols:["s_0vphQYqOdZI"]},"q-cdd4c91a.js":{size:462,imports:["q-3f4ebff2.js","q-508870c9.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-d03323f5.js":{size:1144,imports:["q-3f4ebff2.js","q-508870c9.js"],dynamicImports:["q-8a024099.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-deaa288f.js":{size:751,imports:["q-3f4ebff2.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-7af0351f.css",dangerouslySetInnerHTML:`html{--fg-color-1: 218, 218, 218;--bg-color-1: 37, 37, 37;--bg-color-2: 0, 3, 50;font-family:noto sans mono,monospace}body{box-sizing:border-box;margin:0;padding:0;line-height:inherit;background:rgba(var(--bg-color-1),1);color:rgba(var(--fg-color-1),1)}a{color:inherit!important;font-weight:700;line-height:1rem;text-decoration:none;background:linear-gradient(to right,rgba(var(--fg-color-1),.3),rgba(var(--fg-color-1),.3)),linear-gradient(to right,rgba(var(--fg-color-1),1),rgba(var(--fg-color-1),1));background-size:100% .1rem,0 .1rem;background-position:100% 100%,0 100%;background-repeat:no-repeat;transition:background-size .3s}ul{list-style-type:none}li{line-height:1.75rem;border-bottom:1px solid rgba(218,218,218,.3);padding-bottom:8px;margin-bottom:8px}h1{padding-inline:32px;height:327px;display:flex;justify-content:flex-end;align-items:center}article{flex:4}header,h1{height:auto}h1{font-size:min(10vh,13vw);line-height:min(10vh,13vw);margin:0}address{padding-inline:32px;display:flex;flex-direction:column;justify-content:flex-end;text-align:right}.resume-content section{padding:32px}.resume-content h2{font-size:2rem;border-bottom:1px solid rgba(218,218,218,.5)}.resume-content h3{font-size:1.33rem;border-bottom:1px solid rgba(218,218,218,.3)}.resume-content em{font-style:italic;border-bottom:1px solid rgba(218,218,218,.2)}.sidebar{position:sticky;top:16px}.samples img{width:360px;height:252px}.list-title{font-size:1.33rem;font-weight:700;border-bottom:1px solid rgba(var(--fg-color-1),1)}dt{font-size:1.17rem;line-height:1.17rem;margin-top:16px}.skill-wrap{position:relative}.skill-liner{top:100%;width:100%;left:16px}.tooltip{top:110%;right:0;width:250px}.skill-liner,.tooltip{display:none;position:absolute;background:rgba(var(--bg-color-1),.87);border:1px solid rgba(var(--fg-color-1),1);z-index:10;padding:8px;box-shadow:0 0 10px 5px #00000080}.sample-list dt{padding:8px 4px 4px;margin-top:8px;border-top:1px solid rgba(var(--fg-color-1),.33)}.sample-list dt,.sample-list dd{border-left:1px solid rgba(var(--fg-color-1),.33);border-right:1px solid rgba(var(--fg-color-1),.33)}.sample-list dd{padding:4px;border-bottom:1px solid rgba(var(--fg-color-1),.33)}.chicago{position:relative}a:hover,a:focus{background-size:0 .1rem,100% .1rem}.skill-wrap:hover .skill-liner,.chicago:hover .tooltip{display:block}@layer reset,base,tokens,recipes,utilities;@layer base{:root{--made-with-panda: "🐼" }*,*:before,*:after,::backdrop{--blur: ;--brightness: ;--contrast: ;--grayscale: ;--hue-rotate: ;--invert: ;--saturate: ;--sepia: ;--drop-shadow: ;--backdrop-blur: ;--backdrop-brightness: ;--backdrop-contrast: ;--backdrop-grayscale: ;--backdrop-hue-rotate: ;--backdrop-invert: ;--backdrop-opacity: ;--backdrop-saturate: ;--backdrop-sepia: ;--scroll-snap-strictness: proximity;--border-spacing-x: 0;--border-spacing-y: 0;--translate-x: 0;--translate-y: 0;--rotate: 0;--skew-x: 0;--skew-y: 0;--scale-x: 1;--scale-y: 1 }}@layer reset{*{margin:0;padding:0;font:inherit}*,*:before,*:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--global-color-border, currentColor)}html{line-height:1.5;--font-fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-tab-size:4;tab-size:4;font-family:var(--global-font-body, var(--font-fallback))}hr{height:0;color:inherit;border-top-width:1px}body{height:100%;line-height:inherit}img{border-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}ol,ul{list-style:none}code,kbd,pre,samp{font-size:1em}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}button,select{text-transform:none}table{text-indent:0;border-color:inherit;border-collapse:collapse}input::placeholder,textarea::placeholder{opacity:1;color:var(--global-color-placeholder, #9ca3af)}textarea{resize:vertical}summary{display:list-item}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}dialog{padding:0}a{color:inherit;text-decoration:inherit}abbr:where([title]){text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-size:1em;--font-mono-fallback: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New";font-family:var(--global-font-mono, var(--font-fallback))}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}:-moz-ui-invalid{box-shadow:none}:-moz-focusring{outline:auto}}@layer tokens{:where(:root,:host){--borders-none: none;--easings-default: cubic-bezier(.4, 0, .2, 1);--easings-linear: linear;--easings-in: cubic-bezier(.4, 0, 1, 1);--easings-out: cubic-bezier(0, 0, .2, 1);--easings-in-out: cubic-bezier(.4, 0, .2, 1);--durations-fastest: 50ms;--durations-faster: .1s;--durations-fast: .15s;--durations-normal: .2s;--durations-slow: .3s;--durations-slower: .4s;--durations-slowest: .5s;--radii-xs: .125rem;--radii-sm: .25rem;--radii-md: .375rem;--radii-lg: .5rem;--radii-xl: .75rem;--radii-2xl: 1rem;--radii-3xl: 1.5rem;--radii-full: 9999px;--font-weights-thin: 100;--font-weights-extralight: 200;--font-weights-light: 300;--font-weights-normal: 400;--font-weights-medium: 500;--font-weights-semibold: 600;--font-weights-bold: 700;--font-weights-extrabold: 800;--font-weights-black: 900;--line-heights-none: 1;--line-heights-tight: 1.25;--line-heights-snug: 1.375;--line-heights-normal: 1.5;--line-heights-relaxed: 1.625;--line-heights-loose: 2;--fonts-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--fonts-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;--fonts-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--letter-spacings-tighter: -.05em;--letter-spacings-tight: -.025em;--letter-spacings-normal: 0em;--letter-spacings-wide: .025em;--letter-spacings-wider: .05em;--letter-spacings-widest: .1em;--font-sizes-2xs: .5rem;--font-sizes-xs: .75rem;--font-sizes-sm: .875rem;--font-sizes-md: 1rem;--font-sizes-lg: 1.125rem;--font-sizes-xl: 1.25rem;--font-sizes-2xl: 1.5rem;--font-sizes-3xl: 1.875rem;--font-sizes-4xl: 2.25rem;--font-sizes-5xl: 3rem;--font-sizes-6xl: 3.75rem;--font-sizes-7xl: 4.5rem;--font-sizes-8xl: 6rem;--font-sizes-9xl: 8rem;--shadows-xs: 0 1px 2px 0 rgb(0 0 0 / .05);--shadows-sm: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--shadows-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--shadows-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--shadows-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--shadows-2xl: 0 25px 50px -12px rgb(0 0 0 / .25);--shadows-inner: inset 0 2px 4px 0 rgb(0 0 0 / .05);--colors-current: currentColor;--colors-black: #000;--colors-white: #fff;--colors-transparent: rgb(0 0 0 / 0);--colors-rose-50: #fff1f2;--colors-rose-100: #ffe4e6;--colors-rose-200: #fecdd3;--colors-rose-300: #fda4af;--colors-rose-400: #fb7185;--colors-rose-500: #f43f5e;--colors-rose-600: #e11d48;--colors-rose-700: #be123c;--colors-rose-800: #9f1239;--colors-rose-900: #881337;--colors-rose-950: #4c0519;--colors-pink-50: #fdf2f8;--colors-pink-100: #fce7f3;--colors-pink-200: #fbcfe8;--colors-pink-300: #f9a8d4;--colors-pink-400: #f472b6;--colors-pink-500: #ec4899;--colors-pink-600: #db2777;--colors-pink-700: #be185d;--colors-pink-800: #9d174d;--colors-pink-900: #831843;--colors-pink-950: #500724;--colors-fuchsia-50: #fdf4ff;--colors-fuchsia-100: #fae8ff;--colors-fuchsia-200: #f5d0fe;--colors-fuchsia-300: #f0abfc;--colors-fuchsia-400: #e879f9;--colors-fuchsia-500: #d946ef;--colors-fuchsia-600: #c026d3;--colors-fuchsia-700: #a21caf;--colors-fuchsia-800: #86198f;--colors-fuchsia-900: #701a75;--colors-fuchsia-950: #4a044e;--colors-purple-50: #faf5ff;--colors-purple-100: #f3e8ff;--colors-purple-200: #e9d5ff;--colors-purple-300: #d8b4fe;--colors-purple-400: #c084fc;--colors-purple-500: #a855f7;--colors-purple-600: #9333ea;--colors-purple-700: #7e22ce;--colors-purple-800: #6b21a8;--colors-purple-900: #581c87;--colors-purple-950: #3b0764;--colors-violet-50: #f5f3ff;--colors-violet-100: #ede9fe;--colors-violet-200: #ddd6fe;--colors-violet-300: #c4b5fd;--colors-violet-400: #a78bfa;--colors-violet-500: #8b5cf6;--colors-violet-600: #7c3aed;--colors-violet-700: #6d28d9;--colors-violet-800: #5b21b6;--colors-violet-900: #4c1d95;--colors-violet-950: #2e1065;--colors-indigo-50: #eef2ff;--colors-indigo-100: #e0e7ff;--colors-indigo-200: #c7d2fe;--colors-indigo-300: #a5b4fc;--colors-indigo-400: #818cf8;--colors-indigo-500: #6366f1;--colors-indigo-600: #4f46e5;--colors-indigo-700: #4338ca;--colors-indigo-800: #3730a3;--colors-indigo-900: #312e81;--colors-indigo-950: #1e1b4b;--colors-blue-50: #eff6ff;--colors-blue-100: #dbeafe;--colors-blue-200: #bfdbfe;--colors-blue-300: #93c5fd;--colors-blue-400: #60a5fa;--colors-blue-500: #3b82f6;--colors-blue-600: #2563eb;--colors-blue-700: #1d4ed8;--colors-blue-800: #1e40af;--colors-blue-900: #1e3a8a;--colors-blue-950: #172554;--colors-sky-50: #f0f9ff;--colors-sky-100: #e0f2fe;--colors-sky-200: #bae6fd;--colors-sky-300: #7dd3fc;--colors-sky-400: #38bdf8;--colors-sky-500: #0ea5e9;--colors-sky-600: #0284c7;--colors-sky-700: #0369a1;--colors-sky-800: #075985;--colors-sky-900: #0c4a6e;--colors-sky-950: #082f49;--colors-cyan-50: #ecfeff;--colors-cyan-100: #cffafe;--colors-cyan-200: #a5f3fc;--colors-cyan-300: #67e8f9;--colors-cyan-400: #22d3ee;--colors-cyan-500: #06b6d4;--colors-cyan-600: #0891b2;--colors-cyan-700: #0e7490;--colors-cyan-800: #155e75;--colors-cyan-900: #164e63;--colors-cyan-950: #083344;--colors-teal-50: #f0fdfa;--colors-teal-100: #ccfbf1;--colors-teal-200: #99f6e4;--colors-teal-300: #5eead4;--colors-teal-400: #2dd4bf;--colors-teal-500: #14b8a6;--colors-teal-600: #0d9488;--colors-teal-700: #0f766e;--colors-teal-800: #115e59;--colors-teal-900: #134e4a;--colors-teal-950: #042f2e;--colors-emerald-50: #ecfdf5;--colors-emerald-100: #d1fae5;--colors-emerald-200: #a7f3d0;--colors-emerald-300: #6ee7b7;--colors-emerald-400: #34d399;--colors-emerald-500: #10b981;--colors-emerald-600: #059669;--colors-emerald-700: #047857;--colors-emerald-800: #065f46;--colors-emerald-900: #064e3b;--colors-emerald-950: #022c22;--colors-green-50: #f0fdf4;--colors-green-100: #dcfce7;--colors-green-200: #bbf7d0;--colors-green-300: #86efac;--colors-green-400: #4ade80;--colors-green-500: #22c55e;--colors-green-600: #16a34a;--colors-green-700: #15803d;--colors-green-800: #166534;--colors-green-900: #14532d;--colors-green-950: #052e16;--colors-lime-50: #f7fee7;--colors-lime-100: #ecfccb;--colors-lime-200: #d9f99d;--colors-lime-300: #bef264;--colors-lime-400: #a3e635;--colors-lime-500: #84cc16;--colors-lime-600: #65a30d;--colors-lime-700: #4d7c0f;--colors-lime-800: #3f6212;--colors-lime-900: #365314;--colors-lime-950: #1a2e05;--colors-yellow-50: #fefce8;--colors-yellow-100: #fef9c3;--colors-yellow-200: #fef08a;--colors-yellow-300: #fde047;--colors-yellow-400: #facc15;--colors-yellow-500: #eab308;--colors-yellow-600: #ca8a04;--colors-yellow-700: #a16207;--colors-yellow-800: #854d0e;--colors-yellow-900: #713f12;--colors-yellow-950: #422006;--colors-amber-50: #fffbeb;--colors-amber-100: #fef3c7;--colors-amber-200: #fde68a;--colors-amber-300: #fcd34d;--colors-amber-400: #fbbf24;--colors-amber-500: #f59e0b;--colors-amber-600: #d97706;--colors-amber-700: #b45309;--colors-amber-800: #92400e;--colors-amber-900: #78350f;--colors-amber-950: #451a03;--colors-orange-50: #fff7ed;--colors-orange-100: #ffedd5;--colors-orange-200: #fed7aa;--colors-orange-300: #fdba74;--colors-orange-400: #fb923c;--colors-orange-500: #f97316;--colors-orange-600: #ea580c;--colors-orange-700: #c2410c;--colors-orange-800: #9a3412;--colors-orange-900: #7c2d12;--colors-orange-950: #431407;--colors-red-50: #fef2f2;--colors-red-100: #fee2e2;--colors-red-200: #fecaca;--colors-red-300: #fca5a5;--colors-red-400: #f87171;--colors-red-500: #ef4444;--colors-red-600: #dc2626;--colors-red-700: #b91c1c;--colors-red-800: #991b1b;--colors-red-900: #7f1d1d;--colors-red-950: #450a0a;--colors-neutral-50: #fafafa;--colors-neutral-100: #f5f5f5;--colors-neutral-200: #e5e5e5;--colors-neutral-300: #d4d4d4;--colors-neutral-400: #a3a3a3;--colors-neutral-500: #737373;--colors-neutral-600: #525252;--colors-neutral-700: #404040;--colors-neutral-800: #262626;--colors-neutral-900: #171717;--colors-neutral-950: #0a0a0a;--colors-stone-50: #fafaf9;--colors-stone-100: #f5f5f4;--colors-stone-200: #e7e5e4;--colors-stone-300: #d6d3d1;--colors-stone-400: #a8a29e;--colors-stone-500: #78716c;--colors-stone-600: #57534e;--colors-stone-700: #44403c;--colors-stone-800: #292524;--colors-stone-900: #1c1917;--colors-stone-950: #0c0a09;--colors-zinc-50: #fafafa;--colors-zinc-100: #f4f4f5;--colors-zinc-200: #e4e4e7;--colors-zinc-300: #d4d4d8;--colors-zinc-400: #a1a1aa;--colors-zinc-500: #71717a;--colors-zinc-600: #52525b;--colors-zinc-700: #3f3f46;--colors-zinc-800: #27272a;--colors-zinc-900: #18181b;--colors-zinc-950: #09090b;--colors-gray-50: #f9fafb;--colors-gray-100: #f3f4f6;--colors-gray-200: #e5e7eb;--colors-gray-300: #d1d5db;--colors-gray-400: #9ca3af;--colors-gray-500: #6b7280;--colors-gray-600: #4b5563;--colors-gray-700: #374151;--colors-gray-800: #1f2937;--colors-gray-900: #111827;--colors-gray-950: #030712;--colors-slate-50: #f8fafc;--colors-slate-100: #f1f5f9;--colors-slate-200: #e2e8f0;--colors-slate-300: #cbd5e1;--colors-slate-400: #94a3b8;--colors-slate-500: #64748b;--colors-slate-600: #475569;--colors-slate-700: #334155;--colors-slate-800: #1e293b;--colors-slate-900: #0f172a;--colors-slate-950: #020617;--blurs-sm: 4px;--blurs-base: 8px;--blurs-md: 12px;--blurs-lg: 16px;--blurs-xl: 24px;--blurs-2xl: 40px;--blurs-3xl: 64px;--spacing-0: 0rem;--spacing-1: .25rem;--spacing-2: .5rem;--spacing-3: .75rem;--spacing-4: 1rem;--spacing-5: 1.25rem;--spacing-6: 1.5rem;--spacing-7: 1.75rem;--spacing-8: 2rem;--spacing-9: 2.25rem;--spacing-10: 2.5rem;--spacing-11: 2.75rem;--spacing-12: 3rem;--spacing-14: 3.5rem;--spacing-16: 4rem;--spacing-20: 5rem;--spacing-24: 6rem;--spacing-28: 7rem;--spacing-32: 8rem;--spacing-36: 9rem;--spacing-40: 10rem;--spacing-44: 11rem;--spacing-48: 12rem;--spacing-52: 13rem;--spacing-56: 14rem;--spacing-60: 15rem;--spacing-64: 16rem;--spacing-72: 18rem;--spacing-80: 20rem;--spacing-96: 24rem;--spacing-0\\.5: .125rem;--spacing-1\\.5: .375rem;--spacing-2\\.5: .625rem;--spacing-3\\.5: .875rem;--sizes-0: 0rem;--sizes-1: .25rem;--sizes-2: .5rem;--sizes-3: .75rem;--sizes-4: 1rem;--sizes-5: 1.25rem;--sizes-6: 1.5rem;--sizes-7: 1.75rem;--sizes-8: 2rem;--sizes-9: 2.25rem;--sizes-10: 2.5rem;--sizes-11: 2.75rem;--sizes-12: 3rem;--sizes-14: 3.5rem;--sizes-16: 4rem;--sizes-20: 5rem;--sizes-24: 6rem;--sizes-28: 7rem;--sizes-32: 8rem;--sizes-36: 9rem;--sizes-40: 10rem;--sizes-44: 11rem;--sizes-48: 12rem;--sizes-52: 13rem;--sizes-56: 14rem;--sizes-60: 15rem;--sizes-64: 16rem;--sizes-72: 18rem;--sizes-80: 20rem;--sizes-96: 24rem;--sizes-0\\.5: .125rem;--sizes-1\\.5: .375rem;--sizes-2\\.5: .625rem;--sizes-3\\.5: .875rem;--sizes-xs: 20rem;--sizes-sm: 24rem;--sizes-md: 28rem;--sizes-lg: 32rem;--sizes-xl: 36rem;--sizes-2xl: 42rem;--sizes-3xl: 48rem;--sizes-4xl: 56rem;--sizes-5xl: 64rem;--sizes-6xl: 72rem;--sizes-7xl: 80rem;--sizes-8xl: 90rem;--sizes-prose: 65ch;--sizes-full: 100%;--sizes-min: min-content;--sizes-max: max-content;--sizes-fit: fit-content;--sizes-breakpoint-sm: 640px;--sizes-breakpoint-md: 768px;--sizes-breakpoint-lg: 1024px;--sizes-breakpoint-xl: 1280px;--sizes-breakpoint-2xl: 1536px;--animations-spin: spin 1s linear infinite;--animations-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animations-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--animations-bounce: bounce 1s infinite;--breakpoints-sm: 640px;--breakpoints-md: 768px;--breakpoints-lg: 1024px;--breakpoints-xl: 1280px;--breakpoints-2xl: 1536px }@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}}@layer utilities{.d_flex{display:flex}.items_flex-start{align-items:flex-start}.p_16px{padding:16px}.\\[\\&_\\.sidebar\\]\\:flex_1 .sidebar{flex:1 1 0%}.\\[\\&_img\\]\\:object_contain img{object-fit:contain}}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.13",vite:"",rollup:"3.29.4",env:"node",os:"darwin",node:"18.16.0"}},$e=()=>{const e=le(),n=ce();return v(S,{children:[g("title",null,null,e.title,1,null),g("link",null,{href:de(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),g("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),g("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(t=>k("meta",{...t},null,0,t.key)),e.links.map(t=>k("link",{...t},null,0,t.key)),e.styles.map(t=>k("style",{...t.props,dangerouslySetInnerHTML:me(t,"style")},null,0,t.key))]},1,"0D_0")},Ke=Y(H($e,"s_0vphQYqOdZI"));const Ue=()=>v(pe,{children:[g("head",null,null,[g("meta",null,{charSet:"utf-8"},null,3,null),g("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),v(Ke,null,3,"vp_0")],1,null),g("body",null,{lang:"en"},[v(fe,null,3,"vp_1"),v(ue,null,3,"vp_2")],1,null)]},1,"vp_3"),Be=Y(H(Ue,"s_tntnak2DhJ8"));function Ye(e){return Fe(v(Be,null,3,"Qb_0"),{manifest:Me,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Ye as default};
