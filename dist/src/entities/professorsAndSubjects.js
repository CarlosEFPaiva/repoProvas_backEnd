"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var professors_1 = __importDefault(require("./professors"));
var subjects_1 = __importDefault(require("./subjects"));
var ProfessorsAndSubjects = /** @class */ (function () {
    function ProfessorsAndSubjects() {
    }
    ProfessorsAndSubjects.prototype.getProfessorName = function () {
        return this.professor.name;
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ProfessorsAndSubjects.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return professors_1["default"]; }, function (professor) { return professor.id; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'professor_id' }),
        __metadata("design:type", professors_1["default"])
    ], ProfessorsAndSubjects.prototype, "professor");
    __decorate([
        typeorm_1.ManyToOne(function () { return subjects_1["default"]; }, function (subject) { return subject.id; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'subject_id' }),
        __metadata("design:type", subjects_1["default"])
    ], ProfessorsAndSubjects.prototype, "subject");
    ProfessorsAndSubjects = __decorate([
        typeorm_1.Entity('professors_and_subjects')
    ], ProfessorsAndSubjects);
    return ProfessorsAndSubjects;
}());
exports["default"] = ProfessorsAndSubjects;
