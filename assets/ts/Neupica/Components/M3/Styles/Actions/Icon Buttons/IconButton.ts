import { NeuContainer } from "../../../../Native/NeuContainer.js"
import { Padding } from "../../../../../../Tool/Padding.js"
import { colorScheme } from "../../../Components/Color.js"
import { Level1 } from "../../../Components/Elevation.js"

export class IconButton extends NeuContainer {
    Icon: NeuContainer
    constructor(icon) {
        super()
        this.name = 'IconButton'

        this.Icon = new NeuContainer()
        this.Icon.data.BorderRadius = '50%'
        this.Icon.geometry.Width = '40rem'
        this.Icon.geometry.Height = '40rem'
        this.Icon.data.AlignItems = 'center'
        this.Icon.data.JustifyContent = 'center'
        this.addChild(this.Icon)
        this.Icon.addChild(icon)

        this.geometry.Padding = new Padding().horizontal('4rem')

        this.data.BorderRadius = '50%'
        this.data.JustifyContent = 'center'
        this.data.AspectRatio = '1 / 1'

        // @ts-ignore
        this.cover.style.webkitTapHighlightColor = "transparent"
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
                "centered":true,
                "appendTo":"target"
            }
        )})`)
        this.getBound().setAttribute('onpointerup', "ripplet.clear(this)")
        this.getBound().setAttribute('onpointerleave', "ripplet.clear(this)")
    }
}
