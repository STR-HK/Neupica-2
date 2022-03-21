import { Native } from "./Native.js";

export class NeuText extends Native {
    constructor() {
        super()
        this.name = 'NeuText'

        this.obj = {
            'Text': 'Null',

            'FontFamily': 'Pretendard',
            'FontSize': '12px',
            'FontStyle': 'normal',
            'FontWeight': 'normal',

            'TextAlign': 'left',
            'TextColor': '#000000',

            'TextDecoration': 'none',
            'TextDecorationColor': '#000000',
            'TextDecorationStyle': 'solid',
            'TextDecorationThickness': '1px',

            'TextUnderlineOffset': 'auto',
            'TextTransform': 'none',
            'TextOverflow': 'clip',

            'TextIndent': '0px',
            'LetterSpacing': '0em',
            'LineHeight': '1',
            'WordSpacing': '0px',
            'WhiteSpace': 'normal',

            'TextShadow': 'none',
            'VerticalAlign': 'baseline',
            'WordBreak': 'normal',
            'Content': '',
        }

        Object.entries(this.obj).forEach(([key, value]) => {
            Object.defineProperty(this, key, {
                get: () => {
                    // console.log(this.obj[key])
                    return this.obj[key]
                },
                set: (newValue) => {
                    // console.log(this, `${key} : ${newValue}`)
                    this.obj[key] = newValue
                    this.update(key)
                }
            })
        })

        this.create()
        this.init()

        // this.apply(this.obj)
    }

    create() {
        this.cover = this.createCover()
        this.element = this.createDiv()
        this.cover.appendChild(this.element)
    }

    init() {
        this.element.style.width = 'fit-content'

    }



    uText() {
        this.element.innerText = this.Text
    }

    uFontSize() {
        this.element.style.fontSize = this.FontSize
    }
}

