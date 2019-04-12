var Stack = function() {
  var someInstance = {};
  var storage = {};
  someInstance.stackNum = 0;

  someInstance.push = function(value) {
    someInstance.stackNum++;
    storage[someInstance.stackNum] = value;
  };

  someInstance.pop = function() {
    if (someInstance.stackNum === 0) {
      return undefined;
    }
    var dequeued = storage[someInstance.stackNum];
    delete storage[someInstance.stackNum];
    someInstance.stackNum--;
    return dequeued;
  };

  someInstance.size = function() {
    return someInstance.stackNum;
  };

  return someInstance;
};
