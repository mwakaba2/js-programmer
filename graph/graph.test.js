var { expect } = require('chai');
var { Node, Graph } = require('./graph');

describe('Node', () => {
  it('should change state when node is visited', () => {
    var node = new Node();
    expect(node.visited()).to.eql(false);
    node.visit();
    expect(node.visited()).to.eql(true);
  });
});

describe('Graph', () => {
  it('should create 6 nodes', () => {
    var g = new Graph(6);
    expect(g.getNodes().length).to.eql(6);
  });
  it('should create an edge between two nodes', () => {
    var g = new Graph(6);
    g.edge(0, 3);
    var start = g.getNode(0);
    var end = g.getNode(3);
    expect(start.getAdjNodes()).to.eql([end]);
  });
});