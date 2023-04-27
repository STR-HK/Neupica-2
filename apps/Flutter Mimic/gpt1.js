// import { NeuApp } from "./assets/ts/Neupica/Core/App.js";
// import { NeuScaffold } from "./assets/ts/Layout/NeuScaffold.js";
// import { NeuInput } from "./assets/ts/Neupica/Components/Native/NeuInput.js";
// import { ElevatedButton } from "./assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/ElevatedButton.js";
// import { Box } from "./assets/ts/Tool/Box.js";
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { NeuInput } from "../../assets/ts/Neupica/Components/Native/NeuInput.js"
import {
    ElevatedButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/ElevatedButton.js"
import { Box } from "../../assets/ts/Tool/Box.js"

class MyApp extends NeuApp {
    constructor() {
        super();
        this.layout = new NeuScaffold();
        this.setFullScreen(true);

        // Create an input field
        const inputField = new NeuInput();
        inputField.geometry.Width = '200px';
        inputField.data.BorderRadius = '12px';
        inputField.data.Placeholder = 'Enter your name';
        inputField.data.Padding = new Box().LTRB('8px', '12px');
        this.layout.body.addChild(inputField);

        // Create a button
        const button = new ElevatedButton();
        button.geometry.Width = '100px';
        button.data.BorderRadius = '12px';
        button.data.Content = 'Submit';
        button.data.Padding = new Box().LTRB('8px', '12px');
        button.watchEvent('click', () => {
            const inputValue = inputField.getValue();
            alert(`Hello, ${inputValue}!`);
        });
        this.layout.body.addChild(button);

        this.draw('#fit-glass-pane');
    }
}

const app = new MyApp();
runApp(app)