import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    state = { 
        username: '1',
        password: '1',
        error: false
     } 

    constructor() {
        super();
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.logginAttempt = this.logginAttempt.bind(this);
    }

    cancelLoggin = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
    }

    // logginAttempt = () => {
    //     // localStorage.setItem('token', '123');
    //     // localStorage.setItem('id', '1');
    //     console.log('login attempt!');
    // }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    logginAttempt() {
        fetch("http://127.0.0.1:5000/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        })
          .then(res => res.json())
          .then(
            (result) => {
            //   this.setState({
            //     isLoaded: true,
            //     items: result.items
            //   });
                console.log(this.state.username);   
                console.log(this.state); 
                console.log(result);
                localStorage.setItem('token', result.token);
                localStorage.setItem('id', result.id);
                window.location.href='/';
            },
            // Примітка: важливо обробляти помилки саме тут,
            // а не в блоці catch (), щоб не перехоплювати
            // виключення з помилок в самих компонентах.
            (error) => {
              this.setState({
                error: true
              });
            }
          )
      }

    render() { 
        this.cancelLoggin();
        return (
            <div className="mainpart">
                <h1>login</h1>
                <div className="alert"></div>
                <div className="objectholder">
                    <form id="login-form">
                        <input name="username" onChange={this.handleChangeUsername} placeholder="username" className="forminput"></input>
                        <input name="password" onChange={this.handleChangePassword} placeholder="password" className="forminput" type="password">
                        </input>
                        <Link to="/" className="forget"><span>Don`t have account?</span></Link>
                        <input onClick={this.logginAttempt} className="enter" type="button" value="submit">
                        </input>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Login;