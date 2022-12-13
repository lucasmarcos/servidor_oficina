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

server.get("/monitorias", (req, res) => {
  return EXEMPLO_MONITORIAS;
});

server.get("/monitoria/:id", (req, res) => {
  return EXEMPLO_MONITORIAS[req.params.id];
});

server.get("/monitores", (req, res) => {
  return EXEMPLO_MONITORES;
});

server.get("/monitor/:id", (req, res) => {
  return EXEMPLO_MONITORES[req.params.id];
});

server.get("/disciplinas", (req, res) => {
  return EXMPLO_DISCIPLINAS;
});

server.get("/disciplina/:id", (req, res) => {
  return EXMPLO_DISCIPLINAS[req.params.id];
});

server.get("/alunos", (req, res) => {
  return EXEMPLO_ALUNOS;
});

server.get("/aluno/:id", (req, res) => {
  return EXEMPLO_ALUNOS[req.params.id];
});

server.get("/", (req, res) => {
  return "bem-vindo";
});

const port = parseInt(process.env.PORT || "3000");
server.listen(port, "0.0.0.0", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`servidor aberto em http://localhost:${port}`);
  }
});
