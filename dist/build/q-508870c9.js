import{i as j,f as v,y as Q,t as U,F as V,m as D,a as q,k as y,l as O,e as H,E as K}from"./q-3f4ebff2.js";const Y='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',gt=y("qc-s"),yt=y("qc-c"),mt=y("qc-ic"),x=y("qc-h"),z=y("qc-l"),G=y("qc-n"),Ct=y("qc-a"),Et=y("qc-ir"),pt=D(()=>q(()=>import("./q-663033b0.js"),[]),"s_DyVc0YBIqQU"),_t=()=>{},wt=V(D(()=>q(()=>import("./q-cdd4c91a.js"),["build/q-cdd4c91a.js","build/q-3f4ebff2.js"]),"s_e0ssiDXoeAM")),P=new WeakMap,E=new Map,J="qaction",_=t=>t.pathname+t.search+t.hash,C=(t,e)=>new URL(t,e.href),X=(t,e)=>t.origin===e.origin,B=(t,e)=>t.pathname+t.search===e.pathname+e.search,Z=(t,e)=>t.pathname===e.pathname,$=(t,e)=>t.search===e.search,tt=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+J+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},At=(t,e)=>{const s=t.href;if(typeof s=="string"&&typeof t.target!="string"&&!t.reload)try{const n=C(s.trim(),e.url),r=C("",e.url);if(X(n,r))return _(n)}catch(n){console.error(n)}else if(t.reload)return _(C("",e.url));return null},St=(t,e,s)=>{if(t.prefetch===!0&&e){const n=C(e,s.url),r=C("",s.url);if(!Z(n,r)||!$(n,r))return""}return null},et=t=>t&&typeof t.then=="function",vt=(t,e,s,n)=>{const r=nt(),o={head:r,withLocale:c=>O(n,c),resolveValue:c=>{const i=c.__id;if(c.__brand==="server_loader"&&!(i in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=t.loaders[i];if(et(l))throw new Error("Loaders returning a function can not be referred to in the head function.");return l},...e};for(let c=s.length-1;c>=0;c--){const i=s[c]&&s[c].head;i&&(typeof i=="function"?k(r,O(n,()=>i(o))):typeof i=="object"&&k(r,i))}return o.head},k=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),p(t.meta,e.meta),p(t.links,e.links),p(t.styles,e.styles),p(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},p=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(r=>r.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},nt=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function st(t,e){const s=L(t),n=b(t),r=L(e),a=b(e);return F(t,s,n,e,r,a)}function F(t,e,s,n,r,a){let o=null;for(;e<s;){const c=t.charCodeAt(e++),i=n.charCodeAt(r++);if(c===91){const l=M(t,e),f=e+(l?3:0),h=A(t,f,s,93),u=t.substring(f,h),g=A(t,h+1,s,47),d=t.substring(h+1,g);e=h+1;const m=r-1;if(l){const R=ot(u,d,n,m,a,t,e+d.length+1,s);if(R)return Object.assign(o||(o={}),R)}const w=A(n,m,a,47,d);if(w==-1)return null;const T=n.substring(m,w);if(!l&&!d&&!T)return null;r=w,(o||(o={}))[u]=decodeURIComponent(T)}else if(c!==i&&!(isNaN(i)&&rt(t,e)))return null}return N(t,e)&&N(n,r)?o||{}:null}function rt(t,e){return t.charCodeAt(e)===91&&M(t,e+1)}function b(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function N(t,e){const s=t.length;return e>=s||e==s-1&&t.charCodeAt(e)===47}function L(t){return t.charCodeAt(0)===47?1:0}function M(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function A(t,e,s,n,r=""){for(;e<s&&t.charCodeAt(e)!==n;)e++;const a=r.length;for(let o=0;o<a;o++)if(t.charCodeAt(e-a+o)!==r.charCodeAt(o))return-1;return e-a}let I;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(I||(I={}));function ot(t,e,s,n,r,a,o,c){s.charCodeAt(n)===47&&n++;let i=r;const l=e+"/";let f=5;for(;i>=n&&f--;){const h=F(a,o,c,s,i,r);if(h){let u=s.substring(n,Math.min(i,r));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),h[t]=decodeURIComponent(u),h}i=at(s,n,l,i,n-1)+l.length}return null}function at(t,e,s,n,r){let a=t.lastIndexOf(s,n);return a==n-s.length&&(a=t.lastIndexOf(s,n-s.length-1)),a>e?a:r}const Dt=async(t,e,s,n)=>{if(Array.isArray(t))for(const r of t){const a=r[0],o=st(a,n);if(o){const c=r[1],i=r[3],l=new Array(c.length),f=[],h=ct(e,n);let u;return c.forEach((g,d)=>{W(g,f,m=>l[d]=m,s)}),W(h,f,g=>u=g==null?void 0:g.default,s),f.length>0&&await Promise.all(f),[a,o,l,u,i]}}return null},W=(t,e,s,n)=>{if(typeof t=="function"){const r=P.get(t);if(r)s(r);else{const a=t();typeof a.then=="function"?e.push(a.then(o=>{n!==!1&&P.set(t,o),s(o)})):a&&s(a)}}},ct=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},qt=(t,e,s,n,r=!1)=>{if(e!=="popstate"){const a=B(s,n),o=s.hash===n.hash;if(!a||!o){const c={_qCityScroll:it()};r?t.history.replaceState(c,"",_(n)):t.history.pushState(c,"",_(n))}}},it=()=>({x:0,y:0,w:0,h:0}),lt=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},ft=async(t,e,s,n)=>{const r=t.pathname,a=t.search,o=tt(r,a,n);let c;n||(c=E.get(o)),lt({links:[r]});let i;if(!c){const l=ht(n);n&&(n.data=void 0),c=fetch(o,l).then(f=>{const h=new URL(f.url),u=h.pathname.endsWith("/q-data.json");if(h.origin!==location.origin||!u){location.href=h.href;return}if((f.headers.get("content-type")||"").includes("json"))return f.text().then(g=>{const d=j(g,e);if(!d){location.href=t.href;return}if(s&&E.delete(o),d.redirect)location.href=d.redirect;else if(n){const m=d.loaders[n.id];i=()=>{n.resolve({status:f.status,result:m})}}return d});location.href=t.href}),n||E.set(o,c)}return c.then(l=>(l||E.delete(o),i&&i(),l))},ht=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Tt=()=>v(x),Rt=()=>v(z),Ot=()=>v(G),Pt=()=>Q(U("qwikcity")),kt=(t,e,s,n)=>{t==="popstate"&&n?window.scrollTo(n.x,n.y):t==="link"&&(ut(e,s)||window.scrollTo(0,0))},ut=(t,e)=>{const s=t.hash.slice(1),n=s&&document.getElementById(s);return n?(n.scrollIntoView(),!0):!!(!n&&t.hash&&B(t,e))},bt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),Nt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},Lt=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},It=V(D(()=>q(()=>import("./q-01ef92c8.js"),["build/q-01ef92c8.js","build/q-3f4ebff2.js"]),"s_TxCFOy819ag"));function Wt(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const jt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(S||(S=innerWidth),(!e||e&&S<520)&&ft(new URL(t.href),t))};let S=0;const Vt=t=>H("script",{nonce:K(t,"nonce")},{dangerouslySetInnerHTML:Y},null,3,"1Z_0"),Bt=async function*(t,e,s){const n=t.getReader();try{let r="";const a=new TextDecoder;for(;!(s!=null&&s.aborted);){const o=await n.read();if(o.done)break;r+=a.decode(o.value,{stream:!0});const c=r.split(/\n/);r=c.pop();for(const i of c)yield await j(i,e)}}finally{n.releaseLock()}};export{Tt as A,_t as B,yt as C,x as D,wt as E,Bt as F,jt as G,It as Q,z as R,Vt as S,Rt as a,St as b,nt as c,mt as d,G as e,gt as f,At as g,Ct as h,Et as i,X as j,B as k,Nt as l,ft as m,Dt as n,Pt as o,Z as p,vt as q,kt as r,E as s,C as t,Ot as u,Lt as v,bt as w,pt as x,qt as y,Wt as z};
