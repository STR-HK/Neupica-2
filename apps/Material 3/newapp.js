// import { color } from "../../assets/ts/Neupica/Components/M3/Components/Color.js"
import { colorScheme, theme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
// import { NeuColumn } from "../../assets/js/Layout/NeuColumn.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import { NeuColumn } from "../../assets/ts/Layout/NeuColumn.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { NeuHTML } from "../../assets/ts/Layout/NeuHTML.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { OutlinedButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"
import { MaterialSymbolsOutlined } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.ts"
import { IconButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { Switch } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Switch.js"
import { Divider } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Divider.js"
import { NavigationBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { NavigationBarItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
// import { FilledButtons } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Common Buttons/FilledButtons.js"
import { FilledButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledButton.js"
import { TextFields } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/TextFields.js"
import {
    OutlinedTextField
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/OutlinedTextField.js"
import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
import { Snackbar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Communication/Snackbar.js"

export class Material3 extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()
        this.layout.data.BackgroundColor = colorScheme.background
        // this.setFullScreen(true)

        this.menuIcon = new MaterialSymbolsOutlined('palette')
        this.menuIcon.geometry.Width = '24rem'
        this.menuIcon.data.TextColor = colorScheme.onSurface
        this.menuIconButton = new IconButton(this.menuIcon)
        this.menuIconButton.geometry.Width = '48rem'
        this.layout.addChild(this.menuIconButton)

        this.setLayout(this.layout)

        this.draw('#App')
    }
}

export let app = new Material3()
runApp(app)
initModal()
