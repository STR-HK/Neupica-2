import { NeuApp } from "../../assets/ts/Neupica/Core/App.js"
import { NeuScaffold } from "../../assets/ts/Layout/NeuScaffold.js"
import { TopAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/TopAppBars.js"
import { NeuImage } from "../../assets/ts/Neupica/Components/Native/NeuImage.js"
import {
    IconButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Icon Buttons/IconButton.js"
import { MaterialSymbolsRounded } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Icons.js"
import { BottomAppBar } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/BottomAppBar.js"
import { Navigation } from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/Navigation.js"
import {
    NavigationBar
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import {
    NavigationBarItem
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Navigation/NavigationBar.js"
import { NeuContainer } from "../../assets/ts/Neupica/Components/Native/NeuContainer.js"
import { runApp } from "../../assets/ts/Neupica/Neupica2.js"
import { colorScheme } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Color.js"
import { Box } from "../../assets/ts/Tool/Box.js"
import { Typography } from "../../assets/ts/Neupica/Components/Custom/Material3/Styles/Typography.js"
import {
    CommonButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/CommonButton.js"
import {
    TextFields
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/TextInputs/Text Fields/TextFields.js"
import { createUnique } from "../../assets/ts/Neupica/Components/Create/Create.js"
import {
    OutlinedButton
} from "../../assets/ts/Neupica/Components/Custom/Material3/Components/Actions/Common Buttons/OutlinedButton.js"


let loadDB = function() {
    if (localStorage.getItem('db')) {
        return JSON.parse(localStorage.getItem('db'))
    } else {
        return {}
    }
}
let db = loadDB()
let saveDB = function() {
    localStorage.setItem('db', JSON.stringify(db))
}
let getdbDataCount = function() {
    return Object.keys(db).length
}
let getdbDataById = function(id) {
    console.log(db, id, db[id])
    return db[id]
}
let setdbDataById = function(id, data) {
    db[id] = data
    saveDB()
}
let removedbDataById = function(id) {
    delete db[id]
    saveDB()
}

let indexed = false

let loadIndexDB = function() {
    if (localStorage.getItem('index')) {
        return JSON.parse(localStorage.getItem('index'))
        indexed = true
    } else {
        let ret = []
        for (let i = -1; i < 24; i++) {
            ret.push([])
            for (let j = -1; j < 6; j++) {
                ret[i+1].push('')
            }
        }
        return ret
    }
}

let index = loadIndexDB()
console.log(index)
let saveIndexDB = function() {
    localStorage.setItem('index', JSON.stringify(index))
}
if (!indexed) {
    saveIndexDB()

}
// console.log('loaded')

let getindexDBDataCount = function() {
    return Object.keys(index).length
}
let getindexDBDataById = function(id) {
    return index[id]
}
let setindexDBDataById = function(id, data) {
    index[id] = data
    saveIndexDB()
}
let removeindexDBDataById = function(id) {
    delete index[id]
    saveIndexDB()
}

window.r = function() {
    localStorage.setItem('db', '{}')
}
window.r2 = function() {
    localStorage.removeItem('index')
}

// function appendLege(key, val) {
//     try {
//         db['lege'][key] = val
//     } catch (e) {
//         console.error(e)
//         db['lege'] = {}
//     }
//     saveIndex()
// }
//

let ColorPalette = {
    Ruby: '#D8334A',
    Grapefruit: '#ED5565',
    Bittersweet: '#FC6E51',
    Sunflower: '#FFCE54',
    Straw: '#E8CE4D',
    Grass: '#A0D468',
    Mint: '#48CFAD',
    Teal: '#A0CECB',
    Aqua: '#4FC1E9',
    Jeans: '#5D9CEC',
    Plum: '#8067B7',
    Lavender: '#AC92EC',
    PinkRose: '#EC87C0',
    LightGray: '#F5F7FA',
    MediumGray: '#CCD1D9',
    DarkGray: '#656D78',
    Charcoal: '#3C3B3D',
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//
// var randomProperty = function (obj) {
//     var keys = Object.keys(obj);
//     return obj[keys[ keys.length * Math.random() << 0]];
// };

let ColorKeys = Object.keys(ColorPalette)
//
// class Legend {
//     constructor() {
//         this.Name = undefined
//         this.ColorName = Object.keys(ColorPalette)[
//                 randomIntFromInterval(0, ColorKeys.length - 1)
//             ]
//         this.Color = ColorPalette[Object.keys(ColorPalette)[
//             randomIntFromInterval(0, ColorKeys.length - 1)
//             ]]
//         this.Data = {
//
//         }
//     }
//
//     setName(name) {
//         this.Name = name
//         appendLege(this.Name, this)
//     }
//
//     applyColor() {
//         this.Color = ColorPalette[this.ColorName]
//     }
// }

export default class AuroaMain extends NeuApp {
    constructor() {
        super()
        // window.inspect = true

        this.setFullScreen(true)
        this.layout = new NeuScaffold()

        this.TopAppBar = new TopAppBar()
        this.TopAppBar.setHeadline('Auroa Web')
        this.TopAppBarIcon = new NeuImage()
        this.TopAppBarIcon.geometry.Width = '24rem'
        this.TopAppBarIcon.geometry.AspectRatio = '1'
        this.TopAppBarIcon.data.Src = 'icons/icon-192.png'
        this.TopAppBarIconButton = new IconButton(this.TopAppBarIcon)
        this.TopAppBarDevIcon = new MaterialSymbolsRounded('deblur')
        this.TopAppBarDevIconButton = new IconButton(this.TopAppBarDevIcon)

        this.layout.head.addChildren([
            this.TopAppBar.setLeading(
                this.TopAppBarIconButton
            ),
            this.TopAppBar.addTrailings([
                this.TopAppBarDevIconButton
            ])
        ])

        this.layout.body.data.BackgroundColor = colorScheme.background

        this.expand = function(screen) {
            screen.geometry.Width = '100%'
            screen.geometry.Height = '100%'
        }.bind(this)

        this.editModeScreen = new NeuContainer('editModeScreen')
        this.initEditModeScreen = function() {
            this.editModeScreen.geometry.Padding = new Box().all(Typography.Size.TitleMedium)
            this.editModeScreen.data.Gap = '8rem'

            this.editModeLegendList = new NeuContainer()




            this.viewGen = function(data) {
                class LegendWidget extends NeuContainer {
                    constructor(Id, Name, ColorName, parent) {
                        super()
                        this.data.Border = '1px solid gray'
                        this.geometry.Width = '100%'
                        this.data.Padding = new Box().all('4rem')
                        this.data.Gap = '4rem'
                        this.parent = parent

                        this.Line1 = new NeuContainer()
                        this.Line1.data.Symmetric = 'horizontal'
                        this.Line1.data.Gap = '4rem'
                        this.Line2 = new NeuContainer()
                        this.Line2.data.Symmetric = 'horizontal'
                        this.Line2.data.Gap = '4rem'
                        this.Line2.data.JustifyContent = 'flex-end'

                        this.Id = Id
                        this.Name = Name
                        this.Color = ColorPalette[ColorName]
                        this.ColorName = ColorName

                        this.ColorWidget = new NeuContainer()
                        this.ColorWidget.geometry.Height = '100%'
                        this.ColorWidget.geometry.AspectRatio = '1'
                        this.ColorWidget.data.BackgroundColor = this.Color

                        this.ColorNameWidget = new TextFields()
                        this.ColorNameWidget.geometry.MinWidth = '140px'
                        this.ColorNameWidget.geometry.MaxWidth = '140px'
                        this.ColorNameWidget.LabelText.Text.data.Content = 'ColorName'
                        this.ColorNameWidget.Input.data.Value = this.ColorName
                        this.ColorNameWidget.Input.element.click()
                        this.ColorNameWidget.watchEvent('input', function() {
                            setTimeout(function() {
                                this.ColorName = this.ColorNameWidget.Input.data.Value
                            }.bind(this), 1)
                        }.bind(this))

                        this.NameWidget = new TextFields()
                        this.NameWidget.geometry.MinWidth = '100px'
                        this.NameWidget.geometry.MaxWidth = '100px'
                        this.NameWidget.LabelText.Text.data.Content = 'Name'
                        this.NameWidget.Input.data.Value = this.Name
                        this.NameWidget.Input.element.click()
                        this.NameWidget.watchEvent('input', function() {

                            setTimeout(function() {
                                this.Name = this.NameWidget.Input.data.Value
                            }.bind(this), 1)
                        }.bind(this))

                        this.SaveBtn = new CommonButton()
                        this.SaveBtn.Text.data.Content = 'SAVE'
                        this.SaveBtn.watchEvent('click', function() {
                            let innerObj = {
                                Id: this.Id,
                                Name: this.Name,
                                ColorName: this.ColorName
                            }
                            setdbDataById(this.Id, innerObj)
                            that.render()
                        }.bind(this))

                        this.RemoveBtn = new CommonButton()
                        this.RemoveBtn.Text.data.Content = 'DEL'
                        this.RemoveBtn.watchEvent('click', function() {
                            removedbDataById(this.Id)
                            that.render()
                        }.bind(this))

                        this.ColourBtn = new CommonButton()
                        this.ColourBtn.Text.data.Content = 'COLOUR'
                        this.ColourBtn.watchEvent('click', function() {
                            // removedbDataById(this.Id)
                            // that.render()
                            parent.setTemp(this.Id)
                        }.bind(this))

                        this.addChildren([
                            this.Line1.addChildren([
                                this.ColorWidget,
                                this.ColorNameWidget,
                                this.NameWidget,
                            ]),
                            this.Line2.addChildren([
                                this.SaveBtn,
                                this.RemoveBtn,
                                this.ColourBtn,
                            ])
                        ])
                    }
                }
                return new LegendWidget(data.Id, data.Name, data.ColorName, this)

            }.bind(this)

            this.render = function() {
                let dbKeys = Object.keys(db)
                this.editModeLegendList.clearChildren()
                dbKeys.forEach(Id => {
                    let data = getdbDataById(Id)
                    let view = this.viewGen(data)
                    this.editModeLegendList.addChild(view)
                })
            }.bind(this)
            this.render()

            let that = this

            this.create = function() {
                let id = createUnique()
                let saveObj = {
                    Id: id,
                    Name: id.slice(1, 6),
                    ColorName: Object.keys(ColorPalette)[
                        randomIntFromInterval(0, ColorKeys.length - 1)
                        ],
                }
                setdbDataById(id, saveObj)
            }.bind(this)

            this.editModeEditButton = new OutlinedButton()
            this.editModeEditButton.Text.data.Content = 'Create New Legend'
            this.editModeEditButton.watchEvent('click', function() {
                this.create()
                this.render()
            }.bind(this))

            this.editModeScreen.addChildren([
                this.editModeEditButton,
                this.editModeLegendList
            ])
        }.bind(this)
        this.initEditModeScreen()
        this.editMode()

        this.viewModeScreen = new NeuContainer('viewModeScreen')
        this.initViewModeScreen = function() {
            this.viewModeScreen.geometry.Padding = new Box().all(Typography.Size.TitleMedium)
            this.viewModeScreen.geometry.Padding = new Box().horizontal(Typography.Size.HeadlineSmall)
            this.viewModeScreen.data.Gap = '8rem'
            this.viewModeScreen.data.Symmetric = 'horizontal'

            this.Viewer = new NeuContainer()
            this.Viewer.geometry.Width = 'fit-content'
            this.ViewerListByTimeLine = []
            this.ViewerList2D = []

            for (let i = -1; i < 24; i++) {
                let cont = new NeuContainer()
                cont.geometry.Width = 'calc(22px * 7)'
                cont.geometry.Height = '22px'
                cont.data.Symmetric = 'horizontal'
                this.Viewer.addChild(cont)

                for (let j = -1; j < 6; j++) {
                    let inner = new NeuContainer()
                    inner.geometry.Height = '100%'
                    inner.data.Border = '0.5px solid black'
                    inner.data.JustifyContent = 'center'
                    inner.data.AlignItems = 'center'
                    inner.data.FontSize = Typography.Size.LabelMedium
                    inner.geometry.AspectRatio = '1'
                    // inner.data.TextColor = colorScheme.onSecondaryContainer
                    inner.data.BackgroundColor = colorScheme.onPrimaryContainer
                    inner.watchEvent('click', function() {
                        // inner.data.BackgroundColor = colorScheme.error
                        this.saveIndex([i+1, j+1], this.getTemp())
                        this.renderIndex()
                    }.bind(this))
                    cont.addChild(inner)

                    try {
                        this.ViewerList2D[i+1].push(inner)
                    } catch (e) {
                        this.ViewerList2D[i+1] = [inner]
                    }
                }

                this.ViewerListByTimeLine.push(cont)
            }

            this.setTemp = function(uni) {
                this.tempUni = uni
            }

            // this.setTemp('aW2xZdWItrtG')

            this.getTemp = function() {
                return this.tempUni
            }

            this.saveIndex = function(coord, unqiue) {
                index[coord[0]][coord[1]] = unqiue
                saveIndexDB()
            }.bind(this)

            this.renderIndex = function() {
                for (let i = -1; i < 24; i++) {
                    for (let j = -1; j < 6; j++) {
                        let real = this.ViewerList2D[i+1][j+1]
                        let unique = index[i+1][j+1]
                        try {
                            real.data.BackgroundColor = ColorPalette[getdbDataById(unique).ColorName]
                        } catch {

                        }
                    }


                }
            }

            this.renderIndex()


            for (let i = -1; i < 24; i++) {
                this.ViewerList2D[i+1][0].data.BackgroundColor = colorScheme.onBackground
                this.ViewerList2D[i+1][0].data.FontWeight = 'bold'
                if (i != -1) {
                    this.ViewerList2D[i+1][0].Text.data.Content = i.toString().padStart(2, '0')
                } else {
                    this.ViewerList2D[i+1][0].Text.data.Content = '＼'

                }
            }
            for (let i = -1; i < 6; i++) {
                this.ViewerList2D[0][i+1].data.BackgroundColor = colorScheme.onBackground
                this.ViewerList2D[0][i+1].data.FontWeight = 'bold'

                if (i != -1) {
                    this.ViewerList2D[0][i+1].Text.data.Content = ((i + 1) * 10).toString().padStart(2, '0')
                }
            }


            this.LegendViewer = new NeuContainer()
            this.LegendViewer.geometry.Width = 'fit-content'
            this.LegendViewer.geometry.Height = 'fit-content'
            this.LegendViewerListByTimeLine = []
            this.LegendViewerList2D = []


            for (let i = -1; i < (getdbDataCount()); i++) {
                let cont = new NeuContainer()
                cont.geometry.Width = 'calc(22px * 7)'
                cont.geometry.Height = '22px'
                cont.data.Symmetric = 'horizontal'
                this.LegendViewer.addChild(cont)

                for (let j = -1; j < 1; j++) {
                    let inner = new NeuContainer()
                    inner.geometry.Height = '100%'
                    inner.data.Border = '0.5px solid black'
                    inner.data.JustifyContent = 'center'
                    inner.data.AlignItems = 'center'
                    inner.data.FontSize = Typography.Size.LabelMedium
                    inner.geometry.AspectRatio = '2'
                    inner.data.BackgroundColor = colorScheme.onBackground
                    inner.data.TextColor = 'black'

                    cont.addChild(inner)

                    try {
                        this.LegendViewerList2D[i+1].push(inner)
                    } catch (e) {
                        this.LegendViewerList2D[i+1] = [inner]
                    }
                }

                this.LegendViewerListByTimeLine.push(cont)
            }


            let dbKeys = Object.keys(db)
            for (let i = 0; i <= dbKeys.length; i++) {
                this.LegendViewerList2D[i][1].geometry.AspectRatio = '4'
                if (i != 0) {
                    let data = getdbDataById(dbKeys[i-1])
                    this.LegendViewerList2D[i][0].Text.data.Content = data.Name
                    this.LegendViewerList2D[i].forEach(inner => {
                        inner.data.BackgroundColor = ColorPalette[data.ColorName]
                    })
                } else {
                    this.LegendViewerList2D[i][0].Text.data.Content = '범례'
                    this.LegendViewerList2D[i][0].data.FontWeight = 'bold'
                    this.LegendViewerList2D[i][1].Text.data.Content = '시간'
                    this.LegendViewerList2D[i][1].data.FontWeight = 'bold'
                }
            }
            for (let i = 0; i <= dbKeys.length; i++) {
                if (i != 0) {
                    let data = getdbDataById(dbKeys[i-1])
                    this.LegendViewerList2D[i].forEach(inner => {
                        inner.data.BackgroundColor = ColorPalette[data.ColorName]
                    })
                }
            }


            this.viewModeScreen.addChildren([
                this.Viewer,
                this.LegendViewer
            ])

        }.bind(this)
        this.initViewModeScreen()
        this.realModeScreen = new NeuContainer()

        this.expand(this.editModeScreen)
        this.expand(this.viewModeScreen)
        this.expand(this.realModeScreen)

        this.navigate = function (screen) {
            this.layout.body.clearChildren()
            this.layout.body.addChild(screen)
        }.bind(this)

        this.BottomNavigation = new NavigationBar()
        this.BottomNavigationButton1 = new NavigationBarItem()
        this.BottomNavigationButton1.Icon.Text.data.Content = 'brush'
        this.BottomNavigationButton1.Label.Text.data.Content = 'Edit Mode'
        this.BottomNavigationButton1.watchEvent('click', function() {
            this.navigate(this.editModeScreen)
        }.bind(this))
        this.BottomNavigationButton2 = new NavigationBarItem()
        this.BottomNavigationButton2.Icon.Text.data.Content = 'grid_on'
        this.BottomNavigationButton2.Label.Text.data.Content = 'View Mode'
        this.BottomNavigationButton2.watchEvent('click', function() {
            this.navigate(this.viewModeScreen)
        }.bind(this))
        this.BottomNavigationButton3 = new NavigationBarItem()
        this.BottomNavigationButton3.Icon.Text.data.Content = 'view_timeline'
        this.BottomNavigationButton3.Label.Text.data.Content = 'Real Mode'
        this.BottomNavigationButton3.watchEvent('click', function() {
            this.navigate(this.realModeScreen)
        }.bind(this))

        this.BottomNavigationButton2.click()


        this.layout.foot.addChildren([
            this.BottomNavigation.addChildren([
                this.BottomNavigationButton1,
                this.BottomNavigationButton2,
                this.BottomNavigationButton3,
            ])
        ])


        this.draw('#fit-scene')
    }

    editMode () {


    }
}

let app = runApp(new AuroaMain())