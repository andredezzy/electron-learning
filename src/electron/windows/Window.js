module.exports = class Window {
    constructor(name) {
        this.name = name;
    }

    createWindow() {
        process.stdout.write(`creating "${this.name}" window\n`);
        this.create();
    }

    create() {}
};
