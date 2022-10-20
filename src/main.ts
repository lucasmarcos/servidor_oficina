import express from "express";

import "reflect-metadata";

const server = express();

const port = parseInt(process.env.PORT || "3000");
server.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`http://localhost:${port}`);
  }
});
