let io;

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer);
    return io;
  },
  getIO: (socket) => {
    if (!io) {
      throw new Error("Socket.io not initialized!");
    }
    console.log("socket", socket());
    return io;
  },
};
