const config = require("./config");
const getDeviceInfo = require("./fetchDeviceInfo");
 function startReportDeviceInfo(){
    try {
        var io = require('socket.io-client');
        var socket = io.connect(config.socketIoUrl, {reconnect: true});
        socket.on('connect', function (socket) {
            console.log('Connected!');
        });
        setInterval(async () => {
            try {
                let deviceInfo = await getDeviceInfo();
                socket.emit('device_info', 'DeviceSubSys', deviceInfo);
            }catch (e) {
                console.error(e.toString());
            }
        }, config.reportInterval);
    }catch (e) {
        console.error(e.toString());
    }
}

function main() {
    startReportDeviceInfo();
}

main();
