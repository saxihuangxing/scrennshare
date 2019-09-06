import KurentoBridge from './kurento';

const screenshareBridge = new KurentoBridge();

screenshareBridge.kurentoShareScreen(function (e) {
    console.log(e);
});

export default screenshareBridge;
