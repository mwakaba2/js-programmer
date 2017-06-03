var { expect } = require('chai');
var { Node, Graph } = require('./graph');
var { buildOrder } = require('./buildOrder');

describe('Node', () => {
  it('should change state when node is visited', () => {
    var node = new Node();
    expect(node.visited()).to.eql(false);
    node.visit();
    expect(node.visited()).to.eql(true);
  });
});

describe('Graph', () => {
  it('should create an adjacency list', () => {
    let expected = '1: 2,3\n';
    let g = new Graph();
    g.edge(1, 2);
    g.edge(1, 3);
    expect(g.printNodes()).to.be.equal(expected);
  });
});

describe('Build Order', () => {
  let projects, dependencies;
  it('should return the same list for no dependencies', () => {
    projects = ['a', 'b', 'c'];
    dependencies = [];
    expect(buildOrder(projects, dependencies)).to.eql(['a', 'b', 'c']);
  });
  it('should return a valid build order', () => {
    projects = ['a', 'b', 'c', 'd', 'e', 'f'];
    dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
    expect(buildOrder(projects, dependencies)).to.eql(['f', 'e', 'a', 'b', 'd', 'c']);
  });
});