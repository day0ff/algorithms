const recursionDeepNesting = require('./recursion-deep-nesting');

test('should return deep nesting 0', () => {
    const array = null;

    expect(recursionDeepNesting(array)).toBe(0);
});

test('should return deep nesting 0', () => {
    const array = '[]';

    expect(recursionDeepNesting(array)).toBe(0);
});

test('should return deep nesting of 1', () => {
    const array = new Array();

    expect(recursionDeepNesting(array)).toBe(1);
});

test('should return deep nesting of 1', () => {
    const array = [1, 2, 3, 'a', null];

    expect(recursionDeepNesting(array)).toBe(1);
});

test('should return deep nesting of 7', () => {
    const array = ['a', null, [[[[[1, []]]]]], 7, [[[1, {}, [[]], 3]]], 'array'];

    expect(recursionDeepNesting(array)).toBe(7);
});