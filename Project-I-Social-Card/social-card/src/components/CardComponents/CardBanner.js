import React from 'react';
import './Card.css';

const CardBanner = props =>{
    return(
        <div>
            <img className="cardBanner" src={props.src}/>
        </div>

    );
};

export default CardBanner