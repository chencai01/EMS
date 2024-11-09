var q=Object.defineProperty;var _=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(t,e,a)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,S=(t,e)=>{for(var a in e||(e={}))G.call(e,a)&&w(t,a,e[a]);if(_)for(var a of _(e))V.call(e,a)&&w(t,a,e[a]);return t};import{K as P,c as A,aP as O,a6 as D,l as Q,r as M,T as B,aQ as W,V as K,Y as E,aq as Y,aR as J,o as L,b as H,f as p}from"./index-BSlF4gO8.js";import{a as k,c as U}from"./useTranslationLang-TJeE49bz.js";function X(){const{$storage:t,$config:e}=P(),a=()=>{var r,b,i,m,h,c,$,y,g,v,l,n,d,f,s,T,C;O().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=D),t.locale||(t.locale={locale:(r=e==null?void 0:e.Locale)!=null?r:"zh"},Q().locale.value=(b=e==null?void 0:e.Locale)!=null?b:"zh"),t.layout||(t.layout={layout:(i=e==null?void 0:e.Layout)!=null?i:"vertical",theme:(m=e==null?void 0:e.Theme)!=null?m:"light",darkMode:(h=e==null?void 0:e.DarkMode)!=null?h:!1,sidebarStatus:(c=e==null?void 0:e.SidebarStatus)!=null?c:!0,epThemeColor:($=e==null?void 0:e.EpThemeColor)!=null?$:"#409EFF",themeColor:(y=e==null?void 0:e.Theme)!=null?y:"light",overallStyle:(g=e==null?void 0:e.OverallStyle)!=null?g:"light"}),t.configure||(t.configure={grey:(v=e==null?void 0:e.Grey)!=null?v:!1,weak:(l=e==null?void 0:e.Weak)!=null?l:!1,hideTabs:(n=e==null?void 0:e.HideTabs)!=null?n:!1,hideFooter:(d=e.HideFooter)!=null?d:!0,showLogo:(f=e==null?void 0:e.ShowLogo)!=null?f:!0,showModel:(s=e==null?void 0:e.ShowModel)!=null?s:"smart",multiTagsCache:(T=e==null?void 0:e.MultiTagsCache)!=null?T:!1,stretch:(C=e==null?void 0:e.Stretch)!=null?C:!1})},o=A(()=>t==null?void 0:t.layout.layout),u=A(()=>t.layout);return{layout:o,layoutTheme:u,initStorage:a}}const x={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"D:/gitee/pure-admin-thin/node_modules/.pnpm/@pureadmin+theme@3.2.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #000000d9 !default;
        $menuBg: #fff !default;
        $menuHover: #f6f6f6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: rgb(0 0 0 / 60%) !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: rgb(64 145 247 / 15%) !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: rgb(105 58 201 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: rgb(216 68 147 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: rgb(225 60 57 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: rgb(232 95 51 / 15%) !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: rgb(89 191 193 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: rgb(96 172 128 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `}]},Z="/",ee="assets",R=t=>{let e=t.replace("#","").match(/../g);for(let a=0;a<3;a++)e[a]=parseInt(e[a],16);return e},j=(t,e,a)=>{let o=[t.toString(16),e.toString(16),a.toString(16)];for(let u=0;u<3;u++)o[u].length==1&&(o[u]=`0${o[u]}`);return`#${o.join("")}`},te=(t,e)=>{let a=R(t);for(let o=0;o<3;o++)a[o]=Math.floor(a[o]*(1-e));return j(a[0],a[1],a[2])},ae=(t,e)=>{let a=R(t);for(let o=0;o<3;o++)a[o]=Math.floor((255-a[o])*e+a[o]);return j(a[0],a[1],a[2])},N=t=>`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`,z=({scopeName:t,multipleScopeVars:e})=>{const a=Array.isArray(e)&&e.length?e:x.multipleScopeVars;let o=document.documentElement.className;new RegExp(N(t)).test(o)||(a.forEach(u=>{o=o.replace(new RegExp(N(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=o.replace(/(^\s+|\s+$)/g,""))},I=({id:t,href:e})=>{const a=document.createElement("link");return a.rel="stylesheet",a.href=e,a.id=t,a},oe=t=>{const e=S({scopeName:"theme-default",customLinkHref:r=>r},t),a=e.themeLinkTagId||x.themeLinkTagId;let o=document.getElementById(a);const u=e.customLinkHref(`${Z.replace(/\/$/,"")}${`/${ee}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(o){o.id=`${a}_old`;const r=I({id:a,href:u});o.nextSibling?o.parentNode.insertBefore(r,o.nextSibling):o.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{o.parentNode.removeChild(o),o=null},60),z(e)};return}o=I({id:a,href:u}),z(e),document[(e.themeLinkTagInjectTo||x.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(o)};function ye(){var g,v;const{layoutTheme:t,layout:e}=X(),a=M([{color:"#ffffff",themeColor:"light"},{color:"#1b2a47",themeColor:"default"},{color:"#722ed1",themeColor:"saucePurple"},{color:"#eb2f96",themeColor:"pink"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"}]),{$storage:o}=P(),u=M((g=o==null?void 0:o.layout)==null?void 0:g.darkMode),r=M((v=o==null?void 0:o.layout)==null?void 0:v.overallStyle),b=document.documentElement;function i(l,n,d){const f=d||document.body;let{className:s}=f;s=s.replace(n,"").trim(),f.className=l?`${s} ${n}`:s}function m(l=(d=>(d=B().Theme)!=null?d:"light")(),n=!0){var s,T;t.value.theme=l,oe({scopeName:`layout-theme-${l}`});const f=o.layout.themeColor;if(o.layout={layout:e.value,theme:l,darkMode:u.value,sidebarStatus:(s=o.layout)==null?void 0:s.sidebarStatus,epThemeColor:(T=o.layout)==null?void 0:T.epThemeColor,themeColor:n?l:f,overallStyle:r.value},l==="default"||l==="light")c(B().EpThemeColor);else{const C=a.value.find(F=>F.themeColor===l);c(C.color)}}function h(l,n,d){document.documentElement.style.setProperty(`--el-color-primary-${l}-${n}`,u.value?te(d,n/10):ae(d,n/10))}const c=l=>{k().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let n=1;n<=2;n++)h("dark",n,l);for(let n=1;n<=9;n++)h("light",n,l)};function $(l){r.value=l,k().epTheme==="light"&&u.value?m("default",!1):m(k().epTheme,!1),u.value?document.documentElement.classList.add("dark"):(o.layout.themeColor==="light"&&m("light",!1),document.documentElement.classList.remove("dark"))}function y(){W(),K().clear();const{Grey:l,Weak:n,MultiTagsCache:d,EpThemeColor:f,Layout:s}=B();U().setLayout(s),c(f),E().multiTagsCacheChange(d),i(l,"html-grey",document.querySelector("html")),i(n,"html-weakness",document.querySelector("html")),Y.push("/login"),E().handleTags("equal",[...D]),J()}return{body:b,dataTheme:u,overallStyle:r,layoutTheme:t,themeColors:a,onReset:y,toggleClass:i,dataThemeChange:$,setEpThemeColor:c,setLayoutThemeColor:m}}const le={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},ne=p("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),ue=[ne];function re(t,e){return L(),H("svg",le,[...ue])}const Ce={render:re},Me={width:1024,height:1024,body:'<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'},se={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},de=p("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),fe=p("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"},null,-1),me=[de,fe];function ce(t,e){return L(),H("svg",se,[...me])}const Be={render:ce},ie={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},he=p("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),ge=p("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"},null,-1),ve=[he,ge];function Te(t,e){return L(),H("svg",ie,[...ve])}const ke={render:Te};export{Be as a,ke as b,X as c,Me as d,Ce as g,oe as t,ye as u};
