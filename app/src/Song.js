import React from 'react';

function Song(props) {

    const placeImage = () => {
        if ('handlePlayer' in props){
            return(<img src={props.img} alt="img" onClick={() => {props.handlePlayer(props.song)}} style={{cursor: 'pointer'}}></img>);
        } else {
            return(<img src={props.img} alt="img"></img>);
        }
    }

    return (
        <div className="object">
            {placeImage()}
            <div className="text">
                <span className="name"> {props.name} </span>
                <span className="artist"> {props.artist} </span>
                <span className="time"> {props.time} </span>
            </div>
            <button className="squarebutton" style={{cursor: 'pointer'}} onClick={() => {props.handleButtonClick(props.id, props.playlistId)}}>{props.button}</button>
        </div>
    );
}

export default Song;