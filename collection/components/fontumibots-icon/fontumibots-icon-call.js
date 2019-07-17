import { h } from "@stencil/core";
export class FontumibotsIconCall {
    constructor() {
        /**
         * Icon color
         */
        this.fill = "white";
    }
    render() {
        return (h("svg", { fill: this.fill, width: 30, height: 30, version: "1.1", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 481.168 481.168", style: {
                "enable-background": "new 0 0 481.168 481.168;"
            } },
            h("g", null,
                h("path", { d: "M410.639,70.5c-94-94-246.3-94-340.2,0c-90.4,90.4-93.8,235-10.1,329.5l2.5,2c-9.1,19.6-24.7,43.8-49.5,56\r\n\t\tc-8.2,4-6.3,16.2,2.7,17.6c27.1,4.2,66-0.5,102.3-27.9l0.5,0.4c92.2,54.2,212.8,41.8,292-37.4\r\n\t\tC504.639,316.8,504.639,164.4,410.639,70.5z M319.839,343.5c-5.3,5.4-10.9,10.4-15.9,16c-7.3,8.2-16.5,10.8-26.9,10.2\r\n\t\tc-15.2-0.8-29.3-5.9-42.8-12.5c-30.1-14.6-55.8-34.9-77.3-60.5c-15.9-18.9-29-39.5-37.7-62.8c-4.2-11.3-7.2-22.8-6.3-35\r\n\t\tc0.6-7.5,3.4-13.9,8.9-19.2c6-5.7,11.6-11.6,17.5-17.4c7.7-7.6,17.3-7.5,25,0c4.8,4.7,9.4,9.4,14.1,14.1c4.6,4.6,9.2,9.1,13.7,13.7\r\n\t\tc8,8.1,8,17.5,0,25.6c-5.7,5.8-11.4,11.6-17.3,17.2c-1.5,1.5-1.7,2.7-0.9,4.6c3.8,9.2,9.4,17.4,15.6,25\r\n\t\tc12.5,15.4,26.7,29.1,43.7,39.7c3.6,2.3,7.6,3.9,11.4,6c1.9,1.1,3.3,0.7,4.8-0.9c5.7-5.9,11.6-11.7,17.4-17.5\r\n\t\tc7.7-7.6,17.3-7.6,24.9,0c9.4,9.3,18.7,18.6,28,28C327.739,326,327.739,335.6,319.839,343.5z M231.139,188.1l3-21.4\r\n\t\tc20.7,2.9,39.5,12.3,54.3,27.1c14.1,14.1,23.3,31.8,26.6,51.3l-21.3,3.7c-2.6-15.1-9.7-28.8-20.6-39.7\r\n\t\tC261.639,197.6,247.139,190.3,231.139,188.1z M349.839,245.1c-4.8-28-18-53.4-38.1-73.6c-21.2-21.2-48.1-34.6-77.8-38.8l3-21.4\r\n\t\tc34.3,4.8,65.5,20.3,90,44.9c23.3,23.3,38.6,52.8,44.2,85.2L349.839,245.1z" })),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null),
            h("g", null)));
    }
    static get is() { return "fontumibots-icon-call"; }
    static get properties() { return {
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
            "defaultValue": "\"white\""
        }
    }; }
}