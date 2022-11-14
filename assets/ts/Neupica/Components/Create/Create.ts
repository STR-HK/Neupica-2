import { Storage } from "../../Console/Storage"

export function makeId(length): string {
    let result = ""

    let characters = ""
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    characters += "abcdefghijklmnopqrstuvwxyz"
    characters += "0123456789"

    let charactersLength = characters.length

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }

    return result
}


interface UDivElement extends HTMLDivElement {
    addChild: (child) => void
}

interface UImageElement extends HTMLImageElement {
    addChild: (child) => void
}

interface UInputElement extends HTMLInputElement {
    addChild: (child) => void
}

declare global {
    interface Window {
        Index: Storage
    }
}


function attachFunction(element) {
    element.addChild = function (child) {
        try {
            // console.log(child)
            if (child.hasOwnProperty("cover")) {
                // console.log("%chas Cover", "font-weight: bold; color: #66dfef")
                element.appendChild(child.cover)
            } else if (child.hasOwnProperty("element")) {
                // console.log(
                //     "%cno Cover -> try Element",
                //     "font-weight: bold; color: red"
                // )
                element.appendChild(child.element)
            } else {
                // console.log(
                //     "%cno Element -> patching just",
                //     "font-weight: bold; color: brown"
                // )
                element.appendChild(child)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return element
}

function attachToCover(element: HTMLDivElement): UDivElement {
    return attachFunction(element)
}

export function createCover(name): UDivElement {
    let element: HTMLDivElement = document.createElement("div")
    let Uelement: UDivElement = attachFunction(element) as UDivElement

    Uelement.id = name + "-" + makeId(6)
    Uelement.setAttribute("name", name)
    Uelement.classList.add("NeuCover")
    Uelement.classList.add(name)
    window.Index.setItem(Uelement.id, Uelement)

    return Uelement
}

export function createDiv(): UDivElement {
    let element: HTMLDivElement = document.createElement("div")
    let Uelement: UDivElement = attachFunction(element) as UDivElement

    Uelement.id = "NeuDiv-" + makeId(6)
    Uelement.classList.add("NeuDiv")
    Uelement.classList.add("NeuBound")
    window.Index.setItem(Uelement.id, Uelement)

    return Uelement
}

export function createImg(): UImageElement {
    let element: HTMLImageElement = document.createElement("img")
    let Uelement: UImageElement = attachFunction(element) as UImageElement

    Uelement.id = "NeuImg-" + makeId(6)
    Uelement.classList.add("NeuImg")
    Uelement.classList.add("NeuBound")
    window.Index.setItem(Uelement.id, Uelement)

    return Uelement
}

export function createInput(): UInputElement {
    let element: HTMLInputElement = document.createElement("input")
    let Uelement: UInputElement = attachFunction(element) as UInputElement

    Uelement.id = "NeuInput-" + makeId(6)
    Uelement.classList.add("NeuInput")
    Uelement.classList.add("NeuBound")
    window.Index.setItem(Uelement.id, Uelement)

    return Uelement
}

export function createLayout(layoutname): UDivElement {
    let element: HTMLDivElement = document.createElement("div")
    let Uelement: UDivElement = attachFunction(element) as UDivElement

    Uelement.id = layoutname + "-" + makeId(6)
    Uelement.classList.add(layoutname)
    Uelement.setAttribute("name", layoutname)
    window.Index.setItem(Uelement.id, Uelement)

    return Uelement
}

export function createUnique(): string {
    return makeId(12)
}


// export function createElement(tagName) {
//     let element = DCcreateElement(tagName)
//     element.id = "NeuElem-" + tagName + "-" + makeId(6)
//     window.Index.setItem(element.id, element)

//     return element
// }
