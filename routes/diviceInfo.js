var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var debug = require('debug')('rimp:server');
var osUtils = require("os-utils");

let  mediaInfos = [];
/* GET users listing. */
router.get('/', function(req, res, next) {
    getDevice(req,res);
});

let currCPU = 0;
let os  = require('os');
//过虑掉字符串首尾格式，替换字符串中的多个空格为一个空格
function trim(s){
    return s.replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g,' ');
}
getDevice = function (req, res, next) {
//df --total |grep total
    var freeMem = os.freemem()/1024/1024/1024;
    var totalMem = os.totalmem()/1024/1024/1024;
    var sysinfo = {'hostname'   : os.hostname(),
        'systemType' : os.type(),
        'release'    : os.release(),
        'uptime'     : os.uptime(),
         'cpuUsage': ( currCPU * 100.0 ).toFixed(2) + "%",
        'loadavg'    : os.loadavg(),
        'totalMem'   : totalMem.toFixed(2) + "G",
        'freeMem'    : freeMem.toFixed(2) + "G",
        'memUsage'     : ( (totalMem - freeMem)/totalMem * 100.0 ).toFixed(2) + "%",
        'cpus'       : os.cpus(),
        'disk'       : ''
    };
    var exec = require('child_process').exec;
    exec('df --total |grep total',
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }else{
                var tmp = trim(stdout).split(' ');
                sysinfo.disk = {total:tmp[1],used:tmp[2],free:tmp[3]};
                sysinfo.diskUsage = tmp[4];
            }
            res.send(JSON.stringify(sysinfo));
        });
};


setInterval(function () {
    osUtils.cpuUsage(function (value) {
        currCPU = value;
    });
}, 3000);





module.exports = router;
