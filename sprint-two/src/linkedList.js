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
    list.tail.next = newNode.value;
    list.tail = newNode;
  };

  list.removeHead = function() {
    var deleted = list.head;
    list.head.value = list.head.next;
    return deleted.value;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }
    

    // while (tempHead.next !== null) {
    //   debugger;
    //   if (tempHead.value === target) {
    //     return true;
    //   } else {
    //     tempHead = list.head.next;
    //     if (tempHead === target) {
    //       return true;
    //     }
    //   }
    // }
    var tempHead = list.head;
    for (let key in tempHead) {
      console.log(tempHead[key], key);
      // if (tempHead.value === target) {
      //   return true;
      // } else {
      //   if (tempHead.next === target) {
        
      //   }
      // }
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

// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list

/*
 * Complexity: What is the time complexity of the above functions?
 */
