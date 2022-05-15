import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';

class Login extends Component {
    state = {  } 

    cancelLoggin = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
    }

    logginAttempt = () => {
        localStorage.setItem('token', '123');
        localStorage.setItem('id', '1');
    }

    render() { 
        this.cancelLoggin();
        return (
            <div className="mainpart">
                <h1>login</h1>
                <div className="alert"></div>
                <div className="objectholder">
                    <form id="login-form">
                        <input name="username" placeholder="username" className="forminput"></input>
                        <input name="password" placeholder="password" className="forminput" type="password">
                        </input>
                        <Link to="/" className="forget"><span>Don`t have account?</span></Link>
                        <Link to="/"><input onClick={this.logginAttempt} className="enter" type="button" value="submit">
                        </input></Link>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Login;