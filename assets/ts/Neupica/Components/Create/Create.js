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
function attachFunction(element) {
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
            console.log(e);
        }
    };
    return element;
}
function attachToCover(element) {
    return attachFunction(element);
}
export function createCover(name) {
    let element = document.createElement("div");
    let Uelement = attachFunction(element);
    Uelement.id = name + "-" + makeId(6);
    Uelement.setAttribute("name", name);
    Uelement.classList.add("NeuCover");
    Uelement.classList.add(name);
    window.Index.setItem(Uelement.id, Uelement);
    return Uelement;
}
export function createDiv() {
    let element = document.createElement("div");
    let Uelement = attachFunction(element);
    Uelement.id = "NeuDiv-" + makeId(6);
    Uelement.classList.add("NeuDiv");
    Uelement.classList.add("NeuBound");
    window.Index.setItem(Uelement.id, Uelement);
    return Uelement;
}
export function createImg() {
    let element = document.createElement("img");
    let Uelement = attachFunction(element);
    Uelement.id = "NeuImg-" + makeId(6);
    Uelement.classList.add("NeuImg");
    Uelement.classList.add("NeuBound");
    window.Index.setItem(Uelement.id, Uelement);
    return Uelement;
}
export function createInput() {
    let element = document.createElement("input");
    let Uelement = attachFunction(element);
    Uelement.id = "NeuInput-" + makeId(6);
    Uelement.classList.add("NeuInput");
    Uelement.classList.add("NeuBound");
    window.Index.setItem(Uelement.id, Uelement);
    return Uelement;
}
export function createLayout(layoutname) {
    let element = document.createElement("div");
    let Uelement = attachFunction(element);
    Uelement.id = layoutname + "-" + makeId(6);
    Uelement.classList.add(layoutname);
    Uelement.setAttribute("name", layoutname);
    window.Index.setItem(Uelement.id, Uelement);
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