import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { MaterialText } from "../../assets/ts/Neupica/Components/Native/MaterialText.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import {
    IconButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { Icon } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { MaterialSymbolsRounded } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import {
    CommonButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import {
    OutlinedButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"

let NeuState = {
    states: {},
    // setHash: function(hash, callback) {
    //     location.hash = hash
    //     this.states[hash] = callback
    //     callback()
    // },
    // syncNewHashWithCallback: function(newHash) {
    //     this.states[newHash]()
    // },
    replace: function(hash, previousTarget, followingTarget, callback) {
        console.log('[replace] 임플레멘팅을 시작합니다')
        window.prevHash.push(hash)
        window.prevHash.push(hash)
        console.warn('push')
        console.warn('push')
        console.log('[replace] prevHash에 아이템을 2개를 밀어넣습니다. 이후 실제 hash 설정을 하면 하나가 pop 됩니다')

        callback(previousTarget, followingTarget)
        console.log('[replace] 콜벡 함수를 가져왔습니다')

        this.states[hash] = {
            'previous': previousTarget,
            'following': followingTarget,
            'callback': callback
        }
        console.log('[replace] 스테이트를 저장합니다')
        location.hash = hash
        window.onpopstate()
        console.log('[replace] 실제 해시를 변화시켰습니다!')

    },
    inverseReplace: function(hash) {
        console.log('[inverseReplace] 해시를 바탕으로 저장된 콜벡 함수를 이용하여 인버싱을 시작합니다')
        // console.warn(this.states)
        // console.warn(hash)
        // console.warn(this.states[hash])

        let args = this.states[hash]
        console.log('[inverseReplace] 저장된 스테이트 목록 중에서 해시를 이용하여 정보르 가져옵니다')
        if (args) {
            console.log('[inverseReplace] 콜벡 함수를 가져와 인버싱이 시작됩니다')
            console.log('[inverseReplace] '+args['callback'])
            args['callback'](args['following'], args['previous'])

        }
        // console.warn(args['callback'])
    }
}

window.NeuState = NeuState

window.prevHash = []
window.onpopstate = function(e) {
    console.log('[onpopstate] State가 Pop되었습니다. 이전 버튼 or 이후 버튼 or 타 함수에 의한 hash 변환입니다.')
    if (e) {
        let pureHash = e.target.location.hash.replace('#', '')
        console.log('[onpopstate] 현재 실제 해쉬는 다음과 같습니다'+pureHash)
        NeuState.inverseReplace(window.prevHash)
        window.prevHash.pop()
        console.warn('pop')

    } else {
        // NeuState.inverseRepla
        // ce(window.prevHash)
        window.prevHash.pop()
        console.warn('pop')

    }
    // console.log('[onpopstate] prevHash의 마지막 아이템과 실제 해쉬가 같습니다')

    // if (prevHash[prevHash.length-1] == pureHash) {
    //
    //
    // } else {
    //     console.log('[onpopstate] prevHash의 마지막 아이템과 실제 해쉬가 달라요! 다르다고!!!')
    //
    // }
}

class Scaffolder extends NeuApp {
    constructor() {
        super()
        this.setFullScreen(true)

        this.layout = new NeuScaffold()

        this.appBar = new TopAppBar()
        this.appBar.setHeadline('Scaffolder')
        this.appBar.setLeading(
            new IconButton(new MaterialSymbolsRounded('account_tree'))
        )
        this.reloadIconButton = new IconButton(new MaterialSymbolsRounded('frame_reload'))
        this.reloadIconButton.watchEvent('click', function() {
            location.reload()
        }.bind(this))
        this.appBar.addTrailing(this.reloadIconButton)
        this.layout.head.addChild(this.appBar)

        this.layout.body.data.BackgroundColor = colorScheme.background

        this.firstScreen = new NeuContainer()
        this.firstScreen.data.AlignItems = 'center'

        this.firstLabel = new MaterialText()
        this.firstLabel.Text.data.Content = '첫 번째 화면'
        this.firstLabel.data.Margin = '12rem'
        this.firstLabel.data.FontSize = Typography.Size.BodyLarge
        this.firstScreen.addChild(this.firstLabel)

        this.firstButton = new CommonButton()
        this.firstButton.Text.data.Content = 'Go to Second Screen'
        this.firstButton.geometry.Width = 'fit-content'
        this.firstButton.watchEvent('click', function() {
            NeuState.replace('second', this.firstScreen, this.secondScreen, function(prev, follo) {
                this.layout.body.clearChildren()
                this.layout.body.addChild(follo)
            }.bind(this))
        }.bind(this))
        this.firstScreen.addChild(this.firstButton)

        this.layout.body.addChild(this.firstScreen)


        this.secondScreen = new NeuContainer()
        this.secondScreen.data.AlignItems = 'center'

        this.secondLabel = new MaterialText()
        this.secondLabel.Text.data.Content = '세컨트 스크린'
        this.secondLabel.data.Margin = '12rem'
        this.secondLabel.data.FontSize = Typography.Size.BodyLarge
        this.secondScreen.addChild(this.secondLabel)

        this.secondButton = new OutlinedButton()
        this.secondButton.Text.data.Content = 'GO BACK!!'
        this.secondButton.geometry.Width = 'fit-content'
        this.secondButton.watchEvent('click', function() {
            NeuState.replace('first', this.secondScreen, this.firstScreen, function(prev, follo) {
                this.layout.body.clearChildren()
                this.layout.body.addChild(follo)
            }.bind(this))
        }.bind(this))
        this.secondScreen.addChild(this.secondButton)


        this.draw('flt-glass-pane')
    }
}

export let app = new Scaffolder()
runApp(app)