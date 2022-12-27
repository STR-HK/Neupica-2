import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { MaterialSymbolsSharp } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import {
    IconButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { setTheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { themeFromImage } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/MCU/index.js"
import { NeuImage } from "../../assets/ts/Neupica/Components/Native/NeuImage.js"
import { themeColor } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { getStyle } from "../../assets/ts/Neupica/DOM/Contents.js"
import { List } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/List.js"
import { ListItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/List.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Padding } from "../../assets/ts/Tool/Padding.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import {
    NavigationBar
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import {
    NavigationBarItem
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { Level3 } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Elevation.js"
import { Level5 } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Elevation.js"
import { Level1 } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Elevation.js"
import { Icon } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"

setTheme('#974238')
getStyle('https://fonts.googleapis.com/css2?family=Pacifico&display=swap')
initModal()

class Screen extends NeuContainer {
    constructor() {
        super()
        this.geometry.Width = '100%'
        this.geometry.Height = '100%'
    }
}

class WinterlyVacation extends NeuApp {
    constructor() {
        super()
        this.documentBody.style.fontFamily = 'Pacifico'
        // this.documentBody.style.fontFamily = 'Pretendard'
        this.layout = new NeuScaffold()
        this.setFullScreen(true)

        // Header Part

        this.layout.head.data.BackgroundColor = colorScheme.background

        this.AppBarIcon = new MaterialSymbolsSharp('mode_heat_cool')
        this.AppBarIcon.data.FontSize = '26rem'
        this.AppBarIconButton = new IconButton(this.AppBarIcon)
        this.AppBarIconButton.watchEvent('click', function() {
            let Winterly = new NeuImage()
            Winterly.data.Src = 'Winterly.jpg'
            Winterly.geometry.Margin = '72rem 0rem 0rem 0rem'
            Winterly.data.BorderRadius = '4rem'
            Winterly.geometry.Width = 'calc(100% - 16rem)'
            window.modal.addInteractiveModal(Winterly)
            window.modal.getLayer(Winterly).data.AlignItems = 'center'
            Winterly.watchEvent('click', function(){
                window.modal.removeModal(Winterly)
            })
        })
        this.AppBar = new TopAppBar()
        this.AppBar.data.BackgroundColor = colorScheme.inverseOnSurface
        this.AppBar.data.BorderRadius = '0rem 0rem 8rem 8rem'
        this.AppBar.setHeadline('Winterly Vacation')
        this.AppBar.setLeading(this.AppBarIconButton)
        this.layout.head.addChild(this.AppBar)

        // Body Part

        this.layout.body.data.Padding = '8rem'
        this.layout.body.data.BackgroundColor = colorScheme.background

        this.taskScreen = new Screen()

        this.TaskList = new List()
        this.TaskList.data.BorderRadius = '4rem'
        this.TaskList.data.Border = '1px solid ' + colorScheme.inverseOnSurface
        this.taskScreen.addChild(this.TaskList)


        class WinterlyItem extends ListItem {
            constructor(text) {
                super()

                this.Headline.data.Text = text
                this.SupportingText.Hide()

                this.Users = []
                this.Progress = 0
                this.ProgressMax = 0

            }
            setOver(icon) {
                this.LeadingIcon = new MaterialSymbolsSharp(icon)
                this.LeadingIconButton = new IconButton(this.LeadingIcon)
                this.LeadingIconButton.data.BackgroundColor = colorScheme.onPrimaryContainer
                this.LeadingIconButton.data.TextColor = colorScheme.primaryContainer
                this.LeadingIconButton.DeActivateRipple()
                this.Leading.addChild(this.LeadingIconButton)

                this.Headline.data.TextColor = colorScheme.primary

                this.TrailingIcon = new MaterialSymbolsSharp('cloud_sync')
                this.TrailingIcon.data.TextColor = colorScheme.primary
                this.TrailingIconButton = new IconButton(this.TrailingIcon)
                this.TrailingIconButton.DeActivateRipple()
                this.Trailing.addChild(this.TrailingIconButton)
            }

            setUnder() {
                this.data.Padding = new Padding().LTRB('18rem', '2rem', '24rem', '2rem')

                this.LeadingIcon = new MaterialSymbolsSharp('')
                this.LeadingIconButton = new IconButton(this.LeadingIcon)
                this.LeadingIconButton.data.BackgroundColor = 'transparent'
                this.LeadingIconButton.data.TextColor = colorScheme.onSurfaceVariant
                this.LeadingIconButton.DeActivateRipple()
                this.Leading.addChild(this.LeadingIconButton)

                this.Headline.data.FontSize = Typography.Size.BodyMedium

                this.TrailingIcon = new MaterialSymbolsSharp('model_training')
                this.TrailingIcon.data.TextColor = colorScheme.onBackground
                this.TrailingIconButton = new IconButton(this.TrailingIcon)
                this.Trailing.addChild(this.TrailingIconButton)

                this.TrailingIconButton.watchEvent('click', function() {
                    this.TrailingIcon.data.Text = 'celebration'
                    this.TrailingIcon.data.TextColor = colorScheme.tertiary
                    this.Parent.updateProgress()

                }.bind(this))
            }

            updateProgress(){
                this.Progress += 1
                if (this.Progress == this.ProgressMax) {
                    this.TrailingIcon.data.Text = 'cloud_done'
                }
            }

            register(child){
                child.Parent = this
                this.Users.push(child)
                this.ProgressMax += 1

            }
        }

        this.TaskListItem1 = new WinterlyItem('Butterfly Effects')
        this.TaskListItem1.setOver('flare')
        this.TaskList.addChild(this.TaskListItem1)

        this.TaskListItem2 = new WinterlyItem( 'Chapter 01 - 76:55')
        this.TaskListItem2.setUnder()
        this.TaskListItem1.register(this.TaskListItem2)
        this.TaskList.addChild(this.TaskListItem2)

        this.TaskListItem3 = new WinterlyItem( 'Chapter 02 - 73:11')
        this.TaskListItem3.setUnder()
        this.TaskListItem1.register(this.TaskListItem3)
        this.TaskList.addChild(this.TaskListItem3)

        this.TaskListItem4 = new WinterlyItem( 'Chapter 03 - 70:15')
        this.TaskListItem4.setUnder()
        this.TaskListItem1.register(this.TaskListItem4)
        this.TaskList.addChild(this.TaskListItem4)

        // Footer Part
        this.layout.foot.data.BackgroundColor = colorScheme.background

        this.NavigationBar = new NavigationBar()
        this.NavigationBar.data.BorderRadius = '8rem 8rem 0rem 0rem'
        this.NavigationBarItem1 = new NavigationBarItem()
        this.NavigationBarItem1.watchEvent('click', function() {
            this.layout.body.setChild(0, this.taskScreen)
        }.bind(this))
        this.NavigationBarItem1.Icon.data.Text = 'auto_stories'
        this.NavigationBarItem1.Label.data.Text = 'Tasks List'
        this.NavigationBarItem1.click()
        this.NavigationBar.addChild(this.NavigationBarItem1)
        this.layout.foot.addChild(this.NavigationBar)

        this.draw('#App')
    }
}

export let app = runApp(new WinterlyVacation())