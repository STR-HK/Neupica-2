import { NeuButton } from "../Widgets/NeuButton.js"
import { MSR } from "../../../Utils/MaterialSymbol.js"

export class MActionButton extends NeuButton {
    constructor() {
        super()

        this.data.ButtonText.FontFamily = MSR.name
        this.data.Button.AspectRatio = '1.05/1'
        this.data.Button.AlignItems = 'center'
        this.data.Button.JustifyContent = 'center'
        this.data.Button.BorderRadius = '50%'
        this.geometry.Height = '100%'

        // this.data.Button.Float

        this.data.ButtonText.FontSize = '1.5rem'
        this.data.ButtonText.TextColor = 'white'
    }

    setIcon(icon) {
        this.data.ButtonText.FontFamily = icon.name
        this.data.ButtonText.Text = icon.icon
    }
}