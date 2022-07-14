export function NeuRender(layout, dom, silence) {
    if (!(silence)) {
        console.log(
            "%cNeuRender process called",
            "font-weight: bold; color: #bada55"
        )
        console.log(layout, dom)
    }
    // console.log(layout.element)
    dom.appendChild(layout.element)
}

export function NeuEliminate(layout, dom, silence) {
    if (!(silence)) {
        console.log(
            "%NeuEliminate process called",
            "font-weight: bold; color: red"
        )
        console.log(layout, dom)
    }
    // console.log(layout.element)
    dom.removeChild(layout.element)
}

