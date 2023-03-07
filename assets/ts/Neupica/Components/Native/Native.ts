import { Found } from "../Found/Found.js"
import ripplet from "../Custom/Material3/Styles/Ripplet.js"
// import { Modal_dep } from "../../../Common/Modal.js"
import { UDivElement } from "../Create/Create.js"
import anime from "../Custom/Material3/Styles/Motion/anime.es.js"


export class Native extends Found {
    displayed: boolean
    RippleNames: any[]
    RippleFunctions: any[]
    // modal: UDivElement
    constructor() {
        super()

        this.cover = this.createCover()
        // For Highlight-Tap Browsers
        // @ts-ignore
        this.cover.style.webkitTapHighlightColor = "transparent"

        this.RippleNames = []
        this.RippleFunctions = []

        this.displayed = true

        // this.Bounce()
    }

    relate(callback: Function) {
        new ResizeObserver(<ResizeObserverCallback>function(){
            console.log('ResizeObserver')
            callback()
        }).observe(this.getBoundElement())
        // new IntersectionObserver(<IntersectionObserverCallback>function() {
        //     callback()
        //     console.log('IntersectionObserver')
        // }).observe(this.getBoundElement())
        // new MutationObserver(<MutationCallback>function(e) {
        //     // callback()
        //     console.log(e)
        //     console.log('MutationObserver')
        // }).observe(this.getBoundElement(), {
        //     attributes: true,
        //     childList: true,
        //     subtree: true
        // })
        window.addEventListener('resize', function() {
            console.log('windowResize')
            callback()
        })
    }

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

    Bounce () {
        this.watchEvent('pointerdown', function() {
            anime({
                targets: this.element,
                scale: 0.9,
            })
        }.bind(this))

        this.watchEvent('pointerup', function() {
            anime({
                targets: this.element,
                scale: 1,
            })
        }.bind(this))

        this.watchEvent('pointerup', function() {
            anime({
                targets: this.element,
                scale: 1,
            })
        }.bind(this))

        this.watchEvent('pointerout', function() {
            anime({
                targets: this.element,
                scale: 1,
            })
        }.bind(this))
    }

    Interactive () {
        this.cover.style.pointerEvents = 'auto'
    }

    DeInteractive() {
        this.cover.style.pointerEvents = 'none'
    }

    ActivateRipple(...args: object[]) {
        ripplet.defaultOptions.opacity = 0.15
        ripplet.defaultOptions.spreadingTimingFunction = 'ease'
        ripplet.defaultOptions.spreadingDuration = '0.2s'
        ripplet.defaultOptions.spreadingDelay = '0s'
        ripplet.defaultOptions.clearing = false
        // ripplet.defaultOptions.clearingDelay = ripplet.defaultOptions.spreadingDuration
        ripplet.defaultOptions.clearingDelay = ripplet.defaultOptions.spreadingDuration
        ripplet.defaultOptions.clearingDuration = ripplet.defaultOptions.spreadingDuration
        ripplet.defaultOptions.centered = false
        ripplet.defaultOptions.appendTo = 'parent'
        // ripplet.defaultOptions.spreadingDuration = '0s'




        this.RippleNames = [
            'pointerdown',
            'pointerup',
            'pointerleave',
            'pointerout'
        ]

        this.RippleFunctions = [
            function(e) {
                ripplet(arguments[0], args[0])
            }.bind(this),

            function() {
                // @ts-ignore
                ripplet.clear(this)
            }.bind(this.element),

            function() {
                // @ts-ignore
                ripplet.clear(this)
            }.bind(this.element),

            function() {
                // @ts-ignore
                ripplet.clear(this)
            }.bind(this.element),

        ]

        // if (arguments[0]) {
        //     console.log('i am activating ripple and i wanna activate from:', arguments[0])
        //     let activateTarget = arguments[0]
        //     this.RippleFunctions[0] = function() {
        //         ripplet({
        //             currentTarget: activateTarget
        //         })
        //     }.bind(this)
        //     console.log(this.RippleFunctions)
        // }

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
