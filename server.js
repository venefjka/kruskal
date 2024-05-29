import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import Graph from "./src/Graph.js";
import kruskal from "./src/kruskal.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/kruskal", (req, res, next) => {
  try {
    const data = req.body;
    
    if (!data || !data.nodes || !data.links) {
      throw new Error("Invalid input data");
    }

    console.log("Received data:", JSON.stringify(data));

    const graph = new Graph();
    data.links.forEach((link) => {
      graph.addEdge(link.weight, link.source.id, link.target.id);
    });

    const mst = kruskal(graph);
    const mstData = {
      nodes: data.nodes,
      links: mst.getEdges().map((edge) => ({
        source: edge.start,
        target: edge.end,
        weight: edge.weight,
      })),
    };

    console.log("MST data:", JSON.stringify(mstData));
    res.json(mstData);
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
