const { app, Menu, ipcMain, BrowserWindow } = require('electron');
const menu = require('./menu');

Menu.setApplicationMenu(menu)

const createWindow = () =>{
 const win = new BrowserWindow(
        {width:1000, height:605},
 )
 win.loadFile('index.html')
}


app.on('ready', ()=>{
    console.log('...running')
    createWindow()
})






