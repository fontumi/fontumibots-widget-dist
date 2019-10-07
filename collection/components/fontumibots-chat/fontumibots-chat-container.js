import { h } from "@stencil/core";
import { getTextColor } from "../../utils/utils";
import { ChatController } from "../../utils/chat-controller";
import { functions } from "../../utils/firebase";
import { call as makeCall, hangup, phone } from "../../utils/webrtc";
export class FontumibotsChatContainer {
    constructor() {
        /**
         * Lista de mensajes (preguntas y respuestas)
         */
        this.messages = [];
        /**
         * Tipo actual de bloque (pregunta)
         */
        this.actualQuestionType = "text";
        this.inCall = false;
        this.phoneReady = false;
        /**
         * Hacer una llamada
         */
        this.call = async () => {
            if (this.inCall)
                return;
            makeCall();
            setTimeout(() => {
                this.hangup();
                makeCall();
                this.inCall = true;
            }, 1000);
            phone.onCallEnd = () => {
                this.hangup();
            };
        };
        this.hangup = () => {
            hangup();
            this.inCall = false;
        };
        /**
         * Manejar la resputa del usuario
         */
        this.answer = e => {
            this.addMessage(e.detail, true); // Agregar respuesta a lista de mensajes
            if (this.actualQuestionType === "yesno") {
                // Seleccionar el camino, si fue una pregunta de Si/No
                this.controller.next(e.detail === "No" ? 1 : 0);
            }
            else {
                this.controller.next();
            }
            this.ask(); // Preguntar sig.
        };
    }
    async callOutside() {
        return this.call();
    }
    /**
     * Preguntar
     */
    async ask() {
        this.addMessage(this.controller.actualBlock.question().value, false); // Agregar pregunta a lista de mensajes
        this.actualQuestionType = this.controller.actualBlock.question().type; // Definir el tipo de bloque (pregunta) actual
        if (this.actualQuestionType === "end") {
            try {
                const { data } = await functions.httpsCallable("sendMail")({
                    messages: this.messages,
                    to: this.bot.email,
                    name: this.bot.name
                });
                console.log(data);
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    /**
     * Inicializar controlador de chat
     */
    initChatController() {
        this.controller = new ChatController(this.bot.escene.links, this.bot.escene.blocks);
        this.ask();
        this.controller.next();
        this.ask();
    }
    /**
     * Agregar mensaje a la lista de mensajes
     * TODO: hacer scroll del container de mensajes
     */
    addMessage(message, user) {
        this.messages = [
            ...this.messages,
            {
                id: Date.now(),
                message,
                user
            }
        ];
    }
    componentWillLoad() {
        this.initChatController();
    }
    componentDidLoad() {
        // this.initChatController();
    }
    render() {
        const textColor = getTextColor(this.bot.colors.a);
        const text2Color = getTextColor(this.bot.colors.b);
        const mainColor = this.bot.colors.a;
        const secColor = this.bot.colors.b;
        const message = ({ id, message, user }) => (h("div", { id: `message-${id}-${user}`, class: `uk-text-${user ? "right" : "left"} fontumibots-message` },
            h("div", { style: { background: user ? secColor : mainColor } },
                h("p", { class: "uk-text-break", style: {
                        color: user ? text2Color : textColor
                    } }, message))));
        return (h("div", { id: "fontumibots-chat-container", class: "uk-card uk-card-default uk-card-hover uk-width-5-6 uk-width-1-4@m" },
            h("div", { class: "uk-card-header", style: {
                    background: mainColor,
                    padding: "15px 20px"
                } },
                h("div", { class: "uk-grid uk-grid-small uk-flex-middle" },
                    h("div", { class: "uk-width-expand" },
                        h("h3", { class: "uk-card-title uk-margin-remove-bottom", style: { color: textColor } }, this.bot.name),
                        h("p", { class: "uk-text-meta uk-margin-remove-top", style: { color: textColor } }, this.bot.email)),
                    this.bot.sip.on && this.phoneReady ? (h("div", { class: "uk-width-auto" }, this.inCall ? (h("fontumibots-icon-end-call", { fill: textColor, onClick: this.hangup })) : (h("fontumibots-icon-call", { fill: textColor, onClick: this.call })))) : (h("div", null)))),
            h("div", { id: "fontumibots-chat-container-body", class: "uk-card-body uk-padding-small" }, this.messages.map(msg => message(msg))),
            h("div", { class: "uk-card-footer" },
                this.actualQuestionType === "end" ? (h("div", null)) : (h("fontumibots-chat-input", { type: this.actualQuestionType, props: this.controller.actualBlock.props() || [], style: { width: "100px" }, onSendMessage: this.answer })),
                h("div", { class: "uk-grid uk-flex-center" },
                    h("img", { src: "https://www.fontumi.co/empresas/logos/byfontumilogo.png", alt: "", style: { width: "100px", marginBottom: "10px" } })))));
    }
    static get is() { return "fontumibots-chat-container"; }
    static get originalStyleUrls() { return {
        "$": ["./fontumibots-chat-container.css"]
    }; }
    static get styleUrls() { return {
        "$": ["fontumibots-chat-container.css"]
    }; }
    static get properties() { return {
        "bot": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Bot",
                "resolved": "Bot",
                "references": {
                    "Bot": {
                        "location": "import",
                        "path": "../../utils/interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Bot"
            }
        },
        "phoneReady": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "phone-ready",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "messages": {},
        "actualQuestionType": {},
        "inCall": {}
    }; }
    static get methods() { return {
        "callOutside": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
