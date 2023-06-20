import React from "react"
import { Link } from "react-router-dom"
import {FiSettings} from 'react-icons/fi'
import {IoCallOutline,} from 'react-icons/io5'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsCameraVideo} from 'react-icons/bs'
const Navbar = ()=>{
    return(
        <React.Fragment>
            <div className=" flex items-center w-[100%] gap-16">
                <div className="flex gap-14 mt-2 w-[30%]">
                    <div><Link>All Conversations</Link> </div>
                    <div><button className="border p-1 pl-3 pr-3 text-[13px] bg-[#C2DEDC] text-[#4942E4] font-bold rounded-md hover:bg-slate-400 hover:duration-500 duration-500">New Message</button></div>
                </div>
                <div className="flex justify-between w-[70%] items-center">
                    <div>Team member</div>
                    <div className="mr-5 flex items-center gap-5">
                        <div><BsCameraVideo style={{width:30, height:30}}/></div>
                        <div><IoCallOutline style={{width:30, height:25}}/></div>
                        <div><IoMdNotificationsOutline style={{width:30, height:25}}/></div>
                        <div><FiSettings style={{width:20, height:30}}/></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar