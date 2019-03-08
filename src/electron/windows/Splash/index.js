const { BrowserWindow } = require("electron");

const Window = require("../Window");

module.exports = class SplashWindow extends Window {
    constructor() {
        super("Splash");
    }

    create() {
        this.window = new BrowserWindow({
            width: 450,
            height: 500,
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
