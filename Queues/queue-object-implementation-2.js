var Queue = function () {
    this._storage = {};
    this._head = 0;
    this._tail = 0;
}

Queue.prototype.enqueue = function(item) {
    this._storage[this._tail] = item;
    this._tail++;
};
Queue.prototype.dequeue = function() {
    if(this.count() == 0){
        return undefined;
    }
    var firstItem = this._storage[this._head];
    delete this._storage[this._head];
    this._head++;
    return firstItem;
};

Queue.prototype.peek = function() {
    return this._storage[this._head];
};

Queue.prototype.count = function() {
    return this._tail - this._head;
};