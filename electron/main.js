const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1200,
      height: 1000,
      icon: "./icon/electron.icns"
    })
  
    win.loadURL(`file://${path.join(__dirname, "../dist", "index.html")}`)
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  
  