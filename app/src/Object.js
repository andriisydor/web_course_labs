import React from 'react';
import { Link } from 'react-router-dom';

function Object(props) {

    const checkIfLink = () => {
        if ('link' in props){
            return (<Link to={props.link}><span className="name"> {props.name} </span></Link>);
        } else{
            return (<span className="name"> {props.name} </span>);
        }
    }

    const additionalText = () => {
        if ('additional' in props){
            let value = 'public';
            if (props.additional){
                value = 'private';
            }
            return ` (${value})`;
        }
    }

    return ( 
        <div className="object">
            <div className="squarediv"></div>
            <div className="text">
                {checkIfLink()}
                <span className="artist"> {props.title}{additionalText()} </span>
            </div>
        </div>
    );
}

export default Object;