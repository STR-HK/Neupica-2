import { NeuColumn } from "../Layout/NeuColumn.ts"
import { NeuRow } from "../Layout/NeuRow.ts"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.ts"
import { NeuImage } from "../Neupica/Components/Native/NeuImage.ts"
import { MaterialText } from "../Neupica/Components/Native/MaterialText.ts"
import { NeuApp } from "../Neupica/Core/App.ts"
import { Box } from "../Tool/Box.js"

class Prototype extends NeuApp {
    constructor() {
        super()

        this.layout = new NeuColumn()

        this.sidebar = new NeuRow()
        this.layout.addChild(this.sidebar)
        this.sideCont = new NeuContainer()
        this.sideCont.geometry.Height = "100vh"
        this.sideCont.geometry.Width = "275px"
        this.sideCont.data.Padding = new Box().VH("2rem", "3rem")
        this.sideCont.data.BackgroundColor = "#141618"
        this.sidebar.addChild(this.sideCont)

        this.logo = new NeuImage()
        this.logo.data.Src = "./mid/logoimg_invert.svg"
        this.logo.geometry.Width = "130px"
        this.logo.geometry.Height = "auto"
        this.sideCont.addChild(this.logo)

        this.menu = new NeuRow()
        this.sideCont.addChild(this.menu)
        this.menuCont = new NeuContainer()
        this.menu.addChild(this.menuCont)

        class MenuItem extends NeuContainer {
            constructor() {
                super()

                this.text = new MaterialText()
                this.text.data.FontSize = "1.5rem"
                this.text.data.FontWeight = "bold"
                this.text.data.TextColor = "#E9EFFB"
                this.addChild(this.text)
                this.icon = new NeuImage()
                this.addChild(this.icon)
            }
        }

        this.menu_top = new MenuItem()
        this.menu_top.text.Text.data.Content = "Top"

        this.menuCont.addChild(this.menu_top)

        this.creditBox = new NeuContainer()
        this.sideCont.addChild(this.creditBox)

        class Credit extends MaterialText {
            constructor() {
                super()
                this.data.FontSize = "12px"
                this.data.TextColor = "#E9EFFB"
            }
        }

        this.credit1 = new Credit()
        this.credit1.Text.data.Content = "© 2022 미드나잇웍스"
        this.credit2 = new Credit()
        this.credit2.Text.data.Content = "MidnightWorks."
        this.credit3 = new Credit()
        this.credit3.Text.data.Content = "All rights reserved"
        this.creditBox.addChild(this.credit1)
        this.creditBox.addChild(this.credit2)
        this.creditBox.addChild(this.credit3)

        this.draw("#App")
    }
}

export let app = new Prototype()
