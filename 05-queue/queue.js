function Queue() {
    this.elements = [];
}

Queue.prototype.enqueue = function (element) {
    this.elements.push(element);
};

Queue.prototype.dequeue = function () {
    return this.elements.shift();
};

Queue.prototype.isEmpty = function () {
    return this.elements.length === 0;
};

Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.size = function () {
    return this.elements.length;
};

module.exports = Queue;
