import { NeuApp } from "../../../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { runApp } from "../../../../assets/ts/Neupica/Neupica2.js"
import { NeuContainer } from "../../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { transit } from "../../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Motion/Transition.js"
import { colorScheme } from "../../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Navigation } from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/Navigation.js"
import {
    NavigationBar
} from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { setTheme } from "../../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import {
    ElevatedButton
} from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/ElevatedButton.js"
import {
    FilledTonalButton
} from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledTonalButton.js"
import {
    IconButton
} from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { MaterialSymbolsRounded } from "../../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { MaterialText } from "../../../../assets/ts/Neupica/Components/Native/MaterialText.js"
import { Typography } from "../../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { NeuBox } from "../../../../assets/ts/Neupica/Components/Native/NeuBox.js"
import {
    FilledButton
} from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledButton.js"
import { NeuImage } from "../../../../assets/ts/Neupica/Components/Native/NeuImage.js"
import { Box } from "../../../../assets/ts/Tool/Box.js"
import { MacTrafficLight } from "./widget/MacTrafficLight.js"
import {
    NavigationBarItem
} from "../../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { DroxNavigationBarItem } from "../widget/DroxNavigationBarItem.js"

setTheme('#6750A4')

// window.inspect = true

class Drox extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuScaffold()
        this.setFullScreen(true)

        this.layout.geometry.Width = '420px'
        this.layout.geometry.Height = parseInt(420 * (18 / 9)) + 'px'

        this.mactl_close = new MacTrafficLight()
        this.mactl_close.Icon.data.Src = './icon/macos/Close_Button.svg'
        this.mactl_close.watchEvent('click', () => {
            window.close()
        })
        this.mactl_minimize = new MacTrafficLight()
        this.mactl_minimize.Icon.data.Src = './icon/macos/Minimize_Button.svg'
        this.mactl_maximize = new MacTrafficLight()
        this.mactl_maximize.Icon.data.Src = './icon/macos/Maximize_Button.svg'

        this.traffic_lights = new NeuContainer()

        this.traffic_lights.data.Symmetric = 'horizontal'

        this.appBar = new NeuContainer()
        this.appBar.reRender = () => {
            this.appBar.data.BackgroundColor = colorScheme.background
        }
        this.appBar.reRender()
        // WARNING!! LOW LEVEL ACCESS IS NOT RECOMMENDED!!
        this.appBar.element.style['-webkit-app-region'] = 'drag'
        this.appBar.geometry.Height = 'auto'
        this.appBar.geometry.Padding = new Box().LTRB('16rem', '15rem', '16rem', '15rem')
        this.layout.head.setAppBar(this.appBar)

        this.pageTitle = new MaterialText()
        this.pageTitle.reRender = () => {
            this.pageTitle.data.BackgroundColor = colorScheme.background
        }
        this.pageTitle.reRender()
        this.pageTitle.data.Padding = new Box().LTRB('16rem', '9rem', '16rem', '15rem')
        // this.pageTitle.data.Padding = new Box().top('24rem')
        this.pageTitle.data.FontSize = Typography.Size.HeadlineMedium
        this.pageTitle.data.Content = 'Drox Music Player'

        // ---------- The cascading structure ----------

        this.appBar.addChildren([
            this.traffic_lights.addChildren([
                this.mactl_close,
                this.mactl_minimize,
                this.mactl_maximize
            ]),
        ])
        this.layout.head.addChildren([
            this.pageTitle

        ])



        this.layout.body.data.AlignItems = 'center'
        this.layout.body.data.Padding = new Box().LTRB('18rem', '6rem','18rem','18rem')


        this.layout.body.data.BackgroundColor = colorScheme.background
        this.layout.body.reRender = function() {
            transit(this.layout.body, {
                'background': colorScheme.background
            })
        }.bind(this)

        class DroxMainMenuWidget extends NeuContainer {
            constructor() {
                super()

                this.geometry.Cursor = 'pointer'

                this.ActivateRipple()

                this.data.BorderRadius = new Box().all('5rem')
                this.geometry.Width = 'calc(47.5%)'
                this.geometry.Width = '49%'
                // this.geometry.MaxWidth = 'calc(50%)'
                this.data.AlignItems = 'center'
                // this.data.Gap = '4rem'

                this.data.BackgroundColor = 'lightgray'

                let textColor = 'black'

                this.Image = new NeuImage()
                this.Image.geometry.AspectRatio = '1'
                this.Image.geometry.Width = '100%'
                this.Image.data.Src = './icon/Cover1.png'
                this.Image.data.BorderRadius = new Box().LTRB('0rem','5rem' , '5rem', '0rem')

                this.Text_VB = new NeuContainer()
                this.Text_VB.data.AlignItems = 'center'
                this.Text_VB.geometry.Width = '100%'
                this.Text_VB.data.Gap = '2rem'
                this.Text_VB.geometry.Margin = new Box().vertical('8rem')

                this.MainText = new MaterialText()
                this.MainText.data.Content = 'Playlist'
                this.MainText.data.FontSize = Typography.Size.BodyLarge
                this.MainText.data.FontWeight = 'bold'
                this.MainText.data.TextColor = textColor

                this.SubText = new MaterialText()
                this.SubText.data.Content = '0 playlists'
                this.SubText.data.FontSize = '10rem'
                this.SubText.data.FontSize = '10rem'
                this.SubText.data.TextColor = textColor


                this.addChildren([
                    this.Image,
                    this.Text_VB.addChildren([
                        this.MainText,
                        this.SubText,
                    ]),
                ])
            }
        }
        this.layout.body.data.Symmetric = 'horizontal'
        // this.layout.body.data.Gap = '6rem'
        this.layout.body.data.FlexWrap = 'wrap'
        this.layout.body.data.AlignContent = 'flex-start'
        this.layout.body.data.JustifyContent = 'space-between'

        this.layout.body.addChildren([
            new DroxMainMenuWidget(),
            new DroxMainMenuWidget(),
            // new DroxMainMenuWidget(),
            // new DroxMainMenuWidget(),
        ])


        this.navigation = new NavigationBar()
        this.navigation.geometry.Height = '105rem'

        this.nav_main = new DroxNavigationBarItem()
        this.nav_main.cascade.Icon.data.Content = 'home'
        this.nav_main.cascade.Label.data.Content = 'Home'
        this.nav_main.click()

        this.nav_search = new DroxNavigationBarItem()
        this.nav_search.cascade.Icon.data.Content = 'search'
        this.nav_search.cascade.Label.data.Content = 'Search'

        this.nav_playlist = new DroxNavigationBarItem()
        this.nav_playlist.cascade.Icon.data.Content = 'queue_music'
        this.nav_playlist.cascade.Label.data.Content = 'Playlist'

        this.nav_single = new DroxNavigationBarItem()
        this.nav_single.cascade.Icon.data.Content = 'music_note'
        this.nav_single.cascade.Label.data.Content = 'Single'

        this.nav_setting = new DroxNavigationBarItem()
        this.nav_setting.cascade.Icon.data.Content = 'settings'
        this.nav_setting.cascade.Label.data.Content = 'Setting'


        this.layout.foot.addChildren([
            this.navigation.addChildren([
                this.nav_main,
                this.nav_search,
                this.nav_playlist,
                this.nav_single,
                this.nav_setting
            ])
        ])

        this.draw('#fit-glass-pane')
    }
}

export let mainPage = new Drox()
runApp(mainPage)



// setInterval(function() {
//     try {
//         setTheme('#' + Math.floor(Math.random()*16777215).toString(16))
//     } catch (e) {}
// }, 500)