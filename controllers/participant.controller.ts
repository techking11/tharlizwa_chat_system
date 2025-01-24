import { NextFunction, Request, Response } from 'express';
import * as participantService from '../services/participant.service';

export const createParticipant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { room_id, user_id } = req.body;
    const participant = await participantService.createParticipant(
      room_id,
      user_id
    );
    res
      .json(201)
      .json({ message: 'New participant created', data: participant });
  } catch (error) {
    console.log('Error in createParticipant:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
