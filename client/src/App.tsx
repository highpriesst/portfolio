import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

const socket = io("http://localhost:3001");

function App() {
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {};

  return (
    <div className="App">
      <h3>Join a chat</h3>
      <input
        type="text"
        placeholder="ertan.."
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="room id.."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button>Join a room</button>
    </div>
  );
}

export default App;
