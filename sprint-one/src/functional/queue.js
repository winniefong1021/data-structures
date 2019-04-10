var Queue = function() {
  var someInstance = {};
  var storage = {};
  someInstance.enqueueNum = 1;
  someInstance.dequeueNum = 1;

  someInstance.enqueue = function(value) {
    storage[someInstance.enqueueNum] = value;
    someInstance.enqueueNum++;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() <= 0) {
      return;
    }
    var dequeued = storage[someInstance.dequeueNum];
    delete storage[someInstance.dequeueNum];
    someInstance.dequeueNum++;
    return dequeued;
  };

  someInstance.size = function() {
    var sizeOfStorage = someInstance.enqueueNum - someInstance.dequeueNum;
    return sizeOfStorage;
  };

  return someInstance;
};
