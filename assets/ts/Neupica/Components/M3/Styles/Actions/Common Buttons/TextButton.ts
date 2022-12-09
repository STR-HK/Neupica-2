import { CommonButton } from "./CommonButton.js"
import { colorScheme } from "../../../Components/Color.js"

export class TextButton extends CommonButton {
    constructor() {
        super()

        this.data.BackgroundColor = 'transparent'
        this.data.BorderColor = 'transparent'
        this.data.BorderWidth = '0rem'
        this.data.BorderStyle = 'none'

        this.data.Shadow = ''
    }
}