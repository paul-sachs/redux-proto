const login = (state={currentUserId: 'ted'}, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_USER':
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

export default login;
