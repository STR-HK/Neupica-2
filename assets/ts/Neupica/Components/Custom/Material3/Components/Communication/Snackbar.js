import { NeuContainer } from "../../../../Native/NeuContainer.js";
import { Box } from "../../../../../../Tool/Box.js";
import { IconButton } from "../Actions/Icon Buttons/IconButton.js";
import { MaterialSymbolsOutlined } from "../../Styles/Icons.js";
import { colorScheme } from "../../Styles/Color.js";
import { TextButton } from "../Actions/Common Buttons/TextButton.js";
export class Snackbar extends NeuContainer {
    Container;
    SupportingText;
    Action;
    Icon;
    constructor(target) {
        super();
        this.Position(target);
        this.Container = new NeuContainer();
        // this.Container.geometry.Position = 'absolute'
        this.Container.data.BackgroundColor = colorScheme.inverseSurface;
        this.Container.data.Padding = new Box().LTRB('16rem', '0rem', '8rem', '0rem');
        this.Container.data.Symmetric = 'horizontal';
        this.Container.data.AlignItems = 'center';
        this.Container.data.BorderRadius = new Box().all('4rem');
        this.addChild(this.Container);
        this.SupportingText = new NeuContainer();
        this.SupportingText.data.Content = 'Single-line snackbar';
        this.SupportingText.data.TextColor = colorScheme.inverseOnSurface;
        this.SupportingText.data.FontSize = '14rem';
        this.Container.addChild(this.SupportingText);
        this.Action = new TextButton();
        this.Action.data.TextColor = colorScheme.inversePrimary;
        this.Action.data.FontSize = '14rem';
        this.Action.data.Content = 'Action';
        this.Action.Interactive();
        this.Container.addChild(this.Action);
        this.Icon = new IconButton(new MaterialSymbolsOutlined('close'));
        this.Icon.data.TextColor = colorScheme.inverseOnSurface;
        this.Icon.data.FontSize = '24rem';
        this.Icon.Interactive();
        this.Container.addChild(this.Icon);
    }
    reRender() {
        super.reRender();
        this.Container.data.BackgroundColor = colorScheme.inverseSurface;
        this.SupportingText.data.TextColor = colorScheme.inverseOnSurface;
        this.Action.data.TextColor = colorScheme.inversePrimary;
        this.Icon.data.TextColor = colorScheme.inverseOnSurface;
    }
    Position(target) {
        let Rect = target.getBoundElement().getBoundingClientRect();
        this.geometry.Position = 'absolute';
        this.geometry.Width = Rect.width + 'px';
        this.geometry.Height = Rect.height + 'px';
        this.data.Padding = new Box().all('16rem');
        this.data.JustifyContent = 'flex-end';
        this.data.AlignItems = 'center';
        this.DeInteractive();
    }
}
//# sourceMappingURL=Snackbar.js.map