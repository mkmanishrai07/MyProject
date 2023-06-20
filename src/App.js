import React, { useState } from 'react'
import {Route, BrowserRouter,Routes } from 'react-router-dom'
import Conversation from './components/Conversation';
import io from 'socket.io-client';
import Dashboard from './components/Dashbord';
const socket =  io.connect("http://localhost:8000")

function App() {
  const [username, setUsername] = useState("");
  const [room,setRoom] = useState("");

// const socket = io({
//   reconnectionDelay: 10000, // defaults to 1000
//   reconnectionDelayMax: 10000 // defaults to 5000
// })
  
// socket.on("connect",()=>{

//   setTimeout(() => {
//     if (socket.io.engine) {
//       socket.io.engine.close();
//     }
//   }, 10000);
// })


  return (
   <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard  socket={socket} room={room} username={username} setRoom={setRoom} setUsername={setUsername}/>}/>
        <Route path='/conversation' element={<Conversation socket={socket} username={username} room={room}/>}/>
      </Routes>
    </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
