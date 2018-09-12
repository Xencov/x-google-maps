export class MyComponent {
    constructor() {
        this.width = "600";
        this.height = "300";
        this.address = "Xencov Software";
        this.zoom = "16";
        this.mapType = "roadmap";
    }
    render() {
        const url = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(this.address)}&key=${this.apiKey}&zoom=${this.zoom}&maptype=${this.mapType}`;
        return (h("div", null,
            h("iframe", { width: this.width, height: this.height, frameborder: "0", src: url })));
    }
    static get is() { return "x-google-maps"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "address": {
            "type": String,
            "attr": "address"
        },
        "apiKey": {
            "type": String,
            "attr": "api-key"
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "mapType": {
            "type": String,
            "attr": "map-type"
        },
        "width": {
            "type": String,
            "attr": "width"
        },
        "zoom": {
            "type": String,
            "attr": "zoom"
        }
    }; }
    static get style() { return "/**style-placeholder:x-google-maps:**/"; }
}
