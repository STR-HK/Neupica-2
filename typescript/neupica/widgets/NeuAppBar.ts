import { Widgets } from './Widgets.js';

export class NeuAppBar extends Widgets {
    constructor () {
        super()

        this.name = 'NeuAppBar'

        this.create()
        this.init()

        this.object = {
            Text: 'Page Title',
            BackgroundColor: '#C34351',
            Padding: '16px',
            Color: 'white',
            Size: '1.2rem',
            Shadow: this.materialShadow,

            Gap: '10px',

            Lead: null,
            LeadColor: null,

        }

        this.apply(this.object)

    }

    create () {
        this.cover = this.createCover(this.name)
            this.element = this.createElement()

                this.lead = this.createImg(true)
                this.title = this.createElement()
                this.element.appendChild(this.lead)
                this.element.appendChild(this.title)
            this.cover.appendChild(this.element)
    
    }

    init () {
        this.element.style.width = '100vw'
        this.element.style.display = 'flex'
    }

    setText (text : string) {
        this.object.Text = text
        this.title.innerHTML = text
    }
    setBackgroundColor (color : string) {
        this.object.BackgroundColor = color
        this.element.style.backgroundColor = color
    }
    setPadding (padding : string) {
        this.object.Padding = padding
        this.element.style.padding = padding
    }
    setColor (color : string) {
        this.object.Color = color
        this.title.style.color = color
    }
    setSize (size : string) {
        this.object.Size = size
        this.title.style.fontSize = size
    }

    setShadow (shadow : string) {
        this.object.Shadow = shadow
        this.element.style.boxShadow = shadow
    }

    setLead (lead : string) {
        this.object.Lead = lead
        this.lead.src = lead
        this.lead.style.display = ''
    }
    setLeadColor (color : string) {
        this.object.LeadColor = color
        this.editSvg(this.lead.src, function (element) {
            element.style.fill = color
            return element
        }).then((url) => {
            this.lead.src = url
            this.object.Lead = url
        })
    }

    setGap (gap : string) {
        this.object.Gap = gap
        this.element.style.gap = gap
    }
}