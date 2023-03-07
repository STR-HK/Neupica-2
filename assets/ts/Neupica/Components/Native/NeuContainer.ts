import { Box } from "../../../Tool/Box.js"
import { Native } from "./Native.js"
import { theme } from "../Custom/Material3/Styles/Color"
// @ts-ignore
import anime from "../Custom/Material3/Styles/Motion/anime.es.js"

export interface NeuContainerData {
    BackgroundColor: string,
    Opacity: string,

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

    // Text: string,

    FontFamily: string,
    FontSize: string,
    FontStyle: string,
    FontWeight: string,
    FontFeatureSettings: string,

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
    WhiteSpace: string,

    TextShadow: string,
    VerticalAlign: string,
    Content: string,

    WordSpacing: string,
    WordBreak: string,
    WordWrap: string,

    Direction: string,
    UserSelect: string,
    ClipPath: string,
    TextRendering: string

}

export class NeuContainer extends Native {
    public data: NeuContainerData
    // public shadow: ShadowRoot

    constructor(_name: string) {
        super()
        this.name = "NeuContainer"

        if (_name) {
            // console.log(this)
            // let that = this
            //
            // const classes = {
            //
            // }
            // class DynamicClass {
            //     constructor(className) {
            //         return new classes[className]()
            //     }
            // }
            //
            // console.warn(Object.getPrototypeOf(new DynamicClass(_name)).constructor.name)
            //
            // Object.setPrototypeOf(this, parent)
            // // Object.defineProperty(that, 'name', {
            // //     value: _name,
            // // })
            // console.warn(Object.getPrototypeOf(that).constructor.name)
            this.name = _name
        }

        // this.cover = this.createCover()

        this.data = {
            BackgroundColor: "transparent",
            Opacity: "1",

            Border: "",
            BorderColor: "transparent",
            BorderWidth: "0",
            BorderRadius: "0",
            BorderStyle: "none",

            Shadow: "none",
            Gap: "0px",
            AspectRatio: "auto",
            FlexDirection: "row",
            FlexWrap: "nowrap",
            AlignContent: "stretch",
            JustifyContent: "flex-start",
            AlignItems: "stretch",
            Padding: new Box().all("0px"),
            Margin: new Box().all("0px"),
            Symmetric: "vertical",
            FlexGrow: "0",
            FlexShrink: "1",
            FlexBasis: "auto",

            // Text: "",

            FontFamily: "Pretendard",
            FontSize: "1rem",
            FontStyle: "normal",
            FontWeight: "normal",
            FontFeatureSettings: 'normal',

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
            WhiteSpace: "normal",

            TextShadow: "none",
            VerticalAlign: "baseline",
            Content: "none",

            WordSpacing: "0px",
            WordBreak: "normal",
            WordWrap: "normal",

            Direction: "ltr",
            UserSelect: "auto",

            ClipPath: 'none',
            TextRendering: 'auto',
        }
        this.build()



        this.element = this.createDiv()
        this.geometry.Display = "flex"
        // this.geometry.Width = "fit-content"
        this.data.Symmetric = "vertical"

        // this.addChild()



        // this.element

        // this.cover = this.element
        this.cover.addChild(this.element)


        // this.shadow = this.element.attachShadow({mode: "open"})


        // let elem = this.element

        setInterval(function() {
            // console.log(this)
            // console.log(elem)
            // elem.innerText = 'NEUTEXT IS DEPRECATED'
            // @ts-ignore
            if (window.inspect) {
                this.element.style.boxShadow = `#${Math.floor(Math.random() * 16777215).toString(16)} 0px 1px 1px, #${Math.floor(Math.random() * 16777215).toString(16)} 0px 0px 0px 1px`
                // this.element.style.border = `1px solid #${Math.floor(Math.random() * 16777215).toString(16)}`
            }
        }.bind(this), 500)


        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }

        // this.data.Opacity = '0'

