import { getRepository } from 'typeorm';
import Professor from '../entities/professors';
import ProfessorsAndSubjects from '../entities/professorsAndSubjects';
import Subject from '../entities/subjects';
import Test from '../entities/tests';
import StandardError from '../errors/error';


export async function getProfessorsAndTests() {
    const professors = (await getRepository(Professor)
        .find()).map((professor) => professor.addNumberOfTests());
    const savedTests = await getRepository(Test)
        .find();
    const adjustedProfessors = professors.map(
        ({ id, name }) => ({
            id,
            name,
            tests: (savedTests.filter(({ professorsAndSubjects }) => professorsAndSubjects.professor.name === name).length),
        })
    );
    return adjustedProfessors.filter(({tests}) => tests > 0 );
}

export async function getSubjectsAndTests() {
    const subjects = (await getRepository(Subject)
        .find({
            order: {
                semester : "ASC",
            }
        })).map((subject) => subject.addNumberOfTests());
    const savedTests = await getRepository(Test)
        .find();
    const adjustedSubjects = subjects.map(
        ({ id, name, semester }) => ({
            id,
            name,
            semester,
            tests: (savedTests.filter(({ professorsAndSubjects }) => professorsAndSubjects.subject.name === name).length),
        })
    );
    return adjustedSubjects.filter(({tests}) => tests > 0 );
}

export async function getTestsByProfessorId(professorId: number) {
    
    const professorsAndSubjects = await getRepository(ProfessorsAndSubjects)
        .find({
            where: { professor: { id: professorId }}
        });
    
    if (!professorsAndSubjects.length) {
        throw new StandardError({
            name: 'ProfessorIdError',
            message: 'No tests found for this id',
        })
    }
    
    const tests = await getRepository(Test)
        .find({
            where: professorsAndSubjects.map(({ id }) => ({ professorsAndSubjects: { id } })),
            order: { category: "ASC" },
            relations: ['professorsAndSubjects' ],
        });
    if (!tests.length) {
        throw new StandardError({
            name: 'ProfessorIdError',
            message: 'No tests found for this id',
        })
    }
    return tests.map((test) => test.adjustForFinalUser());
}

export async function getTestsBySubjectId(subjectId: number) {
    
    const professorsAndSubjects = await getRepository(ProfessorsAndSubjects)
        .find({
            where: { subject: { id: subjectId } },
        });
    
    if (!professorsAndSubjects.length) {
        throw new StandardError({
            name: 'SubjectIdError',
            message: 'No tests found for this id',
        })
    }
    
    const tests = await getRepository(Test)
        .find({
            where: professorsAndSubjects.map(({ id }) => ({ professorsAndSubjects: { id } })),
            order: {
                category: "ASC",
            },
            relations: ['professorsAndSubjects', 'professorsAndSubjects.professor' ],
        });
    if (!tests.length) {
        throw new StandardError({
            name: 'SubjectIdError',
            message: 'No tests found for this id',
        })
    }
    return tests.map((test) => test.adjustForFinalUser());
}