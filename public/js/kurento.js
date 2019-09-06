import { fetchWebRTCMappedStunTurnServers } from './utils/fetchStunTurnServers';


//const SFU_URL = "wss://192.168.1.124/bbb-webrtc-sfu";
const SFU_URL ="wss://"+host+"/bbb-webrtc-sfu";
const CHROME_DEFAULT_EXTENSION_KEY = "akgoaoikmbmhcopjgakkcepdgdgkjfbc";
const CHROME_CUSTOM_EXTENSION_KEY = "KEY";
const CHROME_SCREENSHARE_SOURCES = ["window","screen"];
const FIREFOX_SCREENSHARE_SOURCE = "window";
const SCREENSHARE_VIDEO_TAG = 'screenshareVideo';

const CHROME_EXTENSION_KEY = CHROME_CUSTOM_EXTENSION_KEY === 'KEY' ? CHROME_DEFAULT_EXTENSION_KEY : CHROME_CUSTOM_EXTENSION_KEY;

/*const stunserver = {
  "stunServers": [
    {
      "url": "stun:stun.freeswitch.org"
      //"url":"stun:stunserver.org"
    }
  ],
  "turnServers": [

  ],
  "remoteIceCandidates": [

  ]
}*/
const stunserver = [{"urls":"stun:stun.freeswitch.org"}];
/*const voiceBridge = "76256";
const userId = "w_lhovd7galrua";
const internalMeetingId = "183f0bf3a0982a127bdb8161e0c44eb696b3e75c-1567558733988";
const sesionToken = "fmx86cvgafy2pynj";*/
console.log("hxtest voiceBridge=" + voiceBridge);
console.log("hxtest userId=" + userId);
console.log("hxtest internalMeetingId=" + internalMeetingId);
console.log("hxtest sesionToken=" + sesionToken);

const getUserId = () => userId;//Auth.userID;

const getMeetingId = () => internalMeetingId;//Auth.meetingID;

const getSessionToken = () => sesionToken;// Auth.sessionToken;

const getConferenceBridge = () => voiceBridge;

//this.sessionToken = getSessionToken();

const modLogger = {
  info(message, options = {}) {
    console.log('info ' + message);
    // logFunc('info', message, options);
  },
  error(message, options = {}) {
    console.log('error ' + message);
    // logFunc('error', message, options);
  },
  debug(message, options = {}) {
    console.log('debug ' + message);
    // logFunc('debug', message, options);
  },
  warn: (message, options = {}) => {
    console.log('warn ' + message);
   // logFunc('warn', message, options);
  },
};

const authenticateURL =(url) => {
  let authURL = url;
  const sessionToken = getSessionToken();
  if (authURL.indexOf('sessionToken=') === -1) {
    if (authURL.indexOf('?') !== -1) {
      authURL = `${authURL}&sessionToken=${sessionToken}`;
    } else {
      authURL = `${authURL}?sessionToken=${sessionToken}`;
    }
  }
  return authURL;
}

export default class KurentoScreenshareBridge {
  async kurentoWatchVideo() {
    let iceServers = [];

    try {
      iceServers = stunserver;// await fetchWebRTCMappedStunTurnServers(getSessionToken());
    } catch (error) {
      console.log("kurentowatchvideo_fetchstunturninfo_error");
    //  logger.error({ logCode: 'kurentowatchvideo_fetchstunturninfo_error' }, 'Screenshare bridge failed to fetch STUN/TURN info, using default');
    } finally {
      const options = {
        wsUrl: authenticateURL(SFU_URL),
        iceServers,
        logger: modLogger,
      };

      window.kurentoWatchVideo(
        SCREENSHARE_VIDEO_TAG,
        BridgeService.getConferenceBridge(),
        getUserId(),
        getMeetingId(),
        null,
        null,
        options,
      );
    }
  }

  kurentoExitVideo() {
    window.kurentoExitVideo();
  }

  async kurentoShareScreen(onFail) {
    let iceServers = [];
    try {
      iceServers = stunserver; // await fetchWebRTCMappedStunTurnServers(getSessionToken());

    } catch (error) {
      console.log("kurentosharescreen_fetchstunturninfo_error " + error);
      // logger.error({ logCode: 'kurentosharescreen_fetchstunturninfo_error' }, 'Screenshare bridge failed to fetch STUN/TURN info, using default');
    } finally {
      const options = {
        wsUrl: authenticateURL(SFU_URL),
        chromeExtension: CHROME_EXTENSION_KEY,
        chromeScreenshareSources: CHROME_SCREENSHARE_SOURCES,
        firefoxScreenshareSource: FIREFOX_SCREENSHARE_SOURCE,
        iceServers,
        logger: modLogger,
      };
      window.kurentoShareScreen(
        SCREENSHARE_VIDEO_TAG,
        getConferenceBridge(),
        getUserId(),
        getMeetingId(),
        onFail,
        null,
        options,
      );
    }
  }

  kurentoExitScreenShare() {
    window.kurentoExitScreenShare();
  }
}
