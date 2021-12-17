import Category from "../../src/entities/categories";
import Professor from "../../src/entities/professors";
import ProfessorsAndSubjects from "../../src/entities/professorsAndSubjects";
import Semester from "../../src/entities/semesters";
import Subject from "../../src/entities/subjects";

export interface TestingParameters {
    category1: Category,
    category2: Category,
    semester1: Semester,
    semester2: Semester,
    subject1: Subject,
    subject2: Subject,
    professor1: Professor,
    professor2: Professor,
    professorAndSubject1: ProfessorsAndSubjects,
    professorAndSubject2: ProfessorsAndSubjects,
}

export interface CreateTestParameters {
    year?: number,
    semester?: number,
    category: Category,
    professorsAndSubjects: ProfessorsAndSubjects,
}
