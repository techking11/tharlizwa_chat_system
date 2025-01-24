import { IParticipant, Participant } from '../models/participant.model';

export const createParticipant = async (
  room_id: string,
  user_id: string
): Promise<IParticipant> => {
  const newParticipant = new Participant({ room_id, user_id });
  return await newParticipant.save();
};
