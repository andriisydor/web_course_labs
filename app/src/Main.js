import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import  { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Error from './Error';
import Object from './Object';
import PageNav from './PageNav';

function Main(props) {
    const [token] = useState(localStorage.getItem('token'));
    const [id] = useState(localStorage.getItem('id'));
    const [playlists, setPlaylists] = useState([]);
    const [error1, setError] = useState(false);
    const [resultMessage, setResultMessage] = useState('');
    const [limit] = useState(10);
    // const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [searchBeforeSubmit, setSearchBeforeSubmit] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
      const getPlaylists = () => {
        let requestLink =`http://127.0.0.1:5000/service${props.service}${id}?limit=${limit}&offset=${limit * (page - 1)}`;
        if (search === ''){
          requestLink =`http://127.0.0.1:5000/service${props.service}${id}?limit=${limit}&offset=${limit * (page - 1)}`;
        } else {
          requestLink =`http://127.0.0.1:5000/service${props.service}${id}?limit=${limit}&offset=${limit * (page - 1)}&q=${search}`;
        }

        fetch(requestLink, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
          .then(res => {
                if (res.status !== 200) {
                    navigate("/login");
                    setError(true);
                }
                return res.json();
        })
          .then(
            (result) => {
                if ('message' in result || 'msg' in result){
                    setResultMessage(result);
                } else {
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
    }, [search, page, props.service])

    const showError = () => {
      if (error1) {
          return(<Error handleCloseClick={handleCloseClick} message={resultMessage.message}/>);
      } 
    }

    const handleCloseClick = () => {
      setError(false);
      setResultMessage('');
    }

    const handleSearchChange = (event) => {
      setSearchBeforeSubmit(event.target.value);
    }

    const handleSearch = () => {
      setSearch(searchBeforeSubmit);
      setPage(1);
    }
    
    const handlePrev = () => {
      if (page > 1){
        setPage(page - 1);
      }
    }

    const handleNext = () => {
      setPage(page + 1);
    }

    const placePlaylists = () => {
      if (!error1 && playlists.length === 0){
        return <h3>No playlists found</h3>
      } else if (!error1){
        const playlistItems = playlists.map((playlist) =>
          <Object key={playlist.id} link={`/playlist/${playlist.id}`} name={playlist.title} title={playlist.user.username} />
        );
        return playlistItems;
      }
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
          <input className="search" onChange={handleSearchChange} type="text" placeholder="search..." name="search"></input>
          <button className="search-button" onClick={handleSearch} type="button">&#x3e;</button>
        </form>
        <div className="objectholder">
          {placePlaylists()}
        </div>
        <PageNav number={playlists.length} limit={limit} page={page} handlePrev={handlePrev} handleNext={handleNext}/>
      </div>
    </React.Fragment>
    );
}

export default Main;
