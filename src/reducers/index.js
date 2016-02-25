const root = (state={}, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_USER':
    console.log('CHANGE_USER_INPUT');
    console.log(action);
      return {
        ...state,
        currentUserId: action.userId
      }
    case 'CHANGE_USER_INPUT':
      console.log('CHANGE_USER_INPUT');
      console.log(action);
      return {
        ...state,
        loginInput: action.value
      }
    default:
      return state
  }
}

export default root;
