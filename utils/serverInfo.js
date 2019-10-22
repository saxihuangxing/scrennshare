const meetings  = require("../routes/RimpEvent/eventList").meetings;
const roomList  = require("../routes/roomList");
function getMeetingIdByVoiceBridge(voiceBridge){
    if(roomList.roomsInfo != undefined) {
        for (let i = 0; i < roomList.roomsInfo.length; i++) {
            if (roomList.roomsInfo[i].voiceBridge == voiceBridge) {
                return roomList.roomsInfo[i].internalMeetingID;
            }
        }
    }

    for(let i = 0;i<meetings.length;i++){
        if(meetings[i].voiceProp.voiceConf == voiceBridge){
            return meetings[i].meetingProp.intId;
        }
    }
    return  null;
}

module.exports = {getMeetingIdByVoiceBridge}
