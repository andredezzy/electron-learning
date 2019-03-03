import React from "react";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = props => (
    <div className="title-bar item">
        <FontAwesomeIcon className="icon" icon={props.icon}/>
    </div>
);

export default Item;
