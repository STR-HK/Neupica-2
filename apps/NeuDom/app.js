import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/M3/Styles/Navigation/TopAppBars.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { MaterialSymbolsOutlined } from "../../assets/ts/Neupica/Components/M3/Components/Icons.js"
import { IconButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Icon Buttons/IconButton.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/M3/Components/Color.js"
// import { NObject } from "../../assets/ts/Common/NObject.ts"
// import * as inspector from "inspector"

export class NeuDom extends NeuApp {
    constructor() {
        super()
        this.setFullScreen(true)
        this.layout = new NeuScaffold()
        this.layout.data.BackgroundColor = colorScheme.background


        this.appBarIcon = new MaterialSymbolsOutlined('space_dashboard')
        this.appBarIconButton = new IconButton(this.appBarIcon)

        this.appBar = new TopAppBar()
        this.appBar.setLeading(this.appBarIconButton)
        this.appBar.setHeadline('NeuDom')
        this.layout.head.addChild(this.appBar)

        this.draw('#App')

        let that = this

        let depth = 0

        function createBar(lergth) {
            let ret = new String()
            for (let i = 0; i < lergth; i++) {
                ret += "L_"
            }
            return ret
        }

        function preOrder(callback) {
            let children = callback.children
            if (children.length !== 0) {
                depth += 1

                children.forEach((child) => {

                    if (child.ghost != true) {

                        console.log(child)
                        let text = new NeuContainer()
                        text.ghost = true
                        text.data.Text = `${createBar(depth)} ${child.constructor.name} (${child.data.Text})`
                        text.data.FontSize = '14rem'
                        text.data.TextColor = colorScheme.onBackground

                        that.layout.body.addChild(text)
                        preOrder(child)

                    }
                })
            } else {
                depth -= 1
            }
        }
        preOrder(this.layout)
    }
}

let app = new NeuDom()
runApp(app)