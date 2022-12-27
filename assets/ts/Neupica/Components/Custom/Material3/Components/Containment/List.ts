import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { colorScheme } from "../../Styles/Color.js"
import { Level0 } from "../../Styles/Elevation.js"
import { Typography } from "../../Styles/Typography.js"
import { Padding } from "../../../../../../Tool/Padding.js"
import { Divider } from "./Divider.js"

export class List extends NeuContainer {
    constructor() {
        super()
        this.data.BackgroundColor = colorScheme.surface
        this.data.Shadow = Level0

        this.geometry.Width = '100%'



    }

    // addChild(child) {
    //     super.addChild(child)
    //     let div = new Divider()
    //     div.data.BackgroundColor = colorScheme.inverseOnSurface
    //     super.addChild(div)
    // }
}

export class ListItem extends NeuContainer {
    Headline: NeuContainer
    SupportingText: NeuContainer
    Leading: NeuContainer
    Trailing: NeuContainer
    Contents: NeuContainer
    constructor() {
        super()

        this.data.Symmetric = 'horizontal'
        this.geometry.Width = '100%'
        this.data.JustifyContent = 'space-between'


        this.data.Padding = new Padding().LTRB('16rem', '8rem', '24rem', '8rem')
        this.data.Gap = '16rem'

        this.Left = new NeuContainer()
        this.Left.data.Symmetric = 'horizontal'
        this.Left.data.Gap = '16rem'

        this.Right = new NeuContainer()

        this.Contents = new NeuContainer()
        this.Contents.data.JustifyContent = 'center'


        this.Headline = new NeuContainer()
        this.Headline.data.TextColor = colorScheme.onSurface
        this.Headline.data.FontSize = Typography.Size.BodyLarge
        this.Contents.addChild(this.Headline)

        this.SupportingText = new NeuContainer()
        this.SupportingText.data.TextColor = colorScheme.onSurfaceVariant
        this.SupportingText.data.FontSize = Typography.Size.BodyMedium
        this.Contents.addChild(this.SupportingText)


        this.Leading = new NeuContainer()
        this.Leading.data.TextColor = colorScheme.onSurface


        this.Trailing = new NeuContainer()
        this.Trailing.data.TextColor = colorScheme.onSurface

        this.Left.addChild(this.Leading)
        this.Left.addChild(this.Contents)
        this.Right.addChild(this.Trailing)

        this.addChild(this.Left)
        this.addChild(this.Right)

        this.geometry.Cursor = 'pointer'


        // this.Divider
        this.ActivateRipple()
    }
}