import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Song from './Song';

function Playlist() {
    const params = useParams();

    const [token] = useState(localStorage.getItem('token'));
    const [id] = useState(localStorage.getItem('id'));
    const [error1, setError] = useState(false);
    const [resultMessage, setResultMessage] = useState('');
    const [playlist, setPlaylist] = useState({'title': '', 'user': {'username': ''}, songs: []});
    const [changes, setChanges] = useState(0);

    let navigate = useNavigate();

    useEffect(() => {
      const getPlaylist = () => {
        const requestLink =`http://127.0.0.1:5000/playlist/${params.playlistId}`;
        fetch(requestLink, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
          .then(res => {
                console.log(res);
                if (res.status !== 200) {
                    console.log('errrooooorrrrrr');
                    navigate("/");
                    setError(true);
                }
                return res.json();
        })
          .then(
            (result) => {
                console.log(result);
                if ('message' in result || 'msg' in result){
                    setResultMessage(result);
                } else {
                    if (result !== playlist){
                        setPlaylist(result);
                    }
                }
            },
            (error) => {
                setError(true);
                setResultMessage(error);
            }
          )
      }
      console.log('yes');
      getPlaylist();
      if (!error1){
          console.log('yes');
      }
    }, [changes])

    const placeSongs = () => {
      if (!error1 && playlist.songs.length === 0){
        return <h3>Playlist is empty!</h3>
      } else if (!error1){
        const playlistItems = playlist.songs.map((song) =>
          <Song key={song.id} img={song.photo} button="-" name={song.name} artist={song.singer} time={song.duration} />
        );
        return playlistItems;
      }
    }

    return (
    <React.Fragment>
      <Navbar />
      <div className="mainpart moveaside">
        <h2>{playlist.title}</h2>
        <h3>author: {playlist.user.username}</h3>
        <div className="objectholder">
          {placeSongs()}
        </div>
      </div>
    </React.Fragment>
    );
}

export default Playlist;