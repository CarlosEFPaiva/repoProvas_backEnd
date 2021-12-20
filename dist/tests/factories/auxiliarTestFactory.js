"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getValidTestBody = exports.getDifferentNumber = exports.getTestingParameters = exports.getInitialOptions = void 0;
var categoryFactory_1 = require("./categoryFactory");
var semesterFactory_1 = require("./semesterFactory");
var subjectFactory_1 = require("./subjectFactory");
var professorFactory_1 = require("./professorFactory");
var professorsAndSubjectsFactory_1 = require("./professorsAndSubjectsFactory");
var faker_1 = require("../utils/externalLibs/faker");
var faker_2 = require("../utils/externalLibs/faker");
function getInitialOptions(subjects, categories) {
    var years = [];
    for (var i = 2000; i <= new Date().getFullYear(); i++) {
        years.push(i);
    }
    var semesters = [1, 2];
    return {
        years: years,
        semesters: semesters,
        categories: categories.map(function (_a) {
            var name = _a.name;
            return name;
        }),
        subjects: subjects
    };
}
exports.getInitialOptions = getInitialOptions;
function getTestingParameters() {
    return __awaiter(this, void 0, void 0, function () {
        var category1, category2, semester1, semester2, subject1, subject2, professor1, professor2, professorAndSubject1, professorAndSubject2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, categoryFactory_1.createCategory()];
                case 1:
                    category1 = _a.sent();
                    return [4 /*yield*/, categoryFactory_1.createCategory()];
                case 2:
                    category2 = _a.sent();
                    return [4 /*yield*/, semesterFactory_1.createSemester()];
                case 3:
                    semester1 = _a.sent();
                    return [4 /*yield*/, semesterFactory_1.createSemester()];
                case 4:
                    semester2 = _a.sent();
                    return [4 /*yield*/, subjectFactory_1.createSubject(semester1)];
                case 5:
                    subject1 = _a.sent();
                    return [4 /*yield*/, subjectFactory_1.createSubject(semester2)];
                case 6:
                    subject2 = _a.sent();
                    return [4 /*yield*/, professorFactory_1.createProfessor()];
                case 7:
                    professor1 = _a.sent();
                    return [4 /*yield*/, professorFactory_1.createProfessor()];
                case 8:
                    professor2 = _a.sent();
                    return [4 /*yield*/, professorsAndSubjectsFactory_1.createProfessorAndSubject(subject1, professor1)];
                case 9:
                    professorAndSubject1 = _a.sent();
                    return [4 /*yield*/, professorsAndSubjectsFactory_1.createProfessorAndSubject(subject2, professor2)];
                case 10:
                    professorAndSubject2 = _a.sent();
                    return [2 /*return*/, {
                            category1: category1,
                            category2: category2,
                            semester1: semester1,
                            semester2: semester2,
                            subject1: subject1,
                            subject2: subject2,
                            professor1: professor1,
                            professor2: professor2,
                            professorAndSubject1: professorAndSubject1,
                            professorAndSubject2: professorAndSubject2
                        }];
            }
        });
    });
}
exports.getTestingParameters = getTestingParameters;
function getDifferentNumber(array) {
    var number = faker_1.getNumber(1, 100000);
    while (array.includes(number)) {
        number = faker_1.getNumber(1, 100000);
    }
    return number;
}
exports.getDifferentNumber = getDifferentNumber;
function getValidTestBody(newTestParameters) {
    var newTest = faker_2.getFakeTest(newTestParameters);
    var validTestBody = {
        year: newTest.year,
        semester: newTest.semester,
        category: newTest.category.name,
        subject: newTest.professorsAndSubjects.subject.name,
        professor: newTest.professorsAndSubjects.professor.name,
        link: newTest.link
    };
    return validTestBody;
}
exports.getValidTestBody = getValidTestBody;
