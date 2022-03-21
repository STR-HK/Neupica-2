import { NeuText } from "../Native/NeuText.js"
import { Widget } from "./Widgets.js"

export class NeuLabel extends Widget {
    constructor() {
        super()

        this.name = "NeuLabel"

        this.obj = {
            Cursor: 0,
        }

        Object.entries(this.obj).forEach(([key, value]) => {
            Object.defineProperty(this, key, {
                get: () => {
                    return this.obj[key]
                },
                set: (newValue) => {
                    this.obj[key] = newValue
                    this.update(key)
                },
            })
        })

        this.create()
        this.init()
    }

    create() {
        this.cover = this.createCover(this.name)
    }

    init() {
        this.cover.style.display = "flex"
        this.cover.style.flexDirection = "row"
    }

    childrenUpdate() {
        this.appendTo(this.cover)
    }

    uCursor() {
        if (this.children[this.Cursor] == undefined) {
            this.setChild(this.Cursor, new NeuText())
        }

        if (Number.isInteger(this.Cursor)) {
            this.Cursor = this.children[this.Cursor]
        }
    }
}
