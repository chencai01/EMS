import{a as t}from"./columns-BttWbMkM.js";import r from"./infoTable-LDbMey-1.js";import{d as m,r as u,G as c,o as d,q as f,u as p}from"./index-BSlF4gO8.js";const I=m({name:"BMUInfo",__name:"index",props:{data:Array},setup(e){const n=u([]),s=e;return c(()=>{for(const o of s.data){const a={index:"BMU "+o.device_model,id:o.id,sn:o.sn,hw:o.hw,sw:o.sw};n.value.push(a)}}),(o,a)=>(d(),f(r,{data:n.value,column:p(t)},null,8,["data","column"]))}});export{I as _};