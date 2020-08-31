class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Time Complexity: O(log n), where n is the number of nodes in the tree
    // Space Complexity: O(log n), where n is the number of nodes in the tree
    add(key, value) {
        let newNode = new TreeNode(key, value);

        if (this.root === null) {
            this.root = newNode;
          } else {
            this.insertNode(this.root, newNode);
          }
    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
            node.left = newNode;
            } else {
            this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
            node.right = newNode;
            } else {
            this.insertNode(node.right, newNode);
            }
        }
    }
    
    // Time Complexity: O(log n), where n is the number of nodes in the tree
    // Space Complexity: O(log n), where n is the number of nodes in the tree
    find(key) {
        if (this.root === null) {
          return null;
        }
        return this.findNode(key, this.root);
      }
    
      findNode(key, currentNode) {
        if (currentNode === null) {
          return false;
        }
    
        if (key === currentNode.key) {
          return currentNode.value;
        } else if (key < currentNode.key) {
          return this.findNode(key, currentNode.left);
        } else {
          return this.findNode(key, currentNode.right);
        }
      }

  //Time Complexity: O(n), where n is the number of nodes
  //Space Complexity: O(h), where h is the height of the tree
  inorder() {
    const resultArray = [];
    return this.inorderHelper(this.root, resultArray);
  }

  inorderHelper(currentNode, resultArray) {
    if (currentNode === null) { return resultArray };
    this.inorderHelper(currentNode.left, resultArray);
    // push currentNode to preserve the real tree structure, below for tests only
    resultArray.push({key: currentNode.key, value: currentNode.value});
    this.inorderHelper(currentNode.right, resultArray);
    return resultArray;
  }

  //Time Complexity: O(n), where n is the number of nodes
  //Space Complexity: O(h), where h is the height of the tree
  preorder() {
    const resultArray = [];
    return this.preorderHelper(this.root, resultArray);
  }

  preorderHelper(currentNode, resultArray) {
    if (currentNode === null) { return resultArray };
    // push currentNode to preserve the real tree structure, below for tests only
    resultArray.push({key: currentNode.key, value: currentNode.value});
    this.preorderHelper(currentNode.left, resultArray);
    this.preorderHelper(currentNode.right, resultArray);
    return resultArray;
  }

  //Time Complexity: O(n), where n is the number of nodes
  //Space Complexity: O(h), where h is the height of the tree
  postorder() {
    const resultArray = [];
    return this.postorderHelper(this.root, resultArray);
  }

  postorderHelper(currentNode, resultArray) {
    if (currentNode === null) { return resultArray };
    this.postorderHelper(currentNode.left, resultArray);
    this.postorderHelper(currentNode.right, resultArray);
    // push currentNode to preserve the real tree structure, below for tests only
    resultArray.push({key: currentNode.key, value: currentNode.value});
    return resultArray;
  }

    // Time Complexity: O(n), where n is number of nodes in the tree 
    // Space Complexity: O(h), where h is the height of the tree
    height() {
        return this.heightHelper(this.root, 0)
    }

    heightHelper(node, height) {
        if (node === null) {
            return height;
        } else {
            const left_height = this.heightHelper(node.left, height + 1);
            const right_height = this.heightHelper(node.right, height + 1);
            return Math.max(left_height, right_height);
        }
    }

    // Time Complexity: ?
    // Space Complexity: ?
    bfs() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Useful for printing
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;