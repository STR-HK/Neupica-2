import { NeuContainer } from "../../Native/NeuContainer.js"
import { getStyle } from "../../../DOM/Contents.js"

getStyle('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined')
getStyle('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded')
getStyle('https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp')

export class Icon extends NeuContainer {
    constructor() {
        super()
        this.data.FontWeight = 'normal'
        this.data.FontStyle = 'normal'
        this.data.FontSize = '22rem'
        this.data.LineHeight = '1'
        this.data.LetterSpacing = 'normal'
        this.data.TextTransform = 'none'
        this.data.WhiteSpace = 'nowrap'
        this.data.Direction = 'ltr'
        this.data.WordWrap = 'normal'
        this.data.TextRendering = 'optimizeLegibility'
        this.data.FontFeatureSettings = 'liga'

        // this.geometry.Display = 'inline-block'
        this.geometry.Display = 'flex'
        this.data.JustifyContent = 'center'
        this.data.AlignItems = 'center'

        this.geometry.Height = '24rem'
        this.geometry.Width = '24rem'
    }
}

export class MaterialSymbols extends Icon {
    constructor() {
        super()
        this.name = "Material Symbols "
    }

    FontSize() {
        super.FontSize()
        this.geometry.Height = `${parseFloat(this.data.FontSize) + 2}rem`
        this.geometry.Width = `${parseFloat(this.data.FontSize) + 2}rem`
    }

    MaterialSymbolsOutlined() {
        this.data.FontFamily = 'Material Symbols Outlined'
    }

    MaterialSymbolsRounded() {
        this.data.FontFamily = 'Material Symbols Rounded'
    }

    MaterialSymbolsSharp() {
        this.data.FontFamily = 'Material Symbols Sharp'
    }

    setIcon(text) {
        this.data.Text = text
    }
}

export class MaterialSymbolsOutlined extends MaterialSymbols {
    constructor(icon) {
        super()
        this.data.Text = icon
        this.name += "Outlined"
        this.MaterialSymbolsOutlined()
    }
}

export class MaterialSymbolsRounded extends MaterialSymbols {
    constructor(icon) {
        super()
        this.data.Text = icon
        this.name += "Rounded"
        this.MaterialSymbolsRounded()
    }
}

export class MaterialSymbolsSharp extends MaterialSymbols {
    constructor(icon) {
        super()
        this.data.Text = icon
        this.name += "Sharp"
        this.MaterialSymbolsSharp()
    }
}