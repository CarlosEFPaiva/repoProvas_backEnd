import { getRepository } from 'typeorm';
import Professor from '../entities/professors';
import Subject from '../entities/subjects';
import Test from '../entities/tests';


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
    return {
        adjustedProfessors
    };
}

export async function getSubjectsAndTests() {
    const subjects = (await getRepository(Subject)
        .find()).map((subject) => subject.addNumberOfTests());
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
    return {
        adjustedSubjects
    };
}