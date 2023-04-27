import { MaterialText } from "../Native/MaterialText.ts"
import { NeuContainer } from "../Native/NeuContainer.ts"

export class NeuLabel extends NeuContainer {
    constructor() {
        super()
        this.name = "NeuLabel"

        this.data = {
            CursorPos: 0,
            Cursor: new NeuContainer(),
        }
        this.build()

        this.create()
        this.init()
    }

    CursorPos () {
        if (this.children[this.data.CursorPos] === undefined) {
            this.setChild(this.data.CursorPos, new NeuContainer())
        }

        this.data.Cursor = this.children[this.data.CursorPos]
    }

    Cursor () {
        try {
        } catch {
        }
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
}
