import React, { useState } from 'react';

function RegisterForm(props) {
   
    const [datas, setDatas] = useState("INITIAL");
    const [registerUser, setRegisterUser] = useState('');
    const [registerPass, setRegisterPass] = useState('');

    var RegisterFun = () => {
        fetch("http://localhost:8000/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ registerUser: registerUser, registerPass: registerPass })
        })
            .then(res => res.text())
            .then(res => setDatas(res));
    }
    return (
        <div>
            <form className="FormCss">
                <input type="text" placeholder="Enter your username" onChange={(e) => setRegisterUser(e.target.value)}/>
                <input type="text" placeholder="Enter your password" onChange={(e) => setRegisterPass(e.target.value)}/>
                <input type="button" value="Register" onClick={RegisterFun}/>
                <p>{datas}</p>
            </form>
        </div>
    );
}

export default RegisterForm;