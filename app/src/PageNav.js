import React from 'react';

function PageNav(props) {

    const showNextButton = () => {
        if (props.limit === props.number){
            return (
                <button className="navigationbutton" onClick={props.handleNext}>&#62;</button>
            );
        }
    }

    return ( 
        <div className="listnavigation">
            <button className="navigationbutton" onClick={props.handlePrev}>&#60;</button>
            <button className="navigationbutton">{props.page}</button>
            {showNextButton()}
        </div> 
    );
}

export default PageNav;