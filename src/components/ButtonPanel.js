import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const groupButtons = {
  gOne: ['Ac', '+/-', '%', '/'],
  gTwo: ['7', '8', '9', 'X'],
  gThree: ['4', '5', '6', '-'],
  gFour: ['1', '2', '3', '+'],
  gFive: ['0', '.', '='],
};

const ButtonPanel = ({ clickHandler }) => {
  const handleClick2 = buttonName => clickHandler(buttonName);

  return (
    <>
      <div className="button-container">
        {
          Object.keys(groupButtons).map(k => (
            <div className="button-row" key={k}>
              {
                groupButtons[`${k}`].map(item => (
                  <Button key={item} name={item} clickHandler={handleClick2} />
                ))
              }
            </div>
          ))
        }
      </div>
    </>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
