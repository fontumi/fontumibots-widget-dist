import { h } from "@stencil/core";
import { query } from "../../utils/firebase";
/**
 * Componente base del widget. Contiene el resto de elementos que conforman el chat.
 */
export class FontumibotsWidget {
    constructor() {
        this.opened = false;
        this.error = true;
        this.toggle = ({ detail }) => (this.opened = detail);
    }
    async componentWillLoad() {
        return new Promise(async (resolve, reject) => {
            try {
                const bot = await query("bots")(this.botId).get();
                if (bot.exists) {
                    const { name, email, description, escene, user_id, colors } = bot.data();
                    this.bot = { name, email, description, escene, user_id, colors };
                    this.error = false;
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
                }, bot: this.bot }),
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
        "error": {}
    }; }
}
