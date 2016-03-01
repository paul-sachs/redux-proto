const login = (state={}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return {
        authData: action.authData
      }
    default:
      return state
  }
}

export default login;
