import { Widgets } from "./Widgets.js";
import { NeuButton } from "./NeuButton.js";
// import { WidgetStyler } from "../NeuWidgets";


export class NeuButtonToggle extends Widgets {
    constructor () {
        super()

        this.name = 'NeuButtonToggle'

        this.create()
        this.init()

        this.object = {
            'BorderColor': 'lightgray',
            'BorderWidth': '1px',
            'BorderStyle': 'solid',
            'BorderRadius': '3px',
            'BackgroundColor': 'white',
            // 'Color': 'black',
            // 'Size': '1rem',
            
            'Orientation': 'horizontal',
        }

        this.children = [

        ]

        this.addChild = (child) => {
            this.children.push(child)
            console.log('addChild', child)
            this.calculateChild(child)
        }

        Object.entries(this.object).forEach(([key, value]) => {
            Object.defineProperty(this, key, {
                get: () => {
                    console.log(this.object[key])
                    return this.object[key]
                },
                set: (newValue) => {
                    console.log(this, `${key} : ${newValue}`)
                    this.object[key] = newValue
                    this.update(key)
                }
            })
        })

        this.apply(this.object) // 스타일 적용
    }

    update (key) {
        this['update' + key]()
    }

    create () {
        this.cover = this.createCover(this.name)
            this.element = this.createElement()
            this.cover.appendChild(this.element)
    }

    init () {
        this.element.style.display = 'flex'
        this.element.style.flexDirection = 'row'
        // this.element.style.flexDirection = 'column'
        // this.element.style.flexWrap = 'wrap'
        this.element.style.overflow = 'hidden'


    }

    calculateChild(element) {
        console.log(element)
        this.element.appendChild(element.cover)
    }



    updateBorderColor () {
        this.element.style.borderColor = this.BorderColor
    }

    updateBorderWidth () {
        this.element.style.borderWidth = this.BorderWidth
    }

    updateBorderStyle () {
        this.element.style.borderStyle = this.BorderStyle
    }

    updateBorderRadius () {
        this.element.style.borderRadius = this.BorderRadius
    }

    updateBackgroundColor () {
        this.element.style.backgroundColor = this.BackgroundColor
    }

    updateOrientation () {
        if (this.Orinetation == 'horizontal') {
            console.log('horizontal')
            this.element.style.flexDirection = 'row'
            console.log(this.element.style.flexDirection)
        } else {
            console.log('vertical')
            this.element.style.flexDirection = 'column'
            console.log(this.element.style.flexDirection)

        }
        // this.element.style.flexDirection = this.object.IconTop ? 'column' : 'row'
    }

}