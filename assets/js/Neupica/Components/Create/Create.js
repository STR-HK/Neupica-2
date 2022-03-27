function makeId(length) {
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

export function createCover(name) {
    let element = document.createElement("div")
    element.id = name + "-" + makeId(6)
    element.classList.add("NeuCover")
    window.Index.setItem(element.id, element)

    return element
}

export function createDiv() {
    let element = document.createElement("div")
    element.id = "NeuDiv-" + makeId(6)
    window.Index.setItem(element.id, element)

    return element
}

export function createLayout(layoutname) {
    let element = document.createElement("div")
    element.id = layoutname + "-" + makeId(6)
    window.Index.setItem(element.id, element)

    return element
}

export function createElement(tagName) {
    let element = document.createElement(tagName)
    element.id = "NeuElem-" + tagName + "-" + makeId(6)
    window.Index.setItem(element.id, element)

    return element
}
