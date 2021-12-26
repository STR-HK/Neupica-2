import { Widgets } from './Widgets.js';

export class NeuAppBar extends Widgets {
    constructor () {
        super()

        this.name = 'NeuAppBar'

        this.create()
        this.init()

        this.apply({
            Text: 'Page Title',
            BackgroundColor: '#C34351',
            Padding: '16px',
            Color: 'white',
            Size: '1.2rem',
            Shadow: this.materialShadow,
        })

    }

    create () {
        this.cover = this.createCover(this.name)
            this.element = this.createElement()
                this.title = this.createElement()
                this.element.appendChild(this.title)
            this.cover.appendChild(this.element)
    
    }

    init () {
        this.element.style.width = '100%'
    }

    setText (text : string) {
        this.title.innerHTML = text
    }
    setBackgroundColor (color : string) {
        this.element.style.backgroundColor = color
    }
    setPadding (padding : string) {
        this.element.style.padding = padding
    }
    setColor (color : string) {
        this.title.style.color = color
    }
    setSize (size : string) {
        this.title.style.fontSize = size
    }

    setShadow (shadow : string) {
        this.element.style.boxShadow = shadow
    }
}