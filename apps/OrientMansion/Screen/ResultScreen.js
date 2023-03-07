import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { NeuScaffold } from "../../../assets/ts/Layout/NeuScaffold.js"
import { MaterialSymbolsSharp } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { Typography } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { colorScheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import {
    IconButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import {
    BasicDialogs
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Dialogs/BasicDialogs.js"
import { cvt } from "../Data/cvt.js"
import { CetneredTextField } from "../Widget/CetneredTextField.js"

export class ResultScreen extends NeuContainer {
    constructor(parent) {
        super()

        this.parent = parent

        this.layout = new NeuScaffold()
        this.layout.geometry.Width = '100%'
        this.layout.body.data.AlignItems = 'center'
        this.layout.body.data.JustifyContent = 'center'
        this.layout.geometry.Height = '100%'
        this.layout.body.data.Gap = '12rem'

        this.blank1 = new NeuContainer()
        this.blank1.geometry.Height = '20%'
        this.layout.body.addChild(this.blank1)

        this.icon = new MaterialSymbolsSharp('celebration')
        this.icon.data.FontSize = Typography.Size.DisplayLarge
        this.icon.data.TextColor = colorScheme.onBackground
        this.layout.body.addChild(this.icon)

        this.title = new NeuContainer()
        this.title.data.FontSize = Typography.Size.HeadlineMedium
        this.title.data.TextColor = colorScheme.onBackground
        this.title.data.FontWeight = 'bold'
        this.title.Text.data.Content = '축하합니다!'
        this.layout.body.addChild(this.title)

        this.subtitle = new NeuContainer()
        this.subtitle.data.FontSize = Typography.Size.TitleMedium
        this.subtitle.data.TextColor = colorScheme.onBackground
        this.subtitle.Text.data.Content = '당신은 성공적으로 범인을 잡았습니다'
        this.layout.body.addChild(this.subtitle)

        this.blank2 = new NeuContainer()
        this.blank2.geometry.Height = '50%'
        this.layout.body.addChild(this.blank2)



        this.mss = new MaterialSymbolsSharp(`null -> null`)
        this.mss.data.FontSize = '10rem'

        setInterval(function() {
            this.mss.Text.data.Content = `${localStorage.getItem('before')} -> ${localStorage.getItem('after')}`

        }.bind(this), 100)

        this.mss.data.TextColor = colorScheme.onBackground
        this.Return = new IconButton(this.mss)
        this.Return.watchEvent('click', function() {

            let bdinput = new CetneredTextField()
            bdinput.geometry.Width = '200px'
            bdinput.LabelText.Text.data.Content = '?'

            let checker = new BasicDialogs()
            checker.Icon.Text.data.Content = 'infrared'
            checker.Headline.Text.data.Content = 'Xx3929dfkR'
            // checker.SupportingText.Text.data.Content = `당신이 선택한 범인은 ${this.selectedJob} 입니다`
            checker.SupportingText.addChild(bdinput)
            checker.TextButton.Text.data.Content = 'CFM'
            checker.TextButton.watchEvent('click', function() {
                let input = bdinput.Input.data.Value
                if (input === 'xor') {
                    localStorage.removeItem("result")
                    location.reload()
                }
            }.bind(this))
            checker.CloseButton.Text.data.Content = 'CEL'
            checker.Scrim.data.JustifyContent = 'flex-start'
            checker.Container.data.Margin = '120px'
            window.modal.addInteractiveModal(checker)

            // this.parent.hideExScreen(this)
        }.bind(this))
        this.layout.body.addChild(this.Return)

        this.addChild(this.layout)
    }
}

export class SuccessScreen extends ResultScreen {
    constructor(parent) {
        super()

        this.parent = parent

    }
}

export class FailureScreen extends ResultScreen {
    constructor(parent) {
        super()

        this.parent = parent




        this.icon.Text.data.Content = 'report'
        this.title.Text.data.Content = '실패하였습니다...'
        this.subtitle.Text.data.Content = '당신이 지목한 범인은 진범이 아니었습니다'
    }
}