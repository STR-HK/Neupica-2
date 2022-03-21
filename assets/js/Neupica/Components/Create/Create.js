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
    element.id = "Neu-Div-" + makeId(6)
    window.Index.setItem(element.id, element)

    return element
}

export function createElement(tagName) {
    let element = document.createElement(tagName)
    element.id = "Neu-Elem-" + tagName + "-" + makeId(6)
    window.Index.setItem(element.id, element)

    return element
}
