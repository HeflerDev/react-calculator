import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleClick3 = btnName => clickHandler(btnName);

  return (
    <>
      <button
        type="button"
        onClick={() => handleClick3(name)}
        tabIndex={name}
      >
        { name }
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
