import { NeuContainer } from "../Native/NeuContainer.js"
import { NeuImage } from "../Native/NeuImage.js"
import { NeuText } from "../Native/NeuText.js"
import { Widget } from "./Widgets.js"

export class NeuButton extends Widget {
    constructor() {
        super()
        this.name = "NeuButton"

        this.watchEvent('mousedown', function(e) {
            let target = e.currentTarget
            while (true) {
                if (target.getBoundingClientRect().width === 0
                    || target.getBoundingClientRect().height === 0) {
                    target = target.children[0]
                } else {
                    break
                }
            }
            let data = target.getBoundingClientRect()
            this.mode = 'ripple'

            let dongle = document.createElement('dongle')
            dongle.style.position = 'absolute'
            dongle.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
            if (this.mode === 'round') {
                let size = data.height
                let delta = data.height - data.width
                if (data.width > data.height) {
                    size = data.width
                    delta = data.width - data.height
                }
                let half = delta / 2
                dongle.style.width = size + 'px'
                dongle.style.height = size + 'px'
                if (data.width > data.height) {
                    dongle.style.left = data.left + window.scrollX + 'px'
                    dongle.style.top = data.top + window.scrollY - half + 'px'

                } else {
                    dongle.style.left = data.left + window.scrollX - half + 'px'
                    dongle.style.top = data.top + window.scrollY + 'px'
                }
                dongle.style.borderRadius = '50%'
            } else if (this.mode === 'exact') {
                dongle.style.width = data.width + 'px'
                dongle.style.height = data.height + 'px'
                dongle.style.left = data.left + window.scrollX + 'px'
                dongle.style.top = data.top + window.scrollY  + 'px'
                // dongle.style.borderRadius = target.style.borderRadius + 'px'
            } else if (this.mode === 'ripple') {
                dongle.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
                console.log(target.style.borderRadius)

                let aniVar = 2
                let hideTime = 1
                let scale = 2
                dongle.style.borderRadius = parseFloat(target.style.borderRadius.replace('px', ''))
                    / scale ** 2 + 'px'
                dongle.style.width = data.width / scale ** 2 + 'px'
                dongle.style.height = data.height / scale ** 2 + 'px'
                dongle.style.left = window.scrollX + data.left + data.width / 2 - data.width / (scale ** 2) / 2 + 'px'
                dongle.style.top =  window.scrollY + data.top + data.height / 2 - data.height / (scale ** 2) / 2 + 'px'
                dongle.style.pointerEvents = 'none'
                dongle.style.transformOrigin = 'center center'
                dongle.style.transition = `transform ${0.1 * aniVar}s cubic-bezier(0.03,-0.01, 0, 0.89),
                                        opacity ${hideTime}s ease-out`;
                setTimeout(function () {
                    dongle.style.transform = `scale(${scale * aniVar})`;
                }, 1);
                setInterval(function() {
                    dongle.remove()
                }, hideTime * 1000)
            }
            document.body.appendChild(dongle)
        })

        // this.cover = this.createCover()
        this.cover.style.webkitTapHighlightColor = "transparent"
        this.cover.style.cursor = "pointer"
        this.cover.style.overflow = 'hidden'

        this.element = new NeuContainer()
        this.cover.addChild(this.element)

        this.target = this.element.element

        this.image = new NeuImage()
        this.element.addChild(this.image)

        this.text = new NeuText()
        this.text.data.UserSelect = "none"
        this.element.addChild(this.text)

        this.data = {
            Button: this.element.data,
            ButtonImage: this.image.data,
            ButtonText: this.text.data,
        }
        this.build()
    }

    childrenUpdate() {
        console.log("chill")
    }
}
