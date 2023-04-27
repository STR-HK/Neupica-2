import { NeuColumn } from "../../Layout/NeuColumn.ts"
import { NeuImage } from "../../Neupica/Components/Native/NeuImage.ts"
import { MaterialText } from "../../Neupica/Components/Native/MaterialText.ts"
import { NeuApp } from "../../Neupica/Core/App.ts"
import { runApp } from "../../Neupica/Neupica2.ts"

class Scroll extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.img = new MaterialText()

        this.img.Text.data.Content = "NeuText"
        // this.img.Text

        this.draw("#App")
    }
}

runApp(Scroll)
