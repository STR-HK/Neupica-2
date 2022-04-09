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

function sleep(milliseconds) {
    var start = new Date().getTime()
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break
        }
    }
}

let stack = 0

export function runApp(class_) {
    if (!window.loaded) {
        window.onload = () => {
            window.loaded = true
        }
    }

    if (window.solved == false) {
        console.log(Ascii("Neupica 2"))
        solveBootingStack()
        window.solved = true
    }

    let app = new class_()
    window.appList.push(app)
    Debug(app.app)
    return app

    // console.log(window.loaded)

    // if (window.loaded) {
    //     foo()
    //     console.log(window.loaded)
    // } else {
    //     function uoo() {
    //         if (window.loaded) {
    //             console.log("loaded")
    //             foo()
    //         } else {
    //             console.log("not loaded")

    //             stack++

    //             if (stack > 100) {
    //                 console.log("stack 100 times -> stop")
    //                 return
    //             }
    //             sleep(100)
    //             // await new Promise(r => setTimeout(r, 2000));

    //             uoo()
    //         }
    //     }
    //     uoo()
    // }
}

export function thisClass(element) {
    return window.Index.getItem(element.id)
}
