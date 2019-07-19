var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var containIt = false;
  if (this.value === target) {
    return true;
  }
  if (this.children.length === 0) {
    return containIt;
  }

  var findTarget = function(node) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (child.value === target) {
        containIt = true;
        return containIt;
      } else {
        findTarget(child.children);
      }
    }
  }

  findTarget(this.children);
  return containIt;
};

/*
 * Complexity: What is the time complexity of the above functions?
addChild is O(1) and contains is O(n)
 */
