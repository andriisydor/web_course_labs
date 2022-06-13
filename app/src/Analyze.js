import React from 'react';
import Navbar from './Navbar';
import Canvas from './Canvas';

function Analyze() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="mainpart moveaside" style={{textAlign: 'center'}}>
                <h3></h3>
                <h2>analyze song</h2>
                <h3 style={{color: 'red'}}>demo</h3>
                <h3>spectrogram</h3>
                <img src='/figure.png' style={{width: '70%'}}></img>
                <h3>{'Frequency (Hz)'}</h3>
                <h3>plus</h3>
                <Canvas />
                <h3>minus</h3>
                <Canvas sign='minus'/>
            </div>
        </React.Fragment>
    );
}

export default Analyze;