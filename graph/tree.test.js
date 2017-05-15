var { listOfDepths, TreeNode, Tree, prettyPrint, listOfDepthsDFS, isBalanced } = require('./tree');

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

var depthList = listOfDepths(tree);
var depthList2 = [];
listOfDepthsDFS(tree.root, depthList2, 0);
prettyPrint(depthList);
prettyPrint(depthList2);

//      a
//   b    c
// d        e
//   g
console.log(isBalanced(tree.root));