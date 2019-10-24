const config = require("./config");
const getDeviceInfo = require("./fetchDeviceInfo");
const commonUtils = require("./commonUtils");
let localIp = commonUtils.getLocalIp();
if(config.test){
    localIp = "192.168.1.125";
}
const fileManage = require("./logFileManage");
 function startReportDeviceInfo(){
    try {
        var io = require('socket.io-client');
        var socket = io.connect(config.socketIoUrl, {reconnect: true});
        socket.on('connect', function () {
            console.log('Connected!');
            socket.emit('setTypeAndIp', 'DeviceSubSys', {type:"MDS",ip:localIp});
        });
        socket.on('getMDSFileNames',async function(msg){
            console.log('getMDSFileNames! msg = ' +JSON.stringify( msg));
            let files = await fileManage.getMDSFileNames(msg);
            console.log('getMDSFileNames! files = ' +JSON.stringify( files));
            socket.emit('onGetMDSFileNames', 'DeviceSubSys', files);
        });
        socket.on('GetMDSFileContent',function(msg){
            console.log('GetMDSFileContent! msg = ' +JSON.stringify( msg));
            fileManage.getContent(msg,(err,data)=>{
                //  console.log('getMDSFileNames! files = ' +JSON.stringify( files));
                if(err){
                    socket.emit('onGetMDSFileContent', 'DeviceSubSys', err);
                }else{
                    socket.emit('onGetMDSFileContent', 'DeviceSubSys', data);
                }

            });


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
