import { createCover, createDiv, createElement } from "../Create/Create.js"

export class Native {
    constructor() {
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
                    `${this.name}.${this.updatePrefix}${key}(${this.obj[key]})` +
                        ` -> Error ignored` +
                        `\n` +
                        ` ${error}`
                )
            }
        }
    }

    createCover() {
        return createCover(this.name)
    }
    createDiv() {
        return createDiv()
    }
    createElement(tagName) {
        return createElement(tagName)
    }
}
