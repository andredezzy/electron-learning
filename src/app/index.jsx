import React, { Component } from "react";
import Routes from "./routes";

import "./styles.css";
import "./fontAwesome";

import TitleBar from "./components/TitleBar";

class App extends Component {
    render() {
        return (
            <div>
                <TitleBar />
                <Routes />
            </div>
        );
    }
}

export default App;
