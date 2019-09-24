var express = require('express');
var router = express.Router();
var fs = require('fs');
var url = require('url');
var debug = require('debug')('rimp:server');

/* GET users listing. */
router.get('/', function(request, response, next) {
  //  debug("aaaaaa");
  //  response.send("aaaaadddd");
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
    pathname = pathname.replace("screenshare/","");
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

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

});

module.exports = router;
