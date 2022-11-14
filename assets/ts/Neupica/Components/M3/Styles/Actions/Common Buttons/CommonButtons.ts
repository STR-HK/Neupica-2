import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { Padding } from "../../../../../../Tool/Padding.js"
import { colorScheme } from "../../../Components/Color.js"

import { Level1 } from "../../../Components/Elevation.js"


export class CommonButton extends NeuContainer {
    constructor() {
        super()
        this.name = 'CommonButton'

        this.data.Text = "Common Button"
        this.geometry.Height = '40rem'
        this.data.FontSize = '14rem'
        this.geometry.Padding = new Padding().horizontal('24rem')

        this.data.BorderRadius = '20rem'
        this.data.JustifyContent = 'center'
        this.data.FontWeight = '500'

        this.data.BackgroundColor = colorScheme.surface
        this.data.TextColor = colorScheme.primary

        this.data.Shadow = Level1


        this.cover.style.cursor = "pointer"

        this.getBound().setAttribute('onpointerdown', `ripplet(arguments[0], ${JSON.stringify(
            {
                // "color":"black",
                "opacity":"0.15",
                "spreadingDuration":".225s",
                "spreadingDelay":"0s",
                // "spreadingTimingFunction":"cubic-bezier(0.03,-0.01, 0, 0.89)",
                "clearing":false,
                "clearingDuration":".225s",
                "clearingDelay":".150s",
                // "clearingTimingFunction":"ease-in-out",
                "centered":false,
                "appendTo":"target"
            }
        )})`)
        this.getBound().setAttribute('onpointerup', "ripplet.clear(this)")
        this.getBound().setAttribute('onpointerleave', "ripplet.clear(this)")
    }
}
