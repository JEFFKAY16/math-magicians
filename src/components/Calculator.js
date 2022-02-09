import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="calc-grid">
        <div className="output" data-current-operation>0</div>
        <button type="button" data-clear-all>AC</button>
        <button type="button" data-change-sign>+/-</button>
        <button type="button" data-percentage>%</button>
        <button type="button" id="orange-background" data-operation>÷</button>
        <button type="button" data-number>7</button>
        <button type="button" data-number>8</button>
        <button type="button" data-number>9</button>
        <button type="button" id="orange-background" data-operation>×</button>
        <button type="button" data-number>4</button>
        <button type="button" data-number>5</button>
        <button type="button" data-number>6</button>
        <button type="button" id="orange-background" data-operation>-</button>
        <button type="button" data-number>1</button>
        <button type="button" data-number>2</button>
        <button type="button" data-number>3</button>
        <button type="button" id="orange-background" data-operation>+</button>
        <button type="button" className="span-two" data-number>0</button>
        <button type="button" data-number>.</button>
        <button type="button" id="orange-background" data-equals>=</button>
      </div>

    );
  }
}

export default Calculator;
