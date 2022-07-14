import { NeuApp } from "../Neupica/Core/App.js"
import { NeuColumn } from "../Layout/NeuColumn.js"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { NeuRow } from "../Layout/NeuRow.js"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.js"
import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"
import { Padding } from "../Tool/Padding.js"
import { BorderRadius } from "../Tool/BorderRadius.js"
import { Debug } from "../Utils/Debug.js"
import { NeuImage } from "../Neupica/Components/Native/NeuImage.js"
import { Flex } from "../Tool/Flex.js"
import { work } from "./Blanker_worker.js"
// import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"

let mat_url = 'https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/material/material.png'
let cup_url = 'https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/cupertino/cupertino.png'
let ref_url = 'https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/reference/reference.png'

class Blanker extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.centralContainer = new NeuContainer()
        this.centralContainer.geometry.Width = "100%"
        this.centralContainer.geometry.Height = "100%"
        this.centralContainer.geometry.Padding = new Padding().VH('25px', '35px')
        this.centralContainer.data.BackgroundColor = "#241E30"
        this.centralContainer.data.Gap = '15px'
        this.layout.addChild(this.centralContainer)

        this.galleryTitle = new NeuText()
        this.galleryTitle.data.FontSize = '1.5rem'
        this.galleryTitle.data.Text = 'Gallery'
        this.galleryTitle.data.TextColor = '#1CDFC9'
        this.galleryTitle.data.FontWeight = 'bold'

        this.catergoriesTitle = new NeuText()
        this.catergoriesTitle.data.FontSize = '1.5rem'
        this.catergoriesTitle.data.Text = 'Categories'
        this.catergoriesTitle.data.TextColor = "#FF8484"
        this.catergoriesTitle.data.FontWeight = 'bold'
        this.centralContainer.addChild(this.catergoriesTitle)

        this.categoriesList = new NeuContainer()
        this.centralContainer.addChild(this.categoriesList)
        this.categoriesList.geometry.Width = '100%'
        this.categoriesList.data.Gap = '16px'

        class CategoryMaterialButton extends NeuButton {
            constructor() {
                super()

                this.data.Button.Gap = '10px'
                this.geometry.Padding = new Padding().VH('7px', '10px')
                this.geometry.Width = '100%'
                this.data.ButtonText.TextColor = 'white'
                this.data.ButtonText.FontSize = '14px'
                this.data.ButtonText.FontWeight = 'bold'
                this.data.Button.BackgroundColor = '#2F293B'
                this.data.Button.BorderRadius = new BorderRadius().all('8px')
                // this.data.ButtonImage.Src = mat_url
                this.img.geometry.Width = '65px'
                this.data.Button.Symmetric = 'horizontal'
                this.data.Button.AlignItems = new Flex().AlignItems.Center
            }

            setText(text) {
                this.data.ButtonText.Text = text
            }

            setSrc(src) {
                this.data.ButtonImage.Src = src
            }
        }

        this.MaterialButton = new CategoryMaterialButton()
        this.categoriesList.addChild(this.MaterialButton)
        this.MaterialButton.setText('MATERIAL')
        this.MaterialButton.setSrc(mat_url)

        this.CupertinoButton = new CategoryMaterialButton()
        this.categoriesList.addChild(this.CupertinoButton)
        this.CupertinoButton.setText('CUPERTINO')
        this.CupertinoButton.setSrc(cup_url)

        this.StylesNOtherButton = new CategoryMaterialButton()
        this.categoriesList.addChild(this.StylesNOtherButton)
        this.StylesNOtherButton.setText('STYLES & OTHER')
        this.StylesNOtherButton.setSrc(ref_url)

        this.MaterialDropDown = new NeuContainer()
        this.categoriesList.addChild(this.MaterialDropDown)


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

        // this.layout.addChild(app.MaterialButton)

        this.catMaterialButton = new NeuButton()
        this.centralContainer.addChild(this.catMaterialButton)
        this.catMaterialButton.data.ButtonText.Text = 'Start Debug'
        this.catMaterialButton.data.ButtonText.TextColor = 'white'
        this.catMaterialButton.geometry.Padding = new Padding().all('10px')
        this.catMaterialButton.data.ButtonText.FontWeight = 'bold'
        this.catMaterialButton.geometry.Width = '100%'
        this.catMaterialButton.data.Button.BackgroundColor = '#2F293B'
        this.catMaterialButton.data.Button.BorderRadius = new BorderRadius().all('8px')

        this.catMaterialButton3 = new NeuButton()
        this.centralContainer.addChild(this.catMaterialButton3)
        this.catMaterialButton3.data.ButtonText.Text = 'Stop Debug'
        this.catMaterialButton3.data.ButtonText.TextColor = 'white'
        this.catMaterialButton3.geometry.Padding = new Padding().all('10px')
        this.catMaterialButton3.data.ButtonText.FontWeight = 'bold'
        this.catMaterialButton3.geometry.Width = '100%'
        this.catMaterialButton3.data.Button.BackgroundColor = '#2F293B'
        this.catMaterialButton3.data.Button.BorderRadius = new BorderRadius().all('8px')

        this.catMaterialButton2 = new NeuButton()
        this.centralContainer.addChild(this.catMaterialButton2)
        this.catMaterialButton2.data.ButtonText.Text = 'Delete This Float'
        this.catMaterialButton2.data.ButtonText.TextColor = 'white'
        this.catMaterialButton2.geometry.Padding = new Padding().all('10px')
        this.catMaterialButton2.data.ButtonText.FontWeight = 'bold'
        this.catMaterialButton2.geometry.Width = '100%'
        this.catMaterialButton2.data.Button.BackgroundColor = '#2F293B'
        this.catMaterialButton2.data.Button.BorderRadius = new BorderRadius().all('8px')

        this.catMaterialButton.element.element.addEventListener('click', function() {
            // console.log(app.app)
            Debug(app.app)
        })
        this.catMaterialButton3.element.element.addEventListener('click', function() {
            try {
                terminate()
            } catch (e) {
                alert('Noting to terminate!')
            }
        })
        this.catMaterialButton2.element.element.addEventListener('click', function() {
            // console.log(this)
            window.delFloat(float)
        })


    }
}



export let app = new Blanker()
export let float = window.setFloat(new FloatTest())
work()
