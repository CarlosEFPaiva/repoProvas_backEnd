import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import ProfessorsAndSubjects from './professorsAndSubjects';
import Semester from './semesters';

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
      name: string;

  @OneToOne(() => Semester, {eager: true})
  @JoinColumn({ name: 'semester_id' })
      semester: Semester;
    
  @OneToMany(() => ProfessorsAndSubjects, professorAndSubject => professorAndSubject.subject)
      professorsAndSubjects: ProfessorsAndSubjects
}
