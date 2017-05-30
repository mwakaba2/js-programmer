const expect = require('chai').expect;
let {
  listOfDepths,
  TreeNode,
  prettyPrint,
  listOfDepthsDFS,
  isBalanced,
  validateBST,
} = require('./tree');


describe('list of Depths', () => {
  let root, actualDepthList, expectedDepthList;
  beforeEach(() => {
    //      a
    //   b    c
    // d        e
    //   g
    let node1 = new TreeNode('a');
    let node2 = new TreeNode('b');
    let node3 = new TreeNode('c');
    let node4 = new TreeNode('d');
    node1.leftChild = node2;
    node1.rightChild = node3;
    node2.leftChild = node4;
    node3.rightChild = new TreeNode('e');
    node4.rightChild = new TreeNode('g');
    root = node1;
  });
  describe('BFS version', () => {
    it('should list the nodes by depths', () => {
      expectedDepthList = `Level 0: a\nLevel 1: b,c\nLevel 2: d,e\nLevel 3: g\n`;
      actualDepthList = listOfDepths(root);
      expect(prettyPrint(actualDepthList)).to.eql(expectedDepthList);
    });
  });
  describe('DFS version', () => {
    it('should list the nodes by depths', () => {
      expectedDepthList = `Level 0: a\nLevel 1: b,c\nLevel 2: d,e\nLevel 3: g\n`;
      actualDepthList = [];
      listOfDepthsDFS(root, actualDepthList, 0);
      expect(prettyPrint(actualDepthList)).to.eql(expectedDepthList);
    });
  });
});



describe('isBalanced', () => {
  it('should return true for one node', () => {
    let root = new TreeNode(1);
    expect(isBalanced(root)).to.be.true;
  });
  it('should return true for a balanced tree', () => {
    let node1 = new TreeNode('a');
    let node2 = new TreeNode('b');
    let node3 = new TreeNode('c');
    node1.leftChild = node2;
    node1.rightChild = node3;
    let root = node1;
    expect(isBalanced(root)).to.be.true;
  })
  it('should return false for an unbalanced tree', () => {
    let node1 = new TreeNode('a');
    let node2 = new TreeNode('b');
    let node3 = new TreeNode('c');
    let node4 = new TreeNode('d');
    node1.leftChild = node2;
    node1.rightChild = node3;
    node2.leftChild = node4;
    node3.rightChild = new TreeNode('e');
    node4.rightChild = new TreeNode('g');
    let root = node1;
    expect(isBalanced(root)).to.be.false;
  });
});

describe('Validate Tree', () => {
  it('validates true for one tree node', () => {
    let root = new TreeNode(1);
    expect(validateBST(root, null, null)).to.be.true;
  });
  it('validates true for one BST subtree', () => {
    let root = new TreeNode(2);
    let left = new TreeNode(1);
    let right = new TreeNode(3);
    root.leftChild = left;
    root.rightChild = right;
    expect(validateBST(root, null, null)).to.be.true;
  });
  it('validates false for non BST', () => {
    let root = new TreeNode(5);
    let node1 = new TreeNode(3);
    let node2 = new TreeNode(6);
    let node3 = new TreeNode(7);
    root.leftChild = node1;
    root.rightChild = node3;
    node1.rightChild = node2;
    expect(validateBST(root, null, null)).to.be.false;
  });
});

describe('Next Successor', () => {
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
    node1.leftChild = node2;
    node1.rightChild = node3;
    node2.leftChild = node4;
    node3.rightChild = node5
    node4.rightChild = node6;
  });
  it('can find next successor if it exists', () => {
    let found = false;
    let successor = node6.successor;
    expect(successor).to.deep.equal(node2);
  });
  it('returns null if no successor was found', () => {
    let found = false;
    expect(node5.successor).to.be.null;
  });
});