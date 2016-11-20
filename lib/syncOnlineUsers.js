export default function(io) {
  io.on('connection', (socket) => {
    let id = socket.id.split('#')[1]; // We're deriving guest ID from socket ID (for now all users are guests)

    // When we support auth, we should emit join only after auth/join as guest, i.e. not when the user connects
    socket.broadcast.emit('join', id);

    socket.on('disconnect', () => {
      socket.broadcast.emit('leave', id);
    });
  });
}
