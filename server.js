var http = require('http');
var fs = require('fs');
var url = require('url');


/*http.createServer( function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
 //   pathname = pathname.replace("screenshare/","");
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/html
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/html
            if(pathname.endsWith(".js")) {
                response.writeHead(200, {
                    'Content-Type': 'application/javascript; charset=UTF-8',
                    'Server': 'nginx/1.10.3 (Ubuntu)',
                    'cache-control': 'cache-control',
                    'X-Content-Type-Options': 'nosniff',
                    'X-Frame-Options': 'SameOrigin',
                    'x-xss-protection': '1; mode=block'
                });
            }else{
                response.writeHead(200, {
                    'Content-Type': 'text/html',
                    'cache-control': 'cache-control'
                });
            }

            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
}).listen(8889);*/


var app = require('./app');
var debug = require('debug')('rimp:server');
var port = normalizePort(process.env.PORT || '8889');
app.set('port', port);


var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

var sysLog = require("./routes/LogManage/LogServer");
sysLog.startLogModule(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}



function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}



function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
