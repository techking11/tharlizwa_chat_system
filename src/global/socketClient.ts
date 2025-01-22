import { io, Socket } from 'socket.io-client';

const socketClient: Socket = io('http://localhost:5000', {
  withCredentials: true,
});

export default socketClient;
