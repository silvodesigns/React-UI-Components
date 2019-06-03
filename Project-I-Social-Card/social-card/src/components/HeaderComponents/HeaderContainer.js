import React from 'react';
import './Header.css';
import  ImageThumbnail from'./ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';



const HeaderContainer = props => {
    return (
        <section class="header">
            <ImageThumbnail/>
            <HeaderContent/>
        </section>

    )

};


export default HeaderContainer;
