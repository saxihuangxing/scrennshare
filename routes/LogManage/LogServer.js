const mediaRouter = require("../mediaInfo");
let clients = {};
let clientCount = 0;

class sysLogClass {

    constructor() {

    }

    startLogModule(server) {
        let io = require('socket.io')(server);
        io.on('connection', function (socket) {
            clients[socket.id] = socket;
            clientCount++;
            console.log("clientCount = " + clientCount);
            socket.emit("connected","start");
            socket.on('disconnect', function () {
                for (var key in clients) {
                    if (key == socket.id) {
                        clientCount--;
                        delete clients.key;
                        console.log("clientCount = " + clientCount);
                    }
                }
            });
            socket.on('media_report', function (from, msg) {
              //  console.log('MSG', from, ' saying ', msg);
               setTimeout(()=>mediaRouter.updateMediaInfo(msg),0);
            });
            socket.subscribers = [];
            socket.on('subscribe',(type)=>{
                    console.log("socket receive subscribe " + type);
                     socket.subscribers.push(type);
                }
            )

        });
    }


    sendNewLog(str) {
        for (let key in clients) {
            let socket = clients[key];
            if(socket.subscribers.indexOf("newLog") > -1)
            {
                socket.emit('newLog', str);
                //console.log("send new log " + str);
            }
        }
    }

    sendDeviceInfo(str) {
        for (let key in clients) {
            let socket = clients[key];
            if(socket.subscribers.indexOf("deviceInfo") > -1)
            {
                socket.emit('deviceInfo', str);
                //console.log("send new deviceInfo" + str);
            }
        }
    }
}

const sysLog = new sysLogClass();
module.exports = sysLog;
