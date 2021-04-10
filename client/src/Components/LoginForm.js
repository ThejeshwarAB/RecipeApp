import React, { useState } from 'react';

function LoginForm(props) {

  const [datas, setDatas] = useState("INITIAL");
  const [dataCheck, setDataCheck] = useState(false);
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');

  var LoginFun = () => {
    fetch("http://localhost:8000/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ loginUser: loginUser, loginPass: loginPass })
    })
      .then(res => res.text())
      .then(res => setDatas(res));
  }

  if (datas == "LOGGED IN") {
    window.location.assign("/Home");
  }

  return (
    <div>
      <form className="FormCss">
        <input type="text" placeholder="Enter your username" onChange={(e) => setLoginUser(e.target.value)} />
        <input type="text" placeholder="Enter your password" onChange={(e) => setLoginPass(e.target.value)} />
        <input type="button" value="Login" onClick={LoginFun} />
        <p>{datas}</p>
      </form>
    </div>
  );
}

export default LoginForm;