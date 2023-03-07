import { Dialogs } from "./Dialogs.js";
import { colorScheme } from "../../../Styles/Color.js";
import { Level3 } from "../../../Styles/Elevation.js";
import { MaterialSymbolsOutlined } from "../../../Styles/Icons.js";
import { NeuContainer } from "../../../../../Native/NeuContainer.js";
import { Divider } from "../Divider.js";
import { TextButton } from "../../Actions/Common Buttons/TextButton.js";
import { Typography } from "../../../Styles/Typography.js";
import anime from "../../../Styles/Motion/anime.es.js";
import { Box } from "../../../../../../../Tool/Box.js";
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
        this.Scrim = new NeuContainer('Scrim');
        // 50% -> 80(hexadecimal)
        // this.Scrim.data.BackgroundColor = colorScheme.scrim + '80'
        this.Scrim.geometry.Width = '100%';
        this.Scrim.geometry.Height = '100%';
        this.Scrim.data.AlignItems = 'center';
        this.Scrim.data.JustifyContent = 'center';
        this.addChild(this.Scrim);
        this.Container = new NeuContainer('Container');
        this.Container.data.Opacity = '0';
        this.Container.geometry.Transform = 'scale(0.5)';
        this.Container.data.BackgroundColor = colorScheme.surface;
        this.Container.data.Shadow = Level3;
        this.Container.data.BorderRadius = '28rem';
        this.Container.geometry.MinWidth = '280rem';
        this.Container.geometry.MaxWidth = '280rem';
        // this.Container.geometry.MaxWidth = '560rem'
        this.Container.data.Padding = '24rem';
        this.Container.data.AlignItems = 'center';
        this.Scrim.addChild(this.Container);
        this.Container.geometry.Margin = new Box().bottom('80rem');
        this.Icon = new MaterialSymbolsOutlined('restart_alt');
        this.Icon.data.TextColor = colorScheme.secondary;
        this.Container.addChild(this.Icon);
        this.IconHeadlinePadding = new NeuContainer('IconHeadlinePadding');
        this.IconHeadlinePadding.geometry.Height = '16rem';
        this.Container.addChild(this.IconHeadlinePadding);
        this.Headline = new NeuContainer('Headline');
        this.Headline.data.Content = 'Reset Settings?';
        this.Headline.data.TextColor = colorScheme.onSurface;
        this.Headline.data.FontSize = Typography.Size.HeadlineSmall;
        this.Container.addChild(this.Headline);
        this.TitleBodyPadding = new NeuContainer('TitleBodyPadding');
        this.TitleBodyPadding.geometry.Height = '16rem';
        this.Container.addChild(this.TitleBodyPadding);
        this.SupportingText = new NeuContainer('SupportingText');
        this.SupportingText.data.TextAlign = 'center';
        // this.SupportingText.Text.data.Content = 'This will reset your app preferences back\n to their default settings. The following\n accounts will also be signed out.'
        this.SupportingText.data.TextColor = colorScheme.onSurfaceVariant;
        this.SupportingText.data.FontSize = Typography.Size.BodyMedium;
        this.Container.addChild(this.SupportingText);
        this.BodyPadding = new NeuContainer('BodyPadding');
        this.BodyPadding.geometry.Height = '24rem';
        this.Container.addChild(this.BodyPadding);
        this.Divider = new Divider();
        this.Container.addChild(this.Divider);
        this.ActionPadding = new NeuContainer('ActionPadding');
        this.ActionPadding.geometry.Height = '24rem';
        this.Container.addChild(this.ActionPadding);
        this.ActionContainer = new NeuContainer('ActionContainer');
        this.ActionContainer.data.Gap = '8rem';
        this.ActionContainer.data.Symmetric = 'horizontal';
        this.ActionContainer.geometry.Width = '100%';
        this.ActionContainer.data.JustifyContent = 'flex-end';
        this.Container.addChild(this.ActionContainer);
        this.CloseButton = new TextButton();
        this.CloseButton.data.FontSize = Typography.Size.LabelLarge;
        this.CloseButton.data.TextColor = colorScheme.primary;
        this.CloseButton.Text.data.Content = 'Cancel';
        this.CloseButton.watchEvent('click', function () {
            this.DisAppear(function () {
                window.modal.removeModal(this);
            }.bind(this));
        }.bind(this));
        this.ActionContainer.addChild(this.CloseButton);
        this.TextButton = new TextButton();
        this.TextButton.data.FontSize = Typography.Size.LabelLarge;
        this.TextButton.data.TextColor = colorScheme.primary;
        this.TextButton.Text.data.Content = 'Confirm';
        this.ActionContainer.addChild(this.TextButton);
        this.TextButton.watchEvent('click', function () {
            this.DisAppear(function () {
                window.modal.removeModal(this);
            }.bind(this));
            // setTimeout(function() {
            // }, 1000)
        }.bind(this));
    }
    Appear() {
        function hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }
        let scrimBgColor = hexToRgb(colorScheme.scrim);
        anime({
            targets: this.Scrim.element,
            backgroundColor: `rgba(${scrimBgColor?.r}, ${scrimBgColor?.g}, ${scrimBgColor?.b}, 0.5)`,
            // opacity: 0.5
        });
        anime({
            targets: this.Container.element,
            opacity: 1,
            scale: 1,
        });
    }
    DisAppear(callback) {
        anime({
            targets: this.Scrim.element,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            // changeComplete: function() {
            //     callback()
            // },
            update: function (anim) {
                // console.log(anim.progress)
                if (Math.round(anim.progress) >= 20) {
                    console.warn('kill');
                    callback();
                }
            }
            // opacity: 0.5
        });
        anime({
            targets: this.Container.element,
            opacity: 0,
            scale: 0,
        });
    }
}
//# sourceMappingURL=BasicDialogs.js.map