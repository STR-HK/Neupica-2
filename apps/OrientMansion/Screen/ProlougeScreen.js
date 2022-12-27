import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { NeuScaffold } from "../../../assets/ts/Layout/NeuScaffold.js"
import { MaterialSymbolsSharp } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import {
    IconButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { TopAppBar } from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { NeuImage } from "../../../assets/ts/Neupica/Components/Native/NeuImage.js"
import { Typography } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { colorScheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Padding } from "../../../assets/ts/Tool/Padding.js"


export class ProlougeScreen extends NeuContainer {
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
            this.parent.NavigationBarItem2.click()
        }.bind(this))
        this.AppBar = new TopAppBar()
        this.AppBar.setHeadline('사건 프롤로그')
        this.AppBar.setLeading(this.BackIconButton)
        this.layout.head.addChild(this.AppBar)

        this.layout.body.data.Padding = '18rem'
        this.layout.body.data.Gap = '18rem'

        this.Warn = new NeuContainer()
        this.Warn.data.FontSize = Typography.Size.TitleMedium
        this.Warn.data.TextColor = colorScheme.onErrorContainer
        // this.Warn.data.FontFamily = 'Gowun Batang'
        this.Warn.data.Text = '게임 진행시 휴대전화의 뒤로가기 버튼이 아닌,\n' +
            '화면의 뒤로가기 버튼을 이용해주세요\n'
        this.layout.body.addChild(this.Warn)

        this.Content1 = new NeuContainer()
        this.Content1.data.FontSize = Typography.Size.TitleMedium
        this.Content1.data.TextColor = colorScheme.onSurfaceVariant
        // this.Content1.data.FontFamily = 'Gowun Batang'
        // this.Content1.data.TextIndent = parseInt(Typography.Size.TitleMedium) + 'rem'
        this.Content1.data.Text = '' +
            '오리엔트 특급저택에 오신 것을 환영합니다! \n\n' +
            '당신은 탐정의 자격으로 방문하였으며, ' +
            '경찰 및 일반인과 동행하여 입장하였습니다.\n\n' +
            '첫 방문 시에는 응접실에서 환영회가 진행되오니, ' +
            '응접실에 방문해 주시길 바랍니다.'

        this.layout.body.addChild(this.Content1)

        this.addChild(this.layout)
    }
}