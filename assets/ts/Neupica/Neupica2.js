import { Ascii } from "../Utils/Ascii.js";
import { initIndex } from "./Console/Index.js";
import { initWindow } from "./DOM/Window.js";
import { initGlobal } from "./Console/Global.js";
import { initFloat } from "./Core/Floating.js";
import { getScript } from "./DOM/Contents.js";
initWindow();
initIndex();
initGlobal();
initFloat();
getScript('https://cdn.jsdelivr.net/npm/ripplet.js@1.1.0');
function solveBootingStack() {
    let bootList = localStorage.getItem("bootList");
    if (bootList == null) {
        localStorage.setItem("bootList", "0");
        bootList = String("");
    }
    bootList += "0";
    console.log("bootListingStack :", bootList.length);
    localStorage.setItem("bootList", bootList);
}
window.appList = [];
window.onLoads = [];
window.solved = false;
window.loaded = false;
window.name = "Neupica 2b";
window.version = '2.2.0b';
window.mode = 'development';
// window.mode = 'shipping'
function boot() {
    console.log(Ascii(window.name));
    console.log(`v.${window.version}`);
    solveBootingStack();
    window.solved = true;
}
export function runApp(app) {
    // console.log('runApp')
    function runOnLoad() {
        app.canSolveQueue = true;
        // console.log('allowed solving queue: ', app)
        app.solveQueues();
    }
    if (window.solved === false) {
        if (window.mode === 'development') {
            boot();
        }
        else {
            window.solved = true;
        }
    }
    if (!window.loaded) {
        // console.log('not loaded, wating started')
        window.onLoads.push(runOnLoad);
        window.onload = () => {
            window.loaded = true;
            // console.log('waiting finished!')
            // console.log(window.onLoads)
            window.onLoads.forEach(eachRunOnLoad => {
                eachRunOnLoad();
            });
            window.onLoads = [];
        };
    }
    else {
        runOnLoad();
    }
    window.appList.push(app);
    return app;
}
// window.runApp = runApp
export function thisClass(element) {
    return window.Index.getItem(element.id);
}
// window.thisClass = thisClass
//# sourceMappingURL=Neupica2.js.map