var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var debug = require('debug')('rimp:server');
const db = require("../dbmange/operator")('process');
const maxDb = require("../dbmange/operator")('max');
var osUtils = require("os-utils");
var config = require("../config/config");

var socket = require("../SocketIo/SocketIoServer");
let roomList = require("./roomList");
let mediaInfos = require("./mediaInfo");
var commonUtils = require("../utils/commonUtil");
var getDevice = require("../utils/fetchDeviceInfo");
/* GET users listing. */
let sysinfos = [];

router.get('/', function (req, res, next) {
        res.send(JSON.stringify(sysinfos));
});


//let currCPU = 0;

let os = require('os');

//过虑掉字符串首尾格式，替换字符串中的多个空格为一个空格
function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
}


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

let maxUse = {
    "cpu":0,
    "memory":0,
}
router.countApp = countApp;
router.processCounts = processCounts;
router.maxUse = maxUse;

function updteProcess(process,eProcessArr){
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
                event.time = Date.now();
                event.name = process.name;
                event.event = config.processEevnt.restart;
                db.add(event);
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
    maxUse.cpu = 0;
    maxUse.memory = 0;
    roomList.maxUse.room = 0;
    roomList.maxUse.user = 0;
    mediaInfos.maxUse.size = 0;
}
setTimeout(saveMaxUse,1000*5);
setInterval(saveMaxUse,config.dbSaveInterval.maxDb);


 /*getDevice = async function () {
//df --total |grep total
    var freeMem = os.freemem() / 1073741824;
    var totalMem = os.totalmem() / 1073741824;
    var cpuUse = await getCpu();
    let cpu =  (cpuUse * 100.0).toFixed(2);
    let memory = ((totalMem - freeMem) / totalMem * 100.0).toFixed(2);
     sysinfo = {
        'hostname': os.hostname(),
        'systemType': os.type(),
        'release': os.release(),
        'uptime': os.uptime(),
        'cpuUsage': cpu+ "%",
        'loadavg': os.loadavg(),
        'totalMem': totalMem.toFixed(2) + "G",
        'freeMem': freeMem.toFixed(2) + "G",
        'memUsage': memory + "%",
        'cpus': os.cpus(),
        'disk': ''
    };
     saveMaxUse(cpu,memory);
    var exec = require('child_process').exec;
    exec('df --total |grep total',
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                var tmp = trim(stdout).split(' ');
                sysinfo.disk = {
                    total: commonUtils.transKBToG(tmp[1]),
                    used: commonUtils.transKBToG(tmp[2]),
                    free: commonUtils.transKBToG(tmp[3])
                };
                sysinfo.diskUsage = tmp[4];
            }
            exec('ps aux', function (err, stdout, stderr) {
                if (error !== null) {
                    console.log('exec error: ' + error);
                } else {
                    let processArr = [];
                    let list = stdout.split(/[\r\n]+/g);
                    let commond = "";
                    for (let i = 0; i < list.length; i++) {
                        var tmp = trim(list[i]).split(' ');
                        commond = tmp[10];
                        if (tmp.length > 11) {
                            for (let i = 11; i < tmp.length; i++) {
                                commond = commond + "-" + tmp[i];
                            }
                        }
                        for (var key in config.processCommand) {
                            let process = {};
                            if ((typeof (commond) === 'string') && commond.indexOf(config.processCommand[key]) !== -1) {
                                process.name = key;
                                process.pid = tmp[1];
                                process.cpu = tmp[2];
                                process.mem = tmp[3];
                                process.rss = tmp[5];
                                process.stat = tmp[7];
                                process.startTime = tmp[8];
                                processArr.push(process);
                                countProcessRestart(process);
                            }
                        }
                        // console.log(tmp[10]);
                    }
                    sysinfo.rimpProcessArr = processArr;
                }
                sysinfo = [sysinfo];
              //  if (res != null)
               //     res.send(JSON.stringify(sysinfo));
                socket.sendDeviceInfo(JSON.stringify(sysinfo));
                // console.log(JSON.stringify(sysinfo));
            });

        });
};


function getCpu(){
    return new Promise(
        (resolve,reject) => {
            osUtils.cpuUsage(function (value) {
                let currCPU = value;
                resolve(currCPU);
            });
        })
}
;*/

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
              updteProcess(process,eSysInfo.rimpProcessArr);
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
router.updateDeviceStatus = updateDeviceStatus;

setInterval(async function () {
    let  sysInfo =  await getDevice();
    updateDeviceStatus(sysInfo);
}, 3000);

router.getHostNameByIp = (ip) =>{
    for(let i = 0;i<sysinfos.length;i++){
        let sysinfo = sysinfos[i];
        if(sysinfo.ip === ip){
            return sysinfo.hostname;
        }
    }
    return "unknown";
};
module.exports = router;
