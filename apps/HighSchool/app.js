import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { IconButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { Icon } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { MaterialSymbolsRounded } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
import {
    FloatingActionButtons
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/FloatingActionButtons.js"
import { Menu } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Menu.js"
import { MenuItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Selection/Menu.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { BottomAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/BottomAppBar.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import { MaterialSymbolsSharp } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { List } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/List.js"
import { ListItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/List.js"
import { harray } from "./data.js"
import { hackbuns } from "./data.js"
import { Box } from "../../assets/ts/Tool/Box.js"

initModal()

export class HighSchool extends NeuApp {
    constructor() {
        super()

        this.layout = new NeuScaffold()
        this.setFullScreen(true)


        this.AppBar = new TopAppBar()
        this.AppBar.setHeadline('고등학교 배정조회')
        this.AppBar.HeadLine.data.FontWeight = 'bold'
        this.AppBarIcon = new MaterialSymbolsRounded('school')
        this.AppBarIcon.data.FontSize = '24rem'
        this.AppBarIconButton = new IconButton(this.AppBarIcon)
        this.AppBar.setLeading(this.AppBarIconButton)
        this.AppBarInfoTrailIcon = new MaterialSymbolsRounded('help')
        this.AppBarInfoTrailIconButton = new IconButton(this.AppBarInfoTrailIcon)
        this.AppBar.addTrailing(
            this.AppBarInfoTrailIconButton
        )
        this.layout.head.setAppBar(this.AppBar)

        this.List = new List()
        this.layout.body.addChild(this.List)

        this.listItems = []

        let class_lastest = 0

        for (let i = 0; i < harray.length; i++) {
            let hackbun = hackbuns[i]
            let grade = hackbun.slice(0, 1)
            let class_ = hackbun.slice(1, 2)
            let class_Parsed = parseInt(class_)
            let number = hackbun.slice(2, 4)
            let listItem = new ListItem()
            listItem.hackbun = hackbun
            if (class_lastest != class_Parsed) {
                class_lastest = class_Parsed
                let classDividing = new ListItem()
                classDividing.Headline.data.Content = `${grade}학년 ${class_}반`
                classDividing.Headline.data.FontWeight = 'bold'
                classDividing.DeActivateRipple()
                this.List.addChild(classDividing)
            }
            listItem.Headline.data.Content = `${grade}학년 ${class_}반 ${number}번`
            listItem.SupportingText.data.Content = harray[i]
            let listItemCheckIcon = new MaterialSymbolsRounded('download')
            let listItemCheckIconButton = new IconButton(listItemCheckIcon)
            listItem.Trailing.addChild(listItemCheckIconButton)
            listItem.Right.data.JustifyContent = 'center'
            listItem.Right.geometry.Height = '48px'
            // console.log(listItem.Trailing.data.JustifyContent)
            listItemCheckIconButton.DeActivateRipple()
            listItemCheckIconButton.watchEvent('click', function() {
                listItemCheckIcon.data.Content = 'hourglass_top'

                fetch(`http://asphodel.kro.kr:8000/${listItem.hackbun}`)
                    .then((data) => {
                        data.json().then((json) => {
                            // listItemCheckIcon.Text.data.Content = ''
                            json = JSON.parse(json)
                            listItemCheckIconButton.Hide()
                            let js = json['생년월일']
                            if (js) {
                                listItem.SupportingText.data.Content = listItem.SupportingText.data.Content + ` (${js})`
                            }

                            let text = new NeuContainer()
                            text.geometry.Height = '100%'
                            text.geometry.Margin = new Box().right('12px')
                            text.data.FontSize = Typography.Size.TitleMedium

                            text.data.Content = json['배정학교']
                            if (json['배정학교'].toString().includes('전북대학교사범')) {
                                text.data.Content = '전북대학교사범대학\n부설고등학교'
                                text.data.TextAlign = 'center'
                                text.data.FontSize = '14rem'
                            } else if (json['배정학교'].toString().includes('전주중앙여자')) {
                                text.data.FontSize = '13rem'
                            } else if (json['배정학교'].toString().includes('미상')) {
                                // text.data.FontSize = '10rem'
                                text.Hide()
                                listItemCheckIcon.data.Content = 'do_not_disturb_on'
                                listItemCheckIconButton.Show()
                            }
                            text.data.JustifyContent = 'center'
                            listItem.Trailing.addChild(text)
                        })
                    })
                    .catch((error) => {
                        console.error('failure:', error)
                    })



            })
            listItemCheckIconButton.element.click()
            this.listItems.push(listItem)
            this.List.addChild(listItem)
        }

        this.draw('#App')
    }
}

export let app = new HighSchool()
runApp(app)

