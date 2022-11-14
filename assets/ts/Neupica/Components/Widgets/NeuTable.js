import { Padding } from "../../../Tool/Padding.js"
// import { Native } from "./Native.ts"
import { NeuContainer } from "../Native/NeuContainer.ts"
import { NeuText } from "../Native/NeuText.js"

export class NeuTable extends NeuContainer {
    constructor() {
        super()
        this.name = "NeuTable"

        this.data = {
            Cursor: { data: new NeuText().data },
        }
        this.build()

        this.element = this.createDiv()
        this.geometry.Display = 'flex'
        this.geometry.Width = 'fit-content'
        this.data.Symmetric = "vertical"

        // this.cover = this.element
        this.cover.addChild(this.element)

    }

    childrenUpdate() {
        this.children.forEach((element) => {
            // console.log(element)
            this.element.addChild(element)
        })
    }
}
