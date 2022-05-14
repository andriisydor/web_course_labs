import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    state = {  } 
    render() { 
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
                        <input className="enter" type="button" value="submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Login;