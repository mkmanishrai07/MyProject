import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {BiUserCircle} from 'react-icons/bi'
import {GrAttachment} from 'react-icons/gr'
import {BsEmojiSmile,BsMicFill} from 'react-icons/bs'
import '../App.css'
const Conversation = (props)=>{

    const [currmessage, setMessage] = useState("")

    const sendMessage = async()=>{
        let input = document.getElementById('input')
        if(currmessage !== ""){
            const messageData = {
                room :props.details.room,
                Author:props.details.username,
                message:currmessage,
                time : new Date(Date.now()).getHours() + " | " + new Date(Date.now()).getMinutes()
            }
            await props.details.socket.emit("send_message", messageData)
            input.value = ""
        }
    }

    const [message,setNewMessage] = useState("")
    let result = []
    result.push(message)
    useEffect(()=>{
        props.details.socket.on('received_message',(data)=>{
            setNewMessage((test)=>{
                return {test,...data}
            })
            // console.log(data);
        })
    },[props.details.socket])



    return(
        <React.Fragment>
            <Sidebar/>
            <div className="ml-[17rem] flex">
                <div className="w-[30%] disableselect">
                    <div className="flex gap-2 items-center cursor-pointer active:bg-[#EEEEEE] w-[90%] p-2 pl-3 pr-3 rounded-xl mt-3"><BiUserCircle style={{width:35 ,height:40}}/> <span className="text-[18px] font-bold">Manish Kumar</span></div>
                    <div className="flex gap-2 items-center cursor-pointer active:bg-[#EEEEEE] w-[90%] p-2 pl-3 pr-3 rounded-xl mt-3"><BiUserCircle style={{width:35 ,height:40}}/> <span className="text-[18px] font-bold">Raj Kumar</span></div>
                    <div className="flex gap-2 items-center cursor-pointer active:bg-[#EEEEEE] w-[90%] p-2 pl-3 pr-3 rounded-xl mt-3"><BiUserCircle style={{width:35 ,height:40}}/> <span className="text-[18px] font-bold">Rajeev Kumar</span></div>
                </div>
                <div className="w-[2px] h-[91.5vh] -mt-[3.1rem] bg-slate-500"></div>
                <div className="w-[70%] bg-[#EEEEEE] h-[84vh] flex flex-col justify-between items-center">
                    <div className="">
                        <div className="">
                            {result.map((data,idx)=>{
                                return(
                                    <div key={idx}>
                                        <div className="font-bold">{data.Author}</div>
                                        <div>{data.message}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="h-[3rem] bg-[#D2E9E9] w-[100%] flex items-center gap-6 pl-5">
                        <span><BsEmojiSmile/></span>
                        <span><GrAttachment/></span>
                        <span className="w-[80%]">
                            <input id="input" onChange={(e)=>setMessage(e.target.value)} className="disableselect outline-none m-0 p-0 bg-[#D2E9E9] w-[90%]" type="text" placeholder="Type message here !"/>
                            <button onClick={sendMessage} className="font-bold">Send</button>
                        </span>
                        <span><BsMicFill/></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Conversation;