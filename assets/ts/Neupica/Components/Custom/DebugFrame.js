import { NeuContainer } from "../Native/NeuContainer.ts"
import { createCover, createDiv, createGhostCover, createGhostDiv } from "../Create/Create.ts"
import { Native } from "../Native/Native.js"
import { Found } from "../Found/Found.js"
import { Padding } from "../../../Tool/Padding.js"

export class DebugFrame extends Found {
    constructor() {
        super()

        this.name = "DebugFrame"

        this.data = {
            BackgroundColor: "transparent",
            Border: "",
        }

        this.build()

        // this.cover = createGhostCover(this.name)
        // this.element = createGhostDiv()
        this.cover.addChild(this.element)
    }

    BackgroundColor () {
        this.element.style.backgroundColor = this.data.BackgroundColor
    }

    Border () {
        this.element.style.border = this.data.Border
    }

    setGeometry(baseElement) {
        let elementData = baseElement.getBoundingClientRect()
        this.geometry.Top = elementData.top + "px"
        this.geometry.Left = elementData.left + "px"
        this.geometry.Width = elementData.width + "px"
        this.geometry.Height = elementData.height + "px"
    }
}