import { NeuApp } from "../Neupica/Core/App.js"
import { runApp } from "../Neupica/Neupica2.js"
import { NeuColumn } from "../Layout/NeuColumn.js"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { NeuImage } from "../Neupica/Components/Native/NeuImage.js"

class H1 extends NeuText {
    constructor() {
        super()
        this.data.Text = "H1"
        this.data.FontSize = "2rem"
        this.data.FontWeight = "bold"
        this.data.TextAlign = "center"
        this.data.TextColor = "#000000"
        this.data.TextDecorationLine = "underline"
        this.data.TextDecorationColor = "#000000"
    }
}

class Screen extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.text = new NeuText()
        this.text.data.Text = "Neupica 2"
        this.text.modifyData({
            Text: "Hello World",
            FontFamily: "Pretendard",
            FontSize: "1rem",
            TextTransform: "uppercase",
            TextColor: "#000000",
            TextDecorationLine: "underline",
            TextDecorationColor: "#000000",
            TextDecorationStyle: "solid",
            TextDecorationThickness: "1px",
            TextUnderlineOffset: "auto",
        })
        this.layout.addChild(this.text)

        this.title = new H1()
        this.layout.addChild(this.title)

        this.draw("#App")
    }
}

runApp(Screen)
