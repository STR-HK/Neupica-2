import { NeuContainer } from "../../../Native/NeuContainer.js";
import { colorScheme } from "../../Components/Color.js";
import { Padding } from "../../../../../Tool/Padding.js";
import { Navigation } from "./Navigation.js";
export class TopAppBar extends Navigation {
    // declare data: {}
    HeadLine;
    Leading;
    Trailing;
    constructor(title) {
        super();
        this.name = "TopAppBar";
        this.geometry.Height = '64rem';
        this.data.BackgroundColor = colorScheme.surface;
        this.data.Padding = new Padding().VH('8rem', '4rem');
        this.Leading = new NeuContainer();
        this.Leading.data.TextColor = colorScheme.onSurface;
        this.addChild(this.Leading);
        this.HeadLine = new NeuContainer();
        this.addChild(this.HeadLine);
        this.HeadLine.data.TextColor = colorScheme.onSurface;
        this.HeadLine.data.Text = title;
        this.HeadLine.data.FontSize = '22rem';
        this.HeadLine.geometry.Width = '100%';
        this.HeadLine.data.Margin = new Padding().left('12rem');
        this.Trailing = new NeuContainer();
        this.Trailing.data.FlexDirection = 'row';
        this.Trailing.data.TextColor = colorScheme.onSurfaceVariant;
        this.addChild(this.Trailing);
    }
    setHeadline(text) {
        this.HeadLine.data.Text = text;
    }
    setLeading(leading) {
        this.Leading.clearChild();
        this.Leading.addChild(leading);
    }
    addTrailing(trailing) {
        this.Trailing.addChild(trailing);
    }
    addTrailings(trailing_list) {
        trailing_list.forEach(e => {
            this.Trailing.addChild(e);
        });
    }
}
//# sourceMappingURL=TopAppBars.js.map