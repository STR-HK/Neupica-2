import { NeuContainer } from "../Native/NeuContainer.js"
import { NeuImage } from "../Native/NeuImage.js"
import { NeuText } from "../Native/NeuText.js"
import { Widget } from "./Widgets.js"

export class NeuButton extends Widget {
    constructor() {
        super()
        this.name = "NeuButton"

        this.cover = this.createCover()
        this.cover.style.webkitTapHighlightColor = "transparent"
        this.element = new NeuContainer()

        this.text = new NeuText()
        this.text.data.UserSelect = "none"
        this.element.addChild(this.text)

        this.cover.addChild(this.element)

        this.cover.style.cursor = "pointer"

        this.data = {
            Button: this.element.data,

            ButtonText: this.text.data,
            ButtonImage: undefined,
        }
        this.build()
    }

    childrenUpdate() {
        console.log("chidl")
    }
}
