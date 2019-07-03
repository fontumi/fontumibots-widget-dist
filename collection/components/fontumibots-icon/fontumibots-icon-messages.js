import { h } from "@stencil/core";
/**
 * FontumibotsIconMessages - Icono de mensajes
 */
export class FontumibotsIconMessages {
    constructor() {
        /**
         * Icon height
         */
        this.height = 30;
        /**
         * Icon width
         */
        this.width = 30;
        /**
         * Icon color
         */
        this.fill = "black";
    }
    render() {
        return (h("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: this.width, height: this.height, fill: this.fill, viewBox: "0 0 96.000000 96.000000", preserveAspectRatio: "xMidYMid meet", style: { marginTop: "-4px" } },
            h("g", { transform: "translate(0.000000,96.000000) scale(0.100000,-0.100000)", fill: this.fill, stroke: "none" },
                h("path", { d: "M105 855 l-25 -24 0 -278 0 -277 63 62 63 62 212 0 c283 0 262 -19 262 240 0 189 0 191 -25 215 l-24 25 -251 0 -251 0 -24 -25z" }),
                h("path", { d: "M720 569 c0 -197 -16 -209 -269 -209 l-171 0 0 -55 c0 -46 4 -60 25 -80 l24 -25 218 0 217 0 58 -57 58 -57 0 272 0 273 -25 24 c-20 21 -34 25 -80 25 l-55 0 0 -111z" }))));
    }
    static get is() { return "fontumibots-icon-messages"; }
    static get properties() { return {
        "height": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Icon height"
            },
            "attribute": "height",
            "reflect": false,
            "defaultValue": "30"
        },
        "width": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Icon width"
            },
            "attribute": "width",
            "reflect": false,
            "defaultValue": "30"
        },
        "fill": {
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
                "text": "Icon color"
            },
            "attribute": "fill",
            "reflect": false,
            "defaultValue": "\"black\""
        }
    }; }
}
