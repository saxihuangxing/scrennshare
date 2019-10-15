const redis = require("redis");
var debug = require('debug')('rimp:server');
const db = require("../../dbmange/operator")('event');
let channels = {
    mainChannel: 'from-akka-apps-redis-channel',
    rapChannel: 'from-bbb-web-redis-channel',
    chatChannel: 'from-akka-apps-chat-redis-channel',
    compMeetingChannel: 'bigbluebutton:from-bbb-apps:meeting',
    compUserChannel: 'bigbluebutton:from-bbb-apps:users',
    compChatChannel: 'bigbluebutton:from-bbb-apps:chat',
    compRapChannel: 'bigbluebutton:from-rap'
};

module.exports = class Hook {

    constructor() {
        this.events = [];
        const options = {
            host : "127.0.0.1",
            port : "6379"
        };
        this.redisClient = redis.createClient(options);

        this.redisClient.on("psubscribe", function(channel, count) {
            debug("subscribed to " + channel);
        });

        for (let k in channels) {
            const channel = channels[k];
            this.redisClient.psubscribe(channel);
        }
    }


    start() {
        this.redisClient.on("pmessage", (pattern, channel, message) => {
            debug(message);
            let raw;
            try {
                raw = JSON.parse(message);
                let event = {};
                event.type = raw.core.header.name;
                if(event.type == "DoLatencyTracerMsg" || event.type == "CheckAlivePongSysMsg"){
                    return;
                }
                event.time = Date.now();
                event.meetId = raw.core.header.meetingId;
                if(raw.core.header.userId != undefined){
                    event.userId = raw.core.header.userId;
                }
                db.add(event);
              //  this.events.push(event);

            } catch (e) {
                debug("[WebHooks] error processing the message:", JSON.stringify(raw), ":", e.message);
            }
        });

    };

    getEventBymeetId(meetId,callback){
/*       let newEvents;
       this.events.forEach(event=>{
           if(event.meetId == meetId){
               newEvents.push(event);
           }
       });
        newEvents = */
       db.find({meetId},null,callback);
    }


};
