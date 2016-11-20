export default function(io, store) {
  io.on('connection', (socket) => {
    let id = socket.id;

    socket.on('join', (data, callback) => {
      let otherUsers = store.all();
      callback(otherUsers);

      let user = {...data, id};
      store.add(user);

      socket.broadcast.emit('join', user);
    });

    socket.on('disconnect', () => {
      store.remove(id);

      socket.broadcast.emit('leave', id);
    });
  });
}
