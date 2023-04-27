import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { colorScheme } from "../../Styles/Color.js"
import { Box } from "../../../../../../Tool/Box.js"

export class Divider extends NeuContainer {
    constructor() {
        super()
        this.name = 'Divider'

        this.geometry.Width = '100%'
        this.geometry.Height = '1rem'
        this.geometry.MinHeight = '1rem'
        this.data.BackgroundColor = colorScheme.outlineVariant
        this.data.Margin = new Box().vertical('4rem')
    }

    reRender() {
        super.reRender()
        this.data.BackgroundColor = colorScheme.outlineVariant

    }
}