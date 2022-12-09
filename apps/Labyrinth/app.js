import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/M3/Styles/Navigation/TopAppBars.js"
import { IconButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Icon Buttons/IconButton.js"
import { Icon } from "../../assets/ts/Neupica/Components/M3/Components/Icons.js"
import { MaterialSymbolsRounded } from "../../assets/ts/Neupica/Components/M3/Components/Icons.js"
import { initModal } from "../../assets/ts/Neupica/Core/Modal.js"
import {
    FloatingActionButtons
} from "../../assets/ts/Neupica/Components/M3/Styles/Actions/FloatingActionButtons/FloatingActionButtons.js"
import { Menu } from "../../assets/ts/Neupica/Components/M3/Styles/Selection/Menu.js"
import { MenuItem } from "../../assets/ts/Neupica/Components/M3/Styles/Selection/Menu.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { Typography } from "../../assets/ts/Neupica/Components/M3/Components/Typography.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/M3/Components/Color.js"
import { BottomAppBar } from "../../assets/ts/Neupica/Components/M3/Styles/Navigation/BottomAppBar.js"
import { CommonButton } from "../../assets/ts/Neupica/Components/M3/Styles/Actions/Common Buttons/CommonButton.js"

initModal()

class Actor extends NeuContainer {
    constructor(parentMaze) {
        super()
        this.data.TextColor = colorScheme.onBackground
        this.Icon = new MaterialSymbolsRounded('expand_less')
        this.addChild(this.Icon)
        this.parentMaze = parentMaze
        this.position = [0, 0]
        this.memory = undefined
        this.angle = 'S'

        this.attach()
    }

    getFrontInfo () {
        let newPostion
        if (this.angle === 'S') {
            newPostion = [this.position[0] + 1, this.position[1]]
        } else if (this.angle === 'W') {
            newPostion = [this.position[0], this.position[1] - 1]
        } else if (this.angle === 'N') {
            newPostion = [this.position[0] - 1, this.position[1]]
        } else if (this.angle === 'E') {
            newPostion = [this.position[0], this.position[1] + 1]
        }
        return newPostion
    }

    getFourInfo () {
        let southPostion = [this.position[0], this.position[1] + 1]
        let westPostion = [this.position[0] - 1, this.position[1]]
        let northPostion = [this.position[0], this.position[1] - 1]
        let eastPostion = [this.position[0] + 1, this.position[1]]
        return {
            south: southPostion,
            west: westPostion,
            north: northPostion,
            east: eastPostion,
        }
    }

    attach() {
        let myCell = this.parentMaze.getCellData(this.position)

        console.error(this.isCross())

        if (this.ifIsol() === true) {
            myCell.setType('isol')
        }

        myCell.addChild(this)


        if (this.angle === 'S') {
            this.geometry.Transform = 'rotate(180deg)'
        } else if (this.angle === 'W') {
            this.geometry.Transform = 'rotate(270deg)'
        } else if (this.angle === 'N') {
            this.geometry.Transform = 'rotate(0deg)'
        } else if (this.angle === 'E') {
            this.geometry.Transform = 'rotate(90deg)'
        }
    }

    isCross() {
        let fourInfo = this.getFourInfo()
        let fourCells = {
            south: this.parentMaze.getCellData(fourInfo['south']),
            west: this.parentMaze.getCellData(fourInfo['west']),
            north: this.parentMaze.getCellData(fourInfo['north']),
            east: this.parentMaze.getCellData(fourInfo['east']),
        }
        let pathCount = 0
        Object.keys(fourCells).forEach(key => {
            if (fourCells[key].type === 'path') {
                pathCount += 1
            }
        })
        if (pathCount > 1) {
            console.error('crosspoint')
            return true
        } else {
            console.error('dep')
            return false
        }
    }

    ifIsol() {
        let fourInfo = this.getFourInfo()
        let fourCells = {
            south: this.parentMaze.getCellData(fourInfo['south']),
            west: this.parentMaze.getCellData(fourInfo['west']),
            north: this.parentMaze.getCellData(fourInfo['north']),
            east: this.parentMaze.getCellData(fourInfo['east']),
        }
        let pathCount = 0
        Object.keys(fourCells).forEach(key => {
            if (fourCells[key].type === 'path') {
                pathCount += 1
            }
        })
        if (pathCount <= 1) {
            return true
        } else {
            return false
        }
    }

    M () {
        if (this.isCross()) {
            this.memory = this.position
        }
        this.attach()

    }
    R (count) {
        for (let c = 0; c < count; c++) {
            if (this.angle === 'S') {
                this.angle = 'W'
            } else if (this.angle === 'W') {
                this.angle = 'N'
            } else if (this.angle === 'N') {
                this.angle = 'E'
            } else if (this.angle === 'E') {
                this.angle = 'S'
            }
            this.attach()
        }

    }

    G (count) {
        console.log({
            'cmd': 'G',
            'pos': this.position,
        })
        for (let c = 0; c < count; c++) {
            let previousCell = this.parentMaze.getCellData(this.position)
            console.log(this.getFrontInfo())
            let frontCell = this.parentMaze.getCellData(this.getFrontInfo())
            console.log(frontCell)
            if (frontCell.type === 'path') {
                console.warn('path -> move' + this.getFrontInfo())
                this.position = this.getFrontInfo()
            } else {
                console.error(frontCell)
            }

        }
        this.attach()


    }

    RR () {
        let frontCell = this.parentMaze.getCellData(this.getFrontInfo())
        console.log(frontCell)
        if (frontCell.type !== 'path') {
            this.R(1)
        }
    }

    B() {
        this.attach()

        if(this.ifIsol()) {
            if (this.memory) {
                this.position = this.memory
                this.memory = undefined
            } else {
                console.error('NO MEM')
            }
        }
        this.attach()
    }

    auto() {
        this.G(1)
        this.RR()
        this.M()
        this.B()
    }
}

class LYCell extends NeuContainer {
    constructor() {
        super()
        this.data.TextColor = colorScheme.onBackground

        this.state = true
        this.type = 'wall'

        this.data.FontSize = Typography.Size.TitleMedium
    }

    texting() {
        this.data.Text = this.type
    }

    setType(newType) {
        this.type = newType
        this.texting()
    }
}

class LYMaze {
    constructor() {
        this.limX = 0
        this.limY = 0
        this.sizeX = 5
        this.sizeY = 5

        this.array = []

        for (let x = this.limX; x < this.sizeX; x++) {
            this.array.push([])
            for (let y = this.limY; y < this.sizeY; y++) {
                this.array[x].push(new LYCell())
            }
        }

        console.log(this.array)
    }

    getCellData(position) {
        console.warn(position)
        if (position[0] >= this.limX && position[1] >= 0) {
            if (position[0] < this.sizeX && position[1] < this.sizeY) {
                console.warn(position[0], position[1])
                return this.array[position[0]][position[1]]
            } else {
                return {
                    'error': 'overflow',
                    'detail': {
                        'posX': position[0],
                        'sizeX': this.sizeX,
                        'posY': position[1],
                        'sizeY': this.sizeY
                    }
                }
            }
        } else {
            return {
                'error': 'underflow',
                'detail': {
                    'posX': position[0],
                    'limX': this.limX,
                    'posY': position[1],
                    'limY': this.limY
                }
            }
        }
    }
}

export class Labyrinth extends NeuApp {
    // layout: NeuScaffold
    constructor() {
        super()
        this.setFullScreen(true)
        this.layout = new NeuScaffold()

        this.AppBar = new TopAppBar()
        this.AppBar.setHeadline('Labyrinth Visualizer')
        this.AppBarLeadingIcon = new MaterialSymbolsRounded('shape_line')
        this.AppBarLeadingIconButton = new IconButton(this.AppBarLeadingIcon)
        this.AppBarInfoIcon = new MaterialSymbolsRounded('privacy_tip')
        this.AppBarInfoIconButton = new IconButton(this.AppBarInfoIcon)
        this.AppBarInfoIconButton.watchEvent('click', function() {
            let infoMenu = new Menu()
            let infoMenuItem1 = new MenuItem()
            infoMenu.addChild(infoMenuItem1)
            let datum = this.AppBarInfoIconButton.getBoundingClientRect()
            infoMenu.geometry.Position = 'absolute'
            window.modal.addInteractiveModal(infoMenu)
        }.bind(this))
        this.AppBar.setLeading(this.AppBarLeadingIconButton)
        this.AppBar.addTrailing(this.AppBarInfoIconButton)
        this.layout.head.addChild(this.AppBar)

        this.Mazer = new NeuContainer()
        this.Mazer.data.BackgroundColor = colorScheme.surfaceVariant
        this.Mazer.geometry.Height = '100%'
        this.Mazer.geometry.AspectRatio = '1'
        this.layout.body.addChild(this.Mazer)

        this.mazeClass = new LYMaze()
        this.mazeClass.getCellData([0, 0]).setType('path')
        this.mazeClass.getCellData([1, 0]).setType('path')
        this.mazeClass.getCellData([1, 1]).setType('path')
        this.mazeClass.getCellData([1, 2]).setType('path')
        this.mazeClass.getCellData([1, 3]).setType('path')
        this.mazeClass.getCellData([0, 2]).setType('path')
        this.mazeClass.getCellData([2, 3]).setType('path')
        this.mazeClass.getCellData([3, 3]).setType('path')
        this.mazeClass.getCellData([4, 3]).setType('path')
        this.mazeClass.getCellData([4, 4]).setType('path')
        this.mazeClass.getCellData([1, 4]).setType('path')

        this.Tools = new NeuContainer()
        this.Tools.data.Symmetric = 'vertical'
        this.Tools.geometry.Width = '100%'
        this.Tools.data.AlignItems = 'end'
        this.layout.body.addChild(this.Tools)

        class MovingButton extends CommonButton {
            constructor() {
                super()

                // this.geometry.Width
            }
        }

        this.layout.body.data.Padding = '16rem'
        this.layout.body.data.BackgroundColor = colorScheme.secondaryContainer
        this.layout.body.data.Symmetric = 'horizontal'



        this.drawMaze()
        this.actorClass = new Actor(this.mazeClass)
        window.actor = this.actorClass

        this.actorClass.G()
        console.log(this.actorClass)

        this.GButton = new MovingButton()
        this.GButton.data.Text = 'G'
        this.GButton.watchEvent('click', function() {
            this.actorClass.G(1)
        }.bind(this))
        this.Tools.addChild(this.GButton)
        this.RRButton = new MovingButton()
        this.RRButton.data.Text = 'RR'
        this.RRButton.watchEvent('click', function() {
            this.actorClass.RR()
        }.bind(this))
        this.Tools.addChild(this.RRButton)
        this.MButton = new MovingButton()
        this.MButton.data.Text = 'M'
        this.MButton.watchEvent('click', function() {
            this.actorClass.M()
        }.bind(this))
        this.Tools.addChild(this.MButton)
        this.BButton = new MovingButton()
        this.BButton.data.Text = 'B'
        this.BButton.watchEvent('click', function() {
            this.actorClass.B()
        }.bind(this))
        this.Tools.addChild(this.BButton)

        this.BottomAppBar = new BottomAppBar()
        this.layout.foot.addChild(this.BottomAppBar)


        this.draw('#App')



    }

    auto() {
        this.actorClass.M()
        this.actorClass.G(1)
        this.actorClass.RR()
        this.actorClass.B()
    }

    drawMaze() {
        class RealLine extends NeuContainer {
            constructor() {
                super()
                this.data.Symmetric = 'horizontal'
                this.geometry.Width = '100%'
                this.geometry.Height = '100%'
                this.data.JustifyContent = 'space-around'
                this.data.AlignItems = 'center'
                this.data.Border = '1px solid black'
            }
        }

        for (let line of this.mazeClass.array) {
            let realLine = new RealLine()
            this.Mazer.addChild(realLine)
            for (let cell of line) {
                cell.texting()
                realLine.addChild(cell)
            }
        }
    }
}

export let app = new Labyrinth()
runApp(app)

