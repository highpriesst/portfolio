import React from "react";
import { ChatInterface } from "../Interfaces/ChatInterface";

function Chat<TypeChat>(socket, username, room) {
  return (
    <div>
      <div className="chat-header"></div>
      <div className="chat-header"></div>
      <div className="chat-header"></div>
      {socket}
      {username}
      {room}
    </div>
  );
}

export default Chat;
