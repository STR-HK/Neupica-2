import { runApp } from "../neupica/neupica2.js";
import { NeuMainWindow } from "../neupica/neucore.js";
import { NeuButton } from "../neupica/neuwidgets.js";
import { NeuLayout } from "../neupica/neulayout.js";
function show(node) {
    document.body.appendChild(node);
}
// import { EEmm } from "../page/style.js"
// EEmm()
class Stora extends NeuMainWindow {
    constructor() {
        super();
        let layout = new NeuLayout();
        this.alpha = new NeuButton();
        this.alpha.setText("Download");
        this.alpha.setBackgroundColor(this.Colors.Transparent);
        this.alpha.setStrokeColor('#C34351');
        this.alpha.setStrokeWidth('2px');
        this.alpha.setColor('black');
        this.alpha.setIcon(this.Icons.file_download);
        this.alpha.setIconColor('white');
        this.alpha.setIconTop(true);
        // layout.addChild(this.alpha)
        // TEMP SIZEDBOX
        // layout.addChild({'cover': document.createElement('br')})
        let beta = new NeuButton();
        beta.setText('Press Me!');
        layout.addChild(beta);
        this.draw(layout);
    }
}
// WidgetStyler.NeuButton.BackgroundColor = '#C34351'
runApp({
    app: new Stora(),
    name: "Stora",
    debug: true
});
//# sourceMappingURL=main.js.map