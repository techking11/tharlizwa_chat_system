import { IUser, User } from '../models/user.model';

export const createUser = async (
  name: string,
  phone_no: string,
  email: string,
  password: string
): Promise<IUser> => {
  const newUser = new User({ name, phone_no, email, password });
  return await newUser.save();
};

export const createOrUpdateUser = async (
  name: string,
  socket_id: string
): Promise<IUser> => {
  const existingUser = await User.findOne({ name });

  if (existingUser) {
    existingUser.socket_id = socket_id;
    return await existingUser.save();
  }

  const newUser = new User({ name, socket_id });
  return await newUser.save();
};

export const userByEmail = async (
  email: string
): Promise<IUser | undefined> => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return existingUser;
  }
};

export const deleteUserBySocketId = async (
  socket_id: string
): Promise<void> => {
  await User.deleteOne({ socket_id });
};
