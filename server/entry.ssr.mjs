import{j,_ as je,a as ke,F as O,s as xe,c as Q,i as C,b as k,d as de,e as Se,u as J,f as H,g as S,S as Ee,h as Ie,k as z,l as Ce,m as $,n as I,o as Ne,p as Ae,q as Le,r as fe,t as N,v as Te,w as pe,x as De,y as le,z as Re,A as M}from"./assets/@qwik-city-plan-7fe591ca.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.14
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var Pe=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});function ze(t,e){const n=e==null?void 0:e.mapper,o=t.symbolMapper?t.symbolMapper:i=>{var a;if(n){const r=W(i),c=n[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return c}};return{isServer:!0,async importSymbol(i,a,r){var b;const c=W(r),m=(b=globalThis.__qwik_reg_symbols)==null?void 0:b.get(c);if(m)return m;let u=String(a);u.endsWith(".js")||(u+=".js");const f=Pe(u);if(!(r in f))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${u}'.`);return f[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return o(i,n)}}}async function Fe(t,e){const n=ze(t,e);xe(n)}var W=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function K(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function ye(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Oe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,Qe=`(() => {
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
})();`,Be=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,$e=`(() => {
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
})();`;function Me(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?$e:Be).replace("window.qEvents",JSON.stringify(t.events)):t.debug?Qe:Oe}function Ke(t,e,n){if(!n)return[];const o=e.prefetchStrategy,s=ye(e);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return We(t,n,s);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function We(t,e,n){const o=[],s=t==null?void 0:t.qrls,{mapper:i,manifest:a}=e,r=new Map;if(Array.isArray(s))for(const c of s){const m=c.getHash(),u=i[m];u&&he(a,r,o,n,u[1])}return o}function he(t,e,n,o,s){const i=o+s;let a=e.get(i);if(!a){a={url:i,imports:[]},e.set(i,a);const r=t.bundles[s];if(r&&Array.isArray(r.imports))for(const c of r.imports)he(t,e,a.imports,o,c)}n.push(a)}function Ue(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function U(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function V(t){const e=[],n=o=>{if(Array.isArray(o))for(const s of o)e.includes(s.url)||(e.push(s.url),n(s.imports))};return n(t),e}function Je(t){const e=new Map;let n=0;const o=(r,c)=>{if(Array.isArray(r))for(const m of r){const u=e.get(m.url)||0;e.set(m.url,u+1),n++,c.has(m.url)||(c.add(m.url),o(m.imports,c))}},s=new Set;for(const r of t)s.clear(),o(r.imports,s);const i=n/e.size*2,a=Array.from(e.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function He(t,e,n){const o=Ge(t==null?void 0:t.implementation),s=[];return o.prefetchEvent==="always"&&Ve(s,e,n),o.linkInsert==="html-append"&&Ye(s,e,o),o.linkInsert==="js-append"?Ze(s,e,o,n):o.workerFetchInsert==="always"&&Xe(s,e,n),s.length>0?j(O,{children:s}):null}function Ve(t,e,n){const o=Je(e);for(const s of o)t.push(j("link",{rel:"modulepreload",href:s,nonce:n}));t.push(j("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:n}))}function Ye(t,e,n){const o=V(e),s=n.linkRel||"prefetch";for(const i of o){const a={};a.href=i,a.rel=s,(s==="prefetch"||s==="preload")&&i.endsWith(".js")&&(a.as="script"),t.push(j("link",a,void 0))}}function Ze(t,e,n,o){const s=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(V(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${s}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${s}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=U(),i+="}"),n.workerFetchInsert==="always"&&(i+=U()),t.push(j("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:i,nonce:o}))}function Xe(t,e,n){let o=`const u=${JSON.stringify(V(e))};`;o+=U(),t.push(j("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:o,nonce:n}))}function Ge(t){return t&&typeof t=="object"?t:et}var et={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},tt="<!DOCTYPE html>";async function nt(t,e){var A;let n=e.stream,o=0,s=0,i=0,a=0,r="",c;const m=((A=e.streaming)==null?void 0:A.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=e.containerTagName??"html",f=e.containerAttributes??{},b=n,E=K(),w=ye(e),y=st(e.manifest);function d(){r&&(b.write(r),r="",o=0,i++,i===1&&(a=E()))}function v(q){const h=q.length;o+=h,s+=h,r+=q}switch(m.strategy){case"disabled":n={write:v};break;case"direct":n=b;break;case"auto":let q=0,h=!1;const Z=m.maximunChunk??0,B=m.maximunInitialChunk??0;n={write(R){R==="<!--qkssr-f-->"?h||(h=!0):R==="<!--qkssr-pu-->"?q++:R==="<!--qkssr-po-->"?q--:v(R),q===0&&(h||o>=(i===0?B:Z))&&(h=!1,d())}};break}u==="html"?n.write(tt):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"}),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Fe(e,y);const _=y==null?void 0:y.manifest.injections,l=_?_.map(q=>j(q.tag,q.attributes??{})):void 0,p=K(),g=[];let P=0,T=0;await je(t,{stream:n,containerTagName:u,containerAttributes:f,serverData:e.serverData,base:w,beforeContent:l,beforeClose:async(q,h,Z,B)=>{var te,ne,se,oe,ie,re,ce;P=p();const R=K();c=await ke(q,h,void 0,B);const L=[];if(e.prefetchStrategy!==null){const x=Ke(c,e,y);if(x.length>0){const ae=He(e.prefetchStrategy,x,(te=e.serverData)==null?void 0:te.nonce);ae&&L.push(ae)}}const we=JSON.stringify(c.state,void 0,void 0);L.push(j("script",{type:"qwik/json",dangerouslySetInnerHTML:ot(we),nonce:(ne=e.serverData)==null?void 0:ne.nonce})),c.funcs.length>0&&L.push(j("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:rt(c.funcs),nonce:(se=e.serverData)==null?void 0:se.nonce}));const ge=!c||c.mode!=="static",X=((oe=e.qwikLoader)==null?void 0:oe.include)??"auto",G=X==="always"||X==="auto"&&ge;if(G){const x=Me({events:(ie=e.qwikLoader)==null?void 0:ie.events,debug:e.debug});L.push(j("script",{id:"qwikloader",dangerouslySetInnerHTML:x,nonce:(re=e.serverData)==null?void 0:re.nonce}))}const ee=Array.from(h.$events$,x=>JSON.stringify(x));if(ee.length>0){let x=`window.qwikevents.push(${ee.join(", ")})`;G||(x=`window.qwikevents||=[];${x}`),L.push(j("script",{dangerouslySetInnerHTML:x,nonce:(ce=e.serverData)==null?void 0:ce.nonce}))}return it(g,q),T=R(),j(O,{children:L})},manifestHash:(y==null?void 0:y.manifest.manifestHash)||"dev"}),u!=="html"&&n.write("<!--/cq-->"),d();const D=c.resources.some(q=>q._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:y==null?void 0:y.manifest,size:s,isStatic:!D,timing:{render:P,snapshot:T,firstFlush:a},_symbols:g}}function st(t){if(t){if("mapper"in t)return t;if(t=Ue(t),t){const e={};return Object.entries(t.mapping).forEach(([n,o])=>{e[W(n)]=[n,o]}),{mapper:e,manifest:t}}}}var ot=t=>t.replace(/<(\/?script)/g,"\\x3C$1");function it(t,e){var n;for(const o of e){const s=(n=o.$componentQrl$)==null?void 0:n.getSymbol();s&&!t.includes(s)&&t.push(s)}}function rt(t){return`document.currentScript.qFuncs=[${t.join(`,
`)}]`}const ct={manifestHash:"imjr4j",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_0vphqyqodzi",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[243,854]},s_4DeQEQWh3DI:{origin:"components/TopButton/topbutton.tsx",displayName:"Topbutton_component",canonicalFilename:"s_4deqeqwh3di",hash:"4DeQEQWh3DI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[128,2220]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[37211,38862]},s_B0lqk5IDDy4:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_b0lqk5iddy4",hash:"B0lqk5IDDy4",ctxKind:"function",ctxName:"component$",captures:!1,loc:[4597,23422]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,loc:[48978,50329]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,loc:[23025,35545]},s_VKFlAWJuVm8:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vkflawjuvm8",hash:"VKFlAWJuVm8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[722,871]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[35829,37092]},s_cLxhDSZvvW8:{origin:"components/ThemeSelector/themeselector.tsx",displayName:"ThemeSelector_component",canonicalFilename:"s_clxhdszvvw8",hash:"cLxhDSZvvW8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[442,2397]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[7931,8645]},s_legqvj0c7j8:{origin:"components/Header/header.tsx",displayName:"Header_component",canonicalFilename:"s_legqvj0c7j8",hash:"legqvj0c7j8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[233,3264]},s_qjE0MXqhvkc:{origin:"components/Contact/contact.tsx",displayName:"Contact_component",canonicalFilename:"s_qje0mxqhvkc",hash:"qjE0MXqhvkc",ctxKind:"function",ctxName:"component$",captures:!1,loc:[178,3292]},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_tntnak2dhj8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[274,2849]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,loc:[44878,46864]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_NDKq0PWrd6U:{origin:"components/ThemeSelector/themeselector.tsx",displayName:"ThemeSelector_component_div_button_onClick",canonicalFilename:"s_ndkq0pwrd6u",hash:"NDKq0PWrd6U",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_cLxhDSZvvW8",loc:[2250,2284]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49285,49982]}},mapping:{s_02wMImzEAbk:"q-efcc351e.js",s_0vphQYqOdZI:"q-dc8f146f.js",s_4DeQEQWh3DI:"q-639b16dc.js",s_8gdLBszqbaM:"q-ec34e00e.js",s_B0lqk5IDDy4:"q-40e8f832.js",s_Nk9PlpjQm9Y:"q-0b0a6e86.js",s_TxCFOy819ag:"q-efcc351e.js",s_VKFlAWJuVm8:"q-b56eae8a.js",s_WmYC5H00wtI:"q-d6c50821.js",s_cLxhDSZvvW8:"q-431d1c17.js",s_e0ssiDXoeAM:"q-e173077e.js",s_legqvj0c7j8:"q-9dd3809f.js",s_qjE0MXqhvkc:"q-90e2c6de.js",s_tntnak2DhJ8:"q-94d65ba0.js",s_RPDJAz33WLA:"q-efcc351e.js",s_A5bZC7WO00A:"q-adcde3ad.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-931922fe.js",s_BUbtvTyvVRE:"q-d6c50821.js",s_NDKq0PWrd6U:"q-431d1c17.js",s_eBQ0vFsFKsk:"q-9e6a5325.js",s_fX0bDjeJa0E:"q-efcc351e.js",s_i1Cv0pYJNR0:"q-ec34e00e.js",s_p9MSze0ojs4:"q-0b0a6e86.js"},bundles:{"q-049e6e30.js":{size:125,imports:["q-f4563627.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-0b0a6e86.js":{size:1037,imports:["q-32931bc8.js","q-f4563627.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-32931bc8.js":{size:7493,imports:["q-f4563627.js"],dynamicImports:["q-663033b0.js","q-e173077e.js","q-efcc351e.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-40e8f832.js":{size:10991,imports:["q-cc1453eb.js","q-e2e295ef.js","q-f4563627.js"],origins:["src/entry_routes.js","src/media/halloween.png?jsx","src/media/mapping-movement.png?jsx","src/media/rb4r.png?jsx","src/s_b0lqk5iddy4.js"],symbols:["s_B0lqk5IDDy4"]},"q-431d1c17.js":{size:1392,imports:["q-9b40695d.js","q-e2e295ef.js","q-f4563627.js"],origins:["src/entry_ThemeSelector.js","src/s_clxhdszvvw8.js","src/s_ndkq0pwrd6u.js"],symbols:["s_cLxhDSZvvW8","s_NDKq0PWrd6U"]},"q-639b16dc.js":{size:1059,imports:["q-e2e295ef.js","q-f4563627.js"],origins:["src/entry_Topbutton.js","src/s_4deqeqwh3di.js"],symbols:["s_4DeQEQWh3DI"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-7daee750.js":{size:288,imports:["q-f4563627.js"],dynamicImports:["q-b56eae8a.js"],origins:["src/routes/layout.tsx"]},"q-8a4e0233.js":{size:202,imports:["q-f4563627.js"],dynamicImports:["q-94d65ba0.js"],origins:["src/global.css","src/root.tsx"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-90e2c6de.js":{size:1788,imports:["q-e2e295ef.js","q-f4563627.js"],dynamicImports:["q-639b16dc.js"],origins:["src/components/TopButton/topbutton.tsx","src/entry_Contact.js","src/s_qje0mxqhvkc.js"],symbols:["s_qjE0MXqhvkc"]},"q-931922fe.js":{size:889,imports:["q-32931bc8.js","q-f4563627.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-94d65ba0.js":{size:2463,imports:["q-32931bc8.js","q-f4563627.js"],dynamicImports:["q-dc8f146f.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_tntnak2dhj8.js"],symbols:["s_tntnak2DhJ8"]},"q-9b40695d.js":{size:343,imports:["q-f4563627.js"],dynamicImports:["q-431d1c17.js"],origins:["src/components/ThemeSelector/themeselector.tsx"]},"q-9dd3809f.js":{size:1606,imports:["q-9b40695d.js","q-e2e295ef.js","q-f4563627.js"],origins:["src/entry_Header.js","src/media/NickWhite.jpg?jsx","src/s_legqvj0c7j8.js"],symbols:["s_legqvj0c7j8"]},"q-9e6a5325.js":{size:128,imports:["q-32931bc8.js","q-f4563627.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-adcde3ad.js":{size:751,imports:["q-f4563627.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-b56eae8a.js":{size:519,imports:["q-f4563627.js"],dynamicImports:["q-90e2c6de.js","q-9dd3809f.js"],origins:["src/components/Contact/contact.tsx","src/components/Header/header.tsx","src/entry_layout.js","src/s_vkflawjuvm8.js"],symbols:["s_VKFlAWJuVm8"]},"q-cc1453eb.js":{size:3480,imports:["q-f4563627.js"],dynamicImports:["q-40e8f832.js"],origins:["src/routes/index.tsx"]},"q-d6c50821.js":{size:787,imports:["q-32931bc8.js","q-f4563627.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-dc8f146f.js":{size:671,imports:["q-32931bc8.js","q-f4563627.js"],origins:["src/entry_RouterHead.js","src/s_0vphqyqodzi.js"],symbols:["s_0vphQYqOdZI"]},"q-e173077e.js":{size:467,imports:["q-32931bc8.js","q-f4563627.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-e2e295ef.js":{size:8094,origins:["src/styled-system/css/conditions.mjs","src/styled-system/css/css.mjs"]},"q-ec34e00e.js":{size:1149,imports:["q-32931bc8.js","q-f4563627.js"],dynamicImports:["q-9e6a5325.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-efcc351e.js":{size:5592,imports:["q-32931bc8.js","q-f4563627.js"],dynamicImports:["q-049e6e30.js","q-7daee750.js","q-cc1453eb.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-f4563627.js":{size:46851,origins:["node_modules/@builder.io/qwik/core.min.mjs"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/build/q-467457df.css"}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.14",vite:"",rollup:"3.29.4",env:"node",os:"linux",node:"21.1.0"}},at='((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',lt=N("qc-s"),ut=N("qc-c"),ve=N("qc-ic"),qe=N("qc-h"),be=N("qc-l"),mt=N("qc-n"),dt=N("qc-a"),ft=N("qc-ir"),pt=t=>{const e=window,n=location.pathname+location.search,o="_qCitySPA",s="_qCityHistoryPatch",i="_qCityBootstrap",a="_qCityInitPopstate",r="_qCityInitAnchors",c="_qCityInitVisibility",m="_qCityInitScroll",u="_qCityScrollEnabled",f="_qCityScrollDebounce",b="_qCityScroll",E=d=>{d&&e.scrollTo(d.x,d.y)},w=()=>{const d=document.documentElement;return{x:d.scrollLeft,y:d.scrollTop,w:Math.max(d.scrollWidth,d.clientWidth),h:Math.max(d.scrollHeight,d.clientHeight)}},y=d=>{const v=history.state||{};v[b]=d||w(),history.replaceState(v,"")};if(!e[o]&&!e[a]&&!e[r]&&!e[c]&&!e[m]){if(y(),e[a]=()=>{var d;if(!e[o]){if(e[u]=!1,clearTimeout(e[f]),n!==location.pathname+location.search){const _=t.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');if(_){const l=_.closest("[q\\:container]"),p=_.cloneNode();p.setAttribute("q:nbs",""),p.style.display="none",l.appendChild(p),e[i]=p,p.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const v=(d=history.state)==null?void 0:d[b];E(v),e[u]=!0}}},!e[s]){e[s]=!0;const d=history.pushState,v=history.replaceState,_=l=>(l===null||typeof l>"u"?l={}:(l==null?void 0:l.constructor)!==Object&&(l={_data:l}),l._qCityScroll=l._qCityScroll||w(),l);history.pushState=(l,p,g)=>(l=_(l),d.call(history,l,p,g)),history.replaceState=(l,p,g)=>(l=_(l),v.call(history,l,p,g))}e[r]=d=>{if(e[o]||d.defaultPrevented)return;const v=d.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const _=v.getAttribute("href"),l=new URL(location.href),p=new URL(_,l),g=p.origin===l.origin,P=p.pathname+p.search===l.pathname+l.search;if(g&&P)if(d.preventDefault(),p.href!==l.href&&history.pushState(null,"",p),!p.hash)p.href.endsWith("#")?window.scrollTo(0,0):(e[u]=!1,clearTimeout(e[f]),y({...w(),x:0,y:0}),location.reload());else{const T=p.hash.slice(1),D=document.getElementById(T);D&&D.scrollIntoView()}}},e[c]=()=>{!e[o]&&e[u]&&document.visibilityState==="hidden"&&y()},e[m]=()=>{e[o]||!e[u]||(clearTimeout(e[f]),e[f]=setTimeout(()=>{y(),e[f]=void 0},200))},e[u]=!0,setTimeout(()=>{addEventListener("popstate",e[a]),addEventListener("scroll",e[m],{passive:!0}),document.body.addEventListener("click",e[r]),e.navigation||document.addEventListener("visibilitychange",e[c],{passive:!0})},0)}},yt=C(pt,"s_DyVc0YBIqQU"),ht=()=>{{const[t,e]=Le().chunkForSymbol(yt.getSymbol(),null),n=Te+"build/"+e;return`(${vt.toString()})('${n}','${t}');`}},vt=async(t,e)=>{var n;if(!window._qcs&&history.scrollRestoration==="manual"){window._qcs=!0;const o=(n=history.state)==null?void 0:n._qCityScroll;o&&window.scrollTo(o.x,o.y);const s=document.currentScript;(await import(t))[e](s)}},qt=()=>{const t=ht();Se();const e=J("nonce"),n=H(ve);if(n.value&&n.value.length>0){const o=n.value.length;let s=null;for(let i=o-1;i>=0;i--)n.value[i].default&&(s=S(n.value[i].default,{children:s},1,"zl_0"));return S(O,{children:[s,k("script",{dangerouslySetInnerHTML:t},{nonce:e},null,3,null)]},1,"zl_1")}return Ee},bt=Q(C(qt,"s_e0ssiDXoeAM")),_t=(t,e)=>new URL(t,e.href),wt=(t,e)=>t.origin===e.origin,gt=(t,e)=>t.pathname+t.search===e.pathname+e.search,jt=t=>t&&typeof t.then=="function",kt=(t,e,n,o)=>{const s=_e(),a={head:s,withLocale:r=>le(o,r),resolveValue:r=>{const c=r.__id;if(r.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const m=t.loaders[c];if(jt(m))throw new Error("Loaders returning a function can not be referred to in the head function.");return m},...e};for(let r=n.length-1;r>=0;r--){const c=n[r]&&n[r].head;c&&(typeof c=="function"?ue(s,le(o,()=>c(a))):typeof c=="object"&&ue(s,c))}return a.head},ue=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),F(t.meta,e.meta),F(t.links,e.links),F(t.styles,e.styles),F(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},F=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const o=t.findIndex(s=>s.key===n.key);if(o>-1){t[o]=n;continue}}t.push(n)}},_e=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});let me;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(me||(me={}));const xt=()=>H(qe),St=()=>H(be),Et=()=>fe(J("qwikcity")),It=":root{view-transition-name:none}",Ct=async(t,e)=>{const[n,o,s,i]=pe(),{type:a="link",forceReload:r=t===void 0,replaceState:c=!1,scroll:m=!0}=typeof e=="object"?e:{forceReload:e},u=s.value.dest,f=t===void 0?u:_t(t,i.url);if(wt(f,u)&&!(!r&&gt(f,u)))return s.value={type:a,dest:f,forceReload:r,replaceState:c,scroll:m},n.value=void 0,i.isNavigating=!0,new Promise(b=>{o.r=b})},Nt=({track:t})=>{const[e,n,o,s,i,a,r,c,m,u,f]=pe();async function b(){const[w,y]=t(()=>[u.value,e.value]),d=De(""),v=f.url,_=y?"form":w.type;w.replaceState;let l,p,g=null;if(l=new URL(w.dest,f.url),g=i.loadedRoute,p=i.response,g){const[P,T,D,Y]=g,A=D,q=A[A.length-1];f.prevUrl=v,f.url=l,f.params={...T},u.untrackedValue={type:_,dest:l};const h=kt(p,f,A,d);n.headings=q.headings,n.menu=Y,o.value=fe(A),s.links=h.links,s.meta=h.meta,s.styles=h.styles,s.scripts=h.scripts,s.title=h.title,s.frontmatter=h.frontmatter}}return b()},At=t=>{Ie(C(It,"s_RPDJAz33WLA"));const e=Et();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const n=J("url");if(!n)throw new Error("Missing Qwik URL Env Data");const o=new URL(n),s=z({url:o,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),i={},a=Ce(z(e.response.loaders,{deep:!1})),r=$({type:"initial",dest:o,forceReload:!1,replaceState:!1,scroll:!0}),c=z(_e),m=z({headings:void 0,menu:void 0}),u=$(),f=e.response.action,b=f?e.response.loaders[f]:void 0,E=$(b?{id:f,data:e.response.formData,output:{result:b,status:e.response.status}}:void 0),w=C(Ct,"s_fX0bDjeJa0E",[E,i,r,s]);return I(ut,m),I(ve,u),I(qe,c),I(be,s),I(mt,w),I(lt,a),I(dt,E),I(ft,r),Ne(C(Nt,"s_02wMImzEAbk",[E,m,u,c,e,w,a,i,t,r,s])),S(Ae,null,3,"qY_0")},Lt=Q(C(At,"s_TxCFOy819ag")),Tt=t=>k("script",{nonce:de(t,"nonce")},{dangerouslySetInnerHTML:at},null,3,"1Z_0"),Dt=()=>{const t=xt(),e=St();return S(O,{children:[k("title",null,null,t.title,1,null),k("link",null,{href:Re(n=>n.url.href,[e],"p0.url.href"),rel:"canonical"},null,3,null),k("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),k("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),t.meta.map(n=>M("meta",{...n},null,0,n.key)),t.links.map(n=>M("link",{...n},null,0,n.key)),t.styles.map(n=>M("style",{...n.props,dangerouslySetInnerHTML:de(n,"style")},null,0,n.key))]},1,"0D_0")},Rt=Q(C(Dt,"s_0vphQYqOdZI"));const Pt=()=>S(Lt,{children:[k("head",null,null,[k("meta",null,{charSet:"utf-8"},null,3,null),k("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),k("script",null,{dangerouslySetInnerHTML:`
                        (function() {
                            function setTheme(theme) {
                                document.documentElement.className = theme
                                localStorage.setItem('nw-theme', theme);
                            }

                            var theme = localStorage.getItem('nw-theme');

                            if (theme) {
                                setTheme(theme);
                            } else {
                                setTheme('light')
                            }
                        })();

                        window.addEventListener('load', function() {

                            if (localStorage.getItem('theme')){
                                const btnId = 'theme-btn-' + localStorage.getItem('nw-theme')
console.log(btnId)
                                let activeButton = document.getElementById(btnId) 
                                activeButton.classList.add("visible");
                                activeButton.classList.remove('invisible');

                            } else {
                                document.documentElement.className = 'light'
                                localStorage.setItem('nw-theme', 'light');
                                const themeButtonContainer = document.getElementById('theme-button-container')
                                const themeButtons = themeButtonContainer.querySelectorAll('#theme-button-container > button');
                                
                                for (let themeButton of themeButtons) {
                                    themeButton.classList.add('visible');
                                    themeButton.classList.remove('invisible');
                                }
                            }
                        });
                    `},null,3,null),S(Rt,null,3,"vp_0")],1,null),k("body",null,{lang:"en"},[S(bt,null,3,"vp_1"),S(Tt,null,3,"vp_2")],1,null)]},1,"vp_3"),zt=Q(C(Pt,"s_tntnak2DhJ8"));function Ot(t){return nt(S(zt,null,3,"Qb_0"),{manifest:ct,...t,containerAttributes:{lang:"en-us",...t.containerAttributes}})}export{Ot as default};
