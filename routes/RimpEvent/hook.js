const redis = require("redis");
var debug = require('debug')('rimp:server');
const db = require("../../dbmange/operator")('event');
const historyRoomDb = require("../../dbmange/operator")('historyRoom');
const Logger = require('../../utils/Logger');


let channels = {
    mainChannel: 'from-akka-apps-*',
    /*    rapChannel: 'from-bbb-web-redis-channel',
        chatChannel: 'from-akka-apps-chat-redis-channel',
        compMeetingChannel: 'bigbluebutton:from-bbb-apps:meeting',
        compUserChannel: 'bigbluebutton:from-bbb-apps:users',
        compChatChannel: 'bigbluebutton:from-bbb-apps:chat',
        compRapChannel: 'bigbluebutton:from-rap'*/
};

const meetings = [];

class Hook {

    constructor() {
        const options = {
            host: "127.0.0.1",
            port: "6379"
        };
        this.redisClient = redis.createClient(options);

        this.redisClient.on("psubscribe", function (channel, count) {
            debug("subscribed to " + channel);
        });

        this.redisClient.on("error", function (err) {
            Logger.error("Error " + err);
        });


        for (let k in channels) {
            const channel = channels[k];
            this.redisClient.psubscribe(channel);
        }
    }

    handleUserJoinOrLevel(event){
        if(event.type === "UserJoinedMeetingEvtMsg"){
            for(var k in meetings){
                if(meetings[k].meetingProp.intId === event.meetId){
                    let user = {"intId":event.body.intId,"extId":event.body.extId,"name":event.body.name,"role":event.body.role}
                    meetings[k].users.push(user);
                    event.userName = require("../../utils/serverInfo").getNameByMeetingIdUserId(event.meetId,event.userId );
                    console.log("handleUserJoinOrLevel add user " + user.name);
                    break;
                }
            }
        }else if(event.type === "UserLeftMeetingEvtMsg"){
            for(var k in meetings){
                if(meetings[k].meetingProp.intId === event.meetId){
                    let users = meetings[k].users;
                    for(let i = 0; i<users.length;i++){
                        if(users[i].intId === event.userId) {
                            users.splice(i, 1);
                            console.log("handleUserJoinOrLevel remove user " + users[i].name);
                            break;
                        }

                    }
                    break;
                }
            }
        }
    }

    start() {
        this.redisClient.on("pmessage", async (pattern, channel, message) => {
            debug(message);
            let raw;
            try {
                raw = JSON.parse(message);
                let event = {};
                event.type = raw.core.header.name;
                if (event.type == "DoLatencyTracerMsg" || event.type == "CheckAlivePongSysMsg") {
                    return;
                }
                event.time = Date.now();
                event.meetId = raw.core.header.meetingId || raw.core.body.meetingId;
                if (raw.core.header.userId != undefined) {
                    event.userId = raw.core.header.userId;
                    const serverInfo = require("../../utils/serverInfo");
                    event.userName = serverInfo.getNameByMeetingIdUserId(event.meetId,event.userId );
                    if( event.userName === null){
                        event.userName  = event.userId;
                    }
                }
                event.body = raw.core.body;
                console.log("hxtest recevei message event.type = " + event.type);
                switch (event.type) {
                    case "UserJoinedMeetingEvtMsg":
                    case "UserLeftMeetingEvtMsg":
                        this.handleUserJoinOrLevel(event);
                        break;
                    case"MeetingCreatedEvtMsg": {
                        var meeting = raw.core.body.props;
                        meeting.users = [];
                        meetings.push(meeting);
                        event.meetId = raw.core.body.props.meetingProp.intId;
                        let meetName = raw.core.body.props.meetingProp.extId;
                        let param = {
                            "meetId": event.meetId,
                            meetName: meetName,
                            "createTime": event.time,
                            status: "running"
                        };
                        historyRoomDb.add(param);
                        break;
                    }
                    case"MeetingDestroyedEvtMsg": {
                        for (let i = 0; i < meetings.length; i++) {
                            if (meetings[i].meetingProp.intId === event.meetId) {
                                meetings.splice(i, 1);
                                break;
                            }
                        }
                        let meeting = await historyRoomDb.findOnePromise({"meetId": event.meetId});
                        if (meeting != null && meeting !== undefined) {
                            meeting.endTime = event.time;
                            meeting.status = "end";
                            meeting.save();
                        }
                        break;
                    }
                    default:
                        break;
                }
                db.add(event);
            } catch (e) {
                debug("[WebHooks] error processing the message:", JSON.stringify(raw), ":", e.message);
            }
        });

    };

    getEventBymeetId(meetId, callback) {
        db.find({meetId}, null, callback);
    }


};

const hook = new Hook();
try {
    hook.start();
}catch (e) {
    Logger.info(e);
}



module.exports = {hook,meetings};
