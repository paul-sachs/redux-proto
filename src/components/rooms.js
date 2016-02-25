import React, { Component } from 'react';

import Room from './room';

const Rooms = ({rooms, onRoomClick}) => (
  <div>
    {rooms.map((room, index)=> {
      return <Room
        key={index}
        room={room}
        onClick={onRoomClick}
      />
    })}
  </div>
)

export default Rooms;
