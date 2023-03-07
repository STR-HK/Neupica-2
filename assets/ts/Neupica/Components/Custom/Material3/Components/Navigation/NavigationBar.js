import { NeuContainer } from "../../../../Native/NeuContainer.js";
import { Box } from "../../../../../../Tool/Box.js";
import { Navigation } from "./Navigation.js";
import { colorScheme } from "../../Styles/Color.js";
import { MaterialSymbolsOutlined } from "../../Styles/Icons.js";
export class NavigationBar extends Navigation {
    constructor() {
        super();
        this.name = 'NavigationBar';
        this.geometry.Height = '80rem';
        this.data.BackgroundColor = colorScheme.surface;
        this.data.Padding = new Box().TBLR('12rem', '16rem');
        this.watchEvent('click', function () {
            // @ts-ignore
            this.children.forEach(child => {
                if (child instanceof NavigationBarItem) {
                    child.InActive();
                }
            });
        }.bind(this));
    }
}
export class NavigationBarItem extends NeuContainer {
    State;
    cascade;
    constructor() {
        super('NavigationBarItem');
        this.State = false;
        this.data.Gap = '8rem';
        this.data.AlignItems = 'center';
        this.data.JustifyContent = 'center';
        this.data.BackgroundColor = colorScheme.primary + '14';
        this.data.TextColor = colorScheme.secondary;
        this.geometry.Cursor = 'pointer';
        this.geometry.Height = '80rem';
        this.geometry.MinWidth = '20%';
        this.geometry.Width = '100%';
        this.cascade = {
            Icon: new MaterialSymbolsOutlined('light_mode'),
            ActiveIndicator: new NeuContainer(),
            Label: new NeuContainer()
        };
        this.useCascade();
        this.cascade.ActiveIndicator = new NeuContainer();
        this.cascade.ActiveIndicator.data.BorderRadius = '16rem';
        this.cascade.ActiveIndicator.geometry.Width = '64rem';
        this.cascade.ActiveIndicator.geometry.Height = '32rem';
        this.cascade.ActiveIndicator.data.AlignItems = 'center';
        this.cascade.ActiveIndicator.data.JustifyContent = 'center';
        this.cascade.ActiveIndicator.geometry.Overflow = 'hidden';
        this.ActivateRipple({
            appendTo: this.cascade.ActiveIndicator.element,
            spreadingDuration: '0.5s',
            clearingDelay: '0.1s',
            clearingDuration: '0.5s'
        });
        // this.ActivateRipple('body')
        this.cascade.Icon.data.FontSize = '24rem';
        this.cascade.Icon.data.TextColor = colorScheme.onSurfaceVariant;
        this.cascade.ActiveIndicator.addChild(this.cascade.Icon);
        this.cascade.Label = new NeuContainer();
        this.cascade.Label.data.Content = 'Label';
        this.cascade.Label.data.FontSize = '12rem';
        this.cascade.Label.data.TextColor = colorScheme.onSurfaceVariant;
        this.addChild(this.cascade.ActiveIndicator);
        this.addChild(this.cascade.Label);
        this.watchEvent('click', this.Clicked.bind(this));
    }
    click() {
        this.cover.click();
    }
    Clicked() {
        this.Active();
        this.State = !this.State;
    }
    Active() {
        this.cascade.Icon.data.TextColor = colorScheme.onSecondaryContainer;
        this.cascade.Label.data.TextColor = colorScheme.onSurface;
        // anime({
        //     targets: this.cascade.ActiveIndicator.element,
        //     backgroundColor: colorScheme.secondaryContainer,
        // })
        this.cascade.ActiveIndicator.data.BackgroundColor = colorScheme.secondaryContainer;
    }
    InActive() {
        this.cascade.Icon.data.TextColor = colorScheme.onSurfaceVariant;
        this.cascade.Label.data.TextColor = colorScheme.onSurfaceVariant;
        // anime({
        //     targets: this.cascade.ActiveIndicator.element,
        //     backgroundColor: 'rgba(0, 0, 0, 0)'
        // })
        this.cascade.ActiveIndicator.data.BackgroundColor = 'transparent';
    }
}
//# sourceMappingURL=NavigationBar.js.map