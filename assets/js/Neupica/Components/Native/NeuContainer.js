// import { throwDeprecation } from "process"
import { Padding } from "../../../Tool/Padding.js"
import { Native } from "./Native.js"

export class NeuContainer extends Native {
    constructor() {
        super()
        this.name = "NeuContainer"

        this.cover = this.createCover()
        this.element = this.createDiv()
        this.cover.addChild(this.element)

        this.data = {
            BackgroundColor: "transparent",

            BorderColor: "transparent",
            BorderWidth: "0px",
            BorderRadius: "0px",

            Shadow: undefined,

            Gap: "0px",

            Padding: new Padding().all("0px"),
        }
        this.build()
    }

    childrenUpdate() {
        this.children.forEach((element) => {
            this.element.addChild(element)
        })
    }

    uBackgroundColor() {
        this.element.style.backgroundColor = this.data.BackgroundColor
    }

    uBorderColor() {
        this.element.style.borderColor = this.data.BorderColor
    }

    uBorderWidth() {
        this.element.style.borderWidth = this.data.BorderWidth
    }

    uBorderRadius() {
        this.element.style.borderRadius = this.data.BorderRadius
    }

    uShadow() {
        console.log("shadow not implemented yet")
    }

    uGap() {
        this.element.style.gridGap = this.data.Gap
    }

    uPadding() {
        this.element.style.padding = this.data.Padding
    }
}
