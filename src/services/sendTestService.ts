import { getRepository, getConnection } from 'typeorm';
import Category from '../entities/categories';
import Professor from '../entities/professors';
import ProfessorsAndSubjects from '../entities/professorsAndSubjects';
import Subject from '../entities/subjects';
import Test from '../entities/tests';
import StandardError from '../errors/error';
import { NewTest } from '../protocols/tests';

export async function getInitialOptions() {
    const subjects = await getRepository(Subject)
        .find();
    const categories = await getRepository(Category)
        .find();
    const years = [];
    for (let i = 2000; i <= new Date().getFullYear(); i++) {
        years.push(i);
    }
    const semesters = [1, 2];
    return {
        years,
        semesters,
        categories: categories.map(({ name }) => name),
        subjects,
    };
}

export async function getProfessorsBySubjectId(subjectId: number) {
    const professors = await getRepository(ProfessorsAndSubjects)
        .find({
            where: {
            subject: {id: subjectId } 
            }
        });
    if (!professors.length) {
        throw new StandardError({
            name: 'SubjectIdError',
            message: 'No subject found for this id',
        })
    }
    return professors.map((professor) => professor.getProfessorName());
}

export async function insertNewTest(newTest: NewTest) {

    const professor = (await getRepository(Professor)
        .find({
            where: {
                name: newTest.professor,
            }
        }))[0];
    
    const subject = (await getRepository(Subject)
        .find({
            where: {
                name: newTest.subject,
            }
        }))[0];

    const professorAndSubject = (await getRepository(ProfessorsAndSubjects)
        .find({
            where: {
                subject: subject,
                professor: professor,
            }
        }))[0];
    const category = (await getRepository(Category)
        .find({
            where: {
                name: newTest.category,
            }
        }))[0];
    if (!professorAndSubject || !category) {
        throw new StandardError({
            name: 'ValidationError',
            message: 'Error with input validation',
        })
    }

    const insertedTest = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Test)
        .values({
            year: newTest.year,
            semester: newTest.semester,
            category: category,
            professorsAndSubjects: professorAndSubject,
            link: newTest.link,
        })
        .orIgnore()
        .returning("id")
        .execute();

    if (!insertedTest.identifiers[0]) {
        throw new StandardError({
            name: 'TestAlreadyExists',
            message: 'Test already exists',
        })
    }
}