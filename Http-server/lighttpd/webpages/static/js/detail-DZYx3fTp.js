var p=(g,l,c)=>new Promise((t,m)=>{var d=r=>{try{v(c.next(r))}catch(i){m(i)}},f=r=>{try{v(c.throw(r))}catch(i){m(i)}},v=r=>r.done?t(r.value):Promise.resolve(r.value).then(d,f);v((c=c.apply(g,l)).next())});import{d as x,l as S,k as L,r as h,c as _,p as w,o as P,b as R,e as a,u as e,f as u,_ as A}from"./index-BSlF4gO8.js";import{I as n}from"./index-zPJBks9f.js";import{B as y}from"./index-VJwgctFB.js";import{v as o}from"./valueUtil-BReNmlgC.js";import{I as b}from"./icontype-wbc23cyS.js";import{D as V}from"./index-Btrfdz_5.js";import{a as I}from"./meter-CmXvhCrg.js";import{u as s}from"./meter-Ln2vfG7f.js";import{u as T}from"./useTimer-DPmIGUt7.js";import"./index-Ca9jcqXW.js";import"./cluster-JMpJuoxf.js";import"./WarningsUtil-CTO3mp7U.js";import"./pack-C-9XZzM4.js";import"./ac-CthUNdyo.js";import"./icon-power-off-CJaF8cS6.js";import"./comInterrupt-Cm5Fxwa_.js";import"./mitt-E5P-NQ8u.js";import"./index.vue_vue_type_script_setup_true_lang-DUsDJS5Q.js";import"./index-Dxk3FQJj.js";import"./hooks-DCJ-OHnd.js";import"./arrow-right-bold-DCPknizU.js";const C={class:"detail-container"},D={class:"detail-content flex"},F={class:"detail-content-main"},M={class:"detail-content-main-status"},k={class:"detail-content-main-data"},E={class:"detail-content-main-data-header"},B={class:"detail-content-main-data-content"},W={class:"detail-content-main-data-content-item"},q={class:"detail-content-main-data-content-item mb-[6px]"},N={class:"detail-content-main-data-content-item mb-[6px]"},z={class:"detail-content-main-data-content-item mb-[6px]"},O={class:"detail-content-main-data-content-item mb-[6px]"},$={class:"detail-content-main-data-content-item mb-[6px]"},H={class:"detail-content-main-data-content-item mb-[6px]"},U={class:"detail-content-main-data"},j={class:"detail-content-main-chart"},G=x({name:"MeterDetail",__name:"detail",setup(g){const{t:l}=S(),c=L(),t=h({}),m=_(()=>s().meterIndex===1?l("meter.ACSide"):s().meterIndex===2?l("meter.internalLoad"):l("meter.transformerMeter")),d=()=>p(this,null,function*(){try{const r=yield I(s().meterIndex);r.code==200?t.value=r.data:console.warn("--[meter] requestEnergyMeterDetailData invalid code",r.code)}catch(r){console.warn("--[meter] --requestEnergyMeterDetailData error:",r)}}),f={label:s().meterIndex,value:s().meterIndex},v=({meter:r})=>{s().setMeterIndex(r)};return w(()=>s().meterIndex,(r,i)=>p(this,null,function*(){r!==i&&d()})),T(()=>{d()},{immediate:!0,immediateCallback:!0}),(r,i)=>(P(),R("div",C,[a(y,{"default-stack":!1,"default-cluster":!1,"default-pack":!1,"default-meter":f,extraText:m.value,onOnChange:v,onOnBackClicked:i[0]||(i[0]=J=>e(c).push("/deviceControl/meter"))},null,8,["extraText"]),u("div",D,[u("div",F,[u("div",M,[a(n,{class:"flex-[226] w-0",label:e(l)("common.faultStatus"),value:e(l)("common.normal"),iconType:e(b).noFault},null,8,["label","value","iconType"]),a(n,{class:"flex-[868] w-0",label:e(l)("common.comStatus"),value:t.value.TimeoutFlag===1?e(l)("common.comNormal"):e(l)("common.comInterrupt"),iconType:t.value.TimeoutFlag===1?e(b).comNormal:e(b).comInterrupt},null,8,["label","value","iconType"])]),u("div",k,[u("div",E,[a(n,{label:e(l)("meter.energyMeterData"),"label-style":{fontWeight:600,fontSize:"14px",color:"#333333"},value:"","enable-row":!0,"icon-type":e(b).meter},null,8,["label","icon-type"])]),u("div",B,[u("div",W,[a(n,{class:"flex-[290]",label:e(l)("meter.tolActiveEnergy"),"value-unit":e(o).kWhShortRoundString(t.value.TolActiveEnergy,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[290]",label:e(l)("meter.tolReactiveEnergy"),"value-unit":e(o).kvarhShortRoundString(t.value.TolReactiveEnergy,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[290]",label:e(l)("meter.L1PhaseVoltage"),value:e(o).roundString(t.value.L1PhaseVoltage,2),unit:"V"},null,8,["label","value"]),a(n,{class:"flex-[140]",label:e(l)("meter.L2PhaseVoltage"),value:e(o).roundString(t.value.L2PhaseVoltage,2),unit:"V"},null,8,["label","value"])]),u("div",q,[a(n,{class:"flex-[290]",label:e(l)("meter.L3PhaseVoltage"),value:e(o).roundString(t.value.L3PhaseVoltage,2),unit:"V"},null,8,["label","value"]),a(n,{class:"flex-[290]",label:e(l)("meter.L1Current"),value:e(o).roundString(t.value.L1Current,2),unit:"A"},null,8,["label","value"]),a(n,{class:"flex-[290]",label:e(l)("meter.L2Current"),value:e(o).roundString(t.value.L2Current,2),unit:"A"},null,8,["label","value"]),a(n,{class:"flex-[140]",label:e(l)("meter.L3Current"),value:e(o).roundString(t.value.L3Current,2),unit:"A"},null,8,["label","value"])]),u("div",N,[a(n,{class:"flex-[290]",label:e(l)("meter.tolActivePower"),"value-unit":e(o).WShortRoundString(t.value.TolActivePower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[290]",label:e(l)("meter.L1ActivePower"),"value-unit":e(o).WShortRoundString(t.value.L1ActivePower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[290]",label:e(l)("meter.L2ActivePower"),"value-unit":e(o).WShortRoundString(t.value.L2ActivePower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[140]",label:e(l)("meter.L3ActivePower"),"value-unit":e(o).WShortRoundString(t.value.L3ActivePower,2)},null,8,["label","value-unit"])]),u("div",z,[a(n,{class:"flex-[290]",label:e(l)("meter.tolAptPower"),"value-unit":e(o).VAShortRoundString(t.value.TolAptPower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[290]",label:e(l)("meter.L1AptPower"),"value-unit":e(o).VAShortRoundString(t.value.L1AptPower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[290]",label:e(l)("meter.L2AptPower"),"value-unit":e(o).VAShortRoundString(t.value.L2AptPower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[140]",label:e(l)("meter.L3AptPower"),"value-unit":e(o).VAShortRoundString(t.value.L3AptPower,2)},null,8,["label","value-unit"])]),u("div",O,[a(n,{class:"flex-[290]",label:e(l)("meter.tolReactivePower"),"value-unit":e(o).varShortRoundString(t.value.TolReactivePower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[290]",label:e(l)("meter.L1ReactivePower"),"value-unit":e(o).varShortRoundString(t.value.L1ReactivePower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[290]",label:e(l)("meter.L2ReactivePower"),"value-unit":e(o).varShortRoundString(t.value.L2ReactivePower,2)},null,8,["label","value-unit"]),a(n,{class:"flex-[140]",label:e(l)("meter.L3ReactivePower"),"value-unit":e(o).varShortRoundString(t.value.L3ReactivePower,2)},null,8,["label","value-unit"])]),u("div",$,[a(n,{class:"flex-[290]",label:e(l)("meter.tolPowerFactor"),value:e(o).roundString(t.value.TolPowerFactor,2)},null,8,["label","value"]),a(n,{class:"flex-[290]",label:e(l)("meter.L1PowerFactor"),value:e(o).roundString(t.value.L1PowerFactor,2)},null,8,["label","value"]),a(n,{class:"flex-[290]",label:e(l)("meter.L2PowerFactor"),value:e(o).roundString(t.value.L2PowerFactor,2)},null,8,["label","value"]),a(n,{class:"flex-[140]",label:e(l)("meter.L3PowerFactor"),value:e(o).roundString(t.value.L3PowerFactor,2)},null,8,["label","value"])]),u("div",H,[a(n,{class:"flex-[290]",label:e(l)("meter.L12LineVoltage"),value:e(o).roundString(t.value.L12LineVoltage,2),unit:"V"},null,8,["label","value"]),a(n,{class:"flex-[290]",label:e(l)("meter.L23LineVoltage"),value:e(o).roundString(t.value.L23LineVoltage,2),unit:"V"},null,8,["label","value"]),a(n,{class:"flex-[290]",label:e(l)("meter.L31LineVoltage"),value:e(o).roundString(t.value.L31LineVoltage,2),unit:"V"},null,8,["label","value"]),a(n,{class:"flex-[140]",label:e(l)("meter.Frequency"),value:e(o).roundString(t.value.Frequency,2),unit:"Hz"},null,8,["label","value"])])])]),u("div",U,[u("div",j,[a(V,{isRowLayout:!0,title:e(l)("home.powerCurve"),"module-name":"meter"},null,8,["title"])])])])])]))}}),ge=A(G,[["__scopeId","data-v-7c82f7a1"]]);export{ge as default};