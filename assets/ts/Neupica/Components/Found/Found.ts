import { Children } from "../../../Common/Children.js"
import {
    createCover,
    createDiv,
    createImg,
    createInput,
    createLayout,
} from "../Create/Create.js"
import { Geometry } from "../../Core/Geometry.js"

interface geometry {
    Width: string,
    Height: string,
    MinWidth: string,
    MinHeight: string,
    MaxWidth: string,
    MaxHeight: string,
    Left: string,
    Top: string,
    Right: string,
    Bottom: string,
    Margin: string,
    Padding: string,
    // Border: : string,
    ZIndex: string,
    Display: string,
    Position: string,
    Float: string,
    Overflow: string,
    OverflowX: string,
    OverflowY: string,
    AspectRatio: string,
}

interface UElement extends HTMLElement {
    addChild: (child) => void
}

interface UDivElement extends HTMLDivElement {
    addChild: (child) => void
}

interface UImageElement extends HTMLImageElement {
    addChild: (child) => void
}

interface UInputElement extends HTMLInputElement {
    addChild: (child) => void
}

export class Found extends Children {
    build: () => void
    target: UElement

    name: string

    cover: UDivElement
    element: UElement | UDivElement | UInputElement | UImageElement

    geometry: geometry
    private update_gm: (attribute: string) => void
    private readonly build_gm: () => void
    getBound: () => UDivElement

    watchEvent: (eventname: string, callback: Function)  => void
    watchBoundEvent: (eventname: string, callback: Function) => void
    watchPreset: (preset: string, callback: Function) => void
    watchEvents: (eventnames: Array<string>, callback: Function) => void

    constructor() {
        super()

        this.build = function () {
            this.obj = {}
            Object.entries(this.data).forEach(([key, value]) => {
                this.obj[key] = value
            })

            Object.keys(this.data).forEach((key) => {
                Object.defineProperty(this.data, key, {
                    get: () => {
                        return this.obj[key]
                    },
                    set: (newValue) => {
                        this.obj[key] = newValue
                        this[key]()
                    },
                })
            })
        }

        this.geometry = new Geometry().geometry
        this.target = this.element

        this.update_gm = function (attribute: string) {
            try {
                this.target.style
            } catch (e) {
                this.target = this.element
                try {
                    this.target.style
                } catch (e) {
                    console.warn(this)
                    console.warn(
                        '"this.element & this.target" is missing\nUnable to update geometry'
                    )
                    return
                }
            }
            if (attribute === "Width") {
                // this.cover.style.width = this.geometry.Width
                this.target.style.width = this.geometry.Width
            }
            if (attribute === "Height") {
                this.target.style.height = this.geometry.Height
            }
            if (attribute === "MinWidth") {
                this.target.style.minWidth = this.geometry.MinWidth
            }
            if (attribute === "MinHeight") {
                this.target.style.minHeight = this.geometry.MinHeight
            }
            if (attribute === "MaxWidth") {
                this.target.style.maxWidth = this.geometry.MaxWidth
            }
            if (attribute === "MaxHeight") {
                this.target.style.maxHeight = this.geometry.MaxHeight
            }
            if (attribute === "Left") {
                this.target.style.left = this.geometry.Left
            }
            if (attribute === "Top") {
                this.target.style.top = this.geometry.Top
            }
            if (attribute === "Right") {
                this.target.style.right = this.geometry.Right
            }
            if (attribute === "Bottom") {
                this.target.style.bottom = this.geometry.Bottom
            }
            if (attribute === "Margin") {
                this.target.style.margin = this.geometry.Margin
            }
            if (attribute === "Padding") {
                this.target.style.padding = this.geometry.Padding
            }
            if (attribute === "Border") {
                this.target.style.border = this.geometry.Border
            }
            if (attribute === "ZIndex") {
                this.target.style.zIndex = this.geometry.ZIndex
            }
            if (attribute === "Display") {
                this.target.style.display = this.geometry.Display
            }
            if (attribute === "Position") {
                this.target.style.position = this.geometry.Position
            }
            if (attribute === "Float") {
                this.target.style.float = this.geometry.Float
            }
            if (attribute === "Overflow") {
                this.target.style.overflow = this.geometry.Overflow
            }
            if (attribute === "OverflowX") {
                this.target.style.overflowX = this.geometry.OverflowX
            }
            if (attribute === "OverflowY") {
                this.target.style.overflowY = this.geometry.OverflowY
            }
            if (attribute === "AspectRatio") {
                this.target.style.aspectRatio = this.geometry.AspectRatio
            }

        }

        this.build_gm = function (): void {
            this.gb_obj = {}

            Object.entries(this.geometry).forEach(([key, value]) => {
                this.gb_obj[key] = value
                // this[key] = value
            })

            Object.keys(this.geometry).forEach((key) => {
                Object.defineProperty(this.geometry, key, {
                    get: () => {
                        return this.gb_obj[key]
                    },
                    set: (newValue) => {
                        this.gb_obj[key] = newValue
                        // console.log(key)
                        this.update_gm(key)
                    },
                })
            })
        }
        this.build_gm()

        this.getBound = function (): UDivElement {
            let target = this.cover
            while (true) {
                if (!Array.from(target.classList).includes("NeuBound")) {
                    target = target.children[0]
                } else {
                    break
                }
            }
            return target
        }

        this.watchEvent = function (eventname: string, callback: Function) {
            this.cover.addEventListener(eventname, callback)
        }
        this.watchBoundEvent = function (eventname: string, callback: Function) {
            this.getBound().addEventListener(eventname, callback)
        }
        this.watchPreset = function (preset: string, callback: Function) {
        }
        this.watchEvents = function (eventnames: Array<string>, callback: Function) {
            eventnames.forEach((eventname) => {
                console.log(eventname)
                this.cover.addEventListener(eventname, callback)
            })
        }
    }

    createCover(): UDivElement {
        return createCover(Object.getPrototypeOf(this).constructor.name)
    }
    createDiv(): UDivElement {
        return createDiv()
    }
    createImg(): UImageElement {
        return createImg()
    }
    createInput(): UInputElement {
        return createInput()
    }
}
