import{o as a,c as n,b as s,d as z,i as M,v as R,j as E,r as I,l as L,a as $,u as t,m as d,w as S,A as p,F as b,s as i,t as m,y as h,N as B,_ as F}from"./index-B378b16y.js";import{I as D}from"./icon-settings-B7co2eUu.js";const P={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},j=s("g",{fill:"none","fill-rule":"evenodd"},[s("path",{d:"M0 0h16v16H0z"}),s("path",{fill:"#4E5969",d:"M6.722 1.778a.5.5 0 0 1 .5.5v4.444a.5.5 0 0 1-.5.5H2.278a.5.5 0 0 1-.5-.5V2.278a.5.5 0 0 1 .5-.5zM5.667 3.333H3.333v2.334h2.334zM13.722 1.778a.5.5 0 0 1 .5.5v4.444a.5.5 0 0 1-.5.5H9.278a.5.5 0 0 1-.5-.5V2.278a.5.5 0 0 1 .5-.5zm-1.055 1.555h-2.334v2.334h2.334zM13.722 8.778a.5.5 0 0 1 .5.5v4.444a.5.5 0 0 1-.5.5H9.278a.5.5 0 0 1-.5-.5V9.278a.5.5 0 0 1 .5-.5zm-1.055 1.555h-2.334v2.334h2.334zM6.722 8.778a.5.5 0 0 1 .5.5v4.444a.5.5 0 0 1-.5.5H2.278a.5.5 0 0 1-.5-.5V9.278a.5.5 0 0 1 .5-.5zm-1.055 1.555H3.333v2.334h2.334z"})],-1),A=[j];function U(C,k){return a(),n("svg",P,[...A])}const Z={render:U},q={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},G=s("g",{fill:"none","fill-rule":"evenodd"},[s("path",{d:"M0 0h16v16H0z"}),s("path",{fill:"#86909C",d:"M2.278 4.444h11.444a.5.5 0 0 0 .5-.5v-.777a.5.5 0 0 0-.5-.5H2.278a.5.5 0 0 0-.5.5v.777a.5.5 0 0 0 .5.5m0 4.445h11.444a.5.5 0 0 0 .5-.5V7.61a.5.5 0 0 0-.5-.5H2.278a.5.5 0 0 0-.5.5v.778a.5.5 0 0 0 .5.5m0 4.444h11.444a.5.5 0 0 0 .5-.5v-.777a.5.5 0 0 0-.5-.5H2.278a.5.5 0 0 0-.5.5v.777a.5.5 0 0 0 .5.5"})],-1),J=[G];function K(C,k){return a(),n("svg",q,[...J])}const O={render:K},Q={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12"},T=s("g",{fill:"none","fill-rule":"evenodd",transform:"translate(-2 -2)"},[s("rect",{width:"15",height:"15",x:".5",y:".5",stroke:"#E5E8EF",rx:"2"}),s("path",{fill:"#86909C",d:"M3.5 9h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5"})],-1),W=[T];function X(C,k){return a(),n("svg",Q,[...W])}const Y={render:X},ee={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12"},te=s("g",{fill:"none","fill-rule":"evenodd",transform:"translate(-2 -2)"},[s("rect",{width:"15",height:"15",x:".5",y:".5",stroke:"#E5E8EF",rx:"2"}),s("path",{fill:"#86909C",d:"M8.5 3a.5.5 0 0 1 .5.5V7h3.5a.5.5 0 0 1 .492.41L13 7.5v1a.5.5 0 0 1-.5.5H8.999L9 12.5a.5.5 0 0 1-.41.492L8.5 13h-1a.5.5 0 0 1-.5-.5L6.999 9H3.5a.5.5 0 0 1-.492-.41L3 8.5v-1a.5.5 0 0 1 .5-.5H7V3.5a.5.5 0 0 1 .41-.492L7.5 3Z"})],-1),se=[te];function ae(C,k){return a(),n("svg",ee,[...se])}const oe={render:ae},ie={class:"device"},ne={key:0,class:"flex items-center w-[155px]"},le=z({__name:"index",props:{activeName:{default:"pcs"},type:{default:"card"},sliderValue:{}},emits:["onSettingClick","typeClick","sliderChange"],setup(C,{emit:k}){const v=M(),f=R(),{t:u}=E(),o=C,g=k,l=I(3),w=c=>{c===1?l.value=l.value>=4?4:l.value+1:l.value=l.value<=2?2:l.value-1,g("sliderChange",l.value)},x=c=>{g("sliderChange",c)};return L(()=>o.sliderValue,c=>{l.value=c},{immediate:!0}),(c,e)=>{var y,_;const V=$("router-view"),H=$("el-slider");return a(),n("div",{class:i(["device-container",(y=t(f).params)!=null&&y.id?"detail":""])},[(_=t(f).params)!=null&&_.id?(a(),d(V,{key:0},{default:S(({Component:r,route:N})=>[(a(),d(p(r),{key:N.fullPath}))]),_:1})):(a(),n(b,{key:1},[s("div",ie,[s("div",{class:i(["deviceRoute",{"is-active":o.activeName==="pcs"}]),onClick:e[0]||(e[0]=()=>{t(v).push("/deviceControl/pcs")})},m(t(u)("common.pcs")),3),s("div",{class:i(["deviceRoute",{"is-active":o.activeName==="stack"}]),onClick:e[1]||(e[1]=()=>{t(v).push("/deviceControl/stack")})},m(t(u)("common.batteryStack")),3),s("div",{class:i(["deviceRoute",{"is-active":o.activeName==="cluster"}]),onClick:e[2]||(e[2]=()=>{t(v).push("/deviceControl/cluster")})},m(t(u)("common.batteryCluster")),3),s("div",{class:i(["deviceRoute",{"is-active":o.activeName==="pack"}]),onClick:e[3]||(e[3]=()=>{t(v).push("/deviceControl/pack")})},m(t(u)("common.pack")),3),s("div",{class:i(["deviceRoute",{"is-active":o.activeName==="meter"}]),onClick:e[4]||(e[4]=()=>{t(v).push("/deviceControl/meter")})},m(t(u)("common.meter")),3),s("div",{class:i(["deviceRoute",{"is-active":o.activeName==="ac"}]),onClick:e[5]||(e[5]=()=>{t(v).push("/deviceControl/ac")})},m(t(u)("common.ac")),3),s("div",{class:i(["deviceRoute",{"is-active":o.activeName==="lc"}]),onClick:e[6]||(e[6]=()=>{t(v).push("/deviceControl/lc")})},m(t(u)("common.lc")),3)]),/lc$/.test(t(f).path)?h("",!0):(a(),n("div",{key:0,class:i(["icons",{iconsPack:o.activeName==="pack"}])},[o.activeName==="pack"?(a(),n("div",ne,[o.type==="card"?(a(),n("div",{key:0,class:"icon",onClick:e[7]||(e[7]=r=>w(0))},[(a(),d(p(t(Y))))])):h("",!0),o.type==="card"?(a(),d(H,{key:1,modelValue:l.value,"onUpdate:modelValue":e[8]||(e[8]=r=>l.value=r),min:2,max:4,step:1,size:"small","show-tooltip":!1,onChange:x},null,8,["modelValue"])):h("",!0),o.type==="card"?(a(),n("div",{key:2,class:"icon",onClick:e[9]||(e[9]=r=>w(1))},[(a(),d(p(t(oe))))])):h("",!0)])):h("",!0),o.activeName==="pcs"?(a(),n("div",{key:1,class:"icon",onClick:e[10]||(e[10]=r=>g("onSettingClick",{}))},[(a(),d(p(t(D))))])):h("",!0),s("div",{class:i(["icon",{active:o.type==="card"}]),onClick:e[11]||(e[11]=r=>c.$emit("typeClick","card"))},[(a(),d(p(t(Z))))],2),s("div",{class:i(["icon",{active:o.type==="list"}]),onClick:e[12]||(e[12]=r=>c.$emit("typeClick","list"))},[(a(),d(p(t(O))))],2)],2)),B(c.$slots,"default",{},void 0,!0)],64))],2)}}}),de=F(le,[["__scopeId","data-v-5d7bb14f"]]);export{de as default};