import React from 'react';

function Song(props) {
    return (
        <div className="object">
            <img src={props.img} alt="img"></img>
            <div className="text">
                <span className="name"> {props.name} </span>
                <span className="artist"> {props.artist} </span>
                <span className="time"> {props.time} </span>
            </div>
            <button className="squarebutton">{props.button}</button>
        </div>
    );
}

export default Song;