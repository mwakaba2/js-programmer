const expect = require('chai').expect;
let {
  listOfDepths,
  TreeNode,
  Tree,
  prettyPrint,
  listOfDepthsDFS,
  isBalanced,
  validateBST
} = require('./tree');

// var node1 = new TreeNode('a');
// var node2 = new TreeNode('b');
// var node3 = new TreeNode('c');
// var node4 = new TreeNode('d');
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node3.right = new TreeNode('e');
// node4.right = new TreeNode('g');

// var tree = new Tree(node1);

// var depthList = listOfDepths(tree);
// var depthList2 = [];
// listOfDepthsDFS(tree.root, depthList2, 0);
// prettyPrint(depthList);
// prettyPrint(depthList2);

//      a
//   b    c
// d        e
//   g
// console.log(isBalanced(tree.root));

describe('Validate Tree', () => {
  it('validates true for one tree node', () => {
    let root = new TreeNode(1);
    let tree = new Tree(root);;
    expect(validateBST(tree.root, null, null)).to.be.true;
  });
  it('validates true for one BST subtree', () => {
    let root = new TreeNode(2);
    let left = new TreeNode(1);
    let right = new TreeNode(3);
    root.left = left;
    root.right = right;
    let tree = new Tree(root);
    expect(validateBST(tree.root, null, null)).to.be.true;
  });
  it('validates false for non BST', () => {
    let root = new TreeNode(5);
    let node1 = new TreeNode(3);
    let node2 = new TreeNode(6);
    let node3 = new TreeNode(7);
    root.left = node1;
    root.right = node3;
    node1.right = node2;
    let tree = new Tree(root);
    expect(validateBST(tree.root, null, null)).to.be.false;
  });
});