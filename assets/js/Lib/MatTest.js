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
import { Geometry } from "../Neupica/Core/Geometry.js"
import { MSR } from "../Utils/MaterialSymbol.js"
// import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"

let mat_url = 'https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/material/material.png'
let cup_url = 'https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/cupertino/cupertino.png'
let ref_url = 'https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/reference/reference.png'



import {MActionButton} from "../Neupica/Components/Custom/MActionButton.js"
import {MAppBar} from "../Neupica/Components/Custom/MAppBar.js"

class Demo_MAppBar extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.centralContainer = new NeuContainer()
        this.centralContainer.geometry.Width = '100%'
        this.layout.addChild(this.centralContainer)

        this.appBar = new MAppBar()
        this.appBar.leading.setIcon(MSR.icons.Menu)
        this.appBar.title.setTitle('Example Title')

        this.action_fav = new MActionButton()
        this.action_fav.setIcon(MSR.icons.Favorite)
        this.appBar.actions.addChild(this.action_fav)

        this.action_search = new MActionButton()
        this.action_search.setIcon(MSR.icons.Search)
        this.appBar.actions.addChild(this.action_search)

        this.action_show = new MActionButton()
        this.action_show.setIcon(MSR.icons.More_Vert)
        this.appBar.actions.addChild(this.action_show)

        this.centralContainer.addChild(this.appBar)

        this.vert_bar = new NeuContainer()
        this.vert_bar.geometry.Height = '100vh'
        this.centralContainer.addChild(this.vert_bar)

        this.appBar2 = new MAppBar()
        this.centralContainer.addChild(this.appBar2)

        this.draw("#App")
    }
}

class Demo_MButton extends NeuApp {
    constructor() {
        super()

        this.layout = new NeuColumn()

        this.centralContainer = new NeuContainer()
        this.centralContainer.geometry.Width = '100%'
        this.layout.addChild(this.centralContainer)

        this.textButton = new NeuButton()
        this.textButton.data.ButtonText.Text = 'Button'
        this.textButton.data.ButtonText.TextColor = 'purple'
        this.textButton.data.Button.Padding = new Padding().VH('6px', '18px')
        this.textButton.data.Button.BorderRadius = '4px'
        // this.textButton.data.Button.BackgroundColor = 'red'
        this.centralContainer.addChild(this.textButton)


        this.vert_bar = new NeuContainer()
        this.vert_bar.geometry.Height = '100vh'
        this.centralContainer.addChild(this.vert_bar)

        this.textButton2 = new NeuButton()
        this.textButton2.data.ButtonText.Text = 'Button'
        this.textButton2.data.Button.Padding = new Padding().VH('6px', '18px')
        this.textButton2.data.Button.BorderRadius = '4px'
        this.textButton2.data.Button.BackgroundColor = 'red'
        this.centralContainer.addChild(this.textButton2)

        this.draw('#App')
    }
}

export let app = new Demo_MButton()
// Debug(app.app)
