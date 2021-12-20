"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getFakeLink = exports.getFakeTest = exports.getNumber = exports.getFakeSubject = exports.getFakeProfessor = exports.getFakeSemester = exports.getFakeCategory = void 0;
var faker_1 = __importDefault(require("faker"));
function getFakeCategory() {
    return {
        name: faker_1["default"].lorem.word()
    };
}
exports.getFakeCategory = getFakeCategory;
function getFakeSemester() {
    return {
        name: faker_1["default"].lorem.word()
    };
}
exports.getFakeSemester = getFakeSemester;
function getFakeProfessor() {
    return {
        name: faker_1["default"].lorem.word()
    };
}
exports.getFakeProfessor = getFakeProfessor;
function getFakeSubject(semester) {
    return {
        name: faker_1["default"].lorem.word(),
        semester: semester
    };
}
exports.getFakeSubject = getFakeSubject;
function getNumber(min, max) {
    return Number(faker_1["default"].helpers.regexpStyleStringParse("[" + min + "-" + max + "]"));
}
exports.getNumber = getNumber;
function getFakeTest(parameters) {
    var year = parameters.year, semester = parameters.semester, category = parameters.category, professorsAndSubjects = parameters.professorsAndSubjects;
    return {
        year: year || getNumber(2000, new Date().getFullYear()),
        semester: semester || getNumber(1, 2),
        category: category,
        professorsAndSubjects: professorsAndSubjects,
        link: faker_1["default"].internet.url() + '/example.pdf'
    };
}
exports.getFakeTest = getFakeTest;
function getFakeLink() {
    return faker_1["default"].internet.url + '.pdf';
}
exports.getFakeLink = getFakeLink;
