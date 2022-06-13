import React from 'react';
import { useNavigate } from "react-router-dom";

function Song(props) {

    let navigate = useNavigate();

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
                <span className="name" style={{cursor: 'pointer'}} onClick={() => {navigate(`/analyze/song/${props.id}`);}}> {props.name} </span>
                <span className="artist"> {props.artist} </span>
                <span className="time"> {props.time} </span>
            </div>
            <button className="squarebutton" style={{cursor: 'pointer'}} onClick={() => {props.handleButtonClick(props.id, props.playlistId)}}>{props.button}</button>
        </div>
    );
}

export default Song;