import{l as j,X as v,m as U,V as F,n as y,h as D,_ as q,o as O,k as V,S as H,g as K}from"./q-7bb323a3.js";const X='((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',gt=y("qc-s"),yt=y("qc-c"),mt=y("qc-ic"),Y=y("qc-h"),x=y("qc-l"),z=y("qc-n"),Ct=y("qc-a"),Et=y("qc-ir"),pt=D(()=>q(()=>import("./q-663033b0.js"),[]),"s_DyVc0YBIqQU"),_t=()=>{},wt=V(D(()=>q(()=>import("./q-82957341.js"),["build/q-82957341.js","build/q-7bb323a3.js"]),"s_e0ssiDXoeAM")),P=new WeakMap,E=new Map,G="qaction",_=t=>t.pathname+t.search+t.hash,C=(t,e)=>new URL(t,e.href),J=(t,e)=>t.origin===e.origin,B=(t,e)=>t.pathname+t.search===e.pathname+e.search,Z=(t,e)=>t.pathname===e.pathname,$=(t,e)=>t.search===e.search,tt=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+G+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},St=(t,e)=>{const s=t.href;if(typeof s=="string"&&typeof t.target!="string"&&!t.reload)try{const n=C(s.trim(),e.url),o=C("",e.url);if(J(n,o))return _(n)}catch(n){console.error(n)}else if(t.reload)return _(C("",e.url));return null},At=(t,e,s)=>{if(t.prefetch===!0&&e){const n=C(e,s.url),o=C("",s.url);if(!Z(n,o)||!$(n,o))return""}return null},et=t=>t&&typeof t.then=="function",vt=(t,e,s,n)=>{const o=nt(),r={head:o,withLocale:c=>O(n,c),resolveValue:c=>{const i=c.__id;if(c.__brand==="server_loader"&&!(i in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=t.loaders[i];if(et(l))throw new Error("Loaders returning a function can not be referred to in the head function.");return l},...e};for(let c=s.length-1;c>=0;c--){const i=s[c]&&s[c].head;i&&(typeof i=="function"?k(o,O(n,()=>i(r))):typeof i=="object"&&k(o,i))}return r.head},k=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),p(t.meta,e.meta),p(t.links,e.links),p(t.styles,e.styles),p(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},p=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},nt=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function st(t,e){const s=L(t),n=b(t),o=L(e),a=b(e);return M(t,s,n,e,o,a)}function M(t,e,s,n,o,a){let r=null;for(;e<s;){const c=t.charCodeAt(e++),i=n.charCodeAt(o++);if(c===91){const l=Q(t,e),f=e+(l?3:0),h=S(t,f,s,93),u=t.substring(f,h),g=S(t,h+1,s,47),d=t.substring(h+1,g);e=h+1;const m=o-1;if(l){const T=rt(u,d,n,m,a,t,e+d.length+1,s);if(T)return Object.assign(r||(r={}),T)}const w=S(n,m,a,47,d);if(w==-1)return null;const R=n.substring(m,w);if(!l&&!d&&!R)return null;o=w,(r||(r={}))[u]=decodeURIComponent(R)}else if(c!==i&&!(isNaN(i)&&ot(t,e)))return null}return N(t,e)&&N(n,o)?r||{}:null}function ot(t,e){return t.charCodeAt(e)===91&&Q(t,e+1)}function b(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function N(t,e){const s=t.length;return e>=s||e==s-1&&t.charCodeAt(e)===47}function L(t){return t.charCodeAt(0)===47?1:0}function Q(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function S(t,e,s,n,o=""){for(;e<s&&t.charCodeAt(e)!==n;)e++;const a=o.length;for(let r=0;r<a;r++)if(t.charCodeAt(e-a+r)!==o.charCodeAt(r))return-1;return e-a}let I;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(I||(I={}));function rt(t,e,s,n,o,a,r,c){s.charCodeAt(n)===47&&n++;let i=o;const l=e+"/";let f=5;for(;i>=n&&f--;){const h=M(a,r,c,s,i,o);if(h){let u=s.substring(n,Math.min(i,o));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),h[t]=decodeURIComponent(u),h}i=at(s,n,l,i,n-1)+l.length}return null}function at(t,e,s,n,o){let a=t.lastIndexOf(s,n);return a==n-s.length&&(a=t.lastIndexOf(s,n-s.length-1)),a>e?a:o}const Dt=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const a=o[0],r=st(a,n);if(r){const c=o[1],i=o[3],l=new Array(c.length),f=[],h=ct(e,n);let u;return c.forEach((g,d)=>{W(g,f,m=>l[d]=m,s)}),W(h,f,g=>u=g==null?void 0:g.default,s),f.length>0&&await Promise.all(f),[a,r,l,u,i]}}return null},W=(t,e,s,n)=>{if(typeof t=="function"){const o=P.get(t);if(o)s(o);else{const a=t();typeof a.then=="function"?e.push(a.then(r=>{n!==!1&&P.set(t,r),s(r)})):a&&s(a)}}},ct=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},qt=(t,e,s,n,o=!1)=>{if(e!=="popstate"){const a=B(s,n),r=s.hash===n.hash;if(!a||!r){const c={_qCityScroll:it()};o?t.history.replaceState(c,"",_(n)):t.history.pushState(c,"",_(n))}}},it=()=>({x:0,y:0,w:0,h:0}),lt=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},ft=async(t,e,s,n)=>{const o=t.pathname,a=t.search,r=tt(o,a,n);let c;n||(c=E.get(r)),lt({links:[o]});let i;if(!c){const l=ht(n);n&&(n.data=void 0),c=fetch(r,l).then(f=>{const h=new URL(f.url),u=h.pathname.endsWith("/q-data.json");if(h.origin!==location.origin||!u){location.href=h.href;return}if((f.headers.get("content-type")||"").includes("json"))return f.text().then(g=>{const d=j(g,e);if(!d){location.href=t.href;return}if(s&&E.delete(r),d.redirect)location.href=d.redirect;else if(n){const m=d.loaders[n.id];i=()=>{n.resolve({status:f.status,result:m})}}return d});location.href=t.href}),n||E.set(r,c)}return c.then(l=>(l||E.delete(r),i&&i(),l))},ht=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Rt=()=>v(Y),Tt=()=>v(x),Ot=()=>v(z),Pt=()=>U(F("qwikcity")),kt=(t,e,s,n)=>{t==="popstate"&&n?window.scrollTo(n.x,n.y):t==="link"&&(ut(e,s)||window.scrollTo(0,0))},ut=(t,e)=>{const s=t.hash.slice(1),n=s&&document.getElementById(s);return n?(n.scrollIntoView(),!0):!!(!n&&t.hash&&B(t,e))},bt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),Nt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},Lt=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},It=V(D(()=>q(()=>import("./q-3a426b96.js"),["build/q-3a426b96.js","build/q-7bb323a3.js"]),"s_TxCFOy819ag"));function Wt(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const jt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(A||(A=innerWidth),(!e||e&&A<520)&&ft(new URL(t.href),t))};let A=0;const Vt=t=>H("script",{nonce:K(t,"nonce")},{dangerouslySetInnerHTML:X},null,3,"1Z_0"),Bt=async function*(t,e,s){const n=t.getReader();try{let o="";const a=new TextDecoder;for(;!(s!=null&&s.aborted);){const r=await n.read();if(r.done)break;o+=a.decode(r.value,{stream:!0});const c=o.split(/\n/);o=c.pop();for(const i of c)yield await j(i,e)}}finally{n.releaseLock()}};export{Rt as A,_t as B,yt as C,Y as D,wt as E,Bt as F,jt as G,It as Q,x as R,Vt as S,Tt as a,At as b,nt as c,mt as d,z as e,gt as f,St as g,Ct as h,Et as i,J as j,B as k,Nt as l,ft as m,Dt as n,Z as o,vt as p,E as q,kt as r,Lt as s,C as t,Ot as u,bt as v,pt as w,qt as x,Wt as y,Pt as z};
