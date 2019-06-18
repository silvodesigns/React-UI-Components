import React from 'react';
import './Header.css';
import HeaderContent from  './HeaderContent.js'
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';


const HeaderContainer = props => {

    return (
        <div>
            <ImageThumbnail src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>
            <HeaderTitle title="Lambda School" date="26 Jan" />
            <HeaderContent content="
            
            Let's learn React by building simple
            interfaces with components. Don't 
            try to ovethink it, just keep it simple
            and have fun. Once you feel comfortable using
            components you are well on your way to 
            masteting React!
            
            " /> 
        </div>
    );
};

export default HeaderContainer