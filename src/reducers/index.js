import { combineReducers } from 'redux'

const contactInput = (state='', action) => {
  switch (action.type) {
    case 'CONTACT_INPUT_CHANGE':
      return action.value;
    default:
      return state;
  }
};

const messageInput = (state='', action) => {
  switch (action.type) {
    case 'MESSAGE_INPUT_CHANGE':
      return action.value;
    default:
      return state;
  }
};

export login from './login';
export threads from './threads';
export contacts from './contacts';
export {contactInput};
export {messageInput};
