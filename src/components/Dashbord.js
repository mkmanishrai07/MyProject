import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router";

const Dashboard = ({socket,username,room, setRoom, setUsername}) => {

  const navigate = useNavigate()

  const joinRoomhandler = ()=>{
    if(username !=="" & room !==""){
      socket.emit("joinchat", room)
      navigate('/conversation')
    }
  }
  return (
    <React.Fragment>
        <Sidebar/>
      <div className="ml-[17rem]">
        Hii Login here
        <div>
            <input type="text" placeholder="Enter username..." onChange={(e)=>setUsername(e.target.value)}/>
            <input type="text" placeholder="Enter Room..." onChange={(e)=>setRoom(e.target.value)}/>
        </div>
        <div>
            <button onClick={joinRoomhandler} className="font-bold border bg-cyan-950 p-1 pl-3 pr-3 rounded-lg">Login</button>
        </div>
      </div>
    </React.Fragment>
    
  );
};
export default Dashboard;
