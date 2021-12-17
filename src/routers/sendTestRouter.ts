import { Router } from 'express';

import * as sendTestController from '../controllers/sendTestController';

const router = Router();

router.get('/initial-options', sendTestController.getInitialOptions);
router.get('/professors/:subjectId', sendTestController.getProfessorsBySubjectId);
router.post('', sendTestController.postNewTest);

export default router;
