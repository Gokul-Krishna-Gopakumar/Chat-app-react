const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173" });

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    console.log("onlineUsers", onlineUsers);

    io.emit("getOnlineUsers", onlineUsers);
  });

  /* 
  // Handle WebRTC signaling
  socket.on("signal", (data) => {
    const { userId, signal } = data;
    const recipient = onlineUsers.find(user => user.userId === userId);
    if (recipient) {
      io.to(recipient.socketId).emit("signal", {
        signal,
        senderId: socket.id
      });
    }
  });
  */

  //add message
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find(
      (user) => user.userId === message.recepientId
    );

    if (user) {
      io.to(user.socketId).emit("getMessage", message);
    }
  });

  //delete message
  // Server-side
  socket.on("deleteMessage", (messageId) => {
    console.log("Broadcasting message deletion:", messageId);
    io.emit("messageDeleted", { messageId });
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

    io.emit("getOnlineUsers", onlineUsers);
  });
});

io.listen(3000);
