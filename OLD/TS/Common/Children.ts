export class Children {
    children: any[]

    constructor() {
        this.children = []

    }

    addChild(child: any) {
        this.children.push(child)
        this.childrenUpdate()
    }

    childrenUpdate() {

    }
}