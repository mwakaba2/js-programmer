var { TreeNode } = require('./tree');

function inOrderTraversal(node, arr) {
  if (!node) {
    return;
  }
  inOrderTraversal(node.left, arr);
  arr.push(node.val);
  inOrderTraversal(node.right, arr);
}

function createMinimalTree(arr, start, end) {
  if(end < start) {
    return null;
  }
  var mid = Math.floor((start + end) / 2);
  var node = new TreeNode(arr[mid]);
  node.left = createMinimalTree(arr, start, mid-1);
  node.right = createMinimalTree(arr, mid+1, end);
  return node;
}


module.exports = {
  createMinimalTree,
  inOrderTraversal
};