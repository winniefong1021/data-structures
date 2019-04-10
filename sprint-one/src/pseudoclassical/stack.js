var Stack = function() {
  this.storage = {};
  this.stackNum = 0;
};


Stack.prototype.push = function(value) {
  this.stackNum++;
  this.storage[this.stackNum] = value;
};

Stack.prototype.pop = function() {
  if (this.stackNum === 0) {
    return undefined;
  }
  var dequeued = this.storage[this.stackNum];
  delete this.storage[this.stackNum];
  this.stackNum--;
  return dequeued;
};

Stack.prototype.size = function() {
  return this.stackNum;
};
