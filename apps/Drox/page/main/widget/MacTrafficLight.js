import { NeuContainer } from "../../../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { Box } from "../../../../../assets/ts/Tool/Box.js"
import { NeuImage } from "../../../../../assets/ts/Neupica/Components/Native/NeuImage.js"

export class MacTrafficLight extends NeuContainer {
    constructor() {
        super()
        this.geometry.Padding = new Box().all('3rem')
        this.Icon = new NeuImage()
        this.Icon.geometry.Height = '13rem'
        this.Icon.geometry.Width = '13rem'
        this.addChild(this.Icon)
        this.element.style['-webkit-app-region'] = 'no-drag'

        this.bHovering = false
        this.bClicking = false

        this.watchEvent('mouseenter', () => {
            console.log({
                clicking: this.bClicking,
                hovering: this.bHovering,
            })
            if (!this.bHovering || !this.bClicking) {
                this.bHovering = true
                this.Hover()
            }
        })
        this.watchEvent('mouseleave', () => {
            console.log({
                clicking: this.bClicking,
                hovering: this.bHovering,
            })
            this.bHovering = false
            this.UnHover()
        })

        this.watchEvents(['mousedown', 'touchstart'], () => {
            console.log({
                clicking: this.bClicking,
                hovering: this.bHovering,
            })
            if (!this.bClicking) {
                this.bClicking = true
                this.Click()
            }
        })
        this.watchEvents(['mouseup', 'touchend'], () => {
            console.log({
                clicking: this.bClicking,
                hovering: this.bHovering,
            })
            if (this.bClicking) {
                this.bClicking = false
                this.UnClick()
                this.Hover()
            }
        })
    }

    Hover() {
        this.Icon.data.Src = this.Icon.data.Src.replace('Button.svg', 'Button_Hover.svg')
    }
    UnHover() {
        this.Icon.data.Src = this.Icon.data.Src.replace('Button_Hover.svg', 'Button.svg')
        this.Icon.data.Src = this.Icon.data.Src.replace('_Active', '')
    }
    Click() {
        this.Icon.data.Src = this.Icon.data.Src.replace('Button.svg', 'Button_Active.svg')
        this.Icon.data.Src = this.Icon.data.Src.replace('Hover', 'Active')
    }
    UnClick() {
        this.Icon.data.Src = this.Icon.data.Src.replace('Button_Active.svg', 'Button.svg')
        this.Icon.data.Src = this.Icon.data.Src.replace('_Active', '')
    }
}