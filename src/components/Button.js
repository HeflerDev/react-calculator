import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const swapStyle = () => {
    let elClassName = 'calculator-button';

    if (name === '/'
      || name === 'X'
      || name === '-'
      || name === '+'
      || name === '='
    ) {
      elClassName += ' calculator-operation-button';
    }

    if (name === '0') {
      elClassName += ' col-6';
    } else {
      elClassName += ' col-3';
    }

    return elClassName;
  };
  return (
    <>
      <button
        className={swapStyle()}
        type="button"
        onClick={() => clickHandler(name)}
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
