const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-Buqnhb1-.js","assets/AboutView-CSIvawM9.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ni(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},gn=[],Je=()=>{},uu=()=>!1,$r=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ri=t=>t.startsWith("onUpdate:"),pe=Object.assign,si=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fu=Object.prototype.hasOwnProperty,G=(t,e)=>fu.call(t,e),j=Array.isArray,mn=t=>jr(t)==="[object Map]",Ta=t=>jr(t)==="[object Set]",B=t=>typeof t=="function",ae=t=>typeof t=="string",Mt=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",Sa=t=>(re(t)||B(t))&&B(t.then)&&B(t.catch),Ra=Object.prototype.toString,jr=t=>Ra.call(t),du=t=>jr(t).slice(8,-1),Aa=t=>jr(t)==="[object Object]",ii=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xn=ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hu=/-(\w)/g,Le=Hr(t=>t.replace(hu,(e,n)=>n?n.toUpperCase():"")),pu=/\B([A-Z])/g,en=Hr(t=>t.replace(pu,"-$1").toLowerCase()),Br=Hr(t=>t.charAt(0).toUpperCase()+t.slice(1)),is=Hr(t=>t?`on${Br(t)}`:""),Ot=(t,e)=>!Object.is(t,e),gr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ca=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ps=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vi;const Vr=()=>Vi||(Vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oi(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ae(r)?yu(r):oi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ae(t)||re(t))return t}const gu=/;(?![^(]*\))/g,mu=/:([^]+)/,_u=/\/\*[^]*?\*\//g;function yu(t){const e={};return t.replace(_u,"").split(gu).forEach(n=>{if(n){const r=n.split(mu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wr(t){let e="";if(ae(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Wr(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bu=ni(vu);function Pa(t){return!!t||t===""}const Oa=t=>!!(t&&t.__v_isRef===!0),Ne=t=>ae(t)?t:t==null?"":j(t)||re(t)&&(t.toString===Ra||!B(t.toString))?Oa(t)?Ne(t.value):JSON.stringify(t,ka,2):String(t),ka=(t,e)=>Oa(e)?ka(t,e.value):mn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[os(r,i)+" =>"]=s,n),{})}:Ta(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>os(n))}:Mt(e)?os(e):re(e)&&!j(e)&&!Aa(e)?String(e):e,os=(t,e="")=>{var n;return Mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Na{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wu(t){return new Na(t)}function Iu(){return Se}let ne;const as=new WeakSet;class Da{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,as.has(this)&&(as.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||La(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wi(this),xa(this);const e=ne,n=Fe;ne=this,Fe=!0;try{return this.fn()}finally{Ua(this),ne=e,Fe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)li(e);this.deps=this.depsTail=void 0,Wi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?as.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Os(this)&&this.run()}get dirty(){return Os(this)}}let Ma=0,Un,Fn;function La(t,e=!1){if(t.flags|=8,e){t.next=Fn,Fn=t;return}t.next=Un,Un=t}function ai(){Ma++}function ci(){if(--Ma>0)return;if(Fn){let e=Fn;for(Fn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Un;){let e=Un;for(Un=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function xa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ua(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),li(r),Eu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Os(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Fa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qn))return;t.globalVersion=qn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Os(t)){t.flags&=-3;return}const n=ne,r=Fe;ne=t,Fe=!0;try{xa(t);const s=t.fn(t._value);(e.version===0||Ot(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ne=n,Fe=r,Ua(t),t.flags&=-3}}function li(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)li(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Eu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fe=!0;const $a=[];function Lt(){$a.push(Fe),Fe=!1}function xt(){const t=$a.pop();Fe=t===void 0?!0:t}function Wi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let qn=0;class Tu{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ui{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!Fe||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Tu(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,ja(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=r)}return n}trigger(e){this.version++,qn++,this.notify(e)}notify(e){ai();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ci()}}}function ja(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ja(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ks=new WeakMap,Kt=Symbol(""),Ns=Symbol(""),zn=Symbol("");function ue(t,e,n){if(Fe&&ne){let r=ks.get(t);r||ks.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ui),s.map=r,s.key=n),s.track()}}function ot(t,e,n,r,s,i){const o=ks.get(t);if(!o){qn++;return}const a=c=>{c&&c.trigger()};if(ai(),e==="clear")o.forEach(a);else{const c=j(t),l=c&&ii(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===zn||!Mt(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(zn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Kt)),mn(t)&&a(o.get(Ns)));break;case"delete":c||(a(o.get(Kt)),mn(t)&&a(o.get(Ns)));break;case"set":mn(t)&&a(o.get(Kt));break}}ci()}function ln(t){const e=z(t);return e===t?e:(ue(e,"iterate",zn),De(t)?e:e.map(fe))}function Kr(t){return ue(t=z(t),"iterate",zn),t}const Su={__proto__:null,[Symbol.iterator](){return cs(this,Symbol.iterator,fe)},concat(...t){return ln(this).concat(...t.map(e=>j(e)?ln(e):e))},entries(){return cs(this,"entries",t=>(t[1]=fe(t[1]),t))},every(t,e){return rt(this,"every",t,e,void 0,arguments)},filter(t,e){return rt(this,"filter",t,e,n=>n.map(fe),arguments)},find(t,e){return rt(this,"find",t,e,fe,arguments)},findIndex(t,e){return rt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rt(this,"findLast",t,e,fe,arguments)},findLastIndex(t,e){return rt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rt(this,"forEach",t,e,void 0,arguments)},includes(...t){return ls(this,"includes",t)},indexOf(...t){return ls(this,"indexOf",t)},join(t){return ln(this).join(t)},lastIndexOf(...t){return ls(this,"lastIndexOf",t)},map(t,e){return rt(this,"map",t,e,void 0,arguments)},pop(){return On(this,"pop")},push(...t){return On(this,"push",t)},reduce(t,...e){return Ki(this,"reduce",t,e)},reduceRight(t,...e){return Ki(this,"reduceRight",t,e)},shift(){return On(this,"shift")},some(t,e){return rt(this,"some",t,e,void 0,arguments)},splice(...t){return On(this,"splice",t)},toReversed(){return ln(this).toReversed()},toSorted(t){return ln(this).toSorted(t)},toSpliced(...t){return ln(this).toSpliced(...t)},unshift(...t){return On(this,"unshift",t)},values(){return cs(this,"values",fe)}};function cs(t,e,n){const r=Kr(t),s=r[e]();return r!==t&&!De(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ru=Array.prototype;function rt(t,e,n,r,s,i){const o=Kr(t),a=o!==t&&!De(t),c=o[e];if(c!==Ru[e]){const f=c.apply(t,i);return a?fe(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,fe(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Ki(t,e,n,r){const s=Kr(t);let i=n;return s!==t&&(De(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,fe(a),c,t)}),s[e](i,...r)}function ls(t,e,n){const r=z(t);ue(r,"iterate",zn);const s=r[e](...n);return(s===-1||s===!1)&&hi(n[0])?(n[0]=z(n[0]),r[e](...n)):s}function On(t,e,n=[]){Lt(),ai();const r=z(t)[e].apply(t,n);return ci(),xt(),r}const Au=ni("__proto__,__v_isRef,__isVue"),Ha=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mt));function Cu(t){Mt(t)||(t=String(t));const e=z(this);return ue(e,"has",t),e.hasOwnProperty(t)}class Ba{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Fu:qa:i?Ka:Wa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=j(e);if(!s){let c;if(o&&(c=Su[n]))return c;if(n==="hasOwnProperty")return Cu}const a=Reflect.get(e,n,he(e)?e:r);return(Mt(n)?Ha.has(n):Au(n))||(s||ue(e,"get",n),i)?a:he(a)?o&&ii(n)?a:a.value:re(a)?s?Ga(a):qr(a):a}}class Va extends Ba{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Gt(i);if(!De(r)&&!Gt(r)&&(i=z(i),r=z(r)),!j(e)&&he(i)&&!he(r))return c?!1:(i.value=r,!0)}const o=j(e)&&ii(n)?Number(n)<e.length:G(e,n),a=Reflect.set(e,n,r,he(e)?e:s);return e===z(s)&&(o?Ot(r,i)&&ot(e,"set",n,r):ot(e,"add",n,r)),a}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ot(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mt(n)||!Ha.has(n))&&ue(e,"has",n),r}ownKeys(e){return ue(e,"iterate",j(e)?"length":Kt),Reflect.ownKeys(e)}}class Pu extends Ba{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ou=new Va,ku=new Pu,Nu=new Va(!0);const Ds=t=>t,fr=t=>Reflect.getPrototypeOf(t);function Du(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=mn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ds:e?Ms:fe;return!e&&ue(i,"iterate",c?Ns:Kt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function dr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mu(t,e){const n={get(s){const i=this.__v_raw,o=z(i),a=z(s);t||(Ot(s,a)&&ue(o,"get",s),ue(o,"get",a));const{has:c}=fr(o),l=e?Ds:t?Ms:fe;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ue(z(s),"iterate",Kt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=z(i),a=z(s);return t||(Ot(s,a)&&ue(o,"has",s),ue(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=z(a),l=e?Ds:t?Ms:fe;return!t&&ue(c,"iterate",Kt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return pe(n,t?{add:dr("add"),set:dr("set"),delete:dr("delete"),clear:dr("clear")}:{add(s){!e&&!De(s)&&!Gt(s)&&(s=z(s));const i=z(this);return fr(i).has.call(i,s)||(i.add(s),ot(i,"add",s,s)),this},set(s,i){!e&&!De(i)&&!Gt(i)&&(i=z(i));const o=z(this),{has:a,get:c}=fr(o);let l=a.call(o,s);l||(s=z(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Ot(i,u)&&ot(o,"set",s,i):ot(o,"add",s,i),this},delete(s){const i=z(this),{has:o,get:a}=fr(i);let c=o.call(i,s);c||(s=z(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ot(i,"delete",s,void 0),l},clear(){const s=z(this),i=s.size!==0,o=s.clear();return i&&ot(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Du(s,t,e)}),n}function fi(t,e){const n=Mu(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Lu={get:fi(!1,!1)},xu={get:fi(!1,!0)},Uu={get:fi(!0,!1)};const Wa=new WeakMap,Ka=new WeakMap,qa=new WeakMap,Fu=new WeakMap;function $u(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ju(t){return t.__v_skip||!Object.isExtensible(t)?0:$u(du(t))}function qr(t){return Gt(t)?t:di(t,!1,Ou,Lu,Wa)}function za(t){return di(t,!1,Nu,xu,Ka)}function Ga(t){return di(t,!0,ku,Uu,qa)}function di(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ju(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function _n(t){return Gt(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function Gt(t){return!!(t&&t.__v_isReadonly)}function De(t){return!!(t&&t.__v_isShallow)}function hi(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Ja(t){return!G(t,"__v_skip")&&Object.isExtensible(t)&&Ca(t,"__v_skip",!0),t}const fe=t=>re(t)?qr(t):t,Ms=t=>re(t)?Ga(t):t;function he(t){return t?t.__v_isRef===!0:!1}function Ya(t){return Xa(t,!1)}function Hu(t){return Xa(t,!0)}function Xa(t,e){return he(t)?t:new Bu(t,e)}class Bu{constructor(e,n){this.dep=new ui,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:fe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||De(e)||Gt(e);e=r?e:z(e),Ot(e,n)&&(this._rawValue=e,this._value=r?e:fe(e),this.dep.trigger())}}function yn(t){return he(t)?t.value:t}const Vu={get:(t,e,n)=>e==="__v_raw"?t:yn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qa(t){return _n(t)?t:new Proxy(t,Vu)}class Wu{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ui(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return La(this,!0),!0}get value(){const e=this.dep.track();return Fa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ku(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new Wu(r,s,n)}const hr={},Tr=new WeakMap;let Bt;function qu(t,e=!1,n=Bt){if(n){let r=Tr.get(n);r||Tr.set(n,r=[]),r.push(t)}}function zu(t,e,n=Z){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:De(O)||s===!1||s===0?at(O,1):at(O);let u,f,p,m,R=!1,P=!1;if(he(t)?(f=()=>t.value,R=De(t)):_n(t)?(f=()=>l(t),R=!0):j(t)?(P=!0,R=t.some(O=>_n(O)||De(O)),f=()=>t.map(O=>{if(he(O))return O.value;if(_n(O))return l(O);if(B(O))return c?c(O,2):O()})):B(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Lt();try{p()}finally{xt()}}const O=Bt;Bt=u;try{return c?c(t,3,[m]):t(m)}finally{Bt=O}}:f=Je,e&&s){const O=f,W=s===!0?1/0:s;f=()=>at(O(),W)}const H=Iu(),L=()=>{u.stop(),H&&H.active&&si(H.effects,u)};if(i&&e){const O=e;e=(...W)=>{O(...W),L()}}let N=P?new Array(t.length).fill(hr):hr;const M=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const W=u.run();if(s||R||(P?W.some((se,ee)=>Ot(se,N[ee])):Ot(W,N))){p&&p();const se=Bt;Bt=u;try{const ee=[W,N===hr?void 0:P&&N[0]===hr?[]:N,m];c?c(e,3,ee):e(...ee),N=W}finally{Bt=se}}}else u.run()};return a&&a(M),u=new Da(f),u.scheduler=o?()=>o(M,!1):M,m=O=>qu(O,!1,u),p=u.onStop=()=>{const O=Tr.get(u);if(O){if(c)c(O,4);else for(const W of O)W();Tr.delete(u)}},e?r?M(!0):N=u.run():o?o(M.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function at(t,e=1/0,n){if(e<=0||!re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,he(t))at(t.value,e,n);else if(j(t))for(let r=0;r<t.length;r++)at(t[r],e,n);else if(Ta(t)||mn(t))t.forEach(r=>{at(r,e,n)});else if(Aa(t)){for(const r in t)at(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&at(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nr(t,e,n,r){try{return r?t(...r):t()}catch(s){zr(s,e,n)}}function Ze(t,e,n,r){if(B(t)){const s=nr(t,e,n,r);return s&&Sa(s)&&s.catch(i=>{zr(i,e,n)}),s}if(j(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ze(t[i],e,n,r));return s}}function zr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Lt(),nr(i,null,10,[t,c,l]),xt();return}}Gu(t,n,s,r,o)}function Gu(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const me=[];let ze=-1;const vn=[];let Et=null,un=0;const Za=Promise.resolve();let Sr=null;function ec(t){const e=Sr||Za;return t?e.then(this?t.bind(this):t):e}function Ju(t){let e=ze+1,n=me.length;for(;e<n;){const r=e+n>>>1,s=me[r],i=Gn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function pi(t){if(!(t.flags&1)){const e=Gn(t),n=me[me.length-1];!n||!(t.flags&2)&&e>=Gn(n)?me.push(t):me.splice(Ju(e),0,t),t.flags|=1,tc()}}function tc(){Sr||(Sr=Za.then(rc))}function Yu(t){j(t)?vn.push(...t):Et&&t.id===-1?Et.splice(un+1,0,t):t.flags&1||(vn.push(t),t.flags|=1),tc()}function qi(t,e,n=ze+1){for(;n<me.length;n++){const r=me[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;me.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nc(t){if(vn.length){const e=[...new Set(vn)].sort((n,r)=>Gn(n)-Gn(r));if(vn.length=0,Et){Et.push(...e);return}for(Et=e,un=0;un<Et.length;un++){const n=Et[un];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,un=0}}const Gn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rc(t){try{for(ze=0;ze<me.length;ze++){const e=me[ze];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),nr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ze<me.length;ze++){const e=me[ze];e&&(e.flags&=-2)}ze=-1,me.length=0,nc(),Sr=null,(me.length||vn.length)&&rc()}}let Re=null,sc=null;function Rr(t){const e=Re;return Re=t,sc=t&&t.type.__scopeId||null,e}function hn(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&no(-1);const i=Rr(e);let o;try{o=t(...s)}finally{Rr(i),r._d&&no(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qt(t,e){if(Re===null)return t;const n=Xr(Re),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Z]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&at(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function jt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Lt(),Ze(c,n,8,[t.el,a,t,e]),xt())}}const Xu=Symbol("_vte"),Qu=t=>t.__isTeleport;function gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ic(t,e){return B(t)?pe({name:t.name},e,{setup:t}):t}function oc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ar(t,e,n,r,s=!1){if(j(t)){t.forEach((R,P)=>Ar(R,e&&(j(e)?e[P]:e),n,r,s));return}if($n(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ar(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Xr(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Z?a.refs={}:a.refs,f=a.setupState,p=z(f),m=f===Z?()=>!1:R=>G(p,R);if(l!=null&&l!==c&&(ae(l)?(u[l]=null,m(l)&&(f[l]=null)):he(l)&&(l.value=null)),B(c))nr(c,a,12,[o,u]);else{const R=ae(c),P=he(c);if(R||P){const H=()=>{if(t.f){const L=R?m(c)?f[c]:u[c]:c.value;s?j(L)&&si(L,i):j(L)?L.includes(i)||L.push(i):R?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else R?(u[c]=o,m(c)&&(f[c]=o)):P&&(c.value=o,t.k&&(u[t.k]=o))};o?(H.id=-1,Te(H,n)):H()}}}Vr().requestIdleCallback;Vr().cancelIdleCallback;const $n=t=>!!t.type.__asyncLoader,ac=t=>t.type.__isKeepAlive;function Zu(t,e){cc(t,"a",e)}function ef(t,e){cc(t,"da",e)}function cc(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Gr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ac(s.parent.vnode)&&tf(r,e,n,s),s=s.parent}}function tf(t,e,n,r){const s=Gr(e,t,r,!0);lc(()=>{si(r[e],s)},n)}function Gr(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lt();const a=rr(n),c=Ze(e,n,t,o);return a(),xt(),c});return r?s.unshift(i):s.push(i),i}}const _t=t=>(e,n=de)=>{(!Yn||t==="sp")&&Gr(t,(...r)=>e(...r),n)},nf=_t("bm"),rf=_t("m"),sf=_t("bu"),of=_t("u"),af=_t("bum"),lc=_t("um"),cf=_t("sp"),lf=_t("rtg"),uf=_t("rtc");function ff(t,e=de){Gr("ec",t,e)}const df="components";function Ls(t,e){return pf(df,t,!0,e)||t}const hf=Symbol.for("v-ndc");function pf(t,e,n=!0,r=!1){const s=Re||de;if(s){const i=s.type;{const a=nd(i,!1);if(a&&(a===e||a===Le(e)||a===Br(Le(e))))return i}const o=zi(s[t]||i[t],e)||zi(s.appContext[t],e);return!o&&r?i:o}}function zi(t,e){return t&&(t[e]||t[Le(e)]||t[Br(Le(e))])}function xs(t,e,n,r){let s;const i=n,o=j(t);if(o||ae(t)){const a=o&&_n(t);let c=!1;a&&(c=!De(t),t=Kr(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?fe(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(re(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const Us=t=>t?Oc(t)?Xr(t):Us(t.parent):null,jn=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Us(t.parent),$root:t=>Us(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fc(t),$forceUpdate:t=>t.f||(t.f=()=>{pi(t.update)}),$nextTick:t=>t.n||(t.n=ec.bind(t.proxy)),$watch:t=>Lf.bind(t)}),us=(t,e)=>t!==Z&&!t.__isScriptSetup&&G(t,e),gf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(us(r,e))return o[e]=1,r[e];if(s!==Z&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==Z&&G(n,e))return o[e]=4,n[e];Fs&&(o[e]=0)}}const u=jn[e];let f,p;if(u)return e==="$attrs"&&ue(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Z&&G(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return us(s,e)?(s[e]=n,!0):r!==Z&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&G(t,o)||us(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(jn,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gi(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fs=!0;function mf(t){const e=fc(t),n=t.proxy,r=t.ctx;Fs=!1,e.beforeCreate&&Ji(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:R,activated:P,deactivated:H,beforeDestroy:L,beforeUnmount:N,destroyed:M,unmounted:O,render:W,renderTracked:se,renderTriggered:ee,errorCaptured:Ce,serverPrefetch:Pe,expose:Oe,inheritAttrs:vt,components:$t,directives:He,filters:Cn}=e;if(l&&_f(l,r,null),o)for(const Y in o){const K=o[Y];B(K)&&(r[Y]=K.bind(n))}if(s){const Y=s.call(n,n);re(Y)&&(t.data=qr(Y))}if(Fs=!0,i)for(const Y in i){const K=i[Y],nt=B(K)?K.bind(n,n):B(K.get)?K.get.bind(n,n):Je,bt=!B(K)&&B(K.set)?K.set.bind(n):Je,Be=xe({get:nt,set:bt});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Be.value,set:ye=>Be.value=ye})}if(a)for(const Y in a)uc(a[Y],r,n,Y);if(c){const Y=B(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(K=>{mr(K,Y[K])})}u&&Ji(u,t,"c");function le(Y,K){j(K)?K.forEach(nt=>Y(nt.bind(n))):K&&Y(K.bind(n))}if(le(nf,f),le(rf,p),le(sf,m),le(of,R),le(Zu,P),le(ef,H),le(ff,Ce),le(uf,se),le(lf,ee),le(af,N),le(lc,O),le(cf,Pe),j(Oe))if(Oe.length){const Y=t.exposed||(t.exposed={});Oe.forEach(K=>{Object.defineProperty(Y,K,{get:()=>n[K],set:nt=>n[K]=nt})})}else t.exposed||(t.exposed={});W&&t.render===Je&&(t.render=W),vt!=null&&(t.inheritAttrs=vt),$t&&(t.components=$t),He&&(t.directives=He),Pe&&oc(t)}function _f(t,e,n=Je){j(t)&&(t=$s(t));for(const r in t){const s=t[r];let i;re(s)?"default"in s?i=dt(s.from||r,s.default,!0):i=dt(s.from||r):i=dt(s),he(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ji(t,e,n){Ze(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function uc(t,e,n,r){let s=r.includes(".")?Sc(n,r):()=>n[r];if(ae(t)){const i=e[t];B(i)&&_r(s,i)}else if(B(t))_r(s,t.bind(n));else if(re(t))if(j(t))t.forEach(i=>uc(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&_r(s,i,t)}}function fc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Cr(c,l,o,!0)),Cr(c,e,o)),re(e)&&i.set(e,c),c}function Cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Cr(t,i,n,!0),s&&s.forEach(o=>Cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=yf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yf={data:Yi,props:Xi,emits:Xi,methods:Dn,computed:Dn,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Dn,directives:Dn,watch:bf,provide:Yi,inject:vf};function Yi(t,e){return e?t?function(){return pe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function vf(t,e){return Dn($s(t),$s(e))}function $s(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?pe(Object.create(null),t,e):e}function Xi(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:pe(Object.create(null),Gi(t),Gi(e??{})):e}function bf(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=ge(t[r],e[r]);return n}function dc(){return{app:null,config:{isNativeTag:uu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wf=0;function If(t,e){return function(r,s=null){B(r)||(r=pe({},r)),s!=null&&!re(s)&&(s=null);const i=dc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:wf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(l,...f)):B(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const m=l._ceVNode||oe(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,Xr(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ze(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=bn;bn=l;try{return u()}finally{bn=f}}};return l}}let bn=null;function mr(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function dt(t,e,n=!1){const r=de||Re;if(r||bn){const s=bn?bn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}const hc={},pc=()=>Object.create(hc),gc=t=>Object.getPrototypeOf(t)===hc;function Ef(t,e,n,r=!1){const s={},i=pc();t.propsDefaults=Object.create(null),mc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:za(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Tf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=z(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Jr(t.emitsOptions,p))continue;const m=e[p];if(c)if(G(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const R=Le(p);s[R]=js(c,a,R,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{mc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!G(e,f)&&((u=en(f))===f||!G(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=js(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!G(e,f))&&(delete i[f],l=!0)}l&&ot(t.attrs,"set","")}function mc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xn(c))continue;const l=e[c];let u;s&&G(s,u=Le(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Jr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=z(n),l=a||Z;for(let u=0;u<i.length;u++){const f=i[u];n[f]=js(s,c,f,l[f],t,!G(l,f))}}return o}function js(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&B(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=rr(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}const Sf=new WeakMap;function _c(t,e,n=!1){const r=n?Sf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const u=f=>{c=!0;const[p,m]=_c(f,e,!0);pe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return re(t)&&r.set(t,gn),gn;if(j(i))for(let u=0;u<i.length;u++){const f=Le(i[u]);Qi(f)&&(o[f]=Z)}else if(i)for(const u in i){const f=Le(u);if(Qi(f)){const p=i[u],m=o[f]=j(p)||B(p)?{type:p}:pe({},p),R=m.type;let P=!1,H=!0;if(j(R))for(let L=0;L<R.length;++L){const N=R[L],M=B(N)&&N.name;if(M==="Boolean"){P=!0;break}else M==="String"&&(H=!1)}else P=B(R)&&R.name==="Boolean";m[0]=P,m[1]=H,(P||G(m,"default"))&&a.push(f)}}const l=[o,a];return re(t)&&r.set(t,l),l}function Qi(t){return t[0]!=="$"&&!xn(t)}const yc=t=>t[0]==="_"||t==="$stable",mi=t=>j(t)?t.map(Ge):[Ge(t)],Rf=(t,e,n)=>{if(e._n)return e;const r=hn((...s)=>mi(e(...s)),n);return r._c=!1,r},vc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yc(s))continue;const i=t[s];if(B(i))e[s]=Rf(s,i,r);else if(i!=null){const o=mi(i);e[s]=()=>o}}},bc=(t,e)=>{const n=mi(e);t.slots.default=()=>n},wc=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Af=(t,e,n)=>{const r=t.slots=pc();if(t.vnode.shapeFlag&32){const s=e._;s?(wc(r,e,n),n&&Ca(r,"_",s,!0)):vc(e,r)}else e&&bc(t,e)},Cf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:wc(s,e,n):(i=!e.$stable,vc(e,s)),o=e}else e&&(bc(t,e),o={default:1});if(i)for(const a in s)!yc(a)&&o[a]==null&&delete s[a]},Te=Bf;function Pf(t){return Of(t)}function Of(t,e){const n=Vr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=Je,insertStaticContent:R}=t,P=(d,h,g,_=null,b=null,v=null,T=void 0,E=null,I=!!h.dynamicChildren)=>{if(d===h)return;d&&!kn(d,h)&&(_=y(d),ye(d,b,v,!0),d=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:w,ref:U,shapeFlag:A}=h;switch(w){case Yr:H(d,h,g,_);break;case Jt:L(d,h,g,_);break;case ds:d==null&&N(h,g,_,T);break;case be:$t(d,h,g,_,b,v,T,E,I);break;default:A&1?W(d,h,g,_,b,v,T,E,I):A&6?He(d,h,g,_,b,v,T,E,I):(A&64||A&128)&&w.process(d,h,g,_,b,v,T,E,I,D)}U!=null&&b&&Ar(U,d&&d.ref,v,h||d,!h)},H=(d,h,g,_)=>{if(d==null)r(h.el=a(h.children),g,_);else{const b=h.el=d.el;h.children!==d.children&&l(b,h.children)}},L=(d,h,g,_)=>{d==null?r(h.el=c(h.children||""),g,_):h.el=d.el},N=(d,h,g,_)=>{[d.el,d.anchor]=R(d.children,h,g,_,d.el,d.anchor)},M=({el:d,anchor:h},g,_)=>{let b;for(;d&&d!==h;)b=p(d),r(d,g,_),d=b;r(h,g,_)},O=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},W=(d,h,g,_,b,v,T,E,I)=>{h.type==="svg"?T="svg":h.type==="math"&&(T="mathml"),d==null?se(h,g,_,b,v,T,E,I):Pe(d,h,b,v,T,E,I)},se=(d,h,g,_,b,v,T,E)=>{let I,w;const{props:U,shapeFlag:A,transition:x,dirs:$}=d;if(I=d.el=o(d.type,v,U&&U.is,U),A&8?u(I,d.children):A&16&&Ce(d.children,I,null,_,b,fs(d,v),T,E),$&&jt(d,null,_,"created"),ee(I,d,d.scopeId,T,_),U){for(const te in U)te!=="value"&&!xn(te)&&i(I,te,null,U[te],v,_);"value"in U&&i(I,"value",null,U.value,v),(w=U.onVnodeBeforeMount)&&qe(w,_,d)}$&&jt(d,null,_,"beforeMount");const V=kf(b,x);V&&x.beforeEnter(I),r(I,h,g),((w=U&&U.onVnodeMounted)||V||$)&&Te(()=>{w&&qe(w,_,d),V&&x.enter(I),$&&jt(d,null,_,"mounted")},b)},ee=(d,h,g,_,b)=>{if(g&&m(d,g),_)for(let v=0;v<_.length;v++)m(d,_[v]);if(b){let v=b.subTree;if(h===v||Ac(v.type)&&(v.ssContent===h||v.ssFallback===h)){const T=b.vnode;ee(d,T,T.scopeId,T.slotScopeIds,b.parent)}}},Ce=(d,h,g,_,b,v,T,E,I=0)=>{for(let w=I;w<d.length;w++){const U=d[w]=E?Tt(d[w]):Ge(d[w]);P(null,U,h,g,_,b,v,T,E)}},Pe=(d,h,g,_,b,v,T)=>{const E=h.el=d.el;let{patchFlag:I,dynamicChildren:w,dirs:U}=h;I|=d.patchFlag&16;const A=d.props||Z,x=h.props||Z;let $;if(g&&Ht(g,!1),($=x.onVnodeBeforeUpdate)&&qe($,g,h,d),U&&jt(h,d,g,"beforeUpdate"),g&&Ht(g,!0),(A.innerHTML&&x.innerHTML==null||A.textContent&&x.textContent==null)&&u(E,""),w?Oe(d.dynamicChildren,w,E,g,_,fs(h,b),v):T||K(d,h,E,null,g,_,fs(h,b),v,!1),I>0){if(I&16)vt(E,A,x,g,b);else if(I&2&&A.class!==x.class&&i(E,"class",null,x.class,b),I&4&&i(E,"style",A.style,x.style,b),I&8){const V=h.dynamicProps;for(let te=0;te<V.length;te++){const J=V[te],Ie=A[J],ve=x[J];(ve!==Ie||J==="value")&&i(E,J,Ie,ve,b,g)}}I&1&&d.children!==h.children&&u(E,h.children)}else!T&&w==null&&vt(E,A,x,g,b);(($=x.onVnodeUpdated)||U)&&Te(()=>{$&&qe($,g,h,d),U&&jt(h,d,g,"updated")},_)},Oe=(d,h,g,_,b,v,T)=>{for(let E=0;E<h.length;E++){const I=d[E],w=h[E],U=I.el&&(I.type===be||!kn(I,w)||I.shapeFlag&70)?f(I.el):g;P(I,w,U,null,_,b,v,T,!0)}},vt=(d,h,g,_,b)=>{if(h!==g){if(h!==Z)for(const v in h)!xn(v)&&!(v in g)&&i(d,v,h[v],null,b,_);for(const v in g){if(xn(v))continue;const T=g[v],E=h[v];T!==E&&v!=="value"&&i(d,v,E,T,b,_)}"value"in g&&i(d,"value",h.value,g.value,b)}},$t=(d,h,g,_,b,v,T,E,I)=>{const w=h.el=d?d.el:a(""),U=h.anchor=d?d.anchor:a("");let{patchFlag:A,dynamicChildren:x,slotScopeIds:$}=h;$&&(E=E?E.concat($):$),d==null?(r(w,g,_),r(U,g,_),Ce(h.children||[],g,U,b,v,T,E,I)):A>0&&A&64&&x&&d.dynamicChildren?(Oe(d.dynamicChildren,x,g,b,v,T,E),(h.key!=null||b&&h===b.subTree)&&Ic(d,h,!0)):K(d,h,g,U,b,v,T,E,I)},He=(d,h,g,_,b,v,T,E,I)=>{h.slotScopeIds=E,d==null?h.shapeFlag&512?b.ctx.activate(h,g,_,T,I):Cn(h,g,_,b,v,T,I):on(d,h,I)},Cn=(d,h,g,_,b,v,T)=>{const E=d.component=Xf(d,_,b);if(ac(d)&&(E.ctx.renderer=D),Qf(E,!1,T),E.asyncDep){if(b&&b.registerDep(E,le,T),!d.el){const I=E.subTree=oe(Jt);L(null,I,h,g)}}else le(E,d,h,g,b,v,T)},on=(d,h,g)=>{const _=h.component=d.component;if(jf(d,h,g))if(_.asyncDep&&!_.asyncResolved){Y(_,h,g);return}else _.next=h,_.update();else h.el=d.el,_.vnode=h},le=(d,h,g,_,b,v,T)=>{const E=()=>{if(d.isMounted){let{next:A,bu:x,u:$,parent:V,vnode:te}=d;{const We=Ec(d);if(We){A&&(A.el=te.el,Y(d,A,T)),We.asyncDep.then(()=>{d.isUnmounted||E()});return}}let J=A,Ie;Ht(d,!1),A?(A.el=te.el,Y(d,A,T)):A=te,x&&gr(x),(Ie=A.props&&A.props.onVnodeBeforeUpdate)&&qe(Ie,V,A,te),Ht(d,!0);const ve=eo(d),Ve=d.subTree;d.subTree=ve,P(Ve,ve,f(Ve.el),y(Ve),d,b,v),A.el=ve.el,J===null&&Hf(d,ve.el),$&&Te($,b),(Ie=A.props&&A.props.onVnodeUpdated)&&Te(()=>qe(Ie,V,A,te),b)}else{let A;const{el:x,props:$}=h,{bm:V,m:te,parent:J,root:Ie,type:ve}=d,Ve=$n(h);Ht(d,!1),V&&gr(V),!Ve&&(A=$&&$.onVnodeBeforeMount)&&qe(A,J,h),Ht(d,!0);{Ie.ce&&Ie.ce._injectChildStyle(ve);const We=d.subTree=eo(d);P(null,We,g,_,d,b,v),h.el=We.el}if(te&&Te(te,b),!Ve&&(A=$&&$.onVnodeMounted)){const We=h;Te(()=>qe(A,J,We),b)}(h.shapeFlag&256||J&&$n(J.vnode)&&J.vnode.shapeFlag&256)&&d.a&&Te(d.a,b),d.isMounted=!0,h=g=_=null}};d.scope.on();const I=d.effect=new Da(E);d.scope.off();const w=d.update=I.run.bind(I),U=d.job=I.runIfDirty.bind(I);U.i=d,U.id=d.uid,I.scheduler=()=>pi(U),Ht(d,!0),w()},Y=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,Tf(d,h.props,_,g),Cf(d,h.children,g),Lt(),qi(d),xt()},K=(d,h,g,_,b,v,T,E,I=!1)=>{const w=d&&d.children,U=d?d.shapeFlag:0,A=h.children,{patchFlag:x,shapeFlag:$}=h;if(x>0){if(x&128){bt(w,A,g,_,b,v,T,E,I);return}else if(x&256){nt(w,A,g,_,b,v,T,E,I);return}}$&8?(U&16&&ke(w,b,v),A!==w&&u(g,A)):U&16?$&16?bt(w,A,g,_,b,v,T,E,I):ke(w,b,v,!0):(U&8&&u(g,""),$&16&&Ce(A,g,_,b,v,T,E,I))},nt=(d,h,g,_,b,v,T,E,I)=>{d=d||gn,h=h||gn;const w=d.length,U=h.length,A=Math.min(w,U);let x;for(x=0;x<A;x++){const $=h[x]=I?Tt(h[x]):Ge(h[x]);P(d[x],$,g,null,b,v,T,E,I)}w>U?ke(d,b,v,!0,!1,A):Ce(h,g,_,b,v,T,E,I,A)},bt=(d,h,g,_,b,v,T,E,I)=>{let w=0;const U=h.length;let A=d.length-1,x=U-1;for(;w<=A&&w<=x;){const $=d[w],V=h[w]=I?Tt(h[w]):Ge(h[w]);if(kn($,V))P($,V,g,null,b,v,T,E,I);else break;w++}for(;w<=A&&w<=x;){const $=d[A],V=h[x]=I?Tt(h[x]):Ge(h[x]);if(kn($,V))P($,V,g,null,b,v,T,E,I);else break;A--,x--}if(w>A){if(w<=x){const $=x+1,V=$<U?h[$].el:_;for(;w<=x;)P(null,h[w]=I?Tt(h[w]):Ge(h[w]),g,V,b,v,T,E,I),w++}}else if(w>x)for(;w<=A;)ye(d[w],b,v,!0),w++;else{const $=w,V=w,te=new Map;for(w=V;w<=x;w++){const Ee=h[w]=I?Tt(h[w]):Ge(h[w]);Ee.key!=null&&te.set(Ee.key,w)}let J,Ie=0;const ve=x-V+1;let Ve=!1,We=0;const Pn=new Array(ve);for(w=0;w<ve;w++)Pn[w]=0;for(w=$;w<=A;w++){const Ee=d[w];if(Ie>=ve){ye(Ee,b,v,!0);continue}let Ke;if(Ee.key!=null)Ke=te.get(Ee.key);else for(J=V;J<=x;J++)if(Pn[J-V]===0&&kn(Ee,h[J])){Ke=J;break}Ke===void 0?ye(Ee,b,v,!0):(Pn[Ke-V]=w+1,Ke>=We?We=Ke:Ve=!0,P(Ee,h[Ke],g,null,b,v,T,E,I),Ie++)}const Hi=Ve?Nf(Pn):gn;for(J=Hi.length-1,w=ve-1;w>=0;w--){const Ee=V+w,Ke=h[Ee],Bi=Ee+1<U?h[Ee+1].el:_;Pn[w]===0?P(null,Ke,g,Bi,b,v,T,E,I):Ve&&(J<0||w!==Hi[J]?Be(Ke,g,Bi,2):J--)}}},Be=(d,h,g,_,b=null)=>{const{el:v,type:T,transition:E,children:I,shapeFlag:w}=d;if(w&6){Be(d.component.subTree,h,g,_);return}if(w&128){d.suspense.move(h,g,_);return}if(w&64){T.move(d,h,g,D);return}if(T===be){r(v,h,g);for(let A=0;A<I.length;A++)Be(I[A],h,g,_);r(d.anchor,h,g);return}if(T===ds){M(d,h,g);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(v),r(v,h,g),Te(()=>E.enter(v),b);else{const{leave:A,delayLeave:x,afterLeave:$}=E,V=()=>r(v,h,g),te=()=>{A(v,()=>{V(),$&&$()})};x?x(v,V,te):te()}else r(v,h,g)},ye=(d,h,g,_=!1,b=!1)=>{const{type:v,props:T,ref:E,children:I,dynamicChildren:w,shapeFlag:U,patchFlag:A,dirs:x,cacheIndex:$}=d;if(A===-2&&(b=!1),E!=null&&Ar(E,null,g,d,!0),$!=null&&(h.renderCache[$]=void 0),U&256){h.ctx.deactivate(d);return}const V=U&1&&x,te=!$n(d);let J;if(te&&(J=T&&T.onVnodeBeforeUnmount)&&qe(J,h,d),U&6)ur(d.component,g,_);else{if(U&128){d.suspense.unmount(g,_);return}V&&jt(d,null,h,"beforeUnmount"),U&64?d.type.remove(d,h,g,D,_):w&&!w.hasOnce&&(v!==be||A>0&&A&64)?ke(w,h,g,!1,!0):(v===be&&A&384||!b&&U&16)&&ke(I,h,g),_&&an(d)}(te&&(J=T&&T.onVnodeUnmounted)||V)&&Te(()=>{J&&qe(J,h,d),V&&jt(d,null,h,"unmounted")},g)},an=d=>{const{type:h,el:g,anchor:_,transition:b}=d;if(h===be){cn(g,_);return}if(h===ds){O(d);return}const v=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:E}=b,I=()=>T(g,v);E?E(d.el,v,I):I()}else v()},cn=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},ur=(d,h,g)=>{const{bum:_,scope:b,job:v,subTree:T,um:E,m:I,a:w}=d;Zi(I),Zi(w),_&&gr(_),b.stop(),v&&(v.flags|=8,ye(T,d,h,g)),E&&Te(E,h),Te(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ke=(d,h,g,_=!1,b=!1,v=0)=>{for(let T=v;T<d.length;T++)ye(d[T],h,g,_,b)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[Xu];return g?p(g):h};let C=!1;const S=(d,h,g)=>{d==null?h._vnode&&ye(h._vnode,null,null,!0):P(h._vnode||null,d,h,null,null,null,g),h._vnode=d,C||(C=!0,qi(),nc(),C=!1)},D={p:P,um:ye,m:Be,r:an,mt:Cn,mc:Ce,pc:K,pbc:Oe,n:y,o:t};return{render:S,hydrate:void 0,createApp:If(S)}}function fs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ht({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function kf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ic(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ic(o,a)),a.type===Yr&&(a.el=o.el)}}function Nf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ec(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ec(e)}function Zi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Df=Symbol.for("v-scx"),Mf=()=>dt(Df);function _r(t,e,n){return Tc(t,e,n)}function Tc(t,e,n=Z){const{immediate:r,deep:s,flush:i,once:o}=n,a=pe({},n),c=e&&r||!e&&i!=="post";let l;if(Yn){if(i==="sync"){const m=Mf();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Je,m.resume=Je,m.pause=Je,m}}const u=de;a.call=(m,R,P)=>Ze(m,u,R,P);let f=!1;i==="post"?a.scheduler=m=>{Te(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,R)=>{R?m():pi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=zu(t,e,a);return Yn&&(l?l.push(p):c&&p()),p}function Lf(t,e,n){const r=this.proxy,s=ae(t)?t.includes(".")?Sc(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=rr(this),a=Tc(s,i.bind(r),n);return o(),a}function Sc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const xf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Le(e)}Modifiers`]||t[`${en(e)}Modifiers`];function Uf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&xf(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ae(u)?u.trim():u)),o.number&&(s=n.map(Ps)));let a,c=r[a=is(e)]||r[a=is(Le(e))];!c&&i&&(c=r[a=is(en(e))]),c&&Ze(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ze(l,t,6,s)}}function Rc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const u=Rc(l,e,!0);u&&(a=!0,pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(re(t)&&r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):pe(o,i),re(t)&&r.set(t,o),o)}function Jr(t,e){return!t||!$r(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,en(e))||G(t,e))}function eo(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:m,ctx:R,inheritAttrs:P}=t,H=Rr(t);let L,N;try{if(n.shapeFlag&4){const O=s||r,W=O;L=Ge(l.call(W,O,u,f,m,p,R)),N=a}else{const O=e;L=Ge(O.length>1?O(f,{attrs:a,slots:o,emit:c}):O(f,null)),N=e.props?a:Ff(a)}}catch(O){Hn.length=0,zr(O,t,1),L=oe(Jt)}let M=L;if(N&&P!==!1){const O=Object.keys(N),{shapeFlag:W}=M;O.length&&W&7&&(i&&O.some(ri)&&(N=$f(N,i)),M=Tn(M,N,!1,!0))}return n.dirs&&(M=Tn(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&gi(M,n.transition),L=M,Rr(H),L}const Ff=t=>{let e;for(const n in t)(n==="class"||n==="style"||$r(n))&&((e||(e={}))[n]=t[n]);return e},$f=(t,e)=>{const n={};for(const r in t)(!ri(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function jf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?to(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Jr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?to(r,o,l):!0:!!o;return!1}function to(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Jr(n,i))return!0}return!1}function Hf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ac=t=>t.__isSuspense;function Bf(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Yu(t)}const be=Symbol.for("v-fgt"),Yr=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),ds=Symbol.for("v-stc"),Hn=[];let Ae=null;function ie(t=!1){Hn.push(Ae=t?null:[])}function Vf(){Hn.pop(),Ae=Hn[Hn.length-1]||null}let Jn=1;function no(t,e=!1){Jn+=t,t<0&&Ae&&e&&(Ae.hasOnce=!0)}function Cc(t){return t.dynamicChildren=Jn>0?Ae||gn:null,Vf(),Jn>0&&Ae&&Ae.push(t),t}function ce(t,e,n,r,s,i){return Cc(k(t,e,n,r,s,i,!0))}function Wf(t,e,n,r,s){return Cc(oe(t,e,n,r,s,!0))}function Pr(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const Pc=({key:t})=>t??null,yr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||he(t)||B(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pc(e),ref:e&&yr(e),scopeId:sc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return a?(_i(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),Jn>0&&!o&&Ae&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ae.push(c),c}const oe=Kf;function Kf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===hf)&&(t=Jt),Pr(t)){const a=Tn(t,e,!0);return n&&_i(a,n),Jn>0&&!i&&Ae&&(a.shapeFlag&6?Ae[Ae.indexOf(t)]=a:Ae.push(a)),a.patchFlag=-2,a}if(rd(t)&&(t=t.__vccOpts),e){e=qf(e);let{class:a,style:c}=e;a&&!ae(a)&&(e.class=Wr(a)),re(c)&&(hi(c)&&!j(c)&&(c=pe({},c)),e.style=oi(c))}const o=ae(t)?1:Ac(t)?128:Qu(t)?64:re(t)?4:B(t)?2:0;return k(t,e,n,r,s,o,i,!0)}function qf(t){return t?hi(t)||gc(t)?pe({},t):t:null}function Tn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Gf(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Pc(l),ref:e&&e.ref?n&&i?j(i)?i.concat(yr(e)):[i,yr(e)]:yr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&gi(u,c.clone(u)),u}function ct(t=" ",e=0){return oe(Yr,null,t,e)}function zf(t="",e=!1){return e?(ie(),Wf(Jt,null,t)):oe(Jt,null,t)}function Ge(t){return t==null||typeof t=="boolean"?oe(Jt):j(t)?oe(be,null,t.slice()):Pr(t)?Tt(t):oe(Yr,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tn(t)}function _i(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),_i(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!gc(e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[ct(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Wr([e.class,r.class]));else if(s==="style")e.style=oi([e.style,r.style]);else if($r(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qe(t,e,n,r=null){Ze(t,e,7,[n,r])}const Jf=dc();let Yf=0;function Xf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Jf,i={uid:Yf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Na(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_c(r,s),emitsOptions:Rc(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uf.bind(null,i),t.ce&&t.ce(i),i}let de=null,Or,Hs;{const t=Vr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Or=e("__VUE_INSTANCE_SETTERS__",n=>de=n),Hs=e("__VUE_SSR_SETTERS__",n=>Yn=n)}const rr=t=>{const e=de;return Or(t),t.scope.on(),()=>{t.scope.off(),Or(e)}},ro=()=>{de&&de.scope.off(),Or(null)};function Oc(t){return t.vnode.shapeFlag&4}let Yn=!1;function Qf(t,e=!1,n=!1){e&&Hs(e);const{props:r,children:s}=t.vnode,i=Oc(t);Ef(t,r,i,e),Af(t,s,n);const o=i?Zf(t,e):void 0;return e&&Hs(!1),o}function Zf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gf);const{setup:r}=n;if(r){Lt();const s=t.setupContext=r.length>1?td(t):null,i=rr(t),o=nr(r,t,0,[t.props,s]),a=Sa(o);if(xt(),i(),(a||t.sp)&&!$n(t)&&oc(t),a){if(o.then(ro,ro),e)return o.then(c=>{so(t,c)}).catch(c=>{zr(c,t,0)});t.asyncDep=o}else so(t,o)}else kc(t)}function so(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Qa(e)),kc(t)}function kc(t,e,n){const r=t.type;t.render||(t.render=r.render||Je);{const s=rr(t);Lt();try{mf(t)}finally{xt(),s()}}}const ed={get(t,e){return ue(t,"get",""),t[e]}};function td(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ed),slots:t.slots,emit:t.emit,expose:e}}function Xr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qa(Ja(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jn)return jn[n](t)},has(e,n){return n in e||n in jn}})):t.proxy}function nd(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function rd(t){return B(t)&&"__vccOpts"in t}const xe=(t,e)=>Ku(t,e,Yn);function Nc(t,e,n){const r=arguments.length;return r===2?re(e)&&!j(e)?Pr(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pr(n)&&(n=[n]),oe(t,e,n))}const sd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bs;const io=typeof window<"u"&&window.trustedTypes;if(io)try{Bs=io.createPolicy("vue",{createHTML:t=>t})}catch{}const Dc=Bs?t=>Bs.createHTML(t):t=>t,id="http://www.w3.org/2000/svg",od="http://www.w3.org/1998/Math/MathML",it=typeof document<"u"?document:null,oo=it&&it.createElement("template"),ad={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?it.createElementNS(id,t):e==="mathml"?it.createElementNS(od,t):n?it.createElement(t,{is:n}):it.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>it.createTextNode(t),createComment:t=>it.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>it.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{oo.innerHTML=Dc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=oo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cd=Symbol("_vtc");function ld(t,e,n){const r=t[cd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ao=Symbol("_vod"),ud=Symbol("_vsh"),fd=Symbol(""),dd=/(^|;)\s*display\s*:/;function hd(t,e,n){const r=t.style,s=ae(n);let i=!1;if(n&&!s){if(e)if(ae(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&vr(r,a,"")}else for(const o in e)n[o]==null&&vr(r,o,"");for(const o in n)o==="display"&&(i=!0),vr(r,o,n[o])}else if(s){if(e!==n){const o=r[fd];o&&(n+=";"+o),r.cssText=n,i=dd.test(n)}}else e&&t.removeAttribute("style");ao in t&&(t[ao]=i?r.display:"",t[ud]&&(r.display="none"))}const co=/\s*!important$/;function vr(t,e,n){if(j(n))n.forEach(r=>vr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pd(t,e);co.test(n)?t.setProperty(en(r),n.replace(co,""),"important"):t[r]=n}}const lo=["Webkit","Moz","ms"],hs={};function pd(t,e){const n=hs[e];if(n)return n;let r=Le(e);if(r!=="filter"&&r in t)return hs[e]=r;r=Br(r);for(let s=0;s<lo.length;s++){const i=lo[s]+r;if(i in t)return hs[e]=i}return e}const uo="http://www.w3.org/1999/xlink";function fo(t,e,n,r,s,i=bu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(uo,e.slice(6,e.length)):t.setAttributeNS(uo,e,n):n==null||i&&!Pa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mt(n)?String(n):n)}function ho(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Dc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Pa(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function fn(t,e,n,r){t.addEventListener(e,n,r)}function gd(t,e,n,r){t.removeEventListener(e,n,r)}const po=Symbol("_vei");function md(t,e,n,r,s=null){const i=t[po]||(t[po]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=_d(e);if(r){const l=i[e]=bd(r,s);fn(t,a,l,c)}else o&&(gd(t,a,o,c),i[e]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function _d(t){let e;if(go.test(t)){e={};let r;for(;r=t.match(go);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let ps=0;const yd=Promise.resolve(),vd=()=>ps||(yd.then(()=>ps=0),ps=Date.now());function bd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ze(wd(r,n.value),e,5,[r])};return n.value=t,n.attached=vd(),n}function wd(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Id=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ld(t,r,o):e==="style"?hd(t,n,r):$r(e)?ri(e)||md(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ed(t,e,r,o))?(ho(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ae(r))?ho(t,Le(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fo(t,e,r,o))};function Ed(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&mo(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mo(e)&&ae(n)?!1:e in t}const _o=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>gr(e,n):e};function Td(t){t.target.composing=!0}function yo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gs=Symbol("_assign"),zt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[gs]=_o(s);const i=r||s.props&&s.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ps(a)),t[gs](a)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",Td),fn(t,"compositionend",yo),fn(t,"change",yo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[gs]=_o(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ps(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Sd=["ctrl","shift","alt","meta"],Rd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sd.some(n=>t[`${n}Key`]&&!e.includes(n))},yi=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Rd[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Ad=pe({patchProp:Id},ad);let vo;function Cd(){return vo||(vo=Pf(Ad))}const Pd=(...t)=>{const e=Cd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=kd(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Od(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Od(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function kd(t){return ae(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Nd=Symbol();var bo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(bo||(bo={}));function Dd(){const t=wu(!0),e=t.run(()=>Ya({}));let n=[],r=[];const s=Ja({install(i){s._a=i,i.provide(Nd,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const tn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Md={data(){return{players:[{id:1,name:"Alice",elo:1500},{id:2,name:"Bob",elo:1700},{id:3,name:"Charlie",elo:1600},{id:4,name:"Dave",elo:1800}]}},computed:{sortedPlayers(){return[...this.players].sort((t,e)=>e.elo-t.elo)}},methods:{getRankClass(t){return t===0?"gold":t===1?"silver":t===2?"bronze":""}}},Ld={class:"leaderboard"},xd={class:"name"},Ud={class:"elo"};function Fd(t,e,n,r,s,i){return ie(),ce("div",Ld,[e[0]||(e[0]=k("h2",null,"< Player Leaderboard >",-1)),k("ul",null,[(ie(!0),ce(be,null,xs(i.sortedPlayers,(o,a)=>(ie(),ce("li",{key:o.id},[k("span",{class:Wr([i.getRankClass(a),"rank"])},"#"+Ne(a+1),3),k("span",xd,Ne(o.name),1),k("span",Ud,Ne(o.elo),1)]))),128))])])}const vi=tn(Md,[["render",Fd],["__scopeId","data-v-19b0e713"]]),$d={name:"App",components:{PlayerLeaderboard:vi},data(){return{isLoggedIn:!0}},created(){localStorage.getItem("user")&&(this.isLoggedIn=!0)}},jd={class:"leaderboard-btn"},Hd={key:0,class:"addgame-btn"},Bd={key:1,class:"addgame-btn"},Vd={class:"floating-btn"};function Wd(t,e,n,r,s,i){const o=Ls("router-link"),a=Ls("router-view");return ie(),ce(be,null,[k("header",null,[k("button",jd,[oe(o,{to:"/",class:"nav-btn"},{default:hn(()=>e[0]||(e[0]=[ct("Leaderboard")])),_:1})]),s.isLoggedIn?(ie(),ce("button",Hd,[oe(o,{to:"/my-profile",class:"nav-btn"},{default:hn(()=>e[1]||(e[1]=[ct("My Profile")])),_:1})])):(ie(),ce("button",Bd,[oe(o,{to:"/login",class:"nav-btn"},{default:hn(()=>e[2]||(e[2]=[ct("Login")])),_:1})]))]),e[4]||(e[4]=k("div",{id:"app"},null,-1)),oe(a),k("button",Vd,[oe(o,{to:"/add-game",class:"nav-btn"},{default:hn(()=>e[3]||(e[3]=[ct("+")])),_:1})])],64)}const Kd=tn($d,[["render",Wd],["__scopeId","data-v-131fc3d5"]]),qd="modulepreload",zd=function(t){return"/"+t},wo={},Gd=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=zd(c),c in wo)return;wo[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":qd,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const dn=typeof document<"u";function Mc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Mc(t.default)}const q=Object.assign;function ms(t,e){const n={};for(const r in e){const s=e[r];n[r]=$e(s)?s.map(t):t(s)}return n}const Bn=()=>{},$e=Array.isArray,Lc=/#/g,Yd=/&/g,Xd=/\//g,Qd=/=/g,Zd=/\?/g,xc=/\+/g,eh=/%5B/g,th=/%5D/g,Uc=/%5E/g,nh=/%60/g,Fc=/%7B/g,rh=/%7C/g,$c=/%7D/g,sh=/%20/g;function bi(t){return encodeURI(""+t).replace(rh,"|").replace(eh,"[").replace(th,"]")}function ih(t){return bi(t).replace(Fc,"{").replace($c,"}").replace(Uc,"^")}function Vs(t){return bi(t).replace(xc,"%2B").replace(sh,"+").replace(Lc,"%23").replace(Yd,"%26").replace(nh,"`").replace(Fc,"{").replace($c,"}").replace(Uc,"^")}function oh(t){return Vs(t).replace(Qd,"%3D")}function ah(t){return bi(t).replace(Lc,"%23").replace(Zd,"%3F")}function ch(t){return t==null?"":ah(t).replace(Xd,"%2F")}function Xn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const lh=/\/$/,uh=t=>t.replace(lh,"");function _s(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ph(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Xn(o)}}function fh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Io(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Sn(e.matched[r],n.matched[s])&&jc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hh(t[n],e[n]))return!1;return!0}function hh(t,e){return $e(t)?Eo(t,e):$e(e)?Eo(e,t):t===e}function Eo(t,e){return $e(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ph(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qn;(function(t){t.pop="pop",t.push="push"})(Qn||(Qn={}));var Vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vn||(Vn={}));function gh(t){if(!t)if(dn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uh(t)}const mh=/^[^#]+#/;function _h(t,e){return t.replace(mh,"#")+e}function yh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qr=()=>({left:window.scrollX,top:window.scrollY});function vh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=yh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function To(t,e){return(history.state?history.state.position-e:-1)+t}const Ws=new Map;function bh(t,e){Ws.set(t,e)}function wh(t){const e=Ws.get(t);return Ws.delete(t),e}let Ih=()=>location.protocol+"//"+location.host;function Hc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Io(c,"")}return Io(n,t)+r+s}function Eh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Hc(t,location),R=n.value,P=e.value;let H=0;if(p){if(n.value=m,e.value=p,o&&o===R){o=null;return}H=P?p.position-P.position:0}else r(m);s.forEach(L=>{L(n.value,R,{delta:H,type:Qn.pop,direction:H?H>0?Vn.forward:Vn.back:Vn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(q({},p.state,{scroll:Qr()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function So(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qr():null}}function Th(t){const{history:e,location:n}=window,r={value:Hc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Ih()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=q({},e.state,So(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=q({},s.value,e.state,{forward:c,scroll:Qr()});i(u.current,u,!0);const f=q({},So(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Sh(t){t=gh(t);const e=Th(t),n=Eh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:_h.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Rh(t){return typeof t=="string"||t&&typeof t=="object"}function Bc(t){return typeof t=="string"||typeof t=="symbol"}const Vc=Symbol("");var Ro;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ro||(Ro={}));function Rn(t,e){return q(new Error,{type:t,[Vc]:!0},e)}function st(t,e){return t instanceof Error&&Vc in t&&(e==null||!!(t.type&e))}const Ao="[^/]+?",Ah={sensitive:!1,strict:!1,start:!0,end:!0},Ch=/[.+*?^${}()[\]/\\]/g;function Ph(t,e){const n=q({},Ah,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Ch,"\\$&"),m+=40;else if(p.type===1){const{value:R,repeatable:P,optional:H,regexp:L}=p;i.push({name:R,repeatable:P,optional:H});const N=L||Ao;if(N!==Ao){m+=10;try{new RegExp(`(${N})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${N}): `+O.message)}}let M=P?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(M=H&&l.length<2?`(?:/${M})`:"/"+M),H&&(M+="?"),s+=M,m+=20,H&&(m+=-8),P&&(m+=-20),N===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",R=i[p-1];f[R.name]=m&&R.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:R,repeatable:P,optional:H}=m,L=R in l?l[R]:"";if($e(L)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const N=$e(L)?L.join("/"):L;if(!N)if(H)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Oh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Wc(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Oh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Co(r))return 1;if(Co(s))return-1}return s.length-r.length}function Co(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kh={type:0,value:""},Nh=/[a-zA-Z0-9_]/;function Dh(t){if(!t)return[[]];if(t==="/")return[[kh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Nh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Mh(t,e,n){const r=Ph(Dh(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Lh(t,e){const n=[],r=new Map;e=No({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const R=!m,P=Oo(f);P.aliasOf=m&&m.record;const H=No(e,f),L=[P];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of O)L.push(Oo(q({},P,{components:m?m.record.components:P.components,path:W,aliasOf:m?m.record:P})))}let N,M;for(const O of L){const{path:W}=O;if(p&&W[0]!=="/"){const se=p.record.path,ee=se[se.length-1]==="/"?"":"/";O.path=p.record.path+(W&&ee+W)}if(N=Mh(O,p,H),m?m.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),R&&f.name&&!ko(N)&&o(f.name)),Kc(N)&&c(N),P.children){const se=P.children;for(let ee=0;ee<se.length;ee++)i(se[ee],N,m&&m.children[ee])}m=m||N}return M?()=>{o(M)}:Bn}function o(f){if(Bc(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=Fh(f,n);n.splice(p,0,f),f.record.name&&!ko(f)&&r.set(f.record.name,f)}function l(f,p){let m,R={},P,H;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Rn(1,{location:f});H=m.record.name,R=q(Po(p.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&Po(f.params,m.keys.map(M=>M.name))),P=m.stringify(R)}else if(f.path!=null)P=f.path,m=n.find(M=>M.re.test(P)),m&&(R=m.parse(P),H=m.record.name);else{if(m=p.name?r.get(p.name):n.find(M=>M.re.test(p.path)),!m)throw Rn(1,{location:f,currentLocation:p});H=m.record.name,R=q({},p.params,f.params),P=m.stringify(R)}const L=[];let N=m;for(;N;)L.unshift(N.record),N=N.parent;return{name:H,path:P,params:R,matched:L,meta:Uh(L)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Po(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Oo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ko(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Uh(t){return t.reduce((e,n)=>q(e,n.meta),{})}function No(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Fh(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Wc(t,e[i])<0?r=i:n=i+1}const s=$h(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function $h(t){let e=t;for(;e=e.parent;)if(Kc(e)&&Wc(t,e)===0)return e}function Kc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xc," "),o=i.indexOf("="),a=Xn(o<0?i:i.slice(0,o)),c=o<0?null:Xn(i.slice(o+1));if(a in e){let l=e[a];$e(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Do(t){let e="";for(let n in t){const r=t[n];if(n=oh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&Vs(i)):[r&&Vs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Hh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$e(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Bh=Symbol(""),Mo=Symbol(""),wi=Symbol(""),qc=Symbol(""),Ks=Symbol("");function Nn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function St(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(Rn(4,{from:n,to:e})):p instanceof Error?c(p):Rh(p)?c(Rn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function ys(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Mc(c)){const u=(c.__vccOpts||c)[e];u&&i.push(St(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Jd(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&St(m,n,r,o,a,s)()}))}}return i}function Lo(t){const e=dt(wi),n=dt(qc),r=xe(()=>{const c=yn(t.to);return e.resolve(c)}),s=xe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Sn.bind(null,u));if(p>-1)return p;const m=xo(c[l-2]);return l>1&&xo(u)===m&&f[f.length-1].path!==m?f.findIndex(Sn.bind(null,c[l-2])):p}),i=xe(()=>s.value>-1&&zh(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&jc(n.params,r.value.params));function a(c={}){if(qh(c)){const l=e[yn(t.replace)?"replace":"push"](yn(t.to)).catch(Bn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Vh(t){return t.length===1?t[0]:t}const Wh=ic({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lo,setup(t,{slots:e}){const n=qr(Lo(t)),{options:r}=dt(wi),s=xe(()=>({[Uo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Vh(e.default(n));return t.custom?i:Nc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Kh=Wh;function qh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$e(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uo=(t,e,n)=>t??e??n,Gh=ic({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dt(Ks),s=xe(()=>t.route||r.value),i=dt(Mo,0),o=xe(()=>{let l=yn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=xe(()=>s.value.matched[o.value]);mr(Mo,xe(()=>o.value+1)),mr(Bh,a),mr(Ks,s);const c=Ya();return _r(()=>[c.value,a.value,t.name],([l,u,f],[p,m,R])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Sn(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return Fo(n.default,{Component:p,route:l});const m=f.props[u],R=m?m===!0?l.params:typeof m=="function"?m(l):m:null,H=Nc(p,q({},R,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Fo(n.default,{Component:H,route:l})||H}}});function Fo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jh=Gh;function Yh(t){const e=Lh(t.routes,t),n=t.parseQuery||jh,r=t.stringifyQuery||Do,s=t.history,i=Nn(),o=Nn(),a=Nn(),c=Hu(wt);let l=wt;dn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ms.bind(null,y=>""+y),f=ms.bind(null,ch),p=ms.bind(null,Xn);function m(y,C){let S,D;return Bc(y)?(S=e.getRecordMatcher(y),D=C):D=y,e.addRoute(D,S)}function R(y){const C=e.getRecordMatcher(y);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(y=>y.record)}function H(y){return!!e.getRecordMatcher(y)}function L(y,C){if(C=q({},C||c.value),typeof y=="string"){const g=_s(n,y,C.path),_=e.resolve({path:g.path},C),b=s.createHref(g.fullPath);return q(g,_,{params:p(_.params),hash:Xn(g.hash),redirectedFrom:void 0,href:b})}let S;if(y.path!=null)S=q({},y,{path:_s(n,y.path,C.path).path});else{const g=q({},y.params);for(const _ in g)g[_]==null&&delete g[_];S=q({},y,{params:f(g)}),C.params=f(C.params)}const D=e.resolve(S,C),X=y.hash||"";D.params=u(p(D.params));const d=fh(r,q({},y,{hash:ih(X),path:D.path})),h=s.createHref(d);return q({fullPath:d,hash:X,query:r===Do?Hh(y.query):y.query||{}},D,{redirectedFrom:void 0,href:h})}function N(y){return typeof y=="string"?_s(n,y,c.value.path):q({},y)}function M(y,C){if(l!==y)return Rn(8,{from:C,to:y})}function O(y){return ee(y)}function W(y){return O(q(N(y),{replace:!0}))}function se(y){const C=y.matched[y.matched.length-1];if(C&&C.redirect){const{redirect:S}=C;let D=typeof S=="function"?S(y):S;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=N(D):{path:D},D.params={}),q({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function ee(y,C){const S=l=L(y),D=c.value,X=y.state,d=y.force,h=y.replace===!0,g=se(S);if(g)return ee(q(N(g),{state:typeof g=="object"?q({},X,g.state):X,force:d,replace:h}),C||S);const _=S;_.redirectedFrom=C;let b;return!d&&dh(r,D,S)&&(b=Rn(16,{to:_,from:D}),Be(D,D,!0,!1)),(b?Promise.resolve(b):Oe(_,D)).catch(v=>st(v)?st(v,2)?v:bt(v):K(v,_,D)).then(v=>{if(v){if(st(v,2))return ee(q({replace:h},N(v.to),{state:typeof v.to=="object"?q({},X,v.to.state):X,force:d}),C||_)}else v=$t(_,D,!0,h,X);return vt(_,D,v),v})}function Ce(y,C){const S=M(y,C);return S?Promise.reject(S):Promise.resolve()}function Pe(y){const C=cn.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(y):y()}function Oe(y,C){let S;const[D,X,d]=Xh(y,C);S=ys(D.reverse(),"beforeRouteLeave",y,C);for(const g of D)g.leaveGuards.forEach(_=>{S.push(St(_,y,C))});const h=Ce.bind(null,y,C);return S.push(h),ke(S).then(()=>{S=[];for(const g of i.list())S.push(St(g,y,C));return S.push(h),ke(S)}).then(()=>{S=ys(X,"beforeRouteUpdate",y,C);for(const g of X)g.updateGuards.forEach(_=>{S.push(St(_,y,C))});return S.push(h),ke(S)}).then(()=>{S=[];for(const g of d)if(g.beforeEnter)if($e(g.beforeEnter))for(const _ of g.beforeEnter)S.push(St(_,y,C));else S.push(St(g.beforeEnter,y,C));return S.push(h),ke(S)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),S=ys(d,"beforeRouteEnter",y,C,Pe),S.push(h),ke(S))).then(()=>{S=[];for(const g of o.list())S.push(St(g,y,C));return S.push(h),ke(S)}).catch(g=>st(g,8)?g:Promise.reject(g))}function vt(y,C,S){a.list().forEach(D=>Pe(()=>D(y,C,S)))}function $t(y,C,S,D,X){const d=M(y,C);if(d)return d;const h=C===wt,g=dn?history.state:{};S&&(D||h?s.replace(y.fullPath,q({scroll:h&&g&&g.scroll},X)):s.push(y.fullPath,X)),c.value=y,Be(y,C,S,h),bt()}let He;function Cn(){He||(He=s.listen((y,C,S)=>{if(!ur.listening)return;const D=L(y),X=se(D);if(X){ee(q(X,{replace:!0,force:!0}),D).catch(Bn);return}l=D;const d=c.value;dn&&bh(To(d.fullPath,S.delta),Qr()),Oe(D,d).catch(h=>st(h,12)?h:st(h,2)?(ee(q(N(h.to),{force:!0}),D).then(g=>{st(g,20)&&!S.delta&&S.type===Qn.pop&&s.go(-1,!1)}).catch(Bn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),K(h,D,d))).then(h=>{h=h||$t(D,d,!1),h&&(S.delta&&!st(h,8)?s.go(-S.delta,!1):S.type===Qn.pop&&st(h,20)&&s.go(-1,!1)),vt(D,d,h)}).catch(Bn)}))}let on=Nn(),le=Nn(),Y;function K(y,C,S){bt(y);const D=le.list();return D.length?D.forEach(X=>X(y,C,S)):console.error(y),Promise.reject(y)}function nt(){return Y&&c.value!==wt?Promise.resolve():new Promise((y,C)=>{on.add([y,C])})}function bt(y){return Y||(Y=!y,Cn(),on.list().forEach(([C,S])=>y?S(y):C()),on.reset()),y}function Be(y,C,S,D){const{scrollBehavior:X}=t;if(!dn||!X)return Promise.resolve();const d=!S&&wh(To(y.fullPath,0))||(D||!S)&&history.state&&history.state.scroll||null;return ec().then(()=>X(y,C,d)).then(h=>h&&vh(h)).catch(h=>K(h,y,C))}const ye=y=>s.go(y);let an;const cn=new Set,ur={currentRoute:c,listening:!0,addRoute:m,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:P,resolve:L,options:t,push:O,replace:W,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:nt,install(y){const C=this;y.component("RouterLink",Kh),y.component("RouterView",Jh),y.config.globalProperties.$router=C,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(c)}),dn&&!an&&c.value===wt&&(an=!0,O(s.location).catch(X=>{}));const S={};for(const X in wt)Object.defineProperty(S,X,{get:()=>c.value[X],enumerable:!0});y.provide(wi,C),y.provide(qc,za(S)),y.provide(Ks,c);const D=y.unmount;cn.add(y),y.unmount=function(){cn.delete(y),cn.size<1&&(l=wt,He&&He(),He=null,c.value=wt,an=!1,Y=!1),D()}}};function ke(y){return y.reduce((C,S)=>C.then(()=>Pe(S)),Promise.resolve())}return ur}function Xh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Sn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Sn(l,c))||s.push(c))}return[n,r,s]}const Qh={__name:"HomeView",setup(t){return(e,n)=>(ie(),ce("main",null,[oe(vi)]))}};var $o={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new ep;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const R=l<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ep extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tp=function(t){const e=zc(t);return Gc.encodeByteArray(e,!0)},Jc=function(t){return tp(t).replace(/\./g,"")},Yc=function(t){try{return Gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=()=>np().__FIREBASE_DEFAULTS__,sp=()=>{if(typeof process>"u"||typeof $o>"u")return;const t=$o.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ip=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yc(t[1]);return e&&JSON.parse(e)},Ii=()=>{try{return rp()||sp()||ip()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},op=t=>{var e,n;return(n=(e=Ii())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xc=()=>{var t;return(t=Ii())===null||t===void 0?void 0:t.config},Qc=t=>{var e;return(e=Ii())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function lp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function up(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fp(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function el(){try{return typeof indexedDB=="object"}catch{return!1}}function tl(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function dp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="FirebaseError";class tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hp,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nn.prototype.create)}}class nn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tt(s,a,r)}}function pp(t,e){return t.replace(gp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gp=/\{\$([^}]+)}/g;function mp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jo(i)&&jo(o)){if(!kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ln(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _p(t,e){const n=new yp(t,e);return n.subscribe.bind(n)}class yp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vs),s.error===void 0&&(s.error=vs),s.complete===void 0&&(s.complete=vs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=1e3,wp=2,Ip=4*60*60*1e3,Ep=.5;function Ho(t,e=bp,n=wp){const r=e*Math.pow(n,t),s=Math.round(Ep*r*(Math.random()-.5)*2);return Math.min(Ip,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return t&&t._delegate?t._delegate:t}class et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ap;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rp(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sp(t){return t===Vt?void 0:t}function Rp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Cp={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Pp=Q.INFO,Op={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},kp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Op[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ei{constructor(e){this.name=e,this._logLevel=Pp,this._logHandler=kp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Np=(t,e)=>e.some(n=>t instanceof n);let Bo,Vo;function Dp(){return Bo||(Bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mp(){return Vo||(Vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nl=new WeakMap,qs=new WeakMap,rl=new WeakMap,bs=new WeakMap,Ti=new WeakMap;function Lp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nl.set(n,t)}).catch(()=>{}),Ti.set(e,t),e}function xp(t){if(qs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qs.set(t,e)}let zs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Up(t){zs=t(zs)}function Fp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ws(this),e,...n);return rl.set(r,e.sort?e.sort():[e]),kt(r)}:Mp().includes(t)?function(...e){return t.apply(ws(this),e),kt(nl.get(this))}:function(...e){return kt(t.apply(ws(this),e))}}function $p(t){return typeof t=="function"?Fp(t):(t instanceof IDBTransaction&&xp(t),Np(t,Dp())?new Proxy(t,zs):t)}function kt(t){if(t instanceof IDBRequest)return Lp(t);if(bs.has(t))return bs.get(t);const e=$p(t);return e!==t&&(bs.set(t,e),Ti.set(e,t)),e}const ws=t=>Ti.get(t);function sl(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=kt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const jp=["get","getKey","getAll","getAllKeys","count"],Hp=["put","add","delete","clear"],Is=new Map;function Wo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Is.get(e))return Is.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Hp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Is.set(e,i),i}Up(t=>({...t,get:(e,n,r)=>Wo(e,n)||t.get(e,n,r),has:(e,n)=>!!Wo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gs="@firebase/app",Ko="0.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Ei("@firebase/app"),Wp="@firebase/app-compat",Kp="@firebase/analytics-compat",qp="@firebase/analytics",zp="@firebase/app-check-compat",Gp="@firebase/app-check",Jp="@firebase/auth",Yp="@firebase/auth-compat",Xp="@firebase/database",Qp="@firebase/data-connect",Zp="@firebase/database-compat",eg="@firebase/functions",tg="@firebase/functions-compat",ng="@firebase/installations",rg="@firebase/installations-compat",sg="@firebase/messaging",ig="@firebase/messaging-compat",og="@firebase/performance",ag="@firebase/performance-compat",cg="@firebase/remote-config",lg="@firebase/remote-config-compat",ug="@firebase/storage",fg="@firebase/storage-compat",dg="@firebase/firestore",hg="@firebase/vertexai",pg="@firebase/firestore-compat",gg="firebase",mg="11.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="[DEFAULT]",_g={[Gs]:"fire-core",[Wp]:"fire-core-compat",[qp]:"fire-analytics",[Kp]:"fire-analytics-compat",[Gp]:"fire-app-check",[zp]:"fire-app-check-compat",[Jp]:"fire-auth",[Yp]:"fire-auth-compat",[Xp]:"fire-rtdb",[Qp]:"fire-data-connect",[Zp]:"fire-rtdb-compat",[eg]:"fire-fn",[tg]:"fire-fn-compat",[ng]:"fire-iid",[rg]:"fire-iid-compat",[sg]:"fire-fcm",[ig]:"fire-fcm-compat",[og]:"fire-perf",[ag]:"fire-perf-compat",[cg]:"fire-rc",[lg]:"fire-rc-compat",[ug]:"fire-gcs",[fg]:"fire-gcs-compat",[dg]:"fire-fst",[pg]:"fire-fst-compat",[hg]:"fire-vertex","fire-js":"fire-js",[gg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Map,yg=new Map,Ys=new Map;function qo(t,e){try{t.container.addComponent(e)}catch(n){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gt(t){const e=t.name;if(Ys.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ys.set(e,t);for(const n of Nr.values())qo(n,t);for(const n of yg.values())qo(n,t);return!0}function Zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ue(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new nn("app","Firebase",vg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=mg;function il(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Js,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(n||(n=Xc()),!n)throw Nt.create("no-options");const i=Nr.get(s);if(i){if(kr(n,i.options)&&kr(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const o=new Ap(s);for(const c of Ys.values())o.addComponent(c);const a=new bg(n,r,o);return Nr.set(s,a),a}function wg(t=Js){const e=Nr.get(t);if(!e&&t===Js&&Xc())return il();if(!e)throw Nt.create("no-app",{appName:t});return e}function Ye(t,e,n){var r;let s=(r=_g[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(a.join(" "));return}gt(new et(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="firebase-heartbeat-database",Eg=1,Zn="firebase-heartbeat-store";let Es=null;function ol(){return Es||(Es=sl(Ig,Eg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nt.create("idb-open",{originalErrorMessage:t.message})})),Es}async function Tg(t){try{const n=(await ol()).transaction(Zn),r=await n.objectStore(Zn).get(al(t));return await n.done,r}catch(e){if(e instanceof tt)pt.warn(e.message);else{const n=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(n.message)}}}async function zo(t,e){try{const r=(await ol()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(e,al(t)),await r.done}catch(n){if(n instanceof tt)pt.warn(n.message);else{const r=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function al(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=1024,Rg=30;class Ag{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Go();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Rg){const o=Og(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Go(),{heartbeatsToSend:r,unsentEntries:s}=Cg(this._heartbeatsCache.heartbeats),i=Jc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pt.warn(n),""}}}function Go(){return new Date().toISOString().substring(0,10)}function Cg(t,e=Sg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return el()?tl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jo(t){return Jc(JSON.stringify({version:2,heartbeats:t})).length}function Og(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){gt(new et("platform-logger",e=>new Bp(e),"PRIVATE")),gt(new et("heartbeat",e=>new Ag(e),"PRIVATE")),Ye(Gs,Ko,t),Ye(Gs,Ko,"esm2017"),Ye("fire-js","")}kg("");function Si(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function cl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ng=cl,ll=new nn("auth","Firebase",cl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Ei("@firebase/auth");function Dg(t,...e){Dr.logLevel<=Q.WARN&&Dr.warn(`Auth (${ir}): ${t}`,...e)}function br(t,...e){Dr.logLevel<=Q.ERROR&&Dr.error(`Auth (${ir}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,...e){throw Ri(t,...e)}function Xe(t,...e){return Ri(t,...e)}function ul(t,e,n){const r=Object.assign(Object.assign({},Ng()),{[e]:n});return new nn("auth","Firebase",r).create(e,{appName:t.name})}function ht(t){return ul(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ri(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ll.create(t,...e)}function F(t,e,...n){if(!t)throw Ri(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw br(e),new Error(e)}function mt(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mg(){return Yo()==="http:"||Yo()==="https:"}function Yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mg()||Zc()||"connection"in navigator)?navigator.onLine:!0}function xg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.shortDelay=e,this.longDelay=n,mt(n>e,"Short delay should be less than long delay!"),this.isMobile=cp()||up()}get(){return Lg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t,e){mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new or(3e4,6e4);function Ut(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ft(t,e,n,r,s={}){return dl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=sr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return lp()||(l.referrerPolicy="no-referrer"),fl.fetch()(hl(t,t.config.apiHost,n,a),l)})}async function dl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ug),e);try{const s=new jg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw pr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ul(t,u,l);je(t,u)}}catch(s){if(s instanceof tt)throw s;je(t,"network-request-failed",{message:String(s)})}}async function ar(t,e,n,r,s={}){const i=await Ft(t,e,n,r,s);return"mfaPendingCredential"in i&&je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ai(t.config,s):`${t.config.apiScheme}://${s}`}function $g(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),Fg.get())})}}function pr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xe(t,e,r);return s.customData._tokenResponse=n,s}function Xo(t){return t!==void 0&&t.enterprise!==void 0}class Hg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $g(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Bg(t,e){return Ft(t,"GET","/v2/recaptchaConfig",Ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(t,e){return Ft(t,"POST","/v1/accounts:delete",e)}async function pl(t,e){return Ft(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wg(t,e=!1){const n=yt(t),r=await n.getIdToken(e),s=Ci(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wn(Ts(s.auth_time)),issuedAtTime:Wn(Ts(s.iat)),expirationTime:Wn(Ts(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ts(t){return Number(t)*1e3}function Ci(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return br("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yc(n);return s?JSON.parse(s):(br("Failed to decode base64 JWT payload"),null)}catch(s){return br("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qo(t){const e=Ci(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tt&&Kg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await er(t,pl(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gl(i.providerUserInfo):[],a=Gg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qs(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function zg(t){const e=yt(t);await Mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gl(t){return t.map(e=>{var{providerId:n}=e,r=Si(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(t,e){const n=await dl(t,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yg(t,e){return Ft(t,"POST","/v2/accounts:revokeToken",Ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=Qo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Jg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ut{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Si(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await er(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wg(this,e)}reload(){return zg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await er(this,Vg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,H=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:O,isAnonymous:W,providerData:se,stsTokenManager:ee}=n;F(M&&ee,e,"internal-error");const Ce=wn.fromJSON(this.name,ee);F(typeof M=="string",e,"internal-error"),It(f,e.name),It(p,e.name),F(typeof O=="boolean",e,"internal-error"),F(typeof W=="boolean",e,"internal-error"),It(m,e.name),It(R,e.name),It(P,e.name),It(H,e.name),It(L,e.name),It(N,e.name);const Pe=new ut({uid:M,auth:e,email:p,emailVerified:O,displayName:f,isAnonymous:W,photoURL:R,phoneNumber:m,tenantId:P,stsTokenManager:Ce,createdAt:L,lastLoginAt:N});return se&&Array.isArray(se)&&(Pe.providerData=se.map(Oe=>Object.assign({},Oe))),H&&(Pe._redirectEventId=H),Pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new wn;s.updateFromServerResponse(n);const i=new ut({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?gl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new wn;a.updateFromIdToken(r);const c=new ut({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map;function ft(t){mt(t instanceof Function,"Expected a class definition");let e=Zo.get(t);return e?(mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ml.type="NONE";const ea=ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e,n){return`firebase:${t}:${e}:${n}`}class In{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wr(this.userKey,s.apiKey,i),this.fullPersistenceKey=wr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new In(ft(ea),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(ea);const o=wr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=ut._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new In(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new In(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_l(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Il(e))return"Blackberry";if(El(e))return"Webos";if(yl(e))return"Safari";if((e.includes("chrome/")||vl(e))&&!e.includes("edge/"))return"Chrome";if(wl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _l(t=_e()){return/firefox\//i.test(t)}function yl(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vl(t=_e()){return/crios\//i.test(t)}function bl(t=_e()){return/iemobile/i.test(t)}function wl(t=_e()){return/android/i.test(t)}function Il(t=_e()){return/blackberry/i.test(t)}function El(t=_e()){return/webos/i.test(t)}function Pi(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xg(t=_e()){var e;return Pi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qg(){return fp()&&document.documentMode===10}function Tl(t=_e()){return Pi(t)||wl(t)||El(t)||Il(t)||/windows phone/i.test(t)||bl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e=[]){let n;switch(t){case"Browser":n=ta(_e());break;case"Worker":n=`${ta(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e={}){return Ft(t,"GET","/v2/passwordPolicy",Ut(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=6;class nm{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new na(this),this.idTokenSubscription=new na(this),this.beforeStateQueue=new Zg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ll,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await In.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pl(this,{idToken:e}),r=await ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(ht(this));const n=e?yt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await em(this),n=new nm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Dg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rn(t){return yt(t)}class na{constructor(e){this.auth=e,this.observer=null,this.addObserver=_p(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sm(t){es=t}function Rl(t){return es.loadJS(t)}function im(){return es.recaptchaEnterpriseScript}function om(){return es.gapiScript}function am(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class cm{constructor(){this.enterprise=new lm}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lm{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const um="recaptcha-enterprise",Al="NO_RECAPTCHA";class fm{constructor(e){this.type=um,this.auth=rn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Bg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Hg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Xo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Al)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cm().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Xo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=im();c.length!==0&&(c+=a),Rl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ra(t,e,n,r=!1,s=!1){const i=new fm(t);let o;if(s)o=Al;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Zs(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ra(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ra(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t,e){const n=Zr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(kr(i,e??{}))return s;je(s,"already-initialized")}return n.initialize({options:e})}function hm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pm(t,e,n){const r=rn(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Cl(e),{host:o,port:a}=gm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),mm()}function Cl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gm(t){const e=Cl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sa(o)}}}function sa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function _m(t,e){return Ft(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(t,e){return ar(t,"POST","/v1/accounts:signInWithPassword",Ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e){return ar(t,"POST","/v1/accounts:signInWithEmailLink",Ut(t,e))}async function bm(t,e){return ar(t,"POST","/v1/accounts:signInWithEmailLink",Ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Oi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new tr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zs(e,n,"signInWithPassword",ym);case"emailLink":return vm(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zs(e,r,"signUpPassword",_m);case"emailLink":return bm(e,{idToken:n,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e){return ar(t,"POST","/v1/accounts:signInWithIdp",Ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="http://localhost";class Yt extends Oi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Si(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Yt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return En(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,En(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,En(e,n)}buildRequest(){const e={requestUri:wm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Em(t){const e=Mn(Ln(t)).link,n=e?Mn(Ln(e)).deep_link_id:null,r=Mn(Ln(t)).deep_link_id;return(r?Mn(Ln(r)).link:null)||r||n||e||t}class ki{constructor(e){var n,r,s,i,o,a;const c=Mn(Ln(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Im((s=c.mode)!==null&&s!==void 0?s:null);F(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Em(e);try{return new ki(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ki.parseLink(n);return F(r,"argument-error"),tr._fromEmailAndCode(e,r.code,r.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends cr{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends cr{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends cr{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(t,e){return ar(t,"POST","/v1/accounts:signUp",Ut(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ut._fromIdTokenResponse(e,r,s),o=ia(r);return new Xt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ia(r);return new Xt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ia(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends tt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Lr(e,n,r,s)}}function Ol(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lr._fromErrorAndOperation(t,i,e,r):i})}async function Sm(t,e,n=!1){const r=await er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(t,e,n=!1){const{auth:r}=t;if(Ue(r.app))return Promise.reject(ht(r));const s="reauthenticate";try{const i=await er(t,Ol(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Ci(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),Xt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t,e,n=!1){if(Ue(t.app))return Promise.reject(ht(t));const r="signIn",s=await Ol(t,r,e),i=await Xt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Am(t,e){return kl(rn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t){const e=rn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cm(t,e,n){if(Ue(t.app))return Promise.reject(ht(t));const r=rn(t),o=await Zs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Tm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Nl(t),c}),a=await Xt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Pm(t,e,n){return Ue(t.app)?Promise.reject(ht(t)):Am(yt(t),An.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Nl(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t,e){return yt(t).setPersistence(e)}function km(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function Nm(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}const xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=1e3,Mm=10;class Ml extends Dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Qg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ml.type="LOCAL";const Lm=Ml;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends Dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ll.type="SESSION";const Ni=Ll;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ts(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await xm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Di("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function Fm(t){Qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function $m(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hm(){return xl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="firebaseLocalStorageDb",Bm=1,Ur="firebaseLocalStorage",Fl="fbase_key";class lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ns(t,e){return t.transaction([Ur],e?"readwrite":"readonly").objectStore(Ur)}function Vm(){const t=indexedDB.deleteDatabase(Ul);return new lr(t).toPromise()}function ei(){const t=indexedDB.open(Ul,Bm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ur,{keyPath:Fl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ur)?e(r):(r.close(),await Vm(),e(await ei()))})})}async function oa(t,e,n){const r=ns(t,!0).put({[Fl]:e,value:n});return new lr(r).toPromise()}async function Wm(t,e){const n=ns(t,!1).get(e),r=await new lr(n).toPromise();return r===void 0?null:r.value}function aa(t,e){const n=ns(t,!0).delete(e);return new lr(n).toPromise()}const Km=800,qm=3;class $l{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ei(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(Hm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $m(),!this.activeServiceWorker)return;this.sender=new Um(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ei();return await oa(e,xr,"1"),await aa(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>aa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ns(s,!1).getAll();return new lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$l.type="LOCAL";const zm=$l;new or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e){return e?ft(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Oi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,n){return En(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jm(t){return kl(t.auth,new Mi(t),t.bypassAuthState)}function Ym(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Rm(n,new Mi(t),t.bypassAuthState)}async function Xm(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Sm(n,new Mi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jm;case"linkViaPopup":case"linkViaRedirect":return Xm;case"reauthViaPopup":case"reauthViaRedirect":return Ym;default:je(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new or(2e3,1e4);class pn extends jl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qm.get())};e()}}pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="pendingRedirect",Ir=new Map;class e_ extends jl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ir.get(this.auth._key());if(!e){try{const r=await t_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ir.set(this.auth._key(),e)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t_(t,e){const n=s_(e),r=r_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function n_(t,e){Ir.set(t._key(),e)}function r_(t){return ft(t._redirectPersistence)}function s_(t){return wr(Zm,t.config.apiKey,t.name)}async function i_(t,e,n=!1){if(Ue(t.app))return Promise.reject(ht(t));const r=rn(t),s=Gm(r,e),o=await new e_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=10*60*1e3;class a_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o_&&this.cachedEventUids.clear(),this.cachedEventUids.has(ca(e))}saveEventToCache(e){this.cachedEventUids.add(ca(e)),this.lastProcessedEventTime=Date.now()}}function ca(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(t,e={}){return Ft(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f_=/^https?/;async function d_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await l_(t);for(const n of e)try{if(h_(n))return}catch{}je(t,"unauthorized-domain")}function h_(t){const e=Xs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!f_.test(n))return!1;if(u_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=new or(3e4,6e4);function la(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function g_(t){return new Promise((e,n)=>{var r,s,i;function o(){la(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{la(),n(Xe(t,"network-request-failed"))},timeout:p_.get()})}if(!((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qe().gapi)===null||i===void 0)&&i.load)o();else{const a=am("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},Rl(`${om()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Er=null,e})}let Er=null;function m_(t){return Er=Er||g_(t),Er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new or(5e3,15e3),y_="__/auth/iframe",v_="emulator/auth/iframe",b_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I_(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ai(e,v_):`https://${t.config.authDomain}/${y_}`,r={apiKey:e.apiKey,appName:t.name,v:ir},s=w_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${sr(r).slice(1)}`}async function E_(t){const e=await m_(t),n=Qe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:I_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},__.get());function c(){Qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S_=500,R_=600,A_="_blank",C_="http://localhost";class ua{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P_(t,e,n,r=S_,s=R_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},T_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(a=vl(l)?A_:n),_l(l)&&(e=e||C_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,R])=>`${p}${m}=${R},`,"");if(Xg(l)&&a!=="_self")return O_(e||"",a),new ua(null);const f=window.open(e||"",a,u);F(f,t,"popup-blocked");try{f.focus()}catch{}return new ua(f)}function O_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="__/auth/handler",N_="emulator/auth/handler",D_=encodeURIComponent("fac");async function fa(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ir,eventId:s};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof cr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${D_}=${encodeURIComponent(c)}`:"";return`${M_(t)}?${sr(a).slice(1)}${l}`}function M_({config:t}){return t.emulator?Ai(t,N_):`https://${t.authDomain}/${k_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="webStorageSupport";class L_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ni,this._completeRedirectFn=i_,this._overrideRedirectResult=n_}async _openPopup(e,n,r,s){var i;mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fa(e,n,r,Xs(),s);return P_(e,o,Di())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fa(e,n,r,Xs(),s);return Fm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await E_(e),r=new a_(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ss,{type:Ss},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ss];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=d_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tl()||yl()||Pi()}}const x_=L_;var da="@firebase/auth",ha="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $_(t){gt(new et("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sl(t)},l=new rm(r,s,i,c);return hm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gt(new et("auth-internal",e=>{const n=rn(e.getProvider("auth").getImmediate());return(r=>new U_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(da,ha,F_(t)),Ye(da,ha,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=5*60,H_=Qc("authIdTokenMaxAge")||j_;let pa=null;const B_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>H_)return;const s=n==null?void 0:n.token;pa!==s&&(pa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function V_(t=wg()){const e=Zr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dm(t,{popupRedirectResolver:x_,persistence:[zm,Lm,Ni]}),r=Qc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=B_(i.toString());Nm(n,o,()=>o(n.currentUser)),km(n,a=>o(a))}}const s=op("auth");return s&&pm(n,`http://${s}`),n}function W_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sm({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",W_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$_("Browser");var K_="firebase",q_="11.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(K_,q_,"app");const Bl="@firebase/installations",Li="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=1e4,Wl=`w:${Li}`,Kl="FIS_v2",z_="https://firebaseinstallations.googleapis.com/v1",G_=60*60*1e3,J_="installations",Y_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qt=new nn(J_,Y_,X_);function ql(t){return t instanceof tt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl({projectId:t}){return`${z_}/projects/${t}/installations`}function Gl(t){return{token:t.token,requestStatus:2,expiresIn:Z_(t.expiresIn),creationTime:Date.now()}}async function Jl(t,e){const r=(await e.json()).error;return Qt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Q_(t,{refreshToken:e}){const n=Yl(t);return n.append("Authorization",ey(e)),n}async function Xl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Z_(t){return Number(t.replace("s","000"))}function ey(t){return`${Kl} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=zl(t),s=Yl(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Kl,appId:t.appId,sdkVersion:Wl},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Xl(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Gl(l.authToken)}}else throw await Jl("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=/^[cdef][\w-]{21}$/,ti="";function sy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=iy(t);return ry.test(n)?n:ti}catch{return ti}}function iy(t){return ny(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Map;function eu(t,e){const n=rs(t);tu(n,e),oy(n,e)}function tu(t,e){const n=Zl.get(t);if(n)for(const r of n)r(e)}function oy(t,e){const n=ay();n&&n.postMessage({key:t,fid:e}),cy()}let Wt=null;function ay(){return!Wt&&"BroadcastChannel"in self&&(Wt=new BroadcastChannel("[Firebase] FID Change"),Wt.onmessage=t=>{tu(t.data.key,t.data.fid)}),Wt}function cy(){Zl.size===0&&Wt&&(Wt.close(),Wt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebase-installations-database",uy=1,Zt="firebase-installations-store";let Rs=null;function xi(){return Rs||(Rs=sl(ly,uy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zt)}}})),Rs}async function Fr(t,e){const n=rs(t),s=(await xi()).transaction(Zt,"readwrite"),i=s.objectStore(Zt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&eu(t,e.fid),e}async function nu(t){const e=rs(t),r=(await xi()).transaction(Zt,"readwrite");await r.objectStore(Zt).delete(e),await r.done}async function ss(t,e){const n=rs(t),s=(await xi()).transaction(Zt,"readwrite"),i=s.objectStore(Zt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&eu(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t){let e;const n=await ss(t.appConfig,r=>{const s=fy(r),i=dy(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ti?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fy(t){const e=t||{fid:sy(),registrationStatus:0};return ru(e)}function dy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Qt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=hy(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:py(t)}:{installationEntry:e}}async function hy(t,e){try{const n=await ty(t,e);return Fr(t.appConfig,n)}catch(n){throw ql(n)&&n.customData.serverCode===409?await nu(t.appConfig):await Fr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function py(t){let e=await ga(t.appConfig);for(;e.registrationStatus===1;)await Ql(100),e=await ga(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ui(t);return r||n}return e}function ga(t){return ss(t,e=>{if(!e)throw Qt.create("installation-not-found");return ru(e)})}function ru(t){return gy(t)?{fid:t.fid,registrationStatus:0}:t}function gy(t){return t.registrationStatus===1&&t.registrationTime+Vl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my({appConfig:t,heartbeatServiceProvider:e},n){const r=_y(t,n),s=Q_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Wl,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Xl(()=>fetch(r,a));if(c.ok){const l=await c.json();return Gl(l)}else throw await Jl("Generate Auth Token",c)}function _y(t,{fid:e}){return`${zl(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e=!1){let n;const r=await ss(t.appConfig,i=>{if(!su(i))throw Qt.create("not-registered");const o=i.authToken;if(!e&&by(o))return i;if(o.requestStatus===1)return n=yy(t,e),i;{if(!navigator.onLine)throw Qt.create("app-offline");const a=Iy(i);return n=vy(t,a),a}});return n?await n:r.authToken}async function yy(t,e){let n=await ma(t.appConfig);for(;n.authToken.requestStatus===1;)await Ql(100),n=await ma(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fi(t,e):r}function ma(t){return ss(t,e=>{if(!su(e))throw Qt.create("not-registered");const n=e.authToken;return Ey(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function vy(t,e){try{const n=await my(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Fr(t.appConfig,r),n}catch(n){if(ql(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nu(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Fr(t.appConfig,r)}throw n}}function su(t){return t!==void 0&&t.registrationStatus===2}function by(t){return t.requestStatus===2&&!wy(t)}function wy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+G_}function Iy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ey(t){return t.requestStatus===1&&t.requestTime+Vl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ui(e);return r?r.catch(console.error):Fi(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(t,e=!1){const n=t;return await Ry(n),(await Fi(n,e)).token}async function Ry(t){const{registrationPromise:e}=await Ui(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){if(!t||!t.options)throw As("App Configuration");if(!t.name)throw As("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw As(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function As(t){return Qt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="installations",Cy="installations-internal",Py=t=>{const e=t.getProvider("app").getImmediate(),n=Ay(e),r=Zr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Oy=t=>{const e=t.getProvider("app").getImmediate(),n=Zr(e,iu).getImmediate();return{getId:()=>Ty(n),getToken:s=>Sy(n,s)}};function ky(){gt(new et(iu,Py,"PUBLIC")),gt(new et(Cy,Oy,"PRIVATE"))}ky();Ye(Bl,Li);Ye(Bl,Li,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="analytics",Ny="firebase_id",Dy="origin",My=60*1e3,Ly="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$i="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Ei("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new nn("analytics","Analytics",xy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){if(!t.startsWith($i)){const e=Me.create("invalid-gtag-resource",{gtagURL:t});return we.warn(e.message),""}return t}function ou(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Fy(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function $y(t,e){const n=Fy("firebase-js-sdk-policy",{createScriptURL:Uy}),r=document.createElement("script"),s=`${$i}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function jy(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Hy(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await ou(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){we.error(a)}t("config",s,i)}async function By(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await ou(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){we.error(i)}}function Vy(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await By(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await Hy(t,e,n,r,a,c)}else if(i==="consent"){const[a,c]=o;t("consent",a,c)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){we.error(a)}}return s}function Wy(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Vy(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Ky(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($i)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=30,zy=1e3;class Gy{constructor(e={},n=zy){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const au=new Gy;function Jy(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Yy(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Jy(r)},i=Ly.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Xy(t,e=au,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Me.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Me.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ev;return setTimeout(async()=>{a.abort()},My),cu({appId:r,apiKey:s,measurementId:i},o,a,e)}async function cu(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=au){var i;const{appId:o,measurementId:a}=t;try{await Qy(r,e)}catch(c){if(a)return we.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Yy(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Zy(l)){if(s.deleteThrottleMetadata(o),a)return we.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ho(n,s.intervalMillis,qy):Ho(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),we.debug(`Calling attemptFetch again in ${u} millis`),cu(t,f,r,s)}}function Qy(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Me.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Zy(t){if(!(t instanceof tt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ev{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(){if(el())try{await tl()}catch(t){return we.warn(Me.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return we.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rv(t,e,n,r,s,i,o){var a;const c=Xy(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&we.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>we.error(m)),e.push(c);const l=nv().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);Ky(i)||$y(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Dy]="firebase",p.update=!0,f!=null&&(p[Ny]=f),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.app=e}_delete(){return delete Kn[this.app.options.appId],Promise.resolve()}}let Kn={},ya=[];const va={};let Cs="dataLayer",iv="gtag",ba,lu,wa=!1;function ov(){const t=[];if(Zc()&&t.push("This is a browser extension environment."),dp()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:e});we.warn(n.message)}}function av(t,e,n){ov();const r=t.options.appId;if(!r)throw Me.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)we.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(Kn[r]!=null)throw Me.create("already-exists",{id:r});if(!wa){jy(Cs);const{wrappedGtag:i,gtagCore:o}=Wy(Kn,ya,va,Cs,iv);lu=i,ba=o,wa=!0}return Kn[r]=rv(t,ya,va,e,ba,Cs,n),new sv(t)}function cv(t,e,n,r){t=yt(t),tv(lu,Kn[t.app.options.appId],e,n,r).catch(s=>we.error(s))}const Ia="@firebase/analytics",Ea="0.10.11";function lv(){gt(new et(_a,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return av(r,s,n)},"PUBLIC")),gt(new et("analytics-internal",t,"PRIVATE")),Ye(Ia,Ea),Ye(Ia,Ea,"esm2017");function t(e){try{const n=e.getProvider(_a).getImmediate();return{logEvent:(r,s,i)=>cv(n,r,s,i)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}lv();const uv={apiKey:"AIzaSyCHShheA5Sjz31d7KhE-JdUB5xUnrfQlMQ",authDomain:"biljard-elo.firebaseapp.com",projectId:"biljard-elo",storageBucket:"biljard-elo.firebasestorage.app",messagingSenderId:"201889527124",appId:"1:201889527124:web:249d8ff8c45ee0128f44c1",measurementId:"G-J3V149T6S5"},fv=il(uv);var sn="https://firebase-function-qwcbnzzvka-uc.a.run.app/api";const Dt=V_(fv);Om(Dt,Ni);async function dv(t){try{let n=await(await fetch(sn+"/games/delete/"+t)).json();console.log(n)}catch(e){console.error("Error fetching games:",e)}}async function hv(t,e){try{const r=await(await fetch(sn+"/games/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gid:t,token:e})})).json();console.log("Verified game response: "),console.log(r)}catch(n){console.error("Error creating new player:",n)}}async function pv(t,e){try{console.log(JSON.stringify({token:e,username:t}));const r=await(await fetch(sn+"/players/new",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e,username:t})})).json();console.log("New player"),console.log(r)}catch(n){console.error("Error creating new player:",n)}}async function gv(t,e,n){try{const s=await(await Cm(Dt,e,n)).user.getIdToken(),o=await(await fetch(sn+"/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:s,email:e})})).json();console.log("New user: "),console.log(o),pv(t,s)}catch(r){console.error("Error creating new user:",r)}}async function mv(t,e){try{const n=await Pm(Dt,t,e);Dt.currentUser=n,console.log(Dt.currentUser);const r=await n.user.getIdToken(),i=await(await fetch(sn+"/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,token:r})})).json()}catch(n){console.error("Error during login:",n)}}async function _v(t,e){const n=await Dt.currentUser.user.getIdToken();try{let s=await(await fetch(sn+"/games/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({players:t,winner:e,token:n})})).json();console.log(s)}catch(r){console.error("Error adding game:",r)}}async function yv(){let t="";if(Dt.currentUser!=null&&(t=Dt.currentUser.uid),t.length<1)return console.log("error"),{error:"log in"};try{let n=await(await fetch(sn+"/games/unverified/"+t)).json();return console.log(n),n}catch(e){console.error("Error fetching player:",e)}}const vv={data(){return{opponent:"",winner:""}},methods:{async submitForm(){try{_v([this.opponent,this.winner],this.winner),console.log(`Game added: Opponent - ${this.opponent}, Winner - ${this.winner}`),this.opponent="",this.winner=""}catch(t){console.error("Error adding game:",t)}}}},bv={class:"add-game-container"},wv={class:"form-group"},Iv={class:"form-group"};function Ev(t,e,n,r,s,i){return ie(),ce("div",bv,[e[6]||(e[6]=k("h2",null,"Add Game",-1)),k("form",{onSubmit:e[2]||(e[2]=yi((...o)=>i.submitForm&&i.submitForm(...o),["prevent"]))},[k("div",wv,[e[3]||(e[3]=k("label",{style:{"font-weight":"bold"},for:"opponent"},"Opponent:",-1)),qt(k("input",{style:{"font-style":"italic"},type:"text",id:"opponent","onUpdate:modelValue":e[0]||(e[0]=o=>s.opponent=o),placeholder:"Enter opponent's username",required:""},null,512),[[zt,s.opponent]])]),k("div",Iv,[e[4]||(e[4]=k("label",{style:{"font-weight":"bold"},for:"winner"},"Winner:",-1)),qt(k("input",{style:{"font-style":"italic"},type:"text",id:"winner","onUpdate:modelValue":e[1]||(e[1]=o=>s.winner=o),placeholder:"Enter winner's username",required:""},null,512),[[zt,s.winner]])]),e[5]||(e[5]=k("button",{type:"submit",class:"submit-btn",id:"submit_button"},"Add Game",-1))],32)])}const Tv=tn(vv,[["render",Ev],["__scopeId","data-v-17b42c66"]]),Sv={data(){return yv()},computed:{sortedGameHistory(){return this.gameHistory.slice().reverse()}},methods:{acceptRequest(t){console.log("Accepted:",t),this.removeRequest(t),hv(t.id)},rejectRequest(t){console.log("Rejected:",t),this.removeRequest(t),dv(t.id)},removeRequest(t){this.pendingRequests=this.pendingRequests.filter(e=>e.id!==t.id)}}},Rv={class:"my-profile"},Av={class:"profile-info"},Cv={class:"game-history"},Pv={class:"scrollable-history"},Ov={class:"my-profile",id:"gameRequest"},kv={key:0},Nv={key:1},Dv=["onClick"],Mv=["onClick"];function Lv(t,e,n,r,s,i){return ie(),ce(be,null,[k("div",Rv,[e[3]||(e[3]=k("h1",{style:{"font-weight":"bold","font-style":"italic"}},"My Profile",-1)),k("div",Av,[k("p",null,[e[0]||(e[0]=k("strong",null,"Username:",-1)),ct(" "+Ne(t.username),1)]),k("p",null,[e[1]||(e[1]=k("strong",null,"ELO:",-1)),ct(" "+Ne(t.elo),1)])]),k("div",Cv,[e[2]||(e[2]=k("h2",null,"Game History",-1)),k("div",Pv,[k("ul",null,[(ie(!0),ce(be,null,xs(i.sortedGameHistory,o=>(ie(),ce("li",{key:o.id},Ne(o.date)+" - "+Ne(o.opponent)+" - "+Ne(o.result),1))),128))])])])]),k("div",Ov,[e[5]||(e[5]=k("h1",{style:{"font-weight":"bold","font-style":"italic","font-size":"20px","margin-bottom":"15px"}},"Pending Requests",-1)),t.pendingRequests.length===0?(ie(),ce("div",kv,e[4]||(e[4]=[k("p",null,"You have no pending game requests.",-1)]))):(ie(),ce("ul",Nv,[(ie(!0),ce(be,null,xs(t.pendingRequests,o=>(ie(),ce("li",{key:o.id},[ct(Ne(o.game)+" - "+Ne(o.opponent)+" ",1),k("button",{onClick:a=>i.acceptRequest(o)},"Accept",8,Dv),k("button",{onClick:a=>i.rejectRequest(o),id:"reject-btn"},"Reject",8,Mv)]))),128))]))])],64)}const xv=tn(Sv,[["render",Lv],["__scopeId","data-v-d37b495e"]]),Uv={data(){return{email:"",password:"",errorMessage:""}},methods:{async handleLogin(){try{mv(this.email,this.password),console.log("Login successful"),this.$router.push("/my-profile")}catch(t){console.error("Login error:",t),this.errorMessage="Invalid email or password."}},goToRegister(){this.$router.push("/register")}}},Fv={class:"login-page"},$v={class:"form-group"},jv={class:"form-group"},Hv={key:0,class:"error"};function Bv(t,e,n,r,s,i){return ie(),ce("div",Fv,[e[7]||(e[7]=k("h1",{style:{"font-weight":"bold"}},"Login",-1)),k("form",{onSubmit:e[3]||(e[3]=yi((...o)=>i.handleLogin&&i.handleLogin(...o),["prevent"]))},[k("div",$v,[e[4]||(e[4]=k("label",{for:"email"},"Email:",-1)),qt(k("input",{type:"email",id:"email",placeholder:"Enter your Email","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),required:""},null,512),[[zt,s.email]])]),k("div",jv,[e[5]||(e[5]=k("label",{for:"password"},"Password:",-1)),qt(k("input",{type:"password",id:"password",placeholder:"Enter your password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),required:""},null,512),[[zt,s.password]])]),e[6]||(e[6]=k("button",{type:"submit",class:"register-button"},"Login",-1)),k("button",{type:"button",class:"register-button",onClick:e[2]||(e[2]=(...o)=>i.goToRegister&&i.goToRegister(...o))},"Register")],32),s.errorMessage?(ie(),ce("p",Hv,Ne(s.errorMessage),1)):zf("",!0)])}const Vv=tn(Uv,[["render",Bv],["__scopeId","data-v-834ea807"]]),Wv={data(){return{username:"",password:"",email:""}},methods:{handleRegister(){console.log("Username:",this.username),console.log("Password:",this.password),console.log("Email:",this.email),gv(this.username,this.email,this.password)}}},Kv={class:"register-page"},qv={class:"form-group"},zv={class:"form-group"},Gv={class:"form-group"},Jv={type:"submit",class:"register-button"};function Yv(t,e,n,r,s,i){const o=Ls("router-link");return ie(),ce("div",Kv,[e[8]||(e[8]=k("h1",{style:{"font-weight":"bold","font-style":"italic"}},"Register",-1)),k("form",{onSubmit:e[3]||(e[3]=yi((...a)=>i.handleRegister&&i.handleRegister(...a),["prevent"]))},[k("div",qv,[e[4]||(e[4]=k("label",{for:"username"},"Username:",-1)),qt(k("input",{type:"text",id:"username",placeholder:"Enter your username","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a),required:""},null,512),[[zt,s.username]])]),k("div",zv,[e[5]||(e[5]=k("label",{for:"password"},"Password:",-1)),qt(k("input",{type:"password",id:"password",placeholder:"Enter your password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),required:""},null,512),[[zt,s.password]])]),k("div",Gv,[e[6]||(e[6]=k("label",{for:"email"},"Email:",-1)),qt(k("input",{type:"email",id:"email",placeholder:"Enter your Email","onUpdate:modelValue":e[2]||(e[2]=a=>s.email=a),required:""},null,512),[[zt,s.email]])]),k("button",Jv,[oe(o,{to:"/login",class:"register-button"},{default:hn(()=>e[7]||(e[7]=[ct("Register")])),_:1})])],32)])}const Xv=tn(Wv,[["render",Yv]]),Qv={name:"Slots",data(){return{}},methods:{}},Zv={class:"slots"};function eb(t,e,n,r,s,i){return ie(),ce("div",Zv,e[0]||(e[0]=[k("h1",null,"You found the easter egg!",-1),k("iframe",{src:"https://free-slots.games/nodevslots/the-fruit-machine/index.html",title:"Fruit Machine - free slot ",width:"640",height:"480"},null,-1)]))}const tb=tn(Qv,[["render",eb],["__scopeId","data-v-e3551632"]]),nb=Yh({history:Sh("/"),routes:[{path:"/",name:"home",component:Qh},{path:"/about",name:"about",component:()=>Gd(()=>import("./AboutView-Buqnhb1-.js"),__vite__mapDeps([0,1]))},{path:"/add-game",name:"addgame",component:Tv},{path:"/leaderboard",name:"leaderboard",component:vi},{path:"/my-profile",name:"myprofile",component:xv},{path:"/login",name:"loginpage",component:Vv},{path:"/register",name:"registerpage",component:Xv},{path:"/slots",name:"slots",component:tb}]}),ji=Pd(Kd);ji.use(Dd());ji.use(nb);ji.mount("#app");export{tn as _,k as a,ce as c,ie as o};
