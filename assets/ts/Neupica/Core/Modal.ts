import { NeuApp } from "./App.js"
import { runApp } from "../Neupica2.js"
import { NeuRow } from "../../Layout/NeuRow.js"
import { CommonButton } from "../Components/M3/Styles/Actions/Common Buttons/CommonButton.js"
import { NeuModalRender, NeuRender } from "./Render.js"
import { NeuLayout } from "../../Layout/NeuLayout.js"
import { NeuContainer } from "../Components/Native/NeuContainer.js"
import { Native } from "../Components/Native/Native"

export class Modal extends NeuApp {
    // layers: NeuContainer[]
    layers: NeuContainer[]
    constructor() {
        super()
        this.layout = new NeuRow()
        this.layout.geometry.ZIndex = '9999'
        if (this.layout.element) {
            this.layout.element.style.pointerEvents = 'none'
        }
        this.layout.geometry.Width = '100vw'
        this.layout.geometry.Height = '100vh'
        this.layout.data.FlexDirection = 'column'
        this.layout.geometry.Position = 'absolute'
        this.layout.data.JustifyContent = 'center'
        this.layout.data.AlignItems = 'center'

        this.layers = []

        this.addQueue({
            command: 'f',
            arguments: [function() {
                this.dom = document.querySelector('body')
                this.dom.prepend(this.app)
                NeuModalRender(this, this.layout, this.app, false)
            }.bind(this)],
        })
    }

    createLayer(): NeuContainer {
        let layer = new NeuContainer()
        if (layer.element) {
            layer.element.style.pointerEvents = 'none'
        }
        layer.geometry.Width = '100%'
        layer.geometry.Height = '100%'
        layer.data.FlexDirection = 'column'
        layer.geometry.Position = 'absolute'
        layer.data.JustifyContent = 'center'
        layer.data.AlignItems = 'center'
        this.layers.push(layer)
        return layer
    }

    getLayer(element: Native) {
        if (this.layout instanceof NeuLayout) {
            for (let layer of this.layers) {
                if (layer.children.indexOf(element) > -1) {
                    return layer
                }
            }
        }
        return null
    }

    addModal(element: Native) {
        if (this.layout instanceof NeuLayout) {
            let layer = this.createLayer()
            layer.addChild(element)
            this.layout.addChild(layer)
        }
    }

    addInteractiveModal(element: Native){
        if (element.cover) {
            element.cover.style.pointerEvents = 'auto'
        }
        this.addModal(element)
    }

    removeModal(element: Native){
        if (this.layout instanceof NeuLayout) {
            for (let layer of this.layers) {
                if (layer.children.indexOf(element) > -1) {
                    layer.removeChild(element)
                    this.layout.removeChild(layer)
                    let index = this.layers.indexOf(layer)
                    if (index > -1) {
                        this.layers.splice(index, 1)
                    }
                }
            }
        }
    }

    clearModal(){
        if (this.layout instanceof NeuLayout) {
            this.layout.clearChild()
        }
    }
}

export function initModal() {
    let modal = new Modal()
    runApp(modal)
    // @ts-ignore
    window.modal = modal
}


