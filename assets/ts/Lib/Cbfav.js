import { NeuApp } from "../Neupica/Core/App.ts"
import { NeuColumn } from "../Layout/NeuColumn.ts"
import { runApp } from "../Neupica/Neupica2.ts"
import { NeuContainer } from "../Neupica/Components/Native/NeuContainer.ts"
import { MaterialText } from "../Neupica/Components/Native/MaterialText.ts"
import { NeuButton } from "../Neupica/Components/Widgets/NeuButton.js"
import { Box } from "../Tool/Box.js"
import { MStrokedButton } from "../Neupica/Components/Custom/deprecated/MButton.js"
import { NeuImage } from "../Neupica/Components/Native/NeuImage.ts"
import { MActionButton } from "../Neupica/Components/Custom/deprecated/MActionButton.js"
import { MRaisedButton } from "../Neupica/Components/Custom/deprecated/MButton.js"
import { makeId } from "../Neupica/Components/Create/Create.ts"
import { MButton } from "../Neupica/Components/Custom/deprecated/Material.js"
// import { work } from "./Cbfav_worker.js"


let Title1 = '1.3rem'
let Title2 = '0.8rem'
let Title3 = '0.6rem'
let Subtitle1 = '1.1rem'

let BigPadding = '3.2rem'
let MediumPadding = '2.2rem'
let SmallPadding = '1.2rem'
let SSmallPadding = '0.6rem'


