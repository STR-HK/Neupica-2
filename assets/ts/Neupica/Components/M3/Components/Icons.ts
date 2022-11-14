import { NeuContainer } from "../../Native/NeuContainer.js"
import { getStyle } from "../../../DOM/Contents.js"

getStyle('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined')

export class MaterialSymbols extends NeuContainer {
    constructor() {
        super()
        this.name = "Material Symbols "

        this.data.FontWeight = 'normal'
        this.data.FontStyle = 'normal'
        this.data.FontSize = '22rem'
        this.data.LineHeight = '1'
        this.data.LetterSpacing = 'normal'
        this.data.TextTransform = 'none'
        this.geometry.Display = 'inline-block'
        this.data.WhiteSpace = 'nowrap'
        this.data.Direction = 'ltr'

        this.geometry.Height = '24rem'
        this.geometry.Width = '24rem'

        // TODO - WordWrap
        // this.data.WordWrap = 'normal'

        // TODO - TextRendering
        // this.data.TextRendering = 'optimizeLegibility'

        // TODO - FontFeatureSettings
        // this.data.FontFeatureSettings = 'liga'

    }
}

export class MaterialSymbolsOutlined extends MaterialSymbols {
    constructor(icon) {
        super()
        this.name += "Outlined"

        this.data.FontFamily = 'Material Symbols Outlined'


        this.data.Text = icon
    }
}