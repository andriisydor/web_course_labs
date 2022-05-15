import React, { Component } from 'react';
import Navbar from './Navbar';
import { Navigate } from 'react-router-dom';

class App extends Component {
  state = { 
    token: localStorage.getItem('token'),
    id: localStorage.getItem('id')
   } 
  
  checkIfLogged() {
    if (this.state.token == null){
      return <Navigate to="/login" />;
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {this.checkIfLogged()}
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