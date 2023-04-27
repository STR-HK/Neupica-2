import { Children } from "../../../Common/Children.js"
import {
    Bounding,
    createCover,
    createDiv,
    createImg,
    createInput,
    createLayout, createModal, createUnique, UDivElement, UElement, UImageElement, UInputElement
} from "../Create/Create.js"
import { geometry, Geometry } from "../../Core/Geometry.js"
// import { Modal_dep } from "../../../Common/Modal.js"
// import { Object } from "../../../Common/Object"

export class Found extends Children {
    build: () => void
    target: UElement | UDivElement | UInputElement | UImageElement

    name: string

    cover: UDivElement
    element: UElement | UDivElement | UInputElement | UImageElement

    geometry: geometry
    private geometryUpdater: (attribute: string) => void
    private readonly buildGeometry: () => void
    getBoundElement: () => UDivElement
    getBoundingClientRect: () => DOMRect

    watchEvent: (eventname: string, callback: Function)  => void
    watchBoundEvent: (eventname: string, callback: Function) => void
    watchPreset: (preset: string, callback: Function) => void
    watchEvents: (eventnames: Array<string>, callback: Function) => void
    getBoundingParent: () => HTMLElement

    dataObj: Object | undefined
    unique: string
    cascade: Object
    useCascade: () => void

    constructor() {
        super()
        this.name = "Found"

        this.unique = createUnique()

        this.cascade = {}

        this.useCascade = function() {
            Object.keys(this.cascade).forEach((key) => {
                Object.defineProperty(this, key, {
                    get: () => {
                        return this.cascade[key]
                    },
                    set: (newValue) => {
                        let parent = this.cascade[key].parent
                        this.cascade[key].suicide()
                        parent.addChild(newValue)
                        this.cascade[key] = newValue
                    },
                })
            })
        }

        this.build = function () {
            this.dataObj = {}
            Object.entries(this.data).forEach(([key, value]) => {
                this.dataObj[key] = value
            })

            Object.keys(this.data).forEach((key) => {
                Object.defineProperty(this.data, key, {
                    get: () => {
                        return this.dataObj[key]
                    },
                    set: (newValue) => {
                        this.dataObj[key] = newValue
                        this[key]()
                    },
                })
            })
        }

        this.geometry = new Geometry().geometry
        this.target = this.element

        this.geometryUpdater = function (attribute: string) {
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
            if (attribute === "Cursor") {
                this.target.style.cursor = this.geometry.Cursor
            }

            if (attribute === "Transform") {
                this.target.style.transform = this.geometry.Transform
            }

            if (attribute === "TransformOrigin") {
                this.target.style.transformOrigin = this.geometry.TransformOrigin
            }

            if (attribute === "Filter") {
                this.target.style.filter = this.geometry.Filter
            }

        }

        this.buildGeometry = function (): void {
            this.geometryObj = {}

            Object.entries(this.geometry).forEach(([key, value]) => {
                this.geometryObj[key] = value
                // this[key] = value
            })

            Object.keys(this.geometry).forEach((key) => {
                Object.defineProperty(this.geometry, key, {
                    get: () => {
                        return this.geometryObj[key]
                    },
                    set: (newValue) => {
                        this.geometryObj[key] = newValue
                        // console.log(key)
                        this.geometryUpdater(key)
                    },
                })
            })
        }
        this.buildGeometry()

        this.getBoundElement = function (): UDivElement {
            let target = this.cover
            while (true) {
                if (!Array.from(target.classList).includes(Bounding)) {
                    target = target.children[0]
                } else {
                    break
                }
            }
            return target
        }

        this.getBoundingParent = function() {
            let target = this.cover.parentElement
            while (target.style.display == 'contents') {
                target = target.parentElement
            }
            return target
        }

        this.getBoundingClientRect = function() {
            return this.getBoundElement().getBoundingClientRect()
        }

        this.watchEvent = function (eventname: string, callback: Function) {
            this.cover.addEventListener(eventname, callback, true)
        }
        this.watchBoundEvent = function (eventname: string, callback: Function) {
            this.getBoundElement().addEventListener(eventname, callback, true)
        }
        this.watchPreset = function (preset: string, callback: Function) {
        }
        this.watchEvents = function (eventnames: Array<string>, callback: Function) {
            eventnames.forEach((eventname) => {
                // console.log(eventname)
                this.cover.addEventListener(eventname, callback, true)
            })
        }
    }

    createModal(): UDivElement {
        return createModal()
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
