import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { NeuScaffold } from "../../../assets/ts/Layout/NeuScaffold.js"
import { MaterialSymbolsSharp } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import {
    IconButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { TopAppBar } from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { colorScheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Typography } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { Box } from "../../../assets/ts/Tool/Box.js"

export class TimeOverScreen extends NeuContainer {
    constructor(parent) {
        super()
        this.parent = parent

        this.layout = new NeuScaffold()
        this.layout.geometry.Width = '100%'
        this.layout.geometry.Height = '100%'

        this.BackIcon = new MaterialSymbolsSharp('gavel')
        this.BackIconButton = new IconButton(this.BackIcon)
        this.BackIconButton.watchEvent('click', function() {
            console.log(this)

            this.parent.hideExScreen(this)
        }.bind(this))
        this.AppBar = new TopAppBar()
        this.AppBar.setHeadline('추리 종료 안내')
        this.AppBar.setLeading(this.BackIconButton)
        this.layout.head.addChild(this.AppBar)

        this.layout.body.data.AlignItems = 'center'
        // this.layout.body.data.BackgroundColor = colorScheme.background

        this.XResult = new NeuContainer()
        this.XResult.data.TextColor = colorScheme.onErrorContainer
        this.XResult.data.FontSize = Typography.Size.HeadlineSmall
        this.XResult.geometry.Margin = new Box().top('30px')
        this.XResult.data.Content = '추리가 종료되었습니다'
        this.layout.body.addChild(this.XResult)

        this.addChild(this.layout)

    }
}