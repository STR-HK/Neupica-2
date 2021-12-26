import { MDI } from '../utils/MDI.js'
import { ColorsModule } from '../utils/Colors.js'

export class NeuMainWindow {
    [x: string]: any
    constructor () {

        this.children = []
        
        this.window = document.createElement('div')
        this.window.classList.add('Window')
        // this.window.style.width = '100%'
        // this.window.style.height = '100%'

        document.getElementById('App').appendChild(this.window)

        this.cvt = function (elem) {
            return elem.cover
        }

        this.draw = function (layout) {
            this.children.push(layout)
            this.window.appendChild(layout.element)
            // console.log(this.window.innerHTML)
        }

    }

    Colors = new ColorsModule()
    Icons = new MDI()
}