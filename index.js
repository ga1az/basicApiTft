const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const { getAllChampions, getOneChampion } = require("./dataSet");

app.get("/", (req, res) => {
  res.send(getAllChampions());
});

app.get("/:name", (req, res) => {
  res.send(getOneChampion(req.params.name));
});

app.get("/picture", (req, res) => {
  res.sendFile(path.join(__dirname, "data/champions/tft7_aatrox.tft_set7.png"));
});

app.listen(3000, () => {
  console.log("Server started on port localhost:3000");
});
