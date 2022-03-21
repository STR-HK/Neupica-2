import { Ascii } from "../Utils/Ascii.js";
import { initIndex } from "./Console/Index.js";
import { getScript } from "./DOM/Contents.js";
import { initWindow } from "./DOM/Window.js";
initWindow();
initIndex();
getScript('./assets/js/Neupica/Console/Global.js', 'module');
getScript('./assets/js/Lib/Sample.js', 'module');
window.loaded = false;
function solveBootingStack() {
    let bootList = localStorage.getItem('bootList');
    if (bootList == null || bootList == NaN) {
        localStorage.setItem('bootList', '0');
        bootList = new String('');
    }
    bootList += '0';
    console.log('bootListingStack :', bootList.length);
    localStorage.setItem('bootList', bootList);
}
window.appList = [];
export function runApp(class_) {
    let app = new class_();
    window.appList.push(app);
}
window.onload = () => {
    window.loaded = true;
    console.log(Ascii('Neupica 2'));
    solveBootingStack();
};
//# sourceMappingURL=Neupica2.js.map