import { NeuApp } from "../Neupica/Core/App.ts"
import { NeuColumn } from "../Layout/NeuColumn.ts"
import { NeuText } from "../Neupica/Components/Native/NeuText.js"
import { NeuRow } from "../Layout/NeuRow.ts"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.ts"
import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"
import { Padding } from "../Tool/Padding.js"
import { BorderRadius } from "../Tool/BorderRadius.js"
import { Debug } from "../Utils/Debug.js"
import { NeuImage } from "../Neupica/Components/Native/NeuImage.ts"
import { Flex } from "../Tool/Flex.js"
import { Geometry } from "../Neupica/Core/Geometry.js"
import { MSR } from "../Utils/MaterialSymbol.js"
// import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"

let mat_url =
    "https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/material/material.png"
let cup_url =
    "https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/cupertino/cupertino.png"
let ref_url =
    "https://gallery.flutter.dev/assets/packages/flutter_gallery_assets/assets/icons/reference/reference.png"

import { MActionButton } from "../Neupica/Components/Custom/MActionButton.js"
import { MAppBar } from "../Neupica/Components/Custom/MAppBar.js"
import { runApp } from "../Neupica/Neupica2.ts"

class Demo_MAppBar extends NeuApp {
    constructor() {
        super()
        this.layout = new NeuColumn()

        this.centralContainer = new NeuContainer()
        this.centralContainer.geometry.Width = "100%"
        this.layout.addChild(this.centralContainer)

        this.appBar = new MAppBar()
        this.appBar.leading.setIcon(MSR.icons.Menu)
        this.appBar.title.setTitle("Example Title")

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
        this.vert_bar.geometry.Height = "100vh"
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
        this.centralContainer.geometry.Width = "100%"
        this.centralContainer.geometry.Padding = new Padding().VH(
            "20px",
            "50px"
        )
        this.layout.addChild(this.centralContainer)
    }

