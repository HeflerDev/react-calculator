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
      <Display result={getters} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
