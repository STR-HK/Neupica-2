import { NeuLayout } from "./NeuLayout.js";
export class NeuColumn extends NeuLayout {
    constructor() {
        super();
        this.name = "NeuColumn";
        // this.element = this.createLayout()
        this.data.FlexDirection = 'column';
        // this.element.style.flexDirection = "column"
    }
}
//# sourceMappingURL=NeuColumn.js.map