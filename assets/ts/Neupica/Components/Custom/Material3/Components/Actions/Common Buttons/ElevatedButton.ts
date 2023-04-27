import { CommonButton } from "./CommonButton.js"
import { colorScheme } from "../../../Styles/Color.js"
import { Level0, Level1 } from "../../../Styles/Elevation.js"
import { transit } from "../../../Styles/Motion/Transition.js"

export class ElevatedButton extends CommonButton {
    bIsEnabled: boolean
    constructor() {
        super()
        this.Enable()

    }

    Enable() {
        super.Enable()
        this.data.Shadow = Level1
        transit(this, {
            'background': colorScheme.primary + '14',
            'shadow': Level1,
            'color': colorScheme.primary,
        })
        this.Interactive()
    }

    Disable() {
        super.Disable()
        this.data.Shadow = Level0
        transit(this, {
            'background': colorScheme.onSurface + '1F',
            'shadow': Level0,
            'color': colorScheme.onSurface + '61',
        })
        this.DeInteractive()
    }
}