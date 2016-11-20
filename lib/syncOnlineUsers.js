import UserStore from './userStore';

export default function(io) {
  let store = new UserStore();

  io.on('connection', (socket) => {
    let id = socket.id; // We're deriving guest ID from socket ID (for now all users are guests)

    socket.on('join', (data, callback) => {
      let user = {id, data};
      store.add(user);

      socket.broadcast.emit('join', user);
      callback(store.otherUsers(user));
    });

    socket.on('disconnect', () => {
      store.remove(id);

      socket.broadcast.emit('leave', id);
    });
  });
}
