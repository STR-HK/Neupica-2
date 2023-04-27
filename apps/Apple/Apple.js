import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js";
import { Box } from "../../assets/ts/Tool/Box.js";
import { NeuText } from "../../assets/ts/Neupica/Components/Native/MaterialText.js";
import anime from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Motion/anime.es.js";
export class HumanInterfaceDesign extends NeuContainer {
    constructor() {
        super();
    }
}
export class AppleSymbol extends HumanInterfaceDesign {
    constructor() {
        super();
        this.geometry.Width = '16px';
        this.geometry.Height = '26px';
        this.data.FontFamily = 'SF Pro Medium';
        this.data.Content = '􀆉';
        this.data.FontSize = '22px';
    }
}
export class AppleAction extends AppleSymbol {
    constructor() {
        super();
        this.geometry.Width = '44px';
        this.geometry.Height = '44px';
        this.data.FontFamily = 'SF Pro Regular';
        this.data.Content = '􀓔';
        this.data.JustifyContent = 'center';
        this.data.AlignItems = 'center';
    }
}
export class NavigationBar extends HumanInterfaceDesign {
    cascade;
    constructor() {
        super();
        this.geometry.Height = '74px';
        this.data.BackgroundColor = '#F9F9F9';
        // this.data.BackgroundColor = '#F9F9F9'
        this.data.Shadow = '0px 0.33px 20px 0px black';
        this.geometry.Padding = new Box().LTRB('8px', '27px', '6px', '3px');
        this.cascade = {
            Inner: new NeuContainer('Inner'),
            BackArea: new NeuContainer(),
            BackButton: new AppleSymbol(),
            ParentTitle: new NeuText(),
            Title: new NeuText(),
            ActionArea: new NeuContainer(),
            ActionIcon: new AppleAction(),
        };
        this.useCascade();
        this.cascade.Inner.geometry.Height = '44px';
        this.cascade.Inner.data.Symmetric = 'horizontal';
        this.cascade.Inner.data.JustifyContent = 'space-between';
        this.cascade.BackArea.data.Symmetric = 'horizontal';
        this.cascade.BackArea.data.AlignItems = 'center';
        this.cascade.BackArea.data.Gap = '4px';
        this.cascade.BackArea.data.TextColor = '#007AFF';
        this.cascade.BackArea.watchEvents(['mousedown', 'touchstart'], () => {
            anime({
                targets: this.cascade.BackArea.element,
                easing: 'linear',
                duration: 80,
                color: '#C1D8FB',
            });
        });
        this.cascade.BackArea.watchEvents(['mouseup', 'touchend'], () => {
            anime({
                targets: this.cascade.BackArea.element,
                easing: 'linear',
                duration: 40,
                color: '#007AFF',
            });
        });
        this.cascade.ActionArea.data.Symmetric = 'horizontal';
        this.cascade.ActionArea.data.AlignItems = 'center';
        this.cascade.ActionArea.data.TextColor = '#007AFF';
        this.cascade.ParentTitle.data.FontFamily = 'SF Pro Regular';
        this.cascade.ParentTitle.data.FontSize = '17px';
        this.cascade.ParentTitle.data.Content = 'Parent Title';
        this.cascade.Title.data.FontFamily = 'SF Pro Semibold';
        this.cascade.Title.data.FontSize = '17px';
        this.cascade.Title.data.Content = 'Title';
        this.cascade.Title.geometry.Position = 'absolute';
        // this.cascade.Title.geometry.Width = '100%'
        this.cascade.Title.geometry.Left = '50%';
        this.cascade.Title.geometry.Transform = 'translateX(-50%)';
        this.cascade.Title.geometry.Height = '100%';
        this.cascade.Title.data.JustifyContent = 'center';
        this.cascade.Title.data.TextAlign = 'center';
        // this.cascade.Title.geometry.ZIndex = '-1'
        this.addChildren([
            this.cascade.Inner.addChildren([
                this.cascade.BackArea.addChildren([
                    this.cascade.BackButton,
                    this.cascade.ParentTitle,
                ]),
                this.cascade.Title,
                this.cascade.ActionArea.addChildren([
                    this.cascade.ActionIcon
                ])
            ]),
        ]);
    }
}
//# sourceMappingURL=Apple.js.map