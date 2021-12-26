import { Widgets } from './Widgets.js';

export class NeuInput extends Widgets {
    constructor () { 
        super()

        this.name = 'NeuInput'

        this.create()
        this.init()
        
        this.apply({
            Size: '1rem',

            Padding: '10px',
            StrokeColor : 'gray',
            StrokeWidth : '1px',
            StrokeStyle : 'solid',
            StrokeRadius : '3px',

            Color: '#C34',

            CursorColor: '#C34351',
        }) // 스타일 적용
    }

    create () {
        this.cover = this.createCover(this.name)
            this.element = this.createElement()
                this.input = document.createElement('input')
                this.element.appendChild(this.input)
                // this.cursor = this.createElement()
                // this.element.appendChild(this.cursor)
        
            this.cover.appendChild(this.element)
    }

    init () {
        this.element.style.position = 'relative'
        // this.cursor.style.position = 'absolute'

        this.input.style.outline = 'none'
        this.input.style.border = 'none'
        this.input.style.padding = '0'
        this.input.style.width = 'fit-content'

    }

    setSize (size : string) {
        this.input.style.height = size
        this.input.style.fontSize = size
    }
    setPadding (padding : string) {
        this.element.style.padding = padding
    }

    setStrokeColor (color : string) {
        this.element.style.borderColor = color
    }
    setStrokeWidth (width : string) {
        this.element.style.borderWidth = width
    }
    setStrokeStyle (style : string) {
        this.element.style.borderStyle = style
    }
    setStrokeRadius (radius : string) {
        this.element.style.borderRadius = radius
    }

    setCursorColor (color : string) {
        this.input.style.caretColor = color
    }
    setColor (color : string) {
        this.input.style.color = color
    }
}