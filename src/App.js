import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat.js";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div className="App">
      <h3>Join a room</h3>
      <input
        type="text"
        placeholder="Vilin.."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      ></input>
      <button onClick={joinRoom}>Join</button>
      <Chat socket={socket} username={username} room={room} />
    </div>
  );
}

export default App;
