import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {

return (
        <div className="display">
            <section className="results"><h1>0</h1></section>
            <section className="clear"><h1>Clear</h1></section>
            <section className="divide"><h1>/</h1></section>
            <section className="seven"><h1>7</h1></section>
            <section className="eight"><h1>8</h1></section>
            <section className="nine"><h1>9</h1></section>
            <section className="multiplication"><h1>*</h1></section>
            <section className="four"><h1>4</h1></section>
            <section className="five"><h1>5</h1></section>
            <section className="six"><h1>6</h1></section>
            <section className="minus"><h1>-</h1></section>
            <section className="one"><h1>1</h1></section>
            <section className="two"><h1>2</h1></section>
            <section className="three"><h1>3</h1></section>
            <section className="plus"><h1>+</h1></section>
            <section className="zero"><h1>0</h1></section>
            <section className="equals"><h1>=</h1></section>

        </div>

        )

}

export default CalculatorDisplay;