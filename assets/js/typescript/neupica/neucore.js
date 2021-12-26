import { MDI } from '../utils/MDI.js';
import { ColorsModule } from '../utils/Colors.js';
export class NeuMainWindow {
    constructor() {
        this.Colors = new ColorsModule();
        this.Icons = new MDI();
        this.children = [];
        this.window = document.createElement('div');
        this.window.classList.add('Window');
        document.getElementById('App').appendChild(this.window);
        this.cvt = function (elem) {
            return elem.cover;
        };
        this.draw = function (layout) {
            this.children.push(layout);
            this.window.appendChild(layout.element);
            // console.log(this.window.innerHTML)
        };
    }
}
//# sourceMappingURL=neucore.js.map