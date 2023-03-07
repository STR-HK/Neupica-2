import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { MaterialSymbolsSharp } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { Typography } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { colorScheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import {
    OutlinedButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"
import { CetneredTextField } from "../Widget/CetneredTextField.js"
import { MaterialSymbolsRounded } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { SuccessScreen } from "./ResultScreen.js"
import { FailureScreen } from "./ResultScreen.js"
// import { CetneredTextField } from "./app.js"

export class OpeningScreen extends NeuContainer {
    constructor(parent) {
        super()

        this.parent = parent

        // this.data.JustifyContent = 'center'
        this.data.AlignItems = 'center'
        this.data.Gap = '12rem'

        this.Blank = new NeuContainer()
        this.Blank.geometry.Height = '10%'
        this.addChild(this.Blank)
        // this.addChild(this.Blank)

        this.Icon = new MaterialSymbolsRounded('chair')
        this.Icon.data.FontSize = Typography.Size.HeadlineMedium
        this.Icon.data.TextColor = colorScheme.onBackground
        this.addChild(this.Icon)

        this.Title = new NeuContainer()
        this.Title.data.FontSize = Typography.Size.TitleLarge
        this.Title.data.TextColor = colorScheme.onBackground
        this.Title.Text.data.Content = '오리엔트 특급저택'
        this.addChild(this.Title)

        this.Input = new CetneredTextField()
        this.Input.LabelText.Text.data.Content = '입장 코드를 입력하세요'
        this.Input.geometry.Width = '70%'
        this.addChild(this.Input)

        this.Submit = new OutlinedButton()
        this.Submit.Text.data.Content = '입장하기'
        this.Submit.watchEvent('click', function(){
            if (this.Input.Input.data.Value.startsWith("xor") || this.Input.Input.data.Value.startsWith("cen")) {
                this.parent.Code = this.Input.Input.data.Value
                this.parent.storeTime()
                this.parent.reloaded(this.parent.Code)
                this.parent.hideExScreen(this)
            }






        }.bind(this))
        this.addChild(this.Submit)

        this.Blank2 = new NeuContainer()
        this.Blank2.geometry.Height = '5%'
        this.addChild(this.Blank2)

        this.Detail = new NeuContainer()
        this.Detail.data.FontSize = Typography.Size.LabelLarge
        this.Detail.data.TextColor = colorScheme.onSurfaceVariant
        this.Detail.Text.data.Content = '입구의 담당자에게 입장 코드를 안내받아 주세요.\n' +
            '입장하신 순간부터 20분간 탈출이 진행되며, \n이후 퇴장 조처됩니다.'
        this.Detail.data.TextAlign = 'center'
        this.addChild(this.Detail)

        this.Blank3 = new NeuContainer()
        this.Blank3.geometry.Height = '10%'
        this.addChild(this.Blank3)

        this.Info = new NeuContainer()
        this.Info.data.FontSize = Typography.Size.LabelLarge
        this.Info.data.TextColor = colorScheme.background
        this.Info.data.FontStyle = 'italic'
        this.Info.data.TextAlign = 'center'
        this.Info.data.TextDecorationStyle = 'underline'
        this.Info.Text.data.Content = 'Made By. SJN\nSpecial Thanks to. Neupica 2'
        this.addChild(this.Info)

        // window.addEventListener('load', function() {
        //     this.Input.Input.data.Value = '123'
        //     this.Submit.element.click()
        //     this.parent.NavigationBarItem2.click()
        // }.bind(this))
    }
}