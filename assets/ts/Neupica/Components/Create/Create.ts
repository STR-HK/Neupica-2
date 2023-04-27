import { Storage } from "../../Console/Storage.js"
import { Found } from "../Found/Found.js"
import { resizeObserver, intersectionObserver } from "../../../Common/Updater.js"
// import { Native } from "../Native/Native"

export function makeId(length: number): string {
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

export interface UElement extends HTMLElement {
    addChild: (child: HTMLElement) => void
}

export interface UDivElement extends HTMLDivElement {
    addChild: (child: HTMLElement) => void
}

export interface UImageElement extends HTMLImageElement {
    addChild: (child: HTMLElement) => void
}

export interface UInputElement extends HTMLInputElement {
    addChild: (child: HTMLElement) => void
}

declare global {
    interface Window {
        Index: Storage
    }
}

// @ts-ignore
// interface HTMLElement extends HTMLElement {
//     addChild: (child: Found) => void
//
//     // appendChild(cover: UDivElement): void
// }


function attachFunction(element: HTMLElement) {
    // @ts-ignore
    element.addChild = function (child: Found) {
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
            console.error(e)
        }
    }
    // element.removeChild = function(child) {
    //     // console.log('removeChild', element)
    //     try {
    //         element.removeChild(child)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    return element
}

function attachToCover(element: HTMLDivElement): UDivElement {
    return <UDivElement>attachFunction(element)
}

let NeuMode = false
let Indexing = true
let Covering = true

export let Bounding = 'Bounding'
export let Cover =  'Cover'

Bounding = "NeuBound"
Cover = "NeuCover"

Bounding = "_"
Cover = "C"


function newCreateElement(tagName: string) {
    let element =  document.createElement(tagName)
    resizeObserver.observe(element)
    intersectionObserver.observe(element)
    return element
}

function camelCaseToSnakeCase(text: string): string {
    let original = text
    let upper = text.toUpperCase()
    let converted = ""

    for (let i = 0; i < original.length; i++) {
        let originalLetter = original[i]
        let upperLetter = upper[i]

        if (i == 0) {
            converted += originalLetter.toLowerCase()
        } else if (originalLetter != upperLetter) {
            converted += originalLetter
        } else {
            converted += '_'
            converted += originalLetter.toLowerCase()
        }
    }
    return converted
}

export function createCover(name: string): UDivElement {
    // let element: HTMLDivElement = newCreateElement("div")
    // console.log(name)
    if (name === "") {
        name = 'neupica_cover'
    }
    if (window.mode === 'shipping') {
        name = 'nc'
    }
    let element: HTMLDivElement = newCreateElement(camelCaseToSnakeCase(name)) as HTMLDivElement
    let Uelement: UDivElement = attachFunction(element) as UDivElement

    if (NeuMode) {
        Uelement.id = name + "-" + makeId(6)
        Uelement.setAttribute("name", name)
        Uelement.classList.add(name)
    }
    if (Covering) {
        Uelement.classList.add(Cover)
    } else {
        Uelement.style.display = 'contents'
    }
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement)
    }

    return Uelement
}

export function createModal(): UDivElement {
    let element: HTMLDivElement = newCreateElement("div") as HTMLDivElement
    let Uelement: UDivElement = attachFunction(element) as UDivElement

    if (NeuMode) {
        Uelement.id = "NeuModal-" + makeId(6)
        Uelement.classList.add("NeuModal")
    }
    Uelement.classList.add(Bounding)
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement)
    }

    return Uelement
}

export function createDiv(): UDivElement {
    let element: HTMLDivElement = newCreateElement('n') as HTMLDivElement
    let Uelement: UDivElement = attachFunction(element) as UDivElement

    if (NeuMode) {
        Uelement.id = "NeuDiv-" + makeId(6)
        Uelement.classList.add("NeuDiv")
    }
    Uelement.classList.add(Bounding)
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement)
    }

    return Uelement
}

export function createImg(): UImageElement {
    let element: HTMLImageElement = newCreateElement("img") as HTMLImageElement
    let Uelement: UImageElement = attachFunction(element) as UImageElement

    if (NeuMode) {
        Uelement.id = "NeuImg-" + makeId(6)
        Uelement.classList.add("NeuImg")
    }
    Uelement.classList.add(Bounding)
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement)
    }

    return Uelement
}

export function createInput(): UInputElement {
    let element: HTMLInputElement = newCreateElement("input") as HTMLInputElement
    let Uelement: UInputElement = attachFunction(element) as UInputElement

    if (NeuMode) {
        Uelement.id = "NeuInput-" + makeId(6)
        Uelement.classList.add("NeuInput")
    }
    Uelement.classList.add(Bounding)
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement)
    }

    return Uelement
}

export function createCustom(tag: string): UElement {
    let element: HTMLElement = newCreateElement(tag) as HTMLElement
    let Uelement: UElement = attachFunction(element) as UElement

    if (NeuMode) {
        Uelement.id = tag + "-" + makeId(6)
        Uelement.classList.add(tag)
        Uelement.setAttribute("name", tag)
    }
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement)
    }

    return Uelement
}


export function createLayout(layoutname: string): UDivElement {
    let element: HTMLDivElement = newCreateElement("div") as HTMLDivElement
    let Uelement: UDivElement = attachFunction(element) as UDivElement

    if (NeuMode) {
        Uelement.id = layoutname + "-" + makeId(6)
        Uelement.classList.add(layoutname)
        Uelement.setAttribute("name", layoutname)
    }
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement)
    }

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