class Cbfav extends NeuApp {
    constructor() {
        super()

        this.layout = new NeuColumn()
        this.layout.data.BackgroundColor = '#F2F4F3'
        this.setFullScreen(true)

        this.header = new NeuContainer()
        this.header.geometry.Padding = new Box().TBLR(MediumPadding, SmallPadding, SmallPadding, SmallPadding)
        this.header.geometry.Width = '100%'
        this.layout.addChild(this.header)

        this.headerMenu = new NeuContainer()
        this.headerMenu.data.Symmetric = 'horizontal'
        this.headerMenu.data.AlignItems = 'center'
        this.headerMenu.geometry.Width = '100%'
        this.headerMenu.data.JustifyContent = 'space-between'
        this.header.addChild(this.headerMenu)

        this.headerMenuLeft = new NeuContainer()
        this.headerMenu.addChild(this.headerMenuLeft)

        this.title = new NeuContainer()
        this.title.Text.data.Content = 'Cbfav 설문조사'
        this.setTitle(this.title.data.Text)
        this.title.data.FontSize = Title1
        this.title.data.FontWeight = 'bold'
        this.title.geometry.Padding = new Box().bottom('8px')
        this.headerMenuLeft.addChild(this.title)

        this.titleTime = new NeuContainer()
        this.titleTime.Text.data.Content = 'Today 2022.08.12'
        this.titleTime.data.FontSize = Title2
        this.headerMenuLeft.addChild(this.titleTime)

        this.headerMenuRight = new NeuContainer()
        this.headerMenu.addChild(this.headerMenuRight)

        this.menuButton = new MButton.MBasicButton()
        this.menuButton.Button.data.Padding = new Box().all(SSmallPadding)
        this.menuButton.Button.data.JustifyContent = 'center'
        this.menuButton.Button.data.BackgroundColor = 'white'
        this.menuButton.Button.data.AspectRatio = '1'
        this.menuButton.Button.data.BorderRadius = '10px'
        this.menuButton.ButtonImage.data.Src = 'https://cdn-icons-png.flaticon.com/512/100/100498.png'
        this.menuButton.ButtonImage.geometry.Width = '25px'
        this.menuButton.ButtonText.data.FontSize = Title1
        this.headerMenuRight.addChild(this.menuButton)

        this.body = new NeuContainer()
        this.body.geometry.Width = '100%'
        this.body.geometry.Height = '100%'
        this.body.geometry.Padding = new Box().all(SmallPadding)
        this.body.data.Gap = '12px'
        // this.body.geometry.Position = 'sticky'
        // this.body.geometry.OverflowX = 'hidden'
        this.body.geometry.OverflowY = 'hidden'
        this.layout.addChild(this.body)

        class CF_Selection extends NeuContainer {
            constructor() {
                super()

                this.geometry.Padding = new Box().all(SmallPadding)
                this.data.BackgroundColor = 'white'
                this.data.BorderRadius = '8px'
                this.geometry.Width = '100%'
                this.data.Symmetric = 'horizontal'
                this.data.JustifyContent = 'space-between'
                this.data.AlignItems = 'center'

                this.leftLine = new NeuContainer()
                this.addChild(this.leftLine)
                this.rightLine = new NeuContainer()
                this.addChild(this.rightLine)

                this.title = new NeuContainer()
                this.title.Text.data.Content = `설문조사 시행: ${makeId(8)}`
                this.title.data.FontSize = Title2
                this.title.data.FontWeight = 'bold'
                this.title.geometry.Margin = new Box().bottom('4px')
                this.leftLine.addChild(this.title)

                this.subtitle = new NeuContainer()
                this.subtitle.Text.data.Content = '2023.10.10 이후 가능'
                this.subtitle.data.FontSize = Title3
                this.leftLine.addChild(this.subtitle)

                this.button = new MStrokedButton()
                this.button.ButtonImage.data.Src = 'https://cdn-icons-png.flaticon.com/512/2285/2285485.png'
                this.button.ButtonImage.geometry.Width = '20px'
                this.button.ButtonImage.geometry.AspectRatio = '1'
                this.button.ButtonText.Text.data.Content = '시작'
                this.button.Button.data.Symmetric = 'horizontal'
                this.button.ButtonText.geometry.Padding = new Box().left('4px')
                this.button.Button.data.JustifyContent = 'center'
                this.rightLine.addChild(this.button)
            }
        }

        this.selection1 = new CF_Selection()
        this.body.addChild(this.selection1)

        for (let i = 0; i < 3; i ++) {
            let s = new CF_Selection()
            this.body.addChild(s)
        }

        this.footer = new NeuContainer()
        this.footer.data.Symmetric = 'horizontal'
        this.footer.geometry.Width = '100%'
        // this.layout.addChild(this.footer)

        class NavButton extends NeuContainer {
            constructor() {
                super()
                // this.data.BackgroundColor = 'green'
                this.data.Padding = new Box().all(SSmallPadding)
                this.data.BackgroundColor = 'white'
                this.geometry.Width = '20%'
                this.data.JustifyContent = 'center'
                this.data.AlignItems = 'center'
                this.data.Gap = '2px'

                this.icon = new NeuImage()
                this.icon.data.Src = 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'
                this.icon.geometry.Width = '18px'
                this.addChild(this.icon)

                this.underbar = new NeuContainer()
                this.underbar.geometry.Width = '2px'
                this.underbar.geometry.Height = '2px'
                this.underbar.data.BackgroundColor = 'red'
                this.underbar.geometry.Display = 'none'
                this.addChild(this.underbar)
            }
        }

        this.footerHome = new NavButton()
        this.footer.addChild(this.footerHome)

        this.footerPerson = new NavButton()
        this.footer.addChild(this.footerPerson)



        this.setLayout(this.layout)
        this.draw('#App')
    }
}

function refresh() {
    app.titleTime.Text.data.Content = `Today ${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`





}

function work() {
    refresh()
    setInterval(refresh, 1000 * 60 * 60)

    app.menuButton.watchEvent('click', (e) => {
        alert('메뉴 버튼은 아직 기능하지 않습니다')
    })

    app.body.children.forEach(child => {
        child.button.watchEvent('click', e => {
            alert('참여 불가능 기간입니다')
        })
    })

    // simpleApp.body.children
}

export let app = new Cbfav()
window.app = app
runApp(app)
work()

