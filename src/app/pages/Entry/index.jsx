import React, { Component } from "react";

import "./styles.css";

export default class Entry extends Component {
    constructor(props) {
        super(props);
        console.log("creating 'Entry' component");

        const token = localStorage.getItem("token");
        if (token) {
            console.log("token exists!");
            this.props.history.push("/app");
            return;
        }
    }

    render() {
        return (
            <div>
                <h1>Entry page</h1>
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
        );
    }
}
