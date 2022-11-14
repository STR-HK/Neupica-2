import { Layout } from "./Layout.js"
import { NeuLayout } from "./NeuLayout.js"

export class NeuRow extends NeuLayout {
    constructor() {
        super()
        this.name = "NeuRow"

        this.element = this.createLayout()
        this.element.style.flexDirection = "row"
    }
}
