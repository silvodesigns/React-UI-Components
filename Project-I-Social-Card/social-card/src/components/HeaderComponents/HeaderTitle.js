import React from 'react';
import './Header.css';

const HeaderTitle = props => {

    return (
        <div>
            <h3 className="title">{props.title}</h3>
            <span className="timeStamp">@{props.title} - {props.date}</span>
        </div>
    );
};

export default HeaderTitle