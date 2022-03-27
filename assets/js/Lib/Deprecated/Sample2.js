import { NeuColumn } from "../../Layout/NeuColumn.js"
import { NeuImage } from "../../Neupica/Components/Native/NeuImage.js"
import { NeuText } from "../../Neupica/Components/Native/NeuText.js"
import { NeuScroll } from "../../Neupica/Components/Widgets/NeuScroll.js"
import { NeuApp } from "../../Neupica/Core/App.js"
import { runApp } from "../../Neupica/Neupica2.js"

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
