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
  // create a variable called containIt which is set to false;
  // check if parent node.value === target,
    // return true;
  
  //helper function that starts at the parent node, iterates over it's children
    // if children.node.length == 0, return containIt;
    // if there is children, iterate over each element/child
      //  check if current node's value == target
        //  if so, containIt = true;
        // return containIt;
      // else if value == target, 
        // recursively look at that current node's children array
    //  
    // return containIt;
  var containIt = false;
  if (this.value === target) {
    return true;
  }
 // debugger;

  var findTarget = function(value) {
    if (this.children.length === 0) {
      return containIt;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.value === target) {
          containIt = true;
          return containIt;  
        } else {
          findTarget(child);
        } 
      }
    }
  }
  findTarget(this);
  return containIt;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
