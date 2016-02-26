import React, { Component } from 'react';

import Room from './room';

const Rooms = ({rooms, onRoomClick, currentUserId}) => (
  <div>
    {rooms.map((room, index)=> {
      return <Room
        key={index}
        room={room}
        currentUserId={currentUserId}
        onClick={onRoomClick}
      />
    })}
  </div>
)

export default Rooms;
