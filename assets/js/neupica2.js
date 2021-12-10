let loaded = false;
let stack = [];
export function runApp(appName, appClass) {
    // loaded = true
    if (loaded == false) {
        stack.push([appName, appClass]);
        console.log('appRunStacked :', appName, appClass, loaded);
    }
    else {
        window[appName] = appClass;
        console.log('runApp :', appName, appClass, loaded);
    }
}
function runStackedApp() {
    stack.forEach(element => {
        console.log('runStackedApp :', element[0], element[1], loaded);
        window[element[0]] = element[1];
    });
}
export function windowRize(key, value) {
    runApp(key, value);
}
window.onload = () => {
    const Neupica = new Init();
    loaded = true;
    runStackedApp();
};
class Init {
    constructor() {
    }
}
function init() {
    window.addEventListener('resize', function (event) {
        var screenWidth = window.screen.width;
        var screenHeight = window.screen.height;
    });
}
export class NeupicaV2 {
    constructor() {
    }
}
class Root {
    constructor() {
        // 위젯 관리 도군
    }
}
//# sourceMappingURL=neupica2.js.map