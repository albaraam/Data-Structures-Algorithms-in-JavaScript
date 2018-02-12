var Stack = function () {
    this._storage = {};
    this._size = 0;
}

Stack.prototype.push = function(item) {
    this._storage[this._size] = item;
    this._size++;
};
Stack.prototype.pop = function() {
    if(this._size == 0){
        return undefined;
    }
    this._size--;
    var lastItem = this._storage[this._size];
    delete this._storage[this._size];
    return lastItem;
};

Stack.prototype.peek = function() {
    return this._storage[(this._size - 1)];
}

Stack.prototype.count = function() {
    return this._size;
};