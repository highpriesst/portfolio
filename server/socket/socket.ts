import { Socket, Server } from "socket.io";
import logger from "../src/utils/logger";

const EVENTS = {
  connection: "connection",
  disconnected: "disconnected",
};

function socket({ io }: { io: Server }) {
  logger.info("Sockets are working successfully!");

  io.on(EVENTS.connection, (socket: Socket) => {
    logger.info(`User ${socket.id}`);
  });

  io.on(EVENTS.disconnected, () => {
    logger.info("Disconnected");
  });
}

export default socket;
