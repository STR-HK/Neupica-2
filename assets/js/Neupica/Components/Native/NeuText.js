import { Native } from "./Native.js"

let FontStyle = {
    Normal: "normal",
    Italic: "italic",
    Oblique: "oblique",
}

let FontWeight = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Normal: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
}

let FontSize = {
    XXSmall: "xx-small",
    XSmall: "x-small",
    Small: "small",
    Medium: "medium",
    Large: "large",
    XLarge: "x-large",
    XXLarge: "xx-large",

    Smaller: "smaller",
    Larger: "larger",
}

let FontAlign = {
    Start: "start",
    End: "end",
    Left: "left",
    Right: "right",
    Center: "center",
    Justify: "justify",
}

let TextDecorationLine = {
    None: "none",
    Underline: "underline",
    Overline: "overline",
    LineThrough: "line-through",
    Blink: "blink",
}

let TextDecorationStyle = {
    Solid: "solid",
    Double: "double",
    Dotted: "dotted",
    Dashed: "dashed",
    Wavy: "wavy",
}

let TextTransform = {
    None: "none",
    Capitalize: "capitalize",
    Uppercase: "uppercase",
    Lowercase: "lowercase",
}

let TextOverflow = {
    None: "none",
    Ellipsis: "ellipsis",
    Clip: "clip",
}

let VerticalAlign = {
    Top: "top",
    Middle: "middle",
    Bottom: "bottom",
    Baseline: "baseline",

    Sub: "sub",
    Super: "super",
    TextTop: "text-top",
    TextBottom: "text-bottom",

    Length: "length",
}

let WordBreak = {
    Normal: "normal",
    BreakAll: "break-all",
    KeepAll: "keep-all",
    BreakWord: "break-word",
}

export class NeuText extends Native {
    constructor() {
        super()
        this.name = "NeuText"

        this.obj = {
            Text: "Null",

            FontFamily: "Pretendard",
            FontSize: FontSize.Medium,
            FontStyle: FontStyle.Normal,
            FontWeight: FontWeight.Normal,

            TextAlign: FontAlign.Left,
            TextColor: "#000000",

            TextDecorationLine: TextDecorationLine.Blink,
            TextDecorationColor: "#000000",
            TextDecorationStyle: TextDecorationStyle.Solid,
            TextDecorationThickness: "1px",

            TextUnderlineOffset: "auto",
            TextTransform: TextTransform.None,
            TextOverflow: TextOverflow.Clip,

            TextIndent: "0px",
            LetterSpacing: "0em",
            LineHeight: "1",
            WordSpacing: "0px",
            WhiteSpace: "normal",

            TextShadow: "none",
            VerticalAlign: VerticalAlign.Baseline,
            WordBreak: WordBreak.Normal,
            Content: "",
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

        this.apply(this.obj)
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
        this.element.innerText = this.Text
    }

    uFontSize() {
        this.element.style.fontSize = this.FontSize
    }

    uFontFamily() {
        this.element.style.fontFamily = this.FontFamily
    }

    uFontStyle() {
        this.element.style.fontStyle = this.FontStyle
    }

    uFontWeight() {
        this.element.style.fontWeight = this.FontWeight
    }

    uTextAlign() {
        this.element.style.textAlign = this.TextAlign
    }

    uTextColor() {
        this.element.style.color = this.TextColor
    }

    uTextDecorationLine() {
        this.element.style.textDecorationLine = this.TextDecorationLine
    }

    uTextDecorationColor() {
        this.element.style.textDecorationColor = this.TextDecorationColor
    }

    uTextDecorationStyle() {
        this.element.style.textDecorationStyle = this.TextDecorationStyle
    }

    uTextDecorationThickness() {
        this.element.style.textDecorationThickness =
            this.TextDecorationThickness
    }

    uTextUnderlineOffset() {
        this.element.style.textUnderlineOffset = this.TextUnderlineOffset
    }

    uTextTransform() {
        this.element.style.textTransform = this.TextTransform
    }

    uTextOverflow() {
        this.element.style.textOverflow = this.TextOverflow
    }

    uTextIndent() {
        this.element.style.textIndent = this.TextIndent
    }

    uLetterSpacing() {
        this.element.style.letterSpacing = this.LetterSpacing
    }

    uLineHeight() {
        this.element.style.lineHeight = this.LineHeight
    }

    uWordSpacing() {
        this.element.style.wordSpacing = this.WordSpacing
    }

    uWhiteSpace() {
        this.element.style.whiteSpace = this.WhiteSpace
    }

    uTextShadow() {
        this.element.style.textShadow = this.TextShadow
    }

    uVerticalAlign() {
        this.element.style.verticalAlign = this.VerticalAlign
    }

    uWordBreak() {
        this.element.style.wordBreak = this.WordBreak
    }

    uContent() {
        this.element.innerHTML = this.Content
    }
}