        // setTimeout(function() {
        //     anime({
        //         targets: this.element,
        //         // easing: 'linear',
        //         opacity: 1
        //     })
        // }.bind(this), getRandomInt(500, 1000))
    }

    childrenUpdate(...args) {
        if (args[0]['type'] !=  'clear') {
            let realDom = Array.from(this.element.children)
            // let virtualDom = this.children.map(function(element) {
            //     console.log(element)
            //     if (element.displayed) {
            //         return element.cover
            //     }
            //     // return element.cover
            // }).filter(element => {
            //     return element !== undefined
            // })
            let virtualDom = this.children.map(function(element) {
                return element.cover
            }).filter(element => {
                return element !== undefined
            })

            // let classDom = this.children
            //
            // console.log('before patching')
            // console.log({
            //     realDom: realDom,
            //     realDomLength: realDom.length,
            //     virtualDom: virtualDom,
            //     virtualDomLength: virtualDom.length
            // })

            for (let i = 0; i < Math.max(realDom.length, virtualDom.length); i++) {
                if ( virtualDom.length > realDom.length ) {
                    // console.log({
                    //     type: 'add',
                    //     element: virtualDom[i]
                    // })
                    if (virtualDom[i] != realDom[i]) {
                        this.element.insertBefore(virtualDom[i], this.element.children[i])
                        // classDom[i].hide()
                        // setTimeout(function() {
                        //     classDom[i].show()
                        // }, 100)
                    }
                }
                if ( realDom.length > virtualDom.length ) {
                    if (virtualDom[i] != realDom[i]) {
                        // console.log({
                        //     reason: `Because realDom is ${realDom.length} and virtualDom is ${virtualDom.length}, remove operation is started!`,
                        //     // virtualDomI: virtualDom[i],
                        //     realDomI: realDom[i],
                        //     type: 'remove',
                        //     elementChildrenI: this.element.children[i]
                        // })
                        this.element.removeChild(realDom[i])

                        // try {
                        //     this.element.removeChild(realDom[i])
                        // } catch (e) {
                        //     console.error({
                        //         'error': e,
                        //         'children': Array.from(this.element.children),
                        //         'index': i,
                        //         'predictedTarget': realDom[i],
                        //     })
                        // }
                    }
                }
            }
        } else {
            Array.from(this.element.children).forEach(e => {
                this.element.removeChild(e)
            })
        }

        // if (arguments[0]['rt'] == true) {
        //     console.warn('rt')
        // }
        // if (this.element.children[i] == undefined) {
        //     let rt = arguments[0]
        //     rt['rt'] = true
        //     this.childrenUpdate(rt)
        //     console.warn(rt)
        // }

        // console.log({
        //     realDom: realDom,
        //     realDomLength: realDom.length,
        //     virtualDom: virtualDom,
        //     virtualDomLength: virtualDom.length
        // })
        //
        // console.log('patching finished')



        // Array.from(this.element.children).forEach((element) => {
        //     // console.log('remove')
        //     this.element.removeChild(element)
        // })
        // this.children.forEach((element) => {
        //     // console.log('add')
        //     this.element.addChild(element)
        // })
    }

    BackgroundColor() {
        this.element.style.backgroundColor = this.data.BackgroundColor
    }
    Opacity() {
        this.element.style.opacity = this.data.Opacity
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

    // Text() {
    //     if (this.element.innerText != this.data.Text) {
    //         this.element.innerText = this.data.Text
    //     }
    //     // this.element.innerHTML = "NeuContainer Widget is know depreciated! Use NeuText instead."
    //     // this.element.innerHTML = "Hello World"
    // }

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
    FontFeatureSettings() {
        this.element.style.fontFeatureSettings = this.data.FontFeatureSettings
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
    WhiteSpace() {
        this.element.style.whiteSpace = this.data.WhiteSpace
    }

    TextShadow() {
        this.element.style.textShadow = this.data.TextShadow
    }
    VerticalAlign() {
        this.element.style.verticalAlign = this.data.VerticalAlign
    }
    Content() {
        this.element.innerText = this.data.Content
        // this.element.style.content = this.data.Content
    }

    WordSpacing() {
        this.element.style.wordSpacing = this.data.WordSpacing
    }
    WordBreak() {
        this.element.style.wordBreak = this.data.WordBreak
    }
    WordWrap() {
        this.element.style.wordWrap = this.data.WordWrap
    }

    Direction() {
        this.element.style.direction = this.data.Direction
    }
    UserSelect() {
        this.element.style.userSelect = this.data.UserSelect
    }

    ClipPath() {
        this.element.style.clipPath = this.data.ClipPath
    }
    TextRendering() {
        this.element.style.textRendering = this.data.TextRendering
    }
}
