import { createCover, createDiv, createElement } from "../Create/Create.js"

export class Update {
    constructor(target) {
        this.updatePrefix = "u"

        console.log(target)

        this.build = function () {
            // this.target.prototype.uText = function () {
            // this.element.innerText = this.data.Text
            // }
            // console.log("머임")
            // console.log()
            let list_ = Object.getOwnPropertyNames(this)
            list_.forEach((key) => {
                if (key.startsWith(this.updatePrefix)) {
                    console.log(this)
                }
            })
        }
    }
}
