import { NeuContainer } from "../../../../../Native/NeuContainer.js"
// import { Padding } from "../../../../../../Tool/Padding.js"
import { colorScheme } from "../../../Styles/Color.js"

import { Level1 } from "../../../Styles/Elevation.js"
import { Typography } from "../../../Styles/Typography.js"
import { Box } from "../../../../../../../Tool/Box.js"
import { transit } from "../../../Styles/Motion/Transition.js"


export class CommonButton extends NeuContainer {
    bIsEnabled: boolean

    constructor() {
        super()
        this.name = 'CommonButton'

        this.bIsEnabled = true


        this.cascade = {
            Leading: new NeuContainer('Leading'),
            Text: new NeuContainer('Text'),
            Trailing: new NeuContainer('Trailing')
        }
        this.useCascade()

        this.geometry.Cursor = 'pointer'
        this.geometry.Height = '40rem'
        this.geometry.MinHeight = '40rem'
        this.geometry.Padding = new Box().horizontal('24rem')
        this.data.Gap = '4rem'

        this.data.FontSize = Typography.Size.LabelLarge
        this.data.TextAlign = 'center'
        this.data.TextColor = colorScheme.primary
        this.data.FontWeight = '500'

        this.data.AlignItems = 'center'
        this.data.BorderRadius = '20rem'
        this.data.JustifyContent = 'center'
        this.data.Symmetric = 'horizontal'
        this.data.BackgroundColor = colorScheme.surface
        // this.data.Shadow = Level1


        this.addChildren([
            this.cascade.Leading,
            this.cascade.Text,
            this.cascade.Trailing
        ])

        this.ActivateRipple()
    }

    reRender() {
        if (this.bIsEnabled) {
            this.Enable()
        } else {
            this.Disable()
        }
    }
    Enable() {
        this.bIsEnabled = true
    }

    Disable() {
        this.bIsEnabled = false
    }
}
