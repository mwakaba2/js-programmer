
class Node {
  constructor(name) {
    this.name = name;
    this.adjNodes = new Array();
    this.state = false;
  }

  edge(node) {
    this.adjNodes.push(node);
  }

  visited() {
    return this.state;
  }

  visit() {
    this.state = true;
  }
}

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  edge(start, end) {
    if(!this.adjList.has(start)) {
      this.adjList.set(start, new Node(start));
    }
    let node = this.adjList.get(start);
    node.edge(end);
  }

  printNodes() {
    let print = '';
    for(let [name, node] of this.adjList) {
      print += `${name}: ${node.adjNodes}\n`;
    }
    return print;
  }
}


module.exports = {
  Node, Graph
};