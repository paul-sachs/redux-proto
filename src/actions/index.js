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

// The following are a little beyond the norm due to how firebase does reads.

import API from '../api';

export const listenToContactChanges = () => {
  return (dispatch, getState) => {
    API.watchContacts((contacts) => {
      dispatch(replaceContacts(contacts));
    });
  };
};

export const addContact = (name) => {
  return (dispatch, getState) => {
    API.addContact(name);
  };
};

export const setAuthFromCookies = () =>{
  return (dispatch, getState) => {
    const authData = API.getAuth();
    dispatch(setLogin(authData));
  };
};
