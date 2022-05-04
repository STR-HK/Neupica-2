import { runApp } from "../Neupica2.js"
import { NeuRender } from "./Render.js"

export class NeuApp {
    constructor() {
        this.layout = false
        this.dom = false

        this.app = this.createApp()
    }

    createApp() {
        let app = document.createElement("div")
        app.id = Object.getPrototypeOf(this).constructor.name
        app.className = "NeuApp"
        return app
    }

    draw(where) {
        if (this.layout == false) {
            console.error("layout is not defined")
            return
        } else {
            this.dom = document.querySelector(where)
            this.dom.appendChild(this.app)
            runApp(this)

            NeuRender(this.layout, this.app)
        }
    }
}
