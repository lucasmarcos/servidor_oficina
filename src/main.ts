import "reflect-metadata";

import express from "express";

import { Data } from "./data.js";

Data.initialize()
.then(() => {})
.catch((err) => console.log(err));

const server = express();

const port = parseInt(process.env.PORT || "3000");
server.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`http://localhost:${port}`);
  }
});
