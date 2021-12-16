import { NextFunction, Request, Response } from 'express';

import * as sendTestService from '../services/sendTestService';

export async function getInitialOptions(req:Request, res:Response, next: NextFunction) {
    try {
        const options = await sendTestService.getInitialOptions();
        return res.status(200).send(options);
    } catch (error) {
        return next(error);
    }
}
