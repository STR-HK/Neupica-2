import { NeuContainer } from "../../../../Native/NeuContainer.js";
import { Padding } from "../../../../../../Tool/Padding.js";
import { MaterialSymbolsOutlined } from "../../../Components/Icons.js";
import { colorScheme } from "../../../Components/Color.js";
import { Level3 } from "../../../Components/Elevation.js";
import { Typography } from "../../../Components/Typography.js";
export class FloatingActionButtons extends NeuContainer {
    Icon;
    Container;
    constructor() {
        super();
        this.Container = new NeuContainer();
        this.Icon = new MaterialSymbolsOutlined();
        this.Icon.data.TextColor = colorScheme.onPrimaryContainer;
        this.Icon.data.FontSize = Typography.Size.HeadlineSmall;
        this.Icon.data.Text = 'edit';
        this.Container.geometry.Width = '56rem';
        this.Container.geometry.Height = '56rem';
        this.Container.geometry.Margin = new Padding().RBLT('16rem', '16rem');
        this.Container.data.JustifyContent = 'center';
        this.Container.data.AlignItems = 'center';
        this.Container.data.BorderRadius = '16rem';
        this.Container.data.BackgroundColor = colorScheme.primaryContainer;
        this.Container.data.Shadow = Level3;
        this.Container.addChild(this.Icon);
        this.Container.ActivateRipple();
        this.Container.geometry.Cursor = 'pointer';
        this.addChild(this.Container);
    }
}
//# sourceMappingURL=FloatingActionButtons.js.map