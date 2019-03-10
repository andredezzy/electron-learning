import React, { Component } from "react";

import "./styles.css";

import TextArea from "../../components/TextArea";

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <TextArea />
            </div>
        );
    }
}
