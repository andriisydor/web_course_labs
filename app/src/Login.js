import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error1, setError] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    let cancelLoggin = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
    }

    // logginAttempt = () => {
    //     // localStorage.setItem('token', '123');
    //     // localStorage.setItem('id', '1');
    //     console.log('login attempt!');
    // }

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    let navigate = useNavigate();

    const showError = () => {
        if (error1) {
            return(
                <React.Fragment>
                    <span className="closebtn">&times;</span> 
                    <strong>Error! {resultMessage.message} </strong>
                </React.Fragment>
            );
        } 
    }

    const logginAttempt = () => {
        fetch("http://127.0.0.1:5000/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
          .then(res => {
                console.log(res);
                console.log(res.status);
                console.log(res.statusText);
                if (res.status != 200) {
                    console.log('setttt');
                    setError(true);
                    console.log(error1);
                }
                return res.json();
        })
          .then(
            (result) => {
                console.log(username);
                console.log(result);
                localStorage.setItem('token', result.token);
                localStorage.setItem('id', result.id);
                // window.location.href='/';
                setResultMessage(result);
                if (!error1){
                    console.log(error1);
                    console.log(!error1);
                    console.log('123');
                    navigate("/");
                }
            },
            // Примітка: важливо обробляти помилки саме тут,
            // а не в блоці catch (), щоб не перехоплювати
            // виключення з помилок в самих компонентах.
            (error) => {
            //   this.setState({
            //     error: true
            //   });
                console.log(error);
            }
          )
      }

    cancelLoggin();
    return (
        <div className="mainpart">
            <h1>login</h1>
            <div className="alert">
                {showError()}
            </div>
            <div className="objectholder">
                <form id="login-form">
                    <input name="username" onChange={handleChangeUsername} placeholder="username" className="forminput"></input>
                    <input name="password" onChange={handleChangePassword} placeholder="password" className="forminput" type="password">
                    </input>
                    <Link to="/registration" className="forget"><span>Don`t have account?</span></Link>
                    <input onClick={logginAttempt} className="enter" type="button" value="submit">
                    </input>
                </form>
            </div>
        </div>
    );
}
 
export default Login;