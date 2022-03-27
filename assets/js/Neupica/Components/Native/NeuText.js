import { Native } from "./Native.js"

export class NeuText extends Native {
    constructor() {
        super()
        this.name = "NeuText"

        this.data = {
            Text: "Null",

            FontFamily: "Pretendard",
            FontSize: "1rem",
            FontStyle: "normal",
            FontWeight: "normal",

            TextAlign: "left",
            TextColor: "#000000",

            TextDecorationLine: "none",
            TextDecorationColor: "#000000",
            TextDecorationStyle: "solid",
            TextDecorationThickness: "1px",

            TextUnderlineOffset: "auto",
            TextTransform: "none",
            TextOverflow: "clip",

            TextIndent: "0px",
            LetterSpacing: "0em",
            LineHeight: "1",
            WordSpacing: "0px",
            WhiteSpace: "normal",

            TextShadow: "none",
            VerticalAlign: "baseline",
            WordBreak: "normal",
            Content: "",
        }
        this.build()

        this.create()
        this.init()

        this.apply(this.data)
    }

    create() {
        this.cover = this.createCover()
        this.element = this.createDiv()
        this.cover.appendChild(this.element)
    }

    init() {
        this.element.style.width = "fit-content"
    }

    uText() {
        this.element.innerText = this.data.Text
    }

    uFontSize() {
        this.element.style.fontSize = this.data.FontSize
    }

    uFontFamily() {
        this.element.style.fontFamily = this.data.FontFamily
    }

    uFontStyle() {
        this.element.style.fontStyle = this.data.FontStyle
    }

    uFontWeight() {
        this.element.style.fontWeight = this.data.FontWeight
    }

    uTextAlign() {
        this.element.style.textAlign = this.data.TextAlign
    }

    uTextColor() {
        this.element.style.color = this.data.TextColor
    }

    uTextDecorationLine() {
        this.element.style.textDecorationLine = this.data.TextDecorationLine
    }

    uTextDecorationColor() {
        this.element.style.textDecorationColor = this.data.TextDecorationColor
    }

    uTextDecorationStyle() {
        this.element.style.textDecorationStyle = this.data.TextDecorationStyle
    }

    uTextDecorationThickness() {
        this.element.style.textDecorationThickness =
            this.data.TextDecorationThickness
    }

    uTextUnderlineOffset() {
        this.element.style.textUnderlineOffset = this.data.TextUnderlineOffset
    }

    uTextTransform() {
        this.element.style.textTransform = this.data.TextTransform
    }

    uTextOverflow() {
        this.element.style.textOverflow = this.data.TextOverflow
    }

    uTextIndent() {
        this.element.style.textIndent = this.data.TextIndent
    }

    uLetterSpacing() {
        this.element.style.letterSpacing = this.data.LetterSpacing
    }

    uLineHeight() {
        this.element.style.lineHeight = this.data.LineHeight
    }

    uWordSpacing() {
        this.element.style.wordSpacing = this.data.WordSpacing
    }

    uWhiteSpace() {
        this.element.style.whiteSpace = this.data.WhiteSpace
    }

    uTextShadow() {
        this.element.style.textShadow = this.data.TextShadow
    }

    uVerticalAlign() {
        this.element.style.verticalAlign = this.data.VerticalAlign
    }

    uWordBreak() {
        this.element.style.wordBreak = this.data.WordBreak
    }

    uContent() {
        this.element.innerHTML = this.data.Content
    }
}
