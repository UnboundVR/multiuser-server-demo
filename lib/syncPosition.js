export default function(io, store) {
  io.on('connection', (socket) => {
    let id = socket.id;

    socket.on('state', (state) => {
      if(store.exists(id)) {
        store.setState(id, state);
        socket.broadcast.emit('state', id, state);
      }
    });
  });
}
