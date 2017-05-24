const expect = require('chai').expect;
let {
  listOfDepths,
  TreeNode,
  Tree,
  prettyPrint,
  listOfDepthsDFS,
  isBalanced,
  validateBST,
  getSuccessor
} = require('./tree');

var node1 = new TreeNode('a');
var node2 = new TreeNode('b');
var node3 = new TreeNode('c');
var node4 = new TreeNode('d');
node1.left = node2;
node1.right = node3;
node2.left = node4;
node3.right = new TreeNode('e');
node4.right = new TreeNode('g');

var tree = new Tree(node1);

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
    let tree = new Tree(root);
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

describe.only('Next Successor', () => {
  let tree;
  let node1, node2, node3, node4, node5, node6;
  beforeEach(() => {
    //      4
    //   3    5
    // 1        6
    //   2
    node1 = new TreeNode(4);
    node2 = new TreeNode(3);
    node3 = new TreeNode(5);
    node4 = new TreeNode(1);
    node5 = new TreeNode(6);
    node6 = new TreeNode(2);
    node2.parent = node1;
    node3.parent = node1;
    node4.parent = node2;
    node6.parent = node4;
    node5.parent = node3;
    node1.parent = null;
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node3.right = node5
    node4.right = node6;

    tree = new Tree(node1);
  });
  it('can find next successor if it exists', () => {
    let found = false;
    let successor = getSuccessor(node6);
    expect(successor).to.deep.equal(node2);
  });
  it('returns null if no successor was found', () => {
    let found = false;
    expect(getSuccessor(node5)).to.be.null;
  });
});