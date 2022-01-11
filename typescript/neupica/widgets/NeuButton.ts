import { Ripple } from '../NeuWidgets.js';
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
        
        this.apply(this.object) // 스타일 적용
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

        new Ripple(this.cover)
    }

    setText (text : string) {
        this.object.Text = text
        this.text.innerText = text
        if ( text != '' ) {
            this.text.style.display = ''
        } else {
            this.text.style.display = 'none'
        }
    }
    setColor (color : string) {
        this.object.Color = color
        this.element.style.color = color
    }
    setSize (size : string) {
        // this.text.style.height = size
        this.object.Size = size
        this.text.style.fontSize = size
    }
    setTextPadding (padding : string) {
        this.object.TextPadding = padding
        this.text.style.padding = padding
    }
    
    setPadding (padding : string) {
        this.object.Padding = padding
        this.element.style.padding = padding
    }
    setBackgroundColor (color : string) {
        this.object.BackgroundColor = color
        this.element.style.backgroundColor = color
    }
    setStrokeStyle (style : string) {
        this.object.StrokeStyle = style
        this.element.style.borderStyle = style
    }
    setStrokeColor (color : string) {
        this.object.StrokeColor = color
        this.element.style.borderColor = color
    }
    setStrokeWidth (width : string) {
        this.object.StrokeWidth = width
        this.element.style.borderWidth = width
    }
    setStrokeRadius (radius : string) {
        this.object.StrokeRadius = radius
        this.element.style.borderRadius = radius
    }
    setRippleColor (color : string) {
        this.object.RippleColor = color
    }

    setIcon (icon : string) {
        this.object.Icon = icon
        this.icon.src = icon
        if ( icon != '' ) {
            this.icon.style.display = ''
        } else {
            this.icon.style.display = 'none'
        }
    }
    setIconColor (color : string) {
        this.object.IconColor = color
        this.editSvg(this.icon.src, function (element) {
            element.style.fill = color
            return element
        }).then((url) => {
            this.icon.src = url
            this.object.Icon = url
        })
    }
    setIconSize (size : string) {
        this.object.IconSize = size
        this.icon.style.width = size
    }
    setIconTop (top : boolean) {
        this.object.IconTop = top
        this.element.style.flexDirection = top ? 'column' : 'row'
    }
    setIconPadding (padding : string) {
        this.object.IconPadding = padding
        this.icon.style.padding = padding
    }
    setIconGap (gap : string) {
        this.object.IconGap = gap
        this.element.style.gap = gap
    }

    setShadow (shadow : string) {
        this.object.Shadow = shadow
        this.element.style.boxShadow = shadow
    }
}