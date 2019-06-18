import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = props => {
    return(
        <div className="cardContainer">
            <CardBanner src=" https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
            <CardContent title="Get started with Reach" web="reactjs.org" content="

                React makes it painless to create
                interactive UIs. Design simple views
                for each state in your application.
            "/>
        </div>

    );
};

export default CardContainer