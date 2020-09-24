import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="login-card">
                <h1>LOGIN</h1>
                <hr/>
                <small>Email</small>
                <input className="emailid" placeholder="example@gmail.com" type="email"/>
                <small>Pasword</small>
                <input className="password-login"  type="password" placeholder="minum 8 characters"/>

                <div className="buttons-ls" >
                <button className="log-in">LOGIN</button>
                <button className="sign-up" >SIGNUP</button>
                </div>

            </div>
        </div>
    )
}

export default Login
