import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { Padding } from "../../../../../../Tool/Padding.js"
import { Navigation } from "./Navigation.js"
import { colorScheme } from "../../Styles/Color.js"
import { MaterialSymbolsOutlined } from "../../Styles/Icons.js"

export class NavigationBar extends Navigation {
    constructor() {
        super()
        this.name = 'NavigationBar'

        this.geometry.Height = '80rem'
        this.data.BackgroundColor = colorScheme.inverseOnSurface
        this.data.Padding = new Padding().TBLR('12rem', '16rem', )

        this.watchEvent('click', function() {
            this.children.forEach(child => {
                if (child instanceof NavigationBarItem) {
                    child.InActive()
                }
            })
        }.bind(this))
    }
}

export class NavigationBarItem extends NeuContainer {
    ActiveIndicator: NeuContainer
    Label: NeuContainer
    Icon: NeuContainer
    State: boolean
    constructor() {
        super()
        this.State = false
        this.ActivateRipple()

        // this.data.
        this.geometry.Cursor = 'pointer'

        this.geometry.Height = '80rem'
        this.data.Gap = '8rem'
        this.data.AlignItems = 'center'
        this.data.JustifyContent = 'center'
        this.geometry.MinWidth = '20%'
        this.geometry.Width = '100%'

        this.ActiveIndicator = new NeuContainer()
        this.ActiveIndicator.data.BorderRadius = '16rem'
        this.ActiveIndicator.geometry.Width = '64rem'
        this.ActiveIndicator.geometry.Height = '32rem'
        this.ActiveIndicator.data.AlignItems = 'center'
        this.ActiveIndicator.data.JustifyContent = 'center'

        this.Icon = new MaterialSymbolsOutlined('light_mode')
        this.Icon.data.FontSize = '24rem'
        this.ActiveIndicator.addChild(this.Icon)
        this.Icon.data.TextColor = colorScheme.onSurfaceVariant

        this.Label = new NeuContainer()
        this.Label.data.Text = 'Label'
        this.Label.data.FontSize = '12rem'
        this.Label.data.TextColor = colorScheme.onSurfaceVariant

        this.addChild(this.ActiveIndicator)
        this.addChild(this.Label)

        this.watchEvent('click', this.Clicked.bind(this))
    }

    click() {
        // console.log(this.cover)
        this.cover.click()
    }

    Clicked() {
        this.Active()
        this.State = !this.State
    }

    Active() {
        this.Icon.data.TextColor = colorScheme.onSecondaryContainer
        this.Label.data.TextColor = colorScheme.onSurface
        this.ActiveIndicator.data.BackgroundColor = colorScheme.secondaryContainer
    }

    InActive() {
        this.Icon.data.TextColor = colorScheme.onSurfaceVariant
        this.Label.data.TextColor = colorScheme.onSurfaceVariant
        this.ActiveIndicator.data.BackgroundColor = 'transparent'

    }
}