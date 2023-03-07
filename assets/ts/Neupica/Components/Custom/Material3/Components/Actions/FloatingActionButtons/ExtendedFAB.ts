import { FloatingActionButtons } from "./FloatingActionButtons.js"
import { NeuContainer } from "../../../../../Native/NeuContainer.js"
import { colorScheme } from "../../../Styles/Color.js"
import { Typography } from "../../../Styles/Typography.js"
import { Box } from "../../../../../../../Tool/Box.js"

export class ExtendedFAB extends FloatingActionButtons {
    LabelText: NeuContainer
    constructor() {
        super()

        this.Container.data.Symmetric = 'horizontal'
        this.Container.geometry.MinWidth = '80rem'
        this.Container.geometry.Width = 'auto'
        this.Container.data.Padding = new Box().horizontal('16rem')
        this.Container.data.Gap = '12rem'

        this.LabelText = new NeuContainer()
        this.LabelText.data.Content = 'Laberu'
        this.LabelText.data.TextColor = colorScheme.onPrimaryContainer
        this.LabelText.data.FontSize = Typography.Size.LabelLarge
        this.Container.addChild(this.LabelText)
    }
}