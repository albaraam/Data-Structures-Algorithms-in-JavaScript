var Queue = function () {
    this._storage = [];
}

Queue.prototype.enqueue = function(item) {
    this._storage.push(item);
};

Queue.prototype.dequeue = function() {
    return this._storage.shift();
};

Queue.prototype.peek = function() {
    return this._storage[0];
};

Queue.prototype.counts = function() {
    return this._storage.length;
};