const { app, BrowserWindow } = require("electron");

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
    });

    win.on("close", () => {
        win = null;
    });

    win.loadURL("http://localhost:3000");
    win.show();
}

app.on("ready", createWindow);
