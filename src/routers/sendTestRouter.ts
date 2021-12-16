import { Router } from 'express';

import * as sendTestController from '../controllers/sendTestController';

const router = Router();

router.get('/initial-options', sendTestController.getInitialOptions);

export default router;
