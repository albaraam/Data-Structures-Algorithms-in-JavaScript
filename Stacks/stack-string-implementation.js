var Stack = function () {
    this._storage = "";
    this._separator = "-";
    this._size = 0;
}

Stack.prototype.push = function(item) {
    this._storage = this._storage + this._separator + item;
    this._size++;
};
Stack.prototype.pop = function() {
    if(this._size == 0){
        return undefined;
    }
    var lastSeparatorIndex = this._storage.lastIndexOf(this._separator),
        lastItem = this._storage.slice(lastSeparatorIndex + this._separator.length);
    this._storage = this._storage.slice(0, lastSeparatorIndex);
    this._size--;
    return lastItem;
};

Stack.prototype.count = function() {
    return this._size;
};