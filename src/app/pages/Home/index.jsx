import React, { Component } from "react";

import "./styles.css";

import TextArea from "../../components/TextArea";
export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log("creating 'Home' component");

        const token = localStorage.getItem("token");
        if (!token) {
            console.log("token not exists!");
            window.location.assign("/");
            return;
        }

        this.state = {
            loggedInToken: token,
            messages: []
        };
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    id: 1,
                    userToken: 1,
                    text: "Test message 1"
                },
                {
                    id: 2,
                    userToken: 2,
                    text: "Test message 2"
                }
            ]
        });
        console.log("componentDidMount() => ");
        console.log(this.state);
    }

    render() {
        return (
            <div className="home-container">
                {this.state.messages.map(message => {
                    var isSent =
                        message.userToken ===
                        parseInt(this.state.loggedInToken, 10);

                    return (
                        <div
                            key={message.id}
                            className={`${
                                isSent ? "sent" : "received"
                            }-message-ballon`}
                        >
                            <span>
                                {`${isSent ? "Sent" : "Received"}`}:{" "}
                                {message.text}
                            </span>
                        </div>
                    );
                })}

                <TextArea />
            </div>
        );
    }
}
