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

export const EXEMPLO_MONITORIAS = [
  {
    "campus": "Dois Vizinhos",
    "disciplina": "QA12I; QA12R e QA31F - QUÍMICA ANALÍTICA QUANTITATIVA, QUÍMICA ANALÍTICA e QUÍMICA ANALÍTICA A",
    "monitor": "Stella Silva Mascarenhas Chaves",
    "horarioRemoto": "terça: das 16:00 às 19:00|quarta: das 15:00 às 17:00",
    "horarioPresencial": "segunda: das 13;00 às 16:00|sexta: das 15:00 às 17:00",
    "local": "B3S3",
    "data": "24/08/2022 a 21/12/2022",
    "link": "http://meet.google.com/jyh-vmrp-wbx",
  },
];

export const EXEMPLO_MONITORES = [
  {
    "nome": "Stella Silva Mascarenhas Chaves",
  },
];

export const EXMPLO_DISCIPLINAS = [
  {
    "nome": "QUÍMICA ANALÍTICA QUANTITATIVA",
  },
];

export const EXEMPLO_ALUNOS = [
  {
    "nome": "Lucas da Silva Marcos",
  },
]
