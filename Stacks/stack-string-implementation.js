var Stack = function () {
	this.storage = "";
	this.separator = "-";
	this._size = 0;
}

Stack.prototype.push = function(item) {
	this.storage = this.storage + this.separator + item;
	this._size++;
};
Stack.prototype.pop = function() {
	if(this._size == 0){
		return undefined;
	}
	var lastSeparatorIndex = this.storage.lastIndexOf(this.separator),
		lastItem = this.storage.slice(lastSeparatorIndex + this.separator.length);
	this.storage = this.storage.slice(0, lastSeparatorIndex);
	this._size--;
	return lastItem;
};

Stack.prototype.count = function() {
	return this._size;
};