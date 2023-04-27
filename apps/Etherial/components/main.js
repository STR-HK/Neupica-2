import { NeuApp } from "../../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { runApp } from "../../../assets/ts/Neupica/Neupica2.js"
import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { transit } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Motion/Transition.js"
import { colorScheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Navigation } from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/Navigation.js"
import {
    NavigationBar
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { setTheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import {
    ElevatedButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/ElevatedButton.js"
import {
    FilledTonalButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledTonalButton.js"
import {
    IconButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { MaterialSymbolsRounded } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { MaterialText } from "../../../assets/ts/Neupica/Components/Native/MaterialText.js"
import { Typography } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { NeuBox } from "../../../assets/ts/Neupica/Components/Native/NeuBox.js"
import {
    FilledButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledButton.js"

setTheme('#F7C04A')

class EtherialMain extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuScaffold()
        this.setFullScreen(true)

        this.appBar = new TopAppBar()
        this.appBar.setLeading(new IconButton(new MaterialSymbolsRounded('function')))
        this.appBar.setHeadline('Etherial')
        this.layout.head.setAppBar(this.appBar)

        this.layout.body.data.AlignItems = 'center'
        this.layout.body.data.Padding = '18rem'

        this.gap1 = new NeuBox('0', Typography.Size.DisplayMedium)
        this.gap2 = new NeuBox('0', Typography.Size.LabelLarge)
        this.gap3 = new NeuBox('0', Typography.Size.HeadlineLarge)

        this.slogan = new MaterialText()
        this.slogan.data.TextAlign = 'center'
        this.slogan.data.FontSize = Typography.Size.DisplayLarge
        this.slogan.data.FontWeight = '800'
        this.slogan.data.Content = 'Your tools, gadgets,\n & appliances. Simultaneously.'

        this.subslogan = new MaterialText()
        this.subslogan.data.TextAlign = 'center'
        this.subslogan.data.FontSize = Typography.Size.TitleMedium
        // this.subslogan.data.FontWeight = '300'
        this.subslogan.data.Content = 'Etherial is the attached workspace where wiser, sweeter task occurs.'

        this.getButton = new FilledTonalButton()
        this.getButton.data.Content = 'Get Etherial free ->'
        this.getButton.geometry.Width = 'fit-content'

        this.layout.body.addChildren([
            this.gap1,
            this.slogan,
            this.gap2,
            this.subslogan,
            this.gap3,
            this.getButton,
        ])

        this.layout.body.data.BackgroundColor = colorScheme.background
        this.layout.body.reRender = function() {
            transit(this.layout.body, {
                'background': colorScheme.background
            })
        }.bind(this)

        this.navigation = new NavigationBar()
        this.layout.foot.addChild(this.navigation)

        this.draw('#fit-glass-pane')
    }
}

export let mainPage = new EtherialMain()
runApp(mainPage)



// setInterval(function() {
//     try {
//         setTheme('#' + Math.floor(Math.random()*16777215).toString(16))
//     } catch (e) {}
// }, 500)