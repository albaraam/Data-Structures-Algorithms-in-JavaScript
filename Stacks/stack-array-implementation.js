var Stack = function () {
	this.storage = [];
}

Stack.prototype.push = function(item) {
	this.storage.push(item);
};

Stack.prototype.pop = function() {
	return this.storage.pop();
};

Stack.prototype.peek = function() {
	return this.storage[this.storage.length - 1];
}

Stack.prototype.count = function() {
	return this.storage.length;
};