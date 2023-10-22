import{j as k,_ as ke,a as je,F as O,s as xe,c as B,i as C,b as j,d as me,e as Se,u as H,f as V,g as S,S as Ee,h as Ie,k as z,l as Ce,m as M,n as I,o as Ae,p as Ne,q as Le,r as pe,t as A,v as Te,w as fe,x as Re,y as le,z as De,A as K}from"./assets/@qwik-city-plan-a1c1e09c.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.13
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var Pe=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});function ze(t,e){const n=e==null?void 0:e.mapper,o=t.symbolMapper?t.symbolMapper:i=>{var c;if(n){const r=W(i),a=n[r];if(!a){if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return a}};return{isServer:!0,async importSymbol(i,c,r){var q;const a=W(r),d=(q=globalThis.__qwik_reg_symbols)==null?void 0:q.get(a);if(d)return d;let u=String(c);u.endsWith(".js")||(u+=".js");const p=Pe(u);if(!(r in p))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${u}'.`);return p[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(c=>{setTimeout(()=>{c(i())})}),chunkForSymbol(i){return o(i,n)}}}async function Fe(t,e){const n=ze(t,e);xe(n)}var W=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function U(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function ye(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Oe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,Be=`(() => {
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
})();`,Qe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
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
})();`;function Me(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?$e:Qe).replace("window.qEvents",JSON.stringify(t.events)):t.debug?Be:Oe}function Ke(t,e,n){if(!n)return[];const o=e.prefetchStrategy,s=ye(e);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return Ue(t,n,s);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function Ue(t,e,n){const o=[],s=t==null?void 0:t.qrls,{mapper:i,manifest:c}=e,r=new Map;if(Array.isArray(s))for(const a of s){const d=a.getHash(),u=i[d];u&&ve(c,r,o,n,u[1])}return o}function ve(t,e,n,o,s){const i=o+s;let c=e.get(i);if(!c){c={url:i,imports:[]},e.set(i,c);const r=t.bundles[s];if(r&&Array.isArray(r.imports))for(const a of r.imports)ve(t,e,c.imports,o,a)}n.push(c)}function We(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function J(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function Je(t){const e={bundles:Q(t).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function Q(t){const e=[],n=o=>{if(Array.isArray(o))for(const s of o)e.includes(s.url)||(e.push(s.url),n(s.imports))};return n(t),e}function He(t){const e=new Map;let n=0;const o=(r,a)=>{if(Array.isArray(r))for(const d of r){const u=e.get(d.url)||0;e.set(d.url,u+1),n++,a.has(d.url)||(a.add(d.url),o(d.imports,a))}},s=new Set;for(const r of t)s.clear(),o(r.imports,s);const i=n/e.size*2,c=Array.from(e.entries());return c.sort((r,a)=>a[1]-r[1]),c.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Ve(t,e,n){const o=et(t==null?void 0:t.implementation),s=[];return o.prefetchEvent==="always"&&Ye(s,e,n),o.linkInsert==="html-append"&&Ze(s,e,o),o.linkInsert==="js-append"?Xe(s,e,o,n):o.workerFetchInsert==="always"&&Ge(s,e,n),s.length>0?k(O,{children:s}):null}function Ye(t,e,n){const o=He(e);for(const s of o)t.push(k("link",{rel:"modulepreload",href:s,nonce:n}));t.push(k("script",{dangerouslySetInnerHTML:Je(e),nonce:n}))}function Ze(t,e,n){const o=Q(e),s=n.linkRel||"prefetch";for(const i of o){const c={};c.href=i,c.rel=s,(s==="prefetch"||s==="preload")&&i.endsWith(".js")&&(c.as="script"),t.push(k("link",c,void 0))}}function Xe(t,e,n,o){const s=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(Q(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${s}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${s}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=J(),i+="}"),n.workerFetchInsert==="always"&&(i+=J()),t.push(k("script",{type:"module",dangerouslySetInnerHTML:i,nonce:o}))}function Ge(t,e,n){let o=`const u=${JSON.stringify(Q(e))};`;o+=J(),t.push(k("script",{type:"module",dangerouslySetInnerHTML:o,nonce:n}))}function et(t){return t&&typeof t=="object"?t:tt}var tt={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},nt="<!DOCTYPE html>";async function st(t,e){var N;let n=e.stream,o=0,s=0,i=0,c=0,r="",a;const d=((N=e.streaming)==null?void 0:N.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=e.containerTagName??"html",p=e.containerAttributes??{},q=n,E=U(),w=ye(e),y=ot(e.manifest);function m(){r&&(q.write(r),r="",o=0,i++,i===1&&(c=E()))}function b(h){const v=h.length;o+=v,s+=v,r+=h}switch(d.strategy){case"disabled":n={write:b};break;case"direct":n=q;break;case"auto":let h=0,v=!1;const Z=d.maximunChunk??0,$=d.maximunInitialChunk??0;n={write(D){D==="<!--qkssr-f-->"?v||(v=!0):D==="<!--qkssr-pu-->"?h++:D==="<!--qkssr-po-->"?h--:b(D),h===0&&(v||o>=(i===0?$:Z))&&(v=!1,m())}};break}u==="html"?n.write(nt):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"}),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Fe(e,y);const _=y==null?void 0:y.manifest.injections,l=_?_.map(h=>k(h.tag,h.attributes??{})):void 0,f=U(),g=[];let P=0,T=0;await ke(t,{stream:n,containerTagName:u,containerAttributes:p,serverData:e.serverData,base:w,beforeContent:l,beforeClose:async(h,v,Z,$)=>{var te,ne,se,oe,ie,re,ae;P=f();const D=U();a=await je(h,v,void 0,$);const L=[];if(e.prefetchStrategy!==null){const x=Ke(a,e,y);if(x.length>0){const ce=Ve(e.prefetchStrategy,x,(te=e.serverData)==null?void 0:te.nonce);ce&&L.push(ce)}}const we=JSON.stringify(a.state,void 0,void 0);L.push(k("script",{type:"qwik/json",dangerouslySetInnerHTML:it(we),nonce:(ne=e.serverData)==null?void 0:ne.nonce})),a.funcs.length>0&&L.push(k("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:at(a.funcs),nonce:(se=e.serverData)==null?void 0:se.nonce}));const ge=!a||a.mode!=="static",X=((oe=e.qwikLoader)==null?void 0:oe.include)??"auto",G=X==="always"||X==="auto"&&ge;if(G){const x=Me({events:(ie=e.qwikLoader)==null?void 0:ie.events,debug:e.debug});L.push(k("script",{id:"qwikloader",dangerouslySetInnerHTML:x,nonce:(re=e.serverData)==null?void 0:re.nonce}))}const ee=Array.from(v.$events$,x=>JSON.stringify(x));if(ee.length>0){let x=`window.qwikevents.push(${ee.join(", ")})`;G||(x=`window.qwikevents||=[];${x}`),L.push(k("script",{dangerouslySetInnerHTML:x,nonce:(ae=e.serverData)==null?void 0:ae.nonce}))}return rt(g,h),T=D(),k(O,{children:L})},manifestHash:(y==null?void 0:y.manifest.manifestHash)||"dev"}),u!=="html"&&n.write("<!--/cq-->"),m();const R=a.resources.some(h=>h._cache!==1/0);return{prefetchResources:void 0,snapshotResult:a,flushes:i,manifest:y==null?void 0:y.manifest,size:s,isStatic:!R,timing:{render:P,snapshot:T,firstFlush:c},_symbols:g}}function ot(t){if(t){if("mapper"in t)return t;if(t=We(t),t){const e={};return Object.entries(t.mapping).forEach(([n,o])=>{e[W(n)]=[n,o]}),{mapper:e,manifest:t}}}}var it=t=>t.replace(/<(\/?script)/g,"\\x3C$1");function rt(t,e){var n;for(const o of e){const s=(n=o.$componentQrl$)==null?void 0:n.getSymbol();s&&!t.includes(s)&&t.push(s)}}function at(t){return`document.currentScript.qFuncs=[${t.join(`,
`)}]`}const ct={manifestHash:"8wbxnp",symbols:{s_02wMImzEAbk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_0vphqyqodzi",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_8gdLBszqbaM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37211,38862]},s_B0lqk5IDDy4:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_b0lqk5iddy4",hash:"B0lqk5IDDy4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1202,12123]},s_Nk9PlpjQm9Y:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48816,50167]},s_TxCFOy819ag:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[23025,35545]},s_VKFlAWJuVm8:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vkflawjuvm8",hash:"VKFlAWJuVm8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[645,718]},s_WmYC5H00wtI:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35829,37092]},s_cLxhDSZvvW8:{origin:"components/ThemeSelector/themeselector.tsx",displayName:"ThemeSelector_component",canonicalFilename:"s_clxhdszvvw8",hash:"cLxhDSZvvW8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[436,1921]},s_e0ssiDXoeAM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_legqvj0c7j8:{origin:"components/Header/header.tsx",displayName:"Header_component",canonicalFilename:"s_legqvj0c7j8",hash:"legqvj0c7j8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[189,1673]},s_qjE0MXqhvkc:{origin:"components/Contact/contact.tsx",displayName:"Contact_component",canonicalFilename:"s_qje0mxqhvkc",hash:"qjE0MXqhvkc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[126,3862]},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_tntnak2dhj8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[274,2631]},s_RPDJAz33WLA:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44878,46702]},s_BUbtvTyvVRE:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_NDKq0PWrd6U:{origin:"components/ThemeSelector/themeselector.tsx",displayName:"ThemeSelector_component_div_button_onClick",canonicalFilename:"s_ndkq0pwrd6u",hash:"NDKq0PWrd6U",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_cLxhDSZvvW8",loc:[1812,1846]},s_eBQ0vFsFKsk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49123,49820]}},mapping:{s_02wMImzEAbk:"q-881ab343.js",s_0vphQYqOdZI:"q-50432b83.js",s_8gdLBszqbaM:"q-e3ea88cf.js",s_B0lqk5IDDy4:"q-1ed1bf84.js",s_Nk9PlpjQm9Y:"q-aa680f88.js",s_TxCFOy819ag:"q-881ab343.js",s_VKFlAWJuVm8:"q-929faa2b.js",s_WmYC5H00wtI:"q-d96b2666.js",s_cLxhDSZvvW8:"q-5dc4537f.js",s_e0ssiDXoeAM:"q-66c1aaae.js",s_legqvj0c7j8:"q-1dfbde3b.js",s_qjE0MXqhvkc:"q-72f21d01.js",s_tntnak2DhJ8:"q-c0a4361f.js",s_RPDJAz33WLA:"q-881ab343.js",s_A5bZC7WO00A:"q-f8643fb4.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-d43dcb96.js",s_BUbtvTyvVRE:"q-d96b2666.js",s_NDKq0PWrd6U:"q-5dc4537f.js",s_eBQ0vFsFKsk:"q-cb4a385f.js",s_fX0bDjeJa0E:"q-881ab343.js",s_i1Cv0pYJNR0:"q-e3ea88cf.js",s_p9MSze0ojs4:"q-aa680f88.js"},bundles:{"q-1dfbde3b.js":{size:967,imports:["q-2d281541.js","q-660534cd.js","q-e2e295ef.js"],origins:["src/entry_Header.js","src/s_legqvj0c7j8.js"],symbols:["s_legqvj0c7j8"]},"q-1ed1bf84.js":{size:7396,imports:["q-660534cd.js","q-e2995751.js","q-e2e295ef.js"],dynamicImports:["q-1dfbde3b.js"],origins:["src/components/Header/header.tsx","src/entry_routes.js","src/media/me.png?jsx","src/s_b0lqk5iddy4.js"],symbols:["s_B0lqk5IDDy4"]},"q-2d281541.js":{size:343,imports:["q-660534cd.js"],dynamicImports:["q-5dc4537f.js"],origins:["src/components/ThemeSelector/themeselector.tsx"]},"q-50432b83.js":{size:671,imports:["q-660534cd.js","q-bb6ca9f2.js"],origins:["src/entry_RouterHead.js","src/s_0vphqyqodzi.js"],symbols:["s_0vphQYqOdZI"]},"q-5dc4537f.js":{size:1385,imports:["q-2d281541.js","q-660534cd.js","q-e2e295ef.js"],origins:["src/entry_ThemeSelector.js","src/s_clxhdszvvw8.js","src/s_ndkq0pwrd6u.js"],symbols:["s_cLxhDSZvvW8","s_NDKq0PWrd6U"]},"q-660534cd.js":{size:46664,origins:["node_modules/.pnpm/@builder.io+qwik@1.2.13_undici@5.22.1/node_modules/@builder.io/qwik/core.min.mjs"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-66c1aaae.js":{size:462,imports:["q-660534cd.js","q-bb6ca9f2.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-72f21d01.js":{size:2473,imports:["q-660534cd.js","q-e2e295ef.js"],origins:["src/entry_Contact.js","src/s_qje0mxqhvkc.js"],symbols:["s_qjE0MXqhvkc"]},"q-881ab343.js":{size:5586,imports:["q-660534cd.js","q-bb6ca9f2.js"],dynamicImports:["q-a646baae.js","q-c49ffd66.js","q-e2995751.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-8ea06850.js":{size:2539,origins:["node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-929faa2b.js":{size:305,imports:["q-660534cd.js"],dynamicImports:["q-72f21d01.js"],origins:["src/components/Contact/contact.tsx","src/entry_layout.js","src/s_vkflawjuvm8.js"],symbols:["s_VKFlAWJuVm8"]},"q-a646baae.js":{size:125,imports:["q-660534cd.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-aa680f88.js":{size:1037,imports:["q-660534cd.js","q-bb6ca9f2.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-bb6ca9f2.js":{size:7500,imports:["q-660534cd.js"],dynamicImports:["q-663033b0.js","q-66c1aaae.js","q-881ab343.js"],origins:["@qwik-city-sw-register","node_modules/.pnpm/@builder.io+qwik-city@1.2.13/node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-c0a4361f.js":{size:2235,imports:["q-660534cd.js","q-bb6ca9f2.js"],dynamicImports:["q-50432b83.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_tntnak2dhj8.js"],symbols:["s_tntnak2DhJ8"]},"q-c49ffd66.js":{size:288,imports:["q-660534cd.js"],dynamicImports:["q-929faa2b.js"],origins:["src/routes/layout.tsx"]},"q-cb4a385f.js":{size:128,imports:["q-660534cd.js","q-bb6ca9f2.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-d43dcb96.js":{size:889,imports:["q-660534cd.js","q-bb6ca9f2.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-d96b2666.js":{size:787,imports:["q-660534cd.js","q-bb6ca9f2.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-e2995751.js":{size:1684,imports:["q-660534cd.js"],dynamicImports:["q-1ed1bf84.js"],origins:["src/media/halloween.png?jsx","src/media/mapping-movement.png?jsx","src/media/rb4r.png?jsx","src/routes/index.tsx"]},"q-e2e295ef.js":{size:8094,origins:["src/styled-system/css/conditions.mjs","src/styled-system/css/css.mjs"]},"q-e3ea88cf.js":{size:1144,imports:["q-660534cd.js","q-bb6ca9f2.js"],dynamicImports:["q-cb4a385f.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-f8159763.js":{size:202,imports:["q-660534cd.js"],dynamicImports:["q-c0a4361f.js"],origins:["src/global.css","src/root.tsx"]},"q-f8643fb4.js":{size:751,imports:["q-660534cd.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/build/q-4e01070d.css"}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.13",vite:"",rollup:"3.29.2",env:"node",os:"darwin",node:"18.16.0"}},lt='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',ut=A("qc-s"),dt=A("qc-c"),be=A("qc-ic"),he=A("qc-h"),qe=A("qc-l"),mt=A("qc-n"),pt=A("qc-a"),ft=A("qc-ir"),yt=t=>{const e=window,n=location.pathname+location.search,o="_qCitySPA",s="_qCityHistoryPatch",i="_qCityBootstrap",c="_qCityInitPopstate",r="_qCityInitAnchors",a="_qCityInitVisibility",d="_qCityInitScroll",u="_qCityScrollEnabled",p="_qCityScrollDebounce",q="_qCityScroll",E=m=>{m&&e.scrollTo(m.x,m.y)},w=()=>{const m=document.documentElement;return{x:m.scrollLeft,y:m.scrollTop,w:Math.max(m.scrollWidth,m.clientWidth),h:Math.max(m.scrollHeight,m.clientHeight)}},y=m=>{const b=history.state||{};b[q]=m||w(),history.replaceState(b,"")};if(!e[o]&&!e[c]&&!e[r]&&!e[a]&&!e[d]){if(y(),e[c]=()=>{var m;if(!e[o]){if(e[u]=!1,clearTimeout(e[p]),n!==location.pathname+location.search){const _=t.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');if(_){const l=_.closest("[q\\:container]"),f=_.cloneNode();f.setAttribute("q:nbs",""),f.style.display="none",l.appendChild(f),e[i]=f,f.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const b=(m=history.state)==null?void 0:m[q];E(b),e[u]=!0}}},!e[s]){e[s]=!0;const m=history.pushState,b=history.replaceState,_=l=>(l===null||typeof l>"u"?l={}:(l==null?void 0:l.constructor)!==Object&&(l={_data:l}),l._qCityScroll=l._qCityScroll||w(),l);history.pushState=(l,f,g)=>(l=_(l),m.call(history,l,f,g)),history.replaceState=(l,f,g)=>(l=_(l),b.call(history,l,f,g))}e[r]=m=>{if(e[o]||m.defaultPrevented)return;const b=m.target.closest("a[href]");if(b&&!b.hasAttribute("preventdefault:click")){const _=b.getAttribute("href"),l=new URL(location.href),f=new URL(_,l),g=f.origin===l.origin,P=f.pathname+f.search===l.pathname+l.search;if(g&&P)if(m.preventDefault(),f.href!==l.href&&history.pushState(null,"",f),!f.hash)f.href.endsWith("#")?window.scrollTo(0,0):(e[u]=!1,clearTimeout(e[p]),y({...w(),x:0,y:0}),location.reload());else{const T=f.hash.slice(1),R=document.getElementById(T);R&&R.scrollIntoView()}}},e[a]=()=>{!e[o]&&e[u]&&document.visibilityState==="hidden"&&y()},e[d]=()=>{e[o]||!e[u]||(clearTimeout(e[p]),e[p]=setTimeout(()=>{y(),e[p]=void 0},200))},e[u]=!0,setTimeout(()=>{addEventListener("popstate",e[c]),addEventListener("scroll",e[d],{passive:!0}),document.body.addEventListener("click",e[r]),e.navigation||document.addEventListener("visibilitychange",e[a],{passive:!0})},0)}},vt=C(yt,"s_DyVc0YBIqQU"),bt=()=>{{const[t,e]=Le().chunkForSymbol(vt.getSymbol(),null),n=Te+"build/"+e;return`(${ht.toString()})('${n}','${t}');`}},ht=async(t,e)=>{var n;if(!window._qcs&&history.scrollRestoration==="manual"){window._qcs=!0;const o=(n=history.state)==null?void 0:n._qCityScroll;o&&window.scrollTo(o.x,o.y);const s=document.currentScript;(await import(t))[e](s)}},qt=()=>{const t=bt();Se();const e=H("nonce"),n=V(be);if(n.value&&n.value.length>0){const o=n.value.length;let s=null;for(let i=o-1;i>=0;i--)n.value[i].default&&(s=S(n.value[i].default,{children:s},1,"zl_0"));return S(O,{children:[s,j("script",{dangerouslySetInnerHTML:t},{nonce:e},null,3,null)]},1,"zl_1")}return Ee},_t=B(C(qt,"s_e0ssiDXoeAM")),wt=(t,e)=>new URL(t,e.href),gt=(t,e)=>t.origin===e.origin,kt=(t,e)=>t.pathname+t.search===e.pathname+e.search,jt=t=>t&&typeof t.then=="function",xt=(t,e,n,o)=>{const s=_e(),c={head:s,withLocale:r=>le(o,r),resolveValue:r=>{const a=r.__id;if(r.__brand==="server_loader"&&!(a in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const d=t.loaders[a];if(jt(d))throw new Error("Loaders returning a function can not be referred to in the head function.");return d},...e};for(let r=n.length-1;r>=0;r--){const a=n[r]&&n[r].head;a&&(typeof a=="function"?ue(s,le(o,()=>a(c))):typeof a=="object"&&ue(s,a))}return c.head},ue=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),F(t.meta,e.meta),F(t.links,e.links),F(t.styles,e.styles),F(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},F=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const o=t.findIndex(s=>s.key===n.key);if(o>-1){t[o]=n;continue}}t.push(n)}},_e=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});let de;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(de||(de={}));const St=()=>V(he),Et=()=>V(qe),It=()=>pe(H("qwikcity")),Ct=":root{view-transition-name:none}",At=async(t,e)=>{const[n,o,s,i]=fe(),{type:c="link",forceReload:r=t===void 0,replaceState:a=!1,scroll:d=!0}=typeof e=="object"?e:{forceReload:e},u=s.value.dest,p=t===void 0?u:wt(t,i.url);if(gt(p,u)&&!(!r&&kt(p,u)))return s.value={type:c,dest:p,forceReload:r,replaceState:a,scroll:d},n.value=void 0,i.isNavigating=!0,new Promise(q=>{o.r=q})},Nt=({track:t})=>{const[e,n,o,s,i,c,r,a,d,u,p]=fe();async function q(){const[w,y]=t(()=>[u.value,e.value]),m=Re(""),b=p.url,_=y?"form":w.type;w.replaceState;let l,f,g=null;if(l=new URL(w.dest,p.url),g=i.loadedRoute,f=i.response,g){const[P,T,R,Y]=g,N=R,h=N[N.length-1];p.prevUrl=b,p.url=l,p.params={...T},u.untrackedValue={type:_,dest:l};const v=xt(f,p,N,m);n.headings=h.headings,n.menu=Y,o.value=pe(N),s.links=v.links,s.meta=v.meta,s.styles=v.styles,s.scripts=v.scripts,s.title=v.title,s.frontmatter=v.frontmatter}}return q()},Lt=t=>{Ie(C(Ct,"s_RPDJAz33WLA"));const e=It();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const n=H("url");if(!n)throw new Error("Missing Qwik URL Env Data");const o=new URL(n),s=z({url:o,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),i={},c=Ce(z(e.response.loaders,{deep:!1})),r=M({type:"initial",dest:o,forceReload:!1,replaceState:!1,scroll:!0}),a=z(_e),d=z({headings:void 0,menu:void 0}),u=M(),p=e.response.action,q=p?e.response.loaders[p]:void 0,E=M(q?{id:p,data:e.response.formData,output:{result:q,status:e.response.status}}:void 0),w=C(At,"s_fX0bDjeJa0E",[E,i,r,s]);return I(dt,d),I(be,u),I(he,a),I(qe,s),I(mt,w),I(ut,c),I(pt,E),I(ft,r),Ae(C(Nt,"s_02wMImzEAbk",[E,d,u,a,e,w,c,i,t,r,s])),S(Ne,null,3,"qY_0")},Tt=B(C(Lt,"s_TxCFOy819ag")),Rt=t=>j("script",{nonce:me(t,"nonce")},{dangerouslySetInnerHTML:lt},null,3,"1Z_0"),Dt=()=>{const t=St(),e=Et();return S(O,{children:[j("title",null,null,t.title,1,null),j("link",null,{href:De(n=>n.url.href,[e],"p0.url.href"),rel:"canonical"},null,3,null),j("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),j("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),t.meta.map(n=>K("meta",{...n},null,0,n.key)),t.links.map(n=>K("link",{...n},null,0,n.key)),t.styles.map(n=>K("style",{...n.props,dangerouslySetInnerHTML:me(n,"style")},null,0,n.key))]},1,"0D_0")},Pt=B(C(Dt,"s_0vphQYqOdZI"));const zt=()=>S(Tt,{children:[j("head",null,null,[j("meta",null,{charSet:"utf-8"},null,3,null),j("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),j("script",null,{dangerouslySetInnerHTML:`
                        (function() {
                            function setTheme(theme) {
                                document.documentElement.className = theme;
                                localStorage.setItem('theme', theme);
                            }

                            var theme = localStorage.getItem('theme');
                            console.log(theme);

                            if (theme) {
                                setTheme(theme);
                            }
                        })();

                        window.addEventListener('load', function() {

                            if (localStorage.getItem('theme')){
                                const btnId = 'theme-btn-' + localStorage.getItem('theme')
                                let activeButton = document.getElementById(btnId) 
                                activeButton.classList.add("visible");
                                activeButton.classList.remove('invisible');

                            } else {
                                const themeButtonContainer = document.getElementById('theme-button-container')
                                const themeButtons = themeButtonContainer.querySelectorAll('#theme-button-container > button');
                                
                                for (let themeButton of themeButtons) {
                                    themeButton.classList.add('visible');
                                    themeButton.classList.remove('invisible');
                                }
                            }
                        });
                    `},null,3,null),S(Pt,null,3,"vp_0")],1,null),j("body",null,{lang:"en"},[S(_t,null,3,"vp_1"),S(Rt,null,3,"vp_2")],1,null)]},1,"vp_3"),Ft=B(C(zt,"s_tntnak2DhJ8"));function Bt(t){return st(S(Ft,null,3,"Qb_0"),{manifest:ct,...t,containerAttributes:{lang:"en-us",...t.containerAttributes}})}export{Bt as default};
