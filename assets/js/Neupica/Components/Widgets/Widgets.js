import { Children } from "../../../Common/Children.js"
import { createCover } from "../Create/Create.js"

export class Widget extends Children {
    constructor() {
        super()

        this.name = "Widget"

        this.updatePrefix = "u"

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
}
