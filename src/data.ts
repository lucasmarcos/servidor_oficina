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
})
