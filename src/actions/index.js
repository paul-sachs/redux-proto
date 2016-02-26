export const switchRoom = (roomId, userId) => {
  return {
    type: 'SWITCH_ROOM',
    id: roomId,
    userId: userId
  };
};

export const fetchRoomsFailed = (error) => {
  return {
    type: 'FETCH_ROOMS_FAILED',
    error: error
  };
};

export const fetchRoomsSucceeded = (rooms) => {
  return {
    type: 'FETCH_ROOMS_SUCCEEDED',
    rooms: rooms
  };
};

export const fetchRooms = () => {
  return {
    type: 'FETCH_ROOMS'
  };
};

export const changeUserInput = (value) => {
  return {
    type: 'CHANGE_USER_INPUT',
    value: value
  };
};

export const changeCurrentUser = (userId) => {
  return {
    type: 'CHANGE_CURRENT_USER',
    userId: userId
  };
};
