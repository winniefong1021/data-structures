class Stack {
  constructor() {
    this.storage = {};
    this.stackNum = 0;
  }
  push(value) {
      this.stackNum++;
      this.storage[this.stackNum] = value;
  }

  pop() {
    if (this.stackNum === 0) {
      return undefined;
    }
    var dequeued = this.storage[this.stackNum];
    delete this.storage[this.stackNum];
    this.stackNum--;
    return dequeued;
  }

  size() {
    return this.stackNum;
  }
}
