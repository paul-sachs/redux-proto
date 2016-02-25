import React, { Component } from 'react';

const Room = ({room, onClick}) => (
  <p onClick={onClick.bind(this, room.id)}> Room: {room.name}</p>
)


export default Room;
