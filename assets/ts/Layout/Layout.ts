import { Children } from "../Common/Children.js"
import { createLayout } from "../Neupica/Components/Create/Create.js"

export class Layout extends Children {
    public name: String
    public element: HTMLElement
    constructor() {
        super()
    }

    createLayout () {
        return createLayout(this.name)
    }

    childrenUpdate() {
        this.appendTo(this.element)
    }
}
