import { Layout } from "./Layout.js"
import { createLayout } from "../Neupica/Components/Create/Create.js"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.js"

export class NeuCalc extends NeuContainer {
    constructor() {
        super("NeuCalc")
        this.name = "NeuCalc"

        this.data.FlexDirection = 'column'

    }

    addChild(child): this {
        super.addChild(child)

        child.geometry.Position = 'absolute'

    }
}

// Object.assign(NeuLayout.prototype, Layout)