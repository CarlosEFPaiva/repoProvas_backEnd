import Category from "../../src/entities/categories";
import Subject from "../../src/entities/subjects";

import { createCategory } from './categoryFactory';
import { createSemester } from './semesterFactory';
import { createSubject } from './subjectFactory';
import { createProfessor } from './professorFactory';
import { createProfessorAndSubject } from './professorsAndSubjectsFactory';
import { getNumber } from "../utils/externalLibs/faker";
import { NewTest } from "../../src/protocols/tests";
import { CreateTestParameters } from "../testProtocols/testParameters";
import { getFakeTest } from '../utils/externalLibs/faker';


export function getInitialOptions(subjects: Subject[], categories: Category[]) {
    const years:number[] = [];
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

export async function getTestingParameters() {
    const category1 = await createCategory();
    const category2 = await createCategory();
    const semester1 = await createSemester();
    const semester2 = await createSemester();
    const subject1 = await createSubject(semester1);
    const subject2 = await createSubject(semester2);
    const professor1 = await createProfessor();
    const professor2 = await createProfessor();
    const professorAndSubject1 = await createProfessorAndSubject(subject1, professor1);
    const professorAndSubject2 = await createProfessorAndSubject(subject2, professor2);
    return {
        category1,
        category2,
        semester1,
        semester2,
        subject1,
        subject2,
        professor1,
        professor2,
        professorAndSubject1,
        professorAndSubject2,
    }
}

export function getDifferentNumber(array:number[]) {
    let number = getNumber(1, 100000);
    while (array.includes(number)) {
        number = getNumber(1, 100000);
    }
    return number;
}

export function getValidTestBody(newTestParameters: CreateTestParameters): NewTest {
    const newTest = getFakeTest(newTestParameters);
    const validTestBody = {
        year: newTest.year,
        semester: newTest.semester,
        category: newTest.category.name,
        subject: newTest.professorsAndSubjects.subject.name,
        professor: newTest.professorsAndSubjects.professor.name,
        link: newTest.link,
    };
    return validTestBody;
}