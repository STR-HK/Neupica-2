import { Native } from "./Native.js"

export class NeuText extends Native {
    constructor() {
        super()
        this.name = "NeuText"

        this.data = {
            Text: [
                "Hello World",
                function () {
                    this.element.innerHTML = this.data.Text
                },
            ],

            FontFamily: [
                "Pretendard",
                function () {
                    this.element.style.fontFamily = this.data.FontFamily
                },
            ],
            FontSize: [
                "1rem",
                function () {
                    this.element.style.fontSize = this.data.FontSize
                },
            ],
            FontStyle: [
                "normal",
                function () {
                    this.element.style.fontStyle = this.data.FontStyle
                },
            ],
            FontWeight: [
                "normal",
                function () {
                    this.element.style.fontWeight = this.data.FontWeight
                },
            ],

            TextAlign: [
                "left",
                function () {
                    this.element.style.textAlign = this.data.TextAlign
                },
            ],
            TextColor: [
                "black",
                function () {
                    this.element.style.color = this.data.TextColor
                },
            ],

            TextDecorationLine: [
                "none",
                function () {
                    this.element.style.textDecorationLine =
                        this.data.TextDecorationLine
                },
            ],
            TextDecorationColor: [
                "black",
                function () {
                    this.element.style.textDecorationColor =
                        this.data.TextDecorationColor
                },
            ],
            TextDecorationStyle: [
                "solid",
                function () {
                    this.element.style.textDecorationStyle =
                        this.data.TextDecorationStyle
                },
            ],
            TextDecorationThickness: [
                "1px",
                function () {
                    this.element.style.textDecorationThickness =
                        this.data.TextDecorationThickness
                },
            ],

            TextUnderlineOffset: [
                "0px",
                function () {
                    this.element.style.textUnderlineOffset =
                        this.data.TextUnderlineOffset
                },
            ],
            TextTransform: [
                "none",
                function () {
                    this.element.style.textTransform = this.data.TextTransform
                },
            ],
            TextOverflow: [
                "clip",
                function () {
                    this.element.style.textOverflow = this.data.TextOverflow
                },
            ],

            TextIndent: [
                "0px",
                function () {
                    this.element.style.textIndent = this.data.TextIndent
                },
            ],
            LetterSpacing: [
                "0px",
                function () {
                    this.element.style.letterSpacing = this.data.LetterSpacing
                },
            ],
            LineHeight: [
                "1",
                function () {
                    this.element.style.lineHeight = this.data.LineHeight
                },
            ],
            WordSpacing: [
                "0px",
                function () {
                    this.element.style.wordSpacing = this.data.WordSpacing
                },
            ],
            WhiteSpace: [
                "normal",
                function () {
                    this.element.style.whiteSpace = this.data.WhiteSpace
                },
            ],

            TextShadow: [
                "none",
                function () {
                    this.element.style.textShadow = this.data.TextShadow
                },
            ],
            VerticalAlign: [
                "baseline",
                function () {
                    this.element.style.verticalAlign = this.data.VerticalAlign
                },
            ],
            WordBreak: [
                "normal",
                function () {
                    this.element.style.wordBreak = this.data.WordBreak
                },
            ],
            Content: [
                "none",
                function () {
                    this.element.style.content = this.data.Content
                },
            ],

            Direction: [
                "ltr",
                function () {
                    this.element.style.direction = this.data.Direction
                },
            ],

            UserSelect: [
                "auto",
                function () {
                    this.element.style.userSelect = this.data.UserSelect
                },
            ],
        }
        this.build()

        this.element = this.createDiv()
        // this.element.
        this.cover.addChild(this.element)
        // this.cover = this.element

        this.target = this.element
        this.element.style.width = "fit-content"
    }
}
