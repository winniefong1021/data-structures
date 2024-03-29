// Instantiate a new graph
var Graph = function(value) {
  this.collection = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Graph(node);
  this.collection[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let k in this.collection) {
    if (Number(k) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let k in this.collection) {
    if (Number(k) === node) {
      for (let i = 0; i < this.collection[k].length; i++) {
        this.removeEdge(this.collection[k][i], node);
      }
    delete this.collection[k];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let k in this.collection) {
    if (k == fromNode) {
      if (this.collection[k].includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var k in this.collection) {
    if (k == fromNode) {
      this.collection[fromNode].push(toNode);
      this.collection[toNode].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var k in this.collection) {
    if (k == fromNode) {
      if (this.collection[k].includes(toNode)) {
        var toNodeIdx = this.collection[k].indexOf(toNode);
        this.collection[k].splice(toNodeIdx);
      }
    }
    if (k == toNode) {
      if (this.collection[k].includes(fromNode)) {
        var fromNodeIdx = this.collection[k].indexOf(fromNode);
        this.collection[k].splice(fromNodeIdx);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let k in this.collection) {
    cb.call(this, k);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode is O(1)
contains, addEdge are O(n)
removeNode, hasEdge, removeEdge are O(n^2)
forEachNode at the very minimum is O(n), depends on cb
 */


