import { NeuRender } from "./Render.js"

export class NeuApp {
    constructor() {
        this.layout = false
        this.dom = false
    }

    draw(where) {
        if (this.layout == false) {
            console.error("layout is not defined")
            return
        } else {
            this.dom = document.querySelector(where)
            NeuRender(this.layout, this.dom)
        }
    }
}
