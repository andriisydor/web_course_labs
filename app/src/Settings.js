import React, { useState } from 'react';
import Navbar from './Navbar';

function Settings() {
    const [device, setDevice] = useState('choose device');
    const [devices, setDevices] = useState(['phone', 'tablet', 'TV']);

    const handleDeviceClick = (thing) => {
        setDevice(thing);
    }

    const placeDevices = () =>{
        const menuItems = devices.map((thing) =>
            <span onClick={() => {handleDeviceClick(thing)}}>{thing}</span>
        );
        return(
            <React.Fragment>
                {menuItems}
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="mainpart moveaside" style={{textAlign: 'center'}}>
                <h2>settings</h2>
                <h3 style={{color: 'red'}}>demo</h3>
                <form>
                    <span className='white-lable'>Audio format: </span>
                    <input type="radio" id="mp3" name="soundFormat" value="MP3" className='radio-choose'></input>
                    <label htmlFor="mp3" className='white-lable'>mp3</label>
                    <input type="radio" id="wav" name="soundFormat" value="WAV" className='radio-choose'></input>
                    <label htmlFor="wav" className='white-lable'>wav</label>
                    <br></br>
                    <input type="range" min="1" id="volume" max="100" defaultValue="50" className="range-line"></input>
                    <br></br>
                    <label htmlFor="volume" className='white-lable'>VOLUME</label>
                    <br></br>
                    <input type="range" min="1" id="lr" max="100" defaultValue="50" className="range-line"></input>
                    <br></br>
                    <label htmlFor="lr" className='white-lable'>L/R</label>
                    <br></br>
                </form>
                <br></br>
                <div className="menu">
                    <button class="menu-button">{device}</button>
                    <div className="dropdown">
                        {placeDevices()}
                    </div>
                </div>
                <br></br>
                <input className="enter" type="button" value="save"></input>
            </div>
        </React.Fragment>
    );
}

export default Settings;