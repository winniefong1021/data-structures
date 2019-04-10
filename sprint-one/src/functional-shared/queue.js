var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.enqueueNum = 1;
  someInstance.dequeueNum = 1;

  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.enqueueNum] = value;
    this.enqueueNum++;
  },
  dequeue : function() {
    if (this.size() <= 0) {
      return;
    }
    var dequeued = this.storage[this.dequeueNum];
    delete this.storage[this.dequeueNum];
    this.dequeueNum++;
    return dequeued;
  },
  size : function() {
    var sizeOfStorage = this.enqueueNum - this.dequeueNum;
    return sizeOfStorage;
  }
};
