
var Tail = require('always-tail');
var fs = require('fs');
//const filename = '/var/log/bbb-webrtc-sfu/bbb-webrtc-sfu.log.2019-09-27';
//const filename = '/home/jackyang/RimpManage/routes/LogManage/log.txt';

//if (!fs.existsSync(filename)) fs.writeFileSync(filename, "");
var sysLog = require("./LogServer");
let callback = sysLog.sendNewLog;

function startTail(filename,type)
{
    var tail = new Tail(filename, '\n');
    console.log("start Tail " + filename);
    tail.on('line', function (data) {
       // console.log("got line:", data);
        callback(type+'-message-start-'+data);
    });


    tail.on('error', function (data) {
        console.log("error:", data);
    });

    tail.watch();
    return tail;

}

const monitor = {"startTail":startTail};
module.exports = monitor;
