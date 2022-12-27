import { NObject } from "./NObject.js"

export class Children extends NObject {
    children: any[]
    appendTo = (where: HTMLElement): void => {
        // console.log(this.cvt(this.children))
        this.cvt(this.children).forEach((element) => {
            // console.log(element)
            where.appendChild(element)
        })
    }
    constructor() {
        super()

        this.children = []
    }

    addChild(child) {
        this.children.push(child)
        this.childrenUpdate({
            type: 'add',
            target: child
        })
        this.childrenUpdated({
            type: 'add',
            target: child
        })
    }
    addSlientChild(child) {
        this.children.push(child)
        this.childrenUpdate({
            type: 'add',
            target: child
        })
    }

    removeChild(child) {
        let index = this.children.indexOf(child)
        if (index !== -1) {
            this.children.splice(index, 1)
        }
        this.childrenUpdate({
            type: 'remove',
            target: child
        })
        this.childrenUpdated({
            type: 'remove',
            target: child
        })
    }
    removeSlientChild(child) {
        let index = this.children.indexOf(child)
        if (index !== -1) {
            this.children.splice(index, 1)
        }
        this.childrenUpdate({
            type: 'remove',
            target: child
        })
    }

    removeChildren() {
        this.children.forEach(function(child ) {
            this.removeChild(child)
        }.bind(this))
        this.children = []
    }
    removeSlientChildren() {
        this.children.forEach(function(child ) {
            this.removeSlientChild(child)
        }.bind(this))
        this.children = []
    }

    addChildren(children: Array<any>) {
        children.forEach(e => {
            this.addChild(e)
        })
    }
    addSlientChildren(children: Array<any>) {
        children.forEach(e => {
            this.addSlientChild(e)
        })
    }

    clearChildren() {
        this.children = []
        this.childrenUpdate({
            type: 'clear'
        })
        this.childrenUpdated({
            type: 'clear'
        })
    }
    clearSlientChildren() {
        this.children = []
        this.childrenUpdate({
            type: 'clear'
        })
    }

    setChild(index, child) {
        this.children[index] = child
        this.childrenUpdate({
            type: 'set',
            target: child
        })
        this.childrenUpdated({
            type: 'set',
            target: child
        })
    }
    setSlientChild(index, child) {
        this.children[index] = child
        this.childrenUpdate({
            type: 'set',
            target: child
        })
    }

    cvt(children) {
        let element = []
        // console.log(children)
        children.forEach((child) => {
            if (child.hasOwnProperty("cover")) {
                element.push(child.cover)
            } else {
                element.push(child.element)
            }
        })
        // console.log(element)
        return element
    }

    childrenUpdated(...args) {

    }

    childrenUpdate(...args) {

    }
}
