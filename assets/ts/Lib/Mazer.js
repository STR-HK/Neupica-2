import { NeuApp } from "../Neupica/Core/App.ts"
import { runApp } from "../Neupica/Neupica2.ts"
import { NeuColumn } from "../Layout/NeuColumn.ts"
import { MActionButton } from "../Neupica/Components/Custom/deprecated/MActionButton.js"
import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"
import { Box } from "../Tool/Box.js"
import { MBasicButton } from "../Neupica/Components/Custom/deprecated/MButton.js"
import { NeuTable } from "../Neupica/Components/Widgets/NeuTable.js"
import { NeuLabel } from "../Neupica/Components/Widgets/NeuLabel.js"

class Mazer extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.btn = new MBasicButton()
        this.btn.setBackgroundColor('rgb(0, 122, 255)')
        this.btn.setTextColor('white')
        this.btn.setText('Draw Maze')
        this.btn.data.ButtonImage.Src = 'https://cdn-icons-png.flaticon.com/512/1250/1250615.png'
        this.btn.image.geometry.Width = '18px'
        this.btn.data.Button.Symmetric = 'Horizontal'
        this.btn.text.geometry.Padding = new Box().left('8px')
        this.layout.addChild(this.btn)

        this.maze = new NeuLabel()
        this.maze.data.Cursor = 0
        this.maze.data.Acursor
        this.layout.addChild(this.maze)

        this.setLayout(this.layout)
        this.draw('body')
    }
}

let mazeApp = new Mazer()
runApp(mazeApp)