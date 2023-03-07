import { CommonButton } from "./CommonButton.js"
import { colorScheme } from "../../../Styles/Color.js"

export class TextButton extends CommonButton {
    constructor() {
        super()

        this.Enable()
    }

    Enable() {
        this.data.BackgroundColor = 'transparent'
        this.data.BorderColor = 'transparent'
        this.data.BorderWidth = '0rem'
        this.data.BorderStyle = 'none'
        this.data.Shadow = ''
        this.Interactive()
    }

    Disable() {
        this.data.TextColor = colorScheme.onSurface + '61'
        this.DeInteractive()
    }
}