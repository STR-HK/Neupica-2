import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import {
    OutlinedButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"
import { CetneredTextField } from "../Widget/CetneredTextField.js"
// import { CetneredTextField } from "./app.js"

export class ClueScreen extends NeuContainer {
    constructor(parent) {
        super()
        this.parent = parent
        this.data.AlignItems = 'center'
        this.data.JustifyContent = 'center'

        this.CodeInput = new CetneredTextField()
        this.CodeInput.geometry.Width = '70%'
        this.CodeInput.LabelText.data.Text = '대답 입력'
        this.addChild(this.CodeInput)

        this.EnterButton = new OutlinedButton()
        this.EnterButton.data.AlignItems = 'center'
        this.EnterButton.data.Text = '제출'
        this.EnterButton.watchEvent('click', function() {
            this.parent.showExScreen(new resultScreen(this.parent))
        }.bind(this))
        this.addChild(this.EnterButton)


        this.data.Gap = '12rem'

        this.Blank = new NeuContainer()
        this.Blank.geometry.Height = '40%'
        this.addChild(this.Blank)

    }
}