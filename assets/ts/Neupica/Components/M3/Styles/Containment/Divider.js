import { NeuContainer } from "../../../Native/NeuContainer.js";
import { colorScheme } from "../../Components/Color.js";
import { Padding } from "../../../../../Tool/Padding.js";
export class Divider extends NeuContainer {
    constructor() {
        super();
        this.name = 'Divider';
        this.geometry.Width = '100%';
        this.geometry.Height = '1rem';
        this.geometry.MinHeight = '1rem';
        this.data.BackgroundColor = colorScheme.outlineVariant;
        this.data.Margin = new Padding().vertical('4rem');
    }
}
//# sourceMappingURL=Divider.js.map