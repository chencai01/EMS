import{d as f,a as d,L as h,o as i,b as y,f as r,t as v,u as o,b4 as w,e as t,w as e,g as s,b5 as _,q as a,y as u,M as b}from"./index-BSlF4gO8.js";const g={class:"mb-2"},k=r("div",{class:"card-header"},"组件方式判断权限",-1),x=r("div",{class:"card-header"},"函数方式判断权限",-1),B=r("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1),D=f({name:"PermissionButtonRouter",__name:"index",setup(A){return(C,N)=>{const n=d("el-button"),p=d("Auth"),l=d("el-space"),c=d("el-card"),m=h("auth");return i(),y("div",null,[r("p",g,"当前拥有的code列表："+v(o(w)()),1),t(c,{shadow:"never",class:"mb-2"},{header:e(()=>[k]),default:e(()=>[t(l,{wrap:""},{default:e(()=>[t(p,{value:"permission:btn:add"},{default:e(()=>[t(n,{plain:"",type:"warning"},{default:e(()=>[s(" 拥有code：'permission:btn:add' 权限可见 ")]),_:1})]),_:1}),t(p,{value:["permission:btn:edit"]},{default:e(()=>[t(n,{plain:"",type:"primary"},{default:e(()=>[s(" 拥有code：['permission:btn:edit'] 权限可见 ")]),_:1})]),_:1}),t(p,{value:["permission:btn:add","permission:btn:edit","permission:btn:delete"]},{default:e(()=>[t(n,{plain:"",type:"danger"},{default:e(()=>[s(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")]),_:1})]),_:1})]),_:1})]),_:1}),t(c,{shadow:"never",class:"mb-2"},{header:e(()=>[x]),default:e(()=>[t(l,{wrap:""},{default:e(()=>[o(_)("permission:btn:add")?(i(),a(n,{key:0,plain:"",type:"warning"},{default:e(()=>[s(" 拥有code：'permission:btn:add' 权限可见 ")]),_:1})):u("",!0),o(_)(["permission:btn:edit"])?(i(),a(n,{key:1,plain:"",type:"primary"},{default:e(()=>[s(" 拥有code：['permission:btn:edit'] 权限可见 ")]),_:1})):u("",!0),o(_)(["permission:btn:add","permission:btn:edit","permission:btn:delete"])?(i(),a(n,{key:2,plain:"",type:"danger"},{default:e(()=>[s(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")]),_:1})):u("",!0)]),_:1})]),_:1}),t(c,{shadow:"never"},{header:e(()=>[B]),default:e(()=>[t(l,{wrap:""},{default:e(()=>[b((i(),a(n,{plain:"",type:"warning"},{default:e(()=>[s(" 拥有code：'permission:btn:add' 权限可见 ")]),_:1})),[[m,"permission:btn:add"]]),b((i(),a(n,{plain:"",type:"primary"},{default:e(()=>[s(" 拥有code：['permission:btn:edit'] 权限可见 ")]),_:1})),[[m,["permission:btn:edit"]]]),b((i(),a(n,{plain:"",type:"danger"},{default:e(()=>[s(" 拥有code：['permission:btn:add', 'permission:btn:edit', 'permission:btn:delete'] 权限可见 ")]),_:1})),[[m,["permission:btn:add","permission:btn:edit","permission:btn:delete"]]])]),_:1})]),_:1})])}}});export{D as default};