import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { OutlinedButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"
import { MaterialSymbolsOutlined } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { IconButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { Switch } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Switch.js"
import { Divider } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Divider.js"
import { NavigationBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { NavigationBarItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { FilledButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/FilledButton.js"
import { TextFields } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/TextFields.js"
import { OutlinedTextField } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/OutlinedTextField.js"
// import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
import { Snackbar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Communication/Snackbar.js"
import { ProgressIndicators } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Communication/ProgressIndicators/ProgressIndicators.js"
import { Cards } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Cards/Cards.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { NeuImage } from "../../assets/ts/Neupica/Components/Native/NeuImage.js"
import { TextButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/TextButton.js"
import { Box } from "../../assets/ts/Tool/Box.js"
import { SegmentedButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/SegmentedButton.js"
import {
    FloatingActionButtons
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/FloatingActionButtons.js"
import { BasicDialogs } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Dialogs/BasicDialogs.js"
import { Menu } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Menu.js"
import { MenuItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Menu.js"
import { MenuDivider } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Menu.js"
import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
// import { ro } from "../../assets/ts/Common/Updater.js"
import { resizeObserver } from "../../assets/ts/Common/Updater.js"
import { SmallBadge } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Communication/Badges/SmallBadge.js"
import { Dialogs } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Dialogs/Dialogs.js"
import anime from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Motion/anime.es.js"
import { Native } from "../../assets/ts/Neupica/Components/Native/Native.js"
import { toogleDarkMode } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import {
    ElevatedButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/ElevatedButton.js"
import { themeColor } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { MaterialText } from "../../assets/ts/Neupica/Components/Native/MaterialText.js"
import { transit } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Motion/Transition.js"

initModal()

let DURATION = 250

export class M3 extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuScaffold()

        this.TopAppBar = new TopAppBar()
        this.TopAppBarLeadingIcon = new MaterialSymbolsOutlined('menu')
        this.TopAppBarLeadingIconButton = new IconButton(this.TopAppBarLeadingIcon)
        this.TopAppBar.setLeading(this.TopAppBarLeadingIconButton)
        this.TopAppBarHeadline = new TextButton()
        this.TopAppBarHeadline.Text.data.Content = 'Neupica Material 3'
        this.TopAppBar.HeadLine.geometry.Margin = '0'
        this.TopAppBar.HeadLine.addChild(this.TopAppBarHeadline)
        this.layout.head.addChild(this.TopAppBar)

        this.draw('#App')
    }
}

export class Material3 extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuScaffold()
        this.layout.data.BackgroundColor = colorScheme.background
        this.layout.reRender =function() {
            this.layout.data.BackgroundColor = colorScheme.background
        }.bind(this)
        this.setFullScreen(true)



        this.head = this.layout.head
        this.body = this.layout.body
        this.foot = this.layout.foot

        this.menuIcon = new MaterialSymbolsOutlined('specific_gravity')
        this.menuIcon.geometry.Width = '24rem'
        this.menuIconButton = new IconButton(this.menuIcon)
        this.menuIconButton.geometry.Width = '48rem'

        this.themeModeIcon = new MaterialSymbolsOutlined('light_mode')
        this.themeModeIcon.geometry.Width = '24rem'
        this.themeModeIconButton = new IconButton(this.themeModeIcon)
        this.themeModeIconButton.geometry.Width = '48rem'
        this.themeModeIconButton.watchEvent('click', function(){
            toogleDarkMode()
        })

        this.calendarIcon = new MaterialSymbolsOutlined('Colorize')
        this.calendarIcon.geometry.Width = '24rem'
        this.calendarIconButton = new IconButton(this.calendarIcon)
        this.calendarIconButton.geometry.Width = '48rem'
        this.calendarIconButton.watchEvent('click', function() {
            let cpkr = document.createElement('input')
            cpkr.type = 'color'
            cpkr.click()
            cpkr.addEventListener('input', (e) => {
                localStorage.setItem('themeColor', e.target.value)
                setTheme(e.target.value)
                // location.reload()
            })
        })

        this.appbar = new TopAppBar('Material 3')
        this.appbar.setLeading(
            this.menuIconButton
        )
        this.appbar.addTrailings([
            this.themeModeIconButton,
            this.calendarIconButton
        ])
        this.head.setAppBar(this.appbar)

        this.layout.body.reRender = () => {
            this.layout.body.data.BackgroundColor = colorScheme.background
        }
        this.layout.body.reRender()

        this.homeScreen = new NeuContainer()
        this.homeScreen.geometry.Height = '100%'
        this.homeScreen.geometry.Width = '100%'
        this.lavenderScreen = new NeuContainer()
        this.lavenderScreen.geometry.Height = '100%'
        this.lavenderScreen.geometry.Width = '100%'
        this.extraScreen = new NeuContainer()
        this.extraScreen.geometry.Height = '100%'
        this.extraScreen.geometry.Width = '100%'
        this.paletteScreen = new NeuContainer()
        this.paletteScreen.geometry.Height = '100%'
        this.paletteScreen.geometry.Width = '100%'


            let initHomeScreen = function () {
            this.homeScreen.data.AlignItems = 'center'
            this.homeScreen.data.Gap = '4rem'

            this.pr = new ProgressIndicators()
            this.head.addChild(this.pr)

            this.iooper = new NeuContainer()
            this.iooper.data.Symmetric = 'horizontal'
            this.homeScreen.addChild(this.iooper)

            this.titleChangeButton = new ElevatedButton()
            this.titleChangeButton.Text.data.Content = 'Show Modal'
            this.iooper.addChild(this.titleChangeButton)
            this.titleChangeButton.watchEvent('click', function() {
                this.backlog = new NeuContainer()
                this.backlog.geometry.Width = '100%'
                this.backlog.geometry.Height = '100%'
                this.backlog.data.JustifyContent = 'center'
                this.backlog.data.AlignItems = 'center'
                this.backlog.data.BackgroundColor = 'rgba(0,0,0,0.5)'
                this.backlog.data.Gap = '4rem'
                window.modal.addInteractiveModal(this.backlog)
                this.backlog.watchEvent('click', function() {
                    // window.modal.clearModal()
                })

                this.cm = new CommonButton()
                this.cm.Text.data.Content = 'Modaled Button Demo'
                this.backlog.addChild(this.cm)

                this.ncm = new CommonButton()
                this.ncm.Text.data.Content = 'Modaled Button Demo'
                this.backlog.addChild(this.ncm)

                this.close = new OutlinedButton()
                this.close.Text.data.Content = 'CLOSE'
                this.backlog.addChild(this.close)
                this.close.watchEvent('click', function() {
                    window.modal.removeModal(this)
                    // console.log(window.modal.clearModal)
                }.bind(this.backlog))

            })

            this.snackingButton = new ElevatedButton()
            this.snackingButton.Text.data.Content = 'SnackingBar OPEN!'
            this.iooper.addChild(this.snackingButton)

            this.snackingButton.watchEvent('click', function() {
                let snackBar = new Snackbar(this.body)
                // this.body.addChild(snackBar)
                window.modal.addModal(snackBar)
                snackBar.Icon.watchEvent('click', function() {
                    window.modal.removeModal(this)
                }.bind(snackBar))
                setTimeout(function() {
                    window.modal.removeModal(snackBar)
                }, 2000)
            }.bind(this))

            this.div = new Divider()
            this.homeScreen.addChild(this.div)

            this.seg = new SegmentedButton()
            this.homeScreen.addChild(this.seg)

            this.outlinedButton = new OutlinedButton()
            this.outlinedButton.Text.data.Content = 'Toggle all switches'
            this.homeScreen.addChild(this.outlinedButton)
            this.outlinedButton.watchEvent('click', function() {
                this.sss.forEach(e => {
                    e.Toggle()
                })
            }.bind(this))

            this.inspectButton = new ElevatedButton()
                this.inspectButton.Text.data.Content = 'Start Inspecting'
                this.inspectButton.watchEvent('click', function() {
                    if (window.inspect) {
                        window.inspect = !window.inspect
                    } else {
                        window.inspect = !window.inspect
                    }
                }.bind(this))

                this.homeScreen.addChild(this.inspectButton)

            this.sss = []

            for (let i = 0; i < 1; i++) {
                let s = new NeuContainer()
                s.data.Symmetric = 'horizontal'
                this.homeScreen.addChild(s)
                for (let j = 0; j < 5; j++) {
                    let tp = new Switch()
                    this.sss.push(tp)
                    s.addChild(tp)
                }
            }
            this.hbox = new NeuContainer()
            this.hbox.data.Symmetric = 'horizontal'
            this.homeScreen.addChild(this.hbox)

            this.filledButton = new FilledButton()
            this.filledButton.Text.data.Content = 'Reset Theme Color'
            this.hbox.addChild(this.filledButton)
            this.filledButton.watchEvent('click', function() {
                localStorage.removeItem('themeColor')
                setTheme(themeColor)
            })

            this.Reload = new FilledButton()
            this.Reload.Text.data.Content = 'RELOAD'
            this.hbox.addChild(this.Reload)
            this.Reload.watchEvent('click', function() {
                window.location.reload()
            }.bind(this))

            this.ipt = new TextFields()
            this.ipt.geometry.Width = '240rem'
            this.homeScreen.addChild(this.ipt)

            this.appl = new ElevatedButton()
            this.appl.Text.data.Content = 'Apply Textfield Text to Title'
            this.appl.watchEvent('click', function() {
                this.appbar.setHeadline(this.ipt.Input.data.Value)
                this.appbar.setHeadline(this.ipt.Input.data.Value)
                DURATION = this.ipt.Input.data.Value
            }.bind(this))
            this.homeScreen.addChild(this.appl)

            this.menuButton = new OutlinedButton()
            this.menuButton.Text.data.Content = 'OPEN MENU'
            this.menuButton.watchEvent('click', function() {
                // function getOffset( el ) {
                //     var _x = 0;
                //     var _y = 0;
                //     while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
                //         _x += el.offsetLeft - el.scrollLeft;
                //         _y += el.offsetTop - el.scrollTop;
                //         el = el.offsetParent;
                //     }
                //     return { top: _y, left: _x };
                // }

                let menu = new Menu()
                let it1 = new MenuItem()
                let it2 = new MenuItem()
                let it3 = new MenuItem()
                let itd = new MenuDivider()
                let it4 = new MenuItem()
                menu.Container.addChildren([
                    it1, it2, it3, itd, it4
                ])
                // this.homeScreen.addChild(menu)
                window.modal.addInteractiveModal(menu)
                menu.Appear()

                let datum = this.menuButton.getBoundElement().getBoundingClientRect()
                // console.log(datum)
                menu.geometry.Top = datum.top + datum.height + 'px'

                // menu.geometry.Top = getOffset(this.menuButton.getBoundElement()).top + 'px'
                menu.geometry.Left = datum.left + 'px'
                menu.geometry.Position = 'absolute'

                // console.log( menu.Container.children[0])
                menu.children[0].watchEvent('click', function() {
                    window.modal.removeModal(menu)
                }.bind(this))
            }.bind(this))
            this.homeScreen.addChild(this.menuButton)


            this.crd1 = new Cards()
            // this.crd1.ActivateRipple()
            this.crd1.Button.watchEvent('click', function() {
                let dia = new BasicDialogs()
                dia.Headline.data.Content = 'Buy Ticket?'
                window.modal.addInteractiveModal(dia)
                dia.Appear()
            }.bind(this))
            this.homeScreen.addChild(this.crd1)

            this.ipt2 = new OutlinedTextField()
            this.ipt2.geometry.Width = '200rem'
            // this.homeScreen.addChild(this.ipt2)


            this.ipt.watchEvent('resize', function(e) {
                console.log(e)
            })

            for (let i =0; i < 100; i++) {
                let v = new MaterialText()
                v.data.Content = `${i.toString()}| This is temporary container text`
                v.data.FontSize = '12rem'
                v.data.TextColor = colorScheme.onBackground
                this.homeScreen.addChild(v)
            }
        }.bind(this)
        initHomeScreen()

        let initLavenderScreen = function () {
            this.lavenderScreen.data.Symmetric = 'vertical'
            this.lavenderScreen.data.AlignItems = 'center'
            this.lavenderScreen.data.JustifyContent = 'center'

            this.time = new NeuContainer()
            this.time.data.FontSize = Typography.Size.DisplayLarge
            this.time.data.TextColor = colorScheme.onBackground
            this.time.data.FontWeight = 'bold'
            this.time.data.Content = '23:06'
            this.time.reRender = function() {
                this.time.data.TextColor = colorScheme.onBackground
            }.bind(this)
            setInterval(
                function() {
                this.time.data.Content = new Intl.DateTimeFormat(
                    "en",
                    {
                        timeStyle: 'short',
                        hour12: false
                    }
                    ).format(
                        new Date()
                )
            }.bind(this),
                1000
            )
            this.lavenderScreen.addChild(this.time)

            this.today = new NeuContainer()
            this.today.data.Content = 'TODAY IS'
            this.today.data.FontSize = Typography.Size.TitleSmall
            this.today.data.TextColor = colorScheme.onBackground
            this.today.reRender = function() {
                this.today.data.TextColor = colorScheme.onBackground
            }.bind(this)
            this.today.data.FontStyle = 'italic'
            this.lavenderScreen.addChild(this.today)

            this.date = new NeuContainer()
            this.date.data.Content = 'December 1st, 2022'
            this.date.data.FontSize = Typography.Size.TitleSmall
            this.date.data.TextColor = colorScheme.onBackground
            this.lavenderScreen.addChild(this.date)
            this.date.reRender = function() {
                this.date.data.TextColor = colorScheme.onBackground
            }.bind(this)
            this.blank = new NeuContainer()
            this.blank.geometry.Height = '20%'
            this.lavenderScreen.addChild(this.blank)

            this.weatherBox = new NeuContainer()
            this.weatherBox.data.Symmetric = 'horizontal'
            this.weatherBox.data.AlignItems = 'center'
            this.weatherBox.data.Gap = '12rem'
            this.lavenderScreen.addChild(this.weatherBox)

            this.temperature = new NeuContainer()
            this.temperature.data.Content = '-1'
            this.temperature.data.FontSize = Typography.Size.TitleSmall
            this.temperature.data.TextColor = colorScheme.onBackground
            this.temperature.reRender = function() {
                this.temperature.data.TextColor = colorScheme.onBackground
            }.bind(this)
            this.weatherBox.addChild(this.temperature)

            this.weatherIcon = new MaterialSymbolsOutlined()
            this.weatherIcon.data.Content = 'air'
            this.weatherIcon.data.FontSize = Typography.Size.DisplayMedium
            this.weatherIcon.data.TextColor = colorScheme.onBackground
            this.weatherIcon.reRender = function() {
                this.weatherIcon.data.TextColor = colorScheme.onBackground
            }.bind(this)
            this.weatherBox.addChild(this.weatherIcon)

            this.weather = new NeuContainer()
            this.weather.data.Content = 'CLOUDY'
            this.weather.data.FontSize = Typography.Size.TitleSmall
            this.weather.data.TextColor = colorScheme.onBackground
            this.weather.reRender = function() {
                this.weather.data.TextColor = colorScheme.onBackground
            }.bind(this)
            this.weatherBox.addChild(this.weather)

        }.bind(this)
        initLavenderScreen()

        let initExtraScreen = function () {
            this.extraScreen.data.AlignItems = 'center'
            // this.extraScreen.geometry.Width = '100%'
            this.extraScreen.data.Padding = new Box().horizontal('7.5%')
            this.extraScreen.data.Gap = '12rem'

            this.albumImage = new NeuImage()
            this.albumImage.data.Src = 'https://upload.wikimedia.org/wikipedia/en/2/2a/Charlie_Puth_-_Light_Switch.png'
            this.albumImage.geometry.Width = '100%'
            this.albumImage.data.BorderRadius = '12rem'
            this.albumImage.data.ContextMenu = false
            this.extraScreen.addChild(this.albumImage)
            // this.albumImage.ActivateRipple()


            this.RippleNames = [
                'pointerdown',
                'pointerup',
                'pointerleave'
            ]

            this.albumImage.watchEvent('pointerdown', function() {
                anime({
                    targets: this.albumImage.element,
                    scale: 0.9,
                })
            }.bind(this))

            this.albumImage.watchEvent('pointerup', function() {
                anime({
                    targets: this.albumImage.element,
                    scale: 1,
                })
            }.bind(this))

            this.albumImage.watchEvent('pointerup', function() {
                anime({
                    targets: this.albumImage.element,
                    scale: 1,
                })
            }.bind(this))

            this.albumImage.watchEvent('pointerout', function() {
                anime({
                    targets: this.albumImage.element,
                    scale: 1,
                })
            }.bind(this))



            this.informationLine = new NeuContainer()
            this.informationLine.data.Symmetric = 'vertical'
            this.informationLine.geometry.Width = '100%'
            this.informationLine.data.Gap = '4rem'
            this.extraScreen.addChild(this.informationLine)

            this.albumTitle = new NeuContainer()
            this.albumTitle.data.Content = 'Light Switch'
            this.albumTitle.data.TextColor = colorScheme.onBackground
            this.albumTitle.reRender = function() {
                this.albumTitle.data.TextColor = colorScheme.onBackground

            }.bind(this)
            this.albumTitle.data.FontSize = Typography.Size.TitleLarge
            this.informationLine.addChild(this.albumTitle)

            this.albumAuthor = new NeuContainer()
            this.albumAuthor.data.Content = 'Charlie Puth'
            this.albumAuthor.data.TextColor = colorScheme.onBackground
            this.albumAuthor.data.FontSize = Typography.Size.TitleSmall
            this.albumAuthor.reRender = function() {
                this.albumAuthor.data.TextColor = colorScheme.onBackground

            }.bind(this)
            this.informationLine.addChild(this.albumAuthor)

            this.toolLine = new NeuContainer()
            this.toolLine.data.Symmetric = 'horizontal'
            this.toolLine.geometry.Width = '100%'
            this.extraScreen.addChild(this.toolLine)

            this.shuffleTool = new TextButton()
            this.shuffleToolIcon = new MaterialSymbolsOutlined()
            this.shuffleToolIcon.data.Content = 'shuffle'
            this.shuffleTool.data.AlignItems = 'center'
            this.shuffleToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.shuffleTool.cascade.Text.addChild(this.shuffleToolIcon)
            this.shuffleTool.geometry.AspectRatio = '1'
            this.shuffleTool.geometry.Width = '20%'
            this.toolLine.addChild(this.shuffleTool)

            this.previousTool = new TextButton()
            this.previousToolIcon = new MaterialSymbolsOutlined()
            this.previousToolIcon.data.Content = 'skip_previous'
            this.previousTool.data.AlignItems = 'center'
            this.previousToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.previousTool.cascade.Text.addChild(this.previousToolIcon)
            this.previousTool.geometry.AspectRatio = '1'
            this.previousTool.geometry.Width = '20%'
            this.toolLine.addChild(this.previousTool)

            this.pauseTool = new FilledButton()
            this.pauseToolIcon = new MaterialSymbolsOutlined()
            this.pauseToolIcon.data.Content = 'play_arrow'
            this.pauseTool.data.AlignItems = 'center'
            this.pauseToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.pauseTool.cascade.Text.addChild(this.pauseToolIcon)
            this.pauseTool.geometry.AspectRatio = '1'
            this.pauseTool.geometry.Width = '20%'
            this.toolLine.addChild(this.pauseTool)

            this.nextTool = new TextButton()
            this.nextToolIcon = new MaterialSymbolsOutlined()
            this.nextToolIcon.data.Content = 'skip_next'
            this.nextTool.data.AlignItems = 'center'
            this.nextToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.nextTool.cascade.Text.addChild(this.nextToolIcon)
            this.nextTool.geometry.AspectRatio = '1'
            this.nextTool.geometry.Width = '20%'
            this.toolLine.addChild(this.nextTool)

            this.repeatTool = new TextButton()
            this.repeatToolIcon = new MaterialSymbolsOutlined()
            this.repeatToolIcon.data.Content = 'repeat'
            this.repeatTool.data.AlignItems = 'center'
            this.repeatToolIcon.data.FontSize = Typography.Size.TitleMedium
            this.repeatTool.cascade.Text.addChild(this.repeatToolIcon)
            this.repeatTool.geometry.AspectRatio = '1'
            this.repeatTool.geometry.Width = '20%'
            this.toolLine.addChild(this.repeatTool)

            this.repeatTool.watchEvent('click', function( ) {
                prompt('Repeat time? (0~99)')
            }.bind(this))



            this.informationLine = new NeuContainer()
        }.bind(this)
        initExtraScreen()

        let initPaletteScreen = function() {
            // this.paletteScreen.
        }.bind(this)
        initPaletteScreen()

        this.btm = new NavigationBar()
        this.foot.addChild(this.btm)

        this.items = []

        let that = this

        function bodyFadeIn() {
            that.layout.body.geometry.Transform = 'scale(0.75)'
            anime({
                targets: that.layout.body.element,
                scale: 1,
            })
        }



        this.navBarItem1 = new NavigationBarItem()
        this.navBarItem1.Icon.data.Content = 'spa'
        this.navBarItem1.Label.data.Content = 'Lavender'
        this.btm.addChild(this.navBarItem1)
        this.navBarItem1.watchEvent('click', function() {
            if (!this.layout.body.scout) {
                this.body.addChild(this.lavenderScreen)
            }
            window.modal.addInteractiveModal(this.layout.body.scout)
            let mimic = window.modal.getLayer(this.layout.body.scout)
            mimic.geometry.Overflow = 'hidden'
            this.body.clearChildren()
            this.body.addChild(this.lavenderScreen)
            window.addEventListener('resize', () => {
                let bound = this.layout.body.getBoundingClientRect()
                mimic.geometry.Top = bound.y + 'px'
                mimic.geometry.Left = bound.x + 'px'
                mimic.geometry.Width = bound.width + 'px'
                mimic.geometry.Height = this.layout.body.element.clientHeight + 'px'
            })
            window.dispatchEvent(new Event('resize'))
            mimic.data.BackgroundColor = this.layout.body.data.BackgroundColor
            anime({
                targets: mimic.element,
                easing: 'linear',
                duration: DURATION,
                translateX: '100%',
                complete: (anime) => {
                    this.menuIcon.data.Content = 'spa'
                    this.appbar.setHeadline('Lavender')
                    window.modal.removeModal(mimic.scout)
                }
            })
        }.bind(this))
        // this.navBarItem1.element.click()

        let badge = new SmallBadge()
        this.navBarItem1.relate(function() {
            console.log(badge)
            let badgeInfo = this.navBarItem1.getBoundingClientRect()
            badge.geometry.Top = badgeInfo.top + badgeInfo.height / 2 - 24 + 'px'
            badge.geometry.Left = badgeInfo.width / 2 + badge.getBoundingClientRect().width+ 'px'
        }.bind(this))
        // this.addWaitForEvent(function() {
        //
        // }.bind(this))
        window.modal.addInteractiveModal(badge)
        // let badgeLayout = window.modal.getLayer(badge)

        this.navBarItem2 = new NavigationBarItem()
        this.navBarItem2.Icon.data.Content = 'token'
        this.navBarItem2.Label.data.Content = 'Home'
        this.btm.addChild(this.navBarItem2)
        this.navBarItem2.watchEvent('click', function() {
            if (!this.layout.body.scout) {
                this.body.addChild(this.homeScreen)
            }
            window.modal.addInteractiveModal(this.layout.body.scout)
            let mimic = window.modal.getLayer(this.layout.body.scout)
            mimic.geometry.Overflow = 'hidden'
            this.body.clearChildren()
            this.body.addChild(this.homeScreen)
            window.addEventListener('resize', () => {
                let bound = this.layout.body.getBoundingClientRect()
                mimic.geometry.Top = bound.y + 'px'
                mimic.geometry.Left = bound.x + 'px'
                mimic.geometry.Width = bound.width + 'px'
                mimic.geometry.Height = this.layout.body.element.clientHeight + 'px'
            })
            window.dispatchEvent(new Event('resize'))
            mimic.data.BackgroundColor = this.layout.body.data.BackgroundColor
            anime({
                targets: mimic.element,
                easing: 'linear',
                duration: DURATION,
                translateX: '100%',
                complete: (anime) => {
                    this.menuIcon.data.Content = 'specific_gravity'
                    this.appbar.setHeadline('Material 3')
                    window.modal.removeModal(mimic.scout)
                }
            })
        }.bind(this))
        this.navBarItem2.element.click()

        this.navBarItem3 = new NavigationBarItem()
        this.navBarItem3.Icon.data.Content = 'water_drop'
        this.navBarItem3.Label.data.Content = 'Preference'
        this.btm.addChild(this.navBarItem3)
        this.navBarItem3.watchEvent('click', function() {
            if (!this.layout.body.scout) {
                this.body.addChild(this.extraScreen)
            }
            window.modal.addInteractiveModal(this.layout.body.scout)
            let mimic = window.modal.getLayer(this.layout.body.scout)
            mimic.geometry.Overflow = 'hidden'
            this.body.clearChildren()
            this.body.addChild(this.extraScreen)
            window.addEventListener('resize', () => {
                let bound = this.layout.body.getBoundingClientRect()
                mimic.geometry.Top = bound.y + 'px'
                mimic.geometry.Left = bound.x + 'px'
                mimic.geometry.Width = bound.width + 'px'
                mimic.geometry.Height = this.layout.body.element.clientHeight + 'px'
            })
            window.dispatchEvent(new Event('resize'))
            mimic.data.BackgroundColor = this.layout.body.data.BackgroundColor
            anime({
                targets: mimic.element,
                easing: 'linear',
                duration: DURATION,
                translateX: '100%',
                complete: (anime) => {
                    this.menuIcon.data.Content = 'spa'
                    this.appbar.setHeadline('Lavender')
                    window.modal.removeModal(mimic.scout)
                }
            })

        }.bind(this))


        // this.navBarItem4 = new NavigationBarItem()
        // this.navBarItem4.Icon.data.Content = 'palette'
        // this.navBarItem4.Label.data.Content = 'Palette'
        // this.btm.addChild(this.navBarItem4)
        // this.navBarItem4.watchEvent('click', function() {
        //     this.menuIcon.data.Content = 'palette'
        //     this.appbar.setHeadline("Year's Color Palette")
        //     this.body.clearChildren()
        //     this.body.addChild(this.paletteScreen)
        //     bodyFadeIn()
        //
        // }.bind(this))


        // function recursive(children) {
        //     children.forEach(e => {
        //         console.log(e.children.length)
        //         if (e.children.length == 0) {
        //             console.warn('killed')
        //             return
        //         } else {
        //             console.log('logged')
        //             setInterval(function() {
        //                 this.data.Border = '1px solid red'
        //             }.bind(e), 100)
        //             recursive(e.children)
        //         }
        //     })
        // }
        // setInterval(function() {
        //     recursive([this.layout])
        // }.bind(this), 1000)

        this.setLayout(this.layout)

        this.draw('#App')
    }
}
// export let rapp = runApp(new M3())
export let app = runApp(new Material3())

// window.onbeforeunload = function(e) {
//     e.preventDefault()
//     console.log(e)
//     // return false
//     // e.returnValue = ''
//     return undefined
// };

// window.onunload = function(e) {
//     e.preventDefault()
//     console.log(e.defaultPrevented)
// }
