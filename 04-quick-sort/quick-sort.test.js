const quickSort = require('./quick-sort');

test('should sort array ascending', () => {
    const arr = [122, 17, 64, 77, 1, 122, 1, 54];
    const expectedArray = [1, 1, 17, 54, 64, 77, 122, 122];

    expect(quickSort(arr)).toEqual(expectedArray);
});

test('should sort array ascending', () => {
    const arr = [0, 8, 2, -2, 0, 4, 6];
    const expectedArray = [-2, 0, 0, 2, 4, 6, 8];

    expect(quickSort(arr)).toEqual(expectedArray);
});
