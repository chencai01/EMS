import u from"./index-CXuwZwj9.js";import y from"./index-CFoF5vIs.js";import v from"./index-DbMUxbCf.js";import{d,r as f,l as k,a as r,o as e,q as o,w as s,b,i as E,u as c,F as C,A as x,y as g,_ as h}from"./index-BSlF4gO8.js";import"./eventQuery-BO16v0CD.js";import"./columns-pva7bKn_.js";import"./xlsx-DaVhO591.js";const q=[{key:"activityEvent",title:"activityEvent",component:u},{key:"historyEvent",title:"historyEvent",component:y},{key:"operationLog",title:"operationLog",component:v}],L=d({name:"EventQuery",__name:"index",setup(B){const n=f(0),{t:i}=k(),l=({index:a})=>{n.value=a};return(a,w)=>{const p=r("el-tab-pane"),m=r("el-tabs");return e(),o(m,{class:"query-container",onTabClick:l},{default:s(()=>[(e(!0),b(C,null,E(c(q),(t,_)=>(e(),o(p,{key:t.key,class:"query",label:c(i)("query."+t.title),lazy:!0},{default:s(()=>[n.value==_?(e(),o(x(t.component),{key:0})):g("",!0)]),_:2},1032,["label"]))),128))]),_:1})}}}),O=h(L,[["__scopeId","data-v-0aec1c0a"]]);export{O as default};