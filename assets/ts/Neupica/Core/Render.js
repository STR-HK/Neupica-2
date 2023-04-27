window.renders = [];
export function getRender(renderID) {
    return window.renders[renderID];
}
export function validate(NeuApp) {
    let bool = false;
    Object.values(window.renders).forEach(function (value) {
        if (value['app'] === NeuApp) {
            bool = true;
            return false;
        }
    });
    return bool;
}
window.getRender = getRender;
window.validate = validate;
export function NeuRender(app, layout, dom, silence) {
    let renderID = window.renders.length;
    window.renders[renderID] = {
        'app': app,
        'layout': layout,
        'dom': dom,
        'silence': silence
    };
    app.renderID = renderID;
    if (!(silence) && window.mode === 'development') {
        console.log(`%cNeuRender Process(NAME=${app.constructor.name}, PID=${renderID}) Called`, "font-weight: bold; color: #56B6C2");
    }
    dom.appendChild(layout.element);
    // let shadow = dom.shadowRoot
    // shadow.appendChild(layout.element)
}
export function NeuModalRender(app, layout, dom, silence) {
    if (!(silence) && window.mode === 'development') {
        console.log(`%cNeuModalRender Process(TYPE=MODAL) Called`, "font-weight: bold; color: #e77718");
    }
    dom.appendChild(layout.element);
}
export function NeuEliminate(app, layout, dom, silence) {
    let renderID = app.renderID;
    window.appList.shift();
    window.renders[renderID] = false;
    if (!(silence) && window.mode === 'development') {
        console.log(`%cNeuEliminate Process(NAME=${app.constructor.name}, PID=${renderID}) Called`, "font-weight: bold; color: #E06C75");
    }
    dom.removeChild(layout.element);
}
//# sourceMappingURL=Render.js.map