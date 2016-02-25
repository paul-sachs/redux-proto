import React from 'react';
import { connect } from 'react-redux';
import Rooms from '../components/rooms';
import { switchRoom } from '../actions';

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRoomClick: (roomId) => {
      console.log(roomId);
      dispatch(switchRoom())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
