import { Found } from "../Found/Found.js"
import ripplet from "../Custom/Material3/Styles/Ripplet.js"
import { Modal_dep } from "../../../Common/Modal.js"
import { UDivElement } from "../Create/Create.js"


export class Native extends Found {
    parentOfElement: HTMLElement
    indexFromParent: number
    anchorFromParent: Element
    displayed: boolean
    RippleNames: any[]
    RippleFunctions: any[]
    modal: UDivElement
    constructor() {
        super()

        this.cover = this.createCover()
        this.cover.style.webkitTapHighlightColor = "transparent"

        // this.modal = this.createModal()
        // this.modal.style.zIndex = '9999'
        // this.modal.style.pointerEvents = 'none'
        // this.modal.style.width = '100%'
        // this.modal.style.height = '100%'
        // this.modal.style.flexDirection = 'column'
        // this.modal.style.position = 'absolute'
        // this.modal.style.justifyContent = 'center'
        // this.modal.style.alignItems = 'center'
        // this.cover.addChild(this.modal)

        // this.getBoundElement().addEventListener('resize', function() {
        //     console.warn('res9ze')
        // })

        // console.log('you can use modal now!')

        this.displayed = true

    }

    // addModal(element) {
    //     this.addChild(element)
    //     this.element.addChild(element)
    // }
    // removeModal(element) {
    //
    // }

    Hide() {
        if (this.displayed != false) {
            this.displayed = false

            // this.childrenUpdate()

            // console.log('hide')

            // this.parentOfElement = this.cover.parentElement
            // this.indexFromParent = Array.from(this.parentOfElement.children).indexOf(this.cover)
            // this.anchorFromParent = this.parentOfElement.children[this.indexFromParent - 1]
            //
            // this.parentOfElement.removeChild(this.cover)

            this.geometry.Display = 'none'
        } else {
            // console.log('already hidden')
        }
    }

    Show() {
        if (this.displayed != true) {
            this.displayed = true

            // this.childrenUpdate()

            // if (this.anchorFromParent.nextSibling != undefined) {
            //     this.parentOfElement.insertBefore(this.cover, this.anchorFromParent.nextSibling);
            // } else {
            //     this.parentOfElement.appendChild(this.cover);
            // }
            this.geometry.Display = 'flex'
        } else {
            // console.log('already showed')
        }
    }

    Interactive () {
        this.cover.style.pointerEvents = 'auto'
    }

    DeInteractive() {
        this.cover.style.pointerEvents = 'none'
    }

    ActivateRipple(...args) {
        ripplet.defaultOptions.opacity = 0.15
        ripplet.defaultOptions.spreadingTimingFunction = 'ease'
        ripplet.defaultOptions.spreadingDuration = '0.2s'
        ripplet.defaultOptions.spreadingDelay = '0s'
        ripplet.defaultOptions.clearing = false
        ripplet.defaultOptions.clearingDelay = ripplet.defaultOptions.spreadingDuration
        ripplet.defaultOptions.clearingDuration = ripplet.defaultOptions.spreadingDuration
        ripplet.defaultOptions.centered = false
        ripplet.defaultOptions.appendTo = 'parent'
        // ripplet.defaultOptions.spreadingDuration = '0s'


        this.RippleNames = [
            'pointerdown',
            'pointerup',
            'pointerleave'
        ]

        this.RippleFunctions = [
            function(e) {
                ripplet(e)
            }.bind(this),

            function() {
                // @ts-ignore
                ripplet.clear(this)
            }.bind(this.element),

            function() {
                // @ts-ignore
                ripplet.clear(this)
            }.bind(this.element)
        ]

        for (let i = 0; i < this.RippleNames.length; i++) {
            this.element.addEventListener(this.RippleNames[i], this.RippleFunctions[i])
        }
    }

    DeActivateRipple() {
        try {
            for (let i = 0; i < this.RippleNames.length; i++) {
                this.element.removeEventListener(this.RippleNames[i], this.RippleFunctions[i])
            }
        } catch (e) {
            if (this.RippleNames != undefined) {
                console.error(e)
            }
        }
    }
}
