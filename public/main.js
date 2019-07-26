const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow()
{
    let win = new BrowserWindow({ 
        width: 1600,
        height: 900,
        autoHideMenuBar: true
    })
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
}

app.on("ready", createWindow)