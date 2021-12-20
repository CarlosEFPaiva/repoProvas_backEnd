"use strict";
/* eslint-disable no-undef */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var supertest_1 = __importDefault(require("supertest"));
var typeorm_1 = require("typeorm");
var app_1 = __importStar(require("../../src/app"));
var database_1 = require("../utils/database");
var auxiliarTestFactory_1 = require("../factories/auxiliarTestFactory");
var testingParameters;
jest.setTimeout(20 * 1000);
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app_1.init()];
            case 1:
                _a.sent();
                return [4 /*yield*/, auxiliarTestFactory_1.getTestingParameters()];
            case 2:
                testingParameters = _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                jest.setTimeout(5000);
                return [4 /*yield*/, database_1.clearDatabase()];
            case 1:
                _a.sent();
                return [4 /*yield*/, typeorm_1.getConnection().close()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe("/send-test", function () {
    describe('GET /initial-options', function () {
        it("should answer with initial options and status 200", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result, expectedResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, supertest_1["default"](app_1["default"]).get('/send-test/initial-options')];
                    case 1:
                        result = _a.sent();
                        expectedResult = auxiliarTestFactory_1.getInitialOptions([testingParameters.subject1, testingParameters.subject2], [testingParameters.category1, testingParameters.category2]);
                        expect(result.body).toEqual(expectedResult);
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('GET /professors/:id', function () {
        it("should answer with professors and status 200", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result, expectedResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, supertest_1["default"](app_1["default"]).get("/send-test/professors/" + testingParameters.subject1.id)];
                    case 1:
                        result = _a.sent();
                        expectedResult = { professors: [testingParameters.professor1.name] };
                        expect(result.body).toEqual(expectedResult);
                        expect(result.status).toBe(200);
                        return [2 /*return*/];
                }
            });
        }); });
        it("input error: should answer with status 400", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, supertest_1["default"](app_1["default"]).get("/send-test/professors/notANumber")];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(400);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Subject error: should answer with status 404", function () { return __awaiter(void 0, void 0, void 0, function () {
            var invalidId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invalidId = auxiliarTestFactory_1.getDifferentNumber([testingParameters.subject1.id, testingParameters.subject2.id]);
                        return [4 /*yield*/, supertest_1["default"](app_1["default"]).get("/send-test/professors/" + invalidId)];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(404);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('POST "/" ', function () {
        it("input error: should answer with status 400", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, supertest_1["default"](app_1["default"]).post('/send-test').send({ year: 2000, semester: 1, category: 'Invalid-Category' })];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(400);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should answer status 201", function () { return __awaiter(void 0, void 0, void 0, function () {
            var newTestParameters, validTestBody, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newTestParameters = {
                            year: 2020,
                            semester: 1,
                            category: testingParameters.category1,
                            professorsAndSubjects: testingParameters.professorAndSubject1
                        };
                        validTestBody = auxiliarTestFactory_1.getValidTestBody(newTestParameters);
                        return [4 /*yield*/, supertest_1["default"](app_1["default"]).post('/send-test').send(validTestBody)];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(201);
                        return [2 /*return*/];
                }
            });
        }); });
        it("conflict Error: should answer status 409", function () { return __awaiter(void 0, void 0, void 0, function () {
            var newTestParameters, validTestBody, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newTestParameters = {
                            year: 2020,
                            semester: 1,
                            category: testingParameters.category1,
                            professorsAndSubjects: testingParameters.professorAndSubject1
                        };
                        validTestBody = auxiliarTestFactory_1.getValidTestBody(newTestParameters);
                        return [4 /*yield*/, supertest_1["default"](app_1["default"]).post('/send-test').send(validTestBody)];
                    case 1:
                        result = _a.sent();
                        expect(result.status).toBe(409);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
