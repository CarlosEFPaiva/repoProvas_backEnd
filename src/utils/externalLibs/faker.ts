import faker from 'faker';
import { CreateTestParameters } from '../../../tests/testProtocols/testParameters';
import Semester from '../../entities/semesters';
import Test from '../../entities/tests';

export function getFakeCategory() {
    return {
        name: faker.lorem.word(),
    };
}

export function getFakeSemester() {
    return {
        name: faker.lorem.word(),
    };
}

export function getFakeProfessor() {
    return {
        name: faker.lorem.word(),
    };
}

export function getFakeSubject(semester: Semester) {
    return {
        name: faker.lorem.word(),
        semester,
    };
}

export function getNumber(min: number, max: number) {
    return Number(faker.helpers.regexpStyleStringParse(`[${min}-${max}]`));
}

export function getFakeTest(parameters: CreateTestParameters) {
    const {
        year,
        semester,
        category,
        professorsAndSubjects
    } = parameters;
    return {
        year: year || getNumber(2000, new Date().getFullYear()),
        semester: semester || getNumber(1, 2),
        category,
        professorsAndSubjects,
        link: faker.internet.url() + '/example.pdf',
    };
}

export function getFakeLink() {
    return faker.internet.url + '.pdf';
}
