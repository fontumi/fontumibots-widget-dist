import { h } from "@stencil/core";
export class FontumibotsIconClose {
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
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: this.width, height: this.height, fill: this.fill, viewBox: "0 0 17 17", style: { marginTop: "-4px" } },
            h("path", { d: "M9.207 8.5l6.646 6.646-.707.707L8.5 9.207l-6.646 6.646-.707-.707L7.793 8.5 1.146 1.854l.707-.707L8.5 7.793l6.646-6.646.707.707L9.207 8.5z" })));
    }
    static get is() { return "fontumibots-icon-close"; }
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
