import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center gap-2 text-sm shadow-md p-2'>
        <FaUserCircle size={30} />
        <p className='font-bold'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage