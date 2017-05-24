class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }
}

function listOfDepths(tree) {
  var root = tree.root;
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
  for(index in depthList) {
    let list = depthList[index];
    let values = list.map((treenode) => {
      return treenode.val;
    });
    console.log(`Level ${index}: ${values}`);
  }
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
  TreeNode, listOfDepths, Tree, prettyPrint, listOfDepthsDFS, isBalanced, validateBST
};