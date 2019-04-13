var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.contains = function(){};
  this.depthFirstLog = function(){};
  this.insert = function(value) {
    var newNode = new binaryNode(value);
    var placer = function(nodeInQuestion) {
      var currentNode = nodeInQuestion; 
      if (currentNode.value > value && (currentNode.left === null && currentNode.right === null)) {
        currentNode.left = newNode;
      }
      if (currentNode.value < value && (currentNode.left === null && currentNode.right === null)) {
        currentNode.right = newNode;
      }
      if (currentNode.left.value > value) {
        placer(currentNode.left);
      }
      if (currentNode.left.value < value && currentNode.right === null) {
        currentNode.right = newNode;
      }
      if (currentNode.right.value < value) {
        placer(currentNode.right);
      }
      if (currentNode.right.value > value && currentNode.left === null) {
        currentNode.left = newNode;
      }
    }  
    placer(this);
  };
};
  

var binaryNode = function(value) {
  this.value = value;
  this.left = null; 
  this.right = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
