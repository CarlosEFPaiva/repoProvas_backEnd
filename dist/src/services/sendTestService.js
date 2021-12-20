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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.insertNewTest = exports.getProfessorsBySubjectId = exports.getInitialOptions = void 0;
var typeorm_1 = require("typeorm");
var categories_1 = __importDefault(require("../entities/categories"));
var professors_1 = __importDefault(require("../entities/professors"));
var professorsAndSubjects_1 = __importDefault(require("../entities/professorsAndSubjects"));
var subjects_1 = __importDefault(require("../entities/subjects"));
var tests_1 = __importDefault(require("../entities/tests"));
var error_1 = __importDefault(require("../errors/error"));
function getInitialOptions() {
    return __awaiter(this, void 0, void 0, function () {
        var subjects, categories, years, i, semesters;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.getRepository(subjects_1["default"])
                        .find()];
                case 1:
                    subjects = _a.sent();
                    return [4 /*yield*/, typeorm_1.getRepository(categories_1["default"])
                            .find()];
                case 2:
                    categories = _a.sent();
                    years = [];
                    for (i = 2000; i <= new Date().getFullYear(); i++) {
                        years.push(i);
                    }
                    semesters = [1, 2];
                    return [2 /*return*/, {
                            years: years,
                            semesters: semesters,
                            categories: categories.map(function (_a) {
                                var name = _a.name;
                                return name;
                            }),
                            subjects: subjects
                        }];
            }
        });
    });
}
exports.getInitialOptions = getInitialOptions;
function getProfessorsBySubjectId(subjectId) {
    return __awaiter(this, void 0, void 0, function () {
        var professors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.getRepository(professorsAndSubjects_1["default"])
                        .find({
                        where: {
                            subject: { id: subjectId }
                        }
                    })];
                case 1:
                    professors = _a.sent();
                    if (!professors.length) {
                        throw new error_1["default"]({
                            name: 'SubjectIdError',
                            message: 'No subject found for this id'
                        });
                    }
                    return [2 /*return*/, professors.map(function (professor) { return professor.getProfessorName(); })];
            }
        });
    });
}
exports.getProfessorsBySubjectId = getProfessorsBySubjectId;
function insertNewTest(newTest) {
    return __awaiter(this, void 0, void 0, function () {
        var professor, subject, professorAndSubject, category, insertedTest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.getRepository(professors_1["default"])
                        .find({
                        where: {
                            name: newTest.professor
                        }
                    })];
                case 1:
                    professor = (_a.sent())[0];
                    return [4 /*yield*/, typeorm_1.getRepository(subjects_1["default"])
                            .find({
                            where: {
                                name: newTest.subject
                            }
                        })];
                case 2:
                    subject = (_a.sent())[0];
                    return [4 /*yield*/, typeorm_1.getRepository(professorsAndSubjects_1["default"])
                            .find({
                            where: {
                                subject: subject,
                                professor: professor
                            }
                        })];
                case 3:
                    professorAndSubject = (_a.sent())[0];
                    return [4 /*yield*/, typeorm_1.getRepository(categories_1["default"])
                            .find({
                            where: {
                                name: newTest.category
                            }
                        })];
                case 4:
                    category = (_a.sent())[0];
                    if (!professorAndSubject || !category) {
                        throw new error_1["default"]({
                            name: 'ValidationError',
                            message: 'Error with input validation'
                        });
                    }
                    return [4 /*yield*/, typeorm_1.getConnection()
                            .createQueryBuilder()
                            .insert()
                            .into(tests_1["default"])
                            .values({
                            year: newTest.year,
                            semester: newTest.semester,
                            category: category,
                            professorsAndSubjects: professorAndSubject,
                            link: newTest.link
                        })
                            .orIgnore()
                            .returning("id")
                            .execute()];
                case 5:
                    insertedTest = _a.sent();
                    if (!insertedTest.identifiers[0]) {
                        throw new error_1["default"]({
                            name: 'TestAlreadyExists',
                            message: 'Test already exists'
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.insertNewTest = insertNewTest;
