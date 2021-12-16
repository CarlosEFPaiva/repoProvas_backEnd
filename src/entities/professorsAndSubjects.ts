import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Professor from './professors';
import Subject from './subjects';

@Entity('professors_and_subjects')
export default class ProfessorsAndSubjects {
  @PrimaryGeneratedColumn()
      id: number;

  @OneToOne(() => Professor)
  @JoinColumn({ name: 'professor_id' })
      professor: Professor;

  @OneToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
      subject: Subject;
}
