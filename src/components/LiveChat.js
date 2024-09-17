import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className=' ml-2 w-full h-[500px] p-2 bg-gray-50 rounded-lg border border-black'>
        <p>Top Chat</p>
        <ChatMessage />
    </div>
  )
}

export default LiveChat