import{_ as A,A as Y,b as G,c as at,d as st,U as it,e as lt,X as ct,V as H,y as ut,Q as j,Z as p,t as dt,j as _t,v as M,I as mt,f as vt}from"./q-e306251e.js";import{t as pt,j as K,k as z,r as $,l as tt,m as et,n as Q,o as ft,p as yt,q as ht,s as L,v as w,w as St,x as Ct,y as Et,z as bt,c as qt,C as wt,d as gt,D as Rt,R as Lt,e as At,f as It,h as Pt,i as Dt}from"./q-f0c649a2.js";const kt=":root{view-transition-name:none}";const Tt=()=>A(()=>import("./q-1d9b8b61.js"),["build/q-1d9b8b61.js","build/q-e306251e.js"]),W=[["/",[Tt,()=>A(()=>import("./q-bddea98c.js"),["build/q-bddea98c.js","build/q-e306251e.js"])]]],J=[];const X=!0;const Ut=async(f,n)=>{const[y,S,a,C]=Y(),{type:i="link",forceReload:d=f===void 0,replaceState:_=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=f===void 0?l:pt(f,C.url);if(!K(o,l)){location.href=o.href;return}if(!d&&z(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),$(i,o,new URL(location.href),tt()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:d,replaceState:_,scroll:E},et(o,G()),Q(W,J,X,o.pathname),y.value=void 0,C.isNavigating=!0,new Promise(b=>{S.r=b})},Ht=({track:f})=>{const[n,y,S,a,C,i,d,_,E,l,o]=Y();async function b(){var B;const[u,g]=f(()=>[l.value,n.value]),ot=at(""),I=o.url,m=g?"form":u.type,nt=u.replaceState;let r,R,x=null,P;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let D=Q(W,J,X,r.pathname);P=G();const k=R=await et(r,P,!0,g);if(!k){l.untrackedValue={type:m,dest:r};return}const O=k.href,T=new URL(O,r);ft(T,r)||(r=T,D=Q(W,J,X,r.pathname)),x=await D}if(x){const[D,k,O,T]=x,U=O,rt=U[U.length-1];o.prevUrl=I,o.url=r,o.params={...k},l.untrackedValue={type:m,dest:r};const q=yt(R,o,U,ot);y.headings=rt.headings,y.menu=T,S.value=st(U),a.links=q.links,a.meta=q.meta,a.styles=q.styles,a.scripts=q.scripts,a.title=q.title,a.frontmatter=q.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let F;m==="popstate"&&(F=tt()),u.scroll&&(!u.forceReload||!z(r,I))&&(m==="link"||m==="popstate")&&(document.__q_scroll_restore__=()=>$(m,r,I,F));const Z=R==null?void 0:R.loaders,t=window;if(Z&&Object.assign(d,Z),ht.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,v=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||w(document.documentElement),e);history.pushState=(e,c,V)=>(e=h(e),s.call(history,e,c,V)),history.replaceState=(e,c,V)=>(e=h(e),v.call(history,e,c,V))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const v=s.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const h=v.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if(K(c,e)&&z(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),L({...w(document.documentElement),x:0,y:0}),location.reload();return}i(v.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=w(document.documentElement);L(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=w(document.documentElement);L(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(B=t._qCityBootstrap)==null||B.remove(),t._qCityBootstrap=void 0,St.resolve()}if(m!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=w(document.documentElement);L(s)}Ct(window,m,I,r,nt),it(P).then(()=>{var h;Et(P).setAttribute("q:route",D);const v=w(document.documentElement);L(v),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=_.r)==null||h.call(_)})}}}b()},xt=f=>{lt(M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_RPDJAz33WLA"));const n=bt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=ct("url");if(!y)throw new Error("Missing Qwik URL Env Data");const S=new URL(y),a=H({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=ut(H(n.response.loaders,{deep:!1})),d=j({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),_=H(qt),E=H({headings:void 0,menu:void 0}),l=j(),o=n.response.action,b=o?n.response.loaders[o]:void 0,u=j(b?{id:o,data:n.response.formData,output:{result:b,status:n.response.status}}:void 0),g=M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_fX0bDjeJa0E",[u,C,d,a]);return p(wt,E),p(gt,l),p(Rt,_),p(Lt,a),p(At,g),p(It,i),p(Pt,u),p(Dt,d),dt(M(()=>A(()=>Promise.resolve().then(()=>N),void 0),"s_02wMImzEAbk",[u,E,l,_,n,g,i,C,f,d,a])),_t(mt,null,3,"qY_0")},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:vt,s_02wMImzEAbk:Ht,s_RPDJAz33WLA:kt,s_TxCFOy819ag:xt,s_fX0bDjeJa0E:Ut},Symbol.toStringTag,{value:"Module"}));export{vt as _hW,Ht as s_02wMImzEAbk,kt as s_RPDJAz33WLA,xt as s_TxCFOy819ag,Ut as s_fX0bDjeJa0E};
