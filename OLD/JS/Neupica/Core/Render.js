export function NeuRender(layout, dom) {
    console.log('%cNeuRender process called', "font-weight: bold; color: #bada55");
    console.log(layout, dom);
    dom.appendChild(layout.element);
}
//# sourceMappingURL=Render.js.map