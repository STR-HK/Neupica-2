import { Object } from "./Object.js"

export class Children extends Object {
    protected children: any[]
    appendTo = (where: HTMLElement): void => {
        this.cvt(this.children).forEach((element) => {
            where.appendChild(element)
        })
    }
    constructor() {
        super()

        this.children = []
    }

    addChild(child) {
        this.children.push(child)
        this.childrenUpdate()
    }

    clearChild() {
        this.children = []
    }

    setChild(index, child) {
        this.children[index] = child
        this.childrenUpdate()
    }

    cvt(children) {
        let element = []
        children.forEach((child) => {
            if (child.hasOwnProperty("cover")) {
                element.push(child.cover)
            } else {
                element.push(child.element)
            }
        })
        return element
    }


    childrenUpdate() {}
}
