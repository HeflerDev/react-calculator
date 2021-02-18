import operate from './operate';

const calculate = (calculator, btnName) => {
  if (typeof calculator === 'object'
      && typeof btnName === 'string'
  ) {
    const { total, next, operation } = calculator;
    if (btnName === "+/-") {
      total *= -1;
      next *= -1;
    }
  } else {
    throw new Error('Wrong argument type: Should be Object');
  }
};

export default calculate;
