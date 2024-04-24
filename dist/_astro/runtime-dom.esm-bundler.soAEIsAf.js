import{k as nt,l as _,j as gt,B as vt,m as R,n as St,p as Ct,q as At,s as Et,u as w,v as bt,x as Tt,y as Nt,z as st,A as Lt,C as Mt,D as _t,E as it,G as wt}from"./runtime-core.esm-bundler.ZiZF1CeP.js";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dt="http://www.w3.org/2000/svg",It="http://www.w3.org/1998/Math/MathML",v=typeof document<"u"?document:null,G=v&&v.createElement("template"),Ot={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?v.createElementNS(Dt,t):e==="mathml"?v.createElementNS(It,t):v.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>v.createTextNode(t),createComment:t=>v.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>v.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,a){const r=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{G.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const c=G.content;if(s==="svg"||s==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}e.insertBefore(c,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},h="transition",T="animation",L=Symbol("_vtc"),ot=(t,{slots:e})=>gt(vt,Pt(t),e);ot.displayName="Transition";const rt={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ot.props=R({},St,rt);const C=(t,e=[])=>{w(t)?t.forEach(n=>n(...e)):t&&t(...e)},j=t=>t?w(t)?t.some(e=>e.length>1):t.length>1:!1;function Pt(t){const e={};for(const o in t)o in rt||(e[o]=t[o]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:f=a,appearActiveClass:l=r,appearToClass:u=c,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,b=Rt(i),ft=b&&b[0],ut=b&&b[1],{onBeforeEnter:$,onEnter:B,onEnterCancelled:H,onLeave:x,onLeaveCancelled:pt,onBeforeAppear:mt=$,onAppear:dt=B,onAppearCancelled:ht=H}=e,D=(o,p,S)=>{A(o,p?u:c),A(o,p?l:r),S&&S()},F=(o,p)=>{o._isLeaving=!1,A(o,m),A(o,E),A(o,d),p&&p()},z=o=>(p,S)=>{const q=o?dt:B,y=()=>D(p,o,S);C(q,[p,y]),W(()=>{A(p,o?f:a),g(p,o?u:c),j(q)||V(p,s,ft,y)})};return R(e,{onBeforeEnter(o){C($,[o]),g(o,a),g(o,r)},onBeforeAppear(o){C(mt,[o]),g(o,f),g(o,l)},onEnter:z(!1),onAppear:z(!0),onLeave(o,p){o._isLeaving=!0;const S=()=>F(o,p);g(o,m),Ht(),g(o,d),W(()=>{o._isLeaving&&(A(o,m),g(o,E),j(x)||V(o,s,ut,S))}),C(x,[o,S])},onEnterCancelled(o){D(o,!1),C(H,[o])},onAppearCancelled(o){D(o,!0),C(ht,[o])},onLeaveCancelled(o){F(o),C(pt,[o])}})}function Rt(t){if(t==null)return null;if(Ct(t))return[I(t.enter),I(t.leave)];{const e=I(t);return[e,e]}}function I(t){return bt(t)}function g(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[L]||(t[L]=new Set)).add(e)}function A(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[L];n&&(n.delete(e),n.size||(t[L]=void 0))}function W(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let $t=0;function V(t,e,n,s){const i=t._endId=++$t,a=()=>{i===t._endId&&s()};if(n)return setTimeout(a,n);const{type:r,timeout:c,propCount:f}=Bt(t,e);if(!r)return s();const l=r+"end";let u=0;const m=()=>{t.removeEventListener(l,d),a()},d=E=>{E.target===t&&++u>=f&&m()};setTimeout(()=>{u<f&&m()},c+1),t.addEventListener(l,d)}function Bt(t,e){const n=window.getComputedStyle(t),s=b=>(n[b]||"").split(", "),i=s(`${h}Delay`),a=s(`${h}Duration`),r=K(i,a),c=s(`${T}Delay`),f=s(`${T}Duration`),l=K(c,f);let u=null,m=0,d=0;e===h?r>0&&(u=h,m=r,d=a.length):e===T?l>0&&(u=T,m=l,d=f.length):(m=Math.max(r,l),u=m>0?r>l?h:T:null,d=u?u===h?a.length:f.length:0);const E=u===h&&/\b(transform|all)(,|$)/.test(s(`${h}Property`).toString());return{type:u,timeout:m,propCount:d,hasTransform:E}}function K(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>U(n)+U(t[s])))}function U(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ht(){return document.body.offsetHeight}function xt(t,e,n){const s=t[L];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const X=Symbol("_vod"),Ft=Symbol("_vsh"),zt=Symbol(""),qt=/(^|;)\s*display\s*:/;function yt(t,e,n){const s=t.style,i=_(n);let a=!1;if(n&&!i){if(e)if(_(e))for(const r of e.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&M(s,c,"")}else for(const r in e)n[r]==null&&M(s,r,"");for(const r in n)r==="display"&&(a=!0),M(s,r,n[r])}else if(i){if(e!==n){const r=s[zt];r&&(n+=";"+r),s.cssText=n,a=qt.test(n)}}else e&&t.removeAttribute("style");X in t&&(t[X]=a?s.display:"",t[Ft]&&(s.display="none"))}const J=/\s*!important$/;function M(t,e,n){if(w(n))n.forEach(s=>M(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Gt(t,e);J.test(n)?t.setProperty(st(s),n.replace(J,""),"important"):t[s]=n}}const Q=["Webkit","Moz","ms"],O={};function Gt(t,e){const n=O[e];if(n)return n;let s=Lt(e);if(s!=="filter"&&s in t)return O[e]=s;s=Mt(s);for(let i=0;i<Q.length;i++){const a=Q[i]+s;if(a in t)return O[e]=a}return e}const Y="http://www.w3.org/1999/xlink";function jt(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Y,e.slice(6,e.length)):t.setAttributeNS(Y,e,n);else{const a=_t(e);n==null||a&&!it(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function Wt(t,e,n,s,i,a,r){if(e==="innerHTML"||e==="textContent"){s&&r(s,i,a),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let f=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=it(n):n==null&&l==="string"?(n="",f=!0):l==="number"&&(n=0,f=!0)}try{t[e]=n}catch{}f&&t.removeAttribute(e)}function Vt(t,e,n,s){t.addEventListener(e,n,s)}function Kt(t,e,n,s){t.removeEventListener(e,n,s)}const Z=Symbol("_vei");function Ut(t,e,n,s,i=null){const a=t[Z]||(t[Z]={}),r=a[e];if(s&&r)r.value=s;else{const[c,f]=Xt(e);if(s){const l=a[e]=Yt(s,i);Vt(t,c,l,f)}else r&&(Kt(t,c,r,f),a[e]=void 0)}}const k=/(?:Once|Passive|Capture)$/;function Xt(t){let e;if(k.test(t)){e={};let s;for(;s=t.match(k);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):st(t.slice(2)),e]}let P=0;const Jt=Promise.resolve(),Qt=()=>P||(Jt.then(()=>P=0),P=Date.now());function Yt(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;wt(Zt(s,n.value),e,5,[s])};return n.value=t,n.attached=Qt(),n}function Zt(t,e){if(w(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const tt=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kt=(t,e,n,s,i,a,r,c,f)=>{const l=i==="svg";e==="class"?xt(t,s,l):e==="style"?yt(t,n,s):Tt(e)?Nt(e)||Ut(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):te(t,e,s,l))?Wt(t,e,s,a,r,c,f):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),jt(t,e,s,l))};function te(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&tt(e)&&nt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return tt(e)&&_(n)?!1:e in t}const at=R({patchProp:kt},Ot);let N,et=!1;function ee(){return N||(N=At(at))}function ne(){return N=et?N:Et(at),et=!0,N}const ie=(...t)=>{const e=ee().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=lt(s);if(!i)return;const a=e._component;!nt(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const r=n(i,!1,ct(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e},oe=(...t)=>{const e=ne().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=lt(s);if(i)return n(i,!0,ct(i))},e};function ct(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lt(t){return _(t)?document.querySelector(t):t}export{ot as T,ie as a,oe as c};
