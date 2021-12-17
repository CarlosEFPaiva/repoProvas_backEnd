import { NextFunction, Request, Response } from 'express';

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