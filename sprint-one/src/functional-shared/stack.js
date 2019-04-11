var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackNum = 0;
  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };
  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.stackNum++;
  this.storage[this.stackNum] = value;
};

stackMethods.pop = function() {
  if (this.stackNum === 0) {
    return undefined;
  }
  var dequeued = this.storage[this.stackNum];
  delete this.storage[this.stackNum];
  this.stackNum--;
  return dequeued;
};

stackMethods.size = function() {
  return this.stackNum;
};
