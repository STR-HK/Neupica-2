import { runApp } from "../js/neupica2.js";
import { NeuMainWindow } from "../js/neucore.js";
import { NeuButton } from "../js/neuwidgets.js";
function show(node) {
    document.body.appendChild(node);
}
class EP extends NeuMainWindow {
    constructor() {
        super();
        this.alpha = new NeuButton();
        this.alpha.setText("Alpha");
        this.alpha.setStrokeRadius(0);
        let a = 0;
        this.alpha.cover.addEventListener("click", function () {
            thisClass(this).setText('Alpha : ' + a++);
        });
        // this.alpha.setText(':hover')
        this.beta = new NeuButton();
        this.beta.setText("Beta");
        this.beta.setStrokeRadius(3);
        let b = 0;
        this.beta.cover.addEventListener("click", function () {
            thisClass(this).setText('Beta -> ' + b++);
        });
        show(this.alpha.cover);
        show(this.beta.cover);
    }
}
runApp('EP', new EP());
//# sourceMappingURL=main.js.map