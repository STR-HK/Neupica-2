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
    }

    addChildren(children: Array<any>) {
        children.forEach(e => {
            this.addChild(e)
        })
    }

    clearChild() {
        this.children = []
        this.childrenUpdate({
            type: 'clear'
        })

    }

    setChild(index, child) {
        this.children[index] = child
        this.childrenUpdate(child)
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


    childrenUpdate(...args) {

    }
}
