import React from 'react';
// import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Main from './Main';
import Registration from './Registration';
import Edit from './Edit';
import Playlist from './Playlist';
import Create from './Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Main service={'/users/'}/>} />
          <Route path="library" element={<Main service={'/user/'} />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<Create />} />
          <Route path="registration" element={<Registration />} />
          <Route path="edit" element={<Edit />} />
          <Route path="playlist/:playlistId" element={<Playlist />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}
 
export default App;