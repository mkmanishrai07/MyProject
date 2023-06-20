import React, { Component } from "react";
import {Link} from 'react-router-dom'
import SearchBar from "./Searchbar";
import Navbar from "./Navbar";
import {BiUserCircle,BiLogIn} from 'react-icons/bi'
import {FaUsers} from 'react-icons/fa'
import {LuLayoutDashboard,LuMessagesSquare} from 'react-icons/lu'
import {IoDocuments,IoHelpCircleSharp,IoSettingsSharp} from 'react-icons/io5'
import {IoMdCalendar} from 'react-icons/io'
import {MdPayment,MdDarkMode,MdEmail} from 'react-icons/md'



class Sidebar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="w-[15rem] h-[100vh] fixed bg-[#2B2A4C] text-white">
          <div className="text-[20px] font-bold pl-10 pt-3 pb-3"><Link>ChatBox</Link></div>
          <div className="flex flex-col gap-1 pb-4">
            <span className="h-[2px] w-[100%] bg-slate-500"></span>
            <Link className="pl-10 flex  items-center gap-3"> <span><BiUserCircle style={{width:45 ,height:50}}/> </span><span>UserName</span></Link>
            <span className="h-[2px] w-[100%] bg-slate-500"></span>
          </div>
            <span className="text-[12px] text-slate-400 pl-10">MENU</span>
          <div className="pl-10 flex flex-col gap-3 mt-3 pb-4">
            <Link to={'/'} className="flex items-center gap-2"><LuLayoutDashboard/> <span>Dashboard</span></Link>
            <Link className="flex items-center gap-2"><FaUsers/> <span>All Users</span></Link>
            <Link to={'/conversation'} className="flex items-center gap-2"><LuMessagesSquare/> <span>Conversations</span></Link>
            <Link className="flex items-center gap-2"> <IoDocuments/><span>Documents</span></Link>
            <Link className="flex items-center gap-2"> <IoMdCalendar/><span>Schedule</span></Link>
            <Link className="flex items-center gap-2"><MdPayment/> <span>Payments</span></Link>
          </div>
          <span className="text-[12px] text-slate-400 pl-10 pt-3">SUPPORT</span>
          <div className="pl-10 flex flex-col gap-3 mt-3 pb-4">
            <Link className="flex items-center gap-2"><IoHelpCircleSharp/><span>Need Helps?</span></Link>
            <Link className="flex items-center gap-2"><MdEmail/><span>Contact Us</span></Link>
          </div>
            <span className="text-[12px] text-slate-400 pl-10">SETTINGS</span>
          <div className="pl-10 flex flex-col gap-3 mt-3">
            <Link className="flex items-center gap-2"><IoSettingsSharp/><span>Account</span></Link>
            <Link className="flex items-center gap-2"><MdDarkMode/> <span>Dark Mode</span></Link>
            <Link className="flex items-center gap-2"><BiLogIn/><span>Log Out</span></Link>
          </div>
        </div>
       <div>
          <div className="ml-[17rem] m-0 p-0">
            <SearchBar/>
          </div>
          <div className="h-[2px] w-[100%] bg-slate-500 mt-[0.6rem]"></div>
          <div className="ml-[17rem] m-0 p-0">
            <Navbar/>
          </div>
          <div className="h-[2px] w-[100%] bg-slate-500 mt-[0.6rem]"></div>
       </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
