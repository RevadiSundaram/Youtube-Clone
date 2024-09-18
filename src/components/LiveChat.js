import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import {  randomMessage, randomName } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() =>{
       const interval = setInterval(() => {
        //API Polling
        dispatch(addMessage({
            name: randomName(),
            message: randomMessage(20)
        }))

        }, 1000);

        return () => clearInterval(interval);
    },[]);

  return (
    <>
        <div className=' ml-2 w-full h-[500px] px-2  flex flex-col-reverse  bg-gray-50 rounded-lg border border-black overflow-y-scroll'>
                {
                    chatMessages.map((each,index) => (
                        <ChatMessage key={index} name={each.name} message={each.message} />
                    ))
                }
        </div>
        <form className='w-full p-2 ml-2 border border-black rounded-lg' onSubmit={(e) => {
            console.log("On submit", liveMessage);
            e.preventDefault();
            dispatch(addMessage({
                name: "Revadi Sundaram",
                message: liveMessage
            }));
            setLiveMessage("");

            }}>
            <input type='text' className='px-2 w-2/3 border border-black' value={liveMessage} onChange={(e) => {
                setLiveMessage(e.target.value);
            }} />
            <button className='px-2 mx-4 bg-green-100'>Send</button>
        </form>
    </>
    
  )
}

export default LiveChat