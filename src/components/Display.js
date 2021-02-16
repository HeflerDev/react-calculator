import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <>
    <div>{toString(result)}</div>
  </>
);

Display.defaultProps = { result: '0' };
Display.propTypes = PropTypes.number.isRequired;

export default Display;
