import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = (props) => {
  return (
    <React.Fragment>
        <Sidebar/>
      <div className="ml-[17rem]">
        Hii Login here
        <div>
            <input type="text" placeholder="Enter username..." onChange={(e)=>props.details.setUsername(e.target.value)}/>
            <input type="text" placeholder="Enter Room..." onChange={(e)=>props.details.setRoom(e.target.value)}/>
        </div>
        <div>
            <button onClick={props.details.joinRoomhandler} className="font-bold">Login</button>
        </div>
      </div>
    </React.Fragment>
    
  );
};
export default Dashboard;
