import { Ascii } from "../Utils/Ascii.js"
import { initIndex } from "./Console/Index.js"
import { getScript, getStyle } from "./DOM/Contents.js"
import { initWindow } from "./DOM/Window.js"
import { initGlobal } from "./Console/Global.js"
import { Debug } from "../Utils/Debug.js"

initWindow()
initIndex()
initGlobal()

function solveBootingStack() {
    let bootList = localStorage.getItem("bootList")

    if (bootList == null || bootList == NaN) {
        localStorage.setItem("bootList", "0")
        bootList = new String("")
    }

    bootList += "0"
    console.log("bootListingStack :", bootList.length)
    localStorage.setItem("bootList", bootList)
}

window.appList = []

window.solved = false
window.loaded = false

function booting() {
    console.log(Ascii("Neupica 2"))
    solveBootingStack()
    window.solved = true
}

export function runApp(class_) {
    if (!window.loaded) {
        window.onload = () => {
            window.loaded = true
        }
    }

    if (window.solved == false) {
        booting()
    }

    let app = class_
    window.appList.push(app)
    // Debug(app.app)
    return app
}

export function thisClass(element) {
    return window.Index.getItem(element.id)
}
