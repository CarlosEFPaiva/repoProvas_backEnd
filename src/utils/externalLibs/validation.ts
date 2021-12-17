import joi from 'joi';
import { NewTest } from '../../protocols/tests';

export function id(sentId: number) {
    const schema = joi.object({
        sentId: joi.number().min(1).required(),
    });
    return !(schema.validate({ sentId })).error;
}

export function newTest(test: NewTest) {
    const schema = joi.object({
        year: joi.number().min(2000).max(new Date().getFullYear()).required(),
        semester: joi.number().min(1).max(2).required(),
        category: joi.string().min(2).max(255).required(),
        subject: joi.string().min(1).max(255).required(),
        professor: joi.string().min(1).max(255).required(),
        link: joi.string().pattern(/(http[s]*:\/\/)([a-z\-_0-9/.]+)\.([a-z.]{2,4})\/([a-z0-9\-_/._~:?#[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(pdf)/i).required(),
    });
    return !(schema.validate(test)).error;
}