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

    return ( 
        <div className="object">
            <div className="squarediv"></div>
            <div className="text">
                {checkIfLink()}
                <span className="artist"> {props.title} </span>
            </div>
        </div>
    );
}

export default Object;