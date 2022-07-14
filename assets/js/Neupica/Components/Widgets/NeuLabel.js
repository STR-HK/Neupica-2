import { NeuText } from "../Native/NeuText.js"
import { Widget } from "./Widgets.js"

export class NeuLabel extends Widget {
    constructor() {
        super()
        this.name = "NeuLabel"

        this.data = {
            Cursor: { data: new NeuText().data },
        }
        this.build()

        this.create()
        this.init()
    }

    create() {
        this.cover = this.createCover()
    }

    init() {
        this.cover.style.display = "flex"
        this.cover.style.flexDirection = "row"
    }

    childrenUpdate() {
        this.appendTo(this.cover)
    }

    uCursor() {
        if (this.children[this.data.Cursor] === undefined) {
            this.setChild(this.data.Cursor, new NeuText())
        }

        if (Number.isInteger(this.data.Cursor)) {
            this.data.Cursor = this.children[this.data.Cursor]
            // console.log(this.data.Cursor)
        }
    }
}
