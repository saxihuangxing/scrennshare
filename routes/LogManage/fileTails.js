
var Tail = require('always-tail');
var fs = require('fs');
const filename = '/var/log/bbb-webrtc-sfu/bbb-webrtc-sfu.log.2019-09-26';
//const filename = '/home/jackyang/RimpManage/routes/LogManage/log.txt';

//if (!fs.existsSync(filename)) fs.writeFileSync(filename, "");
function startTail(callback)
{
    var tail = new Tail(filename, '\n');

    tail.on('line', function (data) {
        console.log("got line:", data);
        callback(data);
    });


    tail.on('error', function (data) {
        console.log("error:", data);
    });

    tail.watch();
}

const monitor = {"start":startTail};
module.exports = monitor;
