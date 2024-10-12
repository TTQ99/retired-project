import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class TeamsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
