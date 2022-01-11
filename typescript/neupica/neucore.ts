import { MDI } from '../Utils/MDI.js'
import { ColorsModule } from '../Utils/Colors.js'

export class NeuMainWindow {
    
    children: Array<object>
    window: HTMLElement
    cvt: (elem: object) => HTMLElement
    draw: (layout: object) => void

    [x: string]: any

    constructor () {

        this.children = []
        
        this.window = document.createElement('div')
        this.window.classList.add('Window')

        document.getElementById('App').appendChild(this.window)

        this.cvt = function (elem: object) {
            return elem['cover']
        }


        this.draw = function (layout) {
            this.children.push(layout)
            this.window.appendChild(layout.element)
        }

    }

    Colors = new ColorsModule()
    Icons = new MDI()
}