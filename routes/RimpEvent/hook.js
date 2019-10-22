const redis = require("redis");
var debug = require('debug')('rimp:server');
const db = require("../../dbmange/operator")('event');
const historyRoomDb = require("../../dbmange/operator")('historyRoom');
const Logger = require('../../utils/Logger');

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
        const options = {
            host : "127.0.0.1",
            port : "6379"
        };
        this.redisClient = redis.createClient(options);

        this.redisClient.on("psubscribe", function(channel, count) {
            debug("subscribed to " + channel);
        });

        this.redisClient.on("error", function (err) {
            Logger.error("Error " + err);
        });


        for (let k in channels) {
            const channel = channels[k];
            this.redisClient.psubscribe(channel);
        }
        this.meetings  = [];
    }


    start() {
        this.redisClient.on("pmessage", async (pattern, channel, message) => {
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
                event.meetId = raw.core.header.meetingId || raw.core.body.meetingId;
                if(raw.core.header.userId != undefined){
                    event.userId = raw.core.header.userId;
                }
                if(event.type === "MeetingCreatedEvtMsg"){
                    this.meetings.push(raw.core.body.props);
                    event.meetId = raw.core.body.props.meetingProp.intId;
                    let meetName = raw.core.body.props.meetingProp.extId;
                    let param = {"meetId":event.meetId,meetName:meetName,"createTime":event.time,status:"running"};
                    historyRoomDb.add(param);

                }
                else if(event.type === "MeetingDestroyedEvtMsg"){
                    for(let i = 0;i<this.meetings.length;i++){
                        if(this.meetings[i].meetingProp.intId === event.meetId){
                                this.meetings.splice(i,1);
                                break;
                        }
                    }
                    let meeting =  await historyRoomDb.findOnePromise({"meetId":event.meetId});
                    if(meeting != null && meeting !== undefined) {
                        meeting.endTime = event.time;
                        meeting.status = "end";
                        meeting.save();
                    }
                }
                db.add(event);
            } catch (e) {
                debug("[WebHooks] error processing the message:", JSON.stringify(raw), ":", e.message);
            }
        });

    };

    getEventBymeetId(meetId,callback){
       db.find({meetId},null,callback);
    }


};
