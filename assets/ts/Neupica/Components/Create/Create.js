import { resizeObserver, intersectionObserver } from "../../../Common/Updater.js";
// import { Native } from "../Native/Native"
export function makeId(length) {
    let result = "";
    let characters = "";
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characters += "abcdefghijklmnopqrstuvwxyz";
    characters += "0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// @ts-ignore
// interface HTMLElement extends HTMLElement {
//     addChild: (child: Found) => void
//
//     // appendChild(cover: UDivElement): void
// }
function attachFunction(element) {
    // @ts-ignore
    element.addChild = function (child) {
        try {
            // console.log(child)
            if (child.hasOwnProperty("cover")) {
                // console.log("%chas Cover", "font-weight: bold; color: #66dfef")
                element.appendChild(child.cover);
            }
            else if (child.hasOwnProperty("element")) {
                // console.log(
                //     "%cno Cover -> try Element",
                //     "font-weight: bold; color: red"
                // )
                element.appendChild(child.element);
            }
            else {
                // console.log(
                //     "%cno Element -> patching just",
                //     "font-weight: bold; color: brown"
                // )
                element.appendChild(child);
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    // element.removeChild = function(child) {
    //     // console.log('removeChild', element)
    //     try {
    //         element.removeChild(child)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
    return element;
}
function attachToCover(element) {
    return attachFunction(element);
}
let NeuMode = false;
let Indexing = true;
let Covering = true;
export let Bounding = "NeuBound";
Bounding = "_";
export let Cover = "NeuCover";
// Cover = "C"
function newCreateElement(tagName) {
    let element = document.createElement(tagName);
    resizeObserver.observe(element);
    intersectionObserver.observe(element);
    return element;
}
function camelCaseToSnakeCase(text) {
    let original = text;
    let upper = text.toUpperCase();
    let converted = "";
    for (let i = 0; i < original.length; i++) {
        let originalLetter = original[i];
        let upperLetter = upper[i];
        if (i == 0) {
            converted += originalLetter.toLowerCase();
        }
        else if (originalLetter != upperLetter) {
            converted += originalLetter;
        }
        else {
            converted += '_';
            converted += originalLetter.toLowerCase();
        }
    }
    return converted;
}
export function createCover(name) {
    // let element: HTMLDivElement = newCreateElement("div")
    // console.log(name)
    let element = newCreateElement(camelCaseToSnakeCase(name));
    let Uelement = attachFunction(element);
    if (NeuMode) {
        Uelement.id = name + "-" + makeId(6);
        Uelement.setAttribute("name", name);
        Uelement.classList.add(name);
    }
    if (Covering) {
        Uelement.classList.add(Cover);
    }
    else {
        Uelement.style.display = 'contents';
    }
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement);
    }
    return Uelement;
}
export function createModal() {
    let element = newCreateElement("div");
    let Uelement = attachFunction(element);
    if (NeuMode) {
        Uelement.id = "NeuModal-" + makeId(6);
        Uelement.classList.add("NeuModal");
    }
    Uelement.classList.add(Bounding);
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement);
    }
    return Uelement;
}
export function createDiv() {
    let element = newCreateElement('n');
    let Uelement = attachFunction(element);
    if (NeuMode) {
        Uelement.id = "NeuDiv-" + makeId(6);
        Uelement.classList.add("NeuDiv");
    }
    Uelement.classList.add(Bounding);
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement);
    }
    return Uelement;
}
export function createImg() {
    let element = newCreateElement("img");
    let Uelement = attachFunction(element);
    if (NeuMode) {
        Uelement.id = "NeuImg-" + makeId(6);
        Uelement.classList.add("NeuImg");
    }
    Uelement.classList.add(Bounding);
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement);
    }
    return Uelement;
}
export function createInput() {
    let element = newCreateElement("input");
    let Uelement = attachFunction(element);
    if (NeuMode) {
        Uelement.id = "NeuInput-" + makeId(6);
        Uelement.classList.add("NeuInput");
    }
    Uelement.classList.add(Bounding);
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement);
    }
    return Uelement;
}
export function createCustom(tag) {
    let element = newCreateElement(tag);
    let Uelement = attachFunction(element);
    if (NeuMode) {
        Uelement.id = tag + "-" + makeId(6);
        Uelement.classList.add(tag);
        Uelement.setAttribute("name", tag);
    }
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement);
    }
    return Uelement;
}
export function createLayout(layoutname) {
    let element = newCreateElement("div");
    let Uelement = attachFunction(element);
    if (NeuMode) {
        Uelement.id = layoutname + "-" + makeId(6);
        Uelement.classList.add(layoutname);
        Uelement.setAttribute("name", layoutname);
    }
    if (Indexing) {
        window.Index.setItem(Uelement.id, Uelement);
    }
    return Uelement;
}
export function createUnique() {
    return makeId(12);
}
// export function createElement(tagName) {
//     let element = DCcreateElement(tagName)
//     element.id = "NeuElem-" + tagName + "-" + makeId(6)
//     window.Index.setItem(element.id, element)
//     return element
// }
//# sourceMappingURL=Create.js.map