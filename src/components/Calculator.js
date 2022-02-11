/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import Output from './Output';

class Calculator extends React.Component {
  render() {
    const {
      total,
      next,
      operation,
      clickHandler,
    } = this.props;

    return (
      <div className="calc-grid">
        <Output
          total={total}
          operation={operation}
          next={next}
        />
        <button type="button" onClick={() => clickHandler('AC')} total-clear-all>AC</button>
        <button type="button" onClick={() => clickHandler('+/-')} data-change-sign>+/-</button>
        <button type="button" onClick={() => clickHandler('%')} data-percentage>%</button>
        <button type="button" onClick={() => clickHandler('÷')} id="orange-background" data-operation>÷</button>
        <button type="button" onClick={() => clickHandler('7')} data-number>7</button>
        <button type="button" onClick={() => clickHandler('8')} data-number>8</button>
        <button type="button" onClick={() => clickHandler('9')} data-number>9</button>
        <button type="button" onClick={() => clickHandler('x')} id="orange-background" data-operation>x</button>
        <button type="button" onClick={() => clickHandler('4')} data-number>4</button>
        <button type="button" onClick={() => clickHandler('5')} data-number>5</button>
        <button type="button" onClick={() => clickHandler('6')} data-number>6</button>
        <button type="button" onClick={() => clickHandler('-')} id="orange-background" data-operation>-</button>
        <button type="button" onClick={() => clickHandler('1')} data-number>1</button>
        <button type="button" onClick={() => clickHandler('2')} data-number>2</button>
        <button type="button" onClick={() => clickHandler('3')} data-number>3</button>
        <button type="button" onClick={() => clickHandler('+')} id="orange-background" data-operation>+</button>
        <button type="button" onClick={() => clickHandler('0')} className="span-two" data-number>0</button>
        <button type="button" onClick={() => clickHandler('.')} data-number>.</button>
        <button type="button" onClick={() => clickHandler('=')} id="orange-background" data-equals>=</button>
      </div>
    );
  }
}
Calculator.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  clickHandler: PropTypes.string.isRequired,
};

export default Calculator;
