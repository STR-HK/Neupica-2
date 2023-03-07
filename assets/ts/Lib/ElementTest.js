import { NeuApp } from "../Neupica/Core/App.ts"
import { NeuColumn } from "../Layout/NeuColumn.ts"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { runApp } from "../Neupica/Neupica2.ts"
import { NeuInput } from "../Neupica/Components/Native/NeuInput.ts"
import { MStrokedButton } from "../Neupica/Components/Custom/deprecated/MButton.js"
import { NeuLabel } from "../Neupica/Components/Widgets/NeuLabel.js"
import { work } from "./ElementTest_worker.js"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.ts"

class ElementTest extends NeuApp {
    constructor() {
        super()
        this.setTitle('Neupica v.2.0.0a')
        this.setFavicon('favicon.ico')
        this.setFullScreen(true)

        this.layout = new NeuColumn()
        // this.layout.data.BackgroundColor = '#C6CCD7'

        this.text = new NeuContainer()
        this.text.Text.data.Content = "This is NeuText demo"
        this.text.data.FontSize = '32px'
        this.text.geometry.Padding = '10px'
        this.layout.addChild(this.text)

        this.input = new NeuInput()
        this.input.data.Placeholder = "This is NeuInput demo"
        this.input.data.FontSize = '32px'
        this.layout.addChild(this.input)

        this.button = new MStrokedButton()
        this.button.setText('This is NeuButton demo')
        this.button.setBackgroundColor('white')
        // this.button.data.ButtonText.Text = "This is NeuButton demo"
        this.button.data.ButtonText.FontSize = '28px'
        this.layout.addChild(this.button)

        this.label = new NeuLabel()
        this.label.data.CursorPos = 0
        this.label.data.Cursor.Text.data.Content = '가'
        this.label.data.Cursor.data.TextColor = 'red'
        this.label.data.Cursor.data.FontSize = '32px'
        this.label.data.CursorPos = 1
        this.label.data.Cursor.Text.data.Content = '나'
        this.label.data.Cursor.data.TextColor = 'orange'
        this.label.data.Cursor.data.FontSize = '32px'
        this.label.data.CursorPos = 2
        this.label.data.Cursor.Text.data.Content = '다'
        this.label.data.Cursor.data.TextColor = 'yellow'
        this.label.data.Cursor.data.FontSize = '32px'
        this.layout.addChild(this.label)

        this.setLayout(this.layout)
        this.draw('#App')

    }
}


export let app = new ElementTest()
runApp(app)
work()
