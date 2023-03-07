import { CommonButton } from "./CommonButton.js"
import { colorScheme } from "../../../Styles/Color.js"
import { Level0 } from "../../../Styles/Elevation.js"

export class OutlinedButton extends CommonButton {
    constructor() {
        super()

        this.Enable()
    }

    Enable() {
        this.data.BackgroundColor = colorScheme.surface
        this.data.BorderColor = colorScheme.outline
        this.data.BorderWidth = '1rem'
        this.data.BorderStyle = 'solid'
        this.data.Shadow = Level0
        this.Interactive()
    }
    Disable() {
        this.data.BackgroundColor = colorScheme.surface
        this.data.BorderColor = colorScheme.onSurface + '1F'
        this.data.BorderWidth = '1rem'
        this.data.BorderStyle = 'solid'
        this.data.Shadow = Level0
        this.data.TextColor = colorScheme.onSurface + '61'

        this.DeInteractive()
    }
}