import { Fade, Ripple } from '../NeuWidgets.js';
import { Widgets } from './Widgets.js';

export class NeuButton extends Widgets {
   

    constructor () {
        super()
        this.name = 'NeuButton'

        this.create()
        this.init()

        this.object = {
            Text : '',
            Color : 'black',
            Size : '1rem',
            TextPadding : '0px',

            BackgroundColor : 'lightgray',
            StrokeColor : 'gray',
            StrokeWidth : '0px',
            StrokeStyle : 'solid',
            StrokeRadius : '3px',
            RippleColor : 'yellow', // 16% 투명도
            
            Icon : null,
            IconColor : null,
            IconSize : '19px',
            IconTop : false,
            IconPadding : '0px',
            Padding : '8px',
            IconGap : '8px',

            Shadow : null,
        }

        Object.entries(this.object).forEach(([key, value]) => {
            Object.defineProperty(this, key, {
                get: () => {
                    console.log(this.object[key])
                    return this.object[key]
                },
                set: (newValue) => {
                    console.log(this, `${key} : ${newValue}`)
                    this.object[key] = newValue
                    this.update(key)
                }
            })
        })

        
        this.apply(this.object) // 스타일 적용
    }

    update (key) {
        this['update' + key]()
    }

    create () {
        this.cover = this.createCover(this.name)
            this.element = this.createElement()
                this.icon = this.createImg(true)
                this.text = this.createElement()
                this.element.appendChild(this.icon)
                this.element.appendChild(this.text)
            this.cover.appendChild(this.element)
    }

    init () {
        this.element.style.userSelect = 'none'
        this.element.style.webkitTapHighlightColor = 'transparent'
        this.element.style.display = 'flex'
        this.element.style.flexDirection = 'row'
        this.element.style.justifyContent = 'center'
        this.element.style.alignItems = 'center'
        this.element.style.cursor = 'pointer'
        this.element.style.overflow = 'hidden'
        this.element.style.position = 'relative'

        this.text.style.display = 'flex'
        this.text.style.alignItems = 'center'

        // new Ripple(this.cover)
        new Fade(this.cover)
    }

    updateText () {
        this.text.innerText = this.object.Text

        if ( this.object.Text != '' ) { this.text.style.display = '' } 
        else { this.text.style.display = 'none' }
    }
    updateColor () {
        this.element.style.color = this.object.Color
    }
    updateSize () {
        this.text.style.fontSize = this.object.Size
    }
    updateTextPadding () {
        this.text.style.padding = this.object.TextPadding
    }
    
    updatePadding () {
        this.element.style.padding = this.object.Padding
    }
    updateBackgroundColor () {
        this.element.style.backgroundColor = this.object.BackgroundColor
    }
    updateStrokeStyle () {
        this.element.style.borderStyle = this.object.StrokeStyle
    }
    updateStrokeColor () {
        this.element.style.borderColor = this.object.StrokeColor
    }
    updateStrokeWidth () {
        this.element.style.borderWidth = this.object.StrokeWidth
    }
    updateStrokeRadius () {
        this.element.style.borderRadius = this.object.StrokeRadius
    }
    updateRippleColor () {
        this.object.RippleColor = this.object.RippleColor
    }

    updateIcon () {
        this.icon.src = this.object.Icon

        if ( this.object.Icon != '' ) { this.icon.style.display = '' }
        else { this.icon.style.display = 'none' }
    }
    updateIconColor () {
        let color = this.object.IconColor
        this.editSvg(this.object.Icon, function (element) {
            element.style.fill = color
            return element
        }).then((url) => {
            this.object.Icon = url
            this.icon.src = url
        })
    }
    updateIconSize () {
        this.icon.style.width = this.object.IconSize
    }
    updateIconTop () {
        this.element.style.flexDirection = this.object.IconTop ? 'column' : 'row'
    }
    updateIconPadding () {
        this.icon.style.padding = this.object.IconPadding
    }
    updateIconGap () {
        this.element.style.gap = this.object.IconGap
    }

    updateShadow () {
        this.element.style.boxShadow = this.object.Shadow
    }
}