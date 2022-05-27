import React from 'react';
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';

function Playlist() {
    const params = useParams();

    return (
    <React.Fragment>
      <Navbar />
      <div className="mainpart moveaside">
        <h2>Playlist | name</h2>
        <h3>author</h3>
        <div className="objectholder">
          <h3>{params.playlistId}</h3>
        </div>
      </div>
    </React.Fragment>
    );
}

export default Playlist;