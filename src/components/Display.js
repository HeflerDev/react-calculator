import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/destructuring-assignment */
const Display = ({ result }) => {
  const { total, next, operation } = result;
  return (
    <>
      <div>
        { total }
        { operation }
        { next }
      </div>
    </>
  );
};

Display.defaultProps = { total: '0' };
Display.propTypes = PropTypes.string.isRequired;

export default Display;
