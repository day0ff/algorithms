const recursionFactorial = require('./recursion-factorial');

test('should return factorial of 4', () => {
    const value = 4;

    expect(recursionFactorial(value)).toBe(24);
});

test('should return factorial of 0', () => {
    const value = 0;

    expect(recursionFactorial(value)).toBe(1);
});
