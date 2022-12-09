import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuColumn } from "../../assets/ts/Layout/NeuColumn.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { Padding } from "../../assets/ts/Tool/Padding.js"

class SimpleApp extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.title = new NeuContainer()
        this.title.geometry.Width = '100%'
        this.title.data.Text = 'Simple App'
        this.title.data.FontSize = '24px'
        this.title.data.TextAlign = 'center'
        this.title.data.Padding = new Padding().top('32px')
        this.layout.addChild(this.title)

        this.draw('#App')
    }
}

export let app = new SimpleApp()
runApp(app)
