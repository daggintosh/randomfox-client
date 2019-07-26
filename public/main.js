const {app, BrowserWindow} = require('electron')

function createWindow()
{
    let win = new BrowserWindow({ 
        width: 1600,
        height: 900,
        autoHideMenuBar: true
    })
    win.loadURL("http://localhost:3000/")
}

app.on("ready", createWindow)