import{d as g,j as x,r as l,v as I,u as n,l as L,G as R,L as k,M as S,o as B,c as E,b as P,ae as w,_ as y}from"./index-B378b16y.js";const D=["element-loading-text"],M=["src"],b=g({name:"LayFrame",__name:"frame",props:{frameInfo:{}},setup(v){var m,u,d;const o=v,{t:p}=x(),f=l(!0),t=I(),r=l(""),i=l(null);(m=n(t.meta))!=null&&m.frameSrc&&(r.value=(u=n(t.meta))==null?void 0:u.frameSrc),((d=n(t.meta))==null?void 0:d.frameLoading)===!1&&c();function c(){f.value=!1}function h(){w(()=>{const e=n(i);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",()=>{c()}):e.onload=()=>{c()}})}return L(()=>t.fullPath,e=>{var a,s,_;t.name==="Redirect"&&e.includes((a=o.frameInfo)==null?void 0:a.fullPath)&&(r.value=e,f.value=!0),((s=o.frameInfo)==null?void 0:s.fullPath)===e&&(r.value=(_=o.frameInfo)==null?void 0:_.frameSrc)}),R(()=>{h()}),(e,a)=>{const s=k("loading");return S((B(),E("div",{class:"frame","element-loading-text":n(p)("status.pureLoad")},[P("iframe",{ref_key:"frameRef",ref:i,src:r.value,class:"frame-iframe"},null,8,M)],8,D)),[[s,f.value]])}}}),C=y(b,[["__scopeId","data-v-c4880d91"]]);export{C as default};