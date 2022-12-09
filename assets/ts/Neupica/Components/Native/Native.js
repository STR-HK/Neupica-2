import { Found } from "../Found/Found.js";
import ripplet from "../M3/Components/Ripplet.js";
export class Native extends Found {
    parentOfElement;
    indexFromParent;
    anchorFromParent;
    displayed;
    RippleNames;
    RippleFunctions;
    modal;
    constructor() {
        super();
        this.cover = this.createCover();
        this.cover.style.webkitTapHighlightColor = "transparent";
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
        this.displayed = true;
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
            this.displayed = false;
            // this.childrenUpdate()
            // console.log('hide')
            this.parentOfElement = this.cover.parentElement;
            this.indexFromParent = Array.from(this.parentOfElement.children).indexOf(this.cover);
            this.anchorFromParent = this.parentOfElement.children[this.indexFromParent - 1];
            this.parentOfElement.removeChild(this.cover);
        }
        else {
            // console.log('already hidden')
        }
    }
    Show() {
        if (this.displayed != true) {
            this.displayed = true;
            // this.childrenUpdate()
            if (this.anchorFromParent.nextSibling != undefined) {
                this.parentOfElement.insertBefore(this.cover, this.anchorFromParent.nextSibling);
            }
            else {
                this.parentOfElement.appendChild(this.cover);
            }
        }
        else {
            // console.log('already showed')
        }
    }
    Interactive() {
        this.cover.style.pointerEvents = 'auto';
    }
    DeInteractive() {
        this.cover.style.pointerEvents = 'none';
    }
    ActivateRipple(...args) {
        ripplet.defaultOptions.opacity = 0.15;
        ripplet.defaultOptions.spreadingTimingFunction = 'ease';
        ripplet.defaultOptions.spreadingDuration = '0.2s';
        ripplet.defaultOptions.spreadingDelay = '0s';
        ripplet.defaultOptions.clearing = false;
        ripplet.defaultOptions.clearingDelay = ripplet.defaultOptions.spreadingDuration;
        ripplet.defaultOptions.clearingDuration = ripplet.defaultOptions.spreadingDuration;
        ripplet.defaultOptions.centered = false;
        ripplet.defaultOptions.appendTo = 'parent';
        // ripplet.defaultOptions.spreadingDuration = '0s'
        this.RippleNames = [
            'pointerdown',
            'pointerup',
            'pointerleave'
        ];
        this.RippleFunctions = [
            function (e) {
                if (this.getBoundingParent().style.gap != '') {
                    if (args[0] != undefined) {
                        ripplet(e, { appendTo: 'target', ...args[0] });
                    }
                    else {
                        ripplet(e, { appendTo: 'target' });
                    }
                }
                else {
                    if (args[0] != undefined) {
                        ripplet(e, { ...args[0] });
                    }
                    else {
                        ripplet(e);
                    }
                }
            }.bind(this),
            function () {
                ripplet.clear(this);
            }.bind(this.element),
            function () {
                ripplet.clear(this);
            }.bind(this.element)
        ];
        for (let i = 0; i < this.RippleNames.length; i++) {
            this.element.addEventListener(this.RippleNames[i], this.RippleFunctions[i]);
        }
    }
    DeActivateRipple() {
        for (let i = 0; i < this.RippleNames.length; i++) {
            this.element.removeEventListener(this.RippleNames[i], this.RippleFunctions[i]);
        }
    }
}
//# sourceMappingURL=Native.js.map