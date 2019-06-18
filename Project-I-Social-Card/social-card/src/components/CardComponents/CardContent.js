import React from 'react';
import './Card.css';


const CardContent = props => {
    return (
        <div>
            <h3 className="cardTitle">{props.title}</h3>
            <p className="cardContent">{props.content}</p>
            <span>{props.web}</span>

        </div>

    );
};

export default CardContent