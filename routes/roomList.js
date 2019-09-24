const config =  require("../config/config");

var express = require('express');
const checksum = require('../utils/encrypt');
const request = require("request");;
const fxp = require("fast-xml-parser");


var router = express.Router();
var debug = require('debug')('rimp:server');

/* GET users listing. */
router.get('/', function(req, res, next) {
    const options = {
        url:  checksum(config.serverUrl+config.api_getMeetings),
    };
    debug(`get roomList , url = ${options.url}`);
    request.get(options, function(err, response, body){
        debug(`res err = ${err},body = ${body}`);
        if (!err && response.statusCode == 200) {
            const json = fxp.parse(body);
            res.write(JSON.stringify(json));
        }
        res.end();
    });
});

module.exports = router;
