import { NeuContainer } from "../Native/NeuContainer.ts"
import { NeuImage } from "../Native/NeuImage.ts"
import { NeuText } from "../Native/NeuText.js"
import { Widget } from "./Widgets.js"
import { Box } from "../../../Tool/Box.js"

export class NeuButton extends Widget {
    constructor() {
        super()
        this.name = "NeuButton"

        this.cover.style.webkitTapHighlightColor = "transparent"
        this.cover.style.cursor = "pointer"
        this.cover.style.overflow = 'hidden'
        // this.geometry.Overflow =

        this.element = new NeuContainer()
        this.Button = this.element
        this.cover.addChild(this.element)

        this.target = this.element.element

        this.image = new NeuImage()
        this.ButtonImage = this.image
        this.element.addChild(this.image)

        this.toogleImageUse = function() {
            console.log(this.image.geometry.Display)
            if (this.image.geometry.Display === 'flex') {
                this.image.geometry.Display = 'none'
            } else {
                this.image.geometry.Display = 'flex'
            }
        }

        this.toogleImageUse()

        this.text = new NeuContainer()
        this.ButtonText = this.text
        this.text.data.UserSelect = "none"
        this.element.addChild(this.text)

        this.data = {
            Button: this.element.data,
            ButtonImage: this.image.data,
            ButtonText: this.text.data,
            // Disabled: [
            //     false,
            //     function() {
            //         console.log('NeuButton Disabling Not Implemented')
            //     }
            // ]
        }
        this.build()

        this.image.getBoundElement().addEventListener('contextmenu', function(e) {
            e.preventDefault()
        })

    }

    childrenUpdate() {
        console.log("chill")
    }
}
