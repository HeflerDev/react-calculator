import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const [reset, setReset] = useState(false);

  const setters = {
    setTotal,
    setNext,
    setOperation,
    setReset,
  };

  const getters = {
    total,
    next,
    operation,
    reset,
  };

  const handleClick = buttonName => {
    calculate(getters, setters, buttonName);
  };

  return (
    <>
      <div className="board around">
        <div className="col-12 col-m-4 col-l-7">
          <div className="content-container">
            <div className="m-auto">
              <h3>Let&apos;s make some Math!</h3>
              <p>
                The App work as a normal and functional calculator, just insert the numbers
                and calculate the results.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-m-8 col-l-3">
          <Display result={getters} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

export default App;
