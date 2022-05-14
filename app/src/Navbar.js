import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() { 
        return (
            <div class="sidebar">
                <Link to="/">PLAYLISTS</Link>
                <Link to="/">SONGS</Link>
                <Link to="/">LIBRARY</Link>
                <Link to="/">CREATE PLAYLIST</Link>
                <Link to="/login">LOGOUT</Link>
                <Link to="/">EDIT ACCOUNT</Link>
            </div>
        );
    }
}
 
export default Navbar;