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
var professorsAndSubjects_1 = __importDefault(require("./professorsAndSubjects"));
var Professor = /** @class */ (function () {
    function Professor() {
    }
    Professor.prototype.addNumberOfTests = function () {
        return {
            id: this.id,
            name: this.name,
            tests: 0
        };
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Professor.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Professor.prototype, "name");
    __decorate([
        typeorm_1.OneToMany(function () { return professorsAndSubjects_1["default"]; }, function (professorAndSubject) { return professorAndSubject.professor; }),
        __metadata("design:type", professorsAndSubjects_1["default"])
    ], Professor.prototype, "professorsAndSubjects");
    Professor = __decorate([
        typeorm_1.Entity('professors')
    ], Professor);
    return Professor;
}());
exports["default"] = Professor;
