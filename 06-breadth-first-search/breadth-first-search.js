const Queue = require('../05-queue/queue');

function breadthFirstSearch(graph, start, goal) {
    const searchQueue = new Queue();
    const searched = [];

    graph[start].forEach(value => searchQueue.enqueue(value));

    while (searchQueue.size() > 0) {
        const node = searchQueue.dequeue();

        if (!searched.includes(node)) {
            if (node === goal) {
                return true;
            } else {
                graph[node].forEach(value => searchQueue.enqueue(value));
                searched.push(node);
            }
        }
    }

    return false;
}

module.exports = breadthFirstSearch;
