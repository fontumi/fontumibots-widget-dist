import { h } from "@stencil/core";
import { valid } from "../../utils/validator";
/**
 * Input del chat. Varia segun el tipo de respuesta esperada.
 * Verifica que la respuesta sea valida.
 * @author krthr
 * @since 1.0.0
 */
export class FontumibotsChatInput {
    constructor() {
        this.validMessage = true;
        this.handleInput = e => (this.message = e.target.value);
        /**
         * Manejar el `enter`.
         */
        this.handleKeyPress = e => e.key == "enter" || e.key == "Enter"
            ? this.sendMessage()
            : (this.validMessage = true);
    }
    /**
     * Verificar que la respuesta sea valida. Si lo es, emitir el
     * evento `sendMessage` con el mensaje como dato.
     */
    async sendMessage() {
        try {
            await valid(this.type, this.message);
            this.sendMessageEvent.emit(this.message);
            this.message = "";
        }
        catch (e) {
            console.log(e);
            this.validMessage = false;
        }
    }
    render() {
        /**
         * Seleccionar el modelo de respuesta adecuado.
         */
        const input = () => {
            switch (this.type) {
                // Correo electronico
                case "email": {
                    return (h("input", { id: "fontumibots-chat-container-input", class: {
                            "uk-input uk-text-center": true,
                            "uk-form-danger": !this.validMessage
                        }, type: "email", placeholder: "E-Mail", value: this.message, onInput: this.handleInput, onKeyPress: this.handleKeyPress }));
                }
                // Numero
                case "number": {
                    return (h("input", { id: "fontumibots-chat-container-input", class: {
                            "uk-input uk-text-center": true,
                            "uk-form-danger": !this.validMessage
                        }, type: "number", min: this.props["min"].value, max: this.props["max"].value, placeholder: "Respuesta num\u00E9rica", value: this.message, onInput: this.handleInput, onKeyPress: this.handleKeyPress }));
                }
                // Celular / Telefono
                case "phone": {
                    return (h("input", { id: "fontumibots-chat-container-input", class: {
                            "uk-input uk-text-center": true,
                            "uk-form-danger": !this.validMessage
                        }, type: "tel", placeholder: "N\u00FAmero de celular", minLength: 5, maxlength: 13, value: this.message, onInput: this.handleInput, onKeyPress: this.handleKeyPress }));
                }
                // Si / No
                case "yesno": {
                    return (h("div", { class: "uk-flex uk-flex-center" },
                        h("button", { class: "uk-button uk-button-secondary", onClick: () => {
                                this.message = "Si";
                                this.sendMessage();
                            } }, "S\u00ED"),
                        h("button", { class: "uk-button uk-margin-left uk-button-danger", onClick: () => {
                                this.message = "No";
                                this.sendMessage();
                            } }, "No")));
                }
            }
            return (
            // Respuesta de texto
            h("input", { id: "fontumibots-chat-container-input", class: {
                    "uk-input uk-text-center": true,
                    "uk-form-danger": !this.validMessage
                }, type: "text", placeholder: "Enviar un mensaje...", value: this.message, onInput: this.handleInput, onKeyPress: this.handleKeyPress }));
        };
        return (h("div", { class: "uk-margin" },
            h("div", { class: "uk-inline" }, input())));
    }
    static get is() { return "fontumibots-chat-input"; }
    static get properties() { return {
        "props": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "object",
                "resolved": "object",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "type": {
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
                "text": ""
            },
            "attribute": "type",
            "reflect": false
        }
    }; }
    static get states() { return {
        "message": {},
        "validMessage": {}
    }; }
    static get events() { return [{
            "method": "sendMessageEvent",
            "name": "sendMessage",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
