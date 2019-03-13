import React, { Component } from "react";

import "./styles.css";

import Item from "./Item";

const { remote } = window.require("electron");

export default class TitleBar extends Component {
    handleClose = () => {
        remote.app.quit();
    };

    handleMaximize = () => {
        const currentWindow = remote.getCurrentWindow();

        if (currentWindow.isMaximized()) {
            currentWindow.unmaximize();
        } else {
            currentWindow.maximize();
        }
    };

    handleMinimize = () => {
        remote.getCurrentWindow().minimize();
    };

    render() {
        return (
            <div className="title-bar">
                <Item
                    onClick={this.handleClose}
                    hoverColor="#ff5252"
                    icon="times"
                />
                <Item
                    onClick={this.handleMaximize}
                    hoverColor="#282A36"
                    icon="square"
                />
                <Item
                    onClick={this.handleMinimize}
                    hoverColor="#282A36"
                    icon="window-maximize"
                />
            </div>
        );
    }
}
