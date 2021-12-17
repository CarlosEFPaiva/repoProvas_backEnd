import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Professor from './professors';
import Subject from './subjects';

@Entity('professors_and_subjects')
export default class ProfessorsAndSubjects {
  @PrimaryGeneratedColumn()
      id: number;

  @ManyToOne(() => Professor, professor => professor.id, {eager: true})
  @JoinColumn({ name: 'professor_id' })
      professor: Professor;

  @ManyToOne(() => Subject, subject => subject.id, {eager: true})
  @JoinColumn({ name: 'subject_id' })
        subject: Subject;
    
  getProfessorName() {
    return this.professor.name; 
  }
}
