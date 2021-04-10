import React from 'react';
import {
    Link,
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";

function Initial(props) {
    return (
        <div className="HeaderCss">
            <h1>FOOD RECIPE APP USING MERN STACK</h1>
            <nav className="LinkerCss">
            <Link to='Login'>
                    LOGIN
                </Link>
                <Link to='Register'>
                    REGISTER
                </Link>
            </nav>
        </div>
    );
}

export default Initial;