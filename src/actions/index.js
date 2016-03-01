export const login = () => {
  return {
    type: 'LOGIN'
  };
};

export const loginSucceeded = () => {
  return {
    type: 'LOGIN_SUCCEEDED'
  };
};

export const loginFailed = (reason) => {
  return {
    type: 'LOGIN_FAILED',
    reason: reason
  };
};
