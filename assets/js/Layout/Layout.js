import { Children } from "../Common/Children.js"
import { createLayout } from "../Neupica/Components/Create/Create.js"

export class Layout extends Children {
    constructor() {
        super()

        this.createLayout = function () {
            return createLayout(this.name)
        }
    }
}
