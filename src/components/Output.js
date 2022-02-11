/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const Output = (props) => {
  const {
    total,
    next,
    operation,
  } = props;

  return (
    <div className="output" data-current-operation>
      <p>
        {total}
        {operation}
        {next}
      </p>
    </div>
  );
};

Output.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Output;
