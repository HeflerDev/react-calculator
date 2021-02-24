import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);

  if (operation === '-') { return x.minus(y); }
  if (operation === '+') { return x.plus(y); }
  if (operation === '/') { return x.div(y); }
  if (operation === 'X') { return x.times(y); }
  if (operation === '%') { return x.div(100); }

  throw new Error('INVALID OPERATION: MUST CONTAIN ALL ELEMENTS');
};

export default operate;