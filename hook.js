const redis = require("redis");
var debug = require('debug')('test:server');

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

        for (let k in channels) {
            const channel = channels[k];
            this.redisClient.psubscribe(channel);
        }
    }


    start(callback) {
        this.redisClient.on("pmessage", (pattern, channel, message) => {

            let raw;
            try {
                raw = JSON.parse(message);
                switch (raw.envelope.name) {
                    case "MeetingEndedEvtMsg":
                        if(typeof callback === "function"){
                            callback(raw.core.body.meetingId);
                        }
                        break;
                    default:
                        break;
                }

            } catch (e) {
                debug("[WebHooks] error processing the message:", JSON.stringify(raw), ":", e.message);
            }
        });

    };


};
