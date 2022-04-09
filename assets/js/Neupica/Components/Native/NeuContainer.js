import { Padding } from "../../../Tool/Padding.js"
import { Native } from "./Native.js"

export class NeuContainer extends Native {
    constructor() {
        super()
        this.name = "NeuContainer"

        this.cover = this.createCover()
        this.element = this.createDiv()
        this.element.style.display = "flex"
        this.cover.addChild(this.element)

        this.data = {
            BackgroundColor: "transparent",

            BorderColor: "transparent",
            BorderWidth: "0px",
            BorderRadius: "0px",

            Shadow: undefined,

            Gap: "0px",

            AspectRatio: undefined,

            FlexDirection: "row",
            FlexWrap: "nowrap",
            AlignContent: "normal",
            JustifyContent: "normal",
            AlignItems: "normal",

            Padding: new Padding().all("0px"),
            Margin: new Padding().all("0px"),
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
    uMargin() {
        this.element.style.margin = this.data.Margin
    }
    uAspectRatio() {
        this.element.style.aspectRatio = this.data.AspectRatio
    }

    uFlexDirection() {
        this.element.style.flexDirection = this.data.FlexDirection
    }
    uFlexWrap() {
        this.element.style.flexWrap = this.data.FlexWrap
    }
    uAlignContent() {
        this.element.style.alignContent = this.data.AlignContent
    }
    uJustifyContent() {
        this.element.style.justifyContent = this.data.JustifyContent
    }
    uAlignItems() {
        this.element.style.alignItems = this.data.AlignItems
    }
}
