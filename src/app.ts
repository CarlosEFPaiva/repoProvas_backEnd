import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import sendTestRouter from './routers/sendTestRouter';
import viewTestRouter from './routers/viewTestRouter';

import serverMiddlewareError from './middlewares/error';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/send-test', sendTestRouter);
app.use('/view-test', viewTestRouter);

app.use(serverMiddlewareError);

export async function init() {
    await connectDatabase();
}

export default app;
