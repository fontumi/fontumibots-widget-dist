import { h } from "@stencil/core";
import { getTextColor } from "../../utils/utils";
export class FontumibotsBubbleButton {
    render() {
        const icon = () => {
            switch (this.icon) {
                case "call":
                    return h("fontumibots-icon-call", { fill: getTextColor(this.color) });
                case "message":
                    return (h("fontumibots-icon-messages", { height: 20, width: 20, fill: getTextColor(this.color) }));
                default:
                    return (h("fontumibots-icon-close", { height: 20, width: 20, fill: getTextColor(this.color) }));
            }
        };
        return (h("div", { id: "fontumibots-bubble-button", style: {
                background: this.color
            }, onClick: () => this.toggleEvent.emit() }, icon()));
    }
    static get is() { return "fontumibots-bubble-button"; }
    static get originalStyleUrls() { return {
        "$": ["./fontumibots-bubble-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["fontumibots-bubble-button.css"]
    }; }
    static get properties() { return {
        "color": {
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
            "attribute": "color",
            "reflect": false
        },
        "icon": {
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
            "attribute": "icon",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "toggleEvent",
            "name": "toggled",
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
