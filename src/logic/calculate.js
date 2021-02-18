import operate from './operate';

const validateArgs = (obj, strName) => {
  if (typeof obj === 'object'
      && typeof strName === 'string'
      && Object.keys(obj).length > 0
      && 'total' in obj
      && 'next' in obj
      && 'operation' in obj
  ) {
    return true;
  }
  return false;
};

const calculate = (calculator, btnName) => {
  if (validateArgs(calculator, btnName)) {
    const { total, next, operation } = calculator;
    if (btnName === '+/-') {
      return ({
        total: total * -1,
        next: next * -1,
      });
    }
    return operate(total, next, operation);
    // return operate(total, next, operation);
  }
  throw new Error('Wrong argument type: Should be Object');
};

export default calculate;
