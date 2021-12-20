import { Router } from 'express';

import * as viewTestController from '../controllers/viewTestController';

const router = Router();

router.get('/initial-options/professors', viewTestController.getProfessorsAndTestNumbers);
router.get('/initial-options/subjects', viewTestController.getSubjectsAndTestNumbers);
router.get('/by-professor/:professorId', viewTestController.getTestsByProfessorsId);
router.get('/by-subject/:subjectId', viewTestController.getTestsBySubjectsId);

export default router;
