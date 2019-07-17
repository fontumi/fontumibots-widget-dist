import { h } from "@stencil/core";
import { query } from "../../utils/firebase";
import { init, phone } from '../../utils/webrtc';
/**
 * Componente base del widget. Contiene el resto de elementos que conforman el chat.
 */
export class FontumibotsWidget {
    constructor() {
        this.opened = false;
        this.error = true;
        this.phoneReady = false;
        this.toggle = ({ detail }) => (this.opened = detail);
    }
    async componentWillLoad() {
        let webrtc_ready, sdk_ready;
        const init_sdk = async (sip) => {
            if (sip.on && sip.login && sip.password && sip.to) {
                await init(sip);
                phone.onRegistered = () => this.phoneReady = true;
            }
        };
        const sdk = document.createElement('script');
        const webrtc = document.createElement('script');
        webrtc.src = "https://cdn.jsdelivr.net/gh/fontumi/fontumi-sdk-dist@master/plugins.webrtc.min.js";
        sdk.src = "https://cdn.jsdelivr.net/gh/fontumi/fontumi-sdk-dist@master/main.js";
        return new Promise(async (resolve, reject) => {
            try {
                const bot = await query("bots")(this.botId);
                if (bot.exists) {
                    const { name, email, description, escene, user_id, colors, sip, } = bot.data();
                    webrtc.onload = () => {
                        webrtc_ready = true;
                        return webrtc_ready && sdk_ready && init_sdk(sip);
                    };
                    sdk.onload = () => {
                        sdk_ready = true;
                        return webrtc_ready && sdk_ready && init_sdk(sip);
                    };
                    this.bot = { name, email, description, escene, user_id, colors, sip };
                    this.error = false;
                    document.head.appendChild(sdk);
                    document.head.appendChild(webrtc);
                    return resolve();
                }
            }
            catch (e) {
                return reject(e);
            }
            return reject(`FONTUMIBOT: Bot with id: ${this.botId} doesnt exists.`);
        });
    }
    render() {
        return this.error ? (h("div", null)) : (h("div", { id: "fontumibots-widget" },
            h("fontumibots-chat-container", { style: {
                    visibility: this.opened ? "visible" : "hidden",
                    padding: "10px"
                }, bot: this.bot, phoneReady: this.phoneReady }),
            h("fontumibots-bubble-button", { onToggled: this.toggle, color: this.bot.colors.a })));
    }
    static get is() { return "fontumibots-widget"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./fontumibots-widget.css"]
    }; }
    static get styleUrls() { return {
        "$": ["fontumibots-widget.css"]
    }; }
    static get properties() { return {
        "botId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Bot unique ID"
            },
            "attribute": "bot-id",
            "reflect": false
        }
    }; }
    static get states() { return {
        "opened": {},
        "bot": {},
        "error": {},
        "phoneReady": {}
    }; }
}
