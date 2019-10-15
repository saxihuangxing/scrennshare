var debug = require('debug')('rimp:server');
const eventDb = require("../dbmange/operator")('event');
const config = require("../config/config");

let interval = null;
let timeOut = 1000*60;
function start(){
  interval =   setInterval(()=>{
      const query = {"time":{$lt: (Date.now()-config.dbSaveTime.eventDb)}};
      eventDb.remove(query);
  },timeOut);
}

function  stop() {
    if(interval != null){
        clearInterval(interval);
    }
}

module.exports = {start,stop};
