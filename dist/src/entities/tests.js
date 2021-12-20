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
var categories_1 = __importDefault(require("./categories"));
var professorsAndSubjects_1 = __importDefault(require("./professorsAndSubjects"));
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.adjustForFinalUser = function () {
        return {
            year: this.year,
            semester: this.semester,
            category: this.category.name,
            professor: this.professorsAndSubjects.professor.name,
            subject: {
                name: this.professorsAndSubjects.subject.name,
                semester: this.professorsAndSubjects.subject.semester.name
            },
            link: this.link
        };
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Test.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Test.prototype, "year");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Test.prototype, "semester");
    __decorate([
        typeorm_1.OneToOne(function () { return categories_1["default"]; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'category_id' }),
        __metadata("design:type", categories_1["default"])
    ], Test.prototype, "category");
    __decorate([
        typeorm_1.OneToOne(function () { return professorsAndSubjects_1["default"]; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'professor_and_subject_id' }),
        __metadata("design:type", professorsAndSubjects_1["default"])
    ], Test.prototype, "professorsAndSubjects");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Test.prototype, "link");
    Test = __decorate([
        typeorm_1.Entity('tests')
    ], Test);
    return Test;
}());
exports["default"] = Test;
