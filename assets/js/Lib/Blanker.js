import { NeuApp } from "../Neupica/Core/App.js"
import { NeuColumn } from "../Layout/NeuColumn.js"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { NeuRow } from "../Layout/NeuRow.js"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.js"
import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"
import { Padding } from "../Tool/Padding.js"
import { BorderRadius } from "../Tool/BorderRadius.js"
import { Debug } from "../Utils/Debug.js"
// import { NeuButton } from "../Neupica/Components/Widgets/NeuButton"


class Blanker extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.centralContainer = new NeuContainer()
        this.centralContainer.data.BackgroundColor = "#241E30"
        this.centralContainer.geometry.Width = "100%"
        this.centralContainer.geometry.Height = "100%"
        this.centralContainer.geometry.Padding = new Padding().VH('15px', '20px')
        this.layout.addChild(this.centralContainer)

        this.galleryTitle = new NeuText()
        this.centralContainer.addChild(this.galleryTitle)
        this.galleryTitle.data.Text = 'Gallery'
        this.galleryTitle.data.TextColor = '#1CDFC9'
        this.galleryTitle.data.FontWeight = 'bold'

        this.galleryExample = new NeuRow()

        this.catergoriesTitle = new NeuText()
        this.catergoriesTitle.data.Text = 'Categories'
        this.catergoriesTitle.data.TextColor = "#FF8484"
        this.catergoriesTitle.data.FontWeight = 'bold'
        this.centralContainer.addChild(this.catergoriesTitle)

        this.categoriesList = new NeuContainer()
        this.categoriesList.geometry.Width = '100%'
        this.centralContainer.addChild(this.categoriesList)

        this.catMaterialButton = new NeuButton()
        this.categoriesList.addChild(this.catMaterialButton)
        this.catMaterialButton.data.ButtonText.Text = 'MATERIAL'
        this.catMaterialButton.data.ButtonText.TextColor = 'white'
        this.catMaterialButton.geometry.Padding = new Padding().all('10px')
        this.catMaterialButton.data.ButtonText.FontWeight = 'bold'
        this.catMaterialButton.geometry.Width = '100%'
        this.catMaterialButton.data.Button.BackgroundColor = '#2F293B'
        this.catMaterialButton.data.Button.BorderRadius = new BorderRadius().all('8px')
        this.draw("#App")
    }
}

class FloatTest extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.centralContainer = new NeuContainer()
        this.centralContainer.data.BackgroundColor = "black"
        this.centralContainer.geometry.Width = "100%"
        this.centralContainer.geometry.Height = "100%"
        this.centralContainer.geometry.Padding = new Padding().VH('15px', '20px')
        this.layout.addChild(this.centralContainer)

        this.catMaterialButton = new NeuButton()
        this.centralContainer.addChild(this.catMaterialButton)
        this.catMaterialButton.data.ButtonText.Text = 'Start Debug'
        this.catMaterialButton.data.ButtonText.TextColor = 'white'
        this.catMaterialButton.geometry.Padding = new Padding().all('10px')
        this.catMaterialButton.data.ButtonText.FontWeight = 'bold'
        this.catMaterialButton.geometry.Width = '100%'
        this.catMaterialButton.data.Button.BackgroundColor = '#2F293B'
        this.catMaterialButton.data.Button.BorderRadius = new BorderRadius().all('8px')

        this.catMaterialButton.element.element.addEventListener('click', function() {
            Debug(app.app)
        })
    }
}

window.setFloat(new FloatTest())

export let app = new Blanker()
// work()
