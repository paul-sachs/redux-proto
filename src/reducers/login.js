const login = (state={}, action) => {
  console.log("Son of a....");
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
