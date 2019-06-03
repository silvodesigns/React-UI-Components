import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const CalculatorDisplay = props => {

return (
        <div className="display">
            <section className="results"><NumberButton number="0"/></section>
            <section className="clear"><ActionButton action="clear"/></section>
            <section className="divide"><ActionButton action="/"/></section>
            <section className="seven"><NumberButton number="7"/></section>
            <section className="eight"><NumberButton number="8"/></section>
            <section className="nine"><NumberButton number="9"/></section>
            <section className="multiplication"><ActionButton action="*"/></section>
            <section className="four"><NumberButton number="4"/></section>
            <section className="five"><NumberButton number="5"/></section>
            <section className="six"><NumberButton number="6"/></section>
            <section className="minus"><ActionButton action="-"/></section>
            <section className="one"><NumberButton number="1"/></section>
            <section className="two"><NumberButton number="2"/></section>
            <section className="three"><NumberButton number="3"/></section>
            <section className="plus"><ActionButton action="+"/></section>
            <section className="zero"><NumberButton number="0"/></section>
            <section className="equals"><ActionButton action="="/></section>

        </div>

        )

}

export default CalculatorDisplay;