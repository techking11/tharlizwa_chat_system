import { Router } from 'express';
import * as participantController from '../controllers/participant.controller';

const router = Router();

router.post('/create', participantController.createParticipant);

export default router;
