import express from "express";

import { EXEMPLO_ALUNOS, EXEMPLO_MONITORES, EXEMPLO_MONITORIAS, EXMPLO_DISCIPLINAS } from "./data.js";

/*

// db connection

import "reflect-metadata";
import { Data } from "./data.js";

Data.initialize()
  .then(() => {})
  .catch((err) => console.log(err));

*/

const server = express();

server.get("/monitorias", (_, res) => {
  res.send(EXEMPLO_MONITORIAS);
});

server.get("/monitoria/:id", (req, res) => {
  res.send(EXEMPLO_MONITORIAS[req.params.id]);
});

server.get("/monitores", (_, res) => {
  res.send(EXEMPLO_MONITORES);
});

server.get("/monitor/:id", (req, res) => {
  res.send(EXEMPLO_MONITORES[req.params.id]);
});

server.get("/disciplinas", (_, res) => {
  res.send(EXMPLO_DISCIPLINAS);
});

server.get("/disciplina/:id", (req, res) => {
  res.send(EXMPLO_DISCIPLINAS[req.params.id]);
});

server.get("/alunos", (_, res) => {
  res.send(EXEMPLO_ALUNOS);
});

server.get("/aluno/:id", (req, res) => {
  res.send(EXEMPLO_ALUNOS[req.params.id]);
});

server.get("/", (_, res) => {
  res.send("bem-vindo");
});

const port = parseInt(process.env.PORT || "3000");
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`servidor aberto em http://localhost:${port}`);
  }
});
