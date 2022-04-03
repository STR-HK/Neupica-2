import { Children } from "../../../Common/Children.js"
import { createCover, createDiv, createElement } from "../Create/Create.js"

export class Native extends Children {
    constructor() {
        super()
        this.updatePrefix = "u"
        this.apply = function (obj) {
            Object.entries(obj).forEach((entry) => {
                if (entry[1] != null) {
                    try {
                        this[this.updatePrefix + entry[0]](entry[1])
                    } catch (error) {
                        console.warn(
                            `${this.name} -> ${entry[0]}(${entry[1]})` +
                                `\n` +
                                ` ${error}`
                        )
                    }
                }
            })
        }
        this.update = function (key) {
            try {
                this[this.updatePrefix + key]()
            } catch (error) {
                console.error(
                    `${this.name}.${this.updatePrefix}${key}()` +
                        ` -> Error ignored` +
                        `\n` +
                        ` ${error}`
                )
            }
        }

        this.build = function () {
            this.obj = {}

            Object.entries(this.data).forEach(([key, value]) => {
                this.obj[key] = value
                // this[key] = value
            })

            Object.keys(this.data).forEach((key) => {
                Object.defineProperty(this.data, key, {
                    get: () => {
                        return this.obj[key]
                    },
                    set: (newValue) => {
                        this.obj[key] = newValue
                        this.update(key)
                    },
                })
            })
        }

        this.modifyData = function (newData) {
            Object.entries(newData).forEach(([key, value]) => {
                this.data[key] = value
            })
        }

        this.geometry = {
            Width: "auto",
            Height: "auto",
            MinWidth: "0px",
            MinHeight: "0px",
            MaxWidth: "none",
            MaxHeight: "none",
            Left: "auto",
            Top: "auto",
            Right: "auto",
            Bottom: "auto",
            Margin: "0px",
            Padding: "0px",
            Border: "0px",
        }

        this.watchEvent = function (eventname, callback) {
            this.cover.addEventListener(eventname, callback)
            return this
        }
        this.watchEvents = function (eventnames, callback) {
            eventnames.forEach((eventname) => {
                console.log(eventname)
                this.cover.addEventListener(eventname, callback)
            })
            return this
        }
    }

    createCover() {
        return createCover(Object.getPrototypeOf(this).constructor.name)
    }
    createDiv() {
        return createDiv()
    }
    createElement(tagName) {
        return createElement(tagName)
    }
}
