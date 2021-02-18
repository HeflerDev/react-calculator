import React from 'react';

const groupButtons = {
  gOne: ['Ac', '+', '%', '/'],
  gTwo: ['7', '8', '9', 'x'],
  gThree: ['4', '5', '6', '-'],
  gFour: ['1', '2', '3', '+'],
  gFive: ['0', '.', '='],
};

const ButtonPanel = () => (
  <>
    {
      Object.keys(groupButtons).map(k => (
        <div key={k}>
          {
            groupButtons[`${k}`].map(item => (
              <div key={`${k}-${item}`}>{item}</div>
            ))
          }
        </div>
      ))
    }
  </>
);

export default ButtonPanel;
