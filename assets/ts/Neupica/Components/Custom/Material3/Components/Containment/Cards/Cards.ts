import { NeuContainer } from "../../../../../Native/NeuContainer.js"
// import { Padding } from "../../../../../../Tool/Padding.js"
import { colorScheme } from "../../../Styles/Color.js"
import { Level1 } from "../../../Styles/Elevation.js"
import { NeuImage } from "../../../../../Native/NeuImage.js"
import { CommonButton } from "../../Actions/Common Buttons/CommonButton.js"
import { Typography } from "../../../Styles/Typography.js"
import { FilledButton } from "../../Actions/Common Buttons/FilledButton.js"
import { Found } from "../../../../../Found/Found"

export class Cards extends NeuContainer {
    Image: NeuImage
    Title: NeuContainer
    SubTitle: NeuContainer
    Button: CommonButton
    // private Gap: NeuContainer
    Blank: NeuContainer
    // ImageFrame: NeuContainer
    Contents: NeuContainer

    constructor() {
        super()

        this.geometry.Width = '95%'

        this.data.BorderRadius = '12rem'

        this.data.BackgroundColor = colorScheme.surface
        this.data.Shadow = Level1

        this.Image = new NeuImage()
        this.Image.geometry.Width = '100%'
        this.Image.data.BorderRadius = '12rem'
        this.Image.data.ContextMenu = false
        this.Image.data.Src = 'https://t-mobile.scene7.com/is/image/Tmusprod/bg-hero-celebrationpink.desktop?wid=1280&hei=768'
        this.addChild(this.Image)

        this.Contents = new NeuContainer()
        this.Contents.data.Padding = '16rem'
        this.Contents.data.Gap = '12rem'
        this.Contents.geometry.Width = '100%'
        this.addChild(this.Contents)

        this.Title = new NeuContainer()
        this.Title.data.Content = 'Glass Souls\' World Tour'
        this.Title.data.FontSize = Typography.Size.HeadlineMedium
        this.Title.data.FontWeight = 'bold'
        this.Title.data.TextColor = colorScheme.onSurface
        this.Contents.addChild(this.Title)

        this.SubTitle = new NeuContainer()
        this.SubTitle.data.Content = 'From your recent favorites'
        this.SubTitle.data.FontSize = Typography.Size.TitleSmall
        this.SubTitle.data.TextColor = colorScheme.onSurface
        this.Contents.addChild(this.SubTitle)

        this.Blank = new NeuContainer()
        this.Blank.geometry.Height = '12rem'
        this.Contents.addChild(this.Blank)

        // this.SupportingText = new NeuContainer()

        // this.Gap = new NeuContainer()
        // this.Gap.geometry.Height = '8rem'
        // this.addChild(this.Gap)

        // this.

        this.Button = new FilledButton()
        this.Button.data.Content = 'Buy Tickets'
        this.Contents.addChild(this.Button)

        // this.addRipple( )
        // this.data.
    }
    reRender() {
        super.reRender()

        this.data.BackgroundColor = colorScheme.surface
        this.Title.data.TextColor = colorScheme.onSurface
        this.SubTitle.data.TextColor = colorScheme.onSurface

    }
}