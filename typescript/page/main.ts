import { runApp } from "../neupica/neupica2.js"
import { NeuMainWindow } from "../neupica/neucore.js"

import { NeuAppBar, NeuButton, NeuInput } from "../neupica/neuwidgets.js"
import { NeuLayout } from "../neupica/neulayout.js"

function show(node) {
    document.body.appendChild(node);
}

// import { EEmm } from "../page/style.js"
// EEmm()

class Stora extends NeuMainWindow {
    constructor () {
        super()
        let layout = new NeuLayout()

        this.topAppBar = new NeuAppBar()
        this.topAppBar.setText('Stora Video Collections')

        layout.addChild(this.topAppBar)

        this.alpha = new NeuButton()
        this.alpha.setText("Download")
        this.alpha.setBackgroundColor(this.Colors.Transparent)
        this.alpha.setStrokeColor('#C34351')
        this.alpha.setStrokeWidth('2px')
        this.alpha.setColor('black')
        this.alpha.setIcon(this.Icons.file_download)
        this.alpha.setIconColor('#C34351')
        this.alpha.setIconTop(true)
        this.alpha.setShadow(this.alpha.materialShadow)
        layout.addChild(this.alpha)

        // TEMP SIZEDBOX
        // layout.addChild({'cover': document.createElement('br')})

        let ipt = new NeuInput()
        layout.addChild(ipt)

        let beta = new NeuButton()
        beta.setText('Store')
        beta.setBackgroundColor(this.Colors.Transparent)
        beta.setStrokeColor(this.Colors.LightGray)
        beta.setStrokeWidth('1px')
        beta.setPadding('10px')
        beta.setColor(this.Colors.Main)
        layout.addChild(beta)

        this.draw(layout)
    }
}

import { WidgetStyler } from '../neupica/neuwidgets.js'

// WidgetStyler.NeuButton.BackgroundColor = '#C34351'


runApp({
    app: new Stora(),
    name: "Stora",
    debug: true
})