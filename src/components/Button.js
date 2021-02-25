import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => (
  <>
    <button
      className="calculator-button"
      type="button"
      onClick={() => clickHandler(name)}
      tabIndex={name}
    >
      { name }
    </button>
  </>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
