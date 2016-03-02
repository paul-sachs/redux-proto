export const login = () => {
  return {
    type: 'LOGIN'
  };
};

export const loginFailed = (reason) => {
  return {
    type: 'LOGIN_FAILED',
    reason: reason
  };
};

export const replaceContacts = (contacts) => {
  return {
    type: 'REPLACE_CONTACTS',
    value: contacts
  };
};

export const contactInputChange = (value) => {
  return {
    type: 'CONTACT_INPUT_CHANGE',
    value: value
  };
};

export const setLogin = (authData) =>{
  return {
    type: 'SET_LOGIN',
    authData: authData
  };
};

export const listenToContactChanges = () => {
  return {
    type: 'LISTEN_TO_CONTACT_CHANGES'
  };
};


export const addContact = (name) => {
  API.addContact(name);
  return {
    type: 'ADD_CONTACT',
    name: name
  };
};

export const setAuthFromCookies = () =>{
  return {
    type: 'SET_AUTH_FROM_COOKIES'
  };
};
