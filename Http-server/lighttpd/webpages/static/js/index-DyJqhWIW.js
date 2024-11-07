import{h as p,d as i,r as l,a as _,o as d,c as m,b as t,t as a,u as h,e as s,f as c,w as n}from"./index-B378b16y.js";const u="5.8.0",x=()=>p.request("get","/lcmain?type=systemParameters"),f={class:"p-[20px] h-[700px]"},y={class:"text-primary text-lg py-4"},w={class:"text-primary text-lg pb-4"},b={class:"text-red-700"},k=t("div",{class:"whitespace-pre-wrap p-[20px] bg-slate-300 text-blue-500"},a(`TODO：
1 首页能量流动方案确定
2 页面展示：标题是否合理，提示是否合理，弹框是否合理
3 英文翻译是否合理，字段要一致，英文大小写要一致
4 英文界面展示符合设计规范
5 界面设计风格一致，标题都用一种颜色，表格表头颜色等，状态显示颜色等
6 布局，图标、字体、颜色是否一致，页面的按钮样式需要统一风格
7 输入框的精度和范围确定（建站，空调，电表，pcs设置）,功率设置都不能超过最大功率
8 列表模式和卡片模式切换，pack排列跟实际产品对应
9 页面电力图，登录页重新设计，（登陆进去提示强制修改密码？）
10 前端页面性能数据：内存，页面打开速度，图片显示速度等，js error监控
11 页面缩放下的内容是否正常展示
12 页面菜单的icon是否准确
13 默认用户名和密码去掉
14 暗黑模式适配
15 安全相关：https，密码加密（crypto-js），token验证，升级文件签名、加密及验证
16 时间选择，需要用系统时间，而不是当前pc时间
`),-1),V=i({__name:"index",setup(g){const o=l("");return x().then(e=>{e&&e.code===200&&(o.value=e.data.LcSoftwareVersion)}),(e,v)=>{const r=_("el-link");return d(),m("div",f,[t("p",y," 当前版本 v"+a(h(u))+"， 推荐使用Chrome58+进行访问 ",1),t("p",w,"LC版本 "+a(o.value),1),t("div",b,[s(" 暂不需要 "),c(r,{type:"primary",href:"https://www.baidu.com",target:"_blank"},{default:n(()=>[s("《服务协议》")]),_:1}),c(r,{type:"primary",href:"https://www.baidu.com",target:"_blank"},{default:n(()=>[s("《隐私协议》")]),_:1})]),k])}}});export{V as default};
