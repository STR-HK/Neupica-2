import { NeuContainer } from "../../Native/NeuContainer.ts"
import { Flex } from "../../../../Tool/Flex.js"
import { NeuButton } from "../../Widgets/NeuButton.js"
import { MSR } from "../../../../Utils/MaterialSymbol.js"
import { NeuText } from "../../Native/NeuText.js"

export class MAppBar extends NeuContainer {
    constructor() {
        super()

        this.data.BackgroundColor = '#6200EE'
        this.geometry.Width = '100%'
        this.geometry.Height = '55px'
        this.data.Symmetric = 'horizontal'
        this.data.AlignItems = new Flex().AlignItems.Center

        // this.data.FlexBasis = 'max-content'

        class Leading extends NeuButton {
            constructor() {
                super()

                this.data.ButtonText.Text = MSR.icons.Menu.icon
                this.data.ButtonText.TextColor = 'white'
                this.geometry.Height = '100%'
                this.data.ButtonText.FontFamily = MSR.name
                this.data.Button.AspectRatio = '1.5/1'
                this.data.Button.AlignItems = 'center'
                this.data.Button.JustifyContent = 'center'
                this.data.ButtonText.FontSize = '1.5rem'

                // this.data.Button.BorderRadius = '50%'
            }

            setIcon(icon) {
                this.data.ButtonText.FontFamily = icon.name
                this.data.ButtonText.Text = icon.icon
            }
        }

        class Title extends NeuContainer {
            constructor() {
                super()

                class TitleText extends NeuText {
                    constructor() {
                        super()

                        this.Text.data.Content = 'App bar'
                        this.data.TextColor = 'white'
                        this.data.FontSize = '1.25rem'
                        this.data.FontWeight = '400'
                    }
                }

                this.geometry.Width = 'auto'
                // this.geometry.Display = 'inline-block'
                // this.data.FlexBasis = '100%'
                this.text = new TitleText()
                this.addChild(this.text)

            }

            setTitle (title) {
                this.text.Text.data.Content = title
            }
        }

        class Actions extends NeuContainer {
            constructor() {
                super()

                this.geometry.Height = '100%'
                this.data.Symmetric = 'horizontal'
                this.geometry.Float = 'left'

            }
        }

        this.leading = new Leading()
        this.leading.geometry.Float = 'left'
        this.addChild(this.leading)

        this.title = new Title()
        this.title.geometry.Float = 'left'
        this.addChild(this.title)

        this.actions = new Actions()
        this.actions.geometry.Float = 'right'
        this.addChild(this.actions)
    }
}