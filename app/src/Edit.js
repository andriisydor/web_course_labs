import React, { useState } from 'react';
import Navbar from './Navbar';
import Object from './Object';
import { useNavigate } from "react-router-dom";

function Edit() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error1, setError] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    let navigate = useNavigate();

    const handleChangeUsername = (event) => {
        setNewUsername(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setNewEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setNewPassword(event.target.value);
    }

    let getBody = () => {
        let result = {};
        if (newUsername !== ''){
            result.username = newUsername;
        }
        if (newEmail !== ''){
            result.email = newEmail;
        }
        if (newPassword !== ''){
            result.password = newPassword;
        }
        console.log(result);
        return JSON.stringify(result);
    }

    const handleChangeAttempt = (event) => {
        fetch(`http://127.0.0.1:5000/user/${localStorage.getItem('id')}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: getBody(),
        })
          .then(res => {
                if (res.status !== 200) {
                    setError(true);
                }
                return res.json();
        })
          .then(
            (result) => {
                if ('message' in result || 'msg' in result){
                    setResultMessage(result);
                } else {
                    localStorage.setItem('token', result.token);
                    localStorage.setItem('id', result.id);
                    navigate('/edit');
                }
            },
            (error) => {
                setError(true);
                setResultMessage(error);
            }
          )
    }

    const getUserData = () => {
        fetch("http://127.0.0.1:5000/user", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
          .then(res => {
                if (res.status !== 200) {
                    setError(true);
                }
                return res.json();
        })
          .then(
            (result) => {
                if ('message' in result || 'msg' in result){
                    setResultMessage(result);
                } else if ('username' in result && 'email' in result){
                    setUsername(result.username);
                    setEmail(result.email);
                }
            },
            (error) => {
                setError(true);
                setResultMessage(error);
            }
          )
      }
    if (!error1){
        getUserData();
    }
    
    return ( 
        <React.Fragment>
        <Navbar />
        <div className="mainpart moveaside">
            <h1>editing</h1>
            <div className="objectholder">
                <Object name={'username: ' + username} title = {'email: ' + email}/>
                <form>
                    <input placeholder="username" className="forminput" onChange={handleChangeUsername}></input>
                    <input placeholder="email" className="forminput" onChange={handleChangeEmail}></input>
                    <input placeholder="password" className="forminput" type="password" onChange={handleChangePassword}>
                    </input>
                    <input onClick={handleChangeAttempt} className="enter" type="button" value="submit"></input>
                </form>

                <form>
                    <input className="enter" type="button" value="delete"></input>
                </form>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Edit;