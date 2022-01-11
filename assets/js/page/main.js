import { runApp } from "../neupica/Neupica2.js";
import { NeuMainWindow } from "../neupica/NeuCore.js";
import { NeuAppBar, NeuButton, NeuInput } from "../neupica/NeuWidgets.js";
import { NeuLayout } from "../neupica/NeuLayout.js";
class Stora extends NeuMainWindow {
    constructor() {
        super();
        this.layout = new NeuLayout();
        this.topAppBar = new NeuAppBar();
        this.topAppBar.setText('Stora Web Application');
        this.topAppBar.setLead(this.Icons.ac_unit);
        this.topAppBar.setLeadColor('white');
        this.layout.addChild(this.topAppBar);
        this.defaultButton = new NeuButton();
        this.defaultButton.setText('Default Button');
        this.layout.addChild(this.defaultButton);
        this.alpha = new NeuButton();
        this.alpha.setText("Download");
        this.alpha.setBackgroundColor(this.Colors.Transparent);
        this.alpha.setStrokeColor('#C34351');
        this.alpha.setStrokeWidth('2px');
        this.alpha.setColor('black');
        this.alpha.setIcon(this.Icons.file_download);
        this.alpha.setIconColor('#C34351');
        this.alpha.setIconTop(true);
        this.layout.addChild(this.alpha);
        this.ipt = new NeuInput();
        this.layout.addChild(this.ipt);
        this.beta = new NeuButton();
        this.beta.setText('Store');
        this.beta.setBackgroundColor(this.Colors.Transparent);
        this.beta.setStrokeColor(this.Colors.LightGray);
        this.beta.setStrokeWidth('1px');
        this.beta.setPadding('10px');
        this.beta.setColor(this.Colors.Main);
        this.layout.addChild(this.beta);
        this.lover = new NeuButton();
        this.lover.setIcon(this.Icons.favorite);
        this.lover.setIconColor(this.Colors.White);
        this.lover.setBackgroundColor('#FF3057');
        this.lover.setIconTop(true);
        this.lover.setColor(this.Colors.Transparent);
        this.layout.addChild(this.lover);
        this.draw(this.layout);
        console.log('drawing finished');
    }
}
runApp(Stora);
//# sourceMappingURL=main.js.map