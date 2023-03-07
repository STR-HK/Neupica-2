import { NeuContainer } from "../../../../Native/NeuContainer.js";
import { blendHEXColors, colorScheme } from "../../Styles/Color.js";
import { Box } from "../../../../../../Tool/Box.js";
import { Navigation } from "./Navigation.js";
export class TopAppBar extends Navigation {
    // declare data: {}
    HeadLine;
    Leading;
    Trailing;
    bIsScrolling;
    constructor() {
        super();
        this.name = "TopAppBar";
        this.bIsScrolling = false;
        this.geometry.Height = '64rem';
        this.data.BackgroundColor = colorScheme.surface;
        this.data.Padding = new Box().VH('8rem', '4rem');
        this.Leading = new NeuContainer();
        this.Leading.data.TextColor = colorScheme.onSurface;
        this.addChild(this.Leading);
        this.HeadLine = new NeuContainer();
        this.addChild(this.HeadLine);
        this.HeadLine.data.TextColor = colorScheme.onSurface;
        // this.HeadLine.Text.data.Content = title
        this.HeadLine.data.FontSize = '22rem';
        this.HeadLine.geometry.Width = '100%';
        this.HeadLine.data.Margin = new Box().left('12rem');
        this.Trailing = new NeuContainer();
        this.Trailing.data.FlexDirection = 'row';
        this.Trailing.data.TextColor = colorScheme.onSurfaceVariant;
        this.addChild(this.Trailing);
    }
    Scrolling() {
        if (!this.bIsScrolling) {
            this.bIsScrolling = true;
            this.data.BackgroundColor = blendHEXColors([
                colorScheme.surface,
                colorScheme.primary + '14'
            ]);
        }
    }
    UnScrolling() {
        if (this.bIsScrolling) {
            this.bIsScrolling = false;
            this.data.BackgroundColor = colorScheme.surface;
        }
    }
    setHeadline(text) {
        this.HeadLine.data.Content = text;
    }
    setLeading(leading) {
        this.Leading.clearChildren();
        this.Leading.addChild(leading);
        return this;
    }
    addTrailing(trailing) {
        this.Trailing.addChild(trailing);
    }
    addTrailings(trailing_list) {
        trailing_list.forEach(e => {
            this.Trailing.addChild(e);
        });
        return this;
    }
}
//# sourceMappingURL=TopAppBars.js.map