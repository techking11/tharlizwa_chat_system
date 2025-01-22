import { Server } from 'socket.io';
import dotenv from 'dotenv';
import app from './app';

// create app and server
const io = new Server();
dotenv.config();

// handle socket connection
io.on('connection', (socket) => {
  console.log('A user connected.');

  socket.on('chat message', (msg: string) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

// start server
const port = process.env.PORT;
const localhost = process.env.LOCALHOST;

app.listen(port, () => {
  console.log(`Server is running on http://${localhost}:${port}`);
});
