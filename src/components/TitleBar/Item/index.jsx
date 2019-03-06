import React, { Component } from "react";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Item extends Component {
    constructor() {
        super();
        this.state = { hovered: false };
    }

    handleHovered = () => {
        this.setState({hovered: !this.state.hovered});
    };

    render() {
        var style = {background: this.state.hovered ? this.props.hoverColor : 'transparent'}

        return (
            <div
                className="title-bar item"
                style={style}
                onMouseEnter={this.handleHovered}
                onMouseLeave={this.handleHovered}
                onClick={this.props.onClick}
            >
                <FontAwesomeIcon className="icon" icon={this.props.icon} />
            </div>
        );
    }
}
