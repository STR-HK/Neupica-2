import { FloatingActionButtons } from "./FloatingActionButtons.js";
import { NeuContainer } from "../../../../../Native/NeuContainer.js";
import { colorScheme } from "../../../Styles/Color.js";
import { Typography } from "../../../Styles/Typography.js";
import { Padding } from "../../../../../../../Tool/Padding.js";
export class ExtendedFAB extends FloatingActionButtons {
    LabelText;
    constructor() {
        super();
        this.Container.data.Symmetric = 'horizontal';
        this.Container.geometry.MinWidth = '80rem';
        this.Container.geometry.Width = 'auto';
        this.Container.data.Padding = new Padding().horizontal('16rem');
        this.Container.data.Gap = '12rem';
        this.LabelText = new NeuContainer();
        this.LabelText.data.Text = 'Laberu';
        this.LabelText.data.TextColor = colorScheme.onPrimaryContainer;
        this.LabelText.data.FontSize = Typography.Size.LabelLarge;
        this.Container.addChild(this.LabelText);
    }
}
//# sourceMappingURL=ExtendedFAB.js.map