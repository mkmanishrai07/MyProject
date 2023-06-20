import React, { useState } from 'react'
import {Route, BrowserRouter,Routes, redirect, } from 'react-router-dom'
import Conversation from './components/Conversation';
import io from 'socket.io-client';
import Dashboard from './components/Dashbord';
const socket =  io.connect("http://localhost:8000")

function App() {
  const [username, setUsername] = useState("");
  const [room,setRoom] = useState("");
  

  

  const joinRoomhandler = ()=>{
    if(username !=="" & room !==""){
       socket.emit("join_room", room)
    return redirect("/conversation");

    }
  }


  const details = {
    username,
    setUsername,
    room,
    setRoom,
    joinRoomhandler,
    socket,
  }


  return (
   <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard joinRoomhandler={joinRoomhandler} details={details}/>}/>
        <Route path='/conversation' element={<Conversation details={details}/>}/>
      </Routes>
    </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
