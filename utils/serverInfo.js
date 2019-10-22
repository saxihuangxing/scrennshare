const meetings  = require("../routes/RimpEvent/eventList").meetings;
function getMeetingIdByVoiceBridge(voiceBridge){
    for(let i = 0;i<meetings.length;i++){
        if(meetings[i].voiceProp.voiceConf === voiceBridge){
            return meetings[i].meetingProp.intId;
        }
    }
    return  null;
}

module.exports = {getMeetingIdByVoiceBridge}
