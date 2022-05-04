import { NeuColumn } from "../Layout/NeuColumn.js"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { NeuApp } from "../Neupica/Core/App.js"

class Prototype extends NeuApp {
    constructor() {
        super()

        this.layout = new NeuColumn()

        this.text = new NeuText()
        this.text.data.Text = "Hello World"
        this.text.data.FontWeight = "2rem"
        this.text.data.TextColor = "red"
        this.layout.addChild(this.text)

        this.draw("#App")
    }
}

export let app = new Prototype()
