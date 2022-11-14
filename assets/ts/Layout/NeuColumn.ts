import { Layout } from "./Layout.js"
import { NeuLayout } from "./NeuLayout.js"

export class NeuColumn extends NeuLayout {
    constructor() {
        super()
        this.name = "NeuColumn"

        this.element = this.createLayout()
        this.element.style.flexDirection = "column"
    }
}
