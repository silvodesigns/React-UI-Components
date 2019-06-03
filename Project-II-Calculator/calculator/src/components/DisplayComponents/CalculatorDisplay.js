import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = props => {

return (
        <div className="display">
            <NumberButton sectionStyle="results" number="0"/>
            <ActionButton sectionStyle="clear" action="clear"/>
            <ActionButton sectionStyle="divide" action="/"/>
            <NumberButton sectionStyle="seven" number="7"/>
            <NumberButton sectionStyle="eight" number="8"/>
            <NumberButton sectionStyle="nine" number="9"/>
            <ActionButton sectionStyle="multiplication" action="*"/>
            <NumberButton sectionStyle="four" number="4"/>
            <NumberButton sectionStyle="five" number="5"/>
            <NumberButton sectionStyle="six" number="6"/>
            <ActionButton sectionStyle="minus" action="-"/> 
            <NumberButton sectionStyle="one" number="1"/>
            <NumberButton sectionStyle="two" number="2"/>
            <NumberButton sectionStyle="three" number="3"/>
            <ActionButton sectionStyle="plus" action="+"/>
            <NumberButton sectionStyle="zero" number="0"/>
            <ActionButton sectionStyle="equals" action="="/>

        </div>

        )

}

export default CalculatorDisplay;