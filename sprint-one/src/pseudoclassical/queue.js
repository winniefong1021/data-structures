var Queue = function() {
  this.storage = {};
  this.enqueueNum = 1;
  this.dequeueNum = 1;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.enqueueNum] = value;
  this.enqueueNum++;
};

Queue.prototype.dequeue = function() {
  if (this.size() <= 0) {
    return;
  }
  var dequeued = this.storage[this.dequeueNum];
  delete this.storage[this.dequeueNum];
  this.dequeueNum++;
  return dequeued;
};

Queue.prototype.size = function() {
  var sizeOfStorage = this.enqueueNum - this.dequeueNum;
  return sizeOfStorage;
};