    initUI() {
        class Line extends NeuContainer {
            constructor() {
                super()
                this.data.Symmetric = "horizontal"
                this.data.AlignItems = "center"
                this.data.Gap = "8px"
            }
        }

        class Title extends NeuContainer {
            constructor() {
                super()
                this.text = new NeuContainer()
                this.addChild(this.text)
                this.text.data.Text = "Basic"
                this.text.data.TextColor = "#000000de"
                this.geometry.MinWidth = "120px"
                this.geometry.MinHeight = "50px"
                this.data.JustifyContent = "center"
            }

            setText(text) {
                this.text.data.Text = text
            }
        }

        class MatBaseButton extends NeuButton {
            constructor() {
                super()
                this.data.Button.Padding = new Padding().VH("8px", "16px")
                this.data.Button.BorderRadius = "4px"
                this.data.ButtonText.FontWeight = 500
            }

            setText(text) {
                this.data.ButtonText.Text = text
            }

            setTextColor(color) {
                this.data.ButtonText.TextColor = color
            }

            setBackgroundColor(color) {
                this.data.Button.BackgroundColor = color
            }
        }

        class MatBasicButton extends MatBaseButton {
            constructor() {
                super()
                this.data.ButtonText.Text = "Basic"
            }
        }

        class MatRaisedButton extends MatBaseButton {
            constructor() {
                super()
                this.data.ButtonText.Text = "Raised"
                this.data.Button.Shadow =
                    "0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f"
            }
        }

        class MatStrokedButton extends MatBaseButton {
            constructor() {
                super()
                this.data.ButtonText.Text = "Stroked"
                this.data.Button.BorderStyle = "solid"
                this.data.Button.BorderColor = "lightgray"
                this.data.Button.BorderWidth = "1px"
            }
        }

        class MatFlatButton extends MatBaseButton {
            constructor() {
                super()
                this.data.ButtonText.Text = "Flat"
                // this.
            }
        }

        this.buttons_container = new NeuContainer()
        this.buttons_container.data.BorderColor = "lightgray"
        this.buttons_container.data.BorderWidth = "1px"
        this.buttons_container.data.BorderStyle = "solid"
        this.buttons_container.data.BorderRadius = "4px"
        this.buttons_container.geometry.Width = "100%"
        this.centralContainer.addChild(this.buttons_container)

        this.title_line = new NeuContainer()
        this.title_line.data.Padding = new Padding().VH("18px", "16px")
        this.buttons_container.addChild(this.title_line)

        this.title = new NeuContainer()
        this.title.data.Text = "Basic buttons"
        this.title.data.TextColor = "#0000008a"
        this.title_line.addChild(this.title)

        this.content = new NeuContainer()
        this.content.data.Padding = new Padding().all("30px")
        this.buttons_container.addChild(this.content)

        //

        this.basic_line = new Line()
        this.content.addChild(this.basic_line)

        this.basic_title = new Title()
        this.basic_title.setText("Basic")
        this.basic_line.addChild(this.basic_title)

        this.basic_button_normal = new MatBasicButton()
        this.basic_button_normal.setText("Normal")
        this.basic_line.addChild(this.basic_button_normal)

        this.basic_button_primary = new MatBasicButton()
        this.basic_button_primary.setText("Primary")
        this.basic_button_primary.setTextColor("#3f51b5")
        this.basic_line.addChild(this.basic_button_primary)

        this.basic_button_accent = new MatBasicButton()
        this.basic_button_accent.setText("Accent")
        this.basic_button_accent.setTextColor("#ff4081")
        this.basic_line.addChild(this.basic_button_accent)

        this.basic_button_warn = new MatBasicButton()
        this.basic_button_warn.setText("Warn")
        this.basic_button_warn.setTextColor("#f44336")
        this.basic_line.addChild(this.basic_button_warn)

        this.basic_button_disabled = new MatBasicButton()
        this.basic_button_disabled.data.Disabled = true
        this.basic_button_disabled.setText("Disabled")
        this.basic_button_disabled.setTextColor("#00000042")
        this.basic_line.addChild(this.basic_button_disabled)

        this.basic_button_link = new MatBasicButton()
        this.basic_button_link.setText("Link")
        this.basic_button_link.setTextColor("#000000")
        this.basic_line.addChild(this.basic_button_link)

        //

        this.raised_line = new Line()
        this.content.addChild(this.raised_line)

        this.raised_title = new Title()
        this.raised_title.setText("Raised")
        this.raised_line.addChild(this.raised_title)

        this.raised_button_normal = new MatRaisedButton()
        this.raised_button_normal.setText("Normal")
        this.raised_line.addChild(this.raised_button_normal)

        this.raised_button_primary = new MatRaisedButton()
        this.raised_button_primary.setText("Primary")
        this.raised_button_primary.setTextColor("#FFFFFF")
        this.raised_button_primary.setBackgroundColor("#3f51b5")
        this.raised_line.addChild(this.raised_button_primary)

        this.raised_button_accent = new MatRaisedButton()
        this.raised_button_accent.setText("Accent")
        this.raised_button_accent.setTextColor("#FFFFFF")
        this.raised_button_accent.setBackgroundColor("#ff4081")
        this.raised_line.addChild(this.raised_button_accent)

        this.raised_button_warn = new MatRaisedButton()
        this.raised_button_warn.setText("Warn")
        this.raised_button_warn.setTextColor("#FFFFFF")
        this.raised_button_warn.setBackgroundColor("#f44336")
        this.raised_line.addChild(this.raised_button_warn)

        this.raised_button_disabled = new MatRaisedButton()
        this.raised_button_disabled.data.Disabled = true
        this.raised_button_disabled.setText("Disabled")
        this.raised_button_disabled.setTextColor("gray")
        this.raised_button_disabled.setBackgroundColor("lightgray")
        this.raised_line.addChild(this.raised_button_disabled)

        this.raised_button_link = new MatRaisedButton()
        this.raised_button_link.setText("Link")
        this.raised_button_link.setTextColor("#000000")
        this.raised_button_link.setBackgroundColor("#FFFFFF")
        this.raised_line.addChild(this.raised_button_link)

        //

        this.stroked_line = new Line()
        this.content.addChild(this.stroked_line)

        this.stroked_title = new Title()
        this.stroked_title.setText("Stroked")
        this.stroked_line.addChild(this.stroked_title)

        this.stroked_button_normal = new MatStrokedButton()
        this.stroked_button_normal.setText("Normal")
        this.stroked_line.addChild(this.stroked_button_normal)

        this.stroked_button_primary = new MatStrokedButton()
        this.stroked_button_primary.setText("Primary")
        this.stroked_button_primary.setTextColor("#3f51b5")
        this.stroked_line.addChild(this.stroked_button_primary)

        this.stroked_button_accent = new MatStrokedButton()
        this.stroked_button_accent.setText("Accent")
        this.stroked_button_accent.setTextColor("#ff4081")
        this.stroked_line.addChild(this.stroked_button_accent)

        this.stroked_button_warn = new MatStrokedButton()
        this.stroked_button_warn.setText("Warn")
        this.stroked_button_warn.setTextColor("#f44336")
        this.stroked_line.addChild(this.stroked_button_warn)

        this.stroked_button_disabled = new MatStrokedButton()
        this.stroked_button_disabled.data.Disabled = true
        this.stroked_button_disabled.setText("Disabled")
        this.stroked_button_disabled.setTextColor("lightgray")
        this.stroked_line.addChild(this.stroked_button_disabled)

        this.stroked_button_link = new MatStrokedButton()
        this.stroked_button_link.setText("Link")
        this.stroked_button_link.setTextColor("#000000")
        this.stroked_line.addChild(this.stroked_button_link)

        //

        this.flat_line = new Line()
        this.content.addChild(this.flat_line)

        this.flat_title = new Title()
        this.flat_title.setText("Flat")
        this.flat_line.addChild(this.flat_title)

        this.flat_button_normal = new MatFlatButton()
        this.flat_button_normal.setText("Normal")
        this.flat_line.addChild(this.flat_button_normal)

        this.flat_button_primary = new MatFlatButton()
        this.flat_button_primary.setText("Primary")
        this.flat_button_primary.setTextColor("white")
        this.flat_button_primary.setBackgroundColor("#3f51b5")
        this.flat_line.addChild(this.flat_button_primary)

        this.flat_button_accent = new MatFlatButton()
        this.flat_button_accent.setText("Accent")
        this.flat_button_accent.setTextColor("white")
        this.flat_button_accent.setBackgroundColor("#ff4081")
        this.flat_line.addChild(this.flat_button_accent)

        this.flat_button_warn = new MatFlatButton()
        this.flat_button_warn.setText("Warn")
        this.flat_button_warn.setTextColor("white")
        this.flat_button_warn.setBackgroundColor("#f44336")
        this.flat_line.addChild(this.flat_button_warn)

        this.flat_button_disabled = new MatFlatButton()
        this.flat_button_disabled.setText("Disabled")
        this.flat_button_disabled.setTextColor("gray")
        this.flat_button_disabled.setBackgroundColor("lightgray")
        this.flat_line.addChild(this.flat_button_disabled)

        this.flat_button_link = new MatFlatButton()
        this.flat_button_link.setText("Link")
        this.flat_button_link.setTextColor("black")
        this.flat_button_link.setBackgroundColor("#ffffff")
        this.flat_line.addChild(this.flat_button_link)

        //
A
        this.madewith = new NeuText()
        this.madewith.data.FontSize = "11px"
        this.madewith.data.Text = `Made With ${window.name} / ${window.version}`
        this.centralContainer.addChild(this.madewith)

        // console.log("draw")
        this.draw("#App")
    }
}

export let app = new Demo_MAppBar()
runApp(app)
// promiseRunApp(app).then(app => function(){
//     app.initUI()
//     Debug(app.app)
// })
// app.initUI()
// setTimeout(function() {

// }, 1000)

// Debug(app.app)
// 1