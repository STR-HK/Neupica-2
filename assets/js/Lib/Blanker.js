import { NeuApp } from "../Neupica/Core/App.js"
import { runApp } from "../Neupica/Neupica2.js"
import { NeuColumn } from "../Layout/NeuColumn.js"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { NeuImage } from "../Neupica/Components/Native/NeuImage.js"
import { NeuLabel } from "../Neupica/Components/Widgets/NeuLabel.js"
import { NeuRow } from "../Layout/NeuRow.js"
import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.js"
import { Padding } from "../Tool/Padding.js"
// import { work } from "./Screen_worker.js"
import { BorderRadius } from "../Tool/BorderRadius.js"
import { NeuInput } from "../Neupica/Components/Native/NeuInput.js"

class Blanker extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.title = new NeuText()
        this.title.data.Text = "Blanker"
        this.title.data.FontSize = "23px"
        this.layout.addChild(this.title)

        this.ios = new NeuButton()
        this.layout.addChild(this.ios)

        console.log(this.children)

        this.draw("#App")
    }
}

export let app = new Blanker()
// work()
