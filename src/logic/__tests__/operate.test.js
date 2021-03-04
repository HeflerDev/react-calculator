import operate from '../operate';

describe('When invoking function', () => {
  test('operations should work', () => {
    expect(operate(2, 1, '-')).toEqual('1');
    expect(operate(3, 6, '+')).toEqual('9');
    expect(operate(5, 5, 'X')).toEqual('25');
    expect(operate(50, 10, '/')).toEqual('5');
  });

  test('should throw error if invalid', () => {
    expect(() => operate('abc', 'dds', '+')).toThrow(Error);
    expect(() => operate(1, 5, '&')).toThrow(Error);
    expect(() => operate(5, 7, 3)).toThrow(Error);
  });
});
