import { NextFunction, Request, Response } from 'express';
import StandardError from '../errors/error';
import { NewTest } from '../protocols/tests';

import * as sendTestService from '../services/sendTestService';
import * as isValid from '../utils/externalLibs/validation';

export async function getInitialOptions(req:Request, res:Response, next: NextFunction) {
    try {
        const options = await sendTestService.getInitialOptions();
        return res.status(200).send(options);
    } catch (error) {
        return next(error);
    }
}

export async function getProfessorsBySubjectId(req: Request, res: Response, next: NextFunction) {
    try {
        const subjectId = Number(req.params.subjectId);
        if (!isValid.id(subjectId)) {
            throw new StandardError({
                name: 'ValidationError',
                message: 'Error with input validation',
            })
        }
        const professors = await sendTestService.getProfessorsBySubjectId(subjectId);
        return res.status(200).send({professors});
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).send(error.message);
        }
        if (error.name === 'SubjectIdError') {
            return res.status(404).send(error.message);
        }
        return next(error);
    }
}

export async function postNewTest(req: Request, res: Response, next: NextFunction) {
    try {
        const {
            year,
            semester,
            category,
            subject,
            professor,
            link
        } = req.body as NewTest;
        if (!isValid.newTest({ year, semester, category, subject, professor, link })) {
            throw new StandardError({
                name: 'ValidationError',
                message: 'Error with input validation',
            })
        }
        await sendTestService.insertNewTest({year, semester, category, subject, professor, link});
        return res.sendStatus(201);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).send(error.message);
        }
        if (error.name === 'TestAlreadyExists') {
            return res.status(409).send(error.message);
        }
        return next(error);
    }
}