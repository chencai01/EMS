import{d as f,r as m,j as u,a as r,o as n,m as c,w as b,c as g,F as _,n as h,u as o,_ as y}from"./index-B378b16y.js";const x={background:"rgba(243,244,247,0.4)",color:"#86909C",fontSize:"14px",height:"48px",fontFamily:"PingFangSC-Medium, PingFang SC",lineHeight:"20px"},S={height:"60px",fontWeight:"600",color:"#333333",fontFamily:"PingFangSC-Semibold, PingFang SC",lineHeight:"30px",fontSize:"14px"},C=f({name:"InfoTable",__name:"infoTable",props:{data:Array,column:Array},setup(e){const l=e,s=m([]);s.value=Object.keys(l.data).map(a=>({[a]:l.data[a]}));const{locale:F,t:p}=u();return(a,k)=>{const d=r("el-table-column"),i=r("el-table");return n(),c(i,{class:"dataTable",data:e.data,"header-cell-style":o(x),"row-style":o(S)},{default:b(()=>[(n(!0),g(_,null,h(e.column,t=>(n(),c(d,{key:t.prop,prop:t.prop,label:o(p)("deviceInfo."+t.label)},null,8,["prop","label"]))),128))]),_:1},8,["data","header-cell-style","row-style"])}}}),I=y(C,[["__scopeId","data-v-f0f05fba"]]);export{I as default};