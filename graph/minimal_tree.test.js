var { expect } = require('chai');
var { createMinimalTree, inOrderTraversal } = require('./minimal_tree');

describe('Minimal Tree', () => {
  it('should create a minimal Tree', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let expectedArr = [];
    let node = createMinimalTree(arr, 0, arr.length-1);
    inOrderTraversal(node, expectedArr);
    expect(arr).to.eql(expectedArr);
  });
});