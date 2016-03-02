const login = (state={}, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        authData: action.authData
      }
    default:
      return state
  }
}

export default login;
