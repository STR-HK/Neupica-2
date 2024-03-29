import { Layout } from "./Layout.js"
import { createLayout } from "../Neupica/Components/Create/Create.js"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.js"

export class NeuLayout extends NeuContainer {
    constructor() {
        super()
        this.name = "NeuLayout"

    }

    attachLayout () {
        let layout = this.element
        layout.className = "NeuLayout"
        layout.style.display = "flex"
        return layout
    }
}

// Object.assign(NeuLayout.prototype, Layout)