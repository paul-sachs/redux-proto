import room from './room';

const rooms = (state=[], action) => {
  // action = { userId, }
  switch (action.type) {
    case 'SWITCH_ROOM':
      return state.map(r =>
        room(r, action)
      );
    case 'FETCH_ROOMS_SUCCEEDED':
      return action.rooms;
    default:
      return state;
  }
};

export default rooms;
