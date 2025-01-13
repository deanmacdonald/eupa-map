// socketServer.js
import { Server } from 'socket.io';

const initializeSocket = (server) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('disconnect', () => {
      console.log('user disconnected', socket.id);
    });

    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });

  return io;
};

export default initializeSocket;
