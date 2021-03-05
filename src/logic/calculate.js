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

const calculate = (getters, setters, btnName) => {
  if (validateArgs(getters, btnName)) {
    const {
      total,
      next,
      operation,
      reset,
    } = getters;

    const {
      setTotal,
      setNext,
      setOperation,
      setReset,
    } = setters;

    if (btnName === '+/-') {
      if (total !== '' && next === '') {
        return setTotal((parseFloat(total, 10) * -1).toString());
      }

      if (total !== '' && next !== '') {
        return (
          setTotal((parseFloat(total, 10) * -1).toString()),
          setNext((parseFloat(next, 10) * -1).toString())
        );
      }
      return null;
    }

    if (btnName === 'Ac') {
      setNext('');
      setOperation('');
      return (setTotal('0'));
    }

    if (reset) {
      setReset(false);
      if (/[0-9]/.test(btnName)) {
        return setTotal(btnName);
      }
    }

    if (btnName === '+'
      || btnName === '-'
      || btnName === 'X'
      || btnName === '/'
    ) {
      if (validateInput(total, next, operation)) {
        return (
          setTotal(operate(total, next, operation)),
          setNext(''),
          setOperation(btnName)
        );
      }
      if (total !== '') {
        return setOperation(btnName);
      }
      return null;
    }

    if (btnName === '%') {
      setNext('');
      setOperation('');
      return (setTotal(operate(total, total, '%').toString()));
    }

    if (btnName === '.') {
      if (operation === '' && total !== '' && !/\./.test(total)) {
        return (setTotal(total + btnName));
      }
      if (operation !== '' && next !== '' && !/\./.test(next)) {
        return (setNext(next + btnName));
      }
      return total;
    }

    if (btnName === '=') {
      if (validateInput(total, next, operation)) {
        setNext('');
        setOperation('');
        setReset(true);
        return (setTotal(operate(total, next, operation)));
      }
      return null;
    }

    if (/^0/.test(total) && total.length === 1) {
      return (setTotal(btnName));
    }

    if (operation === '' && total.length > 9) { return null; }

    if (operation === '') {
      return (
        setTotal(total + btnName)
      );
    }

    if (/^0/.test(next) && next.length === 1) {
      return (
        setNext(btnName)
      );
    }

    if (next.length > 9) { return null; }

    return (
      setNext(next + btnName)
    );
  }

  throw new Error(`${getters} is a wrong argument type.`);
};

export default calculate;
