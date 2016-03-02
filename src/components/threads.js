import React, { Component } from 'react';

const Thread = ({thread, onClick}) => (
  <div onClick={onClick.bind(this, thread.id)}>
    {thread.participants.map((p, index)=>(
      <span key={index}>{p.id}</span>
    ))}
  </div>
)

const Threads = ({threads, onCreateThread, onThreadSelected}) => (
  <div>
    <div> Threads: </div>
    {threads.map((t, index) => (
      <Thread onClick={onThreadSelected} key={index} thread={t}/>
    ))}
    <button onClick={onCreateThread}>New Thread</button>
  </div>
)

export default Threads;
