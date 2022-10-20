import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Monitoria {
  @PrimaryGeneratedColumn()
  id: number;
}
