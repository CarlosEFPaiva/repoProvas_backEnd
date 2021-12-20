import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ProfessorsAndSubjects from './professorsAndSubjects';

@Entity('professors')
export default class Professor {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
    name: string;
    
  @OneToMany(() => ProfessorsAndSubjects, professorAndSubject => professorAndSubject.professor)
    professorsAndSubjects: ProfessorsAndSubjects
  
  addNumberOfTests() {
    return {
      id: this.id,
      name: this.name,
      tests: 0,
    }
  }
}
