import { NeuContainer } from "../Native/NeuContainer.js"
import { Flex } from "../../../Tool/Flex.js"
import { NeuButton } from "../Widgets/NeuButton.js"
import { MSR } from "../../../Utils/MaterialSymbol.js"
import { NeuText } from "../Native/NeuText.js"

export class MAppBar extends NeuContainer {
    constructor() {
        super()

        this.data.BackgroundColor = '#6200EE'
        this.geometry.Width = '100%'
        this.geometry.Height = '55px'
        this.data.Symmetric = 'horizontal'
        this.data.AlignItems = new Flex().AlignItems.Center

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

                        this.data.Text = 'App bar'
                        this.data.TextColor = 'white'
                        this.data.FontSize = '1.25rem'
                        this.data.FontWeight = '400'
                    }
                }

                this.geometry.Width = '100%'
                this.text = new TitleText()
                this.addChild(this.text)

            }

            setTitle (title) {
                this.text.data.Text = title
            }
        }

        class Actions extends NeuContainer {
            constructor() {
                super()

                this.geometry.Height = '100%'
                this.data.Symmetric = 'horizontal'
            }
        }

        this.leading = new Leading()
        this.addChild(this.leading)

        this.title = new Title()
        this.addChild(this.title)

        this.actions = new Actions()
        this.addChild(this.actions)
    }
}