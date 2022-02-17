const { app, BrowserWindow } = require('electron')
// const win = new BrowserWindow({ titleBarStyle: 'hiddenInset' })

try {
    require('electron-reloader')(__dirname)
    console.log(__dirname)
} catch (_) {}

function createWindow () {
    const win = new BrowserWindow({
        // titleBarStyle: 'hidden',
        width: 480,
        height: 853,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        autoHideMenuBar: true,
    });
    win.loadFile('index.html')

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
}

app.whenReady().then(createWindow);