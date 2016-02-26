import React from 'react';
import { connect } from 'react-redux';
import Rooms from '../components/rooms';
import { switchRoom, fetchRooms } from '../actions';

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    currentUserId: state.login.currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRoomClick: (roomId, userId) => {
      dispatch(switchRoom(roomId, userId));
    },
    fetchRooms: () => {
      dispatch(fetchRooms());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
