import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/M3/Styles/Navigation/TopAppBars.js"
import { IconButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Icon Buttons/IconButton.js"
import { Icon } from "../../assets/ts/Neupica/Components/M3/Components/Icons.js"
import { MaterialSymbolsRounded } from "../../assets/ts/Neupica/Components/M3/Components/Icons.js"
import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
import {
    FloatingActionButtons
} from "../../assets/ts/Neupica/Components/M3/Styles/Actions/FloatingActionButtons/FloatingActionButtons.js"
import { Menu } from "../../assets/ts/Neupica/Components/M3/Styles/Selection/Menu.js"
import { MenuItem } from "../../assets/ts/Neupica/Components/M3/Styles/Selection/Menu.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { Typography } from "../../assets/ts/Neupica/Components/M3/Components/Typography.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/M3/Components/Color.js"
import { BottomAppBar } from "../../assets/ts/Neupica/Components/M3/Styles/Navigation/BottomAppBar.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Common Buttons/CommonButton.js"
import { MaterialSymbolsSharp } from "../../assets/ts/Neupica/Components/M3/Components/Icons.js"
import { NavigationBar } from "../../assets/ts/Neupica/Components/M3/Styles/Navigation/NavigationBar.js"
import { NavigationBarItem } from "../../assets/ts/Neupica/Components/M3/Styles/Navigation/NavigationBar.js"
import { TextFields } from "../../assets/ts/Neupica/Components/M3/Styles/TextInputs/Text Fields/TextFields.js"
import { OutlinedButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Common Buttons/OutlinedButton.js"
import { Padding } from "../../assets/ts/Tool/Padding.js"
import { ExtendedFAB } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/FloatingActionButtons/ExtendedFAB.js"
import { BasicDialogs } from "../../assets/ts/Neupica/Components/M3/Styles/Containment/Dialogs/BasicDialogs.js"
import { FilledButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Common Buttons/FilledButton.js"
// import { ExtendedFAB } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/FloatingActionButtons/ExtendedFAB.js"

initModal()

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함

}

class CetneredTextField extends TextFields {
    constructor() {
        super()

        this.vbox.data.BackgroundColor = 'transparent'
        this.Input.data.TextAlign = 'center'
        this.LabelText.data.TextAlign = 'center'
        this.LabelText.geometry.Width = '100%'
        this.watchEvent('click', function() {
            this.LabelText.geometry.Display = 'none'
        }.bind(this))
        this.watchEvent('blur', function() {
            if (this.Input.data.Value === "") {
                this.LabelText.geometry.Display = 'flex'
            }
        }.bind(this))
    }
}

class ClueScreen extends NeuContainer {
    constructor(parent) {
        super()
        this.parent = parent
        this.data.AlignItems = 'center'
        this.data.JustifyContent = 'center'

        this.CodeInput = new CetneredTextField()
        this.CodeInput.geometry.Width = '70%'
        this.CodeInput.LabelText.data.Text = '대답 입력'
        // this.CodeInput.Input.data.TextAlign = 'center'
        // this.CodeInput.LabelText.data.TextAlign = 'center'
        // this.CodeInput.LabelText.geometry.Width = '100%'
        // this.CodeInput.watchEvent('click', function() {
        //     this.CodeInput.LabelText.geometry.Display = 'none'
        // }.bind(this))
        // this.CodeInput.watchEvent('blur', function() {
        //     if (this.CodeInput.Input.data.Value === "") {
        //         this.CodeInput.LabelText.geometry.Display = 'flex'
        //     }
        // }.bind(this))
        this.addChild(this.CodeInput)

        this.EnterButton = new OutlinedButton()
        // this.EnterButton.geometry.Width = '60%'
        this.EnterButton.data.AlignItems = 'center'
        this.EnterButton.data.Text = '제출'
        this.EnterButton.watchEvent('click', function() {
            // alert('잘못된 단서를 입력하셨습니다')
            this.parent.showExScreen(new resultScreen(this.parent))
            // this.parent.layout.body.clearChild()
        }.bind(this))
        this.addChild(this.EnterButton)


        this.data.Gap = '12rem'

        this.Blank = new NeuContainer()
        this.Blank.geometry.Height = '40%'
        this.addChild(this.Blank)

    }
}

class NoteScreen extends NeuContainer {
    constructor() {
        super()


    }
}

class FinishScreen extends NeuContainer {
    constructor() {
        super()
        this.data.AlignItems = 'center'
        this.data.JustifyContent = 'center'
        this.data.Gap = '12rem'

        this.LockIcon = new MaterialSymbolsSharp('lock')
        this.LockIconButton = new IconButton(this.LockIcon)
        this.LockIconButton.geometry.Width = '60rem'
        this.LockIconButton.geometry.Height = this.LockIconButton.geometry.Width
        this.LockIcon.data.FontSize = Typography.Size.HeadlineLarge
        this.LockIcon.data.TextColor = colorScheme.onBackground
        this.LockIconButton.watchEvent('click', function() {
            if (this.UnLockInput.Input.data.Value === '2992') {
                alert('잘된 추리 완료 코드입니다')
            } else {
                alert('잘못된 추리 완료 코드입니다')
            }
        }.bind(this))
        this.addChild(this.LockIconButton)

        this.UnLockInput = new CetneredTextField()
        this.UnLockInput.geometry.Width = '50%'
        this.UnLockInput.LabelText.data.Text = '추리 완료 코드'
        this.addChild(this.UnLockInput)

        this.LockMessage = new NeuContainer()
        this.LockMessage.data.FontSize = Typography.Size.BodyMedium
        this.LockMessage.data.TextColor = colorScheme.onBackground
        this.LockMessage.data.TextAlign = 'center'
        this.LockMessage.data.Text = '지금은 추리가 진행이므로 완성시킬 수 없습니다.\n' +
            '추리가 완료되었다고 생각한 경우,\n 출구에서 추리 완료 코드를 안내받아 입력하고\n [자물쇠를 눌러] 추리를 완성하고 결과를 확인하세요.'
        this.addChild(this.LockMessage)

        this.Blank = new NeuContainer()
        this.Blank.geometry.Height = '40%'
        this.addChild(this.Blank)
    }
}

class resultScreen extends NeuContainer {
    constructor(parent) {
        super()
        this.parent = parent

        this.layout = new NeuScaffold()
        this.layout.geometry.Width = '100%'
        this.layout.geometry.Height = '100%'

        this.BackIcon = new MaterialSymbolsSharp('arrow_back_ios_new')
        this.BackIconButton = new IconButton(this.BackIcon)
        this.BackIconButton.watchEvent('click', function() {
            this.parent.hideExScreen(this)
        }.bind(this))
        this.AppBar = new TopAppBar()
        this.AppBar.setHeadline('질의응답 결과')
        this.AppBar.setLeading(this.BackIconButton)
        this.layout.head.addChild(this.AppBar)

        this.layout.body.data.AlignItems = 'center'

        this.XResult = new NeuContainer()
        this.XResult.data.TextColor = colorScheme.onErrorContainer
        this.XResult.data.FontSize = Typography.Size.HeadlineSmall
        this.XResult.data.Text = '잘못된 단서를 찾으셨습니다'
        this.layout.body.addChild(this.XResult)

        this.addChild(this.layout)
    }
}

class openingScreen extends NeuContainer {
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

        this.Icon = new MaterialSymbolsSharp('tram')
        this.Icon.data.FontSize = Typography.Size.HeadlineMedium
        this.Icon.data.TextColor = colorScheme.onBackground
        this.addChild(this.Icon)

        this.Title = new NeuContainer()
        this.Title.data.FontSize = Typography.Size.TitleLarge
        this.Title.data.TextColor = colorScheme.onBackground
        this.Title.data.Text = '오리엔트 특급저택'
        this.addChild(this.Title)
        
        this.Input = new CetneredTextField()
        this.Input.LabelText.data.Text = '입장 코드를 입력하세요'
        this.Input.geometry.Width = '70%'
        this.addChild(this.Input)

        this.Submit = new OutlinedButton()
        this.Submit.data.Text = '입장하기'
        this.Submit.watchEvent('click', function(){
            if (this.Input.Input.data.Value.toUpperCase() === "QQQ" ){
                console.log(this.parent.NavigationBarItem2)
                this.parent.NavigationBarItem2.click()

                this.parent.hideExScreen()
            }
        }.bind(this))
        this.addChild(this.Submit)

        this.Blank2 = new NeuContainer()
        this.Blank2.geometry.Height = '5%'
        this.addChild(this.Blank2)

        this.Detail = new NeuContainer()
        this.Detail.data.FontSize = Typography.Size.LabelLarge
        this.Detail.data.TextColor = colorScheme.onSurfaceVariant
        this.Detail.data.Text = '입구의 담당자에게 입장 코드를 안내받아 주세요.\n' +
            '입장하신 순간부터 20분간 탈출이 진행되며, \n이후 퇴장 조처됩니다.'
        this.Detail.data.TextAlign = 'center'
        this.addChild(this.Detail)

        this.Blank3 = new NeuContainer()
        this.Blank3.geometry.Height = '10%'
        this.addChild(this.Blank3)

        this.Info = new NeuContainer()
        this.Info.data.FontSize = Typography.Size.LabelLarge
        this.Info.data.TextColor = colorScheme.surfaceVariant
        this.Info.data.FontStyle = 'italic'
        this.Info.data.TextAlign = 'center'
        this.Info.data.TextDecorationStyle = 'underline'
        this.Info.data.Text = 'Made By. SJN\nSpecial Thanks to. Material 3'
        this.addChild(this.Info)
    }
}

export class OrientMansion extends NeuApp {
    constructor() {
        super()
        this.app.style.width = '100%'
        this.app.style.height = '100%'

        this.layout = new NeuScaffold()
        this.layout.element.style.width = "100%"
        this.layout.element.style.height = '100%'



        this.AppBarIcon = new MaterialSymbolsSharp('tram')
        this.AppBarIconButton = new IconButton(this.AppBarIcon)

        this.Timer = new NeuContainer()
        this.Timer.data.Text = `${getRandomIntInclusive(10, 20)}:${getRandomIntInclusive(10, 20)}`
        this.Timer.data.FontSize = Typography.Size.TitleLarge
        this.Timer.data.Margin = new Padding().right('12rem')
        setInterval(function() {
            this.Timer.data.Text = `${getRandomIntInclusive(10, 20)}:${getRandomIntInclusive(10, 20)}`
        }.bind(this), 500)

        this.AppBar = new TopAppBar()
        this.AppBar.setHeadline('오리엔트 특급저택')
        this.AppBar.setLeading(this.AppBarIconButton)
        this.AppBar.addTrailing(this.Timer)
        this.layout.head.addChild(this.AppBar)

        this.clueScreen = new ClueScreen(this)
        this.noteScreen = new NoteScreen()
        this.finishScreen = new FinishScreen()

        this.extend(this.clueScreen)
        this.extend(this.noteScreen)
        this.extend(this.finishScreen)

        this.layout.body.data.BackgroundColor = colorScheme.background

        this.NavigationBar = new NavigationBar()

        this.NavigationBarItem1 = new NavigationBarItem()
        this.NavigationBarItem1.Icon.data.Text = 'history_edu'
        this.NavigationBarItem1.Label.data.Text = '질의 응답'
        this.NavigationBar.addChild(this.NavigationBarItem1)
        this.NavigationBarItem1.watchEvent('click', function() {
            this.layout.body.clearChild()
            this.layout.body.addChild(this.clueScreen)
            window.modal.removeModal(this.AddNoteButton)
        }.bind(this))
        this.NavigationBarItem1.click()

        this.AddNoteButton = new ExtendedFAB()
        this.AddNoteButton.Icon.data.Text = 'add_task'
        this.AddNoteButton.LabelText.data.Text = '조사 내용 추가'
        this.AddNoteButton.data.Margin = new Padding().LTRB('0rem', '0rem', '16rem', '16rem')
        this.AddNoteButton.watchEvent('click', function() {
            let bd = new BasicDialogs()
            bd.Icon.data.Text = 'add_task'
            bd.Headline.data.Text = '조사 내용 추가'
            bd.SupportingText.data.Text = '새로운 조사 내용을 추가할 경우 굉장히 재미있는\n 상황이 연출 될 수 있습니다. 이러한 상황을 명심하시여\n 작동시켜 주시길 바랍니다. 항상 감사합니다.'
            bd.TextButton.data.Text = '취소'
            window.modal.addInteractiveModal(bd)
        }.bind(this))

        this.NavigationBarItem2 = new NavigationBarItem()
        this.NavigationBarItem2.Icon.data.Text = 'draw'
        this.NavigationBarItem2.Label.data.Text = '조사 수첩'
        this.NavigationBar.addChild(this.NavigationBarItem2)
        this.NavigationBarItem2.watchEvent('click', function() {
            this.layout.body.clearChild()
            this.layout.body.addChild(this.noteScreen)
            window.modal.removeModal(this.AddNoteButton)
            window.modal.addInteractiveModal(this.AddNoteButton)
            window.modal.layout.data.JustifyContent = 'flex-start'
            this.AddNoteButtonLayer = window.modal.getLayer(this.AddNoteButton)
            this.AddNoteButtonLayer.data.AlignItems = 'flex-end'
            this.AddNoteButtonLayer.data.JustifyContent = 'flex-end'
            window.addEventListener('resize', function() {
                this.AddNoteButtonLayer.geometry.Height = window.innerHeight - 80 + 'px'
            }.bind(this))
            window.dispatchEvent(new Event('resize'))
            // this.AddNoteButtonLayer.da
        }.bind(this))
        // this.NavigationBarItem2.click()

        this.NavigationBarItem3 = new NavigationBarItem()
        this.NavigationBarItem3.Icon.data.Text = 'verified'
        this.NavigationBarItem3.Label.data.Text = '추리 완성'
        this.NavigationBar.addChild(this.NavigationBarItem3)
        this.NavigationBarItem3.watchEvent('click', function() {
            this.layout.body.clearChild()
            this.layout.body.addChild(this.finishScreen)
            window.modal.removeModal(this.AddNoteButton)

        }.bind(this))

        this.layout.foot.addChild(this.NavigationBar)
        // this.layout.foot.geometry.Position = 'fixed'
        // this.layout.foot.data.

        // this.a = new NeuContainer()
        // this.a.geometry.Height = '80rem'
        // this.a.geometry.Width = '100%'
        // this.a.data.BackgroundColor = colorScheme.onBackground
        // window.modal.addModal(this.a)
        // window.modal.getLayer(this.a).data.JustifyContent = 'flex-end'

        this.setLayout(this.layout)
        this.draw('#App')

        this.showExScreen(new openingScreen(this))
        // window.modal.removeModal(this.AddNoteButton)


        this.prevScreen = undefined
    }

    showExScreen(screen) {
        this.layout.head.geometry.Display = 'none'
        this.layout.foot.geometry.Display = 'none'

        this.prevScreen = this.layout.body.children[0]
        this.layout.body.removeChild(this.prevScreen)

        this.extend(screen)
        this.layout.body.addChild(screen)
    }

    hideExScreen() {
        this.layout.head.geometry.Display = 'flex'
        this.layout.foot.geometry.Display = 'flex'

        this.layout.body.clearChild()
        this.layout.body.addChild(this.prevScreen)
    }

    extend(container) {
        container.geometry.Width = '100%'
        container.geometry.Height = '100%'
    }
}

export let app = new OrientMansion()
runApp(app)

