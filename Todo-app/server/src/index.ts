import express from "express";

const app = express();

const PORT = 8989;

app.listen(PORT, () => {
  console.log("Port is listening on port " + PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});