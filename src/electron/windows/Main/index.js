const { BrowserWindow } = require("electron");

const Window = require("../Window");

module.exports = class MainWindow extends Window {
    constructor() {
        super("Main");
    }

    create() {
        this.window = new BrowserWindow({
            width: 800,
            height: 600,
            show: false,
            frame: false
        });

        this.window.loadURL("http://localhost:3000");

        this._capture();
    }

    _capture() {
        this.window.on("close", () => {
            process.stdout.write('app was closed\n');
            this.window = null;
        });
    }
};
