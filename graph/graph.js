
class Node {
  constructor() {
    this.adjNodes = new Array();
    this.state = false;
  }

  edge(node) {
    this.adjNodes.push(node);
  }

  getAdjNodes() {
    return this.adjNodes;
  }

  visited() {
    return this.state;
  }

  visit() {
    this.state = true;
  }
}

class Graph {
  constructor(size) {
    this.nodes = new Array(size).fill(new Node());
  }

  getNodes() {
    return this.nodes;
  }

  edge(n1, n2) {
    var startNode = this.getNode(n1);
    var endNode = this.getNode(n2);
    startNode.edge(endNode);
  }

  getNode(idx) {
    return this.nodes[idx];
  }
}


module.exports = {
  Node, Graph
};