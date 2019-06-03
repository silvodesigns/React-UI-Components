import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {

        return(
            <a href="https://www.reactjs.org">
             <section class=".card">
                <CardBanner/>
                <CardContent/>
             </section>
             </a>
        )

};

export default CardContainer;
