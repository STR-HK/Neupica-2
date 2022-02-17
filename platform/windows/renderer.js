const {remote} = require('electron').remote
// const {BrowserWindow} = remote
const win = remote.getCurrentWindow()
const BrowserWindow = remote.BrowserWindow;

console.log(win)

document.getElementById("minimize").addEventListener("click", (e) => {
    win.minimize()
})

document.getElementById("maximize").addEventListener("click", (e) => {
    if ( win.isMaximized() ){
        win.unmaximize()
    } else {
        win.maximize()
    }
})

document.getElementById("close").addEventListener("click", (e) => {
    win.close()
})