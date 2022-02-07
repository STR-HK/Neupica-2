let loaded = false;
let stack = [];
// export function runApp (appName : string, appClass : any, {debug = true} = {}) {
//     console.log(Array.from(arguments))
//     // loaded = true
//     if ( loaded == false ) {
//         stack.push([appName, appClass])
//         // console.log('appRunStacked :', appName, appClass, 'loaded :', loaded)
//     } else {
//         window[appName] = appClass
//         console.log('runApp :', appName, appClass, 'loaded :', loaded)
//     }
// }
export class App {
    constructor() {
    }
}
export function runApp(app) {
    if (loaded == false) {
        stack.push(arguments[0]);
    }
    else {
        window.app = new app();
    }
}
function runStackedApp() {
    stack.forEach(stackdElement => {
        runApp(stackdElement);
    });
}
// export function windowRize (key: string, value: any) {
//     runApp(key, value, debug = true)
// }
function solveBootingStack() {
    let bootList = localStorage.getItem('bootList');
    if (bootList == null || bootList == NaN) {
        localStorage.setItem('bootList', '0');
        bootList = '';
    }
    bootList += '0';
    console.log('bootListingStack :', bootList.length);
    localStorage.setItem('bootList', bootList);
}
import { Ascii } from '../Utils/Ascii.js';
let data = {
    "name": "Neupica 2",
    "ascii": Ascii('Neupica 2'),
    "version": "Alpha v1",
    // "description": "Neupica 2",
    "author": "STR.HK",
    "license": "GPL-3.0",
};
window.Ascii = Ascii;
window.onload = () => {
    const Neupica = new Init();
    loaded = true;
    // console.log(
    //     `%c${data.name}`,
    //     `
    //     // background-image: linear-gradient(60deg, #E21143, #FFB03A);
    //     background-clip: text;
    //     font-size: 4em;
    //     font-family: Pretendard;
    //     `,
    //     `by ${data.author}`
    // )
    console.log(`%c${data.ascii}`, `
        // font-size: 0.5em;
        // font-family: Pretendard;

        `);
    console.log(`%cVERSION : ${data.version} \nLICENSE : ${data.license}`, `
        // background-image: linear-gradient(60deg, #E21143, #FFB03A);

        background-clip: text;
        font-size: 1.5em;
        font-family: Pretendard;
        `);
    runStackedApp();
    solveBootingStack();
};
class Init {
    constructor() {
    }
}
// function init () {
//     window.addEventListener('resize', function (event) {
//         var screenWidth : number = window.screen.width
//         var screenHeight : number = window.screen.height
//     })
// }
// export class NeupicaV2 {
//     constructor () {
//     }
// }
// class Root {
//     constructor () {
//         // 위젯 관리 도군
//     }
// }
//# sourceMappingURL=Neupica2.js.map