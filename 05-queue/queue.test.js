const Queue = require('./queue');


describe('Queue: ', () => {

    let queue, array;

    beforeEach(() => {
        queue = new Queue();
        array = [2, 3, 5];
    });

    describe('enqueue method - ', () => {

        test('should be defined', () => {
            expect(queue.enqueue).toBeDefined();
        });

        test('should add element to queue', () => {
            queue.enqueue(array[0]);
            expect(queue.peek()).toBe(array[0]);
        });

        test('should change size of queue', () => {
            expect(queue.size()).toBe(0);
            queue.enqueue(array[0]);
            expect(queue.size()).toBe(1);
        });

        test('should add element to the end of queue', () => {
            queue.enqueue(array[0]);
            expect(queue.peek()).toBe(array[0]);
            queue.enqueue(array[1]);
            expect(queue.peek()).toBe(array[0]);
        });

    });

    describe('dequeue method - ', () => {

        test('should be defined', () => {
            expect(queue.dequeue).toBeDefined();
        });

        test('should return undefined from empty queue', () => {
            expect(queue.dequeue()).toBeUndefined();
        });

        test('should return first element from queue', () => {
            queue.enqueue(array[0]);
            expect(queue.dequeue()).toBe(array[0]);
        });

        test('should change size of queue', () => {
            queue.enqueue(array[0]);
            expect(queue.size()).toBe(1);
            queue.dequeue(array[0]);
            expect(queue.size()).toBe(0);
        });

    });

    describe('peek method - ', () => {

        test('should be defined', () => {
            expect(queue.peek).toBeDefined();
        });

        test('should return undefined from empty queue', () => {
            expect(queue.peek()).toBeUndefined();
        });

        test('should return first element from queue', () => {
            queue.enqueue(array[0]);
            queue.enqueue(array[1]);
            queue.enqueue(array[2]);
            expect(queue.peek()).toBe(array[0]);
        });

        test('should not change size of queue', () => {
            queue.enqueue(array[0]);
            expect(queue.size()).toBe(1);
            queue.peek();
            expect(queue.size()).toBe(1);
        });

    });

    describe('size method - ', () => {

        test('should be defined', () => {
            expect(queue.size).toBeDefined();
        });

        test('should return size of empty queue', () => {
            expect(queue.size()).toBe(0);
        });

        test('should return size of queue', () => {
            queue.enqueue(array[0]);
            queue.enqueue(array[1]);
            queue.enqueue(array[2]);
            expect(queue.size()).toBe(3);
        });

        test('should not change size of queue', () => {
            queue.enqueue(array[0]);
            expect(queue.size()).toBe(1);
            queue.size();
            expect(queue.size()).toBe(1);
        });

    });

});
