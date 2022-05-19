import React, { useState } from 'react';
import Navbar from './Navbar';

function Edit() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error1, setError] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

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
                <div className="object">
                    <div className="squarediv"></div>
                    <div className="text">
                        <span className="name"> username: {username} </span>
                        <span className="artist"> email: {email} </span>
                    </div>
                </div>
                <form>
                    <input placeholder="username" className="forminput"></input>
                    <input placeholder="email" className="forminput"></input>
                    <input placeholder="password" className="forminput" type="password"></input>
                    <input className="enter" type="submit" value="submit"></input>
                </form>

                <form>
                    <input className="enter" type="submit" value="delete"></input>
                </form>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Edit;