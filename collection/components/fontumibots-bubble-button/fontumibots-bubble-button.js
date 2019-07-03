import { h } from "@stencil/core";
import { getTextColor } from "../../utils/utils";
export class FontumibotsBubbleButton {
    constructor() {
        this.opened = false;
        this.toggleOpened = () => {
            this.opened = !this.opened;
            this.toggleEvent.emit(this.opened);
        };
    }
    render() {
        console.log(this.color);
        return (h("div", { id: "fontumibots-bubble-button", style: {
                background: this.color
            }, onClick: this.toggleOpened }, this.opened ? (h("fontumibots-icon-close", { height: 20, width: 20, fill: getTextColor(this.color) })) : (h("fontumibots-icon-messages", { height: 20, width: 20, fill: getTextColor(this.color) }))));
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
        }
    }; }
    static get states() { return {
        "opened": {}
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
