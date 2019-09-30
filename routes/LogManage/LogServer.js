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
            socket.on('disconnect', function () {
                for (var key in clients) {
                    if (key == socket.id) {
                        clientCount--;
                        delete clients.key;
                        console.log("clientCount = " + clientCount);
                    }
                }
            });
        });
    }


    sendNewLog(str) {
        for (let key in clients) {
            clients[key].emit('newLog', str);
            console.log("send new log " + str);
        }
    }

    sendDeviceInfo(str) {
        for (let key in clients) {
            clients[key].emit('deviceInfo', str);
        }
    }
}

const sysLog = new sysLogClass();
module.exports = sysLog;
