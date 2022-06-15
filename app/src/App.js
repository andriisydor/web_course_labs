import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Main from './Main';
import Registration from './Registration';
import Edit from './Edit';
import Playlist from './Playlist';
import Create from './Create';
import Admin from './Admin';
import Player from './Player';
import Analyze from './Analyze';
import Settings from './Settings';

function App() {
  const [currentSong, setCurrentSong] = useState({photo: '', name: 'loaging', artist: 'loading', time: 'loading'});
  const [visibility, setVisibility] = useState('none');
  const [update, setUpdate] = useState(true);

  const handlePlayer = (song) => {
    localStorage.setItem('song', song);
    setCurrentSong(song);
    setVisibility('block');
    setUpdate(!update);
  }

  const handleClose = () => {
    localStorage.removeItem('song');
    setCurrentSong({photo: '', name: 'loaging', artist: 'loading', time: 'loading'});
    setVisibility('none');
    setUpdate(!update);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Main service={'/service/users/'} addId={true} elements={'playlists'} title={'playlists'} />} />
          <Route path="library" element={<Main service={'/service/user/'} addId={true} elements={'playlists'} title={'library'} />} />
          <Route path="songs" element={<Main service={'/songs'} addId={false} elements={'songs'} title={'songs'} />} />
          <Route path="choose/:songId" element={<Main service={'/service/user/'} addId={true} elements={'choose'} title={'choose playlist'} />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<Create />} />
          <Route path="registration" element={<Registration />} />
          <Route path="edit" element={<Edit />} />
          <Route path="playlist/:playlistId" element={<Playlist handlePlayer={handlePlayer}/>} />
          <Route path="admin" element={<Admin />} />
          <Route path="analyze/song/:songId" element={<Analyze />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Player token={localStorage.getItem('token')} song={currentSong} visibility={visibility} update={update} close={handleClose}/>
  </BrowserRouter>
  );
}
 
export default App;