import { runApp } from "../neupica/neupica2.js";
import { NeuMainWindow } from "../neupica/neucore.js";
import { NeuButton } from "../neupica/neuwidgets.js";
import { NeuLayout } from "../neupica/neulayout.js";
import { MDI } from '../MDI/MDI.js';
function show(node) {
    document.body.appendChild(node);
}
class Stora extends NeuMainWindow {
    constructor() {
        super();
        let Icons = new MDI();
        let layout = new NeuLayout();
        this.Icons = Icons;
        let alpha = new NeuButton();
        alpha.setText("Download");
        alpha.setBackgroundColor('transparent');
        alpha.setStrokeColor('#C34351');
        alpha.setStrokeWidth('2px');
        alpha.setColor('black');
        alpha.setIcon(Icons.file_download);
        alpha.setIconColor('white');
        alpha.setIconTop(true);
        layout.addChild(alpha);
        this.draw(layout);
    }
}
runApp({
    app: new Stora(),
    name: "Stora",
    debug: true
});
//# sourceMappingURL=main.js.map