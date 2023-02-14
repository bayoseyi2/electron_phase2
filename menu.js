const { Menu } = require('electron')

const isMac = process.platform==="darwin"

const customMenu = [
    {
        label: 'File',
        submenu:[
            {label: 'Video',
                submenu: [{label:'Load....'}]},
            {type:'separator'},
            isMac ? {role: 'close'} : {role:'quit'}
        ]

       
    },
    {
        label: 'Developer',
        submenu:[
            {role:'toggleDevTools'}
        ]
    }
];

if(isMac){
    customMenu.unshift({
        label:"",
        submenu:[
            {role:'quit'}
        ]
    })
}

module.exports = Menu.buildFromTemplate(customMenu);