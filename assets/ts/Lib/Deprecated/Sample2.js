import { NeuColumn } from "../../Layout/NeuColumn.ts"
import { NeuImage } from "../../Neupica/Components/Native/NeuImage.ts"
import { NeuText } from "../../Neupica/Components/Native/NeuText.js"
import { NeuApp } from "../../Neupica/Core/App.ts"
import { runApp } from "../../Neupica/Neupica2.ts"

class Scroll extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.img = new NeuText()

        this.img.data.Text = "NeuText"
        // this.img.Text

        this.draw("#App")
    }
}

runApp(Scroll)
