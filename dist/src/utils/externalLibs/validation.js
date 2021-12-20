"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.newTest = exports.id = void 0;
var joi_1 = __importDefault(require("joi"));
function id(sentId) {
    var schema = joi_1["default"].object({
        sentId: joi_1["default"].number().min(1).required()
    });
    return !(schema.validate({ sentId: sentId })).error;
}
exports.id = id;
function newTest(test) {
    var schema = joi_1["default"].object({
        year: joi_1["default"].number().min(2000).max(new Date().getFullYear()).required(),
        semester: joi_1["default"].number().min(1).max(2).required(),
        category: joi_1["default"].string().min(2).max(255).required(),
        subject: joi_1["default"].string().min(1).max(255).required(),
        professor: joi_1["default"].string().min(1).max(255).required(),
        link: joi_1["default"].string().pattern(/(http[s]*:\/\/)([a-z\-_0-9/.]+)\.([a-z.]{2,4})\/([a-z0-9\-_/._~:?#[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(pdf)/i).required()
    });
    return !(schema.validate(test)).error;
}
exports.newTest = newTest;
