import React, { Component, PropTypes } from 'react';

import Room from './room';

export default class Rooms extends Component {

  static props = {
    rooms: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRoomClick: PropTypes.func,
    currentUserId: PropTypes.string,
    fetchRooms: PropTypes.func
  }

  static defaultProps = {
    onRoomClick: () => {},
    fetchRooms: () => {}
  }

  componentWillMount() {
    this.props.fetchRooms();
  }

  render() {
    const {rooms, currentUserId, onRoomClick} = this.props;
    return <div>
      {rooms.map((room, index)=> {
        return <Room
          key={index}
          room={room}
          currentUserId={currentUserId}
          onClick={onRoomClick}
        />
      })}
    </div>
  }
}
