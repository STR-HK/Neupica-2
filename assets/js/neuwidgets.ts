function makeId(length) {
    var result           = ''

    var characters       = ''
    characters           += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    characters           += 'abcdefghijklmnopqrstuvwxyz'
    characters           += '0123456789'

    var charactersLength = characters.length

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

import { windowRize } from './neupica2.js'

class SessionStorageManager {
    [x: string]: any
    constructor () {
        this.storage = {}

        this.setItem = function (key: string, value: string) {
            this.storage[key] = value
        }
        this.getItem = function (key: string)  {
            return this.storage[key]
        }
        this.removeItem = function (key: string)  {
            delete this.storage[key]
        }
        this.clear = function () {
            this.storage = {}
        }

        // this.storage.setItem('test', 'test')
        // if (this.storage.getItem('test') !== 'test') {

    }
}

window.IndexStorage = new SessionStorageManager()


// windowRize('thisClass', thisClass)

window.thisClass = (item: any) => {
    console.log('thisClass :', item, 'converted to', window.IndexStorage.getItem(item.id))
    return window.IndexStorage.getItem(item.id)
}


class NeuWidgets {
    [x: string]: any
    object: { [key : string]: any }
    constructor () {
        
        // windowRize('Index', new SessionStorageManager())
        // function thisClass(this: any) {
            
        // }
        // windowRize('this', thisFunc())

        this.store = function (elementID : string, realClass : string) {
            window.IndexStorage.setItem(elementID, realClass)
            console.log('Stored :', elementID , 'as', realClass)
            // console.log(realClass)
            // console.log(window.IndexStorage)
        }

        // this.getClass = function (elementID : string) {
        //     return window['SessionStorageManager'].getItem(elementID)
        // }

        this.createCover = function (name: string) {
            var element = document.createElement('div')
            element.id = `${name}-${makeId(6)}` // Neu-xxxxxx
            this.store(element.id, this)
            // element.class = window['SessionStorageManager'].getItem(this.id)
            return element
        }

        this.createElement = function (hidden: boolean = false) {
            var element = document.createElement('div')
            element.id = `Neu-Div-${makeId(6)}` // Neu-xxxxxx
            if ( hidden ) { element.style.display = 'none' }
            return element
        }

        this.createImg = function (hidden: boolean = false) {
            var element = document.createElement('img')
            element.id = `Neu-Img-${makeId(6)}` // Neu-xxxxxx
            if ( hidden ) { element.style.display = 'none' }
            return element
        }
    }
}

import { ColorsModule } from "./Colors.js"
const Colors = new ColorsModule()

export class NeuButton extends NeuWidgets {
    constructor () {
        super()
        this.object = {
            Text : '',
            Color : Colors.Black,
            Size : 'medium',
            TextPadding : '100px',

            BackgroundColor : Colors.LightGray,
            StrokeColor : Colors.Gray,
            StrokeWidth : '1px',
            StrokeStyle : 'solid',
            StrokeRadius : '32px',
            RippleColor : Colors.Yellow, // 16% 투명도
            
            Icon : null,
            IconColor : null,
            IconSize : null,
            IconTop : false,
            IconPadding : '8px',
            Padding : '8px',
            IconGap : '8px',
        }

        this.cover = this.createCover('Button')
        this.element = this.createElement()
        this.text = this.createElement()
        this.text.style.userSelect = 'none'
        this.icon = this.createImg(true)
        this.element.appendChild(this.icon)
        this.element.appendChild(this.text)
        this.cover.appendChild(this.element)

        // this.cover.setAttribute('a', this)
        // console.log(this.cover)

        this.setText = function (text : string) {
            this.object.Text = text
            this.text.innerText = text
        }
        this.setColor = function (color : string) {
            this.element.style.color = color
        }
        this.setSize = function (size : string) {
            this.element.style.fontSize = size
        }
        this.setTextPadding = function (padding : string) {
            this.element.style.padding = padding
        }
        this.setText(this.object.Text)
        this.setColor(this.object.Color)
        this.setSize(this.object.Size)
        this.setTextPadding(this.object.TextPadding)

        // this.setHoverText = function (text : string) {
        //     this.cover.addEventListener('mouseover', function () {
        //         // this.setText(text)
        //         console.log(this.id)
        //         console.log()
        //     })
        //     this.element.addEventListener('mouseout', function () {
        //         // this.setText(this.object.Text)
        //     })
        // }


        this.setPadding = function (padding : string) {
            this.element.style.padding = padding
        }
        this.setBackgroundColor = function (color : string) {
            this.element.style.backgroundColor = color
        }
        this.setStrokeStyle = function (style : string) {
            this.element.style.borderStyle = style
        }
        this.setStrokeColor = function (color : string) {
            this.element.style.borderColor = color
        }
        this.setStrokeWidth = function (width : string) {
            this.element.style.borderWidth = width
        }
        this.setStrokeRadius = function (radius : string) {
            this.element.style.borderRadius = radius
        }
        this.setRippleColor = function (color : string) {
            // this.element.style.backgroundColor = color
            // console.log(`RippleColor : ${color}`)
        }
        this.setPadding(this.object.Padding)
        this.setBackgroundColor(this.object.BackgroundColor)
        this.setStrokeColor(this.object.StrokeColor)
        this.setStrokeStyle(this.object.StrokeStyle)
        this.setStrokeWidth(this.object.StrokeWidth)
        this.setStrokeRadius(this.object.StrokeRadius)
        this.setRippleColor(this.object.RippleColor)

        
        this.setIcon = function (icon : string) {
            this.icon.src = icon
        }
        this.setIconColor = function (color : string) {
            this.icon.style.color = color
        }
        this.setIconSize = function (size : string) {
            this.icon.style.width = size
        }
        this.setIconTop = function (top : boolean) {
            // this.icon.style.top = this.object['IconTop']
            // console.log(`Top : ${top}`)
        }
        this.setIconPadding = function (padding : string) {
            this.icon.style.padding = padding
        }
        this.setIconGap = function (gap : string) {
            this.element.style.gap = gap
        }
        // this.setIcon(this.object.Icon)
        this.setIconColor(this.object.IconColor)
        this.setIconSize(this.object.IconSize)
        this.setIconTop(this.object.IconTop)
        this.setIconPadding(this.object.IconPadding)
        this.setIconGap(this.object.IconGap)
    }
}