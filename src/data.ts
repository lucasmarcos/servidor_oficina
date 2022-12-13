import { DataSource } from "typeorm";

import { Monitoria } from "./model/Monitoria.js";

export const Data = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "db",
  password: "db",
  database: "db",
  synchronize: true,
  logging: true,
  entities: [Monitoria],
  subscribers: [],
  migrations: [],
});

export const EXEMPLO_MONITORIAS = [];

export const EXEMPLO_MONITORES = [
  {
    nome: "Stella Silva Mascarenhas Chaves",
  },
];

export const EXMPLO_DISCIPLINAS = [
  {
    nome: "QUÍMICA ANALÍTICA QUANTITATIVA",
  },
];

export const EXEMPLO_ALUNOS = [
  {
    nome: "Lucas da Silva Marcos",
  },
];
