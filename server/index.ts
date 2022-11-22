const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const port = 3001;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: any) => {
  console.log("User connected: ", socket.io);

  io.on("disconnect", () => {
    console.log("User disconnected, ", socket.id);
  });
});

server.listen(port, () => {
  console.log("Server runnning on port: " + port);
});
