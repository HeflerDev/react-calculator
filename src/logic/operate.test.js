import Big from 'big.js';
import operate from './operate';

describe('When invoking function', () => {
  test('operations should work', () => {
    expect(operate(2, 1, '-')).toEqual(Big(1));
    expect(operate(3, 6, '+')).toEqual(Big(9));
    expect(operate(5, 5, 'X')).toEqual(Big(25));
    expect(operate(50, 10, '/')).toEqual(Big(5));
  });

  test('should throw error if invalid', () => {
    expect(() => operate('abc', 'dds', '+')).toThrow(Error);
    expect(() => operate(1, 5, '&')).toThrow(Error);
    expect(() => operate(5, 7, 3)).toThrow(Error);
  });
});
