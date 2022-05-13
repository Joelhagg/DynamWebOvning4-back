import express from "express";
import { writeFileSync, readFileSync, existsSync, readFile } from "fs";

const port = 3000;
const app = express();
const cors = app.use(express.json());
app.use(express.static("../DynamWebOvning4-back"));

app.get("/api/adress", (req, res) => {
  let collectedAdresses = [];
  if (existsSync("./adresses.json")) {
    collectedAdresses = JSON.parse(readFileSync("./adresses.json"));
  }
  res.json(collectedAdresses);
});

app.post("/api/adress", (req, res) => {
  let collectedAdresses = [];
  if (existsSync("./adresses.json")) {
    collectedAdresses = JSON.parse(readFileSync("./adresses.json"));
    collectedAdresses = [...collectedAdresses, req.body];
    writeFileSync("./adresses.json", JSON.stringify(collectedAdresses));

    res.json(collectedAdresses);
  }
  return collectedAdresses;
});

app.listen(port, () => {
  console.log("Server is runnong on port: ", port);
});
