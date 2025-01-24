import { NextFunction, Request, Response } from 'express';
import * as userService from '../services/user.service';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, phone_no, email, password } = req.body;
    const user = await userService.createUser(name, phone_no, email, password);
    res.status(201).json({ message: 'New user created.', data: user });
  } catch (error) {
    console.log('Error in createUser:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.body;
    const user = await userService.userByEmail(email);
    res.status(200).json({ message: 'User found', data: user });
  } catch (error) {
    console.log('Error in getUserByEmail:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
