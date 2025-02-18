const calculator = require('./calculator');

test('subtract 2 - 1', () => {
  expect(calculator.subtract(2,1)).toBe(1);
});

test('multiply 2 * 2', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});

test('divide 2/2', () => {
    expect(calculator.divide(2,2)).toBe(1);
});

