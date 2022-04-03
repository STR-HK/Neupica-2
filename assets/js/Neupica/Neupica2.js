import { Ascii } from "../Utils/Ascii.js"
import { initIndex } from "./Console/Index.js"
import { getScript, getStyle } from "./DOM/Contents.js"
import { initWindow } from "./DOM/Window.js"

initWindow()
initIndex()

getScript("./assets/js/Neupica/Console/Global.js", "module")
getScript("./assets/js/Lib/Screen.js", "module")
getScript("./assets/js/Lib/Screen_worker.js", "module")

window.loaded = false

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

let holdings = []

function hold(func, param) {
    holdings.push([func, param])
}

function solveHoldings() {
    holdings.forEach((holding) => {
        holding[0](holding[1])
    })
}

export function runApp(class_) {
    let app = new class_()
    window.appList.push(app)

    return app
}

function solveRunApp(class_) {
    let app = new class_()
    window.appList.push(app)
}

window.onload = () => {
    window.loaded = true

    console.log(Ascii("Neupica 2"))

    solveBootingStack()

    solveHoldings()
}

export function thisClass(element) {
    return window.Index.getItem(element.id)
}
