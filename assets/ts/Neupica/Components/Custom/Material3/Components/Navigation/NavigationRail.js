import { NeuContainer } from "../../../../Native/NeuContainer.js";
import { colorScheme } from "../../Styles/Color.js";
import { Typography } from "../../Styles/Typography.js";
import { MaterialSymbolsSharp } from "../../Styles/Icons.js";
export class NavigationRail extends NeuContainer {
    constructor() {
        super();
        this.data.BackgroundColor = colorScheme.surface;
        this.data.AlignItems = 'center';
        this.geometry.Width = '80rem';
        this.data.Gap = '12rem';
        // this.watchEvent('click', function() {
        //     this.InActivateChildren()
        // }.bind(this))
    }
    InActivateChildren() {
        this.children.forEach(child => {
            if (child instanceof NavigationRailItem) {
                child.InActive();
            }
        });
    }
}
export class NavigationRailItem extends NeuContainer {
    ActiveIndicator;
    LabelText;
    Icon;
    constructor() {
        super();
        this.State = false;
        // this.ActivateRipple()
        this.geometry.Width = '80rem';
        this.geometry.Height = '56rem';
        // this.
        this.data.AlignItems = 'center';
        this.data.JustifyContent = 'center';
        this.data.Gap = '4rem';
        this.ActiveIndicator = new NeuContainer();
        this.ActiveIndicator.geometry.Width = '56rem';
        this.ActiveIndicator.data.BorderRadius = '16rem';
        this.ActiveIndicator.data.AlignItems = 'center';
        this.LabelText = new NeuContainer();
        this.LabelText.Text.data.Content = 'Label Text';
        this.LabelText.data.TextColor = colorScheme.onSurface;
        this.LabelText.data.FontSize = Typography.Size.LabelMedium;
        this.Icon = new MaterialSymbolsSharp('ac_unit');
        // this.Icon.data.FontSize = '20rem'
        this.Icon.data.TextColor = colorScheme.onSurfaceVariant;
        this.ActiveIndicator.addChild(this.Icon);
        this.addChild(this.ActiveIndicator);
        this.addChild(this.LabelText);
        this.geometry.Cursor = 'pointer';
        // this.watchEvent('click', this.Clicked.bind(this))
    }
    Clicked() {
        this.Active();
        this.State = !this.State;
    }
    Active() {
        this.Icon.data.TextColor = colorScheme.onSecondaryContainer;
        this.ActiveIndicator.data.BackgroundColor = colorScheme.secondaryContainer;
    }
    InActive() {
        this.Icon.data.TextColor = colorScheme.onSurfaceVariant;
        this.ActiveIndicator.data.BackgroundColor = 'transparent';
    }
}
//# sourceMappingURL=NavigationRail.js.map