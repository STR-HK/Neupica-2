import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import {
    NavigationRail
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationRail.js"
import {
    FloatingActionButtons
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/FloatingActionButtons.js"
import {
    NavigationRailItem
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationRail.js"
import { Divider } from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Divider.js"
import { List } from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/List.js"
import { ListItem } from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/List.js"
import { NeuImage } from "../../../assets/ts/Neupica/Components/Native/NeuImage.js"
import { MaterialSymbolsSharp } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { colorScheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { ProlougeScreen } from "./ProlougeScreen.js"
import { CharaInfoScreen } from "./CharaInfoScreen.js"
import { Typography } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { Padding } from "../../../assets/ts/Tool/Padding.js"

export class SimpleDimpleNoteItem extends ListItem {
    constructor(icon, headline, supporting) {
        super()
        this.Headline.data.FontSize = '19rem'
        this.Headline.data.FontWeight = 'bold'
        this.SupportingText.data.FontSize = '17rem'

        this.Icon = new MaterialSymbolsSharp(icon)
        this.Leading.addChild(this.Icon)
        this.Headline.data.Text = headline
        this.SupportingText.data.Text = supporting
        this.geometry.Width = '100%'
        this.DeActivateRipple()
    }
}

export class NoteScreen extends NeuContainer {
    constructor(parent) {
        super()
        this.parent = parent

        this.data.Symmetric = 'horizontal'

        class CustomRail extends NavigationRail {
            constructor() {
                super()
                this.data.Gap = '0rem'
                // this.fab =

            }
            // childrenUpdated(...args) {
            //     super.childrenUpdated(...args)
            //     console.log('c')
            //     this.addSlientChild(new Divider())
            // }
            InActivateChildren() {
                this.children.forEach(child => {
                    let realChild = child.children[1]
                    // console.log(child)
                    if (realChild instanceof NavigationRailItem) {
                        realChild.InActive()
                    }
                })
            }
        }

        this.RailFAB = new MaterialSymbolsSharp('schedule')
        this.RailFAB.data.FontSize = ''
        // this.RailFAB.data.Text =
        this.RailFAB.data.TextColor = colorScheme.onPrimaryContainer
        this.RailFAB.data.FontSize = Typography.Size.HeadlineSmall
        // this.RailFAB.geometry.Margin = '12rem'
        // this.RailFAB.Container.DeActivateRipple()

        this.Rail = new CustomRail()
        this.Rail.geometry.Height = 'fit-content'
        this.Rail.geometry.Width = '100%'
        this.Rail.data.AlignItems = 'flex-start'
        this.addChild(this.Rail)




        class RailCurrentTimeLine extends NeuContainer {
            constructor() {
                super()

            }
            updateTimeLine(newTimeLine) {
                this.data.Text = `현재 시각: ${newTimeLine}`

            }
        }

        this.RailFirstLine = new NeuContainer()
        this.RailFirstLine.data.Symmetric = 'horizontal'
        this.RailFirstLine.data.Padding = '4rem'
        this.RailFirstLine.data.JustifyContent = 'center'
        // this.RailFirstLine.data.Margin = new Padding().left('18rem')
        this.RailFirstLine.data.Gap = '4rem'
        this.RailFirstLine.geometry.Width = '100%'
        this.RailFirstLine.addChild(this.RailFAB)
        this.RailCurrentTimeLine = new RailCurrentTimeLine()
        this.RailCurrentTimeLine.data.FontSize = Typography.Size.TitleMedium
        this.RailCurrentTimeLine.data.TextColor = colorScheme.onSecondaryContainer
        this.RailCurrentTimeLine.data.JustifyContent = 'center'
        this.RailFirstLine.addChild(this.RailCurrentTimeLine)

        this.Rail.addChild(this.RailFirstLine)

        class RailItemContainerCustom extends NeuContainer {
            constructor() {
                super()
                this.geometry.Width = '100%'
                this.addChild(new Divider())

                this.Hide()
                // this.counter = 0
            }


        }

        class RailItemInnerCustom extends NeuContainer {
            constructor(parent) {
                super()

                this.parent = parent

                this.geometry.Width = '100%'
            }

            addChild(child) {
                super.addChild(child)
                this.parent.Show()
            }
        }

        class CustomNavigationRailItem extends NavigationRailItem {
            constructor(parent) {
                super()
                this.parent = parent
                this.data.Symmetric = 'horizontal'
                this.geometry.Width = 'fit-content'
                this.data.Padding = new Padding().horizontal('8rem')
                this.data.Gap = '8rem'
                this.geometry.Height = '36rem'
                // this.LabelText.data.FontWeight = 'bold'
            }

            Clicked() {
                super.Clicked()
                this.parent.updateTimeLine(this.LabelText.data.Text)
            }
        }

        this.RailItemPDContainer = new RailItemContainerCustom()
        this.RailItemPD = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemPDInner = new RailItemInnerCustom(this.RailItemPDContainer)
        this.RailItemPDContainer.addChild(this.RailItemPD)
        this.RailItemPDContainer.addChild(this.RailItemPDInner)
        this.RailItemPD.Icon.data.Text = 'routine'
        this.RailItemPD.LabelText.data.Text = '1일차 아침'
        this.Rail.addChild(this.RailItemPDContainer)
        this.RailItemPNContainer = new RailItemContainerCustom()
        this.RailItemPN = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemPNInner = new RailItemInnerCustom(this.RailItemPNContainer)
        this.RailItemPNContainer.addChild(this.RailItemPN)
        this.RailItemPNContainer.addChild(this.RailItemPNInner)
        this.RailItemPN.Icon.data.Text = 'light_mode'
        this.RailItemPN.LabelText.data.Text = '1일차 점심'
        this.Rail.addChild(this.RailItemPNContainer)
        this.RailItemPAContainer = new RailItemContainerCustom()
        this.RailItemPA = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemPAInner = new RailItemInnerCustom(this.RailItemPAContainer)
        this.RailItemPAContainer.addChild(this.RailItemPA)
        this.RailItemPAContainer.addChild(this.RailItemPAInner)
        this.RailItemPA.Icon.data.Text = 'wb_twilight'
        this.RailItemPA.LabelText.data.Text = '1일차 저녁'
        this.Rail.addChild(this.RailItemPAContainer)
        this.RailItemPMContainer = new RailItemContainerCustom()
        this.RailItemPM = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemPMInner = new RailItemInnerCustom(this.RailItemPMContainer)
        this.RailItemPMContainer.addChild(this.RailItemPM)
        this.RailItemPMContainer.addChild(this.RailItemPMInner)
        this.RailItemPM.Icon.data.Text = 'clear_night'
        this.RailItemPM.LabelText.data.Text = '1일차 자정'
        this.Rail.addChild(this.RailItemPMContainer)

        // this.RailITemPSDivider = new Divider()
        // this.Rail.addChild(this.RailITemPSDivider)

        this.RailItemSDContainer = new RailItemContainerCustom()
        this.RailItemSD = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemSDInner = new RailItemInnerCustom(this.RailItemSDContainer)
        this.RailItemSDContainer.addChild(this.RailItemSD)
        this.RailItemSDContainer.addChild(this.RailItemSDInner)
        this.RailItemSD.Icon.data.Text = 'routine'
        this.RailItemSD.LabelText.data.Text = '2일차 아침'
        this.Rail.addChild(this.RailItemSDContainer)
        this.RailItemSNContainer = new RailItemContainerCustom()
        this.RailItemSN = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemSNInner = new RailItemInnerCustom(this.RailItemSNContainer)
        this.RailItemSNContainer.addChild(this.RailItemSN)
        this.RailItemSNContainer.addChild(this.RailItemSNInner)
        this.RailItemSN.Icon.data.Text = 'light_mode'
        this.RailItemSN.LabelText.data.Text = '2일차 점심'
        this.Rail.addChild(this.RailItemSNContainer)
        this.RailItemSAContainer = new RailItemContainerCustom()
        this.RailItemSA = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemSAInner = new RailItemInnerCustom(this.RailItemSAContainer)
        this.RailItemSAContainer.addChild(this.RailItemSA)
        this.RailItemSAContainer.addChild(this.RailItemSAInner)
        this.RailItemSA.Icon.data.Text = 'wb_twilight'
        this.RailItemSA.LabelText.data.Text = '2일차 저녁'
        this.Rail.addChild(this.RailItemSAContainer)
        this.RailItemSMContainer = new RailItemContainerCustom()
        this.RailItemSM = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemSMInner = new RailItemInnerCustom(this.RailItemSMContainer)
        this.RailItemSMContainer.addChild(this.RailItemSM)
        this.RailItemSMContainer.addChild(this.RailItemSMInner)
        this.RailItemSM.Icon.data.Text = 'clear_night'
        this.RailItemSM.LabelText.data.Text = '2일차 자정'
        this.Rail.addChild(this.RailItemSMContainer)

        // this.RailITemSTDivider = new Divider()
        // this.Rail.addChild(this.RailITemSTDivider)

        this.RailItemTDContainer = new RailItemContainerCustom()
        this.RailItemTD = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemTDInner = new RailItemInnerCustom(this.RailItemTDContainer)
        this.RailItemTDContainer.addChild(this.RailItemTD)
        this.RailItemTDContainer.addChild(this.RailItemTDInner)
        this.RailItemTD.Icon.data.Text = 'routine'
        this.RailItemTD.LabelText.data.Text = '3일차 아침'
        this.Rail.addChild(this.RailItemTDContainer)
        this.RailItemTNContainer = new RailItemContainerCustom()
        this.RailItemTN = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemTNInner = new RailItemInnerCustom(this.RailItemTNContainer)
        this.RailItemTNContainer.addChild(this.RailItemTN)
        this.RailItemTNContainer.addChild(this.RailItemTNInner)
        this.RailItemTN.Icon.data.Text = 'light_mode'
        this.RailItemTN.LabelText.data.Text = '3일차 점심'
        this.Rail.addChild(this.RailItemTNContainer)
        this.RailItemTAContainer = new RailItemContainerCustom()
        this.RailItemTA = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemTAInner = new RailItemInnerCustom(this.RailItemTAContainer)
        this.RailItemTAContainer.addChild(this.RailItemTA)
        this.RailItemTAContainer.addChild(this.RailItemTAInner)
        this.RailItemTA.Icon.data.Text = 'wb_twilight'
        this.RailItemTA.LabelText.data.Text = '3일차 저녁'
        this.Rail.addChild(this.RailItemTAContainer)
        this.RailItemTMContainer = new RailItemContainerCustom()
        this.RailItemTM = new CustomNavigationRailItem(this.RailCurrentTimeLine)
        this.RailItemTMInner = new RailItemInnerCustom(this.RailItemTMContainer)
        this.RailItemTMContainer.addChild(this.RailItemTM)
        this.RailItemTMContainer.addChild(this.RailItemTMInner)
        this.RailItemTM.Icon.data.Text = 'clear_night'
        this.RailItemTM.LabelText.data.Text = '3일차 자정'
        this.Rail.addChild(this.RailItemTMContainer)
        this.Rail.addChild(new Divider())

        // this.RailITemTQDivider = new Divider()
        // this.Rail.addChild(this.RailITemTQDivider)
        //
        // this.RailItemQD = new NavigationRailItem()
        // this.RailItemQD.Icon.data.Text = 'routine'
        // this.RailItemQD.LabelText.data.Text = '4일차 아침'
        // this.Rail.addChild(this.RailItemQD)
        // this.RailItemQN = new NavigationRailItem()
        // this.RailItemQN.Icon.data.Text = 'light_mode'
        // this.RailItemQN.LabelText.data.Text = '4일차 점심'
        // this.Rail.addChild(this.RailItemQN)
        // this.RailItemQA = new NavigationRailItem()
        // this.RailItemQA.Icon.data.Text = 'wb_twilight'
        // this.RailItemQA.LabelText.data.Text = '4일차 저녁'
        // this.Rail.addChild(this.RailItemQA)
        // this.RailItemQM = new NavigationRailItem()
        // this.RailItemQM.Icon.data.Text = 'clear_night'
        // this.RailItemQM.LabelText.data.Text = '4일차 자정'
        // this.Rail.addChild(this.RailItemQM)

        this.RailItems = [
            this.RailItemPD,
            this.RailItemPN,
            this.RailItemPA,
            this.RailItemPM,

            this.RailItemSD,
            this.RailItemSN,
            this.RailItemSA,
            this.RailItemSM,

            this.RailItemTD,
            this.RailItemTN,
            this.RailItemTA,
            this.RailItemTM,

            // this.RailItemQD,
            // this.RailItemQN,
            // this.RailItemQA,
            // this.RailItemQM,
        ]

        this.RailItemPD.Clicked()

        this.NoteList = new List()
        this.NoteList.data.BackgroundColor = colorScheme.surfaceVariant
        this.NoteList.geometry.Width = '100%'
        // this.NoteList.geometry

        // this.NoteItemProlouge = new ListItem()
        // this.NoteItemProlougeIcon = new NeuImage()
        // this.NoteItemProlougeIcon.data.Src = 'https://cdn.discordapp.com/attachments/1050680141178736680/1052596127079338045/1e260fdf23705079dd3ee004d5461dac.jpg'
        // this.NoteItemProlougeIcon.geometry.Width = '112rem'
        // this.NoteItemProlougeIcon.geometry.Height = '64rem'
        // this.NoteItemProlougeIcon.data.ObjectFit = 'cover'
        // this.NoteItemProlouge.Headline.data.Text = '프롤로그'
        // this.NoteItemProlouge.SupportingText.data.Text = '탭하여 읽으세요'
        // this.NoteItemProlouge.Leading.addChild(this.NoteItemProlougeIcon)
        // this.RailItemPDInner.addChild(this.NoteItemProlouge)
        // this.NoteItemProlouge.watchEvent('click', function() {
        //     this.parent.showExScreen(new ProlougeScreen(this.parent))
        //     window.modal.removeModal(this.parent.AddNoteButton)
        // }.bind(this))

        this.NeuNoteItemProlouge = new SimpleDimpleNoteItem(
            'text_snippet',
            '프롤로그',
            '탭하여 읽으세요'
        )

        // this.NeuNoteItemProlougeIcon = new NeuImage()
        // this.NeuNoteItemProlougeIcon.data.Src = 'https://cdn.discordapp.com/attachments/1050680141178736680/1052596127079338045/1e260fdf23705079dd3ee004d5461dac.jpg'
        // this.NeuNoteItemProlougeIcon.geometry.Width = '112rem'
        // this.NeuNoteItemProlougeIcon.geometry.Height = '64rem'
        // this.NeuNoteItemProlougeIcon.data.ObjectFit = 'cover'
        // this.NeuNoteItemProlouge.Headline.data.Text = '프롤로그'
        // this.NeuNoteItemProlouge.SupportingText.data.Text = '탭하여 읽으세요'
        // this.NeuNoteItemProlouge.Leading.addChild(this.NeuNoteItemProlougeIcon)
        this.RailItemPDInner.addChild(this.NeuNoteItemProlouge)
        this.NeuNoteItemProlouge.watchEvent('click', function() {
            this.parent.showExScreen(new ProlougeScreen(this.parent))
            window.modal.removeModal(this.parent.AddNoteButton)
        }.bind(this))
        this.NeuNoteItemProlouge.ActivateRipple()


        this.NoteItemCharaInfo = new SimpleDimpleNoteItem(
            'contact_emergency',
            '등장인물 정보',
            '탭하여 등장인물들에 대한 간단한 정보를 제공받습니다'
        )
        this.RailItemPDInner.addChild(this.NoteItemCharaInfo)
        this.NoteItemCharaInfo.ActivateRipple()
        this.NoteItemCharaInfo.watchEvent('click', function() {
            this.parent.showExScreen(new CharaInfoScreen(this.parent))
            window.modal.removeModal(this.parent.AddNoteButton)
        }.bind(this))

        this.DominoGameTimeOut = new SimpleDimpleNoteItem(
            'extension',
            '도미노 게임 진행',
            ''
        )
        let gb = this.DominoGameTimeOut
        this.DominoGameTimeOut.ActivateRipple()
        this.RailItemPDInner.addChild(this.DominoGameTimeOut)
        this.DominoGameTimeOut.watchEvent('click', function() {
            if (this.dominoEnded == undefined || this.dominoEnded == null || this.dominoEnded == false) {
                this.AddNoteButton.element.click()
            } else {
                gb.DeActivateRipple()
            }
        }.bind(this.parent))

        // this.addChild(this.NoteList)

    }
}