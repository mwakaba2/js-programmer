var { Node, Graph } = require('./graph');

function buildOrder(projects, dependencies) {
  if(dependencies.length === 0){
    return projects;
  }
  let dependentGraph = new Graph();
  let independentGraph = new Graph();
  // create graph with edges
  for(let [project, dependency] of dependencies) {
    dependentGraph.edge(dependency, project);
    independentGraph.edge(project, dependency);
  }
  // FIFO Data Structure
  let independentQueue = [];
  let orderedBuild = [];
  projects.forEach((project) => {
    if(!dependentGraph.adjList.has(project)){
      independentQueue.unshift(project);
    }
  });
  let currBuild = independentQueue.shift();
  let independentAdjList = independentGraph.adjList;
  while(currBuild) {
    orderedBuild.push(currBuild);
    if(independentAdjList.has(currBuild)){
      let adjNodes = independentAdjList.get(currBuild).getAdjNodes();
      for(let adjNode of adjNodes) {
        if(!independentQueue.includes(adjNode)) {
          independentQueue.push(adjNode);
        }
      }
    }
    currBuild = independentQueue.shift();
  }
  return orderedBuild;
}

module.exports = {
  buildOrder,
};