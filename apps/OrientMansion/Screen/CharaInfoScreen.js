import { NeuContainer } from "../../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { NeuScaffold } from "../../../assets/ts/Layout/NeuScaffold.js"
import { MaterialSymbolsSharp } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import {
    IconButton
} from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { TopAppBar } from "../../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { NeuImage } from "../../../assets/ts/Neupica/Components/Native/NeuImage.js"
import { Typography } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { colorScheme } from "../../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Box } from "../../../assets/ts/Tool/Box.js"

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export let CharacterInfo = {
    DE: {
        job: '탐정',
        room: '202 호실',
        info: [
            '- 당신이 가진 능력치들을 가지고 있다'
        ],
        hand: 'right',
        gun: false,
        profile: "./Image/Chara/DE.webp",
        sex: "herma",
    },
    PO: {
        job: '경찰',
        room: "102 호실",
        info: [
            '- 정의감이 넘치며, 근력이 세다'
        ],
        hand: 'left',
        gun: true,
        profile: "./Image/Chara/PO.webp",
        sex: "female",

    },
    TE: {
        job: "선생",
        room: "203 호실",
        info: [
            '- 스포츠 휴먼쉽을 그 누구보다도 사랑한다'
        ],
        hand: 'right',
        gun: false,
        profile: "./Image/Chara/TE.png",
        sex: "male",

    },
    DU: {
        job: '공작',
        room: "공작의 방",
        info: [
            '- 성격이 괴팍하며, 비협조적이다'
        ],
        hand: 'right',
        gun: false,
        profile: "./Image/Chara/DU.jpg",
        sex: "male",

    },
    EN: {
        job: '기술자',
        room: '보일러실',
        info: [
            '- 미치광이이며, 집사에게만 헌신한다'
        ],
        hand: 'left',
        gun: true,
        profile: "./Image/Chara/EN.png",
        sex: "male",

    },
    NO: {
        job: '일반인',
        room: '101 호실',
        info: [
            '- 기술자와 친하며, 힘이 매우 세다'
        ],
        hand: 'right',
        gun: false,
        profile: "./Image/Chara/NO.jpg",
        sex: "male",

    },
    DO: {
        job: '의사',
        room: '201 호실',
        info: [
            '- 소심하고 겁이 많으며 계획적이다'
        ],
        hand: 'right',
        gun: false,
        profile: "./Image/Chara/DO.png",
        sex: "female",

    },
    CA: {
        job: '집사',
        room: '??',
        info: [
            '- 공작가에게 60년동안 근무하였다',
            '- 집 구조를 훤히 꿰고 있다'
        ],
        hand: 'right',
        gun: true,
        profile: "./Image/Chara/CA.jpg",
        sex: "male",

    },
}

export class CharaInfoScreen extends NeuContainer {
     constructor(parent) {
        super()

        this.parent = parent

        this.layout = new NeuScaffold()
        this.layout.geometry.Width = '100%'
        this.layout.geometry.Height = '100%'


        this.BackIcon = new MaterialSymbolsSharp('arrow_back_ios_new')
        this.BackIconButton = new IconButton(this.BackIcon)
        this.BackIconButton.watchEvent('click', function() {
            this.parent.hideExScreen(this)
            this.parent.NavigationBarItem2.click()
        }.bind(this))
        this.AppBar = new TopAppBar()
        this.AppBar.setHeadline('인물 정보 (8명)')
        this.AppBar.setLeading(this.BackIconButton)
        this.layout.head.addChild(this.AppBar)

        this.layout.body.data.Padding = '18rem'
        this.layout.body.data.Gap = '18rem'
        let handwriting = 'Nanum Pen Script'

        class InfoLine extends NeuContainer {
            constructor() {
                super()
                this.data.Symmetric = 'horizontal'
                // this.data.Gap = '12rem'

                this.Image = new NeuImage()
                this.Image.geometry.Filter = 'grayscale(100%) sepia(100%) brightness(100%) contrast(85%)'
                this.Image.geometry.Height = '120px'
                this.Image.geometry.Width = '80px'
                this.Image.data.ObjectFit = 'cover'
                this.Image.geometry.Transform = `rotate(${getRandomArbitrary(-5, 5)}deg)`

                this.InfoBox = new NeuContainer()
                this.InfoBox.geometry.Width = '100%'
                this.InfoBox.geometry.Margin = new Box().left('18rem')
                
                this.Title = new NeuContainer()
                this.Title.data.FontSize = Typography.Size.HeadlineMedium
                this.Title.data.TextColor = colorScheme.onBackground
                // this.Title.data.Content = '탐정 // 202 호실'
                this.Title.data.FontFamily = handwriting
                this.InfoBox.addChild(this.Title)
                
                this.SubTitle = new NeuContainer()
                this.SubTitle.data.FontSize = Typography.Size.TitleLarge
                this.SubTitle.data.TextColor = colorScheme.onSurfaceVariant
                // this.SubTitle.data.Content = '- 당신의 능력치가 발현됩니다'
                this.SubTitle.data.FontFamily = handwriting
                this.InfoBox.addChild(this.SubTitle)

                this.addChild(this.Image)
                this.addChild(this.InfoBox)
            }
        }

        Object.keys(CharacterInfo).forEach(function(key){
            this[key] = new InfoLine()
            let currentInfoLine = this[key]
            let currentCharaInfo = CharacterInfo[key]
            let sexSymbol = ''
            if (currentCharaInfo['sex'] === 'male') {
                sexSymbol = '남 ♂'
            } else if (currentCharaInfo['sex'] === 'female') {
                sexSymbol = '여 ♀'
            } else {
                sexSymbol = '자웅 ⚥'
            }
            currentInfoLine.Image.data.Src = currentCharaInfo['profile']
            currentInfoLine.Title.data.Content = `${currentCharaInfo['job']} // ${currentCharaInfo['room']} (${sexSymbol})`
            currentInfoLine.SubTitle.data.Content = currentCharaInfo['info'][0]
            this.layout.body.addChild(currentInfoLine)
        }.bind(this))

        // this.DE = new InfoLine()
        // this.DE.Image.data.Src = "./Image/Chara/DE.webp"
        // this.DE.Title.data.Content = '탐정 // 202 호실'
        // this.DE.SubTitle.data.Content = '- 당신의 능력치가 발현됩니다'
        // this.layout.body.addChild(this.DE)

        this.addChild(this.layout)
    }
}