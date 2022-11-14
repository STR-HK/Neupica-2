import { Children } from "../Common/Children.js";
import { createLayout } from "../Neupica/Components/Create/Create.js";
export class Layout extends Children {
    name;
    element;
    constructor() {
        super();
    }
    createLayout() {
        return createLayout(this.name);
    }
    childrenUpdate() {
        this.appendTo(this.element);
    }
}
//# sourceMappingURL=Layout.js.map