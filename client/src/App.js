import './App.css';
import React, { useEffect } from 'react';
import {
    Link,
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';
import Favorite from './Views/Favorite';
import Profile from './Views/Profile';
import Header from './Components/Header';
import Initial from './Components/Initial';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    // const [datas,setDatas]=useState(null);

    //     document.onLoad = () =>{fetch("http://localhost:8000/check", {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({})
    //     })
    //         .then(res => setDatas(res));}   

    // var content = (datas==true) ? <Header /> : <Initial />;
    return ( 
    <div className="App">
        <Router>
            {/* {content} */}
            {/* <p className="text-center">DATA IS: {datas}</p> */}
            <Switch>
                <Route exact path='/Login'>
                    <Initial /> 
                    <Login />
                </Route>
                <Route exact path='/Register'>
                    <Initial />
                    <Register />
                </Route>
                <Route exact path='/Home'>
                    <Header />
                    <Home />
                </Route>
                <Route exact path='/Favorite'>
                    <Header />
                    <Favorite />
                </Route>
                <Route exact path='/Profile'>
                    <Header />
                    <Profile />
                </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;