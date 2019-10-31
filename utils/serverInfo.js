const meetings = require("../routes/RimpEvent/hook").meetings;
console.log("hxtest serverinfo meetings === " + meetings);
const roomList = require("../routes/roomList");
const CommonUtil = require("../utils/commonUtil");
const getMeetingIdByVoiceBridge = (voiceBridge) => {
    for (let i = 0; i < meetings.length; i++) {
        if (meetings[i].voiceProp.voiceConf == voiceBridge) {
            return meetings[i].meetingProp.intId;
        }
    }

    if (roomList.roomsInfo != undefined) {
        for (let i = 0; i < roomList.roomsInfo.length; i++) {
            if (roomList.roomsInfo[i].voiceBridge == voiceBridge) {
                return roomList.roomsInfo[i].internalMeetingID;
            }
        }
    }


    return null;
}

const getMeetNameByVoiceBridge = (voiceBridge, userId) => {
    for (let i = 0; i < meetings.length; i++) {
        if (meetings[i].voiceProp.voiceConf == voiceBridge) {
            return meetings[i].meetingProp.name;
        }
    }

    if (roomList.roomsInfo != undefined) {
        for (let i = 0; i < roomList.roomsInfo.length; i++) {
            if (roomList.roomsInfo[i].voiceBridge == voiceBridge) {
                return roomList.roomsInfo[i].meetingID;
            }
        }
    }


    return null;
}


const getNameByUserId = (voiceBridge, userId) => {
    for (let i = 0; i < meetings.length; i++) {
        if (meetings[i].voiceProp.voiceConf == voiceBridge) {
            let users = meetings[i].users;
            for (var k in users) {
                if (users[k].intId === userId) {
                    return users[k].name;
                }
            }
        }
    }

    if (roomList.roomsInfo != undefined) {
        const roomsInfo = roomList.roomsInfo;
        for (let i = 0; i < roomsInfo.length; i++) {
            if (roomsInfo[i].voiceBridge.toString() === voiceBridge) {
                if (roomsInfo[i].attendees === undefined) {
                    return null;
                }
                let users = CommonUtil.tranObjToArr(roomsInfo[i].attendees.attendee);
                if (users != undefined) {
                    for (let j = 0; j < users.length; j++) {
                        if (users[j].userID === userId) {
                            return users[j].fullName;
                        }
                    }
                }
                break;
            }
        }
    }

    return null;
}


const getNameByMeetingIdUserId = (meetid, userId) => {
    for (let i = 0; i < meetings.length; i++) {
        if (meetings[i].meetingProp.intId == meetid) {
            let users = meetings[i].users;
            for (var k in users) {
                if (users[k].intId === userId) {
                    return users[k].name;
                }
            }
        }
    }

    if (roomList.roomsInfo != undefined) {
        const roomsInfo = roomList.roomsInfo;
        for (let i = 0; i < roomsInfo.length; i++) {
            if (roomsInfo[i].internalMeetingID.toString() === meetid) {
                if (roomsInfo[i].attendees === undefined) {
                    return null;
                }
                let users = CommonUtil.tranObjToArr(roomsInfo[i].attendees.attendee);
                if (users != undefined) {
                    for (let j = 0; j < users.length; j++) {
                        if (users[j].userID === userId) {
                            return users[j].fullName;
                        }
                    }
                }
                break;
            }
        }
    }

    return null;
}


module.exports = {getMeetingIdByVoiceBridge, getNameByUserId, getMeetNameByVoiceBridge,getNameByMeetingIdUserId}
