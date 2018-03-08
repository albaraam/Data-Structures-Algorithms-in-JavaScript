var Queue = function () {
    this._storage = {};
    this._size = 0;
    this._first = 0;
}

Queue.prototype.enqueue = function(item) {
    this._storage[this._size + this._first] = item;
    this._size++;
};

Queue.prototype.dequeue = function() {
    if(this._size == 0){
        return undefined;
    }
    var firstItem = this._storage[this._first];
    delete this._storage[this._first];
    this._first++;
    this._size--;
    return firstItem;
};

Queue.prototype.peek = function() {
    return this._storage[this._first];
};

Queue.prototype.count = function() {
    return this._size;
};