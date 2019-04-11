var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function() {
    var deleted = list.head;
    list.head = list.head.next;
    return deleted.value;
  };

  list.contains = function(target) {    
    var tempHead = list.head;
    while (tempHead.next !== null) {
      if (tempHead.value === target) {
        return true;
      } else {
        tempHead = tempHead.next;
        if (tempHead.value === target) {
          return true;
        }
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail and removeHead is O(1)- constant
  contains is O(n)- linear
 */
