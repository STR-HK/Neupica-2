import { NeuContainer } from "../../../../Native/NeuContainer.js"
// import { Padding } from "../../../../../../Tool/Padding.js"
import { colorScheme } from "../../../Components/Color.js"

import { Level1 } from "../../../Components/Elevation.js"
import { Typography } from "../../../Components/Typography.js"
import { Padding } from "../../../../../../Tool/Padding.js"


export class CommonButton extends NeuContainer {
    constructor() {
        super()
        this.name = 'CommonButton'

        // this.data.Text = "Common Button"
        this.geometry.Height = '40rem'
        this.geometry.MinHeight = '40rem'
        this.data.FontSize = Typography.Size.LabelLarge
        this.geometry.Padding = new Padding().horizontal('24rem')

        this.data.BorderRadius = '20rem'
        this.data.JustifyContent = 'center'
        this.data.FontWeight = '500'

        this.data.BackgroundColor = colorScheme.surface
        this.data.TextColor = colorScheme.primary
        this.data.Shadow = Level1

        this.geometry.Cursor = 'pointer'
        this.ActivateRipple()
    }
}
