import "./App.css";
import io from "socket.io-client"

const socket = io.connect("http://localhost:3001")

function App() {
  return <div className="App">
    <h3>Join a room</h3>
    <input type="text" placeholder="Vilin.."></input>
    <input type="text" placeholder="Room ID..."></input>
  </div>;
}

export default App;
