const { app, BrowserWindow } = require("electron");

const { Main, Splash } = require("./windows");

function createWindow() {
    Main.createWindow();
    Splash.createWindow();

    Main.window.once("ready-to-show", () => {
        setTimeout(() => {
            Splash.window.close();
            Main.window.show();
        }, 3000);
    });
}

app.on("ready", createWindow);
