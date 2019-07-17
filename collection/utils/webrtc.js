export let phone;
let call_to;
const audio = document.createElement('audio');
audio.loop = true;
audio.src = 'https://www.doubango.org/sipml5/sounds/ringbacktone.wav';
/**
 * Initialize the web phone
 * @param {object} param
 * @param {string} param.to
 * @param {string} param.password
 * @param {string} param.to
 */
export const init = async ({ login, password, to }) => {
    phone = new window['FontumiClient']({ login, password });
    call_to = to;
    phone.onError = () => {
        audio.pause();
        hangup();
    };
    return phone;
};
/**
 * Make a new call
 */
export const call = () => {
    if (!phone || !phone.isRegistered)
        return;
    phone.makeCall({
        media: {
            audio: true,
            video: false
        },
        username: call_to,
        contact: { isRoom: false }
    });
    audio.play();
    phone.onCallConnected = () => audio.pause();
};
/**
 * Stop actual call
 */
export const hangup = () => {
    if (!phone)
        return;
    phone.endCall();
    audio.pause();
};
