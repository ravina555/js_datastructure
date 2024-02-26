function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  
  function BinarySearchTree() {
    this.root = null;
  }

// Function to insert a value into the BST
BinarySearchTree.prototype.insert = function (data) {
    const newNode = new Node(data);
  
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  };
  
  BinarySearchTree.prototype._insertNode = function (node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  };
  
  // Function to search for a value in the BST
  BinarySearchTree.prototype.search = function (data) {
    return this._searchNode(this.root, data);
  };
  
  BinarySearchTree.prototype._searchNode = function (node, data) {
    if (node === null) {
      return false;
    }
  
    if (data < node.data) {
      return this._searchNode(node.left, data);
    } else if (data > node.data) {
      return this._searchNode(node.right, data);
    } else {
      return true; // Node with the given data found
    }
  };

  //pre-order DFS traversal

// Function to perform a pre-order traversal of the BST
BinarySearchTree.prototype.preOrderTraversal = function (callback) {
  this._preOrderTraversalNode(this.root, callback);
};

BinarySearchTree.prototype._preOrderTraversalNode = function (node, callback) {
  if (node !== null) {
    callback(node.data);
    this._preOrderTraversalNode(node.left, callback);
    this._preOrderTraversalNode(node.right, callback);
  }
};

// Function to perform an in-order traversal of the BST
BinarySearchTree.prototype.inOrderTraversal = function (callback) {
  this._inOrderTraversalNode(this.root, callback);
};

BinarySearchTree.prototype._inOrderTraversalNode = function (node, callback) {
  if (node !== null) {
    this._inOrderTraversalNode(node.left, callback);
    callback(node.data);
    this._inOrderTraversalNode(node.right, callback);
  }
};



let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(15);
bst.insert(10);

// Pre-order traversal
const result = [];
bst.preOrderTraversal((data) => result.push(data));
console.log(result);

// In-order traversal
const result1 = [];
bst.inOrderTraversal((data) => result1.push(data));
console.log(result1); 