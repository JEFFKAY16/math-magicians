/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';
import Nav from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';
import './components/Nav.css';

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
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/calculator"
              element={(
                <Calculator
                  total={this.state.total}
                  next={this.state.next}
                  operation={this.state.operation}
                  clickHandler={this.clickHandler}
                />
              )}
            />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
