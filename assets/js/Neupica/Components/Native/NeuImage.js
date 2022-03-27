import { Native } from "./Native.js"

export class NeuImage extends Native {
    constructor() {
        super()
        this.name = "NeuImage"

        this.obj = {
            Src: "./assets/icon/Neupica_Logo_2.svg",
            Alt: "NeuImage",
        }

        Object.entries(this.obj).forEach(([key, value]) => {
            Object.defineProperty(this, key, {
                get: () => {
                    return this.obj[key]
                },
                set: (newValue) => {
                    this.obj[key] = newValue
                    this.update(key)
                },
            })
        })

        this.create()
        this.init()

        this.apply(this.obj)
    }

    create() {
        this.cover = this.createCover()
        this.img = this.createElement("img")
        this.cover.appendChild(this.img)
    }

    init() {
        // this.element.style.width = "fit-content"
        // if (this.def == true) {
        //     this.img.src = "assets/img/def.png"
        // }
    }

    uSrc() {
        this.img.src = this.Src
    }
    uAlt() {
        this.img.alt = this.Alt
    }
}
