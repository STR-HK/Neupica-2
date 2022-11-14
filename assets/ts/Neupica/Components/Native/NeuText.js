import { Native } from "./Native.ts"

export class NeuText extends Native {
    constructor() {
        super()
        this.name = "NeuText"

        this.data = {
            Text: "Hello World",

            FontFamily: "Pretendard",
            FontSize: "1rem",
            FontStyle: "normal",
            FontWeight: "normal",

            TextAlign: "left",
            TextColor: "black",

            TextDecorationLine: "none",
            TextDecorationColor: "black",
            TextDecorationStyle: "solid",
            TextDecorationThickness: "1px",
            TextUnderlineOffset: "0px",

            TextTransform: "none",
            TextOverflow: "clip",

            TextIndent: "0px",
            LetterSpacing: "0px",
            LineHeight: "1",
            WordSpacing: "0px",
            WhiteSpace: "normal",

            TextShadow: "none",
            VerticalAlign: "baseline",
            WordBreak: "normal",
            Content: "none",

            Direction: "ltr",
            UserSelect: "auto",
        }

        this.element = this.createDiv()
        this.cover.addChild(this.element)
        this.element.style.width = "fit-content"


        this.build()
    }

    Text() {
        // this.element.inne
        // this.element.innerHTML = this.data.Text
        this.element.innerHTML = "NeuText Widget is know depreciated! Use NeuContainer instead."
    }

    FontFamily() {
        this.element.style.fontFamily = this.data.FontFamily
    }
    FontSize() {
        this.element.style.fontSize = this.data.FontSize
    }
    FontStyle() {
        this.element.style.fontStyle = this.data.FontStyle
    }
    FontWeight() {
        this.element.style.fontWeight = this.data.FontWeight
    }

    TextAlign() {
        this.element.style.textAlign = this.data.TextAlign
    }
    TextColor() {
        this.element.style.color = this.data.TextColor
    }

    TextDecorationLine() {
        this.element.style.textDecorationLine = this.data.TextDecorationLine
    }
    TextDecorationColor() {
        this.element.style.textDecorationColor = this.data.TextDecorationColor
    }
    TextDecorationStyle() {
        this.element.style.textDecorationStyle = this.data.TextDecorationStyle
    }
    TextDecorationThickness() {
        this.element.style.textDecorationThickness =
            this.data.TextDecorationThickness
    }
    TextUnderlineOffset() {
        this.element.style.textUnderlineOffset = this.data.TextUnderlineOffset
    }

    TextTransform() {
        this.element.style.textTransform = this.data.TextTransform
    }
    TextOverflow() {
        this.element.style.textOverflow = this.data.TextOverflow
    }

    TextIndent() {
        this.element.style.textIndent = this.data.TextIndent
        // this.element.
    }
    LetterSpacing() {
        this.element.style.letterSpacing = this.data.LetterSpacing
    }
    LineHeight() {
        this.element.style.lineHeight = this.data.LineHeight
    }
    WordSpacing() {
        this.element.style.wordSpacing = this.data.WordSpacing
    }
    WhiteSpace() {
        this.element.style.whiteSpace = this.data.WhiteSpace
    }

    TextShadow() {
        this.element.style.textShadow = this.data.TextShadow
    }
    VerticalAlign() {
        this.element.style.verticalAlign = this.data.VerticalAlign
    }
    WordBreak() {
        this.element.style.wordBreak = this.data.WordBreak
    }
    Content() {
        this.element.style.content = this.data.Content
    }

    Direction() {
        this.element.style.direction = this.data.Direction
    }
    UserSelect() {
        this.element.style.userSelect = this.data.UserSelect
    }
}
