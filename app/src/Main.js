import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import  { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Error from './Error';

function Main() {
    const [token] = useState(localStorage.getItem('token'));
    const [id] = useState(localStorage.getItem('id'));
    const [playlists, setPlaylists] = useState([]);
    const [error1, setError] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
      const getPlaylists = () => {
        fetch(`http://127.0.0.1:5000/service/users/${id}`, {
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
                } else {
                    console.log(result);
                    if (result !== playlists){
                        setPlaylists(result);
                    }
                }
            },
            (error) => {
                setError(true);
                setResultMessage(error);
            }
          )
      }
      if (!error1){
          getPlaylists();
      }
    }, [])

    const showError = () => {
      if (error1) {
          return(<Error handleCloseClick={handleCloseClick} message={resultMessage.message}/>);
      } 
    }

    const handleCloseClick = () => {
      setError(false);
      setResultMessage('');
    }

    if (token == null) {
        return <Navigate to='/login' />;
    }
    return ( 
    <React.Fragment>
      <Navbar />
      <div className="mainpart moveaside">
        <h1>playlists</h1>
        {showError()}
        <div className="alert"></div>
        <form className="search-form">
          <input className="search" type="text" placeholder="search..." name="search"></input>
          <button className="search-button" type="submit">&#x3e;</button>
        </form>
        <div className="objectholder">
        </div>
      </div>
    </React.Fragment>
    );
}

export default Main;
