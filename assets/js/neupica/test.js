import { runApp } from './neupica2.js';
import { NeuMainWindow } from './neucore.js';
import { NeuButton } from './neuwidgets.js';
class Stora extends NeuMainWindow {
    constructor() {
        super();
        this.btn = new NeuButton();
        // this.btn.object.Text = 'Click to Search about SHI3DO'
        // this.btn.object.Color = '#386A20'
        // this.btn.object.Size = '20px'
        // this.btn.object.BackgroundColor = '#F3F6EA'
        // this.btn.object.IconColor = 'red'
        // this.btn.object.IconSize = '30px'
        // this.btn.object.TextPadding = '0'
        // this.btn.object.IconPadding = '0'
        // this.btn.object.Padding = '12px'
        document.body.appendChild(this.btn.cvt());
    }
}
runApp('Stora', new Stora());
//# sourceMappingURL=test.js.map