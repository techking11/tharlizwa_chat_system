import { Router } from 'express';
import * as roomController from '../controllers/room.controller';

const router = Router();

router.post('/join', roomController.joinChat);

router.post('/message', roomController.sendMessage);
router.get('/messages/:room_id', roomController.getRoomMessages);

router.post('/rooms', roomController.createRoom);
router.get('/rooms', roomController.getRooms);

export default router;
