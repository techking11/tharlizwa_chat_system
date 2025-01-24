import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.post('/create', userController.createUser);

router.post('/email', userController.getUserByEmail);

export default router;
