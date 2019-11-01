var Event = require("./event.js");
var Process = require("./process.js");
var Max = require("./max.js");
var MediaStatus = require("./mediaStatus.js");
var HistoryRoom = require("./historyRoom.js");
var Logger = require("../utils/Logger");

class DbOperator {

    add(params) {
        //console.log("dbadd:" + JSON.stringify(params) + "  contruct = " + this.Module.constructor);
        var module = new this.Module(params);
        module.save(function (err, res) {
            if (err) {
                console.log("Error:" + err);
            } else {
                //console.log("Res:" + res);
            }
        });
    }




    find(query, opt, callback) {
        if (opt != null || opt != undefined) {
            this.Module.find(query, opt, callback);
        } else {
            this.Module.find(query, callback);
        }
    }



    findPromise(query) {
        return new Promise((resolve, reject) => {
            this.Module.find(query, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    findOnePromise(query) {
        return new Promise((resolve, reject) => {
            this.Module.findOne(query, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }



    remove(query) {
        this.Module.remove(query, function (err, res) {
            if (err) {
                Logger.error(`db remove ${JSON.stringify(err)}`);
            } else {
                //console.log("Res:" + res);
            }
        });
    }




    count(query) {
        return new Promise((resolve, reject) => {
            this.Module.count(query, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }
}

module.exports = (moduleType) => {
    let dbOperator = new DbOperator();
    switch (moduleType) {
        case 'event':
            dbOperator.Module = Event;
            break;
        case 'process':
            dbOperator.Module = Process;
            break;
        case 'max':
            dbOperator.Module = Max;
            break;
        case 'mediaStatus':
            dbOperator.Module = MediaStatus;
            break;
        case 'historyRoom':
            dbOperator.Module = HistoryRoom;
            break;
        default:
            dbOperator.Module = Event;
            break;
    }
    return dbOperator;
};
