var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var inserter = function(node) {
    if (node.value === value) return;
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        inserter(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        inserter(node.right);
      }
    }
  };
  inserter(this);
};

binaryTreeMethods.contains = function(value) {
  var containIt = false;
  var finder = function(node) {
    if (node.value === value) {
      containIt = true;
      return containIt;
    }
    if (node.left === null || node.right === null) {
      return containIt;
    }
    if (value > node.value) {
      finder(node.right);
    } else {
      finder(node.left);
    }
  };

  finder(this);
  return containIt;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  var eachNode = function(node) {
    cb(node.value);
    if (node.left !== null) {
      eachNode(node.left);
    }
    if (node.right !== null) {
      eachNode(node.right);
    }
  };
  eachNode(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
All functions are O(logn)
 */
