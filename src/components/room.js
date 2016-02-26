import React, { Component } from 'react';

const Room = ({room, onClick, currentUserId}) => (
  <div>
    <p onClick={onClick.bind(this, room.id, currentUserId)}> Room: {room.name}</p>
    <div>
      {Object.keys(room.users).map((userId)=>{
        return <span key={userId}>{userId}</span>
      })}
    </div>
  </div>
)


export default Room;
