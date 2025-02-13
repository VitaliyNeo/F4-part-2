import * as React from "react";

import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header(props) {

    return (
        <header id="home" className="h_content">

            <div className="column col_left">
                <div className="h_logo">
                    <img
                        src="https://icon666.com/r/_thumb/nla/nla4wxeu7kei_64.png"
                        style={{ height: "40px", width: "auto" }}
                        alt="logo image"
                    />
                    <div className="h_name">{props.headerName}</div>
                </div>
            </div>
            <div className="column col_right">
                <div className="h_buttons">
                    <Link to="/">Категории блюд</Link>
                    <Link className="button_right" to="openapi">OpenAPI</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;