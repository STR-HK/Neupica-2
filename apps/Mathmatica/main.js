import { NeuCalc } from "../../assets/ts/Layout/NeuCalc.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import {
    CommonButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"

export class Mathmatica extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuCalc()
        this.setFullScreen(true)

        this.Button = new CommonButton()
        this.Button.Text.data.Content = 'Pixel Perfect'
        this.layout.addChild(this.Button)

        this.Button2 = new CommonButton()
        this.Button2.Text.data.Content = 'Pixel Perfect'
        this.layout.addChild(this.Button2)


        this.draw('#fit-glass-pane')
    }

}


export let app = runApp(new Mathmatica())