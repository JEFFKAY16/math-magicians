/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';

class Output extends React.Component {
  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="output" data-current-operation>
        <p>
          {total}
          {operation}
          {next}
        </p>
      </div>
    );
  }
}

export default Output;
