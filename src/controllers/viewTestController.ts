import { NextFunction, Request, Response } from 'express';

import StandardError from '../errors/error';

import * as isValid from '../utils/externalLibs/validation';
import * as viewTestService from '../services/viewTestService';

export async function getProfessorsAndTestNumbers(req:Request, res:Response, next: NextFunction) {
    try {
        const options = await viewTestService.getProfessorsAndTests();
        return res.status(200).send(options);
    } catch (error) {
        return next(error);
    }
}

export async function getSubjectsAndTestNumbers(req:Request, res:Response, next: NextFunction) {
    try {
        const options = await viewTestService.getSubjectsAndTests();
        return res.status(200).send(options);
    } catch (error) {
        return next(error);
    }
}

export async function getTestsByProfessorsId(req: Request, res: Response, next: NextFunction) {
    try {
        const professorId = Number(req.params.professorId);
        if (!isValid.id(professorId)) {
            throw new StandardError({
                name: 'ValidationError',
                message: 'Error with input validation',
            })
        }
        const tests = await viewTestService.getTestsByProfessorId(professorId);
        return res.status(200).send({tests});
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).send(error.message);
        }
        if (error.name === 'ProfessorIdError') {
            return res.status(404).send(error.message);
        }
        return next(error);
    }
}

export async function getTestsBySubjectsId(req: Request, res: Response, next: NextFunction) {
    try {
        const subjectId = Number(req.params.subjectId);
        if (!isValid.id(subjectId)) {
            throw new StandardError({
                name: 'ValidationError',
                message: 'Error with input validation',
            })
        }
        const tests = await viewTestService.getTestsBySubjectId(subjectId);
        return res.status(200).send({tests});
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
