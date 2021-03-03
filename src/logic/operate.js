import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result;

  if (operation === '-') {
    result = x.minus(y).toFixed(2);
  } else if (operation === '+') {
    result = x.plus(y).toFixed(2);
  } else if (operation === '/') {
    result = x.div(y).toFixed(2);
  } else if (operation === 'X') {
    result = x.times(y).toFixed(2);
  } else if (operation === '%') {
    result = x.div(100).toFixed(2);
  } else {
    throw new Error('Invalid Operation');
  }

  if (/00$/.test(result)) {
    return Math.floor(result).toString();
  }
  return result.toString();
};

export default operate;
