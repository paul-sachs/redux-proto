import React, { Component } from 'react';

const Thread = ({thread, onAddMessageClick, messageValue, onMessageChange}) => {
  if (!thread)
    return <div>Loading...</div>;
  
  let inputNode;
  
  return <div>
    <div>Thread Participants: </div>
    {thread.participants.map((p, index)=>(
      <div key={index}>{p.id}</div>
    ))}
    <div>
      Thread Messages:
      {
        thread.messages && thread.messages.map((message, index)=>{
          return <div key={index}>
            Time: {message.timestamp}
            Message: {message.text}
            From: {message.from}
          </div>
        })
      }
    </div>
    <div>
      New message:
      <div>
        <input type='text' value={messageValue} placeholder='message' onChange={onMessageChange}/>
        <button onClick={onAddMessageClick.bind(this, messageValue, thread.id)}>
          Add Message
        </button>
      </div>
    </div>
  </div>
}

export default Thread;
