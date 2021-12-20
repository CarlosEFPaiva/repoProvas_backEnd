import { Request, Response, NextFunction } from 'express';

export default async function error(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log('Middleware de erro: ', err);
    return res.status(500).send(err.message);
}
