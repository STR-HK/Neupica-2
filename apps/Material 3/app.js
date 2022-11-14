// import { color } from "../../assets/ts/Neupica/Components/M3/Components/Color.js"
import { colorScheme, theme } from "../../assets/ts/Neupica/Components/M3/Components/Color.js"
import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
// import { NeuColumn } from "../../assets/js/Layout/NeuColumn.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Common Buttons/CommonButtons.js"
import { NeuColumn } from "../../assets/ts/Layout/NeuColumn.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { NeuHTML } from "../../assets/ts/Layout/NeuHTML.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/M3/Styles/Navigation/TopAppBars.js"
import { OutlinedButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Common Buttons/OutlinedButton.js"
import { MaterialSymbolsOutlined } from "../../assets/ts/Neupica/Components/M3/Components/Icons.js"
import { IconButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Icon Buttons/IconButton.js"
import { Switch } from "../../assets/ts/Neupica/Components/M3/Styles/Selection/Switch.js"

export class Material3 extends NeuApp {
    // [key: string]: any;
    constructor() {
        super()
        this.layout = new NeuColumn()
        this.layout.element.style.backgroundColor = colorScheme.background
        this.setFullScreen(true)

        this.menuIcon = new MaterialSymbolsOutlined('menu')
        this.menuIcon.geometry.Width = '24rem'
        this.menuIconButton = new IconButton(this.menuIcon)
        this.menuIconButton.geometry.Width = '48rem'

        this.themeModeIcon = new MaterialSymbolsOutlined('light_mode')
        this.themeModeIcon.geometry.Width = '24rem'
        this.themeModeIconButton = new IconButton(this.themeModeIcon)
        this.themeModeIconButton.geometry.Width = '48rem'

        this.calendarIcon = new MaterialSymbolsOutlined('Colorize')
        this.calendarIcon.geometry.Width = '24rem'
        this.calendarIconButton = new IconButton(this.calendarIcon)
        this.calendarIconButton.geometry.Width = '48rem'

        this.appbar = new TopAppBar()
        this.appbar.setLeading(
            this.menuIconButton
        )
        this.appbar.addTrailings([
            this.themeModeIconButton,
            this.calendarIconButton
        ])
        this.layout.addChild(this.appbar)

        this.cmb = new CommonButton()
        this.cmb.data.Text = 'Click To Change Title'
        this.layout.addChild(this.cmb)

        this.abm = new OutlinedButton()
        this.abm.data.Text = 'Outlined Button'
        this.layout.addChild(this.abm)

        this.swatch = new Switch()
        this.layout.addChild(this.swatch)

        this.setLayout(this.layout)

        this.draw('#App')
    }
}

export let app = new Material3()
runApp(app)
work()

function work() {
    app.cmb.watchEvent('click', function() {
        let ret = prompt('New Title?')
        if (ret !== null) {
            app.appbar.setHeadline(ret)
        }

    })
    app.abm.watchEvent('click', function() {
        app.swatch.Toggle()
    })
}
