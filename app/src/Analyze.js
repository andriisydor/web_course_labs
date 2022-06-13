import React from 'react';
import Navbar from './Navbar';

function Analyze() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="mainpart moveaside">
                <h3></h3>
                <h2>analyze song</h2>
                <h3></h3>
                <img src='/figure.png' style={{width: '70%'}}></img>
            </div>
        </React.Fragment>
    );
}

export default Analyze;