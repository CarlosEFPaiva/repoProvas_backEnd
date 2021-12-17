import { Router } from 'express';

import * as viewTestController from '../controllers/viewTestController';

const router = Router();

router.get('/initial-options/professors', viewTestController.getProfessorsAndTestNumbers);
router.get('/initial-options/subjects', viewTestController.getSubjectsAndTestNumbers);

export default router;
