import { Server, Socket } from 'socket.io';
import * as userService from '../services/user.service';
import * as messageService from '../services/message.service';

export const handleSocketConnection = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join', async ({ name, room_id }) => {
      await userService.createOrUpdateUser(name, socket.id);
      socket.join(room_id);
      console.log(`${name} joined room: ${room_id}`);
    });

    socket.on('message', async ({ room_id, sender_id, text }) => {
      const message = await messageService.createMessage(
        room_id,
        sender_id,
        text
      );
      io.to(room_id).emit('message', message);
    });

    socket.on('disconnect', async () => {
      await userService.deleteUserBySocketId(socket.id);
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
