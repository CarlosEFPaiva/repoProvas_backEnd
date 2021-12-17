import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Category from './categories';
import ProfessorsAndSubjects from './professorsAndSubjects';

@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
      id: number;

  @Column()
      year: number;

  @Column()
      semester: number;

  @OneToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
      category: Category;

  @OneToOne(() => ProfessorsAndSubjects, {eager: true})
  @JoinColumn({ name: 'professor_and_subject_id' })
      professorsAndSubjects: ProfessorsAndSubjects;

  @Column()
      link: string;
}
