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

function DCcreateElement(tagName) {
    let element = document.createElement(tagName)
    element.addChild = function (child) {
        try {
            if (child.hasOwnProperty("cover")) {
                element.appendChild(child.cover)
            } else {
                element.appendChild(child)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return element
}

export function createCover(name) {
    let element = DCcreateElement("div")
    element.id = name + "-" + makeId(6)
    element.classList.add("NeuCover")
    window.Index.setItem(element.id, element)

    return element
}

export function createDiv() {
    let element = DCcreateElement("div")
    element.id = "NeuDiv-" + makeId(6)
    element.classList.add("NeuDiv")
    window.Index.setItem(element.id, element)

    return element
}

export function createLayout(layoutname) {
    let element = DCcreateElement("div")
    element.id = layoutname + "-" + makeId(6)
    window.Index.setItem(element.id, element)

    return element
}

export function createElement(tagName) {
    let element = DCcreateElement(tagName)
    element.id = "NeuElem-" + tagName + "-" + makeId(6)
    window.Index.setItem(element.id, element)

    return element
}
