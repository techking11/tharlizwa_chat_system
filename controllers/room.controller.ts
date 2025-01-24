import mongoose from 'mongoose';
import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import * as messageService from '../services/message.service';
import * as roomService from '../services/room.service';

export const joinChat = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, socket_id, room_id } = req.body;
    if (!name || !socket_id || !room_id) {
      res
        .status(400)
        .json({ message: 'Name, socketId, and roomId are required' });
      return;
    }

    const user = await userService.createOrUpdateUser(name, socket_id);
    await roomService.addUserToRoom(
      room_id,
      user._id as mongoose.Types.ObjectId
    );
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
    const { sender_id, room_id, text } = req.body;
    if (!sender_id || !room_id || !text) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    const message = await messageService.createMessage(
      room_id,
      sender_id,
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
    const { room_id } = req.params;
    const messages = await messageService.getMessagesByRoomId(room_id);
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
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    const message = await roomService.createRoom(name);
    res.status(201).json({ message: 'Message sent', data: message });
  } catch (error) {
    console.error('Error in createRoom:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
