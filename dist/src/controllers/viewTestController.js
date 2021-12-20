"use strict";
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
exports.getTestsBySubjectsId = exports.getTestsByProfessorsId = exports.getSubjectsAndTestNumbers = exports.getProfessorsAndTestNumbers = void 0;
var error_1 = __importDefault(require("../errors/error"));
var isValid = __importStar(require("../utils/externalLibs/validation"));
var viewTestService = __importStar(require("../services/viewTestService"));
function getProfessorsAndTestNumbers(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var options, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, viewTestService.getProfessorsAndTests()];
                case 1:
                    options = _a.sent();
                    return [2 /*return*/, res.status(200).send(options)];
                case 2:
                    error_2 = _a.sent();
                    return [2 /*return*/, next(error_2)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getProfessorsAndTestNumbers = getProfessorsAndTestNumbers;
function getSubjectsAndTestNumbers(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var options, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, viewTestService.getSubjectsAndTests()];
                case 1:
                    options = _a.sent();
                    return [2 /*return*/, res.status(200).send(options)];
                case 2:
                    error_3 = _a.sent();
                    return [2 /*return*/, next(error_3)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getSubjectsAndTestNumbers = getSubjectsAndTestNumbers;
function getTestsByProfessorsId(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var professorId, tests, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    professorId = Number(req.params.professorId);
                    if (!isValid.id(professorId)) {
                        throw new error_1["default"]({
                            name: 'ValidationError',
                            message: 'Error with input validation'
                        });
                    }
                    return [4 /*yield*/, viewTestService.getTestsByProfessorId(professorId)];
                case 1:
                    tests = _a.sent();
                    return [2 /*return*/, res.status(200).send({ tests: tests })];
                case 2:
                    error_4 = _a.sent();
                    if (error_4.name === 'ValidationError') {
                        return [2 /*return*/, res.status(400).send(error_4.message)];
                    }
                    if (error_4.name === 'ProfessorIdError') {
                        return [2 /*return*/, res.status(404).send(error_4.message)];
                    }
                    return [2 /*return*/, next(error_4)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getTestsByProfessorsId = getTestsByProfessorsId;
function getTestsBySubjectsId(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var subjectId, tests, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    subjectId = Number(req.params.subjectId);
                    if (!isValid.id(subjectId)) {
                        throw new error_1["default"]({
                            name: 'ValidationError',
                            message: 'Error with input validation'
                        });
                    }
                    return [4 /*yield*/, viewTestService.getTestsBySubjectId(subjectId)];
                case 1:
                    tests = _a.sent();
                    return [2 /*return*/, res.status(200).send({ tests: tests })];
                case 2:
                    error_5 = _a.sent();
                    if (error_5.name === 'ValidationError') {
                        return [2 /*return*/, res.status(400).send(error_5.message)];
                    }
                    if (error_5.name === 'SubjectIdError') {
                        return [2 /*return*/, res.status(404).send(error_5.message)];
                    }
                    return [2 /*return*/, next(error_5)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getTestsBySubjectsId = getTestsBySubjectsId;
