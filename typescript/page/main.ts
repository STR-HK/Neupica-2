import { runApp } from "../Neupica/Neupica2.js"
import { NeuMainWindow } from "../Neupica/NeuCore.js"

import { NeuAppBar, NeuButton, NeuInput } from "../Neupica/NeuWidgets.js"
import { NeuLayout } from "../Neupica/NeuLayout.js"

class Stora extends NeuMainWindow {
    constructor () {
        super()
        this.layout = new NeuLayout()

        // this.topAppBar = new NeuAppBar()
        //     this.topAppBar.setText('Stora Web Application')
        //     this.topAppBar.setLead(this.Icons.ac_unit)
        //     this.topAppBar.setLeadColor('white')
        // this.layout.addChild(this.topAppBar)

        this.defaultButton = new NeuButton()
            this.defaultButton.Text = 'Default Button'
        this.layout.addChild(this.defaultButton)

        this.alpha = new NeuButton()
            this.alpha.Text = 'Download'
            this.alpha.BackgroundColor = this.Colors.Transparent
            this.alpha.StrokeColor = '#C34351'
            this.alpha.StrokeWidth = '2px'
            this.alpha.Color = 'black'
            this.alpha.Icon = this.Icons.file_download
            this.alpha.IconColor = '#C34351'
            this.alpha.IconTop = true
        this.layout.addChild(this.alpha)

        // this.ipt = new NeuInput()
        // this.layout.addChild(this.ipt)

        this.beta = new NeuButton()
            this.beta.Text = 'Store'
            this.beta.BackgroundColor = this.Colors.Transparent
            this.beta.StrokeColor = this.Colors.LightGray
            this.beta.StrokeWidth = '1px'
            this.beta.Padding = '10px'
            this.beta.Color = this.Colors.Main
        this.layout.addChild(this.beta)

        this.lover = new NeuButton()
            this.lover.Icon = this.Icons.favorite
            this.lover.IconColor = this.Colors.White
            this.lover.BackgroundColor = '#FF3057'
            this.lover.IconTop = true
            this.lover.Color = this.Colors.Transparent
        this.layout.addChild(this.lover)

        this.ios = new NeuButton()
            this.ios.Icon = this.Icons.code
            this.ios.IconColor = this.Colors.White
            this.ios.BackgroundColor = '#007AFF'
            this.ios.IconTop = true
            this.ios.Color = this.Colors.Transparent
        this.layout.addChild(this.ios)


        this.draw(this.layout)

        console.log('drawing finished')
    }
}

runApp(Stora)