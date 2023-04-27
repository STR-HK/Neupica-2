import { CommonButton } from "./CommonButton.js"
import { colorScheme } from "../../../Styles/Color.js"
import { Level0 } from "../../../Styles/Elevation.js"
import { transit } from "../../../Styles/Motion/Transition.js"

export class OutlinedButton extends CommonButton {
    constructor() {
        super()

        this.Enable()
    }

    Enable() {
        super.Enable()
        transit(this, {
            'background': colorScheme.surface,
            // 'shadow': Level0,
            'color': colorScheme.primary,
            'borderColor': colorScheme.outline,
            // 'borderWidth': '1rem',
            // 'borderStyle': 'solid',
        })
        // this.data.BackgroundColor = colorScheme.surface
        // this.data.BorderColor = colorScheme.outline
        this.data.BorderWidth = '1rem'
        this.data.BorderStyle = 'solid'
        // this.data.Shadow = Level0
        // this.data.TextColor = colorScheme.primary
        this.Interactive()
    }
    Disable() {
        super.Disable()
        transit(this, {
            'background': colorScheme.surface,
            // 'shadow': Level0,
            'color': colorScheme.onSurface + '61',
            'borderColor': colorScheme.onSurface + '1F',
            // 'borderWidth': '1rem',
            // 'borderStyle': 'solid',
        })
        // this.data.BackgroundColor = colorScheme.surface
        // this.data.BorderColor = colorScheme.onSurface + '1F'
        this.data.BorderWidth = '1rem'
        this.data.BorderStyle = 'solid'
        // this.data.Shadow = Level0
        // this.data.TextColor = colorScheme.onSurface + '61'
        this.DeInteractive()
    }
}