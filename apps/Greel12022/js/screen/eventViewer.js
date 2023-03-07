import { NeuApp } from "../../../../assets/js/Neupica/Core/App.js"
import { NeuRow } from "../../../../assets/js/Layout/NeuRow.js"
import { MButton } from "../../../../assets/js/Neupica/Components/Custom/Material.js"
import { runApp } from "../../../../assets/js/Neupica/Neupica2.js"
import { NeuButton } from "../../../../assets/js/Neupica/Components/Widgets/NeuButton.js"
import { NeuContainer } from "../../../../assets/js/Neupica/Components/Native/NeuContainer.js"
import { Padding } from "../../../../assets/js/Tool/Padding.js"
import { NeuText } from "../../../../assets/js/Neupica/Components/Native/NeuText.js"

export class eventViewer extends NeuApp {
    constructor() {
        super()

        this.Layout = new NeuRow()
        this.Layout.data.BackgroundColor = '#262626'
        this.Layout.geometry.Height = '100vh'
        this.Layout.geometry.Width = '100vw'

        this.header = new NeuContainer()
        this.header.geometry.Width = '100%'
        this.header.geometry.Height = '10%'
        this.header.data.JustifyContent = 'center'
        this.Layout.addChild(this.header)

        class CardBg extends NeuContainer {
            constructor() {
                super()

                this.geometry.Padding = new Padding().all('10px')
            }
        }

        this.title = new CardBg()
        this.titleText = new NeuText()
        this.titleText.data.FontSize = '24px'
        this.titleText.data.FontWeight = '1000'
        this.title.geometry.Height = 'calc(100% - 30px)'
        this.title.geometry.Height = 'calc(100% - 20px)'
        this.title.geometry.Padding = new Padding().TBLR('20px', '10px')
        this.title.data.AlignItems = 'center'
        this.title.data.JustifyContent = 'center'
        this.titleText.data.TextColor = 'black'
        this.title.data.BackgroundColor = 'white'
        this.title.data.BorderRadius = '13px'
        this.titleText.Text.data.Content = 'Greel 12022'
        this.title.addChild(this.titleText)
        this.header.addChild(this.titleText)

        this.btn = new MButton.MRaisedButton()
        this.btn.ButtonText.Text.data.Content = 'Iconed Button'
        this.btn.ButtonImage.geometry.Width = '20px'
        this.btn.Button.data.Symmetric = 'horizontal'
        this.btn.Button.data.AlignItems = 'center'
        this.btn.Button.data.JustifyContent = 'center'
        this.btn.ButtonText.data.FontSize = '20px'
        this.btn.ButtonText.data.VerticalAlign = 'top'
        this.btn.data.ButtonImage.Src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png'
        this.btn.Button.data.Gap = '2px'

        this.setLayout(this.Layout)
    }
}

export let testScreen = new eventViewer()
