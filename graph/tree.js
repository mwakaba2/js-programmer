class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
    this._size = 1;
  }

  insertInOrder(value) {
    if(value <= this.val) {
      if(this.left === null) {
        this.leftChild = new TreeNode(value);
      } else {
        this.left.insertInOrder(this.left);
      }
    } else {
      if(this.right === null) {
        this.rightChild = new TreeNode(value);
      } else {
        this.right.insertInOrder(value);
      }
    }
    this._size++;
  }

  get size() {
    return this._size;
  }

  find(value) {
    if(this.val === value) {
      return this;
    } else if (value <= this.val) {
      this.left.find(value);
    } else if (value > this.val) {
      this.right.find(value);
    }
    return null;
  }

  set leftChild(treeNode) {
    this.left = treeNode;
    if(treeNode !== null) {
      treeNode.parent = this;
    }
  }

  set rightChild(treeNode) {
    this.right = treeNode;
    if(treeNode !== null) {
      treeNode.parent = this;
    }
  }

  get leftMostChild() {
    let left = this;
    if(this === null){
      return null;
    }
    while(left!== null) {
      left = left.left;
    }
    return left;
  }

  get successor() {
    if (this === null) return null;
    if(this.right !== null) {
      return this.right.leftMostChild;
    } else {
      let curr = this;
      let x = curr.parent;
      while(x !== null && x.left !== curr) {
        curr = x;
        x = x.parent;
      }
      return x;
    }
  }
}

function listOfDepths(root) {
  var list = [];
  var current = [];
  if(root !== null) {
    current.push(root);
  }
  while(current.length > 0) {
    list.push(current);
    let parents = current;
    current = [];
    for(parent of parents){
      if(parent.left !== null) {
        current.push(parent.left);
      }
      if(parent.right !== null) {
        current.push(parent.right);
      }
    }
  }
  return list;
}

function listOfDepthsDFS(root, lists, level) {
  if(root === null) {
    return;
  }
  let list;
  if(lists.length === level){
    list = [];
    lists[level] = list;
  } else {
    list = lists[level];
  }
  list.push(root);
  listOfDepthsDFS(root.left, lists, level+1);
  listOfDepthsDFS(root.right, lists, level+1);
};

function prettyPrint(depthList) {
  let print = '';
  for(index in depthList) {
    let list = depthList[index];
    let values = list.map((treenode) => {
      return treenode.val;
    });
    print += `Level ${index}: ${values}\n`;
  }
  return print;
}

function checkHeight(root) {
  if (root === null) {
    return -1;
  }
  let leftHeight = checkHeight(root.left);
  if(leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE;
  let rightHeight = checkHeight(root.right);
  if(rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE;
  if(Math.abs(leftHeight - rightHeight) > 1) {
    return Number.MIN_VALUE;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function isBalanced(root) {
  return checkHeight(root) !== Number.MIN_VALUE;
}

function validateBST(root, min, max) {
  if(root === null) {
    return true;
  }
  if((min !== null && root.val <= min) || (max !== null && root.val > max)){
    return false;
  }
  if(!validateBST(root.left, min, root.val) || !validateBST(root.right, root.val, max)){
    return false;
  }
  return true;
}


module.exports = {
  TreeNode, listOfDepths, prettyPrint, listOfDepthsDFS, isBalanced, validateBST
};