import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { MaterialSymbolsOutlined } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.ts"
import { IconButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { TextFields } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/TextFields.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.ts"
// import { NObject } from "../../assets/ts/Common/NObject.ts"
// import * as inspector from "inspector"

export class NeuDev extends NeuApp {
    constructor() {
        super()
        this.setFullScreen(true)
        this.layout = new NeuScaffold()
        this.layout.data.BackgroundColor = colorScheme.background

        this.appBarIcon = new MaterialSymbolsOutlined('webhook')
        this.appBarIconButton = new IconButton(this.appBarIcon)

        this.appBar = new TopAppBar()
        this.appBar.setLeading(this.appBarIconButton)
        this.appBar.setHeadline('NeuDev')
        this.layout.head.addChild(this.appBar)

        this.layout.body.data.Symmetric = 'horizontal'

        this.viewer = new NeuContainer()
        this.viewer.geometry.Width = '40%'
        this.viewer.geometry.Height = '100%'
        this.layout.body.addChild(this.viewer)

        this.writing = new NeuContainer()
        this.writing.geometry.Width = '60%'
        this.writing.geometry.Height = '100%'
        this.layout.body.addChild(this.writing)

        this.insertBox = new TextFields()
        this.insertBox.geometry.Width = '100%'
        this.writing.addChild(this.insertBox)

        this.insertBtn = new CommonButton()
        this.insertBtn.watchEvent('click', function() {
            let text = new NeuContainer()
            text.data.Text = this.insertBox.Input.data.Value
            text.data.TextColor = colorScheme.onBackground
            this.insertBox.Input.data.Value = ''
            text.data.FontSize = '16rem'
            this.viewer.addChild(text)
        }.bind(this))
        this.writing.addChild(this.insertBtn)

        this.draw('#App')
    }
}

let app = new NeuDev()
runApp(app)