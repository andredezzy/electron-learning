import React, { Component } from "react";

import "./styles.css";
import "./fontAwesome";

import TitleBar from "./components/TitleBar";

class App extends Component {
    render() {
        return (
            <div>
                <TitleBar />
                <h1>Learning Electron :D</h1>
            </div>
        );
    }
}

export default App;
