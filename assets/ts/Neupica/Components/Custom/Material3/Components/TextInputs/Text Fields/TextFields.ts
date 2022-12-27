import { NeuContainer } from "../../../../../Native/NeuContainer.js"
import { NeuInput } from "../../../../../Native/NeuInput.js"
import { colorScheme } from "../../../Styles/Color.js"
import { Padding } from "../../../../../../../Tool/Padding.js"
import { createCover, createCustom, UElement } from "../../../../../Create/Create.js"

export class TextFields extends NeuContainer {
    Input: NeuInput
    LabelText: NeuContainer
    Trailing: any
    ActiveIndicator: NeuContainer
    SupportingText: NeuContainer
    CharacterCounter: NeuContainer
    vbox: NeuContainer
    vbox2: NeuContainer
    // private legend: HTMLLegendElement
    // private legendCover: UDivElement
    private LabelArea: NeuContainer
    FieldSet: UElement
    Legend: UElement
    initVbox: () => void
    constructor() {
        super()
        this.geometry.Cursor = 'text'

        this.FieldSet = createCustom('fieldset')
        this.Legend = createCustom('legend')

        this.vbox = new NeuContainer()
        this.vbox2 = new NeuContainer()

        this.LabelText = new NeuContainer()
        this.Input = new NeuInput()
        this.Trailing
        this.ActiveIndicator = new NeuContainer()
        this.SupportingText = new NeuContainer()

        this.watchEvent('click', function() {
            // console.log('click')
            this.Input.Show()
            this.Input.element.focus()

            this.LabelText.data.FontSize = '12rem'
            this.LabelText.data.TextColor = colorScheme.primary

            // this.ActiveIndicator.data.BackgroundColor = colorScheme.primary
            this.vbox.data.BorderColor = colorScheme.primary
            this.vbox.data.BorderWidth = '2rem'


        }.bind(this))

        this.Input.watchEvent('blur', function() {
            // console.log(this.Input.data.Value)
            if (this.Input.data.Value == "") {
                this.Input.Hide()

                this.LabelText.data.FontSize = '16rem'
                this.LabelText.data.TextColor = colorScheme.onSurfaceVariant

                // this.ActiveIndicator.data.BackgroundColor = colorScheme.onSurfaceVariant
                this.vbox.data.BorderColor = colorScheme.onSurfaceVariant
                this.vbox.data.BorderWidth = '1rem'



            } else {
            }
        }.bind(this))


        this.vbox.data.BackgroundColor = colorScheme.surfaceVariant
        this.vbox.data.BorderRadius = '4rem 4rem 0rem 0rem'

        this.vbox.data.Padding = new Padding().top('10rem')
        this.vbox.geometry.Height = '56rem'
        this.vbox.geometry.MinHeight = '56rem'
        this.vbox.geometry.Width = '100%'
        this.vbox.data.JustifyContent = 'center'


        this.vbox2.geometry.Width = '100%'
        this.vbox2.data.JustifyContent = 'space-between'
        this.vbox2.data.Symmetric = 'horizontal'

        this.LabelText.data.TextColor = colorScheme.onSurfaceVariant
        this.LabelText.data.Text = 'Label Text'
        this.LabelText.data.FontSize = '16rem' // 12rem

        if (this.LabelText.data.Text == "") {
            this.vbox.data.Padding = new Padding().VH('8rem', '16rem')
        } else {
            this.vbox.data.Padding = new Padding().LTRB('12rem', '8rem','16rem', '8rem')
        }

        // this.Trailing.data.TextColor = colorScheme.onSurfaceVariant

        this.Input.data.TextColor = colorScheme.onSurface
        this.Input.data.FontSize = '16rem'
        this.Input.data.CaretColor = colorScheme.primary


        this.Input.data.Max = '12'


        this.SupportingText.data.TextColor = colorScheme.onSurfaceVariant
        this.SupportingText.data.FontSize = '12rem'
        this.SupportingText.data.Padding = new Padding().all('4rem')

        this.CharacterCounter = new NeuContainer()
        this.CharacterCounter.data.FontSize = '12rem'
        this.CharacterCounter.data.TextColor = colorScheme.onSurfaceVariant
        this.CharacterCounter.data.Padding = new Padding().all('4rem')


        this.element.addEventListener("input", function() {
            this.CharacterCounter.data.Text =  `${this.Input.data.Value.length}/${this.Input.data.Max}`
        }.bind(this))


        // this.ActiveIndicator.data.TextColor = colorScheme.primary
        // this.ActiveIndicator.geometry.Height = '1rem'
        // this.ActiveIndicator.geometry.Width = '100%'
        // this.ActiveIndicator.data.BackgroundColor = colorScheme.onSurfaceVariant

        this.vbox.data.BorderStyle = "hidden hidden solid"
        this.vbox.data.BorderWidth = '1rem'
        this.vbox.data.BorderColor = colorScheme.onSurfaceVariant

        this.vbox.addChild(this.LabelText)
        this.vbox.addChild(this.Input)
        this.addChild(this.vbox)

        this.vbox2.addChild(this.SupportingText)
        this.vbox2.addChild(this.CharacterCounter)
        // this.addChild(this.vbox2)

        // this.removeChild(this.Input)
        this.Input.Hide()

    }
}