const breadthFirstSearch = require('./breadth-first-search');

describe('Breadth First Search algorithm: ', () => {
    const graph = {
        denis: ['alice', 'andrew'],
        mike: ['nike', 'alice'],
        alice: ['denis', 'bran', 'nike'],
        andrew: ['jon', 'mike'],
        nike: ['alice', 'emily'],
        bran: ['emily', 'jon'],
        jon: ['denis', 'bran'],
        emily: ['bran', 'mike'],
        corny: ['mike', 'jon']
    };

    test('should find connection', () => {
        expect(breadthFirstSearch(graph, 'denis', 'emily')).toBe(true);
    });

    test('should not find connection', () => {
        expect(breadthFirstSearch(graph, 'emily', 'corny' )).toBe(false);
    });

});
