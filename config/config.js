const httpProtocal = "http://";
const serverIp = "192.168.1.124";
const app = "/bigbluebutton/api/";
const Secret = "330a8b08c3b4c61533e1d0c5ce1ac88f";


const config  = {
    serverUrl:httpProtocal+serverIp+app,
    secret: Secret,
    app : app,
    api_getMeetings : "getMeetings?"
};


// BigBlueButton configs
config.bbb = {};
config.bbb.sharedSecret = "sharedSecret";
config.bbb.apiPath = "/bigbluebutton/api";
config.bbb.auth2_0 = false;
config.server = {};
config.server.port = 3005;
config.hooks = {};
config.hooks.channels = {
    mainChannel: 'from-akka-apps-redis-channel',
    rapChannel: 'from-bbb-web-redis-channel',
    chatChannel: 'from-akka-apps-chat-redis-channel',
    compMeetingChannel: 'bigbluebutton:from-bbb-apps:meeting',
    compUserChannel: 'bigbluebutton:from-bbb-apps:users',
    compChatChannel: 'bigbluebutton:from-bbb-apps:chat',
    compRapChannel: 'bigbluebutton:from-rap'
}

config.hooks.permanentURLs = [];
config.hooks.queueSize = 10000;
config.hooks.getRaw = true;
config.hooks.multiEvent = 1;

// Retry intervals for failed attempts for perform callback calls.
// In ms. Totals to around 5min.
config.hooks.retryIntervals = [
    100, 500, 1000, 2000, 4000, 8000, 10000, 30000, 60000, 60000, 60000, 60000
];

// Reset permanent interval when exceeding maximum attemps
config.hooks.permanentIntervalReset = 8;

// Mappings of internal to external meeting IDs
config.mappings = {};
config.mappings.cleanupInterval = 10000; // 10 secs, in ms
config.mappings.timeout = 1000*60*60*24; // 24 hours, in ms

// Redis
config.redis = {};
config.redis.host = '127.0.0.1';
config.redis.port = 6379;
config.redis.keys = {};
config.redis.keys.hook = id => `bigbluebutton:webhooks:hook:${id}`;
config.redis.keys.hooks = "bigbluebutton:webhooks:hooks";
config.redis.keys.mappings = "bigbluebutton:webhooks:mappings";
config.redis.keys.mapping = id => `bigbluebutton:webhooks:mapping:${id}`;
config.redis.keys.events = id => `bigbluebutton:webhooks:events:${id}`;
config.redis.keys.userMaps = "bigbluebutton:webhooks:userMaps";
config.redis.keys.userMap = id => `bigbluebutton:webhooks:userMap:${id}`;

config.api = {};
config.api.responses = {};


module.exports =  config