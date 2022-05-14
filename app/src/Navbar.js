import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div class="sidebar">
                <Link to="/">PLAYLISTS</Link>
                <Link to="/blogs">SONGS</Link>
                <Link to="/blogs">LIBRARY</Link>
                <Link to="/blogs">CREATE PLAYLIST</Link>
                <Link to="/blogs">LOGOUT</Link>
                <Link to="/blogs">EDIT ACCOUNT</Link>
            </div>
        );
    }
}
 
export default Navbar;