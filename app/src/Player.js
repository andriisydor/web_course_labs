import React, { useState } from 'react';

function Player(props) {
    const [song, setSong] = useState(props.song);

    const showSong = () => {
        if (song.name != null){
            return(
                <div>
                    <img src={props.song.photo} alt="img" style={{height: '80px', verticalAlign: 'middle'}}></img>
                    <div className="text" style={{verticalAlign: 'middle', paddingLeft: '10px'}}>
                        <span className="name" style={{display: 'block'}}> {props.song.name} </span>
                        <span className="artist" style={{display: 'block'}}> {props.song.singer} </span>
                        <span className="time" style={{display: 'block'}}> {props.song.duration} </span>
                    </div>
                </div>
            );
        }
    }

    return ( 
        <div style={{
            backgroundColor: '#F9D268', 
            color: 'black', 
            position: 'fixed', 
            width: '100%', 
            height: '80px', 
            display: props.visibility,
            bottom: '0',
        }}>
            {showSong()}
        </div>
    );
}

export default Player;