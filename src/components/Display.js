import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/destructuring-assignment */
const Display = ({ result }) => {
  const { total, next, operation } = result;
  return (
    <>
      <div className="calculator-display">
        <div>
          { total }
        </div>
        <div>
          { operation }
        </div>
        <div>
          { next }
        </div>
      </div>
    </>
  );
};

Display.defaultProps = { total: '0' };
Display.propTypes = PropTypes.string.isRequired;

export default Display;
