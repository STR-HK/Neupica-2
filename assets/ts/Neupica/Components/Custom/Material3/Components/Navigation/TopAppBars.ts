import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { blendColors, blendHEXColors, colorScheme } from "../../Styles/Color.js"
import { Box } from "../../../../../../Tool/Box.js"
import { MaterialSymbolsOutlined } from "../../Styles/Icons.js"
import { IconButton } from "../Actions/Icon Buttons/IconButton.js"
import { CommonButton } from "../Actions/Common Buttons/CommonButton.js"
import { FilledIconButton } from "../Actions/Icon Buttons/FilledIconButton.js"
import { Navigation } from "./Navigation.js"
import { Native } from "../../../../Native/Native"

export class TopAppBar extends Navigation {
    // declare data: {}
    HeadLine: NeuContainer
    Leading: NeuContainer
    Trailing: NeuContainer
    private bIsScrolling: boolean
    constructor() {
        super()
        this.name = "TopAppBar"

        this.bIsScrolling = false

        this.geometry.Height = '64rem'
        this.data.BackgroundColor = colorScheme.surface
        this.data.Padding = new Box().VH('8rem', '4rem')

        this.Leading = new NeuContainer()
        this.Leading.data.TextColor = colorScheme.onSurface
        this.addChild(this.Leading)

        this.HeadLine = new NeuContainer()
        this.addChild(this.HeadLine)
        this.HeadLine.data.TextColor = colorScheme.onSurface
        // this.HeadLine.Text.data.Content = title
        this.HeadLine.data.FontSize = '22rem'
        this.HeadLine.geometry.Width = '100%'
        this.HeadLine.data.Margin = new Box().left('12rem')

        this.Trailing = new NeuContainer()
        this.Trailing.data.FlexDirection = 'row'
        this.Trailing.data.TextColor = colorScheme.onSurfaceVariant
        this.addChild(this.Trailing)
    }

    Scrolling() {
        if (!this.bIsScrolling) {
            this.bIsScrolling = true
            this.data.BackgroundColor = blendHEXColors([
                colorScheme.surface,
                colorScheme.primary + '14'
            ])
        }
    }
    UnScrolling () {
        if (this.bIsScrolling) {
            this.bIsScrolling = false
            this.data.BackgroundColor = colorScheme.surface
        }
    }

    setHeadline(text: string) {
        this.HeadLine.data.Content = text
    }

    setLeading(leading: Native) {
        this.Leading.clearChildren()
        this.Leading.addChild(leading)
        return this
    }

    addTrailing(trailing: Native) {
        this.Trailing.addChild(trailing)
    }

    addTrailings(trailing_list: Array<Native>) {
        trailing_list.forEach(e => {
            this.Trailing.addChild(e)
        })
        return this
    }
}