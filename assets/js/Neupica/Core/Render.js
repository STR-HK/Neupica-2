export function NeuRender(layout, dom, slience) {
    if (!(slience)) {
        console.log(
            "%cNeuRender process called",
            "font-weight: bold; color: #bada55"
        )
        console.log(layout, dom)
    }
    // console.log(layout.element)
    dom.appendChild(layout.element)
}
