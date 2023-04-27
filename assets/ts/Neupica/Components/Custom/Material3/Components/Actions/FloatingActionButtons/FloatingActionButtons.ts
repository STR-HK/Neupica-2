import { NeuContainer } from "../../../../../Native/NeuContainer.js"
import { Box } from "../../../../../../../Tool/Box.js"
import { Icon, MaterialSymbolsOutlined } from "../../../Styles/Icons.js"
import { colorScheme } from "../../../Styles/Color.js"
import { Level1, Level3, Level5 } from "../../../Styles/Elevation.js"
import { Typography } from "../../../Styles/Typography.js"
import { transit } from "../../../Styles/Motion/Transition.js"

export class FloatingActionButtons extends NeuContainer {
    Icon: Icon
    Container: NeuContainer
    constructor() {
        super()
        this.Container = new NeuContainer()

        this.Icon = new MaterialSymbolsOutlined()
        this.Icon.data.TextColor = colorScheme.onPrimaryContainer
        this.Icon.data.FontSize = Typography.Size.HeadlineSmall
        this.Icon.data.Content = 'edit'

        this.Container.geometry.Width = '56rem'
        this.Container.geometry.Height = '56rem'
        this.Container.geometry.Margin = new Box().RBLT('16rem', '16rem')

        this.Container.data.JustifyContent = 'center'
        this.Container.data.AlignItems = 'center'

        this.Container.data.BorderRadius = '16rem'
        this.Container.data.BackgroundColor = colorScheme.primaryContainer
        // this.Container.data.BackgroundColor = colorScheme.secondaryContainer
        // this.Container.data.BackgroundColor = colorScheme.tertiaryContainer
        this.Container.data.Shadow = Level3

        this.Container.addChild(this.Icon)
        this.Container.ActivateRipple()
        this.Container.geometry.Cursor = 'pointer'


        this.addChild(this.Container)
    }

    reRender() {
        super.reRender()

        transit(this.Icon, {
            'color': colorScheme.onPrimaryContainer
        })
        transit(this.Container, {
            'backgroundColor': colorScheme.primaryContainer
        })

        // this.Icon.data.TextColor = colorScheme.onPrimaryContainer
        // this.Container.data.BackgroundColor = colorScheme.primaryContainer


    }
}