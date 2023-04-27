import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { MaterialSymbolsSharp } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import {
    IconButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { Typography } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { colorScheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { CetneredTextField } from "../Widget/CetneredTextField.js"
import { NeuImage } from "../../../assets/ts/Neupica/Components/Native/NeuImage.js"
import { Level1 } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Elevation.js"
import { Level2 } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Elevation.js"
import {
    FilledButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledButton.js"
import {
    CommonButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import { SuccessScreen } from "./ResultScreen.js"
import { FailureScreen } from "./ResultScreen.js"
import { CharacterInfo } from "./CharaInfoScreen.js"
import { cvt } from "../Data/cvt.js"
import {
    BasicDialogs
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Dialogs/BasicDialogs.js"
import { rrrcvt } from "../Data/cvt.js"
import { app } from "../app.js"

class VoteItem extends NeuContainer {
    constructor(parent, name, image) {
        super()
        this.parent = parent

        this.data.AlignItems = 'center'
        this.data.Gap = '4rem'
        this.data.BackgroundColor = colorScheme.background
        this.data.Shadow = Level2

        this.Name = new NeuContainer()
        this.Name.data.FontSize = Typography.Size.LabelLarge
        this.Name.data.TextColor = colorScheme.onBackground
        this.Name.data.Content = name
        this.addChild(this.Name)

        this.Image = new NeuImage()
        this.Image.geometry.Filter =  'grayscale(100%) sepia(100%) brightness(100%) contrast(85%)'
        this.Image.geometry.Height = '90px'
        this.Image.geometry.Width = '60px'
        this.Image.data.Src = image
        this.Image.data.ObjectFit = 'cover'
        this.addChild(this.Image)

        this.ActivateRipple()


        // this.Icon = new MaterialSymbolsSharp('radio_button_unchecked')
        // this.IconButton = new IconButton(this.Icon)
        // this.Icon.data.TextColor = colorScheme.onBackground
        //
        // this.addChild(this.IconButton)
        // this.IconButton.watchEvent('click', function() {
        //     this.Icon.data.Content = 'radio_button_checked'
        // }.bind(this))

        this.data.BorderRadius = '6rem'
        this.data.Border = '1px solid ' + colorScheme.onBackground
        this.data.Border = '1px solid transparent'
        this.data.Padding = '12rem'

        this.Checked = false

        this.watchEvent('click', function() {
            this.invert()
        }.bind(this))


    }

    invert () {
        if (this.Checked) {
            this.Checked = !this.Checked
            this.data.Border = '1px solid transparent'
            this.Name.data.TextColor = colorScheme.onBackground
        } else {
            this.Checked = !this.Checked
            this.data.Border = '1px solid ' + colorScheme.secondary
            this.Name.data.TextColor = colorScheme.secondary

            this.parent.RailSuspectName.data.Content = this.Name.data.Text
            this.parent.selectedJob =  this.Name.data.Text
        }
    }

    off() {
        this.Checked = false
        this.data.Border = '1px solid transparent'
        this.Name.data.TextColor = colorScheme.onBackground
    }
}

export class FinishScreen extends NeuContainer {
    constructor(parent) {
        super()
        this.parent = parent

        this.data.AlignItems = 'center'
        this.data.JustifyContent = 'flex-start'
        this.data.Gap = '12rem'



        this.LockIcon = new MaterialSymbolsSharp('lock')
        this.LockIconButton = new IconButton(this.LockIcon)
        this.LockIconButton.geometry.Width = '60rem'
        this.LockIconButton.geometry.Height = this.LockIconButton.geometry.Width
        this.LockIcon.data.FontSize = Typography.Size.HeadlineLarge
        this.LockIcon.data.TextColor = colorScheme.onBackground
        this.LockIconButton.watchEvent('click', function() {

        }.bind(this))
        // this.addChild(this.LockIconButton)

        this.LockMessage = new NeuContainer()
        this.LockMessage.data.FontSize = Typography.Size.BodyMedium
        this.LockMessage.data.TextColor = colorScheme.onBackground
        this.LockMessage.data.TextAlign = 'center'
        this.LockMessage.data.Content = '지금은 추리가 진행이므로 완성시킬 수 없습니다\n' +
            '추리가 완료되었다고 생각한 경우,\n ' +
            // '출구에서 추리 완료 코드를 안내받아 입력하고\n ' +
            '[자물쇠를 눌러] 범인을 선택하고 결과를 확인하세요'
        // this.addChild(this.LockMessage)

        this.RailFAB = new MaterialSymbolsSharp('person_pin_circle')
        this.RailFAB.data.FontSize = ''
        // this.RailFAB.data.Text =
        this.RailFAB.data.TextColor = colorScheme.onPrimaryContainer
        this.RailFAB.data.FontSize = Typography.Size.HeadlineSmall
        // this.RailFAB.geometry.Margin = '12rem'
        // this.RailFAB.Container.DeActivateRipple()



        this.RailFirstLine = new NeuContainer()
        this.RailFirstLine.data.Symmetric = 'horizontal'
        this.RailFirstLine.data.Padding = '4rem'
        this.RailFirstLine.data.JustifyContent = 'center'
        this.RailFirstLine.data.BackgroundColor = colorScheme.background
        // this.RailFirstLine.data.Margin = new Padding().left('18rem')
        this.RailFirstLine.data.Gap = '4rem'
        this.RailFirstLine.geometry.Width = '100%'
        this.RailFirstLine.addChild(this.RailFAB)
        this.RailCurrentTimeLine = new NeuContainer()
        this.RailCurrentTimeLine.data.FontSize = Typography.Size.TitleMedium
        this.RailCurrentTimeLine.data.TextColor = colorScheme.onSecondaryContainer
        this.RailCurrentTimeLine.data.JustifyContent = 'center'
        this.RailCurrentTimeLine.data.Content = '당신이 선택한 범인은 '
        this.RailSuspectName = new NeuContainer()
        this.RailSuspectName.data.FontSize = Typography.Size.TitleMedium
        this.RailSuspectName.data.TextColor = colorScheme.onSecondaryContainer
        this.RailSuspectName.data.FontWeight = 'bold'
        this.RailSuspectName.data.JustifyContent = 'center'
        this.RailSuspectName.data.Content = '???'
        this.RailEnd = new NeuContainer()
        this.RailEnd.data.FontSize = Typography.Size.TitleMedium
        this.RailEnd.data.TextColor = colorScheme.onSecondaryContainer
        this.RailEnd.data.JustifyContent = 'center'
        this.RailEnd.data.Content = '입니다'
        this.RailFirstLine.addChild(this.RailCurrentTimeLine)
        this.RailFirstLine.addChild(this.RailSuspectName)
        this.RailFirstLine.addChild(this.RailEnd)
        this.addChild(this.RailFirstLine)

        this.Blank0 = new NeuContainer()
        this.Blank0.geometry.Height = '20px'
        this.addChild(this.Blank0)

        class Line extends NeuContainer {
            constructor() {
                super()

                this.data.Gap = '12rem'
                this.data.Symmetric = 'horizontal'
            }
        }

        this.line1 = new Line()
        this.addChild(this.line1)

        this.line2 = new Line()
        this.addChild(this.line2)

        this.line3 = new Line()
        this.addChild(this.line3)

        let items = []

        let keys = Object.keys(CharacterInfo)
        for (let i = 0; i < keys.length; i++) {
            let item = new VoteItem(
                this, CharacterInfo[keys[i]]['job'], CharacterInfo[keys[i]]['profile']
            )
            items.push(item)

            if (i < 3) {
                this.line1.addChild(item)
            } else if (i < 6) {
                this.line2.addChild(item)
            } else {
                this.line3.addChild(item)
            }
        }

        this.watchEvent('click', function() {
            items.forEach(item => {
                item.off()
            })
        }.bind(this))


        this.successScreen = new SuccessScreen(parent)
        this.failureScreen = new FailureScreen(parent)


        this.targetResultScreen = this.failureScreen

        this.selectedJob = "???"

        this.submitButton = new CommonButton()
        this.submitButton.data.Content = '결과 제출하고 확인하기'
        this.submitButton.watchEvent('click', function() {
            let checker = new BasicDialogs()
            checker.Icon.data.Content = 'psychology_alt'
            checker.Headline.data.Content = '정말로 끝내시겠어요?'
            checker.SupportingText.data.Content = `당신이 선택한 범인은 ${this.selectedJob} 입니다`
            checker.TextButton.data.Content = '확인'
            checker.TextButton.watchEvent('click', function() {
                let route = cvt(this.parent.routed)
                if (this.RailSuspectName.data.Text == route) {
                    this.targetResultScreen = this.successScreen
                    // this.targetResultScreen.selection =
                    localStorage.setItem('result', 'success')
                    localStorage.setItem('before', app.routed)
                    localStorage.setItem('after', rrrcvt(this.RailSuspectName.data.Text))
                } else {
                    this.targetResultScreen = this.failureScreen
                    // this.targetResultScreen.selection = rrrcvt(this.RailSuspectName.data.Text)
                    localStorage.setItem('result', 'failure')
                    localStorage.setItem('before', app.routed)
                    localStorage.setItem('after', rrrcvt(this.RailSuspectName.data.Text))
                }
                this.parent.showExScreen(this.targetResultScreen)
            }.bind(this))
            checker.CloseButton.data.Content = '취소'
            checker.Scrim.data.JustifyContent = 'flex-start'
            checker.Container.data.Margin = '120px'
            window.modal.addInteractiveModal(checker)

        }.bind(this))
        this.addChild(this.submitButton)


        // this.voting = new VoteItem()
        // this.addChild(this.voting)

        this.Blank = new NeuContainer()
        this.Blank.geometry.Height = '40%'
        this.addChild(this.Blank)

        this.Return = new IconButton(new MaterialSymbolsSharp(''))
        this.Return.watchEvent('click', function() {
            this.parent.hideExScreen(this)
        }.bind(this))
        this.addChild(this.Return)
    }
}
