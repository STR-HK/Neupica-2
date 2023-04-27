import { NeuCalc } from "../../assets/ts/Layout/NeuCalc.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import {
    CommonButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import {
    NavigationBar
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import {
    NavigationBarItem
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import {
    IconButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { Icon } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { MaterialSymbolsRounded } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { themeColor } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { setTheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Box } from "../../assets/ts/Tool/Box.js"
import {
    ElevatedButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/ElevatedButton.js"
import {
    FilledButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledButton.js"
import { MaterialText } from "../../assets/ts/Neupica/Components/Native/MaterialText.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import {
    FilledTonalButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledTonalButton.js"
import {
    OutlinedButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"
import {
    TextButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/TextButton.js"
import {
    FloatingActionButtons
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/FloatingActionButtons.js"
import {
    ExtendedFAB
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/ExtendedFAB.js"
import { setStorageDark } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { rerenderThemedElements } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { toogleDarkMode } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { theme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { transit } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Motion/Transition.js"
import { Level0 } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Elevation.js"
import { dtransit } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Motion/Transition.js"
// import { MaterialSymbolsRounded } from "../../assets/ts/Utils/MaterialSymbol.js"

// setTheme('#6750a4')
setTheme("#b05454")

export class Mathmatica extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuScaffold()
        this.setFullScreen(true)

        this.appBar = new TopAppBar()
        this.appBar.setHeadline('WinTheme')
        this.appBarDarkModeIconButton = new IconButton(new MaterialSymbolsRounded('light_mode'))
        this.appBarDarkModeIconButton.watchEvent('click', function() {
            toogleDarkMode()
        }.bind(this))
        this.appBarMaterialVersionIconButton = new IconButton(new MaterialSymbolsRounded('filter_3'))
        this.appBarColorPaletteIconButton = new IconButton(new MaterialSymbolsRounded('palette'))
        this.appBarColorPaletteIconButton.watchEvent('click', function() {
            try {
                setTheme('#' + Math.floor(Math.random()*16777215).toString(16))
            } catch (e) {
            }
        }.bind(this))
        this.appBar.addTrailings([
            this.appBarDarkModeIconButton,
            this.appBarColorPaletteIconButton,
            this.appBarMaterialVersionIconButton,

        ])
        this.layout.head.setAppBar(this.appBar)

        class WinButton extends CommonButton {
            constructor() {
                super()

                this.data.BackgroundColor = '#E1E1E1'
                this.data.BorderColor = '#BCBCBC'

                this.data.TextColor = 'black'
                this.data.BorderRadius = '0px'
                this.data.Border = '1px solid #BCBCBC'
                this.data.Padding = new Box().vertical('3rem')
                this.geometry.Height = 'auto'
                this.geometry.MinHeight = 'auto'

                this.DeActivateRipple()

                this.bHovering = false
                this.bClicking = false
                this.animeDuration = 100

                this.watchEvent('mouseenter', () => {
                    console.log({
                        clicking: this.bClicking,
                        hovering: this.bHovering,
                    })
                    if (!this.bHovering || !this.bClicking) {
                        this.bHovering = true
                        this.Hover()
                    }
                })
                this.watchEvent('mouseleave', () => {
                    console.log({
                        clicking: this.bClicking,
                        hovering: this.bHovering,
                    })
                    this.bHovering = false
                    this.UnHover()
                })

                this.watchEvents(['mousedown', 'touchstart'], () => {
                    console.log({
                        clicking: this.bClicking,
                        hovering: this.bHovering,
                    })
                    if (!this.bClicking) {
                        this.bClicking = true
                        this.Click()
                    }
                })
                this.watchEvents(['mouseup', 'touchend'], () => {
                    console.log({
                        clicking: this.bClicking,
                        hovering: this.bHovering,
                    })
                    if (this.bClicking) {
                        this.bClicking = false
                        this.UnClick()
                        this.Hover()
                    }
                })
            }
            Hover() {
                dtransit(this, {
                    'backgroundColor': '#E5F1FB',
                    'borderColor': '#077CD8',
                }, this.animeDuration)
                // this.data.BackgroundColor = '#E5F1FB'
                // this.data.BorderColor = '#077CD8'
            }
            UnHover() {
                dtransit(this, {
                    'backgroundColor': '#E1E1E1',
                    'borderColor': '#BCBCBC',
                }, this.animeDuration)
                // this.data.BackgroundColor = '#E1E1E1'
                // this.data.BorderColor = '#BCBCBC'
            }
            Click() {
                dtransit(this, {
                    'backgroundColor': '#CDE4F7',
                    'borderColor': '#05599E',
                }, this.animeDuration)
                // this.data.BackgroundColor = '#CDE4F7'
                // this.data.BorderColor = '#05599E'
            }
            UnClick() {
                dtransit(this, {
                    'backgroundColor': '#E1E1E1',
                    'borderColor': '#BCBCBC',
                }, this.animeDuration)
                // this.data.BackgroundColor = '#E1E1E1'
                // this.data.BorderColor = '#BCBCBC'
            }
        }
        this.winButton = new WinButton()
        this.winButton.data.Content = 'Button'

        this.layout.body.data.Padding = new Box().all('16px')

        this.layout.body.addChildren([
            this.winButton
        ])

        this.layout.body.data.BackgroundColor = colorScheme.background
        this.layout.body.reRender = function() {
            // this.layout.body.data.BackgroundColor = colorScheme.background
            transit(this.layout.body, {
                'background': colorScheme.background
            })

        }.bind(this)

        // this.navigation = new NavigationBar()
        // this.navigateComponent = new NavigationBarItem()
        // this.navigateComponent.Icon.data.Content = 'widgets'
        // this.navigateComponent.Label.data.Content = 'Components'
        // this.navigateComponent.watchEvent('click', function() {
        //     this.layout.body.clearChildren()
        // }.bind(this))
        // this.navigateColor = new NavigationBarItem()
        // this.navigateColor.Icon.data.Content = 'imagesearch_roller'
        // this.navigateColor.Label.data.Content = 'Color'
        // this.navigateColor.watchEvent('click', function() {
        //     this.layout.body.clearChildren()
        // }.bind(this))
        // this.navigateComponent.click()
        //
        // this.navigateTypography = new NavigationBarItem()
        // this.navigateTypography.Icon.data.Content = 'text_snippet'
        // this.navigateTypography.Label.data.Content = 'Typography'
        // this.navigateTypography.watchEvent('click', function() {
        //     this.layout.body.clearChildren()
        // }.bind(this))
        // this.navigateElevation = new NavigationBarItem()
        // this.navigateElevation.Icon.data.Content = 'humidity_mid'
        // this.navigateElevation.Label.data.Content = 'Elevation'
        // this.navigateElevation.watchEvent('click', function() {
        //     this.layout.body.clearChildren()
        // }.bind(this))
        // this.navigation.addChildren([
        //     this.navigateComponent,
        //     this.navigateColor,
        //     this.navigateTypography,
        //     this.navigateElevation
        // ])
        // this.layout.foot.addChild(this.navigation)


        this.draw('#fit-glass-pane')
    }

}


export let app = runApp(new Mathmatica())

// setInterval(function() {
//     try {
//         setTheme('#' + Math.floor(Math.random()*16777215).toString(16))
//     } catch (e) {}
// }, 500)