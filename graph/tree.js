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

module.exports = {
  TreeNode, listOfDepths, Tree, prettyPrint, listOfDepthsDFS
};