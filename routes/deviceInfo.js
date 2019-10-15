var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var debug = require('debug')('rimp:server');
const db = require("../dbmange/operator")('process');
const maxDb = require("../dbmange/operator")('max');
var osUtils = require("os-utils");
var config = require("../config/config");

var sysLog = require("./LogManage/LogServer");
let roomList = require("./roomList");
let mediaInfos = require("./mediaInfo");
var commonUtils = require("../utils/commonUtil");
/* GET users listing. */
router.get('/', function (req, res, next) {
        res.send(JSON.stringify(sysinfo));
});


//let currCPU = 0;
let sysinfo = null;
let os = require('os');

//过虑掉字符串首尾格式，替换字符串中的多个空格为一个空格
function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
}

// "mongod":"/usr/bin/mongod",
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

let maxUse = {
    "cpu":0,
    "memory":0,
}

router.processCounts = processCounts;
router.maxUse = maxUse;

function countProcessRestart(process){
    let keys = Object.keys(processCounts);
    let i = keys.indexOf(process.name)
    if(i > -1){
       // console.log(" i == " + i + " keys[i] === " + keys[i]);
      let obj =  processCounts[keys[i]];
        if(obj.curPid != null){
         if(obj.curPid !== process.pid){
             console.log(process.name + " change pid to " + process.pid);
             obj.curPid = process.pid;
             obj.count++;

             let event = {};
             event.time = Date.now();
             event.name = keys[i];
             event.event = config.processEevnt.restart;
             db.add(event);
         }
      }else{
          obj.curPid = process.pid;
      }
    }
}

let dbMaxSaveTime = 0;  //Max is a db name
function saveMaxUse(cpu,memory){
    if(cpu > maxUse.cpu){
        maxUse.cpu = cpu;
    }
    if(memory > maxUse.memory){
        maxUse.memory = memory;
    }
    let now = Date.now();
    if((now - dbMaxSaveTime) > config.dbSaveInterval.maxDb) {
        maxDb.add({"time":now,"cpu": maxUse.cpu, "memory": maxUse.memory,"room":roomList.maxUse.room,
            "user":roomList.maxUse.user,"media":mediaInfos.maxUse.size});
        maxUse.cpu = 0;
        maxUse.memory = 0;
        roomList.maxUse.room = 0;
        roomList.maxUse.user = 0;
        mediaInfos.maxUse.size = 0;
        dbMaxSaveTime = now;
    }
}

 getDevice = async function () {
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
                sysLog.sendDeviceInfo(JSON.stringify(sysinfo));
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
;


setInterval(function () {
    getDevice(null, null, null);
}, 3000);


module.exports = router;
