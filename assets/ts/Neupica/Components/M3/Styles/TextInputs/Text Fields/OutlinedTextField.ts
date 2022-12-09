import { TextFields } from "./TextFields.js"
import { colorScheme } from "../../../Components/Color.js"
import { Padding } from "../../../../../../Tool/Padding.js"
import { createCustom } from "../../../../Create/Create.js"
import { NeuContainer } from "../../../../Native/NeuContainer.js"


export class OutlinedTextField extends TextFields {
    constructor() {
        super()

        this.vbox.element.remove()
        this.vbox.element = createCustom('fieldset')
        this.vbox.cover.addChild(this.vbox.element)
        this.vbox.addChild(this.LabelText)
        this.vbox.addChild(this.Input)

        this.LabelText.geometry.Position = 'absolute'
        this.LabelText.geometry.Top = '-8rem'
        this.LabelText.data.BackgroundColor = ''
        this.LabelText.data.Padding = new Padding().VH('0rem', '2rem')

        this.vbox.data.BorderRadius = '4rem'
        this.vbox.data.BorderWidth = '1rem'
        this.vbox.data.BorderStyle = 'solid'
        this.vbox.data.BorderColor = colorScheme.outline
        this.vbox.data.BackgroundColor = 'transparent'

        this.target = this.element

        this.vbox.data.Padding = new Padding().top('10rem')
        this.vbox.geometry.Height = '56rem'
        this.vbox.geometry.MinHeight = '56rem'
        this.vbox.geometry.Width = '100%'
        this.vbox.data.JustifyContent = 'center'

    }
}