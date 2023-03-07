import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.js";
export class NeuCalc extends NeuContainer {
    constructor() {
        super("NeuCalc");
        this.name = "NeuCalc";
        this.data.FlexDirection = 'column';
    }
    addChild(child) {
        super.addChild(child);
        child.geometry.Position = 'absolute';
    }
}
// Object.assign(NeuLayout.prototype, Layout)
//# sourceMappingURL=NeuCalc.js.map