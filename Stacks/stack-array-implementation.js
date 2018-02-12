var Stack = function () {
    this._storage = [];
}

Stack.prototype.push = function(item) {
    this._storage.push(item);
};

Stack.prototype.pop = function() {
    return this._storage.pop();
};

Stack.prototype.peek = function() {
    return this._storage[this._storage.length - 1];
}

Stack.prototype.count = function() {
    return this._storage.length;
};