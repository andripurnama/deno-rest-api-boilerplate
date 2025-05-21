// entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "../deps.ts";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;
}
