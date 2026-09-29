import express from "express";
import "dotenv/config";
import db from "./db";

const app = express();

const PORT = Number(process.env.PORT) || 8989;

app.listen(PORT, () => {
  console.log("Port is listening on port " + PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

db(); 