import React from 'react';
import './Header.css';
import HeaderContent from  './HeaderContent.js'
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';


const HeaderContainer = props => {

    return (
        <div>
            <ImageThumbnail/>
            <HeaderTitle />
            <HeaderContent /> 
        </div>
    );
};

export default HeaderContainer