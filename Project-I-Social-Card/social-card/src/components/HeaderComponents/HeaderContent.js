import React from 'react';
import './Header.css';


const HeaderContent = props => {
    return (
        <p className="postInfo">{props.content} </p>
    );
};


export default HeaderContent