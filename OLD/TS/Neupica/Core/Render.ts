export function NeuRender(layout: any, dom: any) {
    console.log('%cNeuRender process called', "font-weight: bold; color: #bada55")
    console.log(layout, dom)

    dom.appendChild(layout.element)
}