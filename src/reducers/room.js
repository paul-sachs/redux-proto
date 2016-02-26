const room = (state={}, action) => {
  switch (action.type) {
    case 'SWITCH_ROOM':
      let newUsers = {
        ...state.users
      };
      if (action.id == state.id){
        newUsers[action.userId] = action.userId;
      }
      else {
        // Need to remove it if we have the user.
        delete newUsers[action.userId];
      }
      return {
        ...state,
        users: newUsers
      };
    default:
      return state
  }
}


export default room;
