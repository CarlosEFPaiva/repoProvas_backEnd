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

  @OneToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })
      category: Category;

  @OneToOne(() => ProfessorsAndSubjects, {eager: true})
  @JoinColumn({ name: 'professor_and_subject_id' })
      professorsAndSubjects: ProfessorsAndSubjects;

  @Column()
      link: string;

    adjustForFinalUser() {
        return {
            year: this.year,
            semester: this.semester,
            category: this.category.name,
            professor: this.professorsAndSubjects.professor.name,
            subject: {
                name: this.professorsAndSubjects.subject.name,
                semester: this.professorsAndSubjects.subject.semester.name,
            },
            link: this.link,
      }
  }
}
