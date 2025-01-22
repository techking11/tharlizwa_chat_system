import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import * as messageService from '../services/message.service';
import * as roomService from '../services/room.service';

export const joinChat = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, socketId, roomId } = req.body;
    if (!name || !socketId || !roomId) {
      res
        .status(400)
        .json({ message: 'Name, socketId, and roomId are required' });
      return;
    }

    const user = await userService.createOrUpdateUser(name, socketId);
    await roomService.addUserToRoom(roomId, user._id as string);
    res.status(201).json({ message: 'User joined', user });
  } catch (error) {
    console.error('Error in joinChat:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { senderId, roomId, username, text } = req.body;
    if (!senderId || !roomId || !username || !text) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    const message = await messageService.createMessage(
      roomId,
      senderId,
      username,
      text
    );
    res.status(201).json({ message: 'Message sent', data: message });
  } catch (error) {
    console.error('Error in sendMessage:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getRoomMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { roomId } = req.params;
    const messages = await messageService.getMessagesByRoomId(roomId);
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error in getRoomMessages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getRooms = async (req: Request, res: Response): Promise<void> => {
  try {
    const rooms = await roomService.getAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    console.error('Error in getRooms:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createRoom = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { roomName } = req.body;
    if (!roomName) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    const message = await roomService.createRoom(roomName);
    res.status(201).json({ message: 'Message sent', data: message });
  } catch (error) {
    console.error('Error in createRoom:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
