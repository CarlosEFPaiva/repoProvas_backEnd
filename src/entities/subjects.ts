import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Semester from './semesters';

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
      name: string;

  @OneToOne(() => Semester)
  @JoinColumn({ name: 'semester_id' })
      semester: Semester;
}
