import React from 'react';
import './Button.css';


const NumberButton = props => {
    return(
        <section className={props.sectionStyle}><h1>{props.number}</h1></section>
    )
};

export default NumberButton;