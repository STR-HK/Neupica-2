import { Padding } from "../../../Tool/Padding.js"
import { Native } from "./Native.js"

export class NeuContainer extends Native {
    constructor() {
        super()
        this.name = "NeuContainer"

        this.element = this.createDiv()
        this.element.style.display = "flex"
        // this.target = this.element
        this.cover.addChild(this.element)

        this.data = {
            BackgroundColor: [
                "transparent",
                function () {
                    this.element.style.backgroundColor =
                        this.data.BackgroundColor
                },
            ],

            BorderColor: [
                "transparent",
                function () {
                    this.element.style.borderColor = this.data.BorderColor
                },
            ],
            BorderWidth: [
                "0px",
                function () {
                    this.element.style.borderWidth = this.data.BorderWidth
                },
            ],
            BorderRadius: [
                "0px",
                function () {
                    this.element.style.borderRadius = this.data.BorderRadius
                },
            ],

            Shadow: [
                "none",
                function () {
                    console.log("shadow not implemented yet")
                },
            ],

            Gap: [
                "0px",
                function () {
                    this.element.style.gridGap = this.data.Gap
                },
            ],

            AspectRatio: [
                "auto",
                function () {
                    this.element.style.aspectRatio = this.data.AspectRatio
                },
            ],

            FlexDirection: [
                "row",
                function () {
                    this.element.style.flexDirection = this.data.FlexDirection
                },
            ],
            FlexWrap: [
                "nowrap",
                function () {
                    this.element.style.flexWrap = this.data.FlexWrap
                },
            ],
            AlignContent: [
                "stretch",
                function () {
                    this.element.style.alignContent = this.data.AlignContent
                },
            ],
            JustifyContent: [
                "flex-start",
                function () {
                    this.element.style.justifyContent = this.data.JustifyContent
                },
            ],
            AlignItems: [
                "stretch",
                function () {
                    this.element.style.alignItems = this.data.AlignItems
                },
            ],

            Padding: [
                new Padding().all("0px"),
                function () {
                    this.element.style.padding = this.data.Padding
                },
            ],
            Margin: [
                new Padding().all("0px"),
                function () {
                    this.element.style.margin = this.data.Margin
                },
            ],
        }
        this.build()
    }

    childrenUpdate() {
        this.children.forEach((element) => {
            this.element.addChild(element)
        })
    }
}
