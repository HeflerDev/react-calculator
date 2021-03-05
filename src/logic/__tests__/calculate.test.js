import calculate from '../calculate';

const mockScene = (btnName, totalValue = '', nextValue = '', operationValue = '', resetValue = false) => {
  const setters = {
    setTotal(val) { return val; },
    setNext(val) { return val; },
    setOperation(val) { return val; },
    setReset(val) { return val; },
  };

  const getters = {
    total: totalValue,
    next: nextValue,
    operation: operationValue,
    reset: resetValue,
  };

  return calculate(getters, setters, btnName);
};

describe('when invoking function', () => {
  test('should accept string args', () => {
    expect(() => mockScene('1', '10', '10', '+')).not.toThrow(Error);
  });

  test('should return correct value with valid parameters', () => {
    expect(mockScene('5')).toBe('5');
    expect(mockScene('5', '7')).toBe('75');
    expect(mockScene('5', '889')).toBe('8895');
    expect(mockScene('5', '10', '35', '+')).toBe('355');
    expect(mockScene('/', '10', '35', '+')).toBe('/');
    expect(mockScene('0', '0')).toBe('0');
    expect(mockScene('.', '55')).toBe('55.');
    expect(mockScene('.', '55.')).toBe('55.');
    expect(mockScene('=', '50.5', '50.5', '+')).toBe('101');
    expect(mockScene('=', '33.33', '66.66', '+')).toBe('99.99');
    expect(mockScene('+/-', '10')).toBe('-10');
    expect(mockScene('+/-', '-10')).toBe('10');
    expect(mockScene('%', '50')).toBe('0.50');
    expect(mockScene('Ac', '50', '234455', 'X')).toBe('0');
    expect(mockScene('5', '0', '', '', true)).toBe('5');
    expect(mockScene('+', '10', '10', '+', true)).toBe('+');
  });

  test('should negate integer input', () => {
    expect(() => mockScene(5)).toThrowError(/is a wrong argument type.$/);
  });

  test('should negate non-number string', () => {
    expect(() => mockScene('=', '12', 'r', '+')).toThrowError(/String must contain only numbers, instead received 12, r./);
    expect(() => mockScene('=', '3', '34', 'p')).toThrowError(/Operation must contain only a operator character, instead received p./);
  });
});
