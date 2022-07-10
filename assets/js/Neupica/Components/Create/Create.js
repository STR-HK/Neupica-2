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

// function DCcreateElement(tagName) {
//     let element = document.createElement("div")
//     element.addChild = function (child) {
//         try {
//             if (child.hasOwnProperty("cover")) {
//                 element.appendChild(child.cover)
//             } else {
//                 element.appendChild(child)
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     return element
// }

function attachFunction(element) {
    HTMLDivElement.prototype.addChild = function (child) {
        console.log("addChild", child)
    }
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

export function createCover(name) {
    let element = document.createElement("div")
    attachFunction(element)
    element.id = name + "-" + makeId(6)

    element.setAttribute("name", name)
    element.classList.add("NeuCover")
    window.Index.setItem(element.id, element)

    return element
}

export function createDiv() {
    let element = document.createElement("div")
    attachFunction(element)
    element.id = "NeuDiv-" + makeId(6)
    element.classList.add("NeuDiv")
    window.Index.setItem(element.id, element)

    return element
}

export function createImg() {
    let element = document.createElement("img")
    attachFunction(element)
    element.id = "NeuImg-" + makeId(6)
    element.classList.add("NeuImg")
    window.Index.setItem(element.id, element)
    return element
}

export function createInput() {
    let element = document.createElement("input")
    attachFunction(element)
    element.id = "NeuInput-" + makeId(6)
    element.classList.add("NeuInput")
    window.Index.setItem(element.id, element)
    return element
}

export function createLayout(layoutname) {
    let element = document.createElement("div")
    attachFunction(element)
    element.id = layoutname + "-" + makeId(6)
    element.setAttribute("name", layoutname)
    window.Index.setItem(element.id, element)

    return element
}

// export function createElement(tagName) {
//     let element = DCcreateElement(tagName)
//     element.id = "NeuElem-" + tagName + "-" + makeId(6)
//     window.Index.setItem(element.id, element)

//     return element
// }
