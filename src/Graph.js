export default class Graph {
  constructor() {
    this.edges = [];
  }

  addEdge(weight, start, end) {
    this.edges.push({ weight, start, end });
  }

  getEdges() {
    return this.edges.slice();
  } 
}
