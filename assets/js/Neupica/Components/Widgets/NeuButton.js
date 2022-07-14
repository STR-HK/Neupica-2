import { NeuContainer } from "../Native/NeuContainer.js"
import { NeuImage } from "../Native/NeuImage.js"
import { NeuText } from "../Native/NeuText.js"
import { Widget } from "./Widgets.js"

export class NeuButton extends Widget {
    constructor() {
        super()
        this.name = "NeuButton"

        // this.cover = this.createCover()
        this.cover.style.webkitTapHighlightColor = "transparent"
        this.cover.style.cursor = "pointer"

        this.element = new NeuContainer()
        this.cover.addChild(this.element)

        this.target = this.element.element

        this.img = new NeuImage()
        this.element.addChild(this.img)

        this.text = new NeuText()
        this.text.data.UserSelect = "none"
        this.element.addChild(this.text)

        this.data = {
            Button: this.element.data,
            ButtonImage: this.img.data,
            ButtonText: this.text.data,
        }
        this.build()
    }

    childrenUpdate() {
        console.log("chill")
    }
}
