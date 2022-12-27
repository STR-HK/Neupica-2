import { NeuApp } from "./App.js";
import { runApp } from "../Neupica2.js";
import { NeuRow } from "../../Layout/NeuRow.js";
import { NeuModalRender } from "./Render.js";
import { NeuLayout } from "../../Layout/NeuLayout.js";
import { NeuContainer } from "../Components/Native/NeuContainer.js";
export class Modal extends NeuApp {
    // layers: NeuContainer[]
    layers;
    constructor() {
        super();
        this.layout = new NeuRow();
        this.layout.geometry.ZIndex = '9999';
        if (this.layout.element) {
            this.layout.element.style.pointerEvents = 'none';
        }
        this.layout.geometry.Width = '100vw';
        this.layout.geometry.Height = '100vh';
        this.layout.data.FlexDirection = 'column';
        this.layout.geometry.Position = 'absolute';
        // this.layout.data.JustifyContent = 'center'
        // this.layout.data.AlignItems = 'center'
        this.layers = [];
        this.addQueue({
            command: 'f',
            arguments: [function () {
                    this.dom = document.querySelector('body');
                    this.dom.prepend(this.app);
                    NeuModalRender(this, this.layout, this.app, false);
                }.bind(this)],
        });
    }
    createLayer() {
        let layer = new NeuContainer();
        if (layer.element) {
            layer.element.style.pointerEvents = 'none';
        }
        layer.geometry.Width = '100%';
        layer.geometry.Height = '100%';
        layer.data.FlexDirection = 'column';
        layer.geometry.Position = 'absolute';
        // layer.data.JustifyContent = 'center'
        // layer.data.AlignItems = 'center'
        this.layers.push(layer);
        return layer;
    }
    getLayer(element) {
        if (this.layout instanceof NeuLayout) {
            for (let layer of this.layers) {
                if (layer.children.indexOf(element) > -1) {
                    return layer;
                }
            }
        }
        return null;
    }
    addModal(element) {
        if (this.layout instanceof NeuLayout) {
            let layer = this.createLayer();
            layer.addChild(element);
            this.layout.addChild(layer);
        }
    }
    addInteractiveModal(element) {
        if (element.cover) {
            element.cover.style.pointerEvents = 'auto';
        }
        this.addModal(element);
    }
    removeModal(element) {
        if (this.layout instanceof NeuLayout) {
            for (let layer of this.layers) {
                if (layer.children.indexOf(element) > -1) {
                    layer.removeChild(element);
                    this.layout.removeChild(layer);
                    let index = this.layers.indexOf(layer);
                    if (index > -1) {
                        this.layers.splice(index, 1);
                    }
                }
            }
        }
    }
    clearModal() {
        if (this.layout instanceof NeuLayout) {
            this.layout.clearChildren();
        }
    }
}
export function initModal() {
    let modal = new Modal();
    runApp(modal);
    // @ts-ignore
    window.modal = modal;
}
//# sourceMappingURL=Modal.js.map