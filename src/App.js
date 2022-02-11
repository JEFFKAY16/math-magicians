/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  clickHandler = (event) => {
    this.setState((initialState) => calculate(initialState, event));
  }

  render() {
    return (
      <div>
        <Calculator
          total={this.state.total}
          next={this.state.next}
          operation={this.state.operation}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
