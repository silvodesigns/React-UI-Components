import React from 'react';
import './Button.css';


const ActionButton = props => {
    return(
        <section className={props.sectionStyle}><h1>{props.action}</h1></section>
    )
};

export default ActionButton;