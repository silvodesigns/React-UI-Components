import React from 'react';
import './Header.css';
import HeaderTitle from'./HeaderTitle';

const HeaderContent = props => <div><HeaderTitle/><HiContent/></div>;
const HiContent = props => {
return (
            <p>
                Let's learn react by building simple interfaces
                with components. Don't try to overthink it. Just 
                keep it simple and have fun. Once you feel comfortable using
                components you are well on your way to mastering React!
            </p>
        )
};

export default HeaderContent;
