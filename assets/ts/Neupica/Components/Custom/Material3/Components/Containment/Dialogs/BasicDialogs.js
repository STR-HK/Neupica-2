import { Dialogs } from "./Dialogs.js";
import { colorScheme } from "../../../Styles/Color.js";
import { Level3 } from "../../../Styles/Elevation.js";
import { MaterialSymbolsOutlined } from "../../../Styles/Icons.js";
import { NeuContainer } from "../../../../../Native/NeuContainer.js";
import { Divider } from "../Divider.js";
import { TextButton } from "../../Actions/Common Buttons/TextButton.js";
import { Typography } from "../../../Styles/Typography.js";
// import { Padding } from "../../../../../../Tool/Padding.js"
export class BasicDialogs extends Dialogs {
    Scrim;
    Container;
    Icon;
    Headline;
    SupportingText;
    Divider;
    TextButton;
    ActionContainer;
    IconHeadlinePadding;
    TitleBodyPadding;
    BodyPadding;
    ActionPadding;
    CloseButton;
    constructor() {
        super();
        this.geometry.Width = '100%';
        this.geometry.Height = '100%';
        this.Scrim = new NeuContainer();
        // 50% -> 80(hexadecimal)
        this.Scrim.data.BackgroundColor = colorScheme.scrim + '80';
        this.Scrim.geometry.Width = '100%';
        this.Scrim.geometry.Height = '100%';
        this.Scrim.data.AlignItems = 'center';
        this.Scrim.data.JustifyContent = 'center';
        this.addChild(this.Scrim);
        this.Container = new NeuContainer();
        // this.Container.data.Opacity = '1'
        this.Container.data.BackgroundColor = colorScheme.surface;
        this.Container.data.Shadow = Level3;
        this.Container.data.BorderRadius = '28rem';
        this.Container.geometry.MinWidth = '280rem';
        this.Container.geometry.MaxWidth = '560rem';
        this.Container.data.Padding = '24rem';
        this.Container.data.AlignItems = 'center';
        this.Scrim.addChild(this.Container);
        this.Icon = new MaterialSymbolsOutlined('restart_alt');
        this.Icon.data.TextColor = colorScheme.secondary;
        this.Container.addChild(this.Icon);
        this.IconHeadlinePadding = new NeuContainer();
        this.IconHeadlinePadding.geometry.Height = '16rem';
        this.Container.addChild(this.IconHeadlinePadding);
        this.Headline = new NeuContainer();
        this.Headline.data.Text = 'Reset Settings?';
        this.Headline.data.TextColor = colorScheme.onSurface;
        this.Headline.data.FontSize = Typography.Size.HeadlineSmall;
        this.Container.addChild(this.Headline);
        this.TitleBodyPadding = new NeuContainer();
        this.TitleBodyPadding.geometry.Height = '16rem';
        this.Container.addChild(this.TitleBodyPadding);
        this.SupportingText = new NeuContainer();
        this.SupportingText.data.TextAlign = 'center';
        // this.SupportingText.data.Text = 'This will reset your app preferences back\n to their default settings. The following\n accounts will also be signed out.'
        this.SupportingText.data.TextColor = colorScheme.onSurfaceVariant;
        this.SupportingText.data.FontSize = Typography.Size.BodyMedium;
        this.Container.addChild(this.SupportingText);
        this.BodyPadding = new NeuContainer();
        this.BodyPadding.geometry.Height = '24rem';
        this.Container.addChild(this.BodyPadding);
        this.Divider = new Divider();
        this.Container.addChild(this.Divider);
        this.ActionPadding = new NeuContainer();
        this.ActionPadding.geometry.Height = '24rem';
        this.Container.addChild(this.ActionPadding);
        this.ActionContainer = new NeuContainer();
        this.ActionContainer.data.Gap = '8rem';
        this.ActionContainer.data.Symmetric = 'horizontal';
        this.ActionContainer.geometry.Width = '100%';
        this.ActionContainer.data.JustifyContent = 'flex-end';
        this.Container.addChild(this.ActionContainer);
        this.CloseButton = new TextButton();
        this.CloseButton.data.FontSize = Typography.Size.LabelLarge;
        this.CloseButton.data.TextColor = colorScheme.primary;
        this.CloseButton.data.Text = 'Cancel';
        this.CloseButton.watchEvent('click', function () {
            // console.error('TODO - MODAL')
            window.modal.removeModal(this);
        }.bind(this));
        this.ActionContainer.addChild(this.CloseButton);
        this.TextButton = new TextButton();
        this.TextButton.data.FontSize = Typography.Size.LabelLarge;
        this.TextButton.data.TextColor = colorScheme.primary;
        this.TextButton.data.Text = 'Cancel';
        this.ActionContainer.addChild(this.TextButton);
        this.TextButton.watchEvent('click', function () {
            // console.error('TODO - MODAL')
            window.modal.removeModal(this);
        }.bind(this));
    }
}
//# sourceMappingURL=BasicDialogs.js.map