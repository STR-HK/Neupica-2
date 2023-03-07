import { NeuLayout } from "./NeuLayout.js";
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.js";
class NeuScaffoldHead extends NeuContainer {
    appBar;
    constructor() {
        super();
        this.appBar;
    }
    setAppBar(appBar) {
        if (this.appBar) {
            this.appBar.suicide();
        }
        this.appBar = appBar;
        this.addChild(this.appBar);
        // let parent = this.appBar.parent
        // this.appBar.suicide()
        // parent.addChild(newValue)
        // this.appBar = newValue
    }
}
class NeuScaffoldBody extends NeuContainer {
    constructor() {
        // @ts-ignore
        super();
    }
    setScreen() {
    }
}
export class NeuScaffold extends NeuLayout {
    head;
    body;
    foot;
    scaffoldings;
    constructor() {
        super();
        this.name = "NeuScaffold";
        // this.element = this.createLayout()
        // this.element.style.flexDirection = "column"
        this.data.FlexDirection = 'column';
        this.head = new NeuScaffoldHead('head');
        this.body = new NeuScaffoldBody();
        this.body.geometry.Height = '100%';
        this.body.geometry.Overflow = 'auto';
        this.body.watchEvent('scroll', function () {
            if (this.body.element.scrollTop == 0) {
                this.head.appBar.UnScrolling();
            }
            else {
                this.head.appBar.Scrolling();
            }
        }.bind(this));
        this.foot = new NeuContainer('foot');
        this.scaffoldings = [
            this.head,
            this.body,
            this.foot
        ];
        this.scaffoldings.forEach(e => {
            e.geometry.Width = '100%';
        });
        this.addChildren(this.scaffoldings);
    }
}
//# sourceMappingURL=NeuScaffold.js.map