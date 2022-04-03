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

class Screen extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.btn = new NeuButton()
        this.btn.data.ButtonText.Text = "BUTTON"
        this.btn.data.ButtonText.TextColor = "white"
        this.btn.data.ButtonText.FontSize = "1.5rem"
        this.btn.data.Button.BackgroundColor = "black"
        this.btn.data.Button.BorderRadius = "0.25rem"
        this.btn.data.Button.Padding = new Padding().VH("0.5rem", "1.5rem")
        this.layout.addChild(this.btn)

        this.draw("#App")
    }
}

export let app = new Screen()
window.app = app
