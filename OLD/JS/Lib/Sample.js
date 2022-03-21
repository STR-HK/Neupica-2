import { NeuColumn } from '../Layout/NeuColumn.js';
import { NeuApp } from '../Neupica/Core/App.js';
import { NeuText } from '../Neupica/Widgets/Native/NeuText.js';
import { runApp } from '../Neupica/Neupica2.js';
class Sample extends NeuApp {
    constructor() {
        super();
        this.layout = new NeuColumn();
        this.text1 = new NeuText();
        this.text1.Text = 'NeuTextr';
        this.text1.FontSize = '20px';
        this.layout.addChild(this.text1);
        this.draw('#App');
    }
}
runApp(Sample);
//# sourceMappingURL=Sample.js.map