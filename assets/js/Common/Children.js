export class Children {
    constructor() {
        this.children = []
    }

    addChild(child) {
        this.children.push(child)
        this.childrenUpdate()
    }

    setChild(index, child) {
        this.children[index] = child
        this.childrenUpdate()
    }

    cvt(children) {
        let element = []
        children.forEach((child) => {
            element.push(child.cover)
        })
        return element
    }

    appendTo(where) {
        this.cvt(this.children).forEach((element) => {
            where.appendChild(element)
        })
    }

    childrenUpdate() {}
}
