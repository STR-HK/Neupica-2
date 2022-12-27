import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { colorScheme } from "../../Styles/Color.js"
import { Level2 } from "../../Styles/Elevation.js"
import { Padding } from "../../../../../../Tool/Padding.js"
// import { MaterialSymbolsOutlined } from "../../Components/Icons"
import { NeuText } from "../../../../Native/NeuText"
import { MaterialSymbolsOutlined } from "../../Styles/Icons.js"
import { Divider } from "../Containment/Divider.js"
import { Typography } from "../../Styles/Typography.js"

export class Menu extends NeuContainer {
    public Container: NeuContainer
    constructor() {
        super()

        this.Container = new NeuContainer()

        this.Container.data.BackgroundColor = colorScheme.surface
        this.Container.data.Shadow = Level2
        this.Container.data.BorderRadius = '4rem'

        this.Container.geometry.MinWidth = '112rem'
        this.Container.geometry.Width = '212rem'
        this.Container.geometry.MaxWidth = '280rem'

        this.addChild(this.Container)
    }
}

export class MenuItem extends NeuContainer {
    LeadingIcon: MaterialSymbolsOutlined
    LabelText: NeuContainer
    TrailingText: NeuContainer
    TrailingIcon: MaterialSymbolsOutlined
    CascadingMenuIcon: MaterialSymbolsOutlined
    constructor() {
        super()

        this.geometry.Height = '48rem'
        this.geometry.Width = '100%'
        this.data.Padding = new Padding().VH('4rem', '12rem')
        this.data.Symmetric = 'horizontal'
        this.data.AlignItems = 'center'

        this.LeadingIcon = new MaterialSymbolsOutlined('visibility')
        this.LeadingIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.addChild(this.LeadingIcon)

        this.LeadingPadding = new NeuContainer()
        this.LeadingPadding.geometry.Width = '12rem'
        this.addChild(this.LeadingPadding)

        this.LabelText = new NeuContainer()
        this.LabelText.data.TextColor = colorScheme.onSurface
        this.LabelText.data.Text = 'Item 1'
        this.LabelText.geometry.MinWidth = 'fit-content'
        this.LabelText.data.FontSize = Typography.Size.LabelLarge
        this.addChild(this.LabelText)

        this.Trailer = new NeuContainer()
        this.Trailer.geometry.Width = '100%'
        this.addChild(this.Trailer)

        this.TrailingText = new NeuContainer()
        this.TrailingText.data.TextColor = colorScheme.onSurfaceVariant


        this.TrailingIcon = new MaterialSymbolsOutlined('cut')
        this.TrailingIcon.data.TextColor = colorScheme.onSurfaceVariant
        this.addChild(this.TrailingIcon)

        this.CascadingMenuIcon = new MaterialSymbolsOutlined('arrow_right')
        this.CascadingMenuIcon.data.TextColor = colorScheme.onSurfaceVariant

        // For ripple
        this.data.TextColor = colorScheme.onSurfaceVariant
        this.ActivateRipple()

        this.geometry.Cursor = 'pointer'

    }
}

export class MenuDivider extends Divider {
    constructor() {
        super()

        this.geometry.Margin = new Padding().vertical('8rem')
    }
}