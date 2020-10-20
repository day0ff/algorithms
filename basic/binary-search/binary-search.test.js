const binarySearch = require('./binary-search');

test('properly find the index of the desired item', () => {
    const list = [1, 3, 4, 5, 7, 9, 13];

    expect(binarySearch(list, 3)).toBe(1);
    expect(binarySearch(list, 3)).not.toBeNull();
    expect(binarySearch(list, 8)).toBeNull();
});
