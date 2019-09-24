import { a as patchEsm, b as bootstrapLazy } from './core-a5b29150.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["fontumibots-bubble-button_8", [[1, "fontumibots-widget", { "botId": [1, "bot-id"], "opened": [32], "bot": [32], "error": [32], "phoneReady": [32] }], [0, "fontumibots-bubble-button", { "color": [1], "icon": [1] }], [0, "fontumibots-chat-container", { "bot": [16], "phoneReady": [4, "phone-ready"], "messages": [32], "actualQuestionType": [32], "inCall": [32], "callOutside": [64] }], [0, "fontumibots-chat-input", { "props": [16], "type": [1], "message": [32], "validMessage": [32] }], [0, "fontumibots-icon-close", { "height": [2], "width": [2], "fill": [1] }], [0, "fontumibots-icon-end-call", { "fill": [1] }], [0, "fontumibots-icon-messages", { "height": [2], "width": [2], "fill": [1] }], [0, "fontumibots-icon-call", { "fill": [1] }]]]], options);
    });
};
export { defineCustomElements };
