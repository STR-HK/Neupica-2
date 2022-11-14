import { Padding } from "../../../Tool/Padding.js"
import { Native } from "./Native.js"

export class NeuContainer extends Native {
    public data: {
        BackgroundColor: string,
        Border: string,
        BorderColor: string,
        BorderWidth: string,
        BorderRadius: string,
        BorderStyle: string,
        Shadow: string,
        Gap: string,
        AspectRatio: string,
        FlexDirection: string,
        FlexWrap: string,
        AlignContent: string,
        JustifyContent: string,
        AlignItems: string,
        Padding: string,
        Margin: string,
        Symmetric: string,
        FlexGrow: string,
        FlexShrink: string,
        FlexBasis: string,

        Text: string,

        FontFamily: string,
        FontSize: string,
        FontStyle: string,
        FontWeight: string,

        TextAlign: string,
        TextColor: string,

        TextDecorationLine: string,
        TextDecorationColor: string,
        TextDecorationStyle: string,
        TextDecorationThickness: string,
        TextUnderlineOffset: string,

        TextTransform: string,
        TextOverflow: string,

        TextIndent: string,
        LetterSpacing: string,
        LineHeight: string,
        WordSpacing: string,
        WhiteSpace: string,

        TextShadow: string,
        VerticalAlign: string,
        WordBreak: string,
        Content: string,

        Direction: string,
        UserSelect: string,
    }
    constructor() {
        super()
        this.name = "NeuContainer"

        this.data = {
            BackgroundColor: "transparent",
            Border: "",
            BorderColor: "transparent",
            BorderWidth: "0px",
            BorderRadius: "0px",
            BorderStyle: "none",
            Shadow: "none",
            Gap: "0px",
            AspectRatio: "auto",
            FlexDirection: "row",
            FlexWrap: "nowrap",
            AlignContent: "stretch",
            JustifyContent: "flex-start",
            AlignItems: "stretch",
            Padding: new Padding().all("0px"),
            Margin: new Padding().all("0px"),
            Symmetric: "vertical",
            FlexGrow: "0",
            FlexShrink: "1",
            FlexBasis: "auto",

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
        this.build()

        this.element = this.createDiv()
        this.geometry.Display = "flex"
        this.geometry.Width = "fit-content"
        this.data.Symmetric = "vertical"

        this.element

        // this.cover = this.element
        this.cover.addChild(this.element)
    }

    childrenUpdate() {
        this.children.forEach((element) => {
            // console.log(element)
            this.element.addChild(element)
        })
    }

    BackgroundColor() {
        this.element.style.backgroundColor = this.data.BackgroundColor
    }
    Border() {
        this.element.style.border = this.data.Border
    }
    BorderColor() {
        this.element.style.borderColor = this.data.BorderColor
    }
    BorderWidth() {
        this.element.style.borderWidth = this.data.BorderWidth
    }
    BorderRadius() {
        this.element.style.borderRadius = this.data.BorderRadius
    }
    BorderStyle() {
        this.element.style.borderStyle = this.data.BorderStyle
    }

    Shadow() {
        this.element.style.boxShadow = this.data.Shadow
    }
    Gap() {
        this.element.style.gap = this.data.Gap
    }
    AspectRatio() {
        this.element.style.aspectRatio = this.data.AspectRatio
    }
    FlexDirection() {
        this.element.style.flexDirection = this.data.FlexDirection
    }
    FlexWrap() {
        this.element.style.flexWrap = this.data.FlexWrap
    }
    AlignContent() {
        this.element.style.alignContent = this.data.AlignContent
    }
    JustifyContent() {
        this.element.style.justifyContent = this.data.JustifyContent
    }
    AlignItems() {
        this.element.style.alignItems = this.data.AlignItems
    }
    Padding() {
        this.element.style.padding = this.data.Padding
    }
    Margin() {
        this.element.style.margin = this.data.Margin
    }
    Symmetric() {
        if (this.data.Symmetric === "vertical") {
            this.element.style.flexDirection = "column"
        } else {
            this.element.style.flexDirection = "row"
        }
    }
    FlexGrow() {
        this.element.style.flexGrow = this.data.FlexGrow
    }
    FlexShrink() {
        this.element.style.flexShrink = this.data.FlexShrink
    }
    FlexBasis() {
        this.element.style.flexBasis = this.data.FlexBasis
    }

    Text() {
        // this.element.inne
        // this.element.innerHTML = "NeuText Widget is know depreciated! Use NeuContainer instead."
        this.element.innerHTML = this.data.Text
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
