const { app, BrowserWindow } = require("electron");

const { Main, Splash } = require("./windows");

function createWindow() {
    Main.createWindow();
    Splash.createWindow();

    Main.window.once("ready-to-show", () => {
        process.stdout.write(`ready, the "Main" window will appear in 3 seconds!\n`);
        setTimeout(() => {
            Main.window.show();
            Splash.window.close();
        }, 3000);
    });
}

app.on("ready", createWindow);
