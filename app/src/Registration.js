import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password_1, setPassword1] = useState('');
    const [password_2, setPassword2] = useState('');

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword1 = (event) => {
        setPassword1(event.target.value);
    }

    const handleChangePassword2 = (event) => {
        setPassword2(event.target.value);
    }

    const registrationAttempt = () => {
        console.log(username);
    }

    return (
        <div className="mainpart">
            <h1>register</h1>
            <div className="alert"></div>
            <div className="objectholder">
                <form id="register-form">
                    <input name="username" onChange={handleChangeUsername} placeholder="username" className="forminput">
                    </input>
                    <input name="email" onChange={handleChangeEmail} placeholder="email" className="forminput"></input>
                    <input name="passwordOne" onChange={handleChangePassword1} placeholder="password" className="forminput" type="password"></input>
                    <input name="passwordTwo" onChange={handleChangePassword2} placeholder="password" className="forminput" type="password"></input>
                    <Link to="/login" className="forget"><span>Already have account?</span></Link>
                    <input onClick={registrationAttempt} className="enter" type="button" value="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default Registration;