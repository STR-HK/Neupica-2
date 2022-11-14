import { NeuContainer } from "../../../Native/NeuContainer.js"
import { colorScheme } from "../../Components/Color.js"
import { Padding } from "../../../../../Tool/Padding.js"
import { MaterialSymbolsOutlined } from "../../Components/Icons.js"
import { IconButton } from "../Actions/Icon Buttons/IconButton.js"
import { CommonButton } from "../Actions/Common Buttons/CommonButtons.js"
import { FilledIconButton } from "../Actions/Icon Buttons/FilledIconButton.js"

export class TopAppBar extends NeuContainer {
    // declare data: {}
    HeadLine: NeuContainer
    Leading: NeuContainer
    Trailing: NeuContainer
    constructor() {
        super()
        this.name = "TopAppBars"

        this.data.FlexDirection = 'row'
        this.data.Gap = '24rem'
        this.data.AlignItems = 'center'
        this.geometry.Width = '100%'
        this.data.BackgroundColor = colorScheme.surface
        this.data.Padding = new Padding().VH('8rem', '4rem')

        this.Leading = new NeuContainer()
        this.Leading.data.TextColor = colorScheme.onSurface
        this.addChild(this.Leading)

        this.HeadLine = new NeuContainer()
        this.addChild(this.HeadLine)
        this.HeadLine.data.TextColor = colorScheme.onSurface
        this.HeadLine.data.Text = 'Title Large'
        this.HeadLine.data.FontSize = '22rem'
        this.HeadLine.geometry.Width = '100%'

        this.Trailing = new NeuContainer()
        this.Trailing.data.FlexDirection = 'row'
        this.Trailing.data.TextColor = colorScheme.onSurfaceVariant
        this.addChild(this.Trailing)
    }

    setHeadline(text) {
        this.HeadLine.data.Text = text
    }

    setLeading(leading) {
        this.clearChild()
        this.Leading.addChild(leading)
    }

    addTrailing(trailing) {
        this.Trailing.addChild(trailing)
    }

    addTrailings(trailing_list: Array<any>) {
        trailing_list.forEach(e => {
            this.Trailing.addChild(e)
        })
    }
}