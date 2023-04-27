import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { IconButton } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { MaterialSymbolsSharp } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { NavigationBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { NavigationBarItem } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { Box } from "../../assets/ts/Tool/Box.js"
import { ExtendedFAB } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/FloatingActionButtons/ExtendedFAB.js"
import { BasicDialogs } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Containment/Dialogs/BasicDialogs.js"
import { ClueScreen } from "./Screen/ClueScreen.js"
import { NoteScreen } from "./Screen/NoteScreen.js"
import { OpeningScreen } from "./Screen/OpeningScreen.js"
import { FinishScreen } from "./Screen/FinishScreen.js"
import { setTheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { getStyle } from "../../assets/ts/Neupica/DOM/Contents.js"
import { CetneredTextField } from "./Widget/CetneredTextField.js"
import { SimpleDimpleNoteItem } from "./Screen/NoteScreen.js"
import { POA } from "./Data/PO.js"
import { POR } from "./Data/PO.js"
import { PO } from "./Data/PO.js"
import { EN_FFF } from "./Data/EN.js"
import { SuccessScreen } from "./Screen/ResultScreen.js"
import { FailureScreen } from "./Screen/ResultScreen.js"
import { DU_FFF } from "./Data/DU.js"
import { NO_FFF } from "./Data/NO.js"
import { TE_FFF } from "./Data/TE.js"

initModal()

setTheme('#974238')
// setStorageDark('light')

getStyle('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Nanum+Pen+Script&family=Pacifico&display=swap')

export function customStarting(text, prefix) {
    if (text.slice(0, prefix.length) == prefix) {
        return true
    } else {
        return false
    }
}

export class OrientMansion extends NeuApp {
    constructor() {
        super()
        this.app.style.width = '100%'
        this.app.style.height = '100%'

        this.layout = new NeuScaffold()
        this.layout.element.style.width = "100%"
        this.layout.element.style.height = '100%'




        this.layout.body.geometry.OverflowX = 'hidden'

        this.DOMAIN = 'http://asphodel.kro.kr:8000/'

        this.AppBarIcon = new MaterialSymbolsSharp('tram')
        this.AppBarIconButton = new IconButton(this.AppBarIcon)

        this.Timer = new NeuContainer()
        this.Timer.data.Content = 'Loading'
        this.Timer.geometry.Width = 'max-content'
        this.Timer.data.FontSize = Typography.Size.TitleLarge
        this.Timer.data.Margin = new Box().right('12rem')

        this.AppBar = new TopAppBar()
        this.AppBar.setHeadline('오리엔트 특급저택')
        this.AppBar.setLeading(this.AppBarIconButton)
        this.AppBar.addTrailing(this.Timer)
        this.layout.head.addChild(this.AppBar)

        this.clueScreen = new ClueScreen(this)
        this.noteScreen = new NoteScreen(this)
        this.finishScreen = new FinishScreen(this)

        this.extend(this.clueScreen)
        this.extend(this.noteScreen)
        this.extend(this.finishScreen)

        this.layout.body.data.BackgroundColor = colorScheme.surfaceVariant

        this.NavigationBar = new NavigationBar()

        this.NavigationBarItem1 = new NavigationBarItem()
        this.NavigationBarItem1.Icon.data.Content = 'history_edu'
        this.NavigationBarItem1.Label.data.Content = '질의 응답'
        // this.NavigationBar.addChild(this.NavigationBarItem1)
        this.NavigationBarItem1.watchEvent('click', function() {
            this.layout.body.clearChildren()
            this.layout.body.addChild(this.clueScreen)
            window.modal.removeModal(this.AddNoteButton)
        }.bind(this))

        this.AddNoteButton = new ExtendedFAB()
        this.AddNoteButton.Icon.data.Content = 'add_task'
        this.AddNoteButton.LabelText.data.Content = '조사 내용 추가'
        this.AddNoteButton.data.Margin = new Box().LTRB('0rem', '0rem', '16rem', '16rem')
        this.AddNoteButton.watchEvent('click', function() {
            let bd = new BasicDialogs()
            bd.Icon.data.Content = 'add_task'
            bd.Headline.data.Content = '조사 내용 추가'
            let bdinput = new CetneredTextField()
            bdinput.geometry.Width = '200px'
            bdinput.LabelText.data.Content = '조사 코드 입력'
            bd.SupportingText.addChild(bdinput)
            bd.SupportingText.geometry.Width = '90%'
            bd.TextButton.data.Content = '확인'
            bd.CloseButton.data.Content = '취소'
            bd.TextButton.watchEvent('click', function() {
                let input = bdinput.Input.data.Value
                this.verifyInput(input.toUpperCase(), true)
            }.bind(this))
            bd.Scrim.data.JustifyContent = 'flex-start'
            bd.Container.data.Margin = '120px'
            window.modal.addInteractiveModal(bd)
        }.bind(this))

        this.NavigationBarItem2 = new NavigationBarItem()
        this.NavigationBarItem2.Icon.data.Content = 'draw'
        this.NavigationBarItem2.Label.data.Content = '조사 수첩'
        this.NavigationBar.addChild(this.NavigationBarItem2)
        this.NavigationBarItem2.watchEvent('click', function() {
            this.layout.body.clearChildren()
            this.layout.body.addChild(this.noteScreen)
            window.modal.removeModal(this.AddNoteButton)
            window.modal.addInteractiveModal(this.AddNoteButton)
            window.modal.layout.data.JustifyContent = 'flex-start'
            this.AddNoteButtonLayer = window.modal.getLayer(this.AddNoteButton)
            this.AddNoteButtonLayer.data.AlignItems = 'flex-end'
            // this.AddNoteButtonLayer.data.JustifyContent = 'flex-end'
            this.AddNoteButtonLayer.geometry.Margin = '118px 0 0 0'

            window.addEventListener('resize', function() {
                this.AddNoteButtonLayer.geometry.Height = window.innerHeight - 80 + 'px'
            }.bind(this))
            window.dispatchEvent(new Event('resize'))
        }.bind(this))

        this.NavigationBarItem3 = new NavigationBarItem()
        this.NavigationBarItem3.Icon.data.Content = 'verified'
        this.NavigationBarItem3.Label.data.Content = '추리 완성'
        this.NavigationBar.addChild(this.NavigationBarItem3)
        this.NavigationBarItem3.watchEvent('click', function() {
            this.layout.body.clearChildren()
            this.layout.body.addChild(this.finishScreen)
            window.modal.removeModal(this.AddNoteButton)

        }.bind(this))

        this.layout.foot.addChild(this.NavigationBar)
        this.setLayout(this.layout)
        this.draw('#App')



        this.openingScreen = new OpeningScreen(this)
        this.showExScreen(this.openingScreen)

        // this.Code = "1"
        // this.charaInfoScreen = new CharaInfoScreen(this)
        // this.showExScreen(this.charaInfoScreen)
        // this.NavigationBarItem2.click()


        let result = localStorage.getItem('result')
        if (result === 'success') {
            this.showExScreen(new SuccessScreen(this.parent))
        } else if (result === 'failure') {
            this.showExScreen(new FailureScreen(this.parent))
        }

        this.prevScreen = undefined
    }

    reloaded(userID) {
        let app = this
        fetch(`${this.DOMAIN}/reloaded/${this.Code}`)
            .then((data) => {
                data.json().then((json) => {
                    Array.from(json).forEach(item => {
                        app.verifyInput(item, false)
                    })
                })
            })
            .catch((error) => {
                console.error('failure:', error)
            })
    }

    return(json){
        return json
    }

    routing(routeID) {
        console.warn('routeod'+ routeID)
        let app = this
        fetch(`${this.DOMAIN}/routing/${this.Code}?gameid=${routeID}`)
            .then(data => {
                data.json().then(json => {
                    // console.log(json)
                    app.route = json
                    // app.route = "EN"
                    // console.log(app.route)
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

    saveToServer(gameID) {
        fetch(`${this.DOMAIN}/saveHistory/${this.Code}/${gameID}`)
            .then(data => {
            })
            .catch(error => {
                console.error(error)
            })
    }

    serve(gameID) {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function rankRoute(route){
            if (route == 'DR' || route == 'EN') {
                return  '당신은 그 누구보다도 일찍 푸는데 성공하였습니다'
            } else if (route == 'PO') {
                return  '당신은 빠르게 정답을 적어냈습니다'
            } else if (route == "NO") {
                return  '당신은 2번째로 문제를 풀어냈습니다'
            } else {
                return  '당신은 마지막으로 문제를 풀었습니다'
            }
        }
        let content = new String()
        let bItem = true

        const NO_ANSWER = "130"
        const PO_ANSWER = "43"
        const DO_ANSWER = "743"
        const DE_ANSWER = "6543"
        const TE_ANSWER = "204"
        const DU_ANSWER = "883"
        const EN_ANSWER = "검빨파"

        const NO_ALIBI = "GRE"
        const PO_ALIBI = "KMU"
        const DO_ALIBI = "EWF"
        const DE_ALIBI = "NGY"
        const TE_ALIBI = "TUY"
        const DU_ALIBI = "ERE"
        const EN_ALIBI = "GSF"
        const CA_ALIBI = "CAN"

        this.PO_FUNC = PO
        this.EN_FUNC = EN_FFF
        this.DU_FUNC = DU_FFF
        this.NO_FUNC = NO_FFF
        this.TE_FUNC = TE_FFF

        if (gameID.startsWith('3')) {
            if (gameID.startsWith('352461')) {
                let route = gameID.slice(6, 8)
                gameID = gameID.slice(0, 6)

                if (route != "") {
                    gameID += route
                    app.routing(route)
                    content = rankRoute(route)
                    return this.return({
                        type: 'domino',
                        gameID: gameID,
                        title: '도미노 게임 결과',
                        content: content,
                        timeline: 'PN',
                        bItem: bItem,
                    })
                }
                // let expire = (this.dominotime - new Date()).toString() / 1000
                // let maxTime = 120
                // let overed = maxTime - expire
                // if (overed <= 60) {
                //     let randInt = getRandomInt(0, 1)
                //     if (randInt == 0) {
                //         route = 'DR'
                //     } else {
                //         route = 'EN'
                //     }
                // } else if (60 <= overed && overed <= 90) {
                //     route = 'PO'
                // } else if (90 <= overed && overed <= 120) {
                //     route = 'NO'
                // } else {
                //     app.noteScreen.DominoGameTimeOut.SupportingText.data.Content = '당신은 틀렸습니다, 루저!'
                //     route = 'TE'
                // }

                let numb = getRandomInt(0, 4)
                switch (numb){
                    case 0:
                        route = 'EN'
                        break
                    case 1:
                        route = 'EN'
                        break
                    case 2:
                        route = 'NO'
                        break
                    case 3:
                        route = 'TE'
                        break
                    case 4:
                        route = 'DU'
                        break
                }

                app.routing(route)
                app.verifyInput(`${route}PASPN`)
                app.route = route
                app.routed = route
                gameID += route
                content = rankRoute(route)
                this.dominoEnded = true
            }
            else {
                this.dominoEnded = true
                let numb = getRandomInt(0, 4)
                let route = 'TE'
                switch (numb){
                    case 0:
                        route = 'EN'
                        break
                    case 1:
                        route = 'EN'
                        break
                    case 2:
                        route = 'NO'
                        break
                    case 3:
                        route = 'TE'
                        break
                    case 4:
                        route = 'DU'
                        break
                }
                app.routing(route)
                app.verifyInput(`${route}PASPN`)
                app.route = route
                app.routed = route

                content = rankRoute(route)

            }
            // app.verifyInput('POPASPN')
            // fetch(`${this.DOMAIN}/routing/${this.Code}?gameid=null`)
            //     .then(
            //         function() {
            //
            //         }.bind(app)
            //     )
            return this.return({
                type: 'domino',
                gameID: gameID,
                title: '도미노 게임 결과',
                content: content,
                timeline: 'PN',
                bItem: bItem,
                // autoplay: `${app.route}PASPN`
            })
        }

        // console.log(`${app.route}ANO`)


        let lastThings = gameID.slice(3, 5)
        // console.log(lastThings)

        if (gameID.startsWith(NO_ANSWER)) {
            return this[`${app.routed}_FUNC`](`${app.routed}RNO`)
        } else if (gameID.startsWith(PO_ANSWER)) {
            return this[`${app.routed}_FUNC`](`${app.routed}RPO`)
        } else if (gameID.startsWith(DO_ANSWER)) {
            return this[`${app.routed}_FUNC`](`${app.routed}RDO`)
        } else if (gameID.startsWith(DE_ANSWER)) {
            return this[`${app.routed}_FUNC`](`${app.routed}RDE`)
        } else if (gameID.startsWith(TE_ANSWER)) {
            return this[`${app.routed}_FUNC`](`${app.routed}RTE`)
        } else if (gameID.startsWith(DU_ANSWER)) {
            return this[`${app.routed}_FUNC`](`${app.routed}RDU`)
        } else if (gameID.startsWith(EN_ANSWER)) {
            return this[`${app.routed}_FUNC`](`${app.routed}REN`)
        }


        if (gameID.startsWith(NO_ALIBI)) {
            console.log(`${app.routed}ANO`)
            return this[`${app.routed}_FUNC`](`${app.routed}ANO`)
        } else if (gameID.startsWith(PO_ALIBI)) {
            return this[`${app.routed}_FUNC`](`${app.routed}APO`)
        } else if (gameID.startsWith(DO_ALIBI)) {
            return this[`${app.routed}_FUNC`](`${app.routed}ADO`)
        } else if (gameID.startsWith(DE_ALIBI)) {
            return this[`${app.routed}_FUNC`](`${app.routed}ADE`)
        } else if (gameID.startsWith(TE_ALIBI)) {
            return this[`${app.routed}_FUNC`](`${app.routed}ATE`)
        } else if (gameID.startsWith(DU_ALIBI)) {
            return this[`${app.routed}_FUNC`](`${app.routed}ADU`)
        } else if (gameID.startsWith(EN_ALIBI)) {
            return this[`${app.routed}_FUNC`](`${app.routed}AEN`)
        } else if (gameID.startsWith(CA_ALIBI)) {
            return this[`${app.routed}_FUNC`](`${app.routed}ACA`)
        }

        if (gameID.startsWith("PO")) {
            return this.PO_FUNC(gameID)
        } else if (gameID.startsWith("EN")) {
            return this.EN_FUNC(gameID)
        } else if (gameID.startsWith("DU")) {
            return this.DU_FUNC(gameID)
        } else if (gameID.startsWith( "NO")) {
            return this.NO_FUNC(gameID)
        } else if (gameID.startsWith("TE")) {
            return this.TE_FUNC(gameID)
        }


        if (app.route === "PO") {
            return this.PO_FUNC(gameID)
        } else if (app.route === "EN") {
            return this.EN_FUNC(gameID)
        } else if (app.route === "DU") {
            return this.DU_FUNC(gameID)
        } else if (app.route === "NO") {
            return this.NO_FUNC(gameID)
        } else if (app.route === "TE") {
            return this.TE_FUNC(gameID)
        }


    }

    verifyInput(gameId, bSave) {
        gameId = gameId.toString()
        let app = this

        let foo = function() {
            let result = this.serve(gameId)
            console.log(gameId, result)
            let type = result['type']
            let bItem = result['bItem']
            gameId = result['gameID']
            function editRailItem(newTimeLine, ListItem) {
                app.noteScreen[`RailItem${newTimeLine}Inner`].addChild(ListItem)
                app.noteScreen.Rail.InActivateChildren()
                app.noteScreen[`RailItem${newTimeLine}`].Clicked()
                if (bSave) {
                    app.saveToServer(gameId)
                }
            }
            if (bItem) {
                if (type === 'domino') {
                    let GameInfoListItem = new SimpleDimpleNoteItem(
                        'code_blocks',
                        result['title'],
                        result['content']
                    )
                    editRailItem(result['timeline'], GameInfoListItem)
                } else if (type === 'alibi') {

                    let json = result['content']
                    let line = new String()
                    line += '아침 | '
                    line += json['PD']
                    line += '\n'
                    line += '점심 | '
                    line += json['PN']
                    line += '\n'
                    line += '저녁 | '
                    line += json['PA']
                    line += '\n'
                    line += '자정 | '
                    line += json['PM']

                    if (this.alibiCount === undefined || this.alibiCount === null) {
                        this.alibiCount = 1
                    } else {
                        this.alibiCount += 1
                    }

                    if (line.indexOf('-> 사망') === -1) {
                        let GameInfoListItem = new SimpleDimpleNoteItem(
                            'person',
                            result['title'],
                            line
                        )
                        if (this.alibiCount <= 2) {
                            editRailItem('SD', GameInfoListItem)
                        } else if (this.alibiCount <= 4) {
                            editRailItem('SN', GameInfoListItem)
                        } else if (this.alibiCount <= 6) {
                            editRailItem('SA', GameInfoListItem)
                        } else if (this.alibiCount <= 7) {
                            editRailItem('SM', GameInfoListItem)
                        } else if (this.alibiCount >= 8) {
                            editRailItem('SM', GameInfoListItem)
                            result['autoplay'] = `${app.routed}PASSM`
                        }
                    } else {
                        let GameInfoListItem = new SimpleDimpleNoteItem(
                            'person',
                            result['title'],
                            '사망한 사람에게는 알리바이를 물어볼 수 없습니다'
                        )
                        if (this.alibiCount <= 2) {
                            editRailItem('SD', GameInfoListItem)
                        } else if (this.alibiCount <= 4) {
                            editRailItem('SN', GameInfoListItem)
                        } else if (this.alibiCount <= 6) {
                            editRailItem('SA', GameInfoListItem)
                        } else if (this.alibiCount <= 7) {
                            editRailItem('SM', GameInfoListItem)
                        } else if (this.alibiCount >= 8) {
                            editRailItem('SM', GameInfoListItem)
                            result['autoplay'] = `${app.routed}PASSM`
                        }
                    }



                } else if (type === 'roomcheck') {
                    let objects = result['content']['objects']
                    let texxt = ""
                    let handwritings = []
                    let GameInfoListItem = new SimpleDimpleNoteItem(
                        'chair',
                        result['title'],
                        texxt
                    )
                    objects.forEach(obj => {
                        let display = new NeuContainer()
                        display.data.FontSize = Typography.Size.BodyMedium
                        display.data.TextColor = colorScheme.onSurfaceVariant
                        display.data.Content = '- ' + obj['display'] + ' '

                        let hand = new NeuContainer()
                        hand.data.FontSize = Typography.Size.BodyMedium
                        hand.data.FontFamily = "Nanum Pen Script"
                        hand.data.TextColor = colorScheme.onErrorContainer
                        hand.data.Content = obj['analyze']

                        let blank = new NeuContainer()
                        blank.geometry.Width = '8rem'

                        let newB = new NeuContainer()
                        newB.data.Symmetric = 'horizontal'
                        newB.addChild(blank)
                        newB.addChild(hand)

                        let inline = new NeuContainer()
                        inline.data.FlexWrap = 'wrap'
                        inline.data.Symmetric = 'horizontal'
                        inline.addChild(display)
                        inline.addChild(newB)

                        GameInfoListItem.SupportingText.addChild(inline)
                    })

                    if (this.roomcheckCount == undefined || this.roomcheckCount == null) {
                        this.roomcheckCount = 1
                    } else {
                        this.roomcheckCount += 1
                    }

                    if (this.roomcheckCount <= 2) {
                        editRailItem('TN', GameInfoListItem)
                    } else if (this.roomcheckCount <= 4) {
                        editRailItem('TA', GameInfoListItem)
                    } else if (this.roomcheckCount <= 6) {
                        editRailItem('TM', GameInfoListItem)
                    } else if (this.roomcheckCount >= 7) {
                        editRailItem('TM', GameInfoListItem)
                        this.AddNoteButton.Hide()
                    }

                    // editRailItem(result['timeline'], GameInfoListItem)
                } else if (type === 'witness') {
                    let GameInfoListItem = new SimpleDimpleNoteItem(
                        'visibility',
                        result['title'],
                        result['content']
                    )
                    editRailItem(result['timeline'], GameInfoListItem)
                } else if (type === 'script') {
                    let GameInfoListItem = new SimpleDimpleNoteItem(
                        'receipt_long',
                        result['title'],
                        result['content']
                    )
                    editRailItem(result['timeline'], GameInfoListItem)
                } else if (type === "witness") {
                    let GameInfoListItem = new SimpleDimpleNoteItem(
                        'visibility',
                        result['title'],
                        result['content']
                    )
                    editRailItem(result['timeline'], GameInfoListItem)
                } else if (type == 'doi') {
                    let doiArray = result['content']
                    let resLine = new String()
                    for (let i = 1; i <= parseInt(doiArray.length / 2); i++) {
                        resLine += doiArray[2 * i - 2]
                        resLine += ' | '
                        resLine += doiArray[2 * i - 1]
                        resLine += '\n'
                    }
                    let GameInfoListItem = new SimpleDimpleNoteItem(
                        'summarize',
                        result['title'],
                        resLine
                    )
                    editRailItem(result['timeline'], GameInfoListItem)
                } else if (type == 'event') {
                    let GameInfoListItem = new SimpleDimpleNoteItem(
                        'event_busy',
                        result['title'],
                        result['content']
                    )
                    editRailItem(result['timeline'], GameInfoListItem)
                }
            }
            if (result['autoplay']) {
                setTimeout(function() {
                    this.verifyInput(result['autoplay'], false)
                }.bind(this), 1500)
            }
        }.bind(this)

        console.error(app.routed)
        if (this.routed) {
            console.warn(this.routed)
            foo()
        } else {
            // console.warn(this.route)

            fetch(`${this.DOMAIN}/routing/${this.Code}?gameid=null`)
                .then(
                    function(json) {
                            // console.log(json)
                        app.route = json
                        // this.route = "EN"
                        // console.log(app.route)
                        // console.warn(this.route)

                        foo()
                    }.bind(app)

                )

        }

        // return
    }

    storeTime() {
        let app = this
        fetch(`${this.DOMAIN}/storetime/${this.Code}`)
            .then((data) => {
                data.json().then((json) => {
                    app.expire = new Date(json * 1000)
                    let intervalID = setInterval(function() {
                        if (this.expire - new Date() < 0) {
                            app.Timer.data.Content = 'TIME OVER'
                            app.showExScreen(app.finishScreen)
                            app.finishScreen.LockMessage.data.Content = '추리가 완료되었습니다.\n' +
                                '출구에서 추리 완료 코드를 안내받아 입력하고\n ' +
                                '[자물쇠를 눌러] 추리를 완성하고 결과를 확인하세요.'
                            window.modal.removeModal(app.AddNoteButton)
                            clearInterval(intervalID)
                        } else {
                            let timer = new Date(this.expire - new Date())
                            let timerHours = timer.getHours().toString().padStart(2, '0')
                            let timerMinutes = timer.getMinutes().toString().padStart(2, '0')
                            let timerSeconds = timer.getSeconds().toString().padStart(2, '0')
                            let timerText = `${timerMinutes}:${timerSeconds}`
                            // if (parseFloat(timerHours) >= 0) {
                            //     timerText = `${timerHours}:${timerMinutes}:${timerSeconds}`
                            // }
                            app.Timer.data.Content = timerText
                        }
                    }.bind(app), 10)
                })
            })
            .catch((error) => {
                console.error('failure:', error)
            })

        fetch(`${this.DOMAIN}/dominotime/${this.Code}`)
            .then((data) => {
                data.json().then((json) => {
                    app.dominotime = new Date(json * 1000)
                    let intervalID = setInterval(function() {
                        if (this.dominotime - new Date() < 0) {
                            app.noteScreen.DominoGameTimeOut.SupportingText.data.Content = '도미노 게임이 종료되었습니다'
                            if (app.dominoEnded == undefined || app.dominoEnded == null){
                                console.log('domino not ended')
                                app.verifyInput("3", true)
                            }
                            clearInterval(intervalID)

                        } else {
                            let timer = new Date(this.dominotime - new Date())
                            let timerMinutes = timer.getMinutes().toString().padStart(2, '0')
                            let timerSeconds = timer.getSeconds().toString().padStart(2, '0')
                            let timerText = `${timerMinutes}분 ${timerSeconds}초`
                            app.noteScreen.DominoGameTimeOut.SupportingText.data.Content = `${timerText} 남았습니다 (다 풀었다면 탭하세요)`
                        }
                    }.bind(app), 10)
                })
            })
            .catch((error) => {
                console.error('failure:', error)
            })
    }

    showExScreen(screen) {
        this.layout.head.geometry.Display = 'none'
        this.layout.foot.geometry.Display = 'none'

        this.prevScreen = this.layout.body.children[0]
        this.layout.body.removeChild(this.prevScreen)

        this.extend(screen)
        this.layout.body.addChild(screen)


    }

    hideExScreen() {
        this.layout.head.geometry.Display = 'flex'
        this.layout.foot.geometry.Display = 'flex'

        this.layout.body.clearChildren()
        this.layout.body.addChild(this.prevScreen)
    }

    extend(container) {
        container.geometry.Width = '100%'
        container.geometry.Height = '100%'
    }
}

// window.name = "Orinent\nMansion"
export let app = runApp(new OrientMansion())

window.onbeforeunload = function(e) {
    return false
}