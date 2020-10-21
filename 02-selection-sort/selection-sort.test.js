const { findSmallestIndex, selectionSort } = require('./selection-sort');

test('should find the smallest element from array', () => {
    const arr = [122, 17, 64, 77, 1, 122, 1];

    expect(findSmallestIndex(arr)).toBe(4);
});

test('should find the smallest element from another array', () => {
    const arr = [8, 2, -2, 0, 4, 6];

    expect(findSmallestIndex(arr)).toBe(2);
});

test('should sort array ascending', () => {
    const arr = [122, 17, 64, 77, 1, 122, 1];
    const expectedArray = [1, 1, 17, 64, 77, 122, 122];

    expect(selectionSort(arr)).toEqual(expectedArray);
});

test('should sort another array ascending', () => {
    const arr = [0, 8, 2, -2, 0, 4, 6];
    const expectedArray = [-2, 0, 0, 2, 4, 6, 8];

    expect(selectionSort(arr)).toEqual(expectedArray);
});
