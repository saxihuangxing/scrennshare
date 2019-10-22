var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var debug = require('debug')('rimp:server');
const processDb = require("../dbmange/operator")('process');
const maxDb = require("../dbmange/operator")('max');
var osUtils = require("os-utils");
var config = require("../config/config");

var socket = require("../SocketIo/SocketIoServer");
let roomList = require("./roomList");
let mediaInfos = require("./mediaInfo");
var commonUtils = require("../utils/commonUtil");
var getDevice = require("../utils/fetchDeviceInfo");
const socketServer = require("../SocketIo/SocketIoServer");
const Logger = require('../utils/Logger');
/* GET users listing. */
let sysinfos = [];
let countApp = [
    "apps",
    "web",
    "sfu_process",
    "html5",
    "RMD",
    "nginx",
    "redis",
    //  "rimpManage":{"curPid":null,"count":0},
];
let processCounts = {
    "apps":{"curPid":null,"count":0},
    "web":{"curPid":null,"count":0},
    "sfu_process":{"curPid":null,"count":0},
    "html5":{"curPid":null,"count":0},
    "RMD":{"curPid":null,"count":0},
    "nginx":{"curPid":null,"count":0},
    "redis":{"curPid":null,"count":0},
    //  "rimpManage":{"curPid":null,"count":0},
};



router.post('/processesRestartInfo',function(req,res,next){
/*    const param = req.body;
    const hostname = param.hostname;
    let sysInfo = commonUtils.getSpecialValueInObjArr(sysinfos,"hostname",hostname);
    if(sysInfo === undefined){
        Logger.error("  [deviceInfo] getProcessesRestartInfo can't find  " + hostname);
        res.send({err:"can't find " + hostname + " info"});
        return;
    }
    processRestart = {};
    countApp.forEach(async (app) =>{
        if(sysInfo.rimpProcessArr.indexOf(app) < 0){
            return;
        }
        processRestart[app] = await  processDb.count({hostname:hostname,name:app}); //processCounts[key].count;
    });
    res.send(JSON.stringify(processRestart));*/
    res.send("interface todo....");
});
router.get('/', function (req, res, next) {
        res.send(JSON.stringify(sysinfos));
});

function getProcessesRestartInfo(query){
   return new Promise((resolve,reject)=>{
       processRestart = {};
       let promiseArr = [];
       sysinfos.forEach(sysinfo=> {
           const hostname = sysinfo.hostname;
           processRestart[hostname] = {};
           let processNames =  sysinfo.rimpProcessArr.map(process=>{
               return process.name;
           });
           countApp.forEach((app)=>{
               if (processNames.indexOf(app) < 0) {
                   return;
               }
               promiseArr.push(processDb.count(Object.assign({hostname: hostname, name: app},query)).then((num)=>{
                   processRestart[hostname][app] = num;
               }));
           });

           /*countApp.forEach(async (app) => {
               if (processNames.indexOf(app) < 0) {
                   return;
               }
               let count  = await processDb.count({hostname: hostname, name: app}); //processCounts[key].count;
               processRestart[hostname][app] = count;
           });*/
       });
       Promise.all(promiseArr).then(resolve(processRestart));
   }) ;

}


function updteProcess(hostname,process,eProcessArr){
    let i = 0;
    for(;i<eProcessArr.length;i++){
        if(eProcessArr[i].name === process.name){
            break;
        }
    }
    if(i < eProcessArr.length) {
        let obj = eProcessArr[i];
        if (countApp.indexOf(process.name) > -1) {
            if (obj.pid !== process.pid) {
                console.log(process.name + " change pid to " + process.pid);
                obj.restartTime++;

                let event = {};
                event.hostname = hostname;
                event.time = Date.now();
                event.name = process.name;
                event.event = config.processEevnt.restart;
                processDb.add(event);
            }
        }
        Object.assign(obj,process);
    }else{
        process.restartTime = 0;
        eProcessArr.push(process);
    }
}


function saveMaxUse(){
    let now = Date.now();
    let param =  {"time":now,"room":roomList.maxUse.room,
        "user":roomList.maxUse.user,"media":mediaInfos.maxUse.size};
    param.devices = [];
    sysinfos.forEach(sysinfo=>{
        param.devices.push({"hostname":sysinfo.hostname,"cpu": sysinfo.maxUse.cpu, "memory": sysinfo.maxUse.memory});
        sysinfo.maxUse.cpu = 0;
        sysinfo.maxUse.memory = 0;
    });
    maxDb.add(param);
    roomList.maxUse.room = 0;
    roomList.maxUse.user = 0;
    mediaInfos.maxUse.size = 0;
}
setTimeout(saveMaxUse,1000*5);
setInterval(saveMaxUse,config.dbSaveInterval.maxDb);


 function  updateDeviceStatus(sysInfo){
  let i;
  for(i = 0;i<sysinfos.length;i++){
      let eSysInfo =  sysinfos[i];
      if(sysInfo.hostname === eSysInfo.hostname){
          eSysInfo.uptime =  sysInfo.uptime;
          eSysInfo.cpuUsage =  sysInfo.cpuUsage;
          eSysInfo.loadavg =  sysInfo.loadavg;
          eSysInfo.freeMem =  sysInfo.freeMem;
          eSysInfo.memUsage =  sysInfo.memUsage;
          eSysInfo.cpus =  sysInfo.cpus;
          eSysInfo.disk =  sysInfo.disk;

          if(eSysInfo.maxUse.memory < sysInfo.memUsage) {
              eSysInfo.maxUse.memory = sysInfo.memUsage;
          }

          if(eSysInfo.maxUse.cpu < sysInfo.cpuUsage) {
              eSysInfo.maxUse.cpu = sysInfo.cpuUsage;
          }
          sysInfo.rimpProcessArr.forEach((process)=>{
              updteProcess(sysInfo.hostname,process,eSysInfo.rimpProcessArr);
          })
          break;
      }
  }
  if(i === sysinfos.length){
      sysInfo.maxUse = {memory:sysInfo.memUsage,cpu:sysInfo.cpuUsage};
      sysInfo.rimpProcessArr.forEach((process)=>{process.restartTime = 0});
      sysinfos.push(sysInfo);
  }
     socket.sendDeviceInfo(JSON.stringify(sysinfos));
 }

socketServer.addListener("device_info",updateDeviceStatus);

setInterval(async function () {
    let  sysInfo =  await getDevice();
    updateDeviceStatus(sysInfo);
}, 3000);

const getHostNameByIp = (ip) =>{
    for(let i = 0;i<sysinfos.length;i++){
        let sysinfo = sysinfos[i];
        if(sysinfo.ip === ip){
            return sysinfo.hostname;
        }
    }
    return "unknown";
};
const deviceInfo ={
    getProcessesRestartInfo,
    getHostNameByIp,
    router,
}
module.exports = deviceInfo;
