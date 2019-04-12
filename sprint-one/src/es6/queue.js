class Queue {
  constructor() {
    this.enqueueNum = 1;
    this.dequeueNum = 1;
    this.storage = {};
  }
  enqueue(value) {
    this.storage[this.enqueueNum] = value;
    this.enqueueNum++;
  }
  dequeue() {
    if (this.size() <= 0) {
      return;
    }
    var dequeued = this.storage[this.dequeueNum];
    delete this.storage[this.dequeueNum];
    this.dequeueNum++;
    return dequeued;
  }
  size() {
    var sizeOfStorage = this.enqueueNum - this.dequeueNum;
    return sizeOfStorage;
  }
}
