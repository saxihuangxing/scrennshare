var osUtils = require("os-utils");
var config = require("../config/config");
var commonUtils = require("../utils/commonUtil");

let sysinfo = null;
let os = require('os');

//过虑掉字符串首尾格式，替换字符串中的多个空格为一个空格
function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
}


getDevice =  function () {
//df --total |grep total
    return new Promise(async (resolve,reject) => {
        var freeMem = os.freemem() / 1073741824;
        var totalMem = os.totalmem() / 1073741824;
        var cpuUse = await getCpu();
        let cpu =  (cpuUse * 100.0).toFixed(2);
        let memory = ((totalMem - freeMem) / totalMem * 100.0).toFixed(2);
        sysinfo = {
            'hostname': os.hostname(),
            'ip':commonUtils.getLocalIp(),
            'systemType': os.type(),
            'release': os.release(),
            'uptime': os.uptime(),
            'cpuUsage': cpu,
            'loadavg': os.loadavg(),
            'totalMem': totalMem.toFixed(2) + "G",
            'freeMem': freeMem.toFixed(2) + "G",
            'memUsage': memory,
            'cpus': os.cpus(),
            'disk': ''
        };
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
                            if(commond !== undefined && commond.indexOf("main.js") >= 0){
                                //console.log("command = " + commond);
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
                                }
                            }
                            // console.log(tmp[10]);
                        }
                        sysinfo.rimpProcessArr = processArr;
                    }
                    resolve(sysinfo);
                });

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



module.exports = getDevice;
