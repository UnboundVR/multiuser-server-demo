import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import syncOnlineUsers from './lib/syncOnlineUsers';
import syncPosition from './lib/syncPosition';
import UserStore from './lib/userStore';

let app = express();
let server = http.createServer(app);
let io = socketio(server);

let port = 1338;
server.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

let store = new UserStore();
syncOnlineUsers(io, store);
syncPosition(io, store);
