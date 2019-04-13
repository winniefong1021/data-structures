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
    if (newNode.value === node.value) return;
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else if (newNode.value < node.left.value) {
        inserter(node.left.left);
      } else if (newNode.value > node.left.value) {
        if (node.left.right === null) {
          node.left.right = newNode;
        } else {
          inserter(node.left.right);
        }
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else if (newNode.value < node.right.value) {
        if (node.right.left === null) {
          node.right.left = newNode;
        } else {
          inserter(node.right.left);
        }
      } else if (newNode.value > node.right.value) {
        inserter(node.right.left);
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
All functions are O(n)
 */
