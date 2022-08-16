const express = require("express");
const app = express();
const { getAllChampions, getOneChampion } = require("./dataSet");

app.get("/", (req, res) => {
  res.send(getAllChampions());
});

app.get("/:name", (req, res) => {
  res.send(getOneChampion(req.params.name));
});

app.listen(3000, () => {
  console.log("Server started on port localhost:3000");
});
