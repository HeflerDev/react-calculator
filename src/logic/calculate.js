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

const validateInput = (strOne, strTwo, strThree) => {
  if (strOne !== ''
    && strTwo !== ''
    && strThree !== ''
  ) {
    return true;
  }
  return false;
};

const calculate = (calculator, btnName) => {
  if (validateArgs(calculator, btnName)) {
    const { total, next, operation } = calculator;

    if (btnName === '+/-') {
      if (total !== '' && next === '') {
        return ({ total: (parseFloat(total, 10) * -1).toString() });
      }

      if (total !== '' && next !== '') {
        return ({
          total: (parseFloat(total, 10) * -1).toString(),
          next: (parseFloat(next, 10) * -1).toString(),
        });
      }
      return null;
    }

    if (btnName === 'Ac') {
      return ({
        total: '0',
        next: '',
        operation: '',
      });
    }

    if (btnName === '+'
      || btnName === '-'
      || btnName === 'X'
      || btnName === '/'
    ) {
      if (total !== '') {
        return ({
          operation: btnName,
        });
      }
      return null;
    }

    if (btnName === '%') {
      return ({
        total: operate(total, total, '%').toString(),
        next: '',
        operation: '',
      });
    }

    if (btnName === '.') {
      if (operation === '' && total !== '' && !/\./.test(total)) {
        return ({ total: total + btnName });
      }
      if (operation !== '' && next !== '' && !/\./.test(next)) {
        return ({ next: next + btnName });
      }
      return null;
    }

    if (btnName === '=') {
      if (validateInput(total, next, operation)) {
        return ({
          total: operate(total, next, operation).toFixed(2).toString(),
          next: '',
          operation: '',
        });
      }
      return ({
        total,
        next,
        operation,
      });
    }

    if (/^0/.test(total) && total.length === 1) {
      return ({
        total: btnName,
      });
    }

    if (operation === '' && total.length > 9) { return null; }

    if (operation === '') {
      return ({
        total: total + btnName,
      });
    }

    if (/^0/.test(next) && next.length === 1) {
      return ({
        next: btnName,
      });
    }

    if (next.length > 9) { return null; }

    return ({
      next: next + btnName,
    });
  }
  throw new Error('Wrong argument type: Should be Object');
};

export default calculate;
