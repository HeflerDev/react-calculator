import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <>
    <div>
      {name}
    </div>
  </>
);

Button.propTypes = PropTypes.string.isRequired;

export default Button;
