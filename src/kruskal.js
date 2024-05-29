import Graph from "./Graph.js";
import DisjointSet from "./DisjointSet.js";

export default function kruskal(graph) {
  const mst = new Graph();
  const disjointSet = new DisjointSet();

  const sortedEdges = graph.getEdges().sort((a, b) => a.weight - b.weight);

  sortedEdges.forEach(({ start, end, weight }) => {
    disjointSet.add(start);
    disjointSet.add(end);

    if (disjointSet.find(start) !== disjointSet.find(end)) {
      disjointSet.union(start, end);
      mst.addEdge(weight, start, end);
    }
  });

  return mst;
}