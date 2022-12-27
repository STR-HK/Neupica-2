import {
    TextFields
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/TextFields.js"

export class CetneredTextField extends TextFields {
    constructor() {
        super()

        this.vbox.data.BackgroundColor = 'transparent'
        this.Input.data.TextAlign = 'center'
        this.LabelText.data.TextAlign = 'center'
        this.LabelText.geometry.Width = '100%'
        this.watchEvent('click', function() {
            this.LabelText.Hide()
        }.bind(this))
        this.watchEvent('blur', function() {
            if (this.Input.data.Value === "") {
                this.LabelText.Show()
            }
        }.bind(this))
        // this.watchEvent('keyup', function() {
        //
        // })
    }
}