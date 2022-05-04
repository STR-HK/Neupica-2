// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ipc = ipcMain

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
  titleBarStyle: 'customButtonsOnHover',
  taskBarStyle: 'customButtonsOnHover',

  frame: false,

    width: 360,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  ipc.on('minimizeApp', ()=>{
    mainWindow.minimize();
  })

  ipc.on('maximizeApp', ()=>{
    if(mainWindow.isMaximized()){
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  })

  ipc.on('closeApp', ()=>{
    mainWindow.close();
  })

  // ipc
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.