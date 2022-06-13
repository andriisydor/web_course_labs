import React from 'react';
import Navbar from './Navbar';

function Settings() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="mainpart moveaside" style={{textAlign: 'center'}}>
                <h2>settings</h2>
                <h3 style={{color: 'red'}}>demo</h3>
            </div>
        </React.Fragment>
    );
}

export default Settings;