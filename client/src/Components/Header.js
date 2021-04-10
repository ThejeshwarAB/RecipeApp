import React, { useEffect, useState } from 'react';
import {
    Link,
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

function Header(props) {

    const [datas, setDatas] = useState(null);

    // var LogoutFun = () => {
    //     useEffect(() => {
    //         fetch("http://localhost:8000/logout", {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({})
    //         })
    //             .then(window.location.assign("Home"))
    //             .then(res => setDatas(res));
    //     },[]);
    // }



    return (
        <div className="HeaderCss">
            <h1>FOOD RECIPE APP USING MERN STACK</h1>
            <nav className="LinkerCss">
                <Link to='Home'>
                    HOME
                </Link>
                {/* <Link to='Favorite'>
                    FAVOURITE
                </Link> */}
                {/* <Link to='Profile'>
                    PROFILE
                </Link> */}
                <Link to='Login' >
                    LOGOUT
                </Link>
            </nav>
        </div>
    );
}

export default Header;