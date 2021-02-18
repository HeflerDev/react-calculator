import calculate from './calculate';

describe('when invoking function', () => {
  test('should negate bad parameters', () => {
    expect(() => calculate(5, 5)).toThrow(Error);
    expect(() => calculate('some string', 'Hello')).toThrow(Error);
    expect(() => calculate(null, null)).toThrow(Error);
    expect(() => calculate({}, 'Name')).toThrow(Error);
    expect(() => calculate({ randomValues: 10 }, 'Name')).toThrow(Error);
  });
});
