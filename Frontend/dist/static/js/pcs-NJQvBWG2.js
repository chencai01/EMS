var y=Object.defineProperty;var S=(e,s,u)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[s]=u;var n=(e,s,u)=>S(e,typeof s!="symbol"?s+"":s,u);import{h as o}from"./index-BSlF4gO8.js";import{w as O,B as r}from"./WarningsUtil-CTO3mp7U.js";const f={requestAllPCSList:()=>o.request("get","/lcmain?type=pcsCard"),requestPCSDetail:e=>o.request("get",`/lcmain?type=pcs&sn=${e}`),requestPCSGetSettings:()=>o.request("get","/lcmain?type=pcsControlParameter"),requestPCSSetSettings:(e,s,u,P)=>o.request("post","/lcmain/setPcsControlParameter",{data:{pcs_id:e,total_PF_of_AC_bus:s,total_active_power_of_AC_bus:u,total_reactive_power_of_AC_bus:P}}),requestPCSClearFault:e=>o.request("get",`/lcmain?type=pcsControlFaultClear&sn=${e}`),requestPCSPowerOn:e=>o.request("get",`/lcmain?type=pcsControlPowerOn&sn=${e}`),requestPCSPowerOff:e=>o.request("get",`/lcmain?type=pcsControlPowerOff&sn=${e}`),requestPCSGrid:e=>o.request("get",`/lcmain?type=pcsControlGridTied&sn=${e}`),requestPCSGridOff:e=>o.request("get",`/lcmain?type=pcsControlGridOff&sn=${e}`)};class i{constructor(){n(this,"instanceProperty")}}n(i,"bit0",new r(0,"紧急停机","warnings.emergencyShutDown","","error")),n(i,"bit1",new r(1,"校准参数异常","warnings.calibrationParameterAbnormal","","warn")),n(i,"bit2",new r(2,"采样零点异常","warnings.samplingZeroAbnormal","","warn")),n(i,"bit3",new r(3,"Flash异常","warnings.flashAbnormal","","error")),n(i,"bit4",new r(4,"DSP初始化异常","warnings.DSPInitializingAbnormal","","error")),n(i,"bit5",new r(5,"监控初始化异常","warnings.monitorInitializingAbnormal","","warn")),n(i,"bit6",new r(6,"DSP版本异常","warnings.DSPVersionAbnormal","","error")),n(i,"bit7",new r(7,"CPLD版本异常","warnings.CPLDVersionAbnormal","","error")),n(i,"bit8",new r(8,"硬件版本异常","warnings.hardwareVersionAbnormal","","error")),n(i,"bit9",new r(9,"重号故障","warnings.IDReduplicatedFault","","error")),n(i,"bit10",new r(10,"主机冲突故障","warnings.masterConflictFault","","error")),n(i,"bit11",new r(11,"DSP参数设置不匹配","warnings.DSPParameterMismatch","","error")),n(i,"bit12",new r(12,"监控参数设置不匹配","warnings.monitorParameterMismatch","","warn")),n(i,"bit13",new r(13,"Drm0 关机","warnings.Drm0Shutdown","","error"));class l{constructor(){n(this,"instanceProperty")}}n(l,"bit1",new r(1,"CANA通信故障","warnings.CANACommFault","","error")),n(l,"bit8",new r(8,"EMS通信连接超时","warnings.EMSCommConnectionTimeout","","error")),n(l,"bit9",new r(9,"BMS通信连接超时","warnings.BMSCommConnectionTimeout","","error")),n(l,"bit11",new r(11,"电网电表通信超时","warnings.gridAmmeterCommTimeout","","warn"));class C{constructor(){n(this,"instanceProperty")}}n(C,"bit1",new r(1,"模块风扇故障1","warnings.moduleFanFault1","","error")),n(C,"bit11",new r(11,"辅助电源故障1","warnings.auxiliaryPowerFault1","","error")),n(C,"bit12",new r(12,"辅助电源故障2","warnings.auxiliaryPowerFault2","","error")),n(C,"bit13",new r(13,"辅助电源故障3","warnings.auxiliaryPowerFault3","","error"));class p{constructor(){n(this,"instanceProperty")}}n(p,"bit1",new r(1,"模块过温1","warnings.moduleOverTemperature1","","error")),n(p,"bit2",new r(2,"模块过温2","warnings.moduleOverTemperature2","","error")),n(p,"bit9",new r(9,"环境过温故障","warnings.ambientOverTempFault","","error")),n(p,"bit13",new r(13,"环境过温降额","warnings.ambientOverTempDerating","","warn"));class g{constructor(){n(this,"instanceProperty")}}n(g,"bit11",new r(11,"电池电量不足","warnings.batteryUnderEnergy","","error"));class A{constructor(){n(this,"instanceProperty")}}n(A,"bit0",new r(0,"BMS干节点故障","warnings.BMSDryContactFault","","error"));class w{constructor(){n(this,"instanceProperty")}}n(w,"bit9",new r(9,"模块限流告警1","warnings.moduleCurrentLimitAlarm","","warn",{i18n1Options:{number:1}})),n(w,"bit10",new r(10,"模块限流告警2","warnings.moduleCurrentLimitAlarm","","warn",{i18n1Options:{number:2}})),n(w,"bit11",new r(11,"模块限流告警3","warnings.moduleCurrentLimitAlarm","","warn",{i18n1Options:{number:3}})),n(w,"bit12",new r(12,"模块限流告警4","warnings.moduleCurrentLimitAlarm","","warn",{i18n1Options:{number:4}})),n(w,"bit13",new r(13,"模块限流告警5","warnings.moduleCurrentLimitAlarm","","warn",{i18n1Options:{number:5}})),n(w,"bit14",new r(14,"模块限流告警6","warnings.moduleCurrentLimitAlarm","","warn",{i18n1Options:{number:6}})),n(w,"bit15",new r(15,"模块限流告警7","warnings.moduleCurrentLimitAlarm","","warn",{i18n1Options:{number:7}}));class c{constructor(){n(this,"instanceProperty")}}n(c,"bit1",new r(1,"模块电流异常1","warnings.moduleCurrentAbnormal","","error",{i18n1Options:{number:1}})),n(c,"bit2",new r(2,"模块电流异常2","warnings.moduleCurrentAbnormal","","error",{i18n1Options:{number:2}})),n(c,"bit3",new r(3,"模块电流异常3","warnings.moduleCurrentAbnormal","","error",{i18n1Options:{number:3}})),n(c,"bit4",new r(4,"模块电流异常4","warnings.moduleCurrentAbnormal","","error",{i18n1Options:{number:4}})),n(c,"bit5",new r(5,"模块电流异常5","warnings.moduleCurrentAbnormal","","error",{i18n1Options:{number:5}})),n(c,"bit6",new r(6,"模块电流异常6","warnings.moduleCurrentAbnormal","","error",{i18n1Options:{number:6}})),n(c,"bit7",new r(7,"模块电流异常7","warnings.moduleCurrentAbnormal","","error",{i18n1Options:{number:7}}));class a{constructor(){n(this,"instanceProperty")}}n(a,"bit0",new r(0,"直流输入过压","warnings.DCInputOverVoltage","","error")),n(a,"bit1",new r(1,"直流输入欠压","warnings.DCInputUnderVoltage","","error")),n(a,"bit3",new r(3,"直流过载报警","warnings.DCOverloadAlarm","","warn")),n(a,"bit4",new r(4,"直流过载超时","warnings.DCOverloadTimeout","","error")),n(a,"bit5",new r(5,"直流输入软启动失败","warnings.DCInputSoftStartFailed","","error")),n(a,"bit6",new r(6,"直流输入电控开关开路","warnings.DCInputGalvanicBreakDeviceOpenCircuit","","error")),n(a,"bit7",new r(7,"直流输入电控开关短路","warnings.DCInputGalvanicBreakDeviceShortCircuit","","error")),n(a,"bit9",new r(9,"直流输入软启电控开关故障","warnings.DCInputSoftGalvanicBreakDeviceFault","","error"));class m{constructor(){n(this,"instanceProperty")}}n(m,"bit0",new r(0,"直流母线过压","warnings.DCBusOverVoltage","","error")),n(m,"bit1",new r(1,"直流母线欠压","warnings.DCBusUnderVoltage","","error")),n(m,"bit2",new r(2,"直流母线电压不平衡","warnings.DCBusVoltageUnbalanced","","error")),n(m,"bit3",new r(3,"直流母线软启动失败","warnings.DCBusSoftStartFailed","","error")),n(m,"bit9",new r(9,"BMS关机故障","warnings.BMSShutdownFault","","error"));class t{constructor(){n(this,"instanceProperty")}}n(t,"bit0",new r(0,"交流母线过压","warnings.ACBusOverVoltage","","error")),n(t,"bit1",new r(1,"交流母线欠压","warnings.ACBusUnderVoltage","","error")),n(t,"bit2",new r(2,"交流母线过频","warnings.ACBusOverFrequency","","error")),n(t,"bit3",new r(3,"交流母线欠频","warnings.ACBusUnderFrequency","","error")),n(t,"bit4",new r(4,"交流母线反序","warnings.ACBusPhaseReversed","","error")),n(t,"bit5",new r(5,"交流母线电压不平衡","warnings.ACBusVoltageAsymmetric","","error")),n(t,"bit6",new r(6,"交流母线电压异常","warnings.ACBusVoltageAbnormal","","error")),n(t,"bit7",new r(7,"交流母线缺相","warnings.ACBusPhaseLost","","error")),n(t,"bit8",new r(8,"孤岛保护","warnings.islandingProtection","","error")),n(t,"bit11",new r(11,"交流过载报警","warnings.AcOverloadAlarm","","warn")),n(t,"bit12",new r(12,"交流过载超时","warnings.AcOverloadTimeout","","error")),n(t,"bit13",new r(13,"交流母线禁止接入","warnings.AcBusConnectionForbidden","","error"));class b{constructor(){n(this,"instanceProperty")}}n(b,"bit1",new r(1,"离网电压震荡","warnings.offGridVoltOscillation","","error")),n(b,"bit6",new r(6,"并离网切换错误","warnings.onOffGridTogglingError","","error")),n(b,"bit7",new r(7,"交流软启动失败","warnings.ACSoftStartFailed","","error")),n(b,"bit8",new r(8,"交流电控开关开路","warnings.ACGalvanicBreakDeviceOpenCircuit","","error")),n(b,"bit9",new r(9,"交流电控开关短路","warnings.ACGalvanicBreakDeviceShortCircuit","","error"));const T=e=>O.getAllWarningInfoList({WarningClassType:i,value:e==null?void 0:e.err_msg_1},{WarningClassType:l,value:e==null?void 0:e.err_msg_2},{WarningClassType:C,value:e==null?void 0:e.err_msg_3},{WarningClassType:p,value:e==null?void 0:e.err_msg_4},{WarningClassType:g,value:e==null?void 0:e.err_msg_5},{WarningClassType:A,value:e==null?void 0:e.err_msg_6},{WarningClassType:w,value:e==null?void 0:e.err_msg_7},{WarningClassType:c,value:e==null?void 0:e.err_msg_8},{WarningClassType:a,value:e==null?void 0:e.err_msg_9},{WarningClassType:m,value:e==null?void 0:e.err_msg_10},{WarningClassType:t,value:e==null?void 0:e.err_msg_11},{WarningClassType:b,value:e==null?void 0:e.err_msg_12});export{i as E,f as P,l as a,C as b,p as c,g as d,A as e,w as f,T as g,c as h,a as i,m as j,t as k,b as l};