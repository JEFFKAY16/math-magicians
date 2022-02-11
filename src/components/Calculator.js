/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import './Calculator.css';
import Output from './Output';

class Calculator extends React.Component {
  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="calc-grid">
        <Output
          total={total}
          operation={operation}
          next={next}
        />
        <button type="button" onClick={() => this.props.clickHandler('AC')} data-clear-all>AC</button>
        <button type="button" onClick={() => this.props.clickHandler('+/-')} data-change-sign>+/-</button>
        <button type="button" onClick={() => this.props.clickHandler('%')} data-percentage>%</button>
        <button type="button" onClick={() => this.props.clickHandler('÷')} id="orange-background" data-operation>÷</button>
        <button type="button" onClick={() => this.props.clickHandler('7')} data-number>7</button>
        <button type="button" onClick={() => this.props.clickHandler('8')} data-number>8</button>
        <button type="button" onClick={() => this.props.clickHandler('9')} data-number>9</button>
        <button type="button" onClick={() => this.props.clickHandler('×')} id="orange-background" data-operation>×</button>
        <button type="button" onClick={() => this.props.clickHandler('4')} data-number>4</button>
        <button type="button" onClick={() => this.props.clickHandler('5')} data-number>5</button>
        <button type="button" onClick={() => this.props.clickHandler('6')} data-number>6</button>
        <button type="button" onClick={() => this.props.clickHandler('-')} id="orange-background" data-operation>-</button>
        <button type="button" onClick={() => this.props.clickHandler('1')} data-number>1</button>
        <button type="button" onClick={() => this.props.clickHandler('2')} data-number>2</button>
        <button type="button" onClick={() => this.props.clickHandler('3')} data-number>3</button>
        <button type="button" onClick={() => this.props.clickHandler('+')} id="orange-background" data-operation>+</button>
        <button type="button" onClick={() => this.props.clickHandler('0')} className="span-two" data-number>0</button>
        <button type="button" onClick={() => this.props.clickHandler('.')} data-number>.</button>
        <button type="button" onClick={() => this.props.clickHandler('=')} id="orange-background" data-equals>=</button>
      </div>

    );
  }
}

export default Calculator;
