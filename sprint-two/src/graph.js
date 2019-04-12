

// Instantiate a new graph
var Graph = function(value) {
  this.value = value;
  this.fromNodeArr = [];
  this.toNodeArr = [];
  this.collection = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Graph(node);
  this.collection.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
// 6th
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// 5th
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
// 3rd
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // iterate through this.collection arr to grab each node
  var fromFound = this.collection.indexOf(fromNode); // need to fix lines 35 to 41
  if (fromFound >= 0) {
    this.collection[fromFound].toNodeArr.push(toNode);
  }
  var toFound = this.collection.indexOf(toNode);
  if (toFound >= 0) {
    this.collection[toFound].fromNodeArr(toNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
// 4th
// find indexOf toNode value in fromNode's end arr
  // splice out toNode from end arr at that index
// find indexOf fromNode value in toNode's start arr
  // splice out fromNode from start arr at that index
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
// 7th
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


