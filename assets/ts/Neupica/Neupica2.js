import { Ascii } from "../Utils/Ascii.js";
import { initIndex } from "./Console/Index.js";
import { initWindow } from "./DOM/Window.js";
import { initGlobal } from "./Console/Global.js";
import { getScript } from "./DOM/Contents.js";
initWindow();
initIndex();
initGlobal();
// initFloat()
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
window.name = "Neupica 2c";
window.version = '2.2.2c';
// window.mode = 'development'
window.mode = 'shipping';
/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}
function ship() {
    addStyle(`
        * {
            box-sizing: border-box;
            position: relative;
            user-select: none;
            scroll-behavior: smooth;
            -webkit-tap-highlight-color: transparent;
        }
        html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-size: 1px;
        }
        .NeuCover, .C {
            display: contents;
        }
        flt-glass-pane {
            height: 100%;
        }

        
    `);
    addStyle(`
    /* width */
        ::-webkit-scrollbar {
            width: 9px;
        }

        /* button */
        ::-webkit-scrollbar-button {
            background: transparent;
            height: 0;
            width: 0;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #5f6368;
            border-radius: 4px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #bbb;
        }
        /* Corner */
        ::-webkit-scrollbar-corner {
            background: transparent;
        }

        /* Resizer */
        ::-webkit-resizer {
            background: transparent;
        }`);
}
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
        if (window.mode === 'shipping') {
            ship();
        }
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
// export function thisClass(element) {
//     return window.Index.getItem(element.id)
// }
// window.thisClass = thisClass
//# sourceMappingURL=Neupica2.js.map