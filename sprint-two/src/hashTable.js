

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempBucket = [];
  if (Array.isArray(this._storage.get(index))) {
    var convertValue = this._storage.get(index);
    convertValue.forEach(tupplePair => tempBucket.push(tupplePair));
    var takeFromHere = tempBucket.indexOf(k);
    if (takeFromHere >= 0) {
      tempBucket.splice(takeFromHere+1, 1, v);
    } else {
      tempBucket.push(k,v);
    }
    this._storage.set(index, tempBucket);      
  } else {
    this._storage.set(index,[k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var extractedBucket = this._storage.get(index);
  for (let i = 0; i < extractedBucket.length; i++) {
    if (extractedBucket[i] === k) {
      return extractedBucket[i+1];   
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var extractedBucket = this._storage.get(index);
  for (let i = 0; i < extractedBucket.length; i++) {
    if (extractedBucket[i] === k) {
      var takeFromHere = extractedBucket.indexOf(k);
      extractedBucket.splice(takeFromHere,2);   
    }
  }
  this._storage.set(index, extractedBucket);  
};



/*
 * Complexity: What is the time complexity of the 
above functions?
 */