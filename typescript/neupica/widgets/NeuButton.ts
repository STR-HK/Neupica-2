import { Ripple } from '../neuwidgets.js';
import { Widgets } from './Widgets.js';

export class NeuButton extends Widgets {
    constructor () {
        super()
        this.name = 'NeuButton'

        this.create()
        this.init()
        
        this.apply({
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
        }) // 스타일 적용
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
        this.element.style.alignItems = 'center'
        this.element.style.cursor = 'pointer'
        this.element.style.overflow = 'hidden'
        this.element.style.position = 'relative'

        this.text.style.display = 'flex'
        this.text.style.alignItems = 'center'

        new Ripple(this.cover)
    }

    setText (text : string) {
        this.text.innerText = text
    }
    setColor (color : string) {
        this.element.style.color = color
    }
    setSize (size : string) {
        this.text.style.height = size
        this.text.style.fontSize = size
    }
    setTextPadding (padding : string) {
        this.text.style.padding = padding
    }
    
    setPadding (padding : string) {
        this.element.style.padding = padding
    }
    setBackgroundColor (color : string) {
        this.element.style.backgroundColor = color
    }
    setStrokeStyle (style : string) {
        this.element.style.borderStyle = style
    }
    setStrokeColor (color : string) {
        this.element.style.borderColor = color
    }
    setStrokeWidth (width : string) {
        this.element.style.borderWidth = width
    }
    setStrokeRadius (radius : string) {
        this.element.style.borderRadius = radius
    }
    setRippleColor (color : string) {
    }

    setIcon (icon : string) {
        this.icon.src = icon
        this.icon.style.display = ''
    }
    setIconColor (color : string) {
        this.editSvg(this.icon.src, function (element) {
            element.style.fill = color
            return element
        }).then((url) => {
            this.icon.src = url
        })
    }
    setIconSize (size : string) {
        this.icon.style.width = size
    }
    setIconTop (top : boolean) {
        this.element.style.flexDirection = top ? 'column' : 'row'
    }
    setIconPadding (padding : string) {
        this.icon.style.padding = padding
    }
    setIconGap (gap : string) {
        this.element.style.gap = gap
    }

    setShadow (shadow : string) {
        this.element.style.boxShadow = shadow
    }
}