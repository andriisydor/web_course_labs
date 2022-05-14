import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  state = {  } 
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="mainpart moveaside">
          <h1>playlists</h1>
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
}
 
export default App;