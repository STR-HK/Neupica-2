import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { Box } from "../../assets/ts/Tool/Box.js"
import { MaterialText } from "../../assets/ts/Neupica/Components/Native/MaterialText.js"
import { NeuText } from "../../assets/ts/Neupica/Components/Native/MaterialText.js"
import { NavigationBar } from "./Apple.js"

// window.inspect = true

export class Apple extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuScaffold()

        this.bar = new NavigationBar()
        this.layout.head.setAppBar(this.bar)

        this.draw('#fit-glass-pane')
    }
}

runApp(new Apple())