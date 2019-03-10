import React, { Component } from "react";

import "./styles.css";

import TextareaAutosize from 'react-textarea-autosize';

export default class TextArea extends Component {
    render() {
        return (
            <div className="channel-container">
                <div className="inner">
                    <TextareaAutosize
                        tabIndex="1"
                        placeholder="Conversar"
                        defaultValue=""
                        className="text-area"
                    />
                </div>
            </div>
        );
    }
}
