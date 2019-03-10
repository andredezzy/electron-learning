const { BrowserWindow } = require("electron");

const Window = require("../Window");

module.exports = class SplashWindow extends Window {
    constructor() {
        super("Splash");
    }

    create() {
        this.window = new BrowserWindow({
            width: 350,
            height: 400,
            transparent: true,
            frame: false,
            center: true,
            maximizable: false,
            resizable: false,
            backgroundColor: '#95a5a6'
        });

        this.window.loadURL(`file://${__dirname}/static/splash-window.html`);
    }
};
