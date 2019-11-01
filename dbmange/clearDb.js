const eventDb = require("../dbmange/operator")('event');
const processDb = require("../dbmange/operator")('process');
const maxDb = require("../dbmange/operator")('max');
const mediaStatusDb = require("../dbmange/operator")('mediaStatus');
const historyRoomDb = require("../dbmange/operator")('historyRoom');
const config = require("../config/config");



let interval = null;
let timeOut = 1000*60*5;
const clearTask = ()=>{
    const queryEventDb = {"time":{$lt: (Date.now()-config.dbSaveTime.eventDb)}};
    const queryHistoryroomsDb = {status:"end","endTime":{$lt: (Date.now()-config.dbSaveTime.historyroomsDb)}};
    const queryMaxesDb = {"time":{$lt: (Date.now()-config.dbSaveTime.maxesDb)}};
    const queryMediastatusesDb = {"info.status":"end","info.endTime":{$lt: (Date.now()-config.dbSaveTime.mediastatusesDb)}};
    const queryProcessDb = {"time":{$lt: (Date.now()-config.dbSaveTime.processDb)}};

    eventDb.remove(queryEventDb);
    processDb.remove(queryProcessDb);
    maxDb.remove(queryMaxesDb);
    mediaStatusDb.remove(queryMediastatusesDb);
    historyRoomDb.remove(queryHistoryroomsDb);
};

clearTask();

function start(){
  interval =   setInterval(clearTask,timeOut);
}

function  stop() {
    if(interval != null){
        clearInterval(interval);
    }
}

module.exports = {start,stop};
