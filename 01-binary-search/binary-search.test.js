const binarySearch = require('./binary-search');

test('should find the index of the searched element', () => {
    const list = [1, 3, 4, 5, 7, 9, 13];

    expect(binarySearch(list, 3)).toBe(1);
});

test('should return null instead of the index of the searched element', () => {
    const list = [2, 6, 8, 10, 11];

    expect(binarySearch(list, 5)).toBeNull();
});
