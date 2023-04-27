const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path')
let mainWindow;
function createWindow () {
    mainWindow = new BrowserWindow({
        width: 420,
        height: parseInt(420 * (18 / 9)),
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow();

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {app.quit()}
})
ipcMain.on("set-width", (event, width) => {
    // console.log(mainWindow)
    mainWindow.setSize(width, mainWindow.getSize()[1]);
});